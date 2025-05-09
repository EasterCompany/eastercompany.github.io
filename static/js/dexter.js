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
  session: {
    clientType: 'user',
    deviceId: null,
    chatHistory: [],
    userNotes: "Nothing of note, yet.",
  },
  // DOM Elements
  nav: document.getElementById('nav-container'),
  icon: document.getElementById('dexter-icon'),
  iconLogo: document.getElementById('dexter-icon-D'),
  iconSpinner: document.getElementById('dexter-icon-O'),
  bodyContent: document.getElementsByTagName('body')[0],
  rootContent: document.getElementById('main'),
  navTitle: document.getElementById('nav-title'),
  workspaceButton: document.getElementById('dexter-workspace-button'),
  webButton: document.getElementById('dexter-web-button'),
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
  userNotes: document.getElementById('dexter-user-notes'),
};

// APIs
const defaultDexterAPIContext = () => {
  return {
    stt: () => `${dexter.apiHost}/stt`,
    chat: () => `${dexter.apiHost}/net/chat`,
    userNotes: () => `${dexter.apiHost}/net/user_notes`,
    tts: () => `${dexter.apiHost}/tts`,
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

const highUsageError = () => alertBanner("High Traffic Warning!", "Due to a current high volume of user activity, free users may experience interruptions in service (and/or) a lower quality of service.", 10);
const lowerPowerError = () => alertBanner("Low Power:", "Due to higher than usual demand, Dexter is currently operating at one third capacity for free tier users in-order to compensate.", 10);

const displayMarkdown = (markdownText, containerId) => {
  const html = marked.parse(markdownText);
  document.getElementById(containerId).innerHTML = html;
}

const dexterNewSession = async () => {
  localStorage.removeItem('dexter.localSession');
  localStorage.removeItem('dexter.session');
  const newDeviceId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
  dexter.session = {
    clientType: 'user',
    deviceId: newDeviceId,
    chatHistory: [],
    userNotes: "Nothing of note, yet.",
  };
  localStorage.setItem('dexter.session', JSON.stringify(dexter.session));
  return await dexterLoadSession();
};

const dexterLoadSession = async () => {
  const _localSessionStorage = localStorage.getItem('dexter.session');
  if (_localSessionStorage) {
    return JSON.parse(_localSessionStorage);
  }
  return await dexterNewSession();
};

const dexterSaveSession = async () => {
  localStorage.setItem('dexter.session', JSON.stringify(dexter.session));
  return await dexterLoadSession();
};

dexterLoadSession().then((sessionData) => {
  dexter.session = sessionData;
  dexter.session.chatHistory.forEach(x => addMessage(x.role, x.content));
  displayMarkdown(dexter.session.userNotes, 'dexter-user-notes');
});

const endDexterOfTransaction = () => {
  dexter.isListening = false;
  dexter.isSpeaking = false;
  dexter.isSTTing = false;
  dexter.isLLMing = false;
  dexter.isTTSing = false;
  dexter.waveform.style.display = "none";
  dexter.waveform.style.opacity = 0;
  if (!dexter.isListening && !dexter.isSpeaking && !dexter.isSTTing && !dexter.isLLMing && !dexter.isTTSing && dexter.workspaceIsActive) {
    dexterStartListening();
  }
  if (!dexter.workspaceIsActive) {
    dexter.voiceButton.classList.remove("recording");
  }
}

const dexterSTTAPI = async (formData) => {
  dexter.isSTTing = true;
  try {
    const sttResponse = await fetch(dexter.api.stt(), {
      method: 'POST',
      body: formData,
    });

    const sttData = await sttResponse.json();
    if (sttData.stt) {
      dexter.isSTTing = false;
      updateDexterSessionChatHistory('user', sttData.stt);
    }

  } catch (e) {
    console.error("Transcription Error:", e);
    endDexterOfTransaction();
  }
};

const dexterUserNotesAPI = async () => {
  dexter.isLLMing = true;
  try {
    const response = await fetch(dexter.api.userNotes(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: dexter.session
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return console.error({
        error: {
          status: response.status,
          message: response.statusText,
          details: errorData
        }
      });
    }

    const responseJson = await response.json();
    if (!responseJson.error) {
      dexter.session.userNotes = responseJson.response;
      displayMarkdown(dexter.session.userNotes, 'dexter-user-notes');
    }
  } catch (e) {
    console.error(e);
  }
  dexter.isLLMing = false;
};

const dexterChatAPI = async () => {
  dexter.isLLMing = true;
  try {
    const response = await fetch(dexter.api.chat(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: dexter.session
      }),
    });
    if (!response.ok) {
      endDexterOfTransaction();
      const errorData = await response.json();
      return {
        error: {
          status: response.status,
          message: response.statusText,
          details: errorData
        }
      };
    }
    dexter.isLLMing = false;
    return response.json()
  } catch {
    endDexterOfTransaction();
  }
};

const dexterTTSAPI = async (message) => {
  dexter.isTTSing = true;
  dexter.isSpeaking = true;

  try {
    const speakResponse = await fetch(dexter.api.tts(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tts: message
      }),
    });
    dexter.isTTSing = false;

    if (!speakResponse.ok) {
      return;
    }

    const audioBytes = await speakResponse.arrayBuffer();
    dexter.audio.context.decodeAudioData(audioBytes, function (buffer) {
      const source = dexter.audio.context.createBufferSource();
      source.buffer = buffer;
      source.connect(dexter.audio.analyser);
      source.connect(dexter.audio.context.destination);
      source.start(0);
      dexter.waveform.style.display = "block";
      dexter.waveform.style.opacity = 1;
      dexterCheckSilence(true);
      source.onended = () => {
        endDexterOfTransaction();
      };
    });
  } catch (e) {
    endDexterOfTransaction();
    console.error(e);
  }
}

const updateDexterSessionChatHistory = async (role, content) => {
  dexter.session.chatHistory.push({ role: role, content: content });

  if (dexter.session.chatHistory.length > 6) {
    dexter.session.chatHistory = dexter.session.chatHistory.slice(-6);
  }

  if (role.toLowerCase() == "assistant" || role.toLowerCase() == "system") {
    await dexterSaveSession();
  }
  addMessage(role, content);

  if (role.toLowerCase() === "user") {
    if (!dexter.isLLMing) {
      dexterUserNotesAPI();
      const llmResponse = await dexterChatAPI();
      if (llmResponse === null) {
        updateDexterSessionChatHistory("system", "INTERNAL SERVER ERROR");
        return;
      } else if (llmResponse.error !== undefined) {
        updateDexterSessionChatHistory("system", llmResponse.error.message);
        return;
      } else if (llmResponse.llm) {
        updateDexterSessionChatHistory("assistant", llmResponse.llm);
        return;
      }
    } else {
      console.log("Dexter is busy...");
    }
  } else if (role.toLowerCase() === "assistant") {
    await dexterTTSAPI(content);
    return;
  }
};

const exitDexterWorkspace = async () => {
  if (dexter.workspaceIsChanging) {
    return;
  };
  dexter.workspaceIsChanging = true;
  document.exitFullscreen();
  if (dexter.audio.recorder) {
    dexter.audio.recorder.stop();
  }
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
  endDexterOfTransaction();
  return;
}

const enterDexterWorkspace = async () => {
  if (dexter.workspaceIsChanging) {
    return;
  };
  dexter.nav.style.background = ``;
  dexter.mainWindow.style.background = ``;
  dexter.workspaceIsChanging = true;
  document.body.requestFullscreen();

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

if (dexter.webButton) {
  dexter.webButton.addEventListener('click', toggleDexterWorkspace);
}

const toggleDexterChat = async () => {
  if (dexter.mainWindow && !dexter.workspaceIsActive && !dexter.workspaceIsChanging) {
    if (dexter.mainWindow.classList.contains('hide') || dexter.windowsContainer.classList.contains('hide')) {
      hide(dexter.reasonerWindow);
      hide(dexter.otherWindow);
      show(dexter.windowsContainer);
      await sleep(250);
      show(dexter.mainWindow);
      dexter.nav.style.background = `rgba(20,20,29,0.95)`;
      dexter.mainWindow.style.background = `rgba(20,20,29,0.95)`;
      setTimeout(() => {
        hideLoadingSpinner(dexter.mainWindow);
      }, 1500);
    } else {
      dexter.nav.style.background = ``;
      dexter.mainWindow.style.background = ``;
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
    if (!dexter.audio.analyser) return 0;
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
  if (dexter.workspaceIsActive && !dexter.microphoneIsMuted) {
    dexter.voiceButton.classList.add('recording');
  }
  dexter.isListening = true;
  dexter.audio.silenceThreshold = 0.99;
  dexter.audio.minRecordingTime = 2000;
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
    dexter.voiceButton.classList.remove('recording');
    dexter.waveform.style.display = "none";
    dexter.waveform.style.opacity = 0;
    dexter.audio.soundDetected = false;
    dexter.isListening = false;
    dexterProcessAudio()
  });
  dexter.audio.recorder.ondataavailable = (event) => {
    if (event.data.size > 0 && !dexter.microphoneIsMuted) {
      const _dateTimeStamp = new Date().getTime();
      if (_dateTimeStamp > dexter.audio.startTime) {
        if (dexter.audio.chunks) dexter.audio.chunks.push({
          data: event.data,
          timestamp: _dateTimeStamp,
        });
      }
    }
  };
  if (dexter.microphoneIsMuted) {
    return;
  }
  dexter.audio.recorder.start();
  dexter.audio.source = dexter.audio.context.createMediaStreamSource(dexter.audio.stream);
  dexter.audio.source.connect(dexter.audio.analyser);
  dexter.audio.startTime = null;
  dexter.audio.endTime = null;
  dexter.audio.soundDetected = false;
  dexter.audio.silenceTimer = null;
  dexter.audio.filteredChunks = new Array();
  return dexterCheckSilence();
};

async function dexterStopListening() {
  if (dexter.audio.recorder) {
    dexter.audio.recorder.stop();
  }
};

async function toggleDexterListening() {
  if (dexter.isListening) {
    await dexterStopListening();
  } else {
    await dexterStartListening();
  }
};

async function muteDexter() {
  dexter.microphoneIsMuted = true;
  dexter.voiceButton.classList.remove('recording');
  dexter.voiceButton.classList.remove('bx-microphone');
  dexter.voiceButton.classList.add('muted');
  dexter.voiceButton.classList.add('bx-microphone-off');
  return;
};

async function unmuteDexter(startRecording = false) {
  dexter.microphoneIsMuted = false;
  dexter.voiceButton.classList.remove('muted');
  dexter.voiceButton.classList.remove('bx-microphone-off');
  dexter.voiceButton.classList.add('bx-microphone');
  if (dexter.workspaceIsActive) {
    dexter.voiceButton.classList.add('recording');
    if (startRecording && !dexter.isSTTing && !dexter.isLLMing && !dexter.isTTSing) {
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

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    updateDexterSessionChatHistory('user', messageText);
    messageInput.value = '';
  }
});

async function dexterProcessAudio() {
  try {
    const blobParts = dexter.audio.chunks.map((chunk) => chunk.data);
    const audioBlob = new Blob(blobParts, { type: "audio/wav" });
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.wav");
    dexterSTTAPI(formData);
  } catch (e) {
    console.error(e);
  }
}

async function toggleProcessLoader(state, el, callbackFunc) {
  if (state && (el.classList.contains('hide') || el.classList.contains('remove'))) {
    add(el);
    show(el);
  } else if (!state) {
    hide(el);
    remove(el);
  }
  return callbackFunc ? await callbackFunc() : null;
}

async function processLoaderStepFunction() {
  if (dexter.microphoneIsMuted && dexter.isListening) {
    dexter.isListening = false;
  }
  if (!dexter.windowsContainer.classList.contains("hide") && !dexter.windowsContainer.classList.contains("remove")) {
    dexter.bodyContent.style.overflowY = "hidden";
  } else {
    dexter.bodyContent.style.overflowY = "auto";
  }
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
    if (!dexter.isListening && !dexter.isSpeaking && dexter.workspaceIsActive && !dexter.microphoneIsMuted) {
      dexterStartListening();
    }
  }
}

step.add(processLoaderStepFunction);

