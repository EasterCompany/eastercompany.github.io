import React, { useRef, useState, useEffect } from 'react';

let initialChatLog = window.localStorage.getItem('chatLog');

const MessageBubble = ({ sender, message }) => {
  return <div className={`text-chat-message-bubble ${sender}-text-chat-message-bubble`}>
    {message}
  </div>
}

const MessengerMenu = () => {
  const [chatLog, setChatLog] = useState<{ sender: string, message: string }[]>(JSON.parse(window.localStorage.getItem('chatLog') || "[]"));
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);

  const chatHistory = useRef<HTMLDivElement>(null);
  const textInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const processLLMAPI = () => fetch("https://api.easter.company/enet/new_transaction", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: window.localStorage.getItem('eid'),
        type: 'LLM',
        data: window.localStorage.getItem('chatLog')
      }),
    }).then(r => r.json()).then(json => {
      window.localStorage.setItem("LastLLMTransactionIdentifier", json.data);
      awaitTransaction();
    });

    const awaitTransaction = () => fetch("https://api.easter.company/enet/await_transaction", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: window.localStorage.getItem("LastLLMTransactionIdentifier") }),
    }).then(r => r.json()).then(json => {
      if (json.status === "completed") {
        const newChatLog = chatLog.concat([{
          sender: "dexter",
          message: json.data
        }]);
        window.localStorage.setItem('chatLog', JSON.stringify(newChatLog));
        initialChatLog = window.localStorage.getItem('chatLog');
        setChatLog(newChatLog);
      } else {
        window.localStorage.setItem('chatLog', JSON.stringify([]));
        initialChatLog = window.localStorage.getItem('chatLog');
        setChatLog([]);
      }
      setInputDisabled(false);
    });

    if (chatHistory.current) {
      chatHistory.current.scrollTop = chatHistory.current.scrollHeight
    }

    if (chatLog.length > 0) {
      const lastLog = chatLog[chatLog.length - 1];
      if (lastLog.sender === "user" && !inputDisabled) {
        processLLMAPI();
        setInputDisabled(true);
      } else if (lastLog.sender !== "user" && inputDisabled) {
        setInputDisabled(false);
      }
    }
  }, [chatLog, inputDisabled]);

  const handleTextInputSubmit = () => {
    if (textInput.current != null) {
      if (textInput.current?.value.length < 1) {
        return;
      }

      const newMessages = [{
        'sender': 'user',
        'message': textInput.current?.value
      },]
      textInput.current.value = "";

      const newLog = chatLog.concat(newMessages);
      const newLogStr = JSON.stringify(newLog);

      window.localStorage.setItem('chatLog', newLogStr);
      initialChatLog = newLogStr;
      return setChatLog(newLog);
    }
  };

  return <div id="global-menu" className="cd c">
    <div id="global-menu-content">
      <div ref={chatHistory} id="user-llm-chat-log">
        {
          chatLog.map ? chatLog.map((log: any, idx: any) => {
            return <MessageBubble key={idx} sender={log.sender} message={log.message} />
          }) : <></>
        }
      </div>
      <div id="user-llm-input-bar" className="cd r" style={inputDisabled ? {
        opacity: "0.33"
      } : {}}>
        <textarea ref={textInput} id="user-llm-text-input" disabled={inputDisabled} style={{ cursor: 'pointer' }}></textarea>
        <button id="user-llm-text-submit" onClick={handleTextInputSubmit} disabled={inputDisabled}><i className='bx bxs-send' ></i></button>
      </div>
    </div>
  </div>
}

export default MessengerMenu;
