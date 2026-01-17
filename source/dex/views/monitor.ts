// System Monitor Logic (Services, Models, Processes)
import imaginatorSVG from '../components/imaginatorSVG.ts';
import {
  createPlaceholderMessage,
  updateTabTimestamp,
  updateTabBadgeCount,
  smartFetch,
  isPublicMode,
  syncState,
} from '../core/utils.ts';
import { getLogsContent, updateLogs } from './logs.ts';

declare global {
  interface Window {
    updateCountdownInterval?: any;
  }
}

export const getGuardianContent = () => {
  const resetBtnStyle = isPublicMode() ? 'display: none;' : '';
  const approximationText = isPublicMode()
    ? '<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>'
    : '';
  return `
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${approximationText}</h2>
            <button id="system-pause-toggle-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Toggle System Pause"><i class='bx bx-pause'></i></button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span id="system-state-label" style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System State</span>
                <span id="system-state-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Idle Time</span>
                <span id="guardian-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Active Time</span>
                <span id="guardian-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System Waste</span>
                <span id="guardian-total-waste" style="color: #cf6679; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bx-shield' style="color: #bb86fc;"></i>
            <h2>Guardian</h2>
            <button id="guardian-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Sentry Protocol</span>
                    <span id="guardian-sentry-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-sentry-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bx-search-alt' style="color: #03dac6;"></i>
            <h2>Analyzer</h2>
            <button id="analyzer-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Synthesis Protocol</span>
                    <span id="analyzer-synthesis-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-synthesis-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            <i class='bx bx-cube-alt' style="color: #03dac6; font-size: 1.5em; margin-right: 10px;"></i>
            <h2>Fabricator</h2>
            <button id="fabricator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Construction Protocol</span>
                    <span id="fabricator-construction-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-construction-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            <i class='bx bx-paper-plane' style="color: #03dac6; font-size: 1.5em; margin-right: 10px;"></i>
            <h2>Courier</h2>
            <button id="courier-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Researcher Protocol</span>
                    <span id="courier-researcher-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="courier-researcher-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            ${imaginatorSVG}
            <h2>Imaginator</h2>
            <button id="imaginator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Alert Review Protocol</span>
                    <span id="imaginator-alert_review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="imaginator-alert_review-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>
        <div class="system-monitor-widgets" style="margin-top: 0; padding-top: 0;"></div>`;
};

export const getProcessesContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #03dac6;"></i>
            <h2>Active Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>

        <div class="system-section-header">
            <i class='bx bx-list-ul' style="color: #ff9800;"></i>
            <h2>Process Queue</h2>
        </div>
        <div id="processes-queue-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">
            <div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">
                No processes in queue
            </div>
        </div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`;
};

export const getServicesContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`;
};

export const getModelsContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`;
};

export const getHardwareContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
        </div>
        <div id="hardware-metrics" class="hardware-grid" style="display: flex; flex-direction: column; gap: 25px; margin-bottom: 30px;">
            <div class="hardware-section" id="hw-os">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-laptop'></i> Operating System</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-cpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-chip'></i> CPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-ram">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-memory-card'></i> RAM</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-gpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-card'></i> GPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section full-width" id="hw-storage">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-hdd'></i> Storage</h3>
                <div class="hw-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;"></div>
            </div>
        </div>`;
};

export const getServiceLogsContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${getLogsContent()}
        </div>`;
};

export async function updateSystemTab() {
  // Start the smooth UI loop if not already running
  startAgentSmoothLoop();

  // Initial fetch for all system components
  await Promise.all([updateProcessesTab(), updateSystemMonitor(), updateModelsTab()]);

  // Update logs separately
  await updateLogs();
}

let agentSmoothInterval: any = null;

function startAgentSmoothLoop() {
  if (agentSmoothInterval) return;

  agentSmoothInterval = setInterval(() => {
    // Only run if the agents tab is actually visible
    const sentryVal = document.getElementById('guardian-sentry-val');
    if (!sentryVal) {
      clearInterval(agentSmoothInterval);
      agentSmoothInterval = null;
      return;
    }

    // Trigger UI updates for timers that should feel live
    updateProcessesTab(true); // true means 'smooth mode' - skip fetching, just update from cache
  }, 1000);
}

export let lastServicesUpdate: number | null = null;
export let lastModelsUpdate: number | null = null;
export let lastProcessesUpdate: number | null = null;

async function fetchSystemData() {
  try {
    const response = await smartFetch('/system_monitor');
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function fetchHardwareData() {
  try {
    const response = await smartFetch('/system/hardware');
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function fetchProcessData() {
  try {
    const response = await smartFetch('/processes');
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function fetchGuardianStatus() {
  try {
    const response = await smartFetch('/agent/status');
    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function updateSystemMonitor() {
  const widgetsContainer = document.getElementById('services-widgets');
  const hardwareRefreshBtn = document.getElementById('hardware-refresh-btn');

  // Hardware Containers
  const osContainer = document.querySelector('#hw-os .hw-content');
  const cpuContainer = document.querySelector('#hw-cpu .hw-content');
  const ramContainer = document.querySelector('#hw-ram .hw-content');
  const gpuContainer = document.querySelector('#hw-gpu .hw-content');
  const storageContainer = document.querySelector('#hw-storage .hw-content');

  // Helper to render hardware widgets
  const renderHardwareWidgets = (data: any) => {
    if (!data) return;

    // OS & Architecture
    if (osContainer) {
      osContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${data.OS || 'Unknown'}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${data.ARCHITECTURE || 'unknown'}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`;
    }

    // RAM
    if (ramContainer) {
      const ramGB = (data.MEMORY_BYTES / (1024 * 1024 * 1024)).toFixed(1);
      ramContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${ramGB} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`;
    }

    // CPU
    if (cpuContainer && data.CPU && data.CPU.length > 0) {
      const cpu = data.CPU[0];
      cpuContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${cpu.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${cpu.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${cpu.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`;
    }

    // GPU
    if (gpuContainer) {
      if (data.GPU && data.GPU.length > 0) {
        gpuContainer.innerHTML = data.GPU.map((gpu: any) => {
          const vramGB = (gpu.VRAM / (1024 * 1024 * 1024)).toFixed(1);
          return `
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${gpu.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${vramGB} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`;
        }).join(
          '<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'
        );
      } else {
        gpuContainer.innerHTML = `<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>`;
      }
    }

    // Storage - Individual Devices
    if (storageContainer && data.STORAGE && data.STORAGE.length > 0) {
      storageContainer.innerHTML = data.STORAGE.map((disk: any) => {
        const usedGB = (disk.USED / (1024 * 1024 * 1024)).toFixed(1);
        const sizeGB = (disk.SIZE / (1024 * 1024 * 1024)).toFixed(1);
        const percent = disk.SIZE > 0 ? ((disk.USED / disk.SIZE) * 100).toFixed(0) : 0;
        const mount = disk.MOUNT_POINT || 'Unmounted';

        return `
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${disk.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${mount}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${usedGB} GB Used</span>
                            <span>${sizeGB} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(percent) > 90 ? '#cf6679' : '#03dac6'}; width: ${percent}%; height: 100%; box-shadow: 0 0 10px ${Number(percent) > 90 ? '#cf667944' : '#03dac644'};"></div>
                        </div>
                    </div>`;
      }).join('');
    } else if (storageContainer) {
      storageContainer.innerHTML = `<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>`;
    }
  };

  // Handle Hardware Widget
  if (hardwareRefreshBtn) {
    // Setup Refresh Button
    if (!hardwareRefreshBtn.dataset.listenerAttached) {
      hardwareRefreshBtn.onclick = async () => {
        hardwareRefreshBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
        const hwData = await fetchHardwareData();
        if (hwData) {
          renderHardwareWidgets(hwData);
          hardwareRefreshBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => {
            hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        } else {
          hardwareRefreshBtn.innerHTML = "<i class='bx bx-error'></i>";
          setTimeout(() => {
            hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        }
      };
      hardwareRefreshBtn.dataset.listenerAttached = 'true';
    }

    // Initial Load (if CPU container is empty)
    if (cpuContainer && !cpuContainer.hasChildNodes()) {
      const hwData = await fetchHardwareData();
      renderHardwareWidgets(hwData);
    }
  }

  if (!widgetsContainer) return;

  const data = await fetchSystemData();

  if (!data || !data.services) {
    if (widgetsContainer.children.length === 0) {
      widgetsContainer.innerHTML = createPlaceholderMessage(
        'offline',
        'Failed to load system metrics.',
        'The event service may be offline.'
      );
    }
    // If data fetch fails, specifically mark the upstash widget as offline
    const upstashWidget = document.querySelector('[data-service-id="upstash-redis-ro"]');
    if (upstashWidget) {
      upstashWidget.className = 'service-widget service-widget-offline';
      (upstashWidget.querySelector('.service-widget-status') as HTMLElement).textContent = 'ERROR';
      const body = upstashWidget.querySelector('.service-widget-body');
      if (body) {
        body.innerHTML = `<div class="service-widget-footer offline"><span>CONNECTION FAILED</span></div>`;
      }
    }
    return;
  }

  lastServicesUpdate = isPublicMode() ? syncState.lastDashboard || Date.now() : Date.now();
  updateTabTimestamp(0, lastServicesUpdate || 0);
  const services = data.services || [];

  // Start or update the countdown timer
  if (!window.updateCountdownInterval) {
    window.updateCountdownInterval = setInterval(() => {
      const countdownEl = document.getElementById('upstash-countdown');
      if (countdownEl) {
        const now = new Date();
        const seconds = now.getSeconds();
        // Sync happens at :59
        let secondsUntilUpdate = 59 - seconds;
        if (secondsUntilUpdate <= 0) secondsUntilUpdate += 60;
        countdownEl.textContent = `${secondsUntilUpdate}s`;
      }
    }, 1000);
  }

  Array.from(widgetsContainer.children).forEach((child) => {
    if (!child.classList.contains('service-widget')) child.remove();
  });

  function extractMajorMinorPatch(versionStr: string) {
    if (!versionStr || versionStr === 'N/A' || versionStr === 'unknown') {
      return '-';
    }
    const match = versionStr.match(/^(\d+\.\d+\.\d+)/);
    if (match) return match[0];
    return versionStr.split('.').slice(0, 3).join('.') || '-';
  }
  function truncateAddress(address: string) {
    if (!address || address.length <= 28) return address;
    return address.substring(0, 28) + '...';
  }

  function formatUptime(uptimeStr: string) {
    if (!uptimeStr || uptimeStr === 'N/A' || uptimeStr === 'unknown') return '-';
    const match = uptimeStr.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);
    if (!match) return '-';
    const days = parseInt(match[1]) || 0;
    const hours = parseInt(match[2]) || 0;
    const minutes = parseInt(match[3]) || 0;
    const seconds = parseFloat(match[4]) || 0;
    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    const totalDays = Math.floor(totalSeconds / 86400);
    if (totalDays > 0) return `${totalDays}d`;
    const totalHours = Math.floor(totalSeconds / 3600);
    if (totalHours > 0) return `${totalHours}h`;
    const totalMinutes = Math.floor(totalSeconds / 60);
    if (totalMinutes > 0) return `${totalMinutes}m`;
    return `${Math.floor(totalSeconds)}s`;
  }

  function generateWidgetHtml(service: any) {
    // Special case for Upstash Read-Only service
    if (service.id === 'upstash-redis-ro') {
      const syncTs = isPublicMode()
        ? syncState.lastFrontend || syncState.lastDashboard || Date.now()
        : Date.now();
      const lastSynced = new Date(syncTs).toLocaleTimeString();
      return `
            <div class="service-widget service-widget-online" data-service-id="upstash-redis-ro">
                <div class="service-widget-header">
                    <i class="bx bx-check-circle"></i>
                    <h3>public-cache</h3>
                    <span class="service-widget-status">OK</span>
                </div>
                <div class="service-widget-body" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
                    <div style="font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Next Update In</div>
                    <div id="upstash-countdown" style="font-size: 2em; font-weight: bold; color: #fff; font-family: monospace;">--</div>
                    <div class="sync-time-label" style="font-size: 0.6em; color: #444; margin-top: 10px;">Last synced: ${lastSynced}</div>
                </div>
            </div>`;
    }

    const isOnline = service.status === 'online';
    const statusClass = isOnline ? 'service-widget-online' : 'service-widget-offline';
    const statusIcon = isOnline ? 'bx-check-circle' : 'bx-x-circle';
    const statusText = isOnline ? 'OK' : 'BAD';
    let versionDisplay = service.version ? extractMajorMinorPatch(service.version.str) : '-';

    const cpuDisplay = service.cpu && service.cpu !== 'N/A' ? service.cpu : '-';
    const memDisplay = service.memory && service.memory !== 'N/A' ? service.memory : '-';

    const cpuIconColor = cpuDisplay !== '-' ? '#00ff00' : '#666';
    const cpuTextColor = cpuDisplay !== '-' ? '#fff' : '#666';

    const memIconColor = memDisplay !== '-' ? '#00ff00' : '#666';
    const memTextColor = memDisplay !== '-' ? '#fff' : '#666';

    const uptime = formatUptime(service.uptime);
    let detailsHtml = '';
    if (isOnline) {
      detailsHtml = `
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${versionDisplay}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${uptime}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${cpuIconColor};"></i>
                        <span style="color: ${cpuTextColor};">${cpuDisplay}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${memIconColor};"></i>
                        <span style="color: ${memTextColor};">${memDisplay}</span>
                    </div>
                </div>`;
    } else {
      detailsHtml = `<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>`;
    }

    const displayAddress = isPublicMode()
      ? 'easter.company'
      : truncateAddress(service.domain && service.port ? `${service.domain}:${service.port}` : '');

    return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${displayAddress}</span></div>${detailsHtml}</div></div>`;
  }

  const existingWidgetsMap = new Map(
    Array.from(widgetsContainer.querySelectorAll('.service-widget')).map((widget) => [
      (widget as HTMLElement).dataset.serviceId,
      widget,
    ])
  );
  const incomingServiceIds = new Set(services.map((s: any) => s.id));

  for (const [id, widget] of existingWidgetsMap) {
    if (!incomingServiceIds.has(id)) {
      widget.remove();
    }
  }

  const processedServiceIds = new Set();
  services.forEach((service: any) => {
    if (processedServiceIds.has(service.id)) return;
    processedServiceIds.add(service.id);

    const newHtml = generateWidgetHtml(service);
    const existingWidget = existingWidgetsMap.get(service.id);
    if (existingWidget && existingWidget.parentNode) {
      if (service.id === 'upstash-redis-ro') {
        // Only update the sync timestamp, leave the countdown element alone to avoid flickering
        const syncTs = isPublicMode()
          ? syncState.lastFrontend || syncState.lastDashboard || Date.now()
          : Date.now();
        const lastSynced = new Date(syncTs).toLocaleTimeString();
        const syncLabel = existingWidget.querySelector('.sync-time-label');
        if (syncLabel) syncLabel.textContent = `Last synced: ${lastSynced}`;
      } else if (existingWidget.outerHTML !== newHtml) {
        existingWidget.outerHTML = newHtml;
      }
    } else {
      widgetsContainer.insertAdjacentHTML('beforeend', newHtml);
    }
  });
}

export async function updateModelsTab() {
  const widgetsContainer = document.getElementById('models-widgets');
  if (!widgetsContainer) return;

  const data = await fetchSystemData();

  if (!data) {
    if (widgetsContainer.children.length === 0) {
      widgetsContainer.innerHTML = createPlaceholderMessage(
        'offline',
        'Failed to load model status.',
        'The event service may be offline.'
      );
    }
    return;
  }

  lastModelsUpdate = Date.now();
  updateTabTimestamp(2, lastModelsUpdate);

  const models = data.models || [];
  const whisperStatus = data.whisper;

  Array.from(widgetsContainer.children).forEach((child) => {
    if (!child.classList.contains('service-widget')) child.remove();
  });

  function generateWhisperWidgetHtml(whisper: any) {
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

  function generateXTTSWidgetHtml(xtts: any) {
    const isReady = xtts.status === 'Ready';
    const statusClass = isReady ? 'service-widget-online' : 'service-widget-offline';
    const statusText = isReady ? 'READY' : 'NOT FOUND';
    const icon = 'bx-volume-full';

    return `
                <div class="service-widget ${statusClass}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx ${icon}"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${statusText}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${xtts.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`;
  }

  function generateModelWidgetHtml(model: any) {
    const isDownloaded = model.status === 'Downloaded';
    const statusClass = isDownloaded ? 'service-widget-online' : 'service-widget-offline';
    const statusText = isDownloaded ? 'OK' : 'MISSING';
    const sizeDisplay =
      isDownloaded && model.size > 0 ? `${(model.size / 1e9).toFixed(2)} GB` : '-';

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
  if (data.xtts) {
    finalHtml += generateXTTSWidgetHtml(data.xtts);
  }
  finalHtml += models.map(generateModelWidgetHtml).join('');

  if (!finalHtml) {
    widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No models found.');
    return;
  }

  if (widgetsContainer.innerHTML !== finalHtml) {
    widgetsContainer.innerHTML = finalHtml;
  }
}

export async function updateProcessesTab(isSmoothMode = false) {
  const widgetsContainer = document.getElementById('processes-widgets');
  if (!widgetsContainer && !isSmoothMode) return;

  // --- Update Guardian Status ---
  const sentryVal = document.getElementById('guardian-sentry-val');
  const idleVal = document.getElementById('guardian-idle-val');
  const totalIdleVal = document.getElementById('guardian-total-idle');
  const totalActiveVal = document.getElementById('guardian-total-active');
  const totalWasteVal = document.getElementById('guardian-total-waste');
  const resetBtn = document.getElementById('guardian-reset-btn');
  const analyzerResetBtn = document.getElementById('analyzer-reset-btn');
  const fabricatorResetBtn = document.getElementById('fabricator-reset-btn');
  const courierResetBtn = document.getElementById('courier-reset-btn');
  const pauseBtn = document.getElementById('system-pause-toggle-btn');

  if (pauseBtn && !pauseBtn.dataset.listenerAttached) {
    pauseBtn.onclick = async () => {
      // If we see a play icon, it means we are paused and want to resume
      const isPaused = pauseBtn.querySelector('.bx-play');
      const endpoint = isPaused ? '/agent/resume' : '/agent/pause';

      pauseBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch(endpoint, { method: 'POST' });
        await updateProcessesTab(); // Refresh immediately after success
      } catch (e) {
        pauseBtn.innerHTML = "<i class='bx bx-error'></i>";
        setTimeout(() => updateProcessesTab(), 2000); // Revert error after 2s
      }
    };
    pauseBtn.dataset.listenerAttached = 'true';
  }

  if (resetBtn && !resetBtn.dataset.listenerAttached) {
    resetBtn.onclick = async () => {
      resetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/guardian/reset?protocol=all', { method: 'POST' });
        setTimeout(() => {
          resetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => {
            resetBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        resetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    resetBtn.dataset.listenerAttached = 'true';
  }

  if (analyzerResetBtn && !analyzerResetBtn.dataset.listenerAttached) {
    analyzerResetBtn.onclick = async () => {
      analyzerResetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/analyzer/reset?protocol=synthesis', { method: 'POST' });
        setTimeout(() => {
          analyzerResetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => {
            analyzerResetBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        analyzerResetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    analyzerResetBtn.dataset.listenerAttached = 'true';
  }

  if (fabricatorResetBtn && !fabricatorResetBtn.dataset.listenerAttached) {
    fabricatorResetBtn.onclick = async () => {
      fabricatorResetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/fabricator/reset?protocol=construction', { method: 'POST' });
        setTimeout(() => {
          fabricatorResetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => {
            fabricatorResetBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        fabricatorResetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    fabricatorResetBtn.dataset.listenerAttached = 'true';
  }

  if (courierResetBtn && !courierResetBtn.dataset.listenerAttached) {
    courierResetBtn.onclick = async () => {
      courierResetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/agent/reset?protocol=researcher', { method: 'POST' });
        setTimeout(() => {
          courierResetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => {
            courierResetBtn.innerHTML = "<i class='bx bx-refresh'></i>";
          }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        courierResetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    courierResetBtn.dataset.listenerAttached = 'true';
  }

  const guardianStatus = await fetchGuardianStatus();
  if (guardianStatus && guardianStatus.agents) {
    const guardianData = guardianStatus.agents.guardian || { protocols: {} };
    const analyzerData = guardianStatus.agents.analyzer || { protocols: {} };
    const imaginatorData = guardianStatus.agents.imaginator || { protocols: {} };
    const fabricatorData = guardianStatus.agents.fabricator || { protocols: {} };
    const courierData = guardianStatus.agents.courier || { protocols: {} };
    const systemData = guardianStatus.system || {};

    const now = Math.floor(Date.now() / 1000);
    const aliases: Record<string, string> = {
      sentry: 'Sentry',
      synthesis: 'Synthesis',
      alert_review: 'Alert Review',
      construction: 'Construction',
      researcher: 'Researcher',
    };

    const formatDuration = (seconds: number) => {
      if (seconds < 0) seconds = 0;
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      if (h > 0) return `${h}h ${m}m`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    };

    const updateProtocolWidget = (
      el: HTMLElement,
      statsEl: HTMLElement | null,
      protocolData: any,
      protocolName: string
    ) => {
      if (!el) return;
      const alias = aliases[protocolName] || protocolName.toUpperCase();

      // Update label if exists
      const labelEl = el.parentElement?.querySelector('span[style*="text-transform: uppercase"]');
      if (labelEl) labelEl.textContent = alias;

      if (!protocolData) {
        el.textContent = 'Inactive';
        el.style.color = '#666';
        return;
      }

      const status = protocolData.status; // "Ready", "Working", "Cooldown"

      if (status === 'Working') {
        el.textContent = 'Working';
        el.style.color = '#bb86fc';
      } else if (status === 'Ready') {
        el.textContent = 'Ready';
        el.style.color = '#5eff5e';
      } else {
        // Cooldown
        // Use backend provided cooldown or calculate locally if public mode drift
        let remaining = protocolData.cooldown;
        if (isPublicMode()) {
          remaining = protocolData.next_run - now;
        }
        if (remaining <= 0) {
          el.textContent = 'Ready';
          el.style.color = '#5eff5e';
        } else {
          const mins = Math.floor(remaining / 60);
          const secs = remaining % 60;
          el.textContent = `${mins}m ${secs}s`;
          el.style.color = '#fff';
        }
      }

      if (statsEl && protocolData.stats) {
        statsEl.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${protocolData.stats.runs || 0}</span>
              <span style="color: ${protocolData.stats.failures > 0 ? '#ffa500' : '#666'}">Fails: ${protocolData.stats.failures || 0}</span>
              <span style="color: ${protocolData.stats.aborted > 0 ? '#ff4d4d' : '#666'}">Aborted: ${protocolData.stats.aborted || 0}</span>
            </div>
          `;
      }
    };

    // Guardian Protocols
    if (sentryVal)
      updateProtocolWidget(
        sentryVal,
        document.getElementById('guardian-sentry-stats'),
        guardianData.protocols.sentry,
        'sentry'
      );

    // Analyzer Protocols
    const synthesisVal = document.getElementById('analyzer-synthesis-val');
    const synthesisStats = document.getElementById('analyzer-synthesis-stats');
    if (synthesisVal)
      updateProtocolWidget(
        synthesisVal,
        synthesisStats,
        analyzerData.protocols.synthesis,
        'synthesis'
      );

    // Imaginator Protocols
    const imaginatorVal = document.getElementById('imaginator-alert_review-val');
    const imaginatorStats = document.getElementById('imaginator-alert_review-stats');
    if (imaginatorVal)
      updateProtocolWidget(
        imaginatorVal,
        imaginatorStats,
        imaginatorData.protocols.alert_review,
        'alert_review'
      );

    // Fabricator Protocols
    const fabricatorVal = document.getElementById('fabricator-construction-val');
    const fabricatorStats = document.getElementById('fabricator-construction-stats');
    if (fabricatorVal)
      updateProtocolWidget(
        fabricatorVal,
        fabricatorStats,
        fabricatorData.protocols.construction,
        'construction'
      );

    // Courier Protocols
    const researcherVal = document.getElementById('courier-researcher-val');
    const researcherStats = document.getElementById('courier-researcher-stats');
    if (researcherVal)
      updateProtocolWidget(
        researcherVal,
        researcherStats,
        courierData.protocols.researcher,
        'researcher'
      );

    // System State
    const stateLabel = document.getElementById('system-state-label');
    const stateVal = document.getElementById('system-state-val');

    if (stateVal && systemData.state) {
      const state = systemData.state;
      const duration = formatDuration(systemData.state_time || 0);

      if (stateLabel) stateLabel.textContent = `State: ${state.toUpperCase()}`;
      stateVal.textContent = duration;

      if (state === 'idle') {
        stateVal.style.color = systemData.state_time > 300 ? '#5eff5e' : '#fff';
      } else {
        stateVal.style.color = '#bb86fc';
      }

      if (pauseBtn) {
        if (state === 'paused') {
          pauseBtn.innerHTML = "<i class='bx bx-play'></i>";
          pauseBtn.title = 'Resume System';
          pauseBtn.style.color = '#ff9800';
        } else {
          pauseBtn.innerHTML = "<i class='bx bx-pause'></i>";
          pauseBtn.title = 'Pause System';
          pauseBtn.style.color = '';
        }
      }
    }

    if (totalIdleVal)
      totalIdleVal.textContent = formatDuration(systemData.metrics?.total_idle_time || 0);
    if (totalActiveVal)
      totalActiveVal.textContent = formatDuration(systemData.metrics?.total_active_time || 0);
    if (totalWasteVal)
      totalWasteVal.textContent = formatDuration(systemData.metrics?.total_waste_time || 0);
  } else {
    const indicators = [sentryVal, idleVal, totalIdleVal, totalActiveVal, totalWasteVal];
    indicators.forEach((el) => {
      if (el) {
        el.textContent = '-';
        el.style.color = '#666';
      }
    });
  }

  // Skip process list updates in smooth mode to save CPU/flicker
  if (isSmoothMode) return;

  // --- Update Processes List ---
  const processesData = await fetchProcessData();
  let processes = [];
  let queue = [];
  let history = [];

  if (processesData) {
    if (Array.isArray(processesData)) {
      processes = processesData;
    } else {
      processes = processesData.active || [];
      queue = processesData.queue || [];
      history = processesData.history || [];
      // Ensure newest is first
      history.sort((a: any, b: any) => (b.end_time || 0) - (a.end_time || 0));
    }
  }

  // Active Processes Rendering
  if (widgetsContainer) {
    if (processes.length === 0) {
      if (!widgetsContainer.querySelector('.tab-placeholder')) {
        widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
      }
    } else {
      if (
        widgetsContainer.querySelector('.tab-placeholder') ||
        widgetsContainer.querySelector('p')
      ) {
        widgetsContainer.innerHTML = '';
      }
      renderProcessList(widgetsContainer, processes, false);
    }
  }

  // Queue Processes Rendering
  const queueContainer = document.getElementById('processes-queue-widgets');
  if (queueContainer) {
    if (queue.length === 0) {
      if (
        !queueContainer.querySelector('.tab-placeholder') &&
        !queueContainer.querySelector('div[style*="font-style: italic"]')
      ) {
        queueContainer.innerHTML = `<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>`;
      }
    } else {
      queueContainer.innerHTML = '';
      renderProcessList(queueContainer, queue, false);
    }
  }

  // History Processes Rendering
  const historyContainer = document.getElementById('processes-history-widgets');
  if (historyContainer) {
    if (history.length === 0) {
      if (!historyContainer.querySelector('.tab-placeholder')) {
        historyContainer.innerHTML = createPlaceholderMessage('empty', 'No recent history.');
      }
    } else {
      if (historyContainer.querySelector('.tab-placeholder')) {
        historyContainer.innerHTML = '';
      }
      renderProcessList(historyContainer, history, true);
    }
  }

  updateTabBadgeCount(1, processes.length);
}

function renderProcessList(container: HTMLElement, list: any[], isHistory: boolean) {
  function generateProcessWidgetHtml(proc: any) {
    let durationStr = '';
    if (proc.end_time) {
      const dur = proc.end_time - proc.start_time;
      durationStr = `${dur}s`;
    } else {
      const dur = Math.floor(Date.now() / 1000 - proc.start_time);
      durationStr = `${dur}s`;
    }

    const retryBadge =
      proc.retries > 0 ? `<span class="process-retry-badge">Retry ${proc.retries}</span>` : '';

    // Pretty-print common system IDs
    let displayName = proc.channel_id;
    const idMap: Record<string, string> = {
      'system-guardian': 'Guardian Agent',
      'system-cli-op': 'CLI Operation',
      'system-analyzer': 'Analyzer Agent',
    };
    if (idMap[displayName]) {
      displayName = idMap[displayName];
    } else if (/^\d+$/.test(displayName)) {
      displayName = `Channel ${displayName}`;
    }

    if (isHistory) {
      return `
        <div class="process-history-item" data-channel-id="${proc.channel_id}-${proc.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${displayName}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${proc.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${proc.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${durationStr}</span>
            </div>
        </div>`;
    }

    const stateColor = '#fff';
    const borderColor = '';

    return `
                <div class="service-widget process-widget" data-channel-id="${proc.channel_id}-${proc.start_time}" style="${borderColor}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${stateColor}"></i>
                        <h3 style="color: ${stateColor}">${displayName}</h3>
                        ${retryBadge}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${stateColor}">${proc.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${stateColor}">${durationStr}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${stateColor}">${proc.pid}</span>
                        </div>
                    </div>
                </div>`;
  }

  const selector = isHistory ? '.process-history-item' : '.process-widget';
  const existingWidgetsMap = new Map(
    Array.from(container.querySelectorAll(selector)).map((widget) => [
      (widget as HTMLElement).dataset.channelId,
      widget,
    ])
  );
  const incomingIds = new Set(list.map((p) => `${p.channel_id}-${p.start_time}`));

  for (const [id, widget] of existingWidgetsMap) {
    if (id && !incomingIds.has(id)) {
      widget.remove();
    }
  }

  const processedIds = new Set();
  list.forEach((proc) => {
    const uniqueId = `${proc.channel_id}-${proc.start_time}`;
    if (processedIds.has(uniqueId)) return;
    processedIds.add(uniqueId);

    const newHtml = generateProcessWidgetHtml(proc);
    const existingWidget = existingWidgetsMap.get(uniqueId);
    if (existingWidget && existingWidget.parentNode) {
      if (existingWidget.outerHTML !== newHtml) {
        existingWidget.outerHTML = newHtml;
      }
      // Move to the end of the container to maintain order matching the list array
      const currentWidget = container.querySelector(`[data-channel-id="${uniqueId}"]`);
      if (currentWidget) {
        container.appendChild(currentWidget);
      }
    } else {
      container.insertAdjacentHTML('beforeend', newHtml);
    }
  });
}
