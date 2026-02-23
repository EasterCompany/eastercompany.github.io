export class ChatSystem {
  constructor() {
    this.isActive = false;
    this.history = [];
  }

  async init(registry) {
    this.container = document.getElementById('chat-container');
    this.historyEl = document.getElementById('chat-history');
    this.input = document.getElementById('chat-input');
    this.submitBtn = document.getElementById('chat-submit');
    this.trigger = document.getElementById('dexter-chat-trigger');
    this.closeBtn = document.getElementById('chat-close');
    
    // Elements to fade out
    this.mainContent = document.getElementById('main');
    this.footer = document.querySelector('.site-footer');
    this.uiGroups = [
      document.querySelector('.game-ui-left-group'),
      document.querySelector('.game-ui-right-group')
    ];

    if (this.trigger) {
      this.trigger.addEventListener('click', () => this.enterChatMode());
    }

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.sendMessage());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.exitChatMode());
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isActive) {
        this.exitChatMode();
      }
    });

    // Initialize with placeholders
    this.addPlaceholderMessages();
    
    console.log("Easter Engine: Chat System Online");
  }

  enterChatMode() {
    if (this.isActive) return;
    this.isActive = true;

    // 1. Fade out everything
    if (this.mainContent) {
      this.mainContent.style.visibility = "visible"; // Ensure it's not hidden initially
      this.mainContent.style.transition = "opacity 0.8s ease, visibility 0.8s ease";
      this.mainContent.style.opacity = "0";
      setTimeout(() => { if (this.isActive) this.mainContent.style.visibility = "hidden"; }, 800);
    }
    
    if (this.footer) {
      this.footer.style.visibility = "visible";
      this.footer.style.transition = "opacity 0.8s ease, visibility 0.8s ease";
      this.footer.style.opacity = "0";
      setTimeout(() => { if (this.isActive) this.footer.style.visibility = "hidden"; }, 800);
    }

    this.uiGroups.forEach(group => {
      if (group) {
        group.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        group.style.opacity = "0";
        group.style.pointerEvents = "none";
        group.style.transform = group.classList.contains('game-ui-left-group') ? "translateX(-40px)" : "translateX(40px)";
      }
    });

    // 2. Lock scroll
    document.body.classList.add('no-scroll');

    // 3. Show Chat Container
    if (this.container) {
      this.container.classList.add('active');
      setTimeout(() => {
        if (this.isActive && this.input) this.input.focus();
      }, 800);
    }
  }

  exitChatMode() {
    if (!this.isActive) return;
    this.isActive = false;

    // 1. Fade in everything
    if (this.mainContent) {
      this.mainContent.style.visibility = "visible";
      this.mainContent.style.opacity = "1";
    }
    
    if (this.footer) {
      this.footer.style.visibility = "visible";
      this.footer.style.opacity = "1";
    }

    this.uiGroups.forEach(group => {
      if (group) {
        group.style.opacity = "1";
        group.style.pointerEvents = "auto";
        group.style.transform = "translateX(0)";
      }
    });

    // 2. Unlock scroll
    document.body.classList.remove('no-scroll');

    // 3. Hide Chat Container
    if (this.container) {
      this.container.classList.remove('active');
    }
  }

  addMessage(type, sender, content) {
    const msg = { type, sender, content, timestamp: new Date() };
    this.history.push(msg);

    if (this.historyEl) {
      const msgEl = document.createElement('div');
      msgEl.className = `chat-message message-${type}`;
      
      const label = document.createElement('span');
      label.className = 'message-label';
      label.textContent = sender;
      
      const bubble = document.createElement('div');
      bubble.className = 'message-bubble';
      bubble.textContent = content;

      msgEl.appendChild(label);
      msgEl.appendChild(bubble);
      this.historyEl.appendChild(msgEl);

      // Scroll to bottom
      this.historyEl.scrollTop = this.historyEl.scrollHeight;
    }
  }

  addPlaceholderMessages() {
    this.addMessage('system', 'System', 'Neural link established. Dexter Core v12.0.75 online.');
    this.addMessage('other', 'Operator', 'Status check on the new recursive learning module?');
    this.addMessage('assistant', 'Dexter', 'Optimization complete. Recursive feedback loops are now stable at 400ms latency across the global mesh.');
    this.addMessage('user', 'You', 'Initiate kernel diagnostic for local node easter-server.');
    this.addMessage('pty', 'PTY Output', `root@easter-server:~$ dex diag --kernel
[RUNNING] Kernel integrity check...
[SUCCESS] Neural path weights validated
[SUCCESS] Memory preloading optimized (32GB free)
[INFO] All systems nominal.`);
  }

  sendMessage() {
    if (!this.input || !this.input.value.trim()) return;
    
    const text = this.input.value.trim();
    this.addMessage('user', 'You', text);
    this.input.value = '';

    // Simulate response
    setTimeout(() => {
      if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
        this.addMessage('assistant', 'Dexter', 'Greetings. How can I assist with your deployment today?');
      }
    }, 1000);
  }

  update(registry) {
    // Esc to exit chat mode (optional helper)
    if (this.isActive && registry.input.keys && registry.input.keys['Escape']) {
      // Logic to exit could go here
    }
  }
}
