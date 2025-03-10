/*
*     Dexter JS
*
*     Universal front end web client (javascript) integrations for
*     Dexter APIs and Workspace Interface.
*/

// Dexter Global Configuration
const dexter = {
  // State
  isLocal: window.location.hostname === '127.0.0.1',
  http: window.location.hostname === '127.0.0.1' ? 'http://127.0.0.1:8000' : 'https://easter.company',
  https: window.location.hostname === '127.0.0.1' ? 'https://127.0.0.1:8000' : 'https://easter.company',
  apiHost: window.location.hostname === '127.0.0.1' ? 'http://127.0.0.1:9500' : 'https://api.easter.company',
  wssHost: window.location.hostname === '127.0.0.1' ? 'ws://127.0.0.1:9501' : 'wss://api.easter.company/dexnet',
  isListening: false,   // is recording audio
  isSpeaking: false,    // is playing audio
  isSTTing: false,      // is waiting on speech-to-text api
  isLLMing: false,      // is waiting on llm inference api
  isTTSing: false,      // is waiting on text-to-speech api
  microphoneIsMuted: false,
  workspaceIsActive: false,
  workspaceIsChanging: false,
  workspaceIsLoaded: false,
  // User/Dexter Session
  session: null,
  // DOM Elements
  icon: document.getElementById('dexter-icon'),
  iconLogo: document.getElementById('dexter-icon-D'),
  iconSpinner: document.getElementById('dexter-icon-O'),
  rootContent: document.getElementById('main'),
  navTitle: document.getElementById('nav-title'),
  workspaceButton: document.getElementById('dexter-workspace-button'),
  chatButton: document.getElementById('dexter-chat-button'),
  voiceButton: document.getElementById('dexter-voice-button'),
  sttLoader: document.getElementById('dexter-stt-loader'),
  llmLoader: document.getElementById('dexter-llm-loader'),
  ttsLoader: document.getElementById('dexter-tts-loader'),
  waveform: document.getElementById('dexter-waveform'),
  windowsContainer: document.getElementById('windows-container'),
  reasonerWindow: document.getElementById('reasoner-window'),
  mainWindow: document.getElementById('main-window'),
  otherWindow: document.getElementById('other-window'),
};

// APIs
const defaultDexterAPIContext = () => {
  return {
    stt: () => `${dexter.apiHost}/stt`,
    llm: () => `${dexter.apiHost}/llm`,
    tts: () => `${dexter.apiHost}/tts`,
    net: () => `${dexter.wssHost}/net`
  };
};
dexter.api = defaultDexterAPIContext();

// Local Audio Context
const defaultDexterAudioContext = () => {
  return {
    recorder: null,
    chunks: null,
    context: null,
    analyser: null,
    dataArray: null,
    bufferLength: null,
    silenceThreshold: 1,
    minRecordingTime: 1750,
    silenceTimer: null,
    endTime: null,
    startTime: null,
    soundDetected: false,
  };
};
dexter.audio = defaultDexterAudioContext();

// Global Site Alerts
const highUsageError = () => alertBanner("High Traffic Warning!", "Due to a current high volume of user activity, free users may experience interruptions in service (and/or) a lower quality of service.", 10);
const lowerPowerError = () => alertBanner("Low Power:", "Due to higher than usual demand, Dexter is currently operating at one third capacity for free tier users in-order to compensate.", 10);

const dexterNewSession = async () => {
  localStorage.removeItem('dexter.localSession'); // legacy
  localStorage.removeItem('dexter.session');
  const newDeviceId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
  dexter.session = {
    clientType: 'user',
    deviceId: newDeviceId,
    chatHistory: [],
  };
  localStorage.setItem('dexter.session', JSON.stringify(dexter.session));
  return await dexterLoadSession();
}

const dexterLoadSession = async () => {
  const _localSessionStorage = localStorage.getItem('dexter.session');

  if (_localSessionStorage) {
    return JSON.parse(_localSessionStorage);
  }

  return await dexterNewSession();
}

const dexterSaveSession = async () => {
  localStorage.setItem('dexter.session', JSON.stringify(dexter.session));
  return await dexterLoadSession();
}

dexterLoadSession().then((sessionData) => dexter.session = sessionData);

const updateDexterSessionChatHistory = async (role, content) => {
  dexter.session.chatHistory.push({ role: role, content: content });

  if (dexter.session.chatHistory.length > 6) {
    dexter.session.chatHistory = dexter.session.chatHistory.slice(-6);
  }

  await dexterSaveSession();
  addMessage(role, content);
}

const exitDexterWorkspace = async () => {
  if (dexter.workspaceIsChanging) {
    return;
  };
  dexter.workspaceIsChanging = true;
  dexter.isListening = false;
  dexter.isSpeaking = false;
  dexter.audio = {
    recorder: null,
    chunks: null,
    context: null,
    analyser: null,
    dataArray: null,
    bufferLength: null,
    silenceThreshold: 1,
    minRecordingTime: 1750,
    silenceTimer: null,
    endTime: null,
    startTime: null,
    soundDetected: false,
  };
  hide(dexter.reasonerWindow);
  hide(dexter.otherWindow);
  hide(dexter.mainWindow);
  unmuteDexter(false);
  dexterStopListening();
  disable(dexter.icon)
  disable(dexter.iconSpinner)

  await sleep(250);
  hide(dexter.windowsContainer);
  await sleep(250);
  show(dexter.chatButton);
  show(dexter.navTitle);
  add(dexter.rootContent);
  await sleep(250);

  show(dexter.rootContent);
  dexter.workspaceIsActive = false;
  dexter.workspaceIsChanging = false;
  return;
}

const enterDexterWorkspace = async () => {
  if (dexter.workspaceIsChanging) {
    return;
  };
  activate(dexter.icon);
  activate(dexter.iconSpinner);
  hide(dexter.rootContent);
  await sleep(250);

  remove(dexter.rootContent);
  hide(dexter.chatButton);
  hide(dexter.navTitle);
  await sleep(250);

  show(dexter.windowsContainer);
  dexter.workspaceIsActive = true;
  await sleep(250);
  unmuteDexter(true);

  show(dexter.reasonerWindow, 1);
  show(dexter.otherWindow, 1);
  show(dexter.mainWindow, 1);

  setTimeout(() => {
    windows.forEach(windowElement => {
      hideLoadingSpinner(windowElement);
    });
    dexter.workspaceIsChanging = false;
    dexter.workspaceIsLoaded = true;
  }, 1500);
  return;
}

const toggleDexterWorkspace = async () => {
  if (dexter.workspaceIsActive) {
    await exitDexterWorkspace();
  } else {
    highUsageError();
    return await enterDexterWorkspace();
  }
};

if (dexter.icon) {
  dexter.icon.addEventListener('click', toggleDexterWorkspace);
}

const toggleDexterChat = async () => {
  if (dexter.mainWindow && !dexter.workspaceIsActive && !dexter.workspaceIsChanging) {
    if (dexter.mainWindow.classList.contains('hide') || dexter.windowsContainer.classList.contains('hide')) {
      hide(dexter.reasonerWindow);
      hide(dexter.otherWindow);
      show(dexter.windowsContainer);
      await sleep(250);
      show(dexter.mainWindow);
      setTimeout(() => {
        hideLoadingSpinner(dexter.mainWindow);
      }, 1500);
    } else {
      hide(dexter.reasonerWindow);
      hide(dexter.otherWindow);
      hide(dexter.mainWindow);
      await sleep(250);
      hide(dexter.windowsContainer);
    }
  }
};

if (dexter.chatButton) {
  dexter.chatButton.addEventListener('click', toggleDexterChat);
}

const drawDexterWaveform = async () => {
  if (!dexter.isListening && !dexter.isSpeaking) {
    return;
  }

  const canvasCtx = dexter.waveform.getContext('2d');
  const navContainer = document.getElementById('nav-container');

  dexter.iconSpinner.style.borderColor = dexter.isSpeaking ? '#f99' : '#99f';
  dexter.waveform.width = navContainer.offsetWidth;
  dexter.waveform.height = navContainer.offsetHeight;
  canvasCtx.clearRect(0, 0, dexter.waveform.width, dexter.waveform.height);

  let x = 0;
  const barWidth = dexter.waveform.width / dexter.audio.bufferLength;
  for (let i = 0; i < dexter.audio.bufferLength; i++) {
    if (!dexter.isListening && !dexter.isSpeaking) {
      return;
    }
    const barHeight = (dexter.audio.dataArray[i] / 255) * dexter.waveform.height * 2;
    canvasCtx.fillStyle = dexter.isSpeaking ? '#f0831966' : '#1976ed66';
    canvasCtx.fillRect(x, dexter.waveform.height - barHeight / 2, barWidth, barHeight);
    x += barWidth;
  }
}

async function dexterCheckSilence() {

  function analyzeAudio() {
    dexter.audio.analyser.getByteTimeDomainData(dexter.audio.dataArray);
    let sum = 0;
    for (let i = 0; i < dexter.audio.bufferLength; i++) {
      sum += Math.abs(dexter.audio.dataArray[i] - 128);
    }
    return sum / dexter.audio.bufferLength;
  }

  function handleSilence(average) {
    if (average <= dexter.audio.silenceThreshold) {
      if (!dexter.audio.silenceTimer) {
        dexter.audio.silenceTimer = setTimeout(() => {
          return dexter.audio.recorder.stop();
        }, dexter.audio.silenceThreshold * 1000);
      }
    } else {
      clearTimeout(dexter.audio.silenceTimer);
      dexter.audio.silenceTimer = null;
      dexter.audio.endTime = new Date().getTime();
    }
  }

  function handleTimeout() {
    if (new Date().getTime() - dexter.audio.startTime > (20 * 1000)) {
      clearTimeout(dexter.audio.silenceTimer);
      return dexter.audio.recorder.stop();
    }
  }

  function monitorAudio() {
    const average = analyzeAudio();
    drawDexterWaveform();
    const currentTime = new Date().getTime();
    if (!dexter.audio.soundDetected) {
      if (average > dexter.audio.silenceThreshold) {
        dexter.audio.soundDetected = true;
        if (!dexter.audio.startTime) dexter.audio.startTime = currentTime;
        dexter.audio.endTime = currentTime;
      }
    } else {
      const recordingDuration = currentTime - dexter.audio.startTime;
      if (!dexter.isSpeaking) {
        if (recordingDuration > dexter.audio.minRecordingTime) {
          handleSilence(average);
        }
        handleTimeout();
      }
    }
  }
  monitorAudio();
  const intervalId = setInterval(() => {
    if (dexter.isListening || dexter.isSpeaking) {
      monitorAudio();
    } else {
      clearInterval(intervalId);
    }
  }, 12.5);
}

async function dexterStartListening() {
  dexter.isListening = true;
  dexter.audio.silenceThreshold = 0.99;
  dexter.audio.minRecordingTime = 2000;
  dexter.voiceButton.classList.add('recording');
  dexter.waveform.style.display = "block";
  dexter.waveform.style.opacity = 1;
  dexter.audio.context = new AudioContext();
  dexter.audio.analyser = dexter.audio.context.createAnalyser();
  dexter.audio.bufferLength = dexter.audio.analyser.frequencyBinCount;
  dexter.audio.dataArray = new Uint8Array(dexter.audio.bufferLength);
  dexter.audio.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  dexter.audio.chunks = new Array();
  dexter.audio.recorder = new MediaRecorder(dexter.audio.stream);
  dexter.audio.recorder.addEventListener("stop", async () => {
    dexter.isListening = false;
    if (!dexter.microphoneIsMuted) {
      await dexterProcessAudio()
    }
  });
  dexter.audio.recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      const _dateTimeStamp = new Date().getTime();
      if (_dateTimeStamp > dexter.audio.startTime) dexter.audio.chunks.push({
        data: event.data,
        timestamp: _dateTimeStamp,
      });
    }
  };
  dexter.audio.recorder.start();
  dexter.audio.source = dexter.audio.context.createMediaStreamSource(dexter.audio.stream);
  dexter.audio.source.connect(dexter.audio.analyser);
  dexter.audio.startTime = null;
  dexter.audio.endTime = null;
  dexter.audio.soundDetected = false;
  dexter.audio.silenceTimer = null;
  dexter.audio.filteredChunks = null;
  return dexterCheckSilence();
}

async function dexterStopListening() {
  dexter.isListening = false;
  dexter.voiceButton.classList.remove('recording');
  dexter.waveform.style.display = "none";
  dexter.waveform.style.opacity = 0;
  if (dexter.audio.recorder) {
    dexter.audio.recorder.stop();
  }
}

async function toggleDexterListening() {
  if (dexter.isListening) {
    await dexterStopListening();
  } else {
    await dexterStartListening();
  }
}

async function muteDexter() {
  if (dexter.isListening) {
    await dexterStopListening();
  }
  dexter.microphoneIsMuted = true;
  dexter.voiceButton.classList.remove('recording');
  dexter.voiceButton.classList.add('muted');
  return;
};

async function unmuteDexter(startRecording = false) {
  dexter.microphoneIsMuted = false;
  dexter.voiceButton.classList.remove('muted');
  if (dexter.workspaceIsActive) {
    dexter.voiceButton.classList.add('recording');
    if (startRecording) {
      return await dexterStartListening();
    }
  }
  return;
};

async function toggleDexterMute() {
  if (dexter.microphoneIsMuted) {
    return await unmuteDexter();
  } else {
    return await muteDexter();
  }
};

async function toggleDexterVoiceInterface() {
  if (dexter.workspaceIsActive) {
    return await toggleDexterMute();
  } else {
    highUsageError();
    return await toggleDexterListening();
  }
};

if (dexter.voiceButton) {
  dexter.voiceButton.addEventListener('click', async () => await toggleDexterVoiceInterface());
}

async function toggleProcessLoader(state, el, callbackFunc) {
  if (state) {
    add(el);
    await sleep(250);
    show(el);
  } else {
    hide(el);
    await sleep(999);
    remove(el);
  }
  return callbackFunc ? await callbackFunc() : null;
}

async function processLoaderStepFunction() {
  toggleProcessLoader(dexter.isSTTing, dexter.sttLoader, async () => {
    if (dexter.isSTTing && !dexter.isLLMing && !dexter.isTTSing) {
      dexter.iconSpinner.style.color = '#66f';
      dexter.iconLogo.style.color = '#66f';
    }
  });
  toggleProcessLoader(dexter.isLLMing, dexter.llmLoader, async () => {
    if (dexter.isLLMing && !dexter.isTTSing) {
      dexter.iconSpinner.style.color = '#6f6';
      dexter.iconLogo.style.color = '#6f6';
    }
  });
  toggleProcessLoader(dexter.isTTSing, dexter.ttsLoader, async () => {
    if (dexter.isTTSing) {
      dexter.iconSpinner.style.color = '#f08319';
      dexter.iconLogo.style.color = '#f08319';
    }
  });
  if (!dexter.isSTTing && !dexter.isLLMing && !dexter.isTTSing) {
    if (dexter.workspaceIsActive) {
      dexter.iconSpinner.style.color = '#fff'
      dexter.iconLogo.style.color = '#fff';
    } else {
      dexter.iconSpinner.style.color = '#fff'
      dexter.iconLogo.style.color = '#66f';
    }
  }
}

step.add(processLoaderStepFunction);

async function dexterSpeechRecognitionAPI(formData) {
  try {
    if (dexter.workspaceIsActive) {
      dexterStartListening();
    }

    const sttResponse = await fetch(dexter.api.stt(), {
      method: 'POST',
      body: formData,
    });

    const sttData = await sttResponse.json();
    if (sttData.text && sttData.language === 'en' && sttData.text !== "") {
      updateDexterSessionChatHistory('user', sttData.text);
    }
  } catch (e) {
    console.error(e);
  }
  dexter.isSTTing = false;
}

async function dexterProcessAudio() {
  try {
    dexter.isSTTing = true;
    const blobParts = dexter.audio.chunks.map((chunk) => chunk.data);
    const audioBlob = new Blob(blobParts, { type: "audio/wav" });
    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.wav");
    await dexterSpeechRecognitionAPI(formData);
  } catch (e) {
    console.error(e);
  }
}

//sendMessageToDexnet()
//while (session.history[session.history.length - 1].role === "user") {
//await sleep(33);
//}
/*
const speakResponse = await fetch(ttsAPI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: dexter.session.chatHistory[dexter.session.chatHistory.length - 1].content
  }),
});

const audioBytes = await speakResponse.arrayBuffer();
dexter.audioContext.decodeAudioData(audioBytes, function (buffer) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(analyser);
  source.connect(audioContext.destination);
  source.start(0);
  dexter.isListening = true;
  dexter.waveform.style.display = "block";
  dexter.waveform.style.opacity = 1;
  checkSilence(true);
  source.onended = () => {
    dexter.isListening = false;
    dexter.waveform.style.display = "none";
    dexter.waveform.style.opacity = 0;
  };
});
*/
