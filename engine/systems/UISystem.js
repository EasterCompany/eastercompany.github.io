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
    
    console.log("Easter Engine: UI System Online");
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
      this.overlay.classList.remove('active');
      document.body.classList.remove('no-scroll'); // Unlock scroll
      
      this.mainContent.style.opacity = "1";
      this.mainContent.style.visibility = "visible";
      this.footer.style.opacity = "1";
      this.footer.style.visibility = "visible";
    } else {
      // Switch/Open Overlay
      this.activeView = viewKey;
      const targetView = document.getElementById(`overlay-view-${viewKey}`);
      if (targetView) targetView.classList.add('active');
      
      this.overlay.classList.add('active');
      document.body.classList.add('no-scroll'); // Lock scroll
      
      this.mainContent.style.opacity = "0";
      this.mainContent.style.visibility = "hidden";
      this.footer.style.opacity = "0";
      this.footer.style.visibility = "hidden";
    }
  }

  update(registry) {
    const now = registry.time;
    const isAtTop = window.scrollY === 0;
    const isOverlayActive = this.overlay && this.overlay.classList.contains('active');
    
    // 1. Scroll Indicator Logic
    if (this.scrollIndicator) {
      const elapsed = now - this.startTime;
      
      // Hide if overlay is active OR not at top OR delay not met
      if (elapsed > 6.0 && isAtTop && !isOverlayActive) {
        this.scrollIndicator.style.opacity = "1";
        this.scrollIndicator.style.pointerEvents = "auto";
      } else {
        this.scrollIndicator.style.opacity = "0";
        this.scrollIndicator.style.pointerEvents = "none";
      }
    }

    // 2. Game UI Triggers Logic (Symmetric Groups)
    // Always visible if overlay is active, otherwise follow scroll logic
    if (this.rightGroup) {
      if (isAtTop || isOverlayActive) {
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
      if (isAtTop || isOverlayActive) {
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
