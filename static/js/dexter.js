/*
 *  static/js/dexter.js
 *
 *  Handles all of Dexter's web integrations.
 *
 */
const isLocal = window.location.hostname === '127.0.0.1';
const baseUrl = isLocal ? 'http://127.0.0.1' : 'https://api.easter.company';
const transcriptionAPI = isLocal ? `${baseUrl}:9500/transcribe` : `${baseUrl}/transcribe`;
const promptAPI = isLocal ? `${baseUrl}:9501/prompt` : `${baseUrl}/prompt`;
const ttsAPI = isLocal ? `${baseUrl}:9502/tts` : `${baseUrl}/tts`;

const recordButton = document.getElementById('recordButton');
const waveform = document.getElementById('waveform');

let mediaRecorder = null;
let audioChunks = new Array();
let isRecording = false;
let audioContext, analyser, dataArray, bufferLength;

// Initialize audio context and analyser
function initializeAudioContext() {
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
}

// Function to start or stop recording
async function toggleRecording() {
  try {
    if (isRecording) {
      stopRecording();
      return;
    }

    startRecording();

  } catch (error) {
    console.error("Error accessing microphone:", error);
    isRecording = false;
  }
}

// Function to start recording
async function startRecording() {
  console.log("Starting recording...");
  recordButton.classList.add('recording');
  waveform.style.display = "block";
  waveform.style.opacity = 1;
  isRecording = true;

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  audioChunks = new Array(); // Reset audioChunks

  mediaRecorder.addEventListener("dataavailable", event => {
    console.log("Data available:", event.data);
    audioChunks.push(event.data);
  });

  mediaRecorder.addEventListener("stop", handleRecordingStop);
  mediaRecorder.start();

  // Initialize audioContext and analyser only once
  if (!audioContext) {
    initializeAudioContext();
  }

  // Connect the user's microphone to the analyser
  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  // Start checking for silence and drawing the waveform
  checkSilence();
}

// Function to stop recording
function stopRecording() {
  console.log("Stopping recording...");

  // Check if mediaRecorder is not null before stopping it
  if (mediaRecorder) {
    mediaRecorder.stop();
  }

  recordButton.classList.remove('recording');
  waveform.style.display = "none";
  waveform.style.opacity = 0;
  isRecording = false;
}

// Function to handle the recording stop event
function handleRecordingStop() {
  console.log("Recording stopped.");
  isRecording = false;

  const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
  const formData = new FormData();
  formData.append("audio", audioBlob, "recording.wav");

  processAudio(formData);
}

// Function to process the recorded audio
async function processAudio(formData) {
  recordButton.classList.remove("bx-microphone");
  recordButton.classList.add("bx-loader", "spin");

  try {
    const transcriptionResponse = await fetch(transcriptionAPI, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });
    const transcriptionData = await transcriptionResponse.json();
    console.log('Transcription API:', transcriptionData);

    const llmResponse = await fetch(promptAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: transcriptionData.text }),
    });
    const llmData = await llmResponse.json();
    console.log('LLM response:', llmData.response);

    const speakResponse = await fetch(ttsAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: llmData.response }),
    });

    // Get the audio as a byte array
    const audioBytes = await speakResponse.arrayBuffer();
    console.log('TTS response (bytes):', audioBytes);

    // Decode the audio data
    audioContext.decodeAudioData(audioBytes, function (buffer) {
      // Create an audio source node
      const source = audioContext.createBufferSource();
      source.buffer = buffer;

      // Connect the source to the analyser and destination (output)
      source.connect(analyser);
      source.connect(audioContext.destination);

      // Start the audio playback
      source.start(0);

      // Trigger waveform visualization for Dexter's response
      isRecording = true;
      waveform.style.display = "block";
      waveform.style.opacity = 1;
      checkSilence(true); // Dexter is speaking

      // Stop waveform visualization and reset isRecording when Dexter finishes speaking
      source.onended = () => {
        isRecording = false;
        waveform.style.display = "none";
        waveform.style.opacity = 0;
      };
    }, function (e) {
      console.error('Error decoding audio data:', e);
    });
  } catch (error) {
    console.error('Error:', error);
  }

  recordButton.classList.remove("bx-loader", "spin");
  recordButton.classList.add("bx-microphone");
}

// Function to check for silence and draw the waveform
function checkSilence(isDexterSpeaking = false) {
  let silenceTimer = null;
  const silenceThreshold = 1; // Adjust as needed
  let lastSoundTime = new Date().getTime();
  const minRecordingTime = 3000; // Adjust as needed
  let recordingStartTime = new Date().getTime();

  function monitorSilence() {
    analyser.getByteTimeDomainData(dataArray);
    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += Math.abs(dataArray[i] - 128);
    }
    const average = sum / bufferLength;
    drawWaveform(average, isDexterSpeaking);

    const currentTime = new Date().getTime();
    const recordingDuration = currentTime - recordingStartTime;

    // Silence detection only for user input
    if (!isDexterSpeaking) {
      if (average < silenceThreshold && recordingDuration > minRecordingTime) {
        if (!silenceTimer) {
          silenceTimer = setTimeout(() => {
            stopRecording(); // Stop recording after a period of silence
          }, silenceThreshold * 1000);
        }
      } else {
        clearTimeout(silenceTimer);
        silenceTimer = null;
        lastSoundTime = new Date().getTime();
      }

      // Stop recording if no sound for an extended period
      if (new Date().getTime() - lastSoundTime > 10 * 1000) {
        clearTimeout(silenceTimer);
        stopRecording();
      }
    }

    if (isRecording) {
      requestAnimationFrame(() => monitorSilence());
    }
  }

  monitorSilence();
}

// Function to draw the waveform
function drawWaveform(level, isDexterSpeaking) {
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

    // Use different colors for user and Dexter
    canvasCtx.fillStyle = isDexterSpeaking ? 'rgba(255, 165, 0, 0.2)' : 'rgba(65, 136, 255, 0.2)';
    canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
    x += barWidth;
  }

  // Draw a line for the average level
  const averageBarHeight = (level / 255) * canvas.height * 2;
  canvasCtx.fillStyle = '#dadada33';
  canvasCtx.fillRect(0, canvas.height - averageBarHeight / 2, canvas.width, 2);
}

// Add event listener to the record button
recordButton.addEventListener('click', toggleRecording);
