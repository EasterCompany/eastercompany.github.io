import React from 'react';
import { useState } from 'react';

import './App.css';
import ECoinMenu from './components/ecoinMenu';
import ENetMenu from './components/enetMenu';
import MessengerMenu from './components/messengerMenu';
import VoiceMenu from './components/voiceMenu';

function App() {
  const [menu, setMenu] = useState<string>("none");
  const [walletConnected, setWalletConnected] = useState<boolean>(false);

  const toggleMenu = (_menu: string): any => {
    return () => {
      const body = document.body as HTMLBodyElement;
      if (menu === _menu || _menu === "none") {
        body.style.overflowY = 'auto';
        setMenu("none");
      } else {
        body.style.overflowY = 'hidden';
        setMenu(_menu);
      }
    }
  };

  const ECoinMenuButton = () => {
    return <i
      id="ecoin-icon-button"
      className="bx bxs-wallet"
      onClick={toggleMenu('ecoin')}
      style={{
        borderBottom: menu === 'ecoin' ? '1px solid #dadada66' : 'unset',
      }}
    ></ i>
  };

  const DexterTextChatButton = () => {
    return <i
      id="dexter-chat-button"
      className="bx bxs-message-dots"
      onClick={toggleMenu('messenger')}
      style={{
        borderBottom: menu === 'messenger' ? '1px solid #dadada66' : 'unset',
      }}
    ></i>
  }

  const ENetMenuButton = () => {
    return <i
      id="dexter-enet-button"
      className="bx bxs-chip"
      onClick={toggleMenu('enet')}
      style={{
        borderBottom: menu === 'enet' ? '1px solid #dadada66' : 'unset',
      }}
    ></i>
  }

  const VoiceMenuButton = () => {
    return <i
      id="dexter-voice-button"
      className="bx bx-microphone"
      onClick={toggleMenu('voice')}
      style={{
        borderBottom: menu === 'voice' ? '1px solid #dadada66' : 'unset',
      }}
    ></i>
  }

  return <>
    <nav className='glassy' style={menu === 'none' ? {} : {
      boxShadow: '1px 1px 18px rgba(90,90,99,0.66)',
      backgroundColor: 'unset'
    }}>
      <canvas id="dexter-waveform"></canvas>
      <div id="nav-left-section">
        <div id="dexter-icon" className="dexter-icon">
          <div id="dexter-loader" className="dexter-loader">
            <div id="dexter-stt-loader" className="loader-container hide">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div id="dexter-llm-loader" className="loader-container hide">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div id="dexter-tts-loader" className="loader-container hide">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <i id="dexter-icon-D" className="bx bxs-diamond dexter-icon-D"></i>
            <div id="dexter-icon-spinner" className="dexter-icon-spinner">
              <i id="dexter-icon-O" className="bx bxs-certification dexter-icon-O"></i>
            </div>
          </div>
        </div>
        <h1 id="nav-title" className="nav-title">{window.location.hostname}</h1>
      </div>
      <div id="nav-right-section">
        <ECoinMenuButton />
        {
          window.localStorage.getItem('eid') ? <>
            <ENetMenuButton />
            <DexterTextChatButton />
            <VoiceMenuButton />
          </> : <></>
        }
      </div>
    </nav>
    {menu === 'ecoin' ? <ECoinMenu walletConnected={walletConnected} setWalletConnected={setWalletConnected} /> : <></>}
    {menu === 'enet' ? <ENetMenu /> : <></>}
    {menu === 'messenger' ? <MessengerMenu /> : <></>}
    {menu === 'voice' ? <VoiceMenu /> : <></>}
  </>;
}

export default App;
