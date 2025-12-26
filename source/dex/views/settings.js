// Settings Window Logic
import { getCurrentTheme, setTheme, THEMES } from '../core/theme.js';
import { getUserEmail } from '../core/auth.js';

export function getSettingsContent() {
    const currentTheme = getCurrentTheme();
    const userEmail = getUserEmail() || 'master@easter.company';
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

    const notificationToggle = document.getElementById('notifications-toggle');
    if (notificationToggle) {
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