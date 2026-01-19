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
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Cognitive Optimization</h2>
                <div id="ollama-config-list" class="settings-list">
                    <div style="padding: 20px; text-align: center; color: #666;">
                        <i class='bx bx-loader-alt spin'></i> Loading optimization settings...
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
  const serviceContainer = document.getElementById('service-config-list');
  const ollamaContainer = document.getElementById('ollama-config-list');
  if (!serviceContainer || !ollamaContainer) return;

  const publicMode = isPublicMode();

  try {
    const response = await smartFetch('/system/options');
    const data = await response.json();

    // In local mode, data is the raw options.json structure.
    // In public mode (snapshot), data is the 'options' field from the snapshot.
    // The snapshot logic GetSystemOptionsSnapshot() now returns { services: ..., ollama: ... }
    // but legacy local API might return them flat or nested.
    // We normalize here.
    const services = data.services || data || {};
    const ollama = data.ollama || data || {};

    // 1. Render Services
    let serviceHtml = '';
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

    if (services.stt)
      serviceHtml += generateDeviceToggle('STT Service', 'stt', services.stt.device || 'cpu');
    if (services.tts)
      serviceHtml += generateDeviceToggle('TTS Service', 'tts', services.tts.device || 'cpu');

    if (!serviceHtml) {
      serviceHtml = `<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>`;
    } else if (publicMode) {
      serviceHtml += `<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>`;
    }

    serviceContainer.innerHTML = serviceHtml;

    // 2. Render Ollama Optimization
    let ollamaHtml = '';
    const utilityDevice = ollama.utility_device || 'cpu';
    const utilitySpeed = ollama.utility_speed || 'smart';
    const disabledAttr = publicMode ? 'disabled' : '';

    ollamaHtml += `
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">Utility Hardware</span>
                <span class="settings-item-description">Force utilities (summary, engagement, etc) to specific hardware.</span>
            </div>
            <div class="settings-control">
                <select id="ollama-utility-device-select" class="settings-select" ${disabledAttr}>
                    <option value="cpu" ${utilityDevice === 'cpu' ? 'selected' : ''}>CPU (RAM)</option>
                    <option value="gpu" ${utilityDevice === 'gpu' ? 'selected' : ''}>GPU (VRAM)</option>
                </select>
            </div>
        </div>
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">Utility Intelligence</span>
                <span class="settings-item-description">Prioritize speed (smaller models) or intelligence (larger models) for utilities.</span>
            </div>
            <div class="settings-control">
                <select id="ollama-utility-speed-select" class="settings-select" ${disabledAttr}>
                    <option value="fast" ${utilitySpeed === 'fast' ? 'selected' : ''}>Fast (Efficiency)</option>
                    <option value="smart" ${utilitySpeed === 'smart' ? 'selected' : ''}>Smart (Fidelity)</option>
                </select>
            </div>
        </div>`;

    if (publicMode) {
      ollamaHtml += `<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Optimization is read-only in public mode.</div>`;
    } else {
      ollamaHtml += `<div style="font-size: 0.7em; color: #ffa500; font-style: italic; margin-top: 10px; text-align: center;"><i class='bx bx-info-circle'></i> Changing these settings requires a 'dex restart' to re-apply.</div>`;
    }

    ollamaContainer.innerHTML = ollamaHtml;

    if (publicMode) return;

    // Attach listeners for services
    serviceContainer.querySelectorAll('.service-device-toggle').forEach((toggle) => {
      toggle.addEventListener('change', async (e) => {
        const target = e.target as HTMLInputElement;
        const service = target.dataset.service;
        const value = target.checked ? 'cuda' : 'cpu';
        target.disabled = true;
        try {
          await smartFetch('/system/options', {
            method: 'POST',
            body: JSON.stringify({ service, key: 'device', value }),
          });
        } catch (err) {
          target.checked = !target.checked;
          alert('Failed to update configuration.');
        } finally {
          target.disabled = false;
        }
      });
    });

    // Attach listener for Ollama Device
    const deviceSelect = document.getElementById(
      'ollama-utility-device-select'
    ) as HTMLSelectElement;
    if (deviceSelect) {
      deviceSelect.addEventListener('change', async (e) => {
        const target = e.target as HTMLSelectElement;
        const value = target.value;
        target.disabled = true;
        try {
          await smartFetch('/system/options', {
            method: 'POST',
            body: JSON.stringify({ service: 'ollama', key: 'utility_device', value }),
          });
        } catch (err) {
          alert('Failed to update utility hardware setting.');
        } finally {
          target.disabled = false;
        }
      });
    }

    // Attach listener for Ollama Speed
    const speedSelect = document.getElementById('ollama-utility-speed-select') as HTMLSelectElement;
    if (speedSelect) {
      speedSelect.addEventListener('change', async (e) => {
        const target = e.target as HTMLSelectElement;
        const value = target.value;
        target.disabled = true;
        try {
          await smartFetch('/system/options', {
            method: 'POST',
            body: JSON.stringify({ service: 'ollama', key: 'utility_speed', value }),
          });
        } catch (err) {
          alert('Failed to update utility intelligence setting.');
        } finally {
          target.disabled = false;
        }
      });
    }
  } catch (err) {
    serviceContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>`;
    ollamaContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load optimization settings.</div>`;
  }
}
