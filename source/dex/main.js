// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login, getUserEmail } from './auth.js';
import { initTheme, setTheme, getCurrentTheme, THEMES } from './theme.js';

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
        content: `
            <div class="login-split-container">
                <div class="login-top-section">
                    <div class="login-form">
                        <h1>Welcome</h1>
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

    // Authenticated windows
    const userWindow = createWindow({
        id: 'user-window',
        content: `<h1>User Profile</h1><p>Logged in as: ${getUserEmail() || 'Unknown'}</p>`,
        icon: 'bx-user',
        onClose: onWindowClose
    });

    const messageWindow = createWindow({
        id: 'message-window',
        tabs: [
            { title: 'Logs', content: '<h1>Logs</h1><p>This is the logs tab.</p>' },
            { title: 'Notifications', content: '<h1>Notifications</h1><p>This is the notifications tab.</p>' },
            { title: 'Conversations', content: '<h1>Conversations</h1><p>This is the conversations tab.</p>' }
        ],
        icon: 'bxs-message-dots',
        onClose: onWindowClose
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
    
            // Get data from localStorage
            const serviceMapString = localStorage.getItem('service_map');
            const serverMapString = localStorage.getItem('server_map');
            const userOptionsString = localStorage.getItem('user_options');
    
            let metricsHtml;
    
            if (serviceMapString && serverMapString && userOptionsString) {
                metricsHtml = `<p>Loading metrics...</p>`;
                setTimeout(updateMetricsDashboard, 0);
            } else {
                metricsHtml = `<p>Please upload your config files to enable metrics.</p>`;
            }
    
    
            return `
                <h1 style="text-align: center; margin-bottom: 30px;">Settings</h1>
                <div class="theme-selector">
                    <div class="theme-card ${currentTheme === THEMES.AUTO ? 'active' : ''}" data-theme="${THEMES.AUTO}">
                        <div class="theme-preview theme-preview-auto"></div>
                        <div class="theme-info">
                            <h3>Auto</h3>
                            <p>Automatically switches between Default and Legacy based on screen size and display settings.</p>
                            <span class="theme-badge">${currentTheme === THEMES.AUTO ? 'Active' : 'Select'}</span>
                        </div>
                    </div>
                    <div class="theme-card ${currentTheme === THEMES.DEFAULT ? 'active' : ''}" data-theme="${THEMES.DEFAULT}">
                        <div class="theme-preview theme-preview-default"></div>
                        <div class="theme-info">
                            <h3>Default</h3>
                            <p>Clean, minimalist dark theme with solid black background.</p>
                            <span class="theme-badge">${currentTheme === THEMES.DEFAULT ? 'Active' : 'Select'}</span>
                        </div>
                    </div>
                    <div class="theme-card ${currentTheme === THEMES.ANIMATED ? 'active' : ''}" data-theme="${THEMES.ANIMATED}">
                        <div class="theme-preview theme-preview-animated"></div>
                        <div class="theme-info">
                            <h3>Legacy</h3>
                            <p>Beautiful GPU-accelerated rainbow gradient background animation.</p>
                            <span class="theme-badge">${currentTheme === THEMES.ANIMATED ? 'Active' : 'Select'}</span>
                        </div>
                    </div>
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
    
                <div class="settings-divider"></div>
    
                <div class="settings-section">
                    <h2 class="settings-section-title">Metrics</h2>
                    <div class="settings-metrics">
                        ${metricsHtml}
                    </div>
                </div>
            `;
        }
    
                async function updateMetricsDashboard() {
                    const serviceMapString = localStorage.getItem('service_map');
                    if (!serviceMapString) return;
            
                    let serviceMapData;
                    try {
                        serviceMapData = JSON.parse(serviceMapString);
                    } catch (e) {
                        console.error("Error parsing service_map from localStorage:", e);
                        return;
                    }
            
                    const metricsContainer = document.querySelector('.settings-metrics');
                    if (!metricsContainer) return;
            
                    let services = [];
                    if (serviceMapData && typeof serviceMapData.services === 'object') {
                        const serviceGroupsToInclude = ['cs', 'be', 'th'];
                        for (const group of serviceGroupsToInclude) {
                            if (Array.isArray(serviceMapData.services[group])) {
                                services.push(...serviceMapData.services[group]);
                            }
                        }
                    } else {
                        const errorMessage = "Error: service-map.json does not contain a valid 'services' object.";
                        console.error(errorMessage, serviceMapData);
                        metricsContainer.innerHTML = `<p>${errorMessage}</p>`;
                        return;
                    }
            
                    metricsContainer.innerHTML = '<p>Loading metrics...</p>';
            
                            const promises = services.map(service => {
                                const domain = service.domain === '0.0.0.0' ? 'localhost' : service.domain;
                                const metricsUrl = `http://${domain}:${service.port}/service`;
                                return fetch(metricsUrl)
                                    .then(response => {
                                        if (!response.ok) {
                                            return { name: service.id, status: 'offline' };
                                        }
                                        return response.json().then(data => ({ name: service.id, status: 'online', version: data.version.str, ...data }));
                                    })
                                    .catch(() => ({ name: service.id, status: 'offline' }));
                            });            
                    const results = await Promise.all(promises);
            
                    const totalServices = results.length;
                    const onlineServices = results.filter(s => s.status === 'online').length;
                    const offlineServices = totalServices - onlineServices;
            
                    let metricsHtml = `
                        <div class="metric-item">
                            <span class="metric-label">Total Services</span>
                            <span class="metric-value">${totalServices}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Online Services</span>
                            <span class="metric-value ${onlineServices > 0 ? 'metric-value-active' : ''}">${onlineServices}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Offline Services</span>
                            <span class="metric-value ${offlineServices > 0 ? 'metric-value-error' : ''}">${offlineServices}</span>
                        </div>
                    `;
            
                    const serviceVersions = results.filter(s => s.status === 'online').map(s => `
                        <div class="metric-item">
                            <span class="metric-label">${s.name} Version</span>
                            <span class="metric-value">${s.version || 'unknown'}</span>
                        </div>
                    `).join('');
            
                    metricsContainer.innerHTML = metricsHtml + serviceVersions;
                }    // Function to attach theme selector event listeners
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



    const settingsWindow = createWindow({
        id: 'settings-window',
        content: getSettingsContent(),
        icon: 'bx-cog',
        onClose: onWindowClose
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
            messageIcon.addEventListener('click', () => handleWindow(messageWindow, messageIcon));
        }

        if (settingsIcon) {
            settingsIcon.addEventListener('click', () => {
                handleWindow(settingsWindow, settingsIcon);

                // Wait for window to open, then attach all settings listeners
                setTimeout(() => {
                    attachThemeListeners();
                    attachServiceMapListeners();
                    attachServerMapListeners();
                    attachOptionsListeners();
                    attachNotificationListener();
                    attachAnalyticsListener();
                    updateMicrophoneToggleState();
                    attachMicrophoneListener();
                }, 100);
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
