// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login, getUserEmail } from './auth.js';
import { initTheme, setTheme, getCurrentTheme, THEMES } from './theme.js';
import { getLogsContent, updateLogs } from './logs.js';

function onReady() {
    console.log("Welcome to Easter Company.");

    // Initialize theme first
    initTheme();

    applyBaseStyles();

    const loggedIn = isLoggedIn();
    injectNavbar(loggedIn);
    injectFooter();

    // --- Window Management ---
    const footer = document.querySelector('footer');
    let openWindow = null;

    // Callback to handle footer visibility when window closes
    function onWindowClose() {
        openWindow = null;
        footer?.classList.remove('hide');

        // Reset all navbar icon states
        const allIcons = document.querySelectorAll('.nav-right i');
        allIcons.forEach(icon => {
            icon.classList.remove('active', 'inactive');
        });
    }

    // Login window
    const loginWindow = createWindow({
        id: 'login-window',
        title: 'Welcome',
        content: `
            <div class="login-split-container">
                <div class="login-top-section">
                    <div class="login-form">
                        <p>Enter your email to continue</p>
                        <form id="login-form">
                            <input
                                type="email"
                                id="email-input"
                                placeholder="you@easter.company"
                                required
                                autocomplete="email"
                            />
                            <button type="submit">Continue</button>
                            <div id="login-error" class="error" style="display: none;"></div>
                        </form>
                    </div>
                </div>
                <div class="login-bottom-section">
                    <div class="login-disclaimer">
                        <h2>Early Access</h2>
                        <p>We're not ready to take on new users yet.</p>
                        <p>Want early access? Contribute to our open source projects on the <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">Easter Company GitHub</a> community to unlock early access privileges.</p>
                    </div>
                </div>
            </div>
        `,
        icon: 'bx-log-in',
        onClose: onWindowClose
    });

    // Standardized error/placeholder message component
    function createPlaceholderMessage(type, message, actionText = null) {
        const iconMap = {
            'config': 'bx-cog',
            'error': 'bx-error-circle',
            'empty': 'bx-info-circle',
            'offline': 'bx-wifi-off'
        };

        const icon = iconMap[type] || 'bx-info-circle';
        const actionHtml = actionText ? `<p class="placeholder-action">${actionText}</p>` : '';

        return `
            <div class="tab-placeholder">
                <i class='bx ${icon} placeholder-icon'></i>
                <p class="placeholder-message">${message}</p>
                ${actionHtml}
            </div>
        `;
    }

    // System Monitor Functions
    let lastSystemMonitorUpdate = null;

    function getSystemMonitorContent() {
        const serviceMapString = localStorage.getItem('service_map');

        if (!serviceMapString) {
            return createPlaceholderMessage(
                'config',
                'No service map configured.',
                'Please upload your service-map.json in Settings to enable live monitoring.'
            );
        }

        return `
            <div id="system-monitor-widgets" class="system-monitor-widgets">
                <p>Loading services...</p>
            </div>
        `;
    }

    async function updateSystemMonitor() {
        const widgetsContainer = document.getElementById('system-monitor-widgets');
        if (!widgetsContainer) return;

        const serviceMapString = localStorage.getItem('service_map');
        if (!serviceMapString) {
            widgetsContainer.innerHTML = createPlaceholderMessage(
                'config',
                'No service map configured.',
                'Please upload your service-map.json in Settings to enable live monitoring.'
            );
            return;
        }

        let serviceMapData;
        try {
            serviceMapData = JSON.parse(serviceMapString);
        } catch (e) {
            console.error("Error parsing service_map from localStorage:", e);
            widgetsContainer.innerHTML = createPlaceholderMessage(
                'error',
                'Invalid service map data.',
                'Please re-upload a valid service-map.json file in Settings.'
            );
            return;
        }

        // Find the event service to get its URL
        let eventService = null;
        if (serviceMapData && typeof serviceMapData.services === 'object') {
            const serviceGroups = ['cs', 'be', 'th']; // Assuming event service is in one of these
            for (const group of serviceGroups) {
                if (Array.isArray(serviceMapData.services[group])) {
                    const found = serviceMapData.services[group].find(s => s.id === 'dex-event-service');
                    if (found) {
                        eventService = found;
                        break;
                    }
                }
            }
        }

        if (!eventService) {
            widgetsContainer.innerHTML = createPlaceholderMessage(
                'error',
                'Event service not found in service map.',
                'Please ensure dex-event-service is configured in your service-map.json.'
            );
            return;
        }

        const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
        const systemMonitorUrl = `http://${domain}:${eventService.port}/system_monitor_metrics`;

        let results = [];
        try {
            const response = await fetch(systemMonitorUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            results = await response.json();
        } catch (error) {
            console.error('Error fetching system monitor metrics:', error);
            widgetsContainer.innerHTML = createPlaceholderMessage(
                'offline',
                'Failed to load system metrics.',
                'The event service may be offline or unreachable.'
            );
            return;
        }

        // Update timestamp after all services have been checked
        lastSystemMonitorUpdate = Date.now();
        updateTabTimestamp(3, lastSystemMonitorUpdate); // System Monitor is tab index 3

        // Helper function to sanitize values - replace N/A, unknown, empty with dash
        function sanitizeValue(value) {
            if (!value || value === 'N/A' || value === 'unknown' || value.trim() === '') {
                return '-';
            }
            return value;
        }

        // Helper function to extract major.minor.patch from any version string
        function extractMajorMinorPatch(versionStr) {
            if (!versionStr || versionStr === 'N/A' || versionStr === 'unknown' || versionStr.trim() === '') {
                return '-';
            }

            // Match the first three numeric segments separated by dots
            // This handles formats like:
            // - "2.7.1.main.adf" -> "2.7.1"
            // - "0.8.0" -> "0.8.0"
            // - "7.2.4-alpine" -> "7.2.4"
            // - "1.0.0-rc1" -> "1.0.0"
            const match = versionStr.match(/^(\d+)\.(\d+)\.(\d+)/);
            if (match) {
                return `${match[1]}.${match[2]}.${match[3]}`;
            }

            // If we can't extract major.minor.patch, try major.minor
            const shortMatch = versionStr.match(/^(\d+)\.(\d+)/);
            if (shortMatch) {
                return `${shortMatch[1]}.${shortMatch[2]}.0`;
            }

            // If we can't extract anything, return the original or dash
            return versionStr.split('.').slice(0, 3).join('.') || '-';
        }

        // Helper function to truncate address to max 28 characters
        function truncateAddress(address) {
            if (!address || address === '-') {
                return address;
            }
            if (address.length > 28) {
                return address.substring(0, 28) + '...';
            }
            return address;
        }

        // Helper function to get color based on percentage value
        function getStatColor(value) {
            if (!value || value === '-' || value === 'N/A') {
                return '#666'; // Gray for no data
            }

            // Extract percentage value
            const percentMatch = value.match(/([\d.]+)%/);
            if (!percentMatch) {
                return '#666'; // Gray if not a percentage
            }

            const percent = parseFloat(percentMatch[1]);

            // Color coding based on usage levels
            if (percent < 30) {
                return '#00ff00'; // Green - low usage
            } else if (percent < 60) {
                return '#88ff00'; // Yellow-green - moderate
            } else if (percent < 80) {
                return '#ffaa00'; // Orange - high
            } else {
                return '#ff0000'; // Red - critical
            }
        }

        // Helper function to format uptime (moved from global for local access)
        function formatUptime(uptimeStr) {
            if (!uptimeStr || uptimeStr === 'N/A' || uptimeStr === 'unknown') return '-';

            // Parse the Go duration string (e.g., "14m28.364693775s" or "1d4h")
            const match = uptimeStr.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);
            if (!match) return '-';

            const days = parseInt(match[1]) || 0;
            const hours = parseInt(match[2]) || 0;
            const minutes = parseInt(match[3]) || 0;
            const seconds = parseFloat(match[4]) || 0;

            // Calculate total time in different units
            const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalSeconds / 3600);
            const totalDays = Math.floor(totalSeconds / 86400);
            const totalMonths = Math.floor(totalDays / 30);
            const totalYears = Math.floor(totalDays / 365);

            // Format based on magnitude
            if (totalYears >= 1) {
                return totalYears === 1 ? '1 year' : `${totalYears} years`;
            } else if (totalMonths >= 1) {
                return totalMonths === 1 ? '1 month' : `${totalMonths} months`;
            } else if (totalDays >= 1) {
                return totalDays === 1 ? '1 day' : `${totalDays} days`;
            } else if (totalHours >= 1) {
                return totalHours === 1 ? '1 hour' : `${totalHours} hours`;
            } else if (totalMinutes >= 1) {
                return totalMinutes === 1 ? '1 minute' : `${totalMinutes} minutes`;
            } else {
                return Math.floor(totalSeconds) === 1 ? '1 second' : `${Math.floor(totalSeconds)} seconds`;
            }
        }

        // Helper function to generate widget HTML
        function generateWidgetHtml(service) {
            const isOnline = service.status === 'online';
            const statusClass = isOnline ? 'service-widget-online' : 'service-widget-offline';
            const statusIcon = isOnline ? 'bx-check-circle' : 'bx-x-circle';
            const statusText = isOnline ? 'OK' : 'BAD';

            let detailsHtml = '';
            let footerHtml = '';

            if (isOnline) {
                // Determine version display - always extract major.minor.patch
                let versionDisplay = '-';

                if (service.version && service.version.str && service.version.str.trim() !== '') {
                    // Parse the version string to extract major.minor.patch
                    versionDisplay = extractMajorMinorPatch(service.version.str);
                } else if (service.version && service.version.obj) {
                    const versionObj = service.version.obj;
                    // Build version from parts if they exist
                    if (versionObj.major || versionObj.minor || versionObj.patch) {
                        const major = sanitizeValue(versionObj.major);
                        const minor = sanitizeValue(versionObj.minor);
                        const patch = sanitizeValue(versionObj.patch);

                        if (major !== '-' || minor !== '-' || patch !== '-') {
                            versionDisplay = `${major !== '-' ? major : '0'}.${minor !== '-' ? minor : '0'}.${patch !== '-' ? patch : '0'}`;
                        }
                    }
                }

                detailsHtml = `
                    <div class="service-widget-info">
                        <span class="info-label">Version:</span>
                        <span class="info-value">
                            <span class="metric-version-monospace" style="font-size: 1.2em; font-weight: bold; color: white;">${versionDisplay}</span>
                        </span>
                    </div>
                `;

                const cpuValue = sanitizeValue(service.cpu);
                const memoryValue = sanitizeValue(service.memory);
                const cpuColor = getStatColor(cpuValue);
                const memoryColor = getStatColor(memoryValue);

                footerHtml = `
                    <div class="service-widget-footer">
                        <div class="service-widget-item">
                            <i class="bx bx-time-five" style="color: #00bfff;"></i>
                            <span>${formatUptime(service.uptime)}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-microchip" style="color: ${cpuColor};"></i>
                            <span style="color: ${cpuColor};">${cpuValue}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-chip" style="color: ${memoryColor};"></i>
                            <span style="color: ${memoryColor};">${memoryValue}</span>
                        </div>
                    </div>
                `;
            } else {
                detailsHtml = ``; // No details for offline services
                footerHtml = `
                    <div class="service-widget-footer offline">
                        <span>OFFLINE</span>
                    </div>
                `;
            }

            const displayName = service.short_name || service.id;
            const rawAddress = service.domain && service.port ? `${service.domain}:${service.port}` : service.domain || service.port || '';
            const address = truncateAddress(sanitizeValue(rawAddress));

            return `
                <div class="service-widget ${statusClass}" data-service-id="${service.id}">
                    <div class="service-widget-header">
                        <i class="bx ${statusIcon}"></i>
                        <h3>${displayName}</h3>
                        <span class="service-widget-status">${statusText}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Address:</span>
                            <span class="info-value">${address}</span>
                        </div>
                        ${detailsHtml}
                    </div>
                    ${footerHtml}
                </div>
            `;
        }

        // Update widgets in place or create new ones
        const existingWidgets = widgetsContainer.querySelectorAll('.service-widget');
        const existingWidgetsMap = new Map();

        // Remove any non-widget elements (like loading messages)
        Array.from(widgetsContainer.children).forEach(child => {
            if (!child.classList.contains('service-widget')) {
                child.remove();
            }
        });

        // Build map of existing widgets by service ID
        existingWidgets.forEach(widget => {
            const serviceId = widget.getAttribute('data-service-id');
            if (serviceId) {
                existingWidgetsMap.set(serviceId, widget);
            }
        });

        // Update or create widgets based on new data
        results.forEach((service, index) => {
            const existingWidget = existingWidgetsMap.get(service.id);

            if (existingWidget) {
                // Update existing widget in place
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = generateWidgetHtml(service);
                const newWidget = tempDiv.firstElementChild;

                // Replace content while maintaining DOM position
                existingWidget.className = newWidget.className;
                existingWidget.innerHTML = newWidget.innerHTML;

                // Mark as processed
                existingWidgetsMap.delete(service.id);
            } else {
                // Create new widget
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = generateWidgetHtml(service);
                const newWidget = tempDiv.firstElementChild;

                // Insert at the correct position
                if (index < widgetsContainer.children.length) {
                    widgetsContainer.insertBefore(newWidget, widgetsContainer.children[index]);
                } else {
                    widgetsContainer.appendChild(newWidget);
                }
            }
        });

        // Remove widgets that no longer exist in the data
        existingWidgetsMap.forEach(widget => {
            widget.remove();
        });
    }

    // Authenticated windows
    const userWindow = createWindow({
        id: 'user-window',
        title: 'User Profile',
        content: `<p>Logged in as: ${getUserEmail() || 'Unknown'}</p>`,
        icon: 'bx-user',
        onClose: onWindowClose
    });

    // Events Timeline Functions
    let lastEventsUpdate = null;
    let lastLogsUpdate = null;

    function getEventsContent() {
        return `
            <div id="events-timeline" class="events-timeline">
                <p>Loading events...</p>
            </div>
        `;
    }

    function updateTabTimestamp(tabIndex, timestamp) {
        const subtitleElement = document.querySelector(`[data-tab-subtitle="${tabIndex}"]`);
        if (!subtitleElement || !timestamp) return;

        const now = Date.now();
        const diff = now - timestamp;
        const ms = diff;
        const seconds = diff / 1000;
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        let timeStr;
        if (seconds < 10) {
            // Show seconds 0-9 with 2 decimal places (format: 0.00s)
            const paddedSeconds = seconds.toFixed(2);
            timeStr = `${paddedSeconds}s ago`;
        } else if (seconds < 100) {
            // Show seconds 10-99 with 2 decimal places (format: XX.XXs)
            const paddedSeconds = seconds.toFixed(2);
            timeStr = `${paddedSeconds}s ago`;
        } else if (minutes < 60) {
            timeStr = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        } else {
            timeStr = hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        }

        subtitleElement.textContent = `Last updated: ${timeStr}`;
    }

    async function updateEventsTimeline() {
        const eventsContainer = document.getElementById('events-timeline');
        if (!eventsContainer) return;

        const serviceMapString = localStorage.getItem('service_map');
        if (!serviceMapString) {
            eventsContainer.innerHTML = createPlaceholderMessage(
                'config',
                'No service map configured.',
                'Please upload your service-map.json in Settings to enable event monitoring.'
            );
            return;
        }

        let serviceMapData;
        try {
            serviceMapData = JSON.parse(serviceMapString);
        } catch (e) {
            console.error("Error parsing service_map from localStorage:", e);
            eventsContainer.innerHTML = createPlaceholderMessage(
                'error',
                'Invalid service map data.',
                'Please re-upload a valid service-map.json file in Settings.'
            );
            return;
        }

        // Find the event service
        let eventService = null;
        if (serviceMapData && typeof serviceMapData.services === 'object') {
            const serviceGroups = ['cs', 'be', 'th'];
            for (const group of serviceGroups) {
                if (Array.isArray(serviceMapData.services[group])) {
                    const found = serviceMapData.services[group].find(s => s.short_name === 'event' || s.id === 'event' || s.id === 'dex-event-service');
                    if (found) {
                        eventService = found;
                        break;
                    }
                }
            }
        }

        if (!eventService) {
            eventsContainer.innerHTML = createPlaceholderMessage(
                'error',
                'Event service not found in service map.',
                'Please ensure dex-event-service is configured in your service-map.json.'
            );
            return;
        }

        const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
        const eventsUrl = `http://${domain}:${eventService.port}/events?ml=50&format=text`;

        try {
            const response = await fetch(eventsUrl);
            if (!response.ok) {
                eventsContainer.innerHTML = createPlaceholderMessage(
                    'offline',
                    'Event service is offline.',
                    'Please ensure the event service is running.'
                );
                return;
            }

            const textData = await response.text();
            if (!textData || textData.trim() === '') {
                eventsContainer.innerHTML = createPlaceholderMessage(
                    'empty',
                    'No events found.',
                    'Events will appear here as they occur.'
                );
                return;
            }

            // Parse the text format: "2025-11-28 23:15:24 UTC | dex-discord-service | Dexter changed status to joined Admin voice channel"
            const lines = textData.trim().split('\n');
            const eventsHtml = lines.map(line => {
                const parts = line.split(' | ');
                if (parts.length < 3) return '';

                const timestampStr = parts[0].trim(); // "2025-11-28 23:15:24 UTC"
                const service = parts[1].trim();
                const message = parts[2].trim();

                // Parse the UTC timestamp and convert to local time
                const utcDate = new Date(timestampStr.replace(' UTC', '') + ' UTC');
                const timeStr = utcDate.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                const dateStr = utcDate.toLocaleDateString(navigator.language, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });

                return `
                    <div class="event-item">
                        <div class="event-time">
                            <span class="event-time-main">${timeStr}</span>
                            <span class="event-date">${dateStr}</span>
                        </div>
                        <div class="event-content">
                            <div class="event-service">${service}</div>
                            <div class="event-message">${message}</div>
                        </div>
                    </div>
                `;
            }).join('');

            eventsContainer.innerHTML = eventsHtml;
            lastEventsUpdate = Date.now();
            updateTabTimestamp(2, lastEventsUpdate); // Events is tab index 2
        } catch (error) {
            console.error('Error fetching events:', error);
            eventsContainer.innerHTML = createPlaceholderMessage(
                'offline',
                'Failed to load events.',
                'The event service may be offline or unreachable.'
            );
        }
    }

    // Function to initialize message window intervals and updates
    async function initializeMessageWindow() {
        const serviceMapString = localStorage.getItem('service_map');
        if (serviceMapString) {
            await updateSystemMonitor();
            await updateEventsTimeline();
            await updateLogs();
            lastLogsUpdate = Date.now();

            // Update tab timestamps every 100ms for smooth millisecond counting
            const timestampInterval = setInterval(() => {
                if (messageWindow.isOpen()) {
                    updateTabTimestamp(1, lastLogsUpdate); // Logs tab
                    updateTabTimestamp(2, lastEventsUpdate); // Events tab
                    updateTabTimestamp(3, lastSystemMonitorUpdate); // System Monitor tab
                } else {
                    clearInterval(timestampInterval);
                }
            }, 100);

            // Set up auto-refresh for Events and Logs every 5 seconds
            const refreshInterval = setInterval(async () => {
                if (messageWindow.isOpen()) {
                    await updateEventsTimeline();
                    await updateLogs();
                    lastLogsUpdate = Date.now();
                } else {
                    clearInterval(refreshInterval);
                }
            }, 5000);

            // Set up auto-refresh for System Monitor every 30 seconds
            const systemMonitorRefreshInterval = setInterval(async () => {
                if (messageWindow.isOpen()) {
                    await updateSystemMonitor();
                } else {
                    clearInterval(systemMonitorRefreshInterval);
                }
            }, 30000);
        }
    }

    const messageWindow = createWindow({
        id: 'message-window',
        tabs: [
            {
                icon: 'bx-bell',
                title: 'Notifications',
                content: createPlaceholderMessage(
                    'empty',
                    'No notifications yet.',
                    'Notifications will appear here when available.'
                )
            },
            { icon: 'bx-history', title: 'Logs', content: getLogsContent() },
            { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent() },
            { icon: 'bx-line-chart', title: 'System Monitor', content: getSystemMonitorContent() }
        ],
        icon: 'bxs-message-dots',
        onClose: onWindowClose,
        onOpen: () => {
            // Initialize message window updates whenever it opens
            setTimeout(initializeMessageWindow, 100);
        }
    });

    // Analytics and Debug mode state
    const ANALYTICS_KEY = 'easter_analytics_enabled';
    const DEBUG_KEY = 'easter_debug_mode';

    function isAnalyticsEnabled() {
        const stored = localStorage.getItem(ANALYTICS_KEY);
        return stored === null ? true : stored === 'true'; // Default to true
    }

    function isDebugEnabled() {
        return isAnalyticsEnabled(); // Debug mode follows analytics setting
    }

    function setAnalytics(enabled) {
        localStorage.setItem(ANALYTICS_KEY, enabled.toString());
        window.EASTER_ANALYTICS_ENABLED = enabled;
        window.EASTER_DEBUG_MODE = enabled;

        if (enabled) {
            console.log('[Easter Analytics] Analytics and debug mode enabled');
        } else {
            console.log('[Easter Analytics] Analytics and debug mode disabled');
        }
    }

    // Initialize global state
    window.EASTER_ANALYTICS_ENABLED = isAnalyticsEnabled();
    window.EASTER_DEBUG_MODE = isDebugEnabled();

    if (window.EASTER_DEBUG_MODE) {
        console.log('[Easter Debug] Debug mode is active');
        console.log('[Easter Debug] Analytics enabled:', window.EASTER_ANALYTICS_ENABLED);
    }

    // Function to check notification permission state
    function getNotificationState() {
        if (!('Notification' in window)) {
            return { enabled: false, supported: false };
        }
        return {
            enabled: Notification.permission === 'granted',
            supported: true
        };
    }

    async function getMicrophoneState() {
        if (!navigator.permissions) {
            // Permissions API not supported
            return { enabled: false, supported: false };
        }
        try {
            const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
            return {
                enabled: permissionStatus.state === 'granted',
                supported: true,
                state: permissionStatus.state // 'granted', 'prompt', 'denied'
            };
        } catch (e) {
            console.error("Error querying microphone permission:", e);
            return { enabled: false, supported: false };
        }
    }

    async function updateMicrophoneToggleState() {
        const microphoneToggle = document.getElementById('microphone-toggle');
        if (!microphoneToggle) return;

        const micState = await getMicrophoneState();

        const description = document.querySelector('#microphone-setting-item .settings-item-description');

        if (micState.supported) {
            microphoneToggle.disabled = false;
            microphoneToggle.checked = micState.enabled;
            if (description) description.textContent = 'Allow access to your microphone';
        } else {
            microphoneToggle.disabled = true;
            microphoneToggle.checked = false;
            if (description) description.textContent = 'Not supported in this browser';
        }
    }

    // Function to generate settings content
        function getSettingsContent() {
            const currentTheme = getCurrentTheme();
            const userEmail = getUserEmail() || 'user@easter.company';
            const notificationState = getNotificationState();
            const analyticsEnabled = isAnalyticsEnabled();

                        return `
                        <div class="theme-selector">                    <div class="theme-card ${currentTheme === THEMES.AUTO ? 'active' : ''}" data-theme="${THEMES.AUTO}">
                        <div class="theme-preview theme-preview-auto"></div>
                                                                                    <div class="theme-info">
                                                                                        <h3>Auto</h3>
                                                                                        <p>Automatic theme selection.</p>
                                                                                        <span class="theme-badge">${currentTheme === THEMES.AUTO ? 'Active' : 'Select'}</span>
                                                                                    </div>                    </div>
                    <div class="theme-card ${currentTheme === THEMES.DEFAULT ? 'active' : ''}" data-theme="${THEMES.DEFAULT}">
                        <div class="theme-preview theme-preview-default"></div>
                                                                <div class="theme-info">
                                                                    <h3>Default</h3>
                                                                    <p>Simple, black, default.</p>
                                                                    <span class="theme-badge">${currentTheme === THEMES.DEFAULT ? 'Active' : 'Select'}</span>
                                                                </div>                    </div>
                    <div class="theme-card ${currentTheme === THEMES.ANIMATED ? 'active' : ''}" data-theme="${THEMES.ANIMATED}">
                        <div class="theme-preview theme-preview-animated"></div>
                                                                <div class="theme-info">
                                                                    <h3>Legacy</h3>
                                                                    <p>Colourful, not bright.</p>
                                                                    <span class="theme-badge">${currentTheme === THEMES.ANIMATED ? 'Active' : 'Select'}</span>
                                                                </div>                    </div>
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
                </div>
            `;
        }

    // Function to attach theme selector event listeners
    function attachThemeListeners() {
        const themeCards = document.querySelectorAll('.theme-card');
        themeCards.forEach(card => {
            card.addEventListener('click', function handleThemeClick() {
                const theme = this.getAttribute('data-theme');
                setTheme(theme);

                // Update the settings window content to reflect new theme
                settingsWindow.setContent(getSettingsContent());

                // Re-attach listeners after content update
                setTimeout(() => {
                    attachThemeListeners();
                    attachServiceMapListeners();
                    attachServerMapListeners();
                    attachOptionsListeners();
                    attachNotificationListener();
                    attachAnalyticsListener();
                    updateMicrophoneToggleState();
                    attachMicrophoneListener();
                }, 10);
            });
        });
    }

    // Function to attach service map upload listeners
    function attachServiceMapListeners() {
        const uploadBtn = document.getElementById('service-map-upload-btn');
        const fileInput = document.getElementById('service-map-input');
        const fileName = document.getElementById('service-map-file-name');
        const errorDiv = document.getElementById('service-map-error');
        const deleteBtn = document.getElementById('service-map-delete-btn');

        if (uploadBtn && fileInput) {
            uploadBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                // Validate filename
                if (file.name !== 'service-map.json') {
                    errorDiv.textContent = 'File must be named "service-map.json"';
                    errorDiv.style.display = 'block';
                    fileInput.value = '';
                    return;
                }

                // Read and validate JSON
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const jsonContent = JSON.parse(event.target.result);

                        // Store in localStorage
                        localStorage.setItem('service_map', JSON.stringify(jsonContent));

                        // Update UI
                        fileName.textContent = 'service-map.json';
                        errorDiv.style.display = 'none';

                        // Refresh settings to show delete button
                        settingsWindow.setContent(getSettingsContent());
                        setTimeout(() => {
                            attachThemeListeners();
                            attachServiceMapListeners();
                            attachServerMapListeners();
                            attachOptionsListeners();
                            attachNotificationListener();
                            attachAnalyticsListener();
                            updateMicrophoneToggleState();
                            attachMicrophoneListener();
                        }, 10);
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
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem('service_map');

                // Refresh settings to remove delete button
                settingsWindow.setContent(getSettingsContent());
                setTimeout(() => {
                    attachThemeListeners();
                    attachServiceMapListeners();
                    attachServerMapListeners();
                    attachOptionsListeners();
                    attachNotificationListener();
                    attachAnalyticsListener();
                    updateMicrophoneToggleState();
                    attachMicrophoneListener();
                }, 10);
            });
        }
    }

    // Function to attach server map upload listeners
    function attachServerMapListeners() {
        const uploadBtn = document.getElementById('server-map-upload-btn');
        const fileInput = document.getElementById('server-map-input');
        const fileName = document.getElementById('server-map-file-name');
        const errorDiv = document.getElementById('server-map-error');
        const deleteBtn = document.getElementById('server-map-delete-btn');

        if (uploadBtn && fileInput) {
            uploadBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                // Validate filename
                if (file.name !== 'server-map.json') {
                    errorDiv.textContent = 'File must be named "server-map.json"';
                    errorDiv.style.display = 'block';
                    fileInput.value = '';
                    return;
                }

                // Read and validate JSON
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const jsonContent = JSON.parse(event.target.result);

                        // Store in localStorage
                        localStorage.setItem('server_map', JSON.stringify(jsonContent));

                        // Update UI
                        fileName.textContent = 'server-map.json';
                        errorDiv.style.display = 'none';

                        // Refresh settings to show delete button
                        settingsWindow.setContent(getSettingsContent());
                        setTimeout(() => {
                            attachThemeListeners();
                            attachServiceMapListeners();
                            attachServerMapListeners();
                            updateMicrophoneToggleState();
                            attachMicrophoneListener();
                        }, 10);
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
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem('server_map');

                // Refresh settings to remove delete button
                settingsWindow.setContent(getSettingsContent());
                setTimeout(() => {
                    attachThemeListeners();
                    attachServiceMapListeners();
                    attachServerMapListeners();
                    attachOptionsListeners();
                    attachNotificationListener();
                    attachAnalyticsListener();
                    updateMicrophoneToggleState();
                    attachMicrophoneListener();
                }, 10);
            });
        }
    }

    // Function to attach notification toggle listener
    function attachNotificationListener() {
        const notificationToggle = document.getElementById('notifications-toggle');

        if (notificationToggle && !notificationToggle.disabled) {
            notificationToggle.addEventListener('change', async (e) => {
                if (e.target.checked) {
                    // Request permission
                    try {
                        const permission = await Notification.requestPermission();
                        if (permission === 'granted') {
                            // Send a test notification
                            new Notification('Easter Company', {
                                body: 'Notifications are now enabled!',
                                icon: '/favicon.ico'
                            });
                        } else {
                            // Permission denied, uncheck the toggle
                            e.target.checked = false;
                        }
                    } catch (error) {
                        console.error('Notification permission error:', error);
                        e.target.checked = false;
                    }
                } else {
                    // Cannot programmatically revoke permission, just inform user
                    if (Notification.permission === 'granted') {
                        alert('To disable notifications, please use your browser settings.');
                        e.target.checked = true;
                    }
                }
            });
        }
    }

    function attachMicrophoneListener() {
        const microphoneToggle = document.getElementById('microphone-toggle');

        if (microphoneToggle && !microphoneToggle.disabled) {
            microphoneToggle.addEventListener('change', async (e) => {
                if (e.target.checked) {
                    // Request permission
                    try {
                        await navigator.mediaDevices.getUserMedia({ audio: true });
                        // Permission granted
                    } catch (error) {
                        console.error('Microphone permission error:', error);
                        e.target.checked = false;
                    }
                } else {
                    // Cannot programmatically revoke permission, just inform user
                    const micState = await getMicrophoneState();
                    if (micState.enabled) {
                        alert('To disable microphone access, please use your browser settings.');
                        e.target.checked = true;
                    }
                }
            });
        }
    }

    // Function to attach analytics toggle listener
    function attachAnalyticsListener() {
        const analyticsToggle = document.getElementById('analytics-toggle');

        if (analyticsToggle) {
            analyticsToggle.addEventListener('change', (e) => {
                const enabled = e.target.checked;
                setAnalytics(enabled);

                if (enabled) {
                    console.log('[Easter Analytics] Tracking user interactions');
                    console.log('[Easter Debug] Debug mode activated');
                } else {
                    console.log('[Easter Analytics] Analytics disabled');
                }
            });
        }
    }

    // Function to attach options upload listeners
    function attachOptionsListeners() {
        const uploadBtn = document.getElementById('options-upload-btn');
        const fileInput = document.getElementById('options-input');
        const fileName = document.getElementById('options-file-name');
        const errorDiv = document.getElementById('options-error');
        const deleteBtn = document.getElementById('options-delete-btn');

        if (uploadBtn && fileInput) {
            uploadBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                // Validate filename
                if (file.name !== 'options.json') {
                    errorDiv.textContent = 'File must be named "options.json"';
                    errorDiv.style.display = 'block';
                    fileInput.value = '';
                    return;
                }

                // Read and validate JSON
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const jsonContent = JSON.parse(event.target.result);

                        // Store in localStorage
                        localStorage.setItem('user_options', JSON.stringify(jsonContent));

                        // Update UI
                        fileName.textContent = 'options.json';
                        errorDiv.style.display = 'none';

                        // Refresh settings to show delete button
                        settingsWindow.setContent(getSettingsContent());
                        setTimeout(() => {
                            attachThemeListeners();
                            attachServiceMapListeners();
                            attachServerMapListeners();
                            attachOptionsListeners();
                            updateMicrophoneToggleState();
                            attachMicrophoneListener();
                        }, 10);
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
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem('user_options');

                // Refresh settings to remove delete button
                settingsWindow.setContent(getSettingsContent());
                setTimeout(() => {
                    attachThemeListeners();
                    attachServiceMapListeners();
                    attachServerMapListeners();
                    attachOptionsListeners();
                    attachNotificationListener();
                    attachAnalyticsListener();
                    updateMicrophoneToggleState();
                    attachMicrophoneListener();
                }, 10);
            });
        }
    }



    function attachSettingsListeners() {
        attachThemeListeners();
        attachServiceMapListeners();
        attachServerMapListeners();
        attachOptionsListeners();
        attachNotificationListener();
        attachAnalyticsListener();
        updateMicrophoneToggleState();
        attachMicrophoneListener();
    }

    const settingsWindow = createWindow({
        id: 'settings-window',
        title: 'Settings',
        content: getSettingsContent(),
        icon: 'bx-cog',
        onClose: onWindowClose,
        onOpen: () => {
            // Update content before attaching listeners to ensure it's fresh
            settingsWindow.setContent(getSettingsContent());
            // Attach listeners every time the settings window is opened
            setTimeout(attachSettingsListeners, 50);
        }
    });

    function handleWindow(windowInstance, clickedIcon = null) {
        if (openWindow && openWindow.id === windowInstance.id) {
            // If the clicked window is already open, close it normally.
            windowInstance.close();
            openWindow = null;
            // Reset icon states
            if (clickedIcon) {
                const allIcons = document.querySelectorAll('.nav-right i');
                allIcons.forEach(icon => {
                    icon.classList.remove('active', 'inactive');
                });
            }
        } else {
            // If another window is open, close it with quick transition
            if (openWindow) {
                openWindow.close(true); // immediate = true for smooth switching

                // Wait for the switch animation, then open new window
                setTimeout(() => {
                    windowInstance.open();
                    openWindow = windowInstance;
                    // Update icon states
                    if (clickedIcon) {
                        const allIcons = document.querySelectorAll('.nav-right i');
                        allIcons.forEach(icon => {
                            if (icon === clickedIcon) {
                                icon.classList.add('active');
                                icon.classList.remove('inactive');
                            } else {
                                icon.classList.add('inactive');
                                icon.classList.remove('active');
                            }
                        });
                    }
                }, 220); // Slightly longer than switching animation
            } else {
                // No window open, just open the new one
                windowInstance.open();
                openWindow = windowInstance;
                // Update icon states
                if (clickedIcon) {
                    const allIcons = document.querySelectorAll('.nav-right i');
                    allIcons.forEach(icon => {
                        if (icon === clickedIcon) {
                            icon.classList.add('active');
                            icon.classList.remove('inactive');
                        } else {
                            icon.classList.add('inactive');
                            icon.classList.remove('active');
                        }
                    });
                }
            }
        }

        // Update footer visibility based on whether any window is open.
        if (openWindow) {
            footer?.classList.add('hide');
        } else {
            footer?.classList.remove('hide');
        }
    }

    const navbarMicrophone = document.getElementById('navbar-microphone');
    let animationFrameId;
    let audioContext;
    let analyser;

    function startAudioVisualization(canvas) {
        const canvasCtx = canvas.getContext('2d');
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();

        // Create a dummy oscillator to have some audio data
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.connect(analyser);
        analyser.connect(audioContext.destination);
        oscillator.start();

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function draw() {
            animationFrameId = requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);

            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(0, 255, 255)';
            canvasCtx.shadowBlur = 10;
            canvasCtx.shadowColor = 'rgb(0, 255, 255)';

            canvasCtx.beginPath();

            const sliceWidth = canvas.width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * canvas.height / 2;

                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                } else {
                    canvasCtx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            canvasCtx.lineTo(canvas.width, canvas.height / 2);
            canvasCtx.stroke();
        }

        draw();
    }

    function stopAudioVisualization() {
        cancelAnimationFrame(animationFrameId);
        if (audioContext) {
            audioContext.close();
        }
    }

    if (navbarMicrophone) {
        navbarMicrophone.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            const navLeft = document.querySelector('.nav-left');
            const openWindowContent = openWindow?.isOpen() ? openWindow.id : null;
            const windowContent = openWindowContent ? document.querySelector(`#${openWindowContent} .window-content`) : null;


            if (nav.classList.contains('recording')) {
                // Stop recording
                nav.classList.remove('recording');
                navLeft.classList.remove('recording');
                stopAudioVisualization();
                const canvas = document.getElementById('audio-canvas');
                if (canvas) {
                    canvas.remove();
                }
            } else {
                // Start recording
                nav.classList.add('recording');
                navLeft.classList.add('recording');

                const canvas = document.createElement('canvas');
                canvas.id = 'audio-canvas';
                canvas.style.position = 'absolute';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.zIndex = '-1';
                nav.prepend(canvas);
                startAudioVisualization(canvas);

                // Stop recording after 30 seconds
                setTimeout(() => {
                    nav.classList.remove('recording');
                    navLeft.classList.remove('recording');
                    stopAudioVisualization();
                    const canvas = document.getElementById('audio-canvas');
                    if (canvas) {
                        canvas.remove();
                    }
                }, 30000);
            }
        });
    }


    // Handle login form submission
    function handleLoginSubmit(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email-input');
        const errorDiv = document.getElementById('login-error');

        try {
            login(emailInput.value);
            // Reload page to show authenticated state
            window.location.reload();
        } catch (error) {
            errorDiv.textContent = error.message;
            errorDiv.style.display = 'block';
        }
    }

    // Setup event listeners based on login state
    if (loggedIn) {
        // Authenticated user - setup window icons
        const userIcon = document.getElementById('user-icon');
        const messageIcon = document.getElementById('message-icon');
        const settingsIcon = document.getElementById('settings-icon');

        if (userIcon) {
            userIcon.addEventListener('click', () => handleWindow(userWindow, userIcon));
        }

        if (messageIcon) {
            messageIcon.addEventListener('click', () => {
                handleWindow(messageWindow, messageIcon);
            });
        }

        if (settingsIcon) {
            settingsIcon.addEventListener('click', () => {
                handleWindow(settingsWindow, settingsIcon);
            });
        }
    } else {
        // Not logged in - setup login button
        const loginBtn = document.getElementById('login-btn');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                handleWindow(loginWindow);

                // Wait for window to open, then attach form listener
                setTimeout(() => {
                    const loginForm = document.getElementById('login-form');
                    if (loginForm) {
                        loginForm.addEventListener('submit', handleLoginSubmit);
                    }
                }, 100);
            });
        }
    }
}

// Run when the DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
} else {
    onReady();
}
