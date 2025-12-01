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
        if (openWindow && openWindow.id === windowInstance.id) {
            windowInstance.close();
        } else {
            if (openWindow) {
                openWindow.close(true); // Close immediately
            }
            // Delay opening the new window to allow for the closing animation
            setTimeout(() => {
                windowInstance.open();
                openWindow = windowInstance;
                document.querySelectorAll('.nav-right i').forEach(icon => {
                    icon.classList.toggle('active', icon === clickedIcon);
                    icon.classList.toggle('inactive', icon !== clickedIcon);
                });
                footer?.classList.add('hide');
            }, openWindow ? 220 : 0);
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
        const serviceMapString = localStorage.getItem('service_map');
        if (!serviceMapString) return null;
        try {
            const serviceMapData = JSON.parse(serviceMapString);
            const eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
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

    function updateSystemMonitorUI(data) {
        const container = document.getElementById('system-monitor-widgets');
        if (!container) return;
        if (!data || !data.services) {
            container.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'Event service may be unreachable.');
            return;
        }
        lastSystemMonitorUpdate = Date.now();
        // Simplified rendering logic for brevity
        container.innerHTML = (data.services || []).map(service => `<div class="service-widget" data-service-id="${service.id}">...${service.short_name}...</div>`).join('');
    }

    function updateModelsTabUI(data) {
        const container = document.getElementById('models-widgets');
        if (!container) return;
        if (!data || !data.models) {
            container.innerHTML = createPlaceholderMessage('offline', 'Failed to load model status.', 'Event service may be unreachable.');
            return;
        }
        const models = data.models || [];
        if (models.length === 0) {
            container.innerHTML = createPlaceholderMessage('empty', 'No models to display.');
            return;
        }
        container.innerHTML = models.map(model => {
            const isDownloaded = model.status === 'Downloaded';
            const statusClass = isDownloaded ? 'service-widget-online' : 'service-widget-offline';
            const statusText = isDownloaded ? 'OK' : 'MISSING';
            const sizeDisplay = isDownloaded && model.size > 0 ? `${(model.size / 1e9).toFixed(2)} GB` : '-';
            return `<div class="service-widget ${statusClass}" data-model-name="${model.name}"><div class="service-widget-header"><i class="bx ${isDownloaded ? 'bx-check-circle' : 'bx-x-circle'}"></i><h3>${model.name}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${model.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${sizeDisplay}</span></div></div></div>`;
        }).join('');
    }

    async function updateEventsTimeline() { /* ... full implementation ... */ }

    // --- Window Definitions ---
    const loginWindow = createWindow({ id: 'login-window', title: 'Welcome', content: `... login form HTML ...`, icon: 'bx-log-in', onClose: onWindowClose });
    const userWindow = createWindow({ id: 'user-window', title: 'User Profile', content: `<p>Logged in as: ${getUserEmail() || 'Unknown'}</p>`, icon: 'bx-user', onClose: onWindowClose });
    const settingsWindow = createWindow({ id: 'settings-window', title: 'Settings', content: 'Loading settings...', icon: 'bx-cog', onClose: onWindowClose, onOpen: () => { /* ... full onOpen logic ... */ } });
    const messageWindow = createWindow({
        id: 'message-window',
        tabs: [
            { icon: 'bx-bell', title: 'Notifications', content: createPlaceholderMessage('empty', 'No notifications yet.') },
            { icon: 'bx-history', title: 'Logs', content: getLogsContent() },
            { icon: 'bx-brain', title: 'Models', content: getModelsContent() },
            { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent() },
            { icon: 'bx-line-chart', title: 'System Monitor', content: getSystemMonitorContent() }
        ],
        icon: 'bxs-message-dots',
        onClose: onWindowClose,
        onOpen: () => setTimeout(initializeMessageWindow, 100)
    });

    async function initializeMessageWindow() {
        const systemData = await fetchSystemData();
        updateSystemMonitorUI(systemData);
        updateModelsTabUI(systemData);
        await updateEventsTimeline();
        if (await updateLogs()) { lastLogsUpdate = Date.now(); }

        const timestampInterval = setInterval(() => {
            if (!messageWindow.isOpen()) return clearInterval(timestampInterval);
            updateTabTimestamp(1, lastLogsUpdate);
            updateTabTimestamp(3, lastEventsUpdate); // Events
            updateTabTimestamp(4, lastSystemMonitorUpdate); // System Monitor
        }, 100);

        const refreshInterval = setInterval(async () => {
            if (!messageWindow.isOpen()) return clearInterval(refreshInterval);
            await updateEventsTimeline();
            if (await updateLogs()) { lastLogsUpdate = Date.now(); }
        }, 5000);

        const systemMonitorRefreshInterval = setInterval(async () => {
            if (!messageWindow.isOpen()) return clearInterval(systemMonitorRefreshInterval);
            const data = await fetchSystemData();
            updateSystemMonitorUI(data);
            updateModelsTabUI(data);
        }, 30000);
    }
    
    function updateTabTimestamp(tabIndex, timestamp) {
        const subtitleElement = document.querySelector(`[data-tab-subtitle="${tabIndex}"]`);
        if (!subtitleElement || !timestamp) {
            if (subtitleElement) subtitleElement.textContent = 'Last updated: never';
            return;
        }
        // ... time formatting logic ...
    }

    // --- Event Listeners ---
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

                        errorDiv.textContent = error.message;
                        errorDiv.style.display = 'block';
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
