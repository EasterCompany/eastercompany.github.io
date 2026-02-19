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
    this.startTime = registry.time;
    console.log("Easter Engine: UI System Online");
  }

  update(registry) {
    const now = registry.time;
    const isAtTop = window.scrollY === 0;
    
    // 1. Scroll Indicator Logic
    if (this.scrollIndicator) {
      const elapsed = now - this.startTime;
      
      // Fade in after 6s if at top
      if (elapsed > 6.0 && isAtTop) {
        this.scrollIndicator.style.opacity = "1";
        this.scrollIndicator.style.pointerEvents = "auto";
      } else {
        this.scrollIndicator.style.opacity = "0";
        this.scrollIndicator.style.pointerEvents = "none";
      }
    }

    // 2. Game UI Triggers Logic (Symmetric Groups)
    if (this.rightGroup) {
      if (isAtTop) {
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
      if (isAtTop) {
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
