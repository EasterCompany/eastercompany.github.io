export class ChatSystem {
  constructor() {
    this.isActive = false;
    this.history = [];
    this.apiUrl = "";
    this.wsUrl = "";
    this.eventServiceUrl = "";
    this.ws = null;
    this.sessionId = this.getOrCreateSessionId();
  }

  getOrCreateSessionId() {
    let id = localStorage.getItem('dex_session_id');
    if (!id) {
      id = 'web-' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('dex_session_id', id);
    }
    return id;
  }

  async init(registry) {
    this.resolveUrls();
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
      if (e.key === 'Escape') {
        this.toggleChatMode();
      }
    });

    // Initialize with placeholders
    this.addPlaceholderMessages();
    
    console.log("Easter Engine: Chat System Online");
    console.log(`Easter Engine: API URL: ${this.apiUrl}`);
    console.log(`Easter Engine: Session ID: ${this.sessionId}`);
  }

  resolveUrls() {
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    
    if (host === 'easter.company' || host === 'www.easter.company') {
      this.apiUrl = 'https://dashboard.easter.company';
      this.wsUrl = 'wss://dashboard.easter.company/ws';
      this.eventServiceUrl = 'https://dashboard.easter.company'; // Post to dashboard proxy
    } else if (host === '100.100.1.0') {
      this.apiUrl = 'http://100.100.1.3:8200';
      this.wsUrl = 'ws://100.100.1.3:8200/ws';
      this.eventServiceUrl = 'http://100.100.1.3:8200'; // Dashboard port
    } else {
      // Development/Fallback
      this.apiUrl = `${protocol}//${host}:8200`;
      this.wsUrl = (protocol === 'https:' ? 'wss:' : 'ws:') + `//${host}:8200/ws`;
      this.eventServiceUrl = `${protocol}//${host}:8200`;
    }
  }

  toggleChatMode() {
    if (this.isActive) {
      this.exitChatMode();
    } else {
      // Only open if no other overlays are open
      const overlay = document.getElementById('game-overlay');
      const isOverlayActive = overlay && overlay.classList.contains('active');
      if (!isOverlayActive) {
        this.enterChatMode();
      }
    }
  }

  enterChatMode() {
    if (this.isActive) return;
    this.isActive = true;

    // 1. Fade out everything
    if (this.mainContent) {
      this.mainContent.style.visibility = "visible";
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

    // 4. Connect WebSocket
    this.connectWebSocket();
  }

  exitChatMode() {
    if (!this.isActive) return;
    this.isActive = false;

    // Disconnect WebSocket
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

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

  connectWebSocket() {
    if (this.ws) this.ws.close();
    
    console.log(`Connecting to WebSocket: ${this.wsUrl}`);
    this.ws = new WebSocket(this.wsUrl);
    
    this.ws.onmessage = (event) => {
      try {
        const rawEvent = JSON.parse(event.data);
        this.handleLiveEvent(rawEvent);
      } catch (err) {
        console.error("Failed to parse WS message:", err);
      }
    };

    this.ws.onclose = () => {
      console.log("WebSocket disconnected");
      if (this.isActive) {
        setTimeout(() => this.connectWebSocket(), 3000);
      }
    };

    this.ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };
  }

  handleLiveEvent(rawEvent) {
    if (!rawEvent || !rawEvent.event) {
      // console.warn("Received malformed event via WS:", rawEvent);
      return;
    }

    const eventData = rawEvent.event;
    const type = eventData.type;
    
    // Check if this event belongs to our session
    const isOurSession = eventData.channel_id === this.sessionId;

    if (isOurSession) {
      if (type === 'messaging.user.sent_message') {
        // Skip: already added optimistically in sendMessage
        return;
      } else if (type === 'messaging.bot.sent_message' || type === 'bot_response') {
        this.addMessage('assistant', 'Dexter', eventData.content || eventData.text);
      } else {
        // Other session events as log entries
        this.addMessage('event', 'Session Event', rawEvent);
      }
    } else {
      // General system events
      this.addMessage('event', 'System Event', rawEvent);
    }
  }

  async sendMessage() {
    if (!this.input || !this.input.value.trim()) return;
    
    const text = this.input.value.trim();
    this.input.value = '';

    // Optimistic UI update: add message immediately
    this.addMessage('user', 'You', text);

    const payload = {
      service: "dex-web-frontend",
      event: {
        type: "messaging.user.sent_message",
        source: "web",
        content: text,
        user_id: "anonymous",
        user_name: "Web User",
        channel_id: this.sessionId,
        channel_name: "Private Web Chat",
        server_id: window.location.hostname,
        server_name: "Easter Company Web",
        message_id: this.generateUUID(),
        timestamp: new Date().toISOString()
      }
    };

    try {
      const response = await fetch(`${this.eventServiceUrl}/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        console.error("Failed to send message:", await response.text());
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  }

  generateUUID() {
    if (crypto && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    // Fallback for non-secure contexts
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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

      if (type === 'event') {
        const eventData = content;
        const summary = document.createElement('span');
        summary.className = 'event-summary';
        summary.textContent = `[EVENT] ${eventData.service}: ${eventData.event.type || 'unknown'}`;
        
        const details = document.createElement('div');
        details.className = 'event-details';
        details.textContent = JSON.stringify(eventData.event, null, 2);
        
        bubble.appendChild(summary);
        bubble.appendChild(details);
        
        msgEl.addEventListener('click', () => {
          msgEl.classList.toggle('expanded');
        });
      } else {
        bubble.textContent = content;
      }

      msgEl.appendChild(label);
      msgEl.appendChild(bubble);
      this.historyEl.appendChild(msgEl);

      // Scroll to bottom
      this.historyEl.scrollTop = this.historyEl.scrollHeight;
    }
  }

  addPlaceholderMessages() {
    this.addMessage('system', 'System', 'Neural link established. Dexter Core v12.0.75 online.');
    this.addMessage('assistant', 'Dexter', 'Interactive session initialized. Live system events are now streaming.');
  }

  update(registry) {}
}
