// Settings Window Logic
import { getCurrentTheme, setTheme, THEMES } from '../core/theme.ts';
import { smartFetch, isPublicMode } from '../core/utils.ts';
import { WindowInstance } from '../core/Window.ts';

export function getSettingsContent() {
  const currentTheme = getCurrentTheme();
  const supported = 'Notification' in window;
  const notificationState = {
    enabled: supported && Notification.permission === 'granted',
    supported: supported,
  };

  return `
            <div class="theme-selector">
                ${Object.values(THEMES)
                  .map(
                    (theme) => `
                    <div class="theme-card ${currentTheme === theme ? 'active' : ''}" data-theme="${theme}">
                        <div class="theme-preview theme-preview-${theme.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${theme.charAt(0).toUpperCase() + theme.slice(1)}</h3>
                            <p>${theme === THEMES.DARK ? 'Simple, clean, dark.' : theme === THEMES.LIGHT ? 'Heavenly, bright, and glowy.' : 'The original animated style.'}</p>
                            <span class="theme-badge">${currentTheme === theme ? 'Active' : 'Select'}</span>
                        </div>
                    </div>
                `
                  )
                  .join('')}
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
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Service Configuration</h2>
                <div id="service-config-list" class="settings-list">
                    <div style="padding: 20px; text-align: center; color: #666;">
                        <i class='bx bx-loader-alt spin'></i> Loading configuration...
                    </div>
                </div>
            </div>`;
}

export function attachSettingsListeners(settingsWindowInstance: WindowInstance) {
  const settingsContent = document.querySelector('#settings-window .window-content');
  if (!settingsContent) return;

  settingsContent.querySelectorAll('.theme-card').forEach((card) => {
    card.addEventListener('click', function (this: HTMLElement) {
      const newTheme = this.dataset.theme;
      if (newTheme) {
        setTheme(newTheme);
        settingsWindowInstance.setContent(getSettingsContent());
        attachSettingsListeners(settingsWindowInstance);
      }
    });
  });

  const notificationToggle = document.getElementById('notifications-toggle') as HTMLInputElement;
  if (notificationToggle && 'Notification' in window) {
    notificationToggle.onclick = async (e) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        try {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') target.checked = false;
        } catch (error) {
          target.checked = false;
        }
      } else if (Notification.permission === 'granted') {
        alert('To disable notifications, please use your browser settings.');
        target.checked = true;
      }
    };
  } else if (notificationToggle) {
    notificationToggle.disabled = true;
  }

  loadServiceConfig();
}

async function loadServiceConfig() {
  const container = document.getElementById('service-config-list');
  if (!container) return;

  const publicMode = isPublicMode();

  try {
    const response = await smartFetch('/system/options');
    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      container.innerHTML = `<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>`;
      return;
    }

    let html = '';

    // Helper to generate toggle HTML
    const generateDeviceToggle = (label: string, serviceKey: string, currentDevice: string) => {
      const isCuda = currentDevice === 'cuda';
      const disabledAttr = publicMode ? 'disabled' : '';
      return `
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">${label}</span>
                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>
            </div>
            <label class="toggle-switch">
                <input type="checkbox" class="service-device-toggle" data-service="${serviceKey}" ${isCuda ? 'checked' : ''} ${disabledAttr}>
                <span class="toggle-slider"></span>
            </label>
        </div>`;
    };

    // STT Config
    if (data.stt) {
      const device = data.stt.device || 'cpu';
      html += generateDeviceToggle('STT Service', 'stt', device);
    }

    // TTS Config
    if (data.tts) {
      const device = data.tts.device || 'cpu';
      html += generateDeviceToggle('TTS Service', 'tts', device);
    }

    if (publicMode) {
      html += `<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Configuration is read-only in public mode.</div>`;
    }

    container.innerHTML = html;

    // Attach listeners (skip in public mode)
    if (publicMode) return;

    container.querySelectorAll('.service-device-toggle').forEach((toggle) => {
      toggle.addEventListener('change', async (e) => {
        const target = e.target as HTMLInputElement;
        const service = target.dataset.service;
        const value = target.checked ? 'cuda' : 'cpu';

        // Disable while saving
        target.disabled = true;

        try {
          await smartFetch('/system/options', {
            method: 'POST',
            body: JSON.stringify({
              service: service,
              key: 'device',
              value: value,
            }),
          });
        } catch (err) {
          console.error('Failed to update config', err);
          target.checked = !target.checked; // Revert
          alert('Failed to update configuration.');
        } finally {
          target.disabled = false;
        }
      });
    });
  } catch (err) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>`;
  }
}
