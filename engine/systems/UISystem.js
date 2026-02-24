export class UISystem {
  constructor() {
    this.phrases = [
      "Chat with Dexter...",
      "Turn off the lights...",
      "Click here to chat!",
      "Check system status...",
      "Launch build pipeline...",
      "Click here to chat!",
      "Summarize current context...",
      "Initialize neural kernel...",
      "Click here to chat!",
      "Optimize memory preloading..."
    ];
    this.phraseIndex = 0;
    this.charIndex = this.phrases[0].length;
    this.isDeleting = false;
    this.lastUpdate = 0;
    this.typeSpeed = 0.1; // Seconds per char
    this.deleteSpeed = 0.05;
    this.pauseTime = 3.0; // Seconds to stay on full phrase
    this.state = 'PAUSE'; // TYPING, DELETING, PAUSE
  }

  async init(registry) {
    this.element = document.getElementById('liquid-typewriter');
    this.scrollIndicator = document.getElementById('scroll-indicator');
    this.rightGroup = document.querySelector('.game-ui-right-group');
    this.leftGroup = document.querySelector('.game-ui-left-group');
    this.overlay = document.getElementById('game-overlay');
    this.mainContent = document.getElementById('main');
    this.footer = document.querySelector('.site-footer');
    this.overlayTitle = document.getElementById('overlay-title');
    this.startTime = registry.time;
    
    // HUD Titles
    this.viewTitles = {
      spartan: "SPARTAN",
      market: "MARKET",
      user: "PROFILE & FAMILY",
      settings: "SETTINGS"
    };

    // HUD Triggers
    this.triggers = {
      spartan: document.getElementById('spartan-trigger'),
      market: document.getElementById('market-trigger'),
      user: document.getElementById('user-trigger'),
      settings: document.getElementById('settings-trigger')
    };

    this.activeView = null;
    this.defaultWindow = localStorage.getItem('dex_default_window') || 'chat';
    
    // Default Hotkeys
    this.defaultHotkeys = {
      cancel: { key: 'Escape', ctrl: false, alt: false, shift: false, label: 'Cancel Process' },
      escape: { key: 'Escape', ctrl: false, alt: false, shift: false, label: 'Close Windows' },
      default: { key: 'Escape', ctrl: false, alt: false, shift: false, label: 'Default Window' },
      chat: { key: '`', ctrl: false, alt: true, shift: false, label: 'Toggle Chat' },
      spartan: { key: '1', ctrl: false, alt: true, shift: false, label: 'Toggle Spartan' },
      market: { key: '2', ctrl: false, alt: true, shift: false, label: 'Toggle Market' },
      user: { key: '3', ctrl: false, alt: true, shift: false, label: 'Toggle Profile' },
      settings: { key: '4', ctrl: false, alt: true, shift: false, label: 'Toggle Settings' }
    };

    this.hotkeys = this.loadHotkeys();
    this.pendingHotkeys = null; 
    this.recordingAction = null; 

    this.setupListeners();
    this.setupHotkeyUI();

    window.addEventListener('keydown', (e) => {
      // 1. Hotkey Recording Mode
      if (this.recordingAction) {
        e.preventDefault();
        this.handleHotkeyRecording(e);
        return;
      }

      const isMatch = (hk) => e.key === hk.key && e.ctrlKey === hk.ctrl && e.altKey === hk.alt && e.shiftKey === hk.shift;

      // 2. Specialized Shared Logic (Cancel > Close > Open Default)
      const esc = this.hotkeys.escape;
      const def = this.hotkeys.default;
      const can = this.hotkeys.cancel;
      const chatSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'ChatSystem');

      const isEscMatch = isMatch(esc);
      const isDefMatch = isMatch(def);
      const isCanMatch = isMatch(can);

      if (isEscMatch || isDefMatch || isCanMatch) {
        const overlay = document.getElementById('game-overlay');
        const chatContainer = document.getElementById('chat-container');
        const confirmModal = document.getElementById('confirm-modal');
        const alertModal = document.getElementById('alert-modal');
        
        const isOverlayActive = (overlay && overlay.classList.contains('active')) ||
                               (chatContainer && chatContainer.classList.contains('active')) ||
                               (confirmModal && confirmModal.classList.contains('active')) ||
                               (alertModal && alertModal.classList.contains('active'));

        // Case A: Process Cancellation (Priority 1)
        if (isCanMatch && chatSystem && chatSystem.isProcessing) {
          chatSystem.cancelProcess();
          e.stopImmediatePropagation();
          return;
        }

        // Case B: Something is open -> CLOSE it (Priority 2)
        if (isEscMatch && isOverlayActive) {
          // Handle Chat System internal states if chat is the active overlay
          if (chatSystem && chatSystem.isActive) {
            if (chatSystem.emojiPicker?.classList.contains('active')) {
              chatSystem.toggleEmojiPicker();
              e.stopImmediatePropagation();
              return;
            }
          }

          // Close active view
          if (this.activeView) {
            this.toggleOverlay(this.activeView);
          } else if (chatSystem && chatSystem.isActive) {
            chatSystem.exitChatMode();
          }
          
          e.stopImmediatePropagation();
          return;
        }

        // Case C: Nothing is open -> OPEN Default (Priority 3)
        if (isDefMatch && !isOverlayActive) {
          this.jumpTo(this.defaultWindow === 'chat' ? null : this.defaultWindow, this.defaultWindow === 'chat');
          e.stopImmediatePropagation();
          return;
        }
      }

      // 3. Global Jump Hotkeys (Dynamic)
      Object.entries(this.hotkeys).forEach(([action, hk]) => {
        if (action === 'escape' || action === 'default' || action === 'cancel') return;
        if (isMatch(hk)) {
          e.preventDefault();
          this.jumpTo(action === 'chat' ? null : action, action === 'chat');
        }
      });
    });
    
    console.log("Easter Engine: UI System Online");
  }

  loadHotkeys() {
    const saved = localStorage.getItem('dex_hotkeys');
    if (saved) {
      try {
        const hk = JSON.parse(saved);
        // Ensure labels are updated if using old save
        Object.keys(hk).forEach(id => {
          if (this.defaultHotkeys[id]) hk[id].label = this.defaultHotkeys[id].label;
        });
        return hk;
      } catch (e) {
        console.warn("UISystem: Failed to parse saved hotkeys, using defaults.");
      }
    }
    return JSON.parse(JSON.stringify(this.defaultHotkeys));
  }

  saveHotkeys(hk) {
    this.hotkeys = JSON.parse(JSON.stringify(hk));
    localStorage.setItem('dex_hotkeys', JSON.stringify(this.hotkeys));
  }

  setupHotkeyUI() {
    const btnAccept = document.getElementById('hotkeys-accept');
    const btnDiscard = document.getElementById('hotkeys-discard');
    const btnReset = document.getElementById('hotkeys-reset');
    const selDefault = document.getElementById('setting-default-window');

    if (btnAccept) btnAccept.addEventListener('click', () => this.acceptHotkeyChanges());
    if (btnDiscard) btnDiscard.addEventListener('click', () => this.discardHotkeyChanges());
    if (btnReset) btnReset.addEventListener('click', () => this.resetHotkeys());
    
    if (selDefault) {
      selDefault.value = this.defaultWindow;
      selDefault.addEventListener('change', (e) => {
        this.defaultWindow = e.target.value;
        localStorage.setItem('dex_default_window', this.defaultWindow);
        console.log(`UISystem: Default window set to ${this.defaultWindow}`);
      });
    }

    this.renderHotkeys();
  }

  renderHotkeys() {
    const body = document.getElementById('hotkeys-status-body');
    if (!body) return;

    const current = this.pendingHotkeys || this.hotkeys;

    body.innerHTML = Object.entries(current).map(([id, hk]) => {
      let display = "";
      if (hk.ctrl) display += "CTRL+";
      if (hk.alt) display += "ALT+";
      if (hk.shift) display += "SHIFT+";
      display += hk.key.toUpperCase();

      return `
        <tr>
          <td><span style="opacity: 0.8;">${hk.label}</span></td>
          <td style="text-align: right;">
            <div class="hotkey-value ${this.recordingAction === id ? 'recording' : ''}" 
                 onclick="window.easterEngine.systems.find(s => s.constructor.name === 'UISystem').startRecordingHotkey('${id}')">
              ${this.recordingAction === id ? '...' : display}
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Update visibility of action buttons
    const actions = document.getElementById('hotkeys-actions');
    const resets = document.getElementById('hotkeys-reset-container');
    if (actions) actions.style.display = this.pendingHotkeys ? 'block' : 'none';
    if (resets) resets.style.display = this.pendingHotkeys ? 'none' : 'block';
  }

  startRecordingHotkey(actionId) {
    if (!this.pendingHotkeys) {
      this.pendingHotkeys = JSON.parse(JSON.stringify(this.hotkeys));
    }
    this.recordingAction = actionId;
    this.renderHotkeys();
  }

  handleHotkeyRecording(e) {
    if (!this.recordingAction) return;

    const forbidden = ['Tab', 'Control', 'Alt', 'Shift', 'Meta', 'CapsLock'];
    if (forbidden.includes(e.key)) return;

    this.pendingHotkeys[this.recordingAction] = {
      ...this.pendingHotkeys[this.recordingAction],
      key: e.key,
      ctrl: e.ctrlKey,
      alt: e.altKey,
      shift: e.shiftKey
    };

    this.recordingAction = null;
    this.renderHotkeys();
  }

  acceptHotkeyChanges() {
    if (this.pendingHotkeys) {
      this.saveHotkeys(this.pendingHotkeys);
      this.pendingHotkeys = null;
      this.renderHotkeys();
    }
  }

  discardHotkeyChanges() {
    this.pendingHotkeys = null;
    this.renderHotkeys();
  }

  resetHotkeys() {
    this.saveHotkeys(this.defaultHotkeys);
    this.renderHotkeys();
  }

  jumpTo(viewKey, isChat = false) {
    const chatSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'ChatSystem');
    
    // 1. Toggle Chat
    if (isChat) {
      if (chatSystem) {
        if (chatSystem.isActive) {
          chatSystem.exitChatMode();
        } else {
          // Close active overlay if any
          if (this.activeView) this.toggleOverlay(this.activeView);
          chatSystem.enterChatMode();
        }
      }
      return;
    }

    // 2. Toggle Overlay Views
    if (viewKey) {
      if (this.activeView === viewKey) {
        // Same view -> Close it
        this.toggleOverlay(viewKey);
      } else {
        // Different view
        // Exit Chat if active
        if (chatSystem && chatSystem.isActive) chatSystem.exitChatMode();
        
        // Open new view (toggleOverlay handles resetting classes and closing previous view)
        this.toggleOverlay(viewKey);
      }
    }
  }

  setupListeners() {
    Object.entries(this.triggers).forEach(([key, el]) => {
      if (!el) return;
      el.addEventListener('click', () => this.toggleOverlay(key));
    });
  }

  toggleOverlay(viewKey) {
    const isSameView = this.activeView === viewKey;
    
    // Reset views and triggers
    document.querySelectorAll('.overlay-view').forEach(v => v.classList.remove('active'));
    Object.values(this.triggers).forEach(el => {
      if (el) el.classList.remove('highlighted', 'dimmed');
    });
    
    if (isSameView) {
      // Close Overlay
      this.activeView = null;
      if (this.overlay) this.overlay.classList.remove('active');
      if (this.overlayTitle) this.overlayTitle.textContent = "";
      document.body.classList.remove('no-scroll'); // Unlock scroll
      
      if (this.mainContent) {
        this.mainContent.style.opacity = "1";
        this.mainContent.style.visibility = "visible";
      }
      if (this.footer) {
        this.footer.style.opacity = "1";
        this.footer.style.visibility = "visible";
      }
    } else {
      // Switch/Open Overlay
      this.activeView = viewKey;
      
      // Highlight active trigger, dim others
      Object.entries(this.triggers).forEach(([key, el]) => {
        if (!el) return;
        if (key === viewKey) {
          el.classList.add('highlighted');
        } else {
          el.classList.add('dimmed');
        }
      });

      if (this.overlayTitle) this.overlayTitle.textContent = this.viewTitles[viewKey] || "";
      const targetView = document.getElementById(`overlay-view-${viewKey}`);
      if (targetView) targetView.classList.add('active');
      
      if (this.overlay) this.overlay.classList.add('active');
      document.body.classList.add('no-scroll'); // Lock scroll
      
      if (this.mainContent) {
        this.mainContent.style.opacity = "0";
        this.mainContent.style.visibility = "hidden";
      }
      if (this.footer) {
        this.footer.style.opacity = "0";
        this.footer.style.visibility = "hidden";
      }
    }
  }

  confirm(title, message) {
    return new Promise((resolve) => {
      const modal = document.getElementById('confirm-modal');
      const titleEl = document.getElementById('confirm-title');
      const msgEl = document.getElementById('confirm-message');
      const cancelBtn = document.getElementById('confirm-cancel');
      const okBtn = document.getElementById('confirm-ok');

      if (!modal) {
        // Fallback to native if not found
        resolve(window.confirm(`${title}\n\n${message}`));
        return;
      }

      titleEl.textContent = title;
      msgEl.textContent = message;

      const cleanup = () => {
        modal.classList.remove('active');
        cancelBtn.removeEventListener('click', onCancel);
        okBtn.removeEventListener('click', onOk);
      };

      const onCancel = () => {
        cleanup();
        resolve(false);
      };

      const onOk = () => {
        cleanup();
        resolve(true);
      };

      cancelBtn.addEventListener('click', onCancel);
      okBtn.addEventListener('click', onOk);

      modal.classList.add('active');
    });
  }

  alert(title, message, isError = false) {
    return new Promise((resolve) => {
      const modal = document.getElementById('alert-modal');
      const dialog = document.getElementById('alert-dialog');
      const titleEl = document.getElementById('alert-title');
      const msgEl = document.getElementById('alert-message');
      const okBtn = document.getElementById('alert-ok');

      if (!modal) {
        // Fallback to native if not found
        window.alert(`${title}\n\n${message}`);
        resolve();
        return;
      }

      titleEl.textContent = title;
      msgEl.textContent = message;

      if (isError) {
        dialog.classList.add('error');
      } else {
        dialog.classList.remove('error');
      }

      const cleanup = () => {
        modal.classList.remove('active');
        okBtn.removeEventListener('click', onOk);
      };

      const onOk = () => {
        cleanup();
        resolve();
      };

      okBtn.addEventListener('click', onOk);

      modal.classList.add('active');
    });
  }

  update(registry) {
    const now = registry.time;
    const isAtTop = window.scrollY === 0;
    const isOverlayActive = this.overlay && this.overlay.classList.contains('active');
    registry.isOverlayActive = isOverlayActive;
    const isChatActive = document.getElementById('chat-container')?.classList.contains('active');
    if (isChatActive) registry.isOverlayActive = true;
    
    // 1. Scroll Indicator Logic
    if (this.scrollIndicator) {
      const elapsed = now - this.startTime;
      
      // Hide if overlay/chat is active OR not at top OR delay not met
      if (elapsed > 6.0 && isAtTop && !isOverlayActive && !isChatActive) {
        this.scrollIndicator.style.opacity = "1";
        this.scrollIndicator.style.pointerEvents = "auto";
      } else {
        this.scrollIndicator.style.opacity = "0";
        this.scrollIndicator.style.pointerEvents = "none";
      }
    }

    // 2. Game UI Triggers Logic (Symmetric Groups)
    // Always visible if overlay is active, otherwise follow scroll logic
    // Hide if Chat is active
    if (this.rightGroup) {
      if ((isAtTop || isOverlayActive) && !isChatActive) {
        this.rightGroup.style.opacity = "1";
        this.rightGroup.style.pointerEvents = "auto";
        this.rightGroup.style.transform = "translateX(0)";
      } else {
        this.rightGroup.style.opacity = "0";
        this.rightGroup.style.pointerEvents = "none";
        this.rightGroup.style.transform = "translateX(20px)";
      }
    }

    if (this.leftGroup) {
      if ((isAtTop || isOverlayActive) && !isChatActive) {
        this.leftGroup.style.opacity = "1";
        this.leftGroup.style.pointerEvents = "auto";
        this.leftGroup.style.transform = "translateX(0)";
      } else {
        this.leftGroup.style.opacity = "0";
        this.leftGroup.style.pointerEvents = "none";
        this.leftGroup.style.transform = "translateX(-20px)";
      }
    }

    if (!this.element) return;
    const dt = now - this.lastUpdate;

    switch (this.state) {
      case 'TYPING':
        if (dt > this.typeSpeed) {
          this.charIndex++;
          this.element.textContent = this.phrases[this.phraseIndex].substring(0, this.charIndex);
          this.lastUpdate = now;
          if (this.charIndex >= this.phrases[this.phraseIndex].length) {
            this.state = 'PAUSE';
          }
        }
        break;

      case 'DELETING':
        if (dt > this.deleteSpeed) {
          this.charIndex--;
          this.element.textContent = this.phrases[this.phraseIndex].substring(0, this.charIndex);
          this.lastUpdate = now;
          if (this.charIndex <= 0) {
            this.state = 'TYPING';
            this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
          }
        }
        break;

      case 'PAUSE':
        let currentPause = this.pauseTime;
        if (this.phrases[this.phraseIndex] === "Click here to chat!") {
          currentPause *= 2.0;
        }
        
        if (dt > currentPause) {
          this.state = 'DELETING';
          this.lastUpdate = now;
        }
        break;
    }
  }
}
