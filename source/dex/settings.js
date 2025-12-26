// Settings Window Logic
import { getCurrentTheme, setTheme, THEMES } from './theme.js';
import { getUserEmail } from './auth.js';

export function getSettingsContent() {
    const currentTheme = getCurrentTheme();
    const userEmail = getUserEmail() || 'user@easter.company';
    const notificationState = { enabled: Notification.permission === 'granted', supported: 'Notification' in window };
    const analyticsEnabled = localStorage.getItem('easter_analytics_enabled') !== 'false';

    return `
            <div class="user-profile-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 20px;">
                <div class="user-avatar" style="width: 60px; height: 60px; background: #bb86fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2em; color: #000; font-weight: bold;">
                    ${userEmail.charAt(0).toUpperCase()}
                </div>
                <div class="user-info" style="text-align: left;">
                    <h3 style="margin: 0; font-size: 1.1em; color: #fff; text-align: left;">Master User</h3>
                    <p style="margin: 4px 0 0 0; font-size: 0.9em; color: #888; text-align: left;">${userEmail}</p>
                    <p style="margin: 8px 0 0 0; font-family: monospace; font-size: 0.75em; opacity: 0.5; text-align: left;">UUID: 313071000877137920</p>
                </div>
            </div>

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

export function attachSettingsListeners(settingsWindowInstance) {
    const settingsContent = document.querySelector('#settings-window .window-content');
    if (!settingsContent) return;

    settingsContent.querySelectorAll('.theme-card').forEach(card => {
        card.addEventListener('click', function () {
            const newTheme = this.dataset.theme;
            setTheme(newTheme);
            settingsWindowInstance.setContent(getSettingsContent());
            attachSettingsListeners(settingsWindowInstance);
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
                        settingsWindowInstance.setContent(getSettingsContent());
                        attachSettingsListeners(settingsWindowInstance);
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
                settingsWindowInstance.setContent(getSettingsContent());
                attachSettingsListeners(settingsWindowInstance);
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
