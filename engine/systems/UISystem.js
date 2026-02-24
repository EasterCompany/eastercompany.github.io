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
    this.startTime = registry.time;
    
    // HUD Triggers
    this.triggers = {
      spartan: document.getElementById('spartan-trigger'),
      market: document.getElementById('market-trigger'),
      user: document.getElementById('user-trigger'),
      settings: document.getElementById('settings-trigger')
    };

    this.activeView = null;
    this.setupListeners();

    window.addEventListener('keydown', (e) => {
      // 1. Escape Handling (Existing)
      if (e.key === 'Escape' && this.activeView) {
        this.toggleOverlay(this.activeView);
        e.stopImmediatePropagation();
        return;
      }

      // 2. Global Hotkeys (ALT + Key)
      if (e.altKey) {
        const key = e.key;
        let targetView = null;
        let targetChat = false;

        if (key === '`' || key === '0') targetChat = true;
        else if (key === '1') targetView = 'spartan';
        else if (key === '2') targetView = 'market';
        else if (key === '3') targetView = 'user';
        else if (key === '4') targetView = 'settings';

        if (targetView || targetChat) {
          e.preventDefault();
          this.jumpTo(targetView, targetChat);
        }
      }
    });
    
    console.log("Easter Engine: UI System Online");
  }

  jumpTo(viewKey, isChat = false) {
    const chatSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'ChatSystem');
    
    // 1. Exit Chat if active and we are moving to a view
    if (chatSystem && chatSystem.isActive && !isChat) {
      chatSystem.exitChatMode();
    }

    // 2. Close existing overlay if active and we are moving to a DIFFERENT view or chat
    if (this.activeView && (this.activeView !== viewKey || isChat)) {
      const currentView = this.activeView;
      this.toggleOverlay(currentView); // Close current
    }

    // 3. Open target
    if (isChat) {
      if (chatSystem && !chatSystem.isActive) {
        chatSystem.enterChatMode();
      }
    } else if (viewKey) {
      if (this.activeView !== viewKey) {
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
    
    // Reset views
    document.querySelectorAll('.overlay-view').forEach(v => v.classList.remove('active'));
    
    if (isSameView) {
      // Close Overlay
      this.activeView = null;
      if (this.overlay) this.overlay.classList.remove('active');
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
    const isChatActive = document.getElementById('chat-container')?.classList.contains('active');
    
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
