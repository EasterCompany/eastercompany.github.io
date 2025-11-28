import React, { useState, useEffect, useRef } from 'react';

type ChatState = 'idle' | 'listening' | 'processing' | 'thinking' | 'speaking';

const convertToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const STTTransaction = async (audioBlob: any) => {
  convertToBase64(audioBlob).then(base64Data => {
    fetch("https://api.easter.company/enet/new_transaction", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: window.localStorage.getItem('eid'),
        type: 'STT',
        data: base64Data
      }),
    }).then(r => r.json()).then(json => {
      fetch("https://api.easter.company/enet/await_transaction", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json),
      }).then(r => r.json()).then(json => {
        if (json.status === "completed" && json.data) {
          const newLog = {
            sender: "user",
            message: json.data
          };
          const localChatLog = JSON.parse(window.localStorage.getItem('chatLog') || "[]")
          localChatLog.push(newLog);
          window.localStorage.setItem('chatLog', JSON.stringify(localChatLog))
        }
      });
    });
  });
  return {
    sender: "user",
    message: "",
  };
};

const LLMTransaction = async (chatLog: any) => {
  fetch("https://api.easter.company/enet/new_transaction", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      origin: window.localStorage.getItem('eid'),
      type: 'LLM',
      data: chatLog
    }),
  }).then(r => r.json()).then(json => {
    fetch("https://api.easter.company/enet/await_transaction", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json),
    }).then(r => r.json()).then(json => {
      if (json.status === "completed" && json.data) {
        const newLog = {
          sender: "dexter",
          message: json.data
        };
        const localChatLog = JSON.parse(window.localStorage.getItem('chatLog') || "[]")
        localChatLog.push(newLog);
        window.localStorage.setItem('chatLog', JSON.stringify(localChatLog))
        return newLog
      }
    });
  });
  return {
    sender: "dexter",
    message: ""
  }
};

const TTSTransaction = async (response: { sender: string, message: string }) => {
  return response;
};

const StateIndicatorText = ({ state }) => {
  return <h2 style={{
    textAlign: "center",
    color: "#dadada66",
    fontSize: "16px",
    padding: "unset",
    margin: "32px auto auto auto"
  }}>{state}{state !== "idle" ? `...` : ``}</h2>
}

const IdleIndicator = ({ onClick }: any) => {
  return <i
    className="bx bx-microphone idle-indicator"
    style={{ margin: '0 auto 0 auto', fontSize: '128px' }}
    onClick={onClick}
  ></i>
}

const ListeningIndicator = ({ onClick }: any) => {
  return <i
    className="bx bx-microphone voice-indicator"
    style={{ margin: '0 auto 0 auto', fontSize: '128px' }}
    onClick={onClick}
  ></i>
}

const ProcessingIndicator = () => {
  return <i
    className="bx bxs-chip processing-indicator"
    style={{ margin: '0 auto 0 auto', fontSize: '128px' }}
  ></i>
}

const ThinkingIndicator = () => {
  return <i
    className="bx bxs-brain thinking-indicator"
    style={{ margin: '0 auto 0 auto', fontSize: '128px' }}
  ></i>
}

const SpeakingIndicator = () => {
  return <i
    className="bx bxs-user-voice speaking-indicator"
    style={{ margin: '0 auto 0 auto', fontSize: '128px' }}
  ></i>
}

const VoiceChatIndicator = ({ state, onClick }: any) => {
  if (state === 'idle') {
    return <><IdleIndicator onClick={onClick} /></>
  } else if (state === 'listening') {
    return <><ListeningIndicator onClick={onClick} /></>
  } else if (state === 'processing') {
    return <><ProcessingIndicator /></>
  } else if (state === 'thinking') {
    return <><ThinkingIndicator /></>
  } else if (state === 'speaking') {
    return <><SpeakingIndicator /></>
  }
  return <></>
}

const LastTranscription = ({ transcription }: { transcription: { sender: string, message: string } }) => {
  return <div id="last-transcription-container" style={{
    width: "100%",
    height: "20vh",
    maxHeight: "20vh",
    margin: "auto auto 0 auto",
  }}>
    <h3 style={{ textAlign: "center", fontSize: "18px", padding: "unset", margin: "0 auto 1vh auto", maxWidth: "600px" }}>{transcription.sender}</h3>
    <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 0 auto" }}>{transcription.message}</p>
  </div>
}

const VoiceMenu = () => {
  const [lastTranscription, setLastTranscription] = useState<{
    sender: string,
    message: string,
  }>({
    sender: "",
    message: ""
  });
  const [chatState, setChatState] = useState<ChatState>('idle');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleInitialLastTranscription = async () => {
    if (lastTranscription.sender === "" && lastTranscription.message === "") {
      const _log_storage = window.localStorage.getItem("chatLog") || "[]";
      const _log = JSON.parse(_log_storage);
      if (_log.length > 0) {
        const lastLog = _log[_log.length - 1];
        setLastTranscription(lastLog);
        if (lastLog.sender === "user") {
          setChatState("thinking");
        }
      }
    }
  }

  handleInitialLastTranscription();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        const completeBlob = new Blob(audioChunksRef.current, { type: recorder.mimeType });
        stream.getTracks().forEach(track => track.stop());
        setChatState('processing');

        const userPromptMessage = await STTTransaction(completeBlob);
        setLastTranscription(userPromptMessage);
        setChatState('thinking');

        const llmResponseMessage = await LLMTransaction(window.localStorage.getItem("chatLog"));
        setChatState('speaking');

        const ttsResult = await TTSTransaction(llmResponseMessage);
        console.log(ttsResult);
        setChatState('listening');
      };

      recorder.start();
      setChatState('listening');
      setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 10000);
    } catch (err) {
      console.error("Error accessing microphone or starting recording:", err);
      setChatState('idle');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      mediaRecorderRef.current?.stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleListenClick = () => {
    if (chatState === 'idle') {
      startRecording();
    } else if (chatState === 'listening') {
      stopRecording();
    }
  };

  return (
    <div id="global-menu" style={{
      padding: '20px',
      borderRadius: '8px',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }}>
      <div id="global-menu-content">
        <StateIndicatorText state={chatState} />
        <VoiceChatIndicator
          state={chatState}
          onClick={handleListenClick}
          disabled={chatState === 'processing'}
        />
        <LastTranscription transcription={lastTranscription} />
      </div>
    </div>
  );
};

export default VoiceMenu;
