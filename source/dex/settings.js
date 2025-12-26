// Settings Window Logic
import { getCurrentTheme, setTheme, THEMES } from './theme.js';
import { getUserEmail } from './auth.js';

export function getSettingsContent() {
    const currentTheme = getCurrentTheme();
    const userEmail = getUserEmail() || 'master@easter.company';
    const notificationState = { enabled: Notification.permission === 'granted', supported: 'Notification' in window };
    const analyticsEnabled = localStorage.getItem('easter_analytics_enabled') !== 'false';

    return `
            <div class="settings-section">
                <h2 class="settings-section-title" style="margin-bottom: 15px;">Authorized Users</h2>
                <div class="user-profiles-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <!-- Master User Profile -->
                    <div class="user-profile-section" style="background: rgba(187, 134, 252, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(187, 134, 252, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #bb86fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            ${userEmail.charAt(0).toUpperCase()}
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #fff; text-align: left;">Master User</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #bb86fc; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${userEmail}</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 313071000877137920</p>
                        </div>
                    </div>

                    <!-- Admin Profile -->
                    <div class="user-profile-section" style="background: rgba(207, 102, 121, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(207, 102, 121, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #cf6679; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            A
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Admin</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #cf6679; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">admin@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 1426957003108122656</p>
                        </div>
                    </div>

                    <!-- Moderator Profile -->
                    <div class="user-profile-section" style="background: rgba(3, 218, 198, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(3, 218, 198, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #03dac6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            M
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Moderator</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #03dac6; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">mod@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 1437617331529580614</p>
                        </div>
                    </div>

                    <!-- Contributor Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 165, 0, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 165, 0, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #ffa500; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            C
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Contributor</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #ffa500; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">dev@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 294857103462109285</p>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #666; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            B
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">User</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #888; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">bashful@bashful.sh</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 742895103462109285</p>
                        </div>
                    </div>

                    <!-- Anyone Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 255, 255, 0.01); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.03); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #666; font-weight: bold; flex-shrink: 0;">
                            *
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #888; text-align: left;">Anyone</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #555; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">public@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.3; text-align: left;">UUID: 000000000000000000</p>
                        </div>
                    </div>
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
    const settingsContent = document.querySelector('#main-window .window-content');
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