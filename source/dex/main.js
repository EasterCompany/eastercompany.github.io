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

    let lastSystemMonitorUpdate = null, lastEventsUpdate = null, lastLogsUpdate = null;
    const getSystemMonitorContent = () => localStorage.getItem('service_map') ? `<div id="system-monitor-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
    const getModelsContent = () => localStorage.getItem('service_map') ? `<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
    const getEventsContent = () => `<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>`;

    // --- Data Fetching & UI Updates ---
    async function fetchSystemData() {
        if (!localStorage.getItem('service_map')) return null;
        try {
            const serviceMap = JSON.parse(localStorage.getItem('service_map'));
            const eventService = (serviceMap.services?.cs || []).find(s => s.id === 'dex-event-service');
            if (!eventService) return null;
            const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
            const url = `http://${domain}:${eventService.port}/system_monitor_metrics`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching system data:', error);
            return null;
        }
    }

    async function updateSystemMonitor() {
        const widgetsContainer = document.getElementById('system-monitor-widgets');
        if (!widgetsContainer) return;
        const data = await fetchSystemData();
        if (!data || !data.services) {
            widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'The event service may be offline or unreachable.');
            return;
        }
        lastSystemMonitorUpdate = Date.now();
        const services = data.services || [];
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
                detailsHtml = `<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${versionDisplay}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${uptime}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${cpuColor};"><\/i><span style="color: ${cpuColor};">${cpuValue}<></span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${memoryColor};"><\/i><span style="color: ${memoryColor};">${memoryValue}<></span></div></div>`;
            } else {
                 detailsHtml = `<div class="service-widget-footer offline"><span>OFFLINE</span></div>`;
            }
            return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}<></span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${truncateAddress(service.domain && service.port ? `${service.domain}:${service.port}` : '')}<></span></div>${detailsHtml}<></div></div>`;
        }
        const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.service-widget')).map(widget => [widget.dataset.serviceId, widget]));
        const incomingServiceIds = new Set(services.map(s => s.id));
        for (const [id, widget] of existingWidgetsMap) {
            if (!incomingServiceIds.has(id)) {
                widget.remove();
                existingWidgetsMap.delete(id);
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
        if (!data || !data.models) {
            widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load model status.');
            return;
        }
        const models = data.models || [];
        if (models.length === 0) {
            widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No models found.');
            return;
        }
        function generateModelWidgetHtml(model) {
            const isDownloaded = model.status === 'Downloaded';
            const statusClass = isDownloaded ? 'service-widget-online' : 'service-widget-offline';
            const statusText = isDownloaded ? 'OK' : 'MISSING';
            const sizeDisplay = isDownloaded && model.size > 0 ? `${(model.size / 1e9).toFixed(2)} GB` : '-';
            return `<div class="service-widget ${statusClass}" data-model-name="${model.name}"><div class="service-widget-header"><i class="bx ${isDownloaded ? 'bx-check-circle' : 'bx-x-circle'}"></i><h3>${model.name}</h3><span class="service-widget-status">${statusText}<></span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${model.type}<></span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${sizeDisplay}<></span></div></div></div>`;
        }
        const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.service-widget')).map(widget => [widget.dataset.modelName, widget]));
        const incomingModelNames = new Set(models.map(m => m.name));
        for (const [name, widget] of existingWidgetsMap) {
            if (!incomingModelNames.has(name)) {
                widget.remove();
                existingWidgetsMap.delete(name);
            }
        }
        models.forEach(model => {
            const newHtml = generateModelWidgetHtml(model);
            const existingWidget = existingWidgetsMap.get(model.name);
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
        const eventsUrl = `http://${domain}:${eventService.port}/events?ml=50&format=text`;
        try {
            const response = await fetch(eventsUrl);
            if (!response.ok) throw new Error('Service is offline or unreachable.');
            const textData = await response.text();
            if (!textData || textData.trim() === '') {
                eventsContainer.innerHTML = createPlaceholderMessage('empty', 'No events found.', 'Events will appear here as they occur.');
                return;
            }
            const lines = textData.trim().split('\n');
            const eventsHtml = lines.map(line => {
                const parts = line.split(' | ');
                if (parts.length < 3) return '';
                const utcDate = new Date(parts[0].trim().replace(' UTC', 'Z'));
                const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });
                return `<div class="event-item"><div class="event-time"><span class="event-time-main">${timeStr}<></span><span class="event-date">${dateStr}<></span></div><div class="event-content"><div class="event-service">${parts[1].trim()}<></div><div class="event-message">${parts[2].trim()}<></div></div></div>`;
            }).join('');
            eventsContainer.innerHTML = eventsHtml;
            lastEventsUpdate = Date.now();
        } catch (error) {
            console.error('Error fetching events:', error);
            eventsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load events.', 'The event service may be offline or unreachable.');
        }
    }
    
    function updateTabTimestamp(tabIndex, timestamp) {
        const subtitleElement = document.querySelector(`.tab[data-tab-index="${tabIndex}"] .tab-subtitle`);
        if (!subtitleElement) return;
        if (!timestamp) {
            subtitleElement.textContent = 'never';
            return;
        }
        const now = Date.now();
        const seconds = (now - timestamp) / 1000;
        let timeStr;
        if (seconds < 10) timeStr = `${seconds.toFixed(1)}s ago`;
        else if (seconds < 60) timeStr = `${Math.floor(seconds)}s ago`;
        else timeStr = `${Math.floor(seconds / 60)}m ago`;
        subtitleElement.textContent = `Last updated: ${timeStr}`;
    }

    async function initializeMessageWindow() {
        await Promise.all([
            updateSystemMonitor(),
            updateModelsTab(),
            updateEventsTimeline(),
            updateLogs().then(success => { if (success) lastLogsUpdate = Date.now(); })
        ]);

        const timestampInterval = setInterval(() => {
            if (!messageWindow.isOpen()) return clearInterval(timestampInterval);
            updateTabTimestamp(1, lastLogsUpdate);
            updateTabTimestamp(3, lastEventsUpdate);
            updateTabTimestamp(4, lastSystemMonitorUpdate);
        }, 1000);

        const refreshInterval = setInterval(() => {
            if (!messageWindow.isOpen()) return clearInterval(refreshInterval);
            updateEventsTimeline();
            updateLogs().then(success => { if (success) lastLogsUpdate = Date.now(); });
        }, 5000);

        const systemMonitorRefreshInterval = setInterval(() => {
            if (!messageWindow.isOpen()) return clearInterval(systemMonitorRefreshInterval);
            updateSystemMonitor();
            updateModelsTab();
        }, 30000);
    }
    
    // --- Window Definitions ---
    const loginWindow = createWindow({ id: 'login-window', title: 'Welcome', content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"><\/div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`, icon: 'bx-log-in', onClose: onWindowClose });
    const userWindow = createWindow({ id: 'user-window', title: 'User Profile', content: `<p>Logged in as: ${getUserEmail() || 'Unknown'}<></p>`, icon: 'bx-user', onClose: onWindowClose });
    
    function getSettingsContent() {
        const currentTheme = getCurrentTheme();
        // This is a simplified version of the full settings HTML
        return `<div class="theme-selector">...</div>`;
    }
    function attachSettingsListeners() { /* ... */ }
    const settingsWindow = createWindow({ id: 'settings-window', title: 'Settings', content: getSettingsContent(), icon: 'bx-cog', onClose: onWindowClose, onOpen: attachSettingsListeners });

    const messageWindow = createWindow({ id: 'message-window', tabs: [ { icon: 'bx-bell', title: 'Notifications', content: createPlaceholderMessage('empty', 'No notifications yet.') }, { icon: 'bx-history', title: 'Logs', content: getLogsContent() }, { icon: 'bx-brain', title: 'Models', content: getModelsContent() }, { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent() }, { icon: 'bx-line-chart', title: 'System Monitor', content: getSystemMonitorContent() } ], icon: 'bxs-message-dots', onClose: onWindowClose, onOpen: () => setTimeout(initializeMessageWindow, 100) });

    // --- Final Event Listeners ---
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
                        document.getElementById('login-error').textContent = error.message;
                        document.getElementById('login-error').style.display = 'block';
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