// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login, getUserEmail } from './auth.js';
import { initTheme, setTheme, getCurrentTheme, THEMES } from './theme.js';
import { getLogsContent, updateLogs } from './logs.js';

function onReady() {
  console.log("Welcome to Easter Company.");

  initTheme();
  applyBaseStyles();
  const loggedIn = isLoggedIn();
  injectNavbar(loggedIn);
  injectFooter();

  // --- Window Management ---
  const footer = document.querySelector('footer');
  let openWindow = null;

  function onWindowClose() {
    openWindow = null;
    footer?.classList.remove('hide');
    document.querySelectorAll('.nav-right i').forEach(icon => icon.classList.remove('active', 'inactive'));
  }

  function handleWindow(windowInstance, clickedIcon = null) {
    const isCurrentlyOpen = openWindow && openWindow.id === windowInstance.id;
    if (openWindow) {
      openWindow.close(isCurrentlyOpen ? false : true);
    }
    if (!isCurrentlyOpen) {
      setTimeout(() => {
        windowInstance.open();
        openWindow = windowInstance;
        document.querySelectorAll('.nav-right i').forEach(icon => {
          const isActive = icon === clickedIcon;
          icon.classList.toggle('active', isActive);
          icon.classList.toggle('inactive', !isActive && clickedIcon);
        });
        footer?.classList.add('hide');
      }, openWindow ? 220 : 0);
    } else {
      openWindow = null;
    }
  }

  // --- Placeholder & Content Functions ---
  function createPlaceholderMessage(type, message, actionText = null) {
    const iconMap = { config: 'bx-cog', error: 'bx-error-circle', empty: 'bx-info-circle', offline: 'bx-wifi-off' };
    const icon = iconMap[type] || 'bx-info-circle';
    const actionHtml = actionText ? `<p class="placeholder-action">${actionText}</p>` : '';
    return `<div class="tab-placeholder"><i class='bx ${icon} placeholder-icon'></i><p class="placeholder-message">${message}</p>${actionHtml}</div>`;
  }

  let lastServicesUpdate = null, lastEventsUpdate = null, lastLogsUpdate = null, lastModelsUpdate = null, lastProcessesUpdate = null;
  const getServicesContent = () => localStorage.getItem('service_map') ? `<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
  const getModelsContent = () => localStorage.getItem('service_map') ? `<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
  const getProcessesContent = () => localStorage.getItem('service_map') ? `<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
  const getEventsContent = () => `<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>`;

  // --- Event Templates & Formatting ---
  const EVENT_TEMPLATES = {
    "message_received": "{user} posted in {channel}: {message}",
    "action_performed": "{actor} {action} {target}",
    "log_entry": "[{level}] {message}",
    "error_occurred": "ERROR: {error}",
    "status_change": "{entity} changed status to {new_status}",
    "metric_recorded": "{metric_name}: {value}{unit}",
    "messaging.user.joined_voice": "{user_name} joined voice channel {channel_name}",
    "messaging.user.left_voice": "{user_name} left voice channel {channel_name}",
    "messaging.user.sent_message": "{user_name} in {channel_name}: {content}",
    "messaging.bot.sent_message": "Dexter sent in {channel_name}: {content}",
    "messaging.bot.joined_voice": "Dexter joined voice channel {channel_name}",
    "messaging.bot.voice_response": "Dexter said: {content}",
    "messaging.bot.status_update": "Dexter status changed to {status}: {details}",
    "messaging.user.speaking.started": "{user_name} started speaking",
    "messaging.user.speaking.stopped": "{user_name} stopped speaking",
    "messaging.user.transcribed": "{user_name} said: {transcription}",
    "messaging.user.joined_server": "{user_name} joined {server_name}",
    "messaging.webhook.message": "{user_name} (Webhook): {content}",
    "webhook.processed": "Webhook processed: {status}",
    "voice_speaking_started": "User {user_id} started speaking in voice channel {channel_id}",
    "voice_speaking_stopped": "User {user_id} stopped speaking in voice channel {channel_id}",
    "voice_transcribed": "{user_name} said: {transcription}",
    "engagement.decision": "Engagement Decision: {decision} ({reason})",
    "bot_response": "Bot Responded: {response}"
  };

  function formatEventSummary(type, data) {
    let template = EVENT_TEMPLATES[type];
    if (type === 'voice_transcribed' && !data.user_name && data.user_id) {
      template = "User {user_id} said in voice channel {channel_id}: {transcription}";
    }
    if (!template) return type;
    let summary = template.replace(/\{(\w+)\}/g, (match, key) => {
      return data[key] !== undefined && data[key] !== null ? data[key] : match;
    });
    if ((type === 'messaging.user.transcribed' || type === 'voice_transcribed') &&
      data.detected_language && data.detected_language !== 'en' && data.english_translation) {
      summary += ` (Translation: ${data.english_translation})`;
    }
    return summary;
  }

  // --- Data Fetching & UI Updates ---
  function updateTabTimestamp(tabIndex, timestamp) {
    const subtitleElement = document.querySelector(`.tab[data-tab-index="${tabIndex}"] .tab-subtitle`);
    if (!subtitleElement) return;
    if (!timestamp) {
      subtitleElement.textContent = 'Last updated: never';
      return;
    }
    const now = Date.now();
    const seconds = (now - timestamp) / 1000;
    let timeStr;
    if (seconds < 30) {
      timeStr = `${Math.floor(seconds)}s ago`;
    } else {
      subtitleElement.textContent = 'Last updated: never';
      return;
    }
    subtitleElement.textContent = `Last updated: ${timeStr}`;
  }

  async function fetchSystemData() {
    if (!localStorage.getItem('service_map')) return null;
    try {
      const serviceMap = JSON.parse(localStorage.getItem('service_map'));
      const eventService = (serviceMap.services?.cs || []).find(s => s.id === 'dex-event-service');
      if (!eventService) return null;
      const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
      const url = `http://${domain}:${eventService.port}/system_monitor`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching system data:', error);
      return null;
    }
  }

  async function updateSystemMonitor() {
    const widgetsContainer = document.getElementById('services-widgets');
    if (!widgetsContainer) return;

    const data = await fetchSystemData();

    if (!data || !data.services) {
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'The event service may be offline or unreachable.');
      return;
    }

    lastServicesUpdate = Date.now();
    updateTabTimestamp(4, lastServicesUpdate);
    const services = data.services || [];

    Array.from(widgetsContainer.children).forEach(child => {
      if (!child.classList.contains('service-widget')) child.remove();
    });

    function sanitizeValue(value) { if (!value || value === 'N/A' || value === 'unknown' || value.trim() === '') { return '-'; } return value; }
    function extractMajorMinorPatch(versionStr) { if (!versionStr || versionStr === 'N/A' || versionStr === 'unknown') { return '-'; } const match = versionStr.match(/^(\d+\.\d+\.\d+)/); if (match) return match[0]; return versionStr.split('.').slice(0, 3).join('.') || '-'; }
    function truncateAddress(address) { if (!address || address.length <= 28) return address; return address.substring(0, 28) + '...'; }
    function getStatColor(value) { if (!value || !value.includes('%')) return '#666'; const percent = parseFloat(value); if (percent < 30) return '#00ff00'; if (percent < 60) return '#88ff00'; if (percent < 80) return '#ffaa00'; return '#ff0000'; }
    function formatUptime(uptimeStr) { if (!uptimeStr || uptimeStr === 'N/A' || uptimeStr === 'unknown') return '-'; const match = uptimeStr.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/); if (!match) return '-'; const days = parseInt(match[1]) || 0; const hours = parseInt(match[2]) || 0; const minutes = parseInt(match[3]) || 0; const seconds = parseFloat(match[4]) || 0; const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds; const totalDays = Math.floor(totalSeconds / 86400); if (totalDays > 0) return `${totalDays}d`; const totalHours = Math.floor(totalSeconds / 3600); if (totalHours > 0) return `${totalHours}h`; const totalMinutes = Math.floor(totalSeconds / 60); if (totalMinutes > 0) return `${totalMinutes}m`; return `${Math.floor(totalSeconds)}s`; }

    function generateWidgetHtml(service) {
      const isOnline = service.status === 'online';
      const statusClass = isOnline ? 'service-widget-online' : 'service-widget-offline';
      const statusIcon = isOnline ? 'bx-check-circle' : 'bx-x-circle';
      const statusText = isOnline ? 'OK' : 'BAD';
      let versionDisplay = service.version ? extractMajorMinorPatch(service.version.str) : '-';
      const cpuValue = sanitizeValue(service.cpu);
      const memoryValue = sanitizeValue(service.memory);
      const cpuColor = getStatColor(cpuValue);
      const memoryColor = getStatColor(memoryValue);
      const uptime = formatUptime(service.uptime);
      let detailsHtml = '';
      if (isOnline) {
        detailsHtml = `<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${versionDisplay}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${uptime}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${cpuColor};"></i><span style="color: ${cpuColor};">${cpuValue}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${memoryColor};"></i><span style="color: ${memoryColor};">${memoryValue}</span></div></div>`;
      } else {
        detailsHtml = `<div class="service-widget-footer offline"><span>OFFLINE</span></div>`;
      }
      return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${truncateAddress(service.domain && service.port ? `${service.domain}:${service.port}` : '')}</span></div>${detailsHtml}</div></div>`;
    }

    const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.service-widget')).map(widget => [widget.dataset.serviceId, widget]));
    const incomingServiceIds = new Set(services.map(s => s.id));

    for (const [id, widget] of existingWidgetsMap) {
      if (!incomingServiceIds.has(id)) {
        widget.remove();
      }
    }

    services.forEach(service => {
      const newHtml = generateWidgetHtml(service);
      const existingWidget = existingWidgetsMap.get(service.id);
      if (existingWidget) {
        if (existingWidget.outerHTML !== newHtml) existingWidget.outerHTML = newHtml;
      } else {
        widgetsContainer.insertAdjacentHTML('beforeend', newHtml);
      }
    });
  }

  async function updateModelsTab() {
    const widgetsContainer = document.getElementById('models-widgets');
    if (!widgetsContainer) return;

    const data = await fetchSystemData();

    if (!data) { // General fetch failure
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load model status.');
      return;
    }

    lastModelsUpdate = Date.now();
    updateTabTimestamp(3, lastModelsUpdate);

    const models = data.models || [];
    const whisperStatus = data.whisper;

    // Clear loading message before rendering
    Array.from(widgetsContainer.children).forEach(child => {
      if (!child.classList.contains('service-widget')) child.remove();
    });

    function generateWhisperWidgetHtml(whisper) {
      const isReady = whisper.status === 'Ready';
      const statusClass = isReady ? 'service-widget-online' : 'service-widget-offline';
      const statusText = isReady ? 'READY' : 'NOT FOUND';
      const icon = 'bxs-microphone-alt';

      return `
                <div class="service-widget ${statusClass}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx ${icon}"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${statusText}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${whisper.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`;
    }

    function generateModelWidgetHtml(model) {
      const isDownloaded = model.status === 'Downloaded';
      const statusClass = isDownloaded ? 'service-widget-online' : 'service-widget-offline';
      const statusText = isDownloaded ? 'OK' : 'MISSING';
      const sizeDisplay = isDownloaded && model.size > 0 ? `${(model.size / 1e9).toFixed(2)} GB` : '-';

      let modelDisplayName = model.name;
      if (model.type === 'custom' && modelDisplayName.endsWith(':latest')) {
        modelDisplayName = modelDisplayName.replace(':latest', '');
      }

      return `<div class="service-widget ${statusClass}" data-model-name="${model.name}"><div class="service-widget-header"><i class="bx ${isDownloaded ? 'bx-check-circle' : 'bx-x-circle'}"></i><h3>${modelDisplayName}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${model.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${sizeDisplay}</span></div></div></div>`;
    }

    let finalHtml = '';
    if (whisperStatus) {
      finalHtml += generateWhisperWidgetHtml(whisperStatus);
    }
    finalHtml += models.map(generateModelWidgetHtml).join('');

    if (!finalHtml) {
      widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No models found.');
      return;
    }

    // Basic diffing to avoid re-rendering identical content
    if (widgetsContainer.innerHTML !== finalHtml) {
      widgetsContainer.innerHTML = finalHtml;
    }
  }

  async function fetchProcessData() {
    if (!localStorage.getItem('service_map')) return null;
    try {
      const serviceMap = JSON.parse(localStorage.getItem('service_map'));
      const eventService = (serviceMap.services?.cs || []).find(s => s.id === 'dex-event-service');
      if (!eventService) return null;
      const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
      const url = `http://${domain}:${eventService.port}/processes`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching process data:', error);
      return null;
    }
  }

  async function updateProcessesTab() {
    const widgetsContainer = document.getElementById('processes-widgets');
    if (!widgetsContainer) return;

    const processes = await fetchProcessData();

    if (processes === null) {
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load process status.');
      return;
    }

    lastProcessesUpdate = Date.now();
    updateTabTimestamp(2, lastProcessesUpdate); // Index 2

    if (processes.length === 0) {
      widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
      return;
    }

    // Clear loading/placeholder messages
    if (widgetsContainer.querySelector('.tab-placeholder') || widgetsContainer.querySelector('p')) {
      widgetsContainer.innerHTML = '';
    }

    function generateProcessWidgetHtml(proc) {
      const duration = Math.floor((Date.now() / 1000) - proc.start_time);
      const retryBadge = proc.retries > 0 ? `<span class="process-retry-badge">Retry ${proc.retries}</span>` : '';

      return `
                <div class="service-widget process-widget" data-channel-id="${proc.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${proc.channel_id}</h3>
                        ${retryBadge}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${proc.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${duration}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${proc.pid}</span>
                        </div>
                    </div>
                </div>`;
    }

    const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.process-widget')).map(widget => [widget.dataset.channelId, widget]));
    const incomingIds = new Set(processes.map(p => p.channel_id));

    for (const [id, widget] of existingWidgetsMap) {
      if (!incomingIds.has(id)) {
        widget.remove();
      }
    }

    processes.forEach(proc => {
      const newHtml = generateProcessWidgetHtml(proc);
      const existingWidget = existingWidgetsMap.get(proc.channel_id);
      if (existingWidget) {
        if (existingWidget.outerHTML !== newHtml) existingWidget.outerHTML = newHtml;
      } else {
        widgetsContainer.insertAdjacentHTML('beforeend', newHtml);
      }
    });
  }

  async function updateEventsTimeline() {
    const eventsContainer = document.getElementById('events-timeline');
    if (!eventsContainer) return;
    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
      eventsContainer.innerHTML = createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
      return;
    }
    let eventService = null;
    try {
      const serviceMapData = JSON.parse(serviceMapString);
      eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
    } catch (e) { eventsContainer.innerHTML = createPlaceholderMessage('error', 'Invalid service map data.'); return; }
    if (!eventService) { eventsContainer.innerHTML = createPlaceholderMessage('error', 'Event service not found in service map.'); return; }

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    const eventsUrl = `http://${domain}:${eventService.port}/events?ml=50&format=json`;

    try {
      const expandedEventIds = new Set(
        Array.from(eventsContainer.querySelectorAll('.event-item.expanded'))
          .map(el => el.dataset.eventId)
          .filter(id => id)
      );

      const response = await fetch(eventsUrl);
      if (!response.ok) throw new Error('Service is offline or unreachable.');

      const data = await response.json();
      const events = data.events || [];

      if (events.length === 0) {
        eventsContainer.innerHTML = createPlaceholderMessage('empty', 'No events found.');
        return;
      }

      const createEventElement = (event) => {
        let eventData = event.event;
        if (typeof eventData === 'string') {
          try {
            eventData = JSON.parse(eventData);
          } catch (e) {
            return null;
          }
        }

        const type = eventData.type;
        const isExpandable = type === 'engagement.decision' || type === 'messaging.bot.sent_message' || type === 'messaging.user.sent_message';
        const borderClass = isExpandable ? 'event-border-blue' : 'event-border-grey';
        const cursorClass = isExpandable ? 'cursor-pointer' : '';

        const isExpanded = expandedEventIds.has(event.id);
        const expandedClass = isExpanded ? 'expanded' : '';
        const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

        const utcDate = new Date(event.timestamp * 1000);
        const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

        const summary = formatEventSummary(type, eventData);

        let detailsHtml = '';
        if (isExpandable) {
          let detailsContent = '';
          if (type === 'engagement.decision') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${eventData.engagement_model || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${eventData.context_history || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${eventData.engagement_raw || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'messaging.bot.sent_message') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${eventData.response_model || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${eventData.raw_input || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${eventData.response_raw || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'messaging.user.sent_message') {
            let attachmentsHtml = '';
            if (eventData.attachments && eventData.attachments.length > 0) {
              const attachmentsList = eventData.attachments.map(att => {
                const isImage = att.content_type && att.content_type.startsWith('image/');
                const sizeStr = (att.size / 1024).toFixed(1) + ' KB';
                return `
                                    <div class="attachment-item">
                                        ${isImage ? `<div class="attachment-thumb-container"><img src="${att.url}" alt="${att.filename}" class="attachment-thumb"></div>` : `<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${att.url}" target="_blank" class="attachment-link">${att.filename}</a>
                                            <span class="attachment-meta">${att.content_type} • ${sizeStr}</span>
                                        </div>
                                    </div>`;
              }).join('');

              attachmentsHtml = `
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${attachmentsList}</div>
                                </div>`;
            }

            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${eventData.content || '(empty)'}</pre>
                            </div>
                            ${attachmentsHtml}
                         `;
          }

          detailsHtml = `
                        <div class="event-details" style="${detailsStyle}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${detailsContent}
                        </div>
                    `;
        }

        const tempDiv = document.createElement('div');
        tempDiv.className = `event-item ${borderClass} ${cursorClass} ${expandedClass}`;
        tempDiv.dataset.eventId = event.id;
        tempDiv.onclick = function (e) {
          if (!isExpandable) return;
          this.classList.toggle('expanded');
          const details = this.querySelector('.event-details');
          if (details) details.style.display = details.style.display === 'none' ? 'block' : 'none';
        };

        tempDiv.innerHTML = `
                    <div class="event-time">
                        <span class="event-time-main">${timeStr}</span>
                        <span class="event-date">${dateStr}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${event.service}</div>
                        <div class="event-message">${summary}</div>
                        ${detailsHtml}
                    </div>
                `;

        if (isExpandable) {
          const closeBtn = tempDiv.querySelector('.close-details-btn');
          if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              const item = e.target.closest('.event-item');
              if (item) {
                item.classList.remove('expanded');
                const details = item.querySelector('.event-details');
                if (details) details.style.display = 'none';
              }
            });
          }
        }

        return tempDiv;
      };

      const currentChildren = Array.from(eventsContainer.children);
      const currentMap = new Map(currentChildren.map(el => [el.dataset.eventId, el]));
      const newIds = new Set(events.map(e => e.id));

      // 1. Remove old events not in the new list
      currentChildren.forEach(child => {
        if (!child.dataset.eventId || !newIds.has(child.dataset.eventId)) {
          child.remove();
        }
      });

      let previousElement = null;

      events.forEach((event, index) => {
        let el = currentMap.get(event.id);
        if (!el) {
          el = createEventElement(event);
          if (!el) return;
        }
        if (index === 0) {
          if (eventsContainer.firstElementChild !== el) {
            eventsContainer.prepend(el);
          }
        } else {
          if (previousElement && previousElement.nextElementSibling !== el) {
            previousElement.after(el);
          }
        }
        previousElement = el;
      });

      lastEventsUpdate = Date.now();
      updateTabTimestamp(1, lastEventsUpdate);

    } catch (error) {
      console.error('Error fetching events:', error);
      if (eventsContainer.children.length === 0) {
        eventsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load events.', 'The event service may be offline or unreachable.');
      }
    }
  }

  async function initializeMessageWindow() {
    await Promise.all([
      updateSystemMonitor(),
      updateModelsTab(),
      updateEventsTimeline(),
      updateProcessesTab(),
      updateLogs().then(success => { if (success) lastLogsUpdate = Date.now(); updateTabTimestamp(3, lastLogsUpdate); })
    ]);

    const timestampInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(timestampInterval);
      updateTabTimestamp(3, lastLogsUpdate);
      updateTabTimestamp(2, lastEventsUpdate);
      updateTabTimestamp(4, lastModelsUpdate);
      updateTabTimestamp(5, lastServicesUpdate);
      updateTabTimestamp(1, lastProcessesUpdate);
    }, 1000);

    const refreshInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(refreshInterval);
      updateEventsTimeline();
      updateProcessesTab();
      updateLogs().then(success => { if (success) lastLogsUpdate = Date.now(); updateTabTimestamp(3, lastLogsUpdate); });
    }, 3000); // Events and Logs now update every 3 seconds

    const servicesRefreshInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(servicesRefreshInterval);
      updateSystemMonitor();
      updateModelsTab();
    }, 60000); // Services and Models now update every 60 seconds
  }

  // Settings Window (Full Implementation)
  function getSettingsContent() {
    const currentTheme = getCurrentTheme();
    const userEmail = getUserEmail() || 'user@easter.company';
    const notificationState = { enabled: Notification.permission === 'granted', supported: 'Notification' in window };
    const analyticsEnabled = localStorage.getItem('easter_analytics_enabled') !== 'false';

    return `
            <div class="theme-selector">
                ${Object.values(THEMES).map(theme => `
                    <div class="theme-card ${currentTheme === theme ? 'active' : ''}" data-theme="${theme}">
                        <div class="theme-preview theme-preview-${theme.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${theme}</h3>
                            <p>${theme === THEMES.AUTO ? 'Automatic theme selection.' : theme === THEMES.DEFAULT ? 'Simple, black, default.' : 'Colourful, not bright.'}</p>
                            <span class="theme-badge">${currentTheme === theme ? 'Active' : 'Select'}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Configuration</h2>
                <div class="settings-list">
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Services</label>
                            <span class="settings-item-description">Upload your service-map.json to connect this client to your services.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="service-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="service-map-file-name">${localStorage.getItem('service_map') ? 'service-map.json' : 'No file selected'}</span>
                            <input type="file" class="file-upload-input" id="service-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem('service_map') ? '<button class="file-delete-btn" id="service-map-delete-btn" title="Delete service map">×</button>' : ''}
                        </div>
                        <div class="file-upload-error" id="service-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Servers</label>
                            <span class="settings-item-description">Upload your server-map.json to connect this client to your servers.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="server-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="server-map-file-name">${localStorage.getItem('server_map') ? 'server-map.json' : 'No file selected'}</span>
                            <input type="file" class="file-upload-input" id="server-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem('server_map') ? '<button class="file-delete-btn" id="server-map-delete-btn" title="Delete server map">×</button>' : ''}
                        </div>
                        <div class="file-upload-error" id="server-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">User Settings</label>
                            <span class="settings-item-description">Upload your options.json to configure user preferences.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="options-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="options-file-name">${localStorage.getItem('user_options') ? 'options.json' : 'No file selected'}</span>
                            <input type="file" class="file-upload-input" id="options-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem('user_options') ? '<button class="file-delete-btn" id="options-delete-btn" title="Delete user settings">×</button>' : ''}
                        </div>
                        <div class="file-upload-error" id="options-error" style="display: none;"></div>
                    </div>
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Preferences</h2>
                <div class="settings-list">
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Notifications</span>
                            <span class="settings-item-description">${notificationState.supported ? 'Receive desktop notifications' : 'Not supported in this browser'}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${notificationState.enabled ? 'checked' : ''} ${!notificationState.supported ? 'disabled' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="settings-item" id="microphone-setting-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Access Microphone</span>
                            <span class="settings-item-description">Allow access to your microphone</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="microphone-toggle" disabled>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Analytics</span>
                            <span class="settings-item-description">Help improve the platform (enables debug mode)</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="analytics-toggle" ${analyticsEnabled ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`;
  }

  function attachSettingsListeners() {
    const settingsContent = document.querySelector('#settings-window .window-content');
    if (!settingsContent) return;

    settingsContent.querySelectorAll('.theme-card').forEach(card => {
      card.addEventListener('click', function () {
        const newTheme = this.dataset.theme;
        setTheme(newTheme);
        settingsWindow.setContent(getSettingsContent());
        attachSettingsListeners();
      });
    });

    function attachFileUploadListeners(buttonId, inputId, nameId, errorId, deleteId, localStorageKey, expectedFileName) {
      const uploadBtn = document.getElementById(buttonId);
      const fileInput = document.getElementById(inputId);
      const fileNameSpan = document.getElementById(nameId);
      const errorDiv = document.getElementById(errorId);
      const deleteBtn = document.getElementById(deleteId);

      if (uploadBtn && fileInput) {
        uploadBtn.onclick = () => fileInput.click();
        fileInput.onchange = (e) => {
          const file = e.target.files[0];
          if (!file) return;
          if (file.name !== expectedFileName) {
            errorDiv.textContent = `File must be named "${expectedFileName}"`;
            errorDiv.style.display = 'block';
            fileInput.value = '';
            return;
          }
          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              const jsonContent = JSON.parse(event.target.result);
              localStorage.setItem(localStorageKey, JSON.stringify(jsonContent));
              fileNameSpan.textContent = expectedFileName;
              errorDiv.style.display = 'none';
              settingsWindow.setContent(getSettingsContent());
              attachSettingsListeners();
            } catch (error) {
              errorDiv.textContent = 'Invalid JSON format';
              errorDiv.style.display = 'block';
              fileInput.value = '';
            }
          };
          reader.onerror = () => {
            errorDiv.textContent = 'Failed to read file';
            errorDiv.style.display = 'block';
            fileInput.value = '';
          };
          reader.readAsText(file);
        };
      }
      if (deleteBtn) {
        deleteBtn.onclick = () => {
          localStorage.removeItem(localStorageKey);
          settingsWindow.setContent(getSettingsContent());
          attachSettingsListeners();
        };
      }
    }
    attachFileUploadListeners('service-map-upload-btn', 'service-map-input', 'service-map-file-name', 'service-map-error', 'service-map-delete-btn', 'service_map', 'service-map.json');
    attachFileUploadListeners('server-map-upload-btn', 'server-map-input', 'server-map-file-name', 'server-map-error', 'server-map-delete-btn', 'server_map', 'server-map.json');
    attachFileUploadListeners('options-upload-btn', 'options-input', 'options-file-name', 'options-error', 'options-delete-btn', 'user_options', 'options.json');

    const notificationToggle = document.getElementById('notifications-toggle');
    if (notificationToggle) {
      const micState = 'permissions' in navigator && navigator.permissions.query({ name: 'microphone' });
      if (!micState || micState.state === 'denied') notificationToggle.disabled = true;

      notificationToggle.onclick = async (e) => {
        if (e.target.checked) {
          try { const permission = await Notification.requestPermission(); if (permission !== 'granted') e.target.checked = false; }
          catch (error) { e.target.checked = false; }
        } else if (Notification.permission === 'granted') {
          alert('To disable notifications, please use your browser settings.');
          e.target.checked = true;
        }
      };
    }

    const microphoneToggle = document.getElementById('microphone-toggle');
    async function updateMicrophoneToggleState() {
      const micState = 'permissions' in navigator ? await navigator.permissions.query({ name: 'microphone' }) : null;
      if (microphoneToggle) {
        microphoneToggle.disabled = !micState || micState.state === 'denied';
        microphoneToggle.checked = micState?.state === 'granted';
      }
      const description = document.querySelector('#microphone-setting-item .settings-item-description');
      if (description) description.textContent = micState ? (micState.state === 'granted' ? 'Microphone access granted' : 'Allow access to your microphone') : 'Not supported in this browser';
    }
    updateMicrophoneToggleState();
    if (microphoneToggle && !microphoneToggle.disabled) {
      microphoneToggle.onclick = async (e) => {
        if (e.target.checked) {
          try { await navigator.mediaDevices.getUserMedia({ audio: true }); updateMicrophoneToggleState(); }
          catch (error) { e.target.checked = false; updateMicrophoneToggleState(); }
        } else {
          const micState = 'permissions' in navigator && await navigator.permissions.query({ name: 'microphone' });
          if (micState?.state === 'granted') {
            alert('To disable microphone access, please use your browser settings.');
            e.target.checked = true;
          }
        }
      };
    }

    const analyticsToggle = document.getElementById('analytics-toggle');
    if (analyticsToggle) {
      analyticsToggle.checked = localStorage.getItem('easter_analytics_enabled') !== 'false';
      analyticsToggle.onclick = (e) => {
        const enabled = e.target.checked;
        localStorage.setItem('easter_analytics_enabled', enabled);
        window.EASTER_ANALYTICS_ENABLED = enabled;
        window.EASTER_DEBUG_MODE = enabled;
      };
    }
  }

  // Define windows with definitions in scope
  const loginWindow = createWindow({ id: 'login-window', title: 'Welcome', content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`, icon: 'bx-log-in', onClose: onWindowClose });
  const userWindow = createWindow({ id: 'user-window', title: 'User Profile', content: `<p>Logged in as: ${getUserEmail() || 'Unknown'}</p>`, icon: 'bx-user', onClose: onWindowClose });

  const settingsWindow = createWindow({
    id: 'settings-window', title: 'Settings', content: getSettingsContent(), icon: 'bx-cog', onClose: onWindowClose, onOpen: () => {
      settingsWindow.setContent(getSettingsContent());
      setTimeout(attachSettingsListeners, 50);
    }
  });

  const messageWindow = createWindow({
    id: 'message-window',
    tabs: [
      { icon: 'bx-bell', title: 'Notifications', content: createPlaceholderMessage('empty', 'No notifications yet.'), 'data-tab-index': 0 },
      { icon: 'bx-cog', title: 'Processes', content: getProcessesContent(), 'data-tab-index': 1 },      // Index 1 for Processes
      { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent(), 'data-tab-index': 2 }, // Index 2 for Events
      { icon: 'bx-history', title: 'Logs', content: getLogsContent(), 'data-tab-index': 3 },      // Index 3 for Logs
      { icon: 'bx-brain', title: 'Models', content: getModelsContent(), 'data-tab-index': 4 },        // Index 4 for Models
      { icon: 'bx-line-chart', title: 'Services', content: getServicesContent(), 'data-tab-index': 5 } // Index 5 for Services
    ],
    icon: 'bxs-message-dots',
    onClose: onWindowClose,
    onOpen: () => setTimeout(initializeMessageWindow, 100)
  });

  if (loggedIn) {
    document.getElementById('user-icon')?.addEventListener('click', (e) => handleWindow(userWindow, e.currentTarget));
    document.getElementById('message-icon')?.addEventListener('click', (e) => handleWindow(messageWindow, e.currentTarget));
    document.getElementById('settings-icon')?.addEventListener('click', (e) => handleWindow(settingsWindow, e.currentTarget));
  } else {
    document.getElementById('login-btn')?.addEventListener('click', () => {
      handleWindow(loginWindow);
      setTimeout(() => {
        document.getElementById('login-form')?.addEventListener('submit', e => {
          e.preventDefault();
          try {
            login(document.getElementById('email-input').value);
            window.location.reload();
          } catch (error) {
            const errorDiv = document.getElementById('login-error');
            if (errorDiv) {
              errorDiv.textContent = error.message;
              errorDiv.style.display = 'block';
            }
          }
        });
      }, 100);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}
