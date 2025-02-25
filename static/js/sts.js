const isLocal = window.location.hostname === 'localhost'
const baseUrl = isLocal ? 'http://localhost' : 'https://api.easter.company';
const transcriptionAPI = isLocal ? `${baseUrl}:9500/transcribe` : `${baseUrl}/transcribe`;
const promptAPI = isLocal ? `${baseUrl}:9501/prompt` : `${baseUrl}/prompt`;
const ttsAPI = isLocal ? `${baseUrl}:9502/tts` : `${baseUrl}/tts`;

let mediaRecorder = null;
let isRecording = false;
let audioContext, analyser, dataArray, bufferLength;

async function recordAndPrepareAudio() {
  try {
    if (isRecording) {
      console.log("Stopping recording...");
      const recordButton = document.getElementById('recordButton');
      const waveform = document.getElementById('waveform');
      recordButton.classList.remove('recording');
      waveform.style.display = "none";
      waveform.style.opacity = 0;

      mediaRecorder.stop();
      isRecording = false;
      return;
    }

    console.log("Starting recording...");
    recordButton.classList.add('recording');
    waveform.style.display = "block";
    waveform.style.opacity = 1;
    isRecording = true;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    const audioChunks = new Array();

    mediaRecorder.addEventListener("dataavailable", event => {
      console.log("Data available:", event.data);
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      console.log("Recording stopped.");
      recordButton.classList.remove('recording');
      waveform.style.display = "none";
      waveform.style.opacity = 0;
      isRecording = false;

      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.wav");

      async function processAudio(formData) {
        try {
          const transcriptionResponse = await fetch(transcriptionAPI, {
            method: 'POST',
            body: formData
          });
          const transcriptionData = await transcriptionResponse.json();
          console.log('Transcription API:', transcriptionData);

          const llmResponse = await fetch(promptAPI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: transcriptionData.text })
          });
          const llmData = await llmResponse.json();
          console.log('LLM response:', llmData.response);

          const speakResponse = await fetch(ttsAPI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: llmData.response })
          });
          const audioBlob = await speakResponse.blob();
          console.log('TTS response:', audioBlob);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.play();

        } catch (error) {
          console.error('Error:', error);
        }
      }
      processAudio(formData)
    });

    mediaRecorder.start();

    let silenceTimer = null;
    const silenceThreshold = 1;
    let lastSoundTime = new Date().getTime();
    const minRecordingTime = 3000;
    let recordingStartTime = new Date().getTime();

    // Initialize audioContext, analyser, etc. only once
    if (!audioContext) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
    }

    let noiseLevel = 0;
    let noiseBuffer = 100
    for (let i = 0; i < noiseBuffer; i++) {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let j = 0; j < bufferLength; j++) {
        sum += Math.abs(dataArray[j] - 128);
      }
      noiseLevel += sum / bufferLength;
    }
    noiseLevel /= noiseBuffer;
    const noiseThreshold = noiseLevel + 5;

    function checkSilence() {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += Math.abs(dataArray[i] - 128);
      }
      const average = sum / bufferLength;

      const currentTime = new Date().getTime();
      const recordingDuration = currentTime - recordingStartTime;

      if (average < noiseThreshold && recordingDuration > minRecordingTime) {
        if (!silenceTimer) {
          silenceTimer = setTimeout(() => {
            mediaRecorder.stop();
          }, silenceThreshold * 1000);
        }
      } else {
        clearTimeout(silenceTimer);
        silenceTimer = null;
        lastSoundTime = new Date().getTime();
      }

      if (new Date().getTime() - lastSoundTime > 10 * 1000) {
        clearTimeout(silenceTimer);
        mediaRecorder.stop();
      }

      if (isRecording) {
        drawWaveform(average);
        requestAnimationFrame(checkSilence);
      }
    }

    requestAnimationFrame(checkSilence);

  } catch (error) {
    console.error("Error accessing microphone:", error);
    isRecording = false;
  }
}

function drawWaveform(level) {
  const canvas = document.getElementById('waveform');
  const canvasCtx = canvas.getContext('2d');

  const navContainer = document.getElementById('nav-container');
  canvas.width = navContainer.offsetWidth;
  canvas.height = navContainer.offsetHeight;

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = canvas.width / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] / 255) * canvas.height * 2;
    canvasCtx.fillStyle = 'rgba(65, 136, 255, 0.2)';
    canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
    x += barWidth;
  }

  // Draw a line for the average level
  const averageBarHeight = (level / 255) * canvas.height * 2;
  canvasCtx.fillStyle = '#dadada00';
  canvasCtx.fillRect(0, canvas.height - averageBarHeight / 2, canvas.width, 2);
}
