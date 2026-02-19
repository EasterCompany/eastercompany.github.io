export class UISystem {
  constructor() {
    this.phrases = [
      "Click here to chat!",
      "Turn off the lights...",
      "Check system status...",
      "Click here to chat!",
      "Launch build pipeline...",
      "Summarize current context...",
      "Click here to chat!",
      "Initialize neural kernel...",
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
    console.log("Easter Engine: UI System Online");
  }

  update(registry) {
    if (!this.element) return;

    const now = registry.time;
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
