export class ChatSystem {
  constructor() {
    this.isActive = false;
    this.history = [];
    this.apiUrl = "";
    this.wsUrl = "";
    this.eventServiceUrl = "";
    this.ws = null;
    this.sessionId = this.getOrCreateSessionId();
    this.isProcessing = false;
    this.isSleeping = false;
    this.debugMode = localStorage.getItem('dex_debug_mode') === 'true';
    this.version = "12.1.0";
    
    this.emojis = ['👍', '👎', '❤️', '🔥', '😂', '😮', '😢', '🙏', '✨', '🚀', '✅', '❌', '🤔', '👀', '💯'];
    this.activeReactionTarget = null; // Store messageEl or messageId for reaction
    this.cancelAttempts = 0;
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
    if (this.historyEl) {
      this.historyEl.addEventListener('scroll', () => {
        const isScrolled = this.historyEl.scrollTop > 10;
        this.historyEl.classList.toggle('is-scrolled', isScrolled);
      });
    }
    this.input = document.getElementById('chat-input');
    this.submitBtn = document.getElementById('chat-submit');
    this.cancelBtn = document.getElementById('chat-cancel');
    this.trigger = document.getElementById('dexter-chat-trigger');
    this.closeBtn = document.getElementById('chat-close');
    
    // Emoji Picker
    this.emojiBtn = document.getElementById('chat-emoji-btn');
    this.emojiPicker = document.getElementById('emoji-picker-container');
    this.emojiGrid = document.getElementById('emoji-grid');
    
    if (this.emojiGrid) {
      this.emojis.forEach(emoji => {
        const span = document.createElement('span');
        span.textContent = emoji;
        span.addEventListener('click', () => this.pickEmoji(emoji));
        this.emojiGrid.appendChild(span);
      });
    }

    if (this.emojiBtn) {
      this.emojiBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.activeReactionTarget = null; // Target is input bar
        this.toggleEmojiPicker();
      });
    }

    // Settings
    this.debugToggle = document.getElementById('setting-debug-mode');
    if (this.debugToggle) {
      this.debugToggle.checked = this.debugMode;
      this.debugToggle.addEventListener('change', (e) => this.setDebugMode(e.target.checked));
    }

    this.deleteChatBtn = document.getElementById('setting-delete-chat');
    if (this.deleteChatBtn) {
      this.deleteChatBtn.addEventListener('click', () => this.deleteChat());
    }

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

    if (this.cancelBtn) {
      this.cancelBtn.addEventListener('click', () => this.cancelProcess());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.exitChatMode());
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }

    // Close picker on click outside
    document.addEventListener('click', (e) => {
      if (this.emojiPicker && this.emojiPicker.classList.contains('active')) {
        if (!this.emojiPicker.contains(e.target) && e.target !== this.emojiBtn) {
          this.toggleEmojiPicker();
        }
      }
    });

    // Initialize
    console.log(`ChatSystem: Initializing session ${this.sessionId}`);
    this.syncOptions().then(() => {
      this.setupObfuscation();
      this.setupClickToCopy();
    });
    this.startNetworkStatusSync();
    
    console.log("Easter Engine: Chat System Online");
  }

  setupObfuscation() {
    const items = document.querySelectorAll('.discord-configs .settings-item');
    items.forEach(item => {
      const input = item.querySelector('input.obfuscated');
      if (!input) return;

      // Save the real value for restoration
      input.dataset.realValue = input.value;

      const scramble = () => {
        const val = input.dataset.realValue || "";
        input.value = this.generateScrambledText(val.length);
      };

      const reveal = () => {
        input.value = input.dataset.realValue;
      };

      // Initial state: Scrambled once
      scramble();

      item.addEventListener('mouseenter', reveal);
      item.addEventListener('mouseleave', scramble);
    });
  }

  setupClickToCopy() {
    const inputs = document.querySelectorAll('.settings-input[readonly], .settings-select:disabled');
    inputs.forEach(input => {
      input.title = 'Copy to clipboard';

      input.addEventListener('click', async (e) => {
        const valueToCopy = input.dataset.realValue || input.value;
        if (!valueToCopy || valueToCopy === '...') return;

        try {
          await navigator.clipboard.writeText(valueToCopy);
          
          // Party Effect
          this.createCopyParticles(e.clientX, e.clientY);
          
          // Visual Feedback
          const originalBg = input.style.background;
          input.style.background = 'rgba(0, 243, 255, 0.2)';
          setTimeout(() => {
            input.style.background = originalBg;
          }, 200);
          
          console.log(`ChatSystem: Copied value to clipboard.`);
        } catch (err) {
          console.error('ChatSystem: Failed to copy text: ', err);
        }
      });
    });
  }

  createCopyParticles(x, y) {
    const particleCount = 8;
    const colors = ['#00f3ff', '#27c93f', '#ffffff', '#ffd600'];
    
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'copy-particle';
      
      // Random direction
      const angle = (Math.random() * Math.PI * 2);
      const velocity = 50 + Math.random() * 50;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.setProperty('--tx', `${tx}px`);
      p.style.setProperty('--ty', `${ty}px`);
      p.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // Half text, half dots
      if (i % 2 === 0) {
        p.textContent = 'COPIED';
      } else {
        p.textContent = '✦';
        p.style.fontSize = '1rem';
      }
      
      document.body.appendChild(p);
      
      // Cleanup
      setTimeout(() => p.remove(), 800);
    }
  }

  generateScrambledText(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  startNetworkStatusSync() {
    // Initial fetch
    this.fetchNetworkStatus();
    this.fetchServiceStatus();
    this.syncProcessState();
    
    // Refresh every 10 seconds
    setInterval(() => {
      this.fetchNetworkStatus();
      this.fetchServiceStatus();
      this.syncProcessState();
    }, 10000);
  }

  async fetchNetworkStatus() {
    // Don't fetch if settings window isn't active to save resources? 
    // Actually, user might open it anytime, and it's small payload.
    
    const urls = [
      "https://dashboard.easter.company/system/network",
      `${this.eventServiceUrl}/system/network`
    ];

    // Priority based on location (same as syncOptions)
    const isTailscale = window.location.hostname.startsWith('100.100.') || 
                        window.location.hostname === 'easter-server' ||
                        window.location.hostname === 'easter-us-3';
    const prioritizedUrls = isTailscale ? [urls[1], urls[0]] : [urls[0], urls[1]];

    for (const url of prioritizedUrls) {
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(3000) });
        if (!response.ok) continue;
        
        const data = await response.json();
        if (data && data.nodes) {
          this.renderNetworkStatus(data.nodes);
          return;
        }
      } catch (err) {
        // Silently fail per-URL
      }
    }
  }

  async fetchServiceStatus() {
    const urls = [
      "https://dashboard.easter.company/system/services",
      `${this.eventServiceUrl}/system/services`
    ];

    const isTailscale = window.location.hostname.startsWith('100.100.') || 
                        window.location.hostname === 'easter-server' ||
                        window.location.hostname === 'easter-us-3';
    const prioritizedUrls = isTailscale ? [urls[1], urls[0]] : [urls[0], urls[1]];

    for (const url of prioritizedUrls) {
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
        if (!response.ok) continue;
        
        const data = await response.json();
        if (data && data.services) {
          this.renderServiceStatus(data.services);
          return;
        }
      } catch (err) {
        // Silently fail per-URL
      }
    }
  }

  renderServiceStatus(services) {
    const body = document.getElementById('service-status-body');
    if (!body) return;

    if (!services || services.length === 0) {
      body.innerHTML = '<tr><td colspan="6" style="text-align: center; opacity: 0.5; padding: 20px;">No services detected.</td></tr>';
      return;
    }

    body.innerHTML = services.map(svc => {
      const cpu = svc.cpu != null ? `${svc.cpu.toFixed(1)}%` : '--';
      const mem = svc.mem != null ? `${svc.mem.toFixed(0)}MB` : '--';
      const version = svc.version ? svc.version.split('.').slice(0, 3).join('.') : 'N/A';

      return `
        <tr>
          <td><span class="node-name">${svc.id}</span></td>
          <td><span style="opacity: 0.6;">${version}</span></td>
          <td>
            <span class="status-pill ${svc.status === 'OK' ? 'online' : 'offline'}">
              ${svc.status}
            </span>
          </td>
          <td><span style="opacity: 0.6; font-size: 0.65rem;">${svc.uptime || '--'}</span></td>
          <td><span style="color: var(--neon-blue); opacity: 0.8;">${cpu}</span></td>
          <td><span style="color: #27c93f; opacity: 0.8;">${mem}</span></td>
        </tr>
      `;
    }).join('');
  }

  renderNetworkStatus(nodes) {
    const body = document.getElementById('network-status-body');
    if (!body) return;

    if (!nodes || nodes.length === 0) {
      body.innerHTML = '<tr><td colspan="4" style="text-align: center; opacity: 0.5; padding: 20px;">No nodes detected in network.</td></tr>';
      return;
    }

    body.innerHTML = nodes.map(node => `
      <tr>
        <td><span class="node-name">${node.name}</span></td>
        <td><span class="node-ip">${node.ip}</span></td>
        <td>
          <span class="status-pill ${node.online ? 'online' : 'offline'}">
            ${node.online ? 'Online' : 'Offline'}
          </span>
        </td>
        <td>
          <div class="service-list">
            ${(node.services || []).map(svc => `<span class="service-tag">${svc}</span>`).join('')}
            ${(!node.services || node.services.length === 0) ? '<span style="opacity: 0.3;">None</span>' : ''}
          </div>
        </td>
      </tr>
    `).join('');
  }

  async syncOptions() {
    const cacheKey = 'dex_settings_cache';
    const cacheTTL = 3600000; // 1 hour in milliseconds

    // 1. Check Local Cache
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const cacheData = JSON.parse(cached);
        const age = Date.now() - cacheData.timestamp;
        
        if (age < cacheTTL) {
          console.log(`ChatSystem: Using cached settings (Age: ${Math.round(age/60000)}m)`);
          this.applyOptionsToUI(cacheData.options);
          return;
        }
        console.log("ChatSystem: Settings cache expired.");
      } catch (e) {
        console.warn("ChatSystem: Failed to parse settings cache.");
      }
    }

    const prodUrl = "https://dashboard.easter.company/system/options";
    const localUrl = `${this.eventServiceUrl}/system/options`;
    
    // Dynamic Prioritization: If we are on 100.100.x.y, easter-server, or easter-us-3, try local URL first.
    const isTailscale = window.location.hostname.startsWith('100.100.') || 
                        window.location.hostname === 'easter-server' ||
                        window.location.hostname === 'easter-us-3';
    const urls = isTailscale ? [localUrl, prodUrl] : [prodUrl, localUrl];

    for (const url of urls) {
      try {
        console.log(`ChatSystem: Attempting to sync options from ${url}`);
        const response = await fetch(url, { signal: AbortSignal.timeout(3000) }); // 3s timeout per attempt
        
        if (!response.ok) {
          console.warn(`ChatSystem: Failed to fetch options from ${url} (Status: ${response.status})`);
          continue;
        }
        
        const data = await response.json();
        const discord = data["dex-discord-service"]?.options;
        
        if (discord) {
          this.applyOptionsToUI(data);
          
          // Update Cache
          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            options: data
          }));

          console.log(`ChatSystem: Discord options synchronized from ${url}`);
          return; // Success!
        }
      } catch (err) {
        console.warn(`ChatSystem: Error syncing from ${url}:`, err.message);
      }
    }
    console.error("ChatSystem: Failed to sync options from all available sources.");
  }

  applyOptionsToUI(data) {
    const discord = data["dex-discord-service"]?.options;
    if (!discord) return;

    const elToken = document.getElementById('setting-discord-token');
    const elServer = document.getElementById('setting-discord-server-id');
    const elVoice = document.getElementById('setting-discord-voice-channel');
    const elBuild = document.getElementById('setting-discord-build-channel');
    const elDebug = document.getElementById('setting-discord-debug-channel');
    const elMaster = document.getElementById('setting-discord-master-user');

    if (elToken) elToken.value = discord.token || "*************";
    if (elServer) elServer.value = discord.server_id || "";
    if (elVoice) elVoice.value = discord.default_voice_channel || "";
    if (elBuild) elBuild.value = discord.build_channel_id || "";
    if (elDebug) elDebug.value = discord.debug_channel_id || "";
    if (elMaster) elMaster.value = discord.master_user || "";

    const tts = data["dex-tts-model-service"]?.options;
    if (tts) {
      const elTtsGpu = document.getElementById('setting-tts-gpu-enabled');
      if (elTtsGpu) elTtsGpu.checked = tts.device === 'gpu' || tts.device === 'cuda';
    }

    const stt = data["dex-stt-model-service"]?.options;
    if (stt) {
      const elSttGpu = document.getElementById('setting-stt-gpu-enabled');
      if (elSttGpu) elSttGpu.checked = stt.device === 'gpu' || stt.device === 'cuda';
    }

    const responseModel = data["dex-response-model-service"]?.options;
    if (responseModel) {
      const elResponseGpu = document.getElementById('setting-response-gpu-enabled');
      if (elResponseGpu) elResponseGpu.checked = responseModel.device === 'gpu' || responseModel.device === 'cuda';
    }

    const summaryModel = data["dex-summary-model-service"]?.options;
    if (summaryModel) {
      const elSummaryGpu = document.getElementById('setting-summary-gpu-enabled');
      if (elSummaryGpu) elSummaryGpu.checked = summaryModel.device === 'gpu' || summaryModel.device === 'cuda';
    }

    const system = data["dex-system"]?.options;
    if (system) {
      const elOrchestrator = document.getElementById('setting-system-orchestrator');
      if (elOrchestrator) elOrchestrator.value = system.orchestrator || "";

      const elIdentifier = document.getElementById('setting-system-network-identifier');
      if (elIdentifier) elIdentifier.value = system.network_identifier || "Public Network";
    }

    const assistant = data["dex-assistant-service"]?.options;
    if (assistant) {
      const elFirst = document.getElementById('setting-assistant-first-name');
      const elLast = document.getElementById('setting-assistant-last-name');
      const elRest = document.getElementById('setting-assistant-restrictions');
      
      if (elFirst) elFirst.value = assistant.first_name || "Dexter";
      if (elLast) elLast.value = assistant.last_name || "Easter";
      if (elRest) elRest.value = assistant.restrictions != null ? assistant.restrictions.toString() : "1";
    }

    const developer = data["dex-developer-service"]?.options;
    if (developer) {
      const elFirst = document.getElementById('setting-developer-first-name');
      const elLast = document.getElementById('setting-developer-last-name');
      const elRest = document.getElementById('setting-developer-restrictions');
      
      if (elFirst) elFirst.value = developer.first_name || "Darwin";
      if (elLast) elLast.value = developer.last_name || "Easter";
      if (elRest) elRest.value = developer.restrictions != null ? developer.restrictions.toString() : "1";
    }
  }

  async fetchHistory() {
    if (!this.historyEl) return;
    
    try {
      const categoryParam = this.debugMode ? '' : '&category=messaging';
      const url = `${this.eventServiceUrl}/events?channel=${this.sessionId}${categoryParam}&order=desc&format=json&ml=50`;
      console.log(`ChatSystem: Fetching history from ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`ChatSystem: History fetch failed with status ${response.status}`);
        return;
      }
      
      const data = await response.json();
      if (data && data.events && data.events.length > 0) {
        console.log(`ChatSystem: Fetched ${data.events.length} raw events`);
        
        // Filter events first to see if we have actual messages or reactions
        const validEvents = data.events.filter(e => {
          try {
            const ed = typeof e.event === 'string' ? JSON.parse(e.event) : e.event;
            if (this.debugMode) return true; // Accept all in debug mode
            return ed.type === 'messaging.user.sent_message' || 
                   ed.type === 'messaging.bot.sent_message' || 
                   ed.type === 'messaging.assistant.sent_message' || 
                   ed.type === 'bot_response' ||
                   ed.type === 'messaging.user.reaction_added' ||
                   ed.type === 'messaging.bot.reaction_added';
          } catch(err) { return false; }
        });

        if (validEvents.length > 0) {
          console.log(`ChatSystem: Found ${validEvents.length} valid items in history.`);
          // Clear placeholders/previous content
          this.historyEl.innerHTML = '';
          this.history = [];
          
          // Reverse because we fetched newest first (desc) but want to display chronological (asc)
          validEvents.reverse().forEach(e => {
            const eventData = typeof e.event === 'string' ? JSON.parse(e.event) : e.event;
            const type = eventData.type;
            
            if (type === 'messaging.user.sent_message') {
              this.addMessage('user', 'You', eventData.content, eventData.message_id, false, new Date(e.timestamp * 1000));
            } else if (type === 'messaging.bot.sent_message' || type === 'messaging.assistant.sent_message' || type === 'bot_response') {
              const sender = eventData.user_name || 'Dexter';
              const msgType = eventData.source === 'terminal' ? 'pty' : 'assistant';
              this.addMessage(msgType, sender, eventData.content || eventData.response, eventData.message_id, false, new Date(e.timestamp * 1000));
            } else if (type === 'messaging.user.reaction_added' || type === 'messaging.bot.reaction_added') {
              this.addOrUpdateReaction(eventData.message_id, eventData.emoji, eventData.user_name || 'Dexter');
            } else if (this.debugMode) {
              const formattedEvent = {
                service: e.service || 'system',
                event: eventData
              };
              this.addMessage('event', 'Event', formattedEvent, null, false, new Date(e.timestamp * 1000));
            }
          });
          
          // Final scroll to bottom
          this.historyEl.scrollTop = this.historyEl.scrollHeight;
        } else {
          console.log("ChatSystem: No valid messages found in event history.");
        }
      } else {
        console.log("ChatSystem: No history found for this session.");
      }
    } catch (err) {
      console.error("Failed to fetch history:", err);
    }
  }

  async syncProcessState() {
    try {
      const url = `${this.eventServiceUrl}/processes`;
      const response = await fetch(url);
      if (!response.ok) return;
      
      const data = await response.json();
      const active = data.active || [];
      const queue = data.queue || [];
      
      const ourProcess = [...active, ...queue].find(p => p.channel_id === this.sessionId);
      
      if (ourProcess) {
        this.setProcessing(true);
        this.updateProcessStatus(ourProcess.state);
      } else {
        this.setProcessing(false);
      }

      this.systemBusy = (active.length + queue.length) > 0;
    } catch (err) {
      console.error("Failed to sync process state:", err);
      this.systemBusy = false;
    }
  }

  toggleEmojiPicker(target = null) {
    if (this.emojiPicker) {
      const isOpen = this.emojiPicker.classList.contains('active');
      if (isOpen) {
        this.emojiPicker.classList.remove('active');
      } else {
        this.emojiPicker.classList.add('active');
        // Reposition if it was triggered by a message
        if (target && target.element) {
          const rect = target.element.getBoundingClientRect();
          const pickerHeight = 350; // max-height from CSS
          const spaceAbove = rect.top;
          
          if (spaceAbove > pickerHeight) {
            // Position ABOVE
            this.emojiPicker.style.bottom = (window.innerHeight - rect.top + 10) + 'px';
            this.emojiPicker.style.top = 'auto';
          } else {
            // Position BELOW
            this.emojiPicker.style.top = (rect.bottom + 10) + 'px';
            this.emojiPicker.style.bottom = 'auto';
          }
          this.emojiPicker.style.right = (window.innerWidth - rect.right) + 'px';
        } else {
          // Default input bar position
          this.emojiPicker.style.bottom = '100px';
          this.emojiPicker.style.top = 'auto';
          this.emojiPicker.style.right = '40px';
        }
      }
    }
  }

  pickEmoji(emoji) {
    if (this.activeReactionTarget) {
      // Message Reaction
      this.sendReaction(this.activeReactionTarget.messageId, emoji);
      this.toggleEmojiPicker();
    } else {
      // Input Bar
      if (this.input) {
        this.input.value += emoji;
        this.input.focus();
      }
    }
  }

  async sendReaction(messageId, emoji) {
    const payload = {
      service: "easter.company",
      event: {
        type: "messaging.user.reaction_added",
        source: "web",
        user_id: "anonymous",
        user_name: "Web User",
        channel_id: this.sessionId,
        server_id: window.location.hostname,
        message_id: messageId,
        emoji: emoji,
        timestamp: new Date().toISOString()
      }
    };

    // Optimistic local update
    this.addOrUpdateReaction(messageId, emoji, "Web User");

    try {
      await fetch(`${this.eventServiceUrl}/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error("Error sending reaction:", err);
    }
  }

  addOrUpdateReaction(messageId, emoji, userName) {
    const messageEl = document.querySelector(`[data-message-id="${messageId}"]`);
    if (!messageEl) return;

    let reactionsContainer = messageEl.querySelector('.message-reactions');
    if (!reactionsContainer) {
      reactionsContainer = document.createElement('div');
      reactionsContainer.className = 'message-reactions';
      messageEl.querySelector('.message-bubble').appendChild(reactionsContainer);
    }

    let badge = reactionsContainer.querySelector(`[data-emoji="${emoji}"]`);
    if (badge) {
      const usersStr = badge.dataset.users || "";
      const users = usersStr.split(',').filter(u => u.length > 0);
      
      if (!users.includes(userName)) {
        users.push(userName);
        badge.dataset.users = users.join(',');
        const countEl = badge.querySelector('.reaction-count');
        countEl.textContent = users.length;
        badge.title = users.join(', ');
        badge.classList.add('active');
      }
    } else {
      badge = document.createElement('div');
      badge.className = 'reaction-badge active';
      badge.dataset.emoji = emoji;
      badge.dataset.users = userName;
      badge.title = userName;
      badge.innerHTML = `<span>${emoji}</span><span class="reaction-count">1</span>`;
      reactionsContainer.appendChild(badge);
    }
  }

  async deleteChat() {
    const uiSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'UISystem');
    if (uiSystem) {
      const confirmed = await uiSystem.confirm(
        "Delete Chat", 
        "Are you sure you want to delete this chat instance? This will clear all history and kill any active processes for this session."
      );
      if (!confirmed) return;
    } else {
      if (!confirm("Are you sure you want to delete this chat instance? This will clear all history and kill any active processes for this session.")) {
        return;
      }
    }
    await this._performChatDeletion();
  }

  async setDebugMode(enabled) {
    const uiSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'UISystem');
    let confirmed = false;
    if (uiSystem) {
      confirmed = await uiSystem.confirm(
        "Toggle Debug Mode", 
        "Enabling or disabling debug mode requires deleting the current chat instance. Are you sure you want to proceed?"
      );
    } else {
      confirmed = confirm("Enabling or disabling debug mode requires deleting the current chat instance. Are you sure you want to proceed?");
    }

    if (!confirmed) {
      if (this.debugToggle) {
        this.debugToggle.checked = !enabled;
      }
      return;
    }

    this.debugMode = enabled;
    localStorage.setItem('dex_debug_mode', enabled);
    console.log(`Easter Engine: Debug Mode ${enabled ? 'Enabled' : 'Disabled'}`);
    await this._performChatDeletion();
  }

  async _performChatDeletion() {
    console.log(`ChatSystem: Deleting chat instance ${this.sessionId}`);

    try {
      // 1. Kill any active processes for this session
      await fetch(`${this.eventServiceUrl}/processes/${this.sessionId}`, {
        method: 'DELETE'
      });

      // 2. Delete all events for this channel
      // We use the bulk delete endpoint with channel filter
      await fetch(`${this.eventServiceUrl}/events?channel=${this.sessionId}`, {
        method: 'DELETE'
      });

      // 3. Clear Local State
      this.history = [];
      if (this.historyEl) this.historyEl.innerHTML = '';
      
      // 4. Generate New Session ID
      const oldId = this.sessionId;
      this.sessionId = 'web-' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('dex_session_id', this.sessionId);
      console.log(`ChatSystem: Session reset from ${oldId} to ${this.sessionId}`);

      // 5. Reset UI
      this.setProcessing(false);
      this.isSleeping = false;
      this.historyEl.innerHTML = '';
      this.history = [];

      // 6. Emit Greeting Event to server
      const greetingPayload = {
        service: "easter.company",
        event: {
          type: "greeting",
          channel_id: this.sessionId,
          channel_name: "Private Web Chat",
          timestamp: new Date().toISOString()
        }
      };

      try {
        await fetch(`${this.eventServiceUrl}/post`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(greetingPayload)
        });
      } catch (err) {
        console.error("ChatSystem: Failed to emit initial greeting:", err);
      }
      
      // 7. Close Settings Overlay
      const uiSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'UISystem');
      if (uiSystem) {
        uiSystem.toggleOverlay('settings');
      }

    } catch (err) {
      console.error("ChatSystem: Failed to delete chat:", err);
      const uiSystem = window.easterEngine?.systems?.find(s => s.constructor.name === 'UISystem');
      let errMsg = "Failed to delete chat instance. Please try again.";
      if (this.history.length === 0 && !this.isProcessing) {
         errMsg = "The chat instance could not be deleted because it appears to be empty or already non-existent. A new instance has been provisioned.";
         
         // Force clear local state anyway just in case
         this.sessionId = 'web-' + Math.random().toString(36).substring(2, 15);
         localStorage.setItem('dex_session_id', this.sessionId);
         this.addPlaceholderMessages();
      }
      
      if (uiSystem) {
        await uiSystem.alert("Deletion Failed", errMsg, true);
      } else {
        alert(errMsg);
      }
    }
  }

  resolveUrls() {
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const isSecure = protocol === 'https:';
    
    // 1. Production Domain Strategy
    if (host === 'easter.company' || host === 'www.easter.company') {
      this.apiUrl = 'https://dashboard.easter.company';
      this.wsUrl = 'wss://dashboard.easter.company/ws';
      this.eventServiceUrl = 'https://event.easter.company'; 
      return;
    }

    // 2. Cluster Awareness Resolution Strategy
    // Default targets (Tailscale IPs)
    let apiHost = '100.100.1.3';
    let eventHost = '100.100.1.0';

    // If using machine names, prefer machine names for sub-services
    const isUsingMachineName = !/^[0-9.]+$/.test(host) && host !== 'localhost';

    if (isUsingMachineName) {
      apiHost = 'easter-us-3';
      eventHost = 'easter-server';
    }

    // Local override if literally on the cluster machine
    if (host === '127.0.0.1' || host === 'localhost' || host === '::1') {
      apiHost = isUsingMachineName ? 'easter-us-3' : '100.100.1.3';
      eventHost = host;
    } else if (host === '100.100.1.3' || host === 'easter-us-3') {
      apiHost = host;
      eventHost = isUsingMachineName ? 'easter-server' : '100.100.1.0';
    } else if (host === '100.100.1.0' || host === 'easter-server') {
      apiHost = isUsingMachineName ? 'easter-us-3' : '100.100.1.3';
      eventHost = host;
    } else if (!host.startsWith('100.100.') && !isUsingMachineName) {
      // If we are NOT on the Tailscale network (e.g. LAN or public), fallback to current hostname
      apiHost = host;
      eventHost = host;
    }

    this.apiUrl = `https://${apiHost}:25200`;
    this.wsUrl = `wss://${apiHost}:25200/ws`;
    this.eventServiceUrl = `https://${eventHost}:25100`;
  }

  toggleChatMode() {
    if (this.isActive) {
      this.exitChatMode();
    } else {
      const overlay = document.getElementById('game-overlay');
      const isOverlayActive = overlay && overlay.classList.contains('active');
      if (!isOverlayActive) {
        this.enterChatMode();
      }
    }
  }

  async enterChatMode() {
    if (this.isActive) return;
    this.isActive = true;

    // Show loading screen
    const loadingScreen = document.getElementById('chat-loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'flex';
      loadingScreen.style.opacity = '1';
    }

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

    document.body.classList.add('no-scroll');

    if (this.container) {
      this.container.classList.add('active');
    }

    // Connect WS early
    this.connectWebSocket();

    // Fetch and Sync
    await this.fetchHistory();
    await this.syncProcessState();
    
    // Check Inactivity
    if (this.history.length === 0) {
      console.log("ChatSystem: History empty, requesting initial greeting.");
      
      const greetingPayload = {
        service: "easter.company",
        event: {
          type: "greeting",
          channel_id: this.sessionId,
          channel_name: "Private Web Chat",
          timestamp: new Date().toISOString()
        }
      };

      try {
        await fetch(`${this.eventServiceUrl}/post`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(greetingPayload)
        });
      } catch (err) {
        console.error("ChatSystem: Failed to emit initial greeting:", err);
      }
    } else {
      console.log(`ChatSystem: History resumed with ${this.history.length} messages.`);
      
      const lastMessage = this.history[this.history.length - 1];
      const timeSinceLastMessage = Date.now() - lastMessage.timestamp.getTime();
      const tenMinutes = 10 * 60 * 1000;
      
      if (timeSinceLastMessage > tenMinutes && !this.isProcessing) {
        this.isSleeping = true;
        console.log("ChatSystem: Instance has been inactive for over 10 minutes. Putting to sleep.");
        
        // Only add sleeping indicator if it's not already there
        const alreadyHasSleepMsg = this.historyEl.lastElementChild && 
                                   this.historyEl.lastElementChild.textContent.includes('Chat Instance Deactivated');
        if (!alreadyHasSleepMsg) {
          this.addMessage('system', 'System', 'Chat Instance Deactivated.\nSend a message to reactivate.', null, true);
        }
      }
    }

    // Hide loading screen
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        if (this.isActive && this.input && !this.isProcessing) this.input.focus();
      }, 500);
    }
  }

  exitChatMode() {
    if (!this.isActive) return;
    this.isActive = false;

    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

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

    document.body.classList.remove('no-scroll');

    if (this.container) {
      this.container.classList.remove('active');
    }
    
    if (this.emojiPicker) this.emojiPicker.classList.remove('active');
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
    if (!rawEvent || !rawEvent.event) return;

    if (this.isSleeping && !this.debugMode) {
      return; // Ignore events while sleeping unless debugging
    }

    const eventData = rawEvent.event;
    const type = eventData.type;
    const isOurSession = eventData.channel_id === this.sessionId;

    if (type === 'messaging.user.reaction_added') {
      if (!isOurSession) {
        this.addOrUpdateReaction(eventData.message_id, eventData.emoji, eventData.user_name);
      }
      return;
    }

    if (isOurSession) {
      if (type === 'messaging.user.sent_message') {
        return; 
      } else if (type === 'messaging.bot.sent_message') {
        // Handle streaming updates
        if (eventData.is_debug && !this.debugMode) return;
        const sender = eventData.user_name || 'Dexter';
        this.addMessage('assistant', sender, eventData.content, eventData.message_id);
        this.setProcessing(true); // Still processing if it's just a chunk
      } else if (type === 'bot_response') {
        const sender = eventData.user_name || 'Dexter';
        this.addMessage('assistant', sender, eventData.content || eventData.response || eventData.text, eventData.message_id);
        this.setProcessing(false);
      } else if (type === 'system.process.registered') {
        this.updateProcessStatus(eventData.state || "Processing...");
      } else if (type === 'system.process.unregistered' || type === 'system.process.error' || type === 'system.process.cancelled') {
        console.log(`ChatSystem: Process ${type} for session ${this.sessionId}`);
        this.setProcessing(false);
      } else {
        if (this.debugMode) {
          this.addMessage('event', 'Event', rawEvent);
        }
      }
    } else {
      if (this.debugMode) {
        this.addMessage('event', 'Event', rawEvent);
      }
    }
  }

  async sendMessage() {
    if (this.isProcessing) return;
    if (!this.input || !this.input.value.trim()) return;
    
    // Reactivate if sleeping
    if (this.isSleeping) {
      this.isSleeping = false;
      console.log("ChatSystem: Reactivating from sleep mode.");
      
      // Remove the "Asleep" system message
      const messages = this.historyEl.querySelectorAll('.message-system');
      messages.forEach(msg => {
        if (msg.textContent.includes('Chat Instance Deactivated')) {
          msg.remove();
        }
      });
      this.history = this.history.filter(m => !(m.type === 'system' && m.content.includes('Chat Instance Deactivated')));
    }

    const text = this.input.value.trim();
    this.input.value = '';
    const messageId = this.generateUUID();

    if (text.startsWith('/')) {
      this.handleSlashCommand(text, messageId);
      return;
    }

    this.addMessage('user', 'You', text, messageId);
    this.setProcessing(true);

    const payload = {
      service: "easter.company",
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
        message_id: messageId,
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
        this.setProcessing(false);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      this.setProcessing(false);
    }
  }

  async cancelProcess() {
    if (!this.isProcessing) return;
    
    this.cancelAttempts++;
    
    if (this.cancelAttempts >= 3) {
      console.log("ChatSystem: Force unlocking after multiple cancel attempts.");
      this.setProcessing(false);
      this.cancelAttempts = 0;
      return;
    }

    if (this.input) {
      this.input.placeholder = this.cancelAttempts > 1 ? `Force Unlock (${3 - this.cancelAttempts})...` : "Cancelling...";
    }

    const payload = {
      service: "easter.company",
      event: {
        type: "system.process.cancel_request",
        source: "web",
        channel_id: this.sessionId,
        timestamp: new Date().toISOString()
      }
    };

    try {
      await fetch(`${this.eventServiceUrl}/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error("Error sending cancel request:", err);
      this.setProcessing(false); 
    }
  }

  async handleSlashCommand(text, messageId) {
    const parts = text.substring(1).split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // 0. Handle Virtual Frontend Commands
    if (command === 'clear') {
      if (this.historyEl) {
        this.historyEl.innerHTML = '';
        this.addMessage('system', 'System', 'Visual history cleared.', null, true);
      }
      return;
    }

    this.addMessage('user', 'You', text, messageId);
    this.setProcessing(true);

    const ptyId = this.generateUUID();
    let ptyMessageEl = null;

    try {
      const response = await fetch(`${this.eventServiceUrl}/cli/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          command, 
          args,
          metadata: {
            channel_id: this.sessionId,
            channel_name: "Private Web Chat",
            user_id: "anonymous",
            user_name: "Web User",
            source: "web",
            server_id: window.location.hostname,
            server_name: "Easter Company Web"
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        this.addMessage('system', 'System', `Error: ${errorText}`, null, true);
        this.setProcessing(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let rawBuffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        rawBuffer += decoder.decode(value, { stream: true });

        if (!ptyMessageEl) {
          ptyMessageEl = this.addMessage('pty', 'Terminal', '', ptyId);
        }
        
        this.updatePtyContent(ptyMessageEl, rawBuffer);
      }

      this.setProcessing(false);
    } catch (err) {
      console.error("Slash command failed:", err);
      this.addMessage('system', 'System', `Command failed: ${err.message}`, null, true);
      this.setProcessing(false);
    }
  }

  updatePtyContent(messageEl, raw) {
    const bubble = messageEl.querySelector('.message-bubble');
    if (!bubble) return;

    let screen = [""];
    let row = 0;

    // Regex to match escape sequences, newlines, and carriage returns
    const regex = /(\x1b\[[0-9;]*[A-GJKSTm]|\r|\n)/g;
    const parts = raw.split(regex);

    for (const part of parts) {
      if (!part) continue;

      if (part === '\n') {
        row++;
        if (screen[row] === undefined) screen[row] = "";
      } else if (part === '\r') {
        // Conceptually move to start of line. 
        // We clear the current buffer because the next token will likely be the update.
        screen[row] = "";
      } else if (part.startsWith('\x1b[')) {
        const code = part.charAt(part.length - 1);
        const val = parseInt(part.substring(2, part.length - 1)) || 1;

        if (code === 'A') { // Move cursor up
          row = Math.max(0, row - val);
        } else if (code === 'B') { // Move cursor down
          row += val;
          while (screen.length <= row) screen.push("");
        } else if (code === 'K') { // Clear line
          screen[row] = "";
        } else if (code === 'm') { // Color/Style
          // We must preserve these in the screen buffer for parseAnsi
          screen[row] += part;
        }
      } else {
        // Plain text
        if (screen[row] === undefined) screen[row] = "";
        screen[row] += part;
      }
    }

    // Clean up trailing empty rows
    while (screen.length > 1 && screen[screen.length - 1] === "") screen.pop();

    bubble.innerHTML = this.parseAnsi(screen.join('\n'));
    this.historyEl.scrollTop = this.historyEl.scrollHeight;
  }

  parseAnsi(text) {
    const colors = {
      '30': '#000000', '31': '#ff5f56', '32': '#27c93f', '33': '#ffbd2e',
      '34': '#007aff', '35': '#ff4081', '36': '#00f3ff', '37': '#ffffff',
      '90': '#666666', '91': '#ff5f56', '92': '#27c93f', '93': '#ffbd2e',
      '94': '#007aff', '95': '#ff4081', '96': '#00f3ff', '97': '#ffffff'
    };

    let result = '';
    let i = 0;
    let currentColor = null;
    let isBold = false;

    while (i < text.length) {
      if (text[i] === '\x1b' && text[i + 1] === '[') {
        let j = i + 2;
        let code = '';
        while (j < text.length && text[j] !== 'm') {
          code += text[j];
          j++;
        }
        
        const codes = code.split(';');
        codes.forEach(c => {
          if (c === '0') { currentColor = null; isBold = false; }
          else if (c === '1') { isBold = true; }
          else if (colors[c]) { currentColor = colors[c]; }
        });

        if (currentColor || isBold) {
          result += `<span style="${currentColor ? 'color:' + currentColor + ';' : ''}${isBold ? 'font-weight:bold;' : ''}">`;
        } else {
          result += '</span>';
        }
        i = j + 1;
      } else {
        // Escape HTML
        const char = text[i];
        if (char === '<') result += '&lt;';
        else if (char === '>') result += '&gt;';
        else if (char === '&') result += '&amp;';
        else result += char;
        i++;
      }
    }

    return result;
  }

  updateProcessStatus(status) {
    if (this.input && this.isProcessing) {
      this.input.placeholder = `[Dexter] ${status}`;
    }
  }

  setProcessing(processing) {
    this.isProcessing = processing;
    if (!processing) this.cancelAttempts = 0;
    
    if (this.container) {
      if (processing) {
        this.container.classList.add('locked');
        if (this.input) {
          this.input.placeholder = "Dexter is thinking...";
          this.input.blur();
        }
      } else {
        this.container.classList.remove('locked');
        if (this.input) {
          this.input.placeholder = "Enter command or message...";
          setTimeout(() => { if (this.isActive) this.input.focus(); }, 100);
        }
      }
    }
  }

  generateUUID() {
    if (crypto && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addMessage(type, sender, content, messageId = null, scrollToBottom = true, timestamp = null) {
    const id = messageId || this.generateUUID();
    
    // 1. Check if message already exists (Update mode)
    const existingMsgEl = document.querySelector(`[data-message-id="${id}"]`);
    if (existingMsgEl) {
      const bubble = existingMsgEl.querySelector('.message-bubble');
      if (bubble) {
        // If it's a regular message (not event), just update text
        if (type !== 'event') {
          // Preserve reaction button and reactions if they exist
          const reactBtn = bubble.querySelector('.message-action-btn');
          const reactions = bubble.querySelector('.message-reactions');
          
          if (type === 'pty') {
            bubble.innerHTML = this.parseAnsi(content);
          } else {
            bubble.textContent = content;
          }
          
          if (reactBtn) bubble.appendChild(reactBtn);
          if (reactions) bubble.appendChild(reactions);
        }
      }
      return existingMsgEl;
    }

    const lastMsg = this.history.length > 0 ? this.history[this.history.length - 1] : null;
    const isContinuation = lastMsg && lastMsg.type === type && lastMsg.sender === sender;

    const msg = { type, sender, content, id, timestamp: timestamp || new Date() };
    this.history.push(msg);

    if (this.historyEl) {
      const msgEl = document.createElement('div');
      msgEl.className = `chat-message message-${type}${isContinuation ? ' group-continuation' : ''}`;
      msgEl.dataset.messageId = id;
      
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
      } else if (type === 'pty') {
        bubble.innerHTML = this.parseAnsi(content);
      } else {
        bubble.textContent = content;
        
        let isSingleEmoji = false;
        try {
          const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
          const segments = Array.from(segmenter.segment(content.trim()));
          if (segments.length === 1 && /\p{Extended_Pictographic}/u.test(segments[0].segment)) {
            isSingleEmoji = true;
          }
        } catch (e) {
          const text = content.trim();
          isSingleEmoji = text.length > 0 && text.length <= 10 && /\p{Extended_Pictographic}/u.test(text) && !/[a-zA-Z0-9]/.test(text);
        }
        
        if (isSingleEmoji) {
          bubble.classList.add('emoji-only');
        }
        
        // Add Reaction Button
        const reactBtn = document.createElement('div');
        reactBtn.className = 'message-action-btn';
        reactBtn.innerHTML = "<i class='bx bx-smile'></i>";
        reactBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.activeReactionTarget = { element: msgEl, messageId: id };
          this.toggleEmojiPicker(this.activeReactionTarget);
        });
        bubble.appendChild(reactBtn);
      }

      if (!isContinuation) {
        msgEl.appendChild(label);
      }
      msgEl.appendChild(bubble);
      this.historyEl.appendChild(msgEl);
      if (scrollToBottom) {
        this.historyEl.scrollTop = this.historyEl.scrollHeight;
      }
      return msgEl;
    }
    return null;
  }

  update(registry) {
    const t = registry.time;
    registry.isProcessing = this.isProcessing;
    registry.systemBusy = this.systemBusy;

    // Toggle scrollable class for gradient mask
    if (this.historyEl) {
      const isScrollable = this.historyEl.scrollHeight > this.historyEl.clientHeight;
      this.historyEl.classList.toggle('is-scrollable', isScrollable);
    }

    // Synchronized Heartbeat Calculation (2s period)
    const period = 2.0;
    const phase = (t % period) / period;
    let heartbeat = 0;
    // Smoother, longer pulses for neural flow
    if (phase < 0.25) heartbeat = phase / 0.25; 
    else if (phase < 0.5) heartbeat = 1.0 - (phase - 0.25) / 0.25;
    else if (phase < 0.6) heartbeat = (phase - 0.5) / 0.1 * 0.4;
    else if (phase < 0.7) heartbeat = 0.4 - (phase - 0.6) / 0.1 * 0.4;
    
    registry.heartbeatIntensity = Math.max(0.1, heartbeat);

    // Sync Neural Core visibility and animation
    const core = document.getElementById('neural-core');
    if (core) {
      if (this.systemBusy) {
        core.classList.add('active');
        const img = core.querySelector('img');
        if (img) {
          const scale = 1.0 + (heartbeat * 0.1);
          const brightness = 1.0 + (heartbeat * 0.5);
          img.style.transform = `scale(${scale})`;
          img.style.filter = `drop-shadow(0 0 30px rgba(0, 243, 255, 0.4)) brightness(${brightness})`;
        }
      } else {
        core.classList.remove('active');
      }
    }
  }
}
