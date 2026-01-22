// System Monitor Logic (Services, Models, Processes)
import {
  createPlaceholderMessage,
  updateTabTimestamp,
  updateTabBadgeCount,
  smartFetch,
  isPublicMode,
  syncState,
  updateOpenIssueCount,
} from '../core/utils.ts';
import { getLogsContent, updateLogs } from './logs.ts';
import { getProgressContent, updateProgressTab } from './progress.ts';
import { createWindow } from '../core/Window.ts';

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

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
            <i class='bx bx-shield' style="color: #bb86fc; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Guardian</h2>
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

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
            <i class='bx bx-search-alt' style="color: #03dac6; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Analyzer</h2>
            <button id="analyzer-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Summary Protocol</span>
                    <span id="analyzer-summary-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-summary-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Synthesis Protocol</span>
                    <span id="analyzer-synthesis-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-synthesis-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
            <i class='bx bx-cube-alt' style="color: #03dac6; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Fabricator</h2>
            <div style="margin-left: auto; display: flex; gap: 8px;">
                <button id="fabricator-progress-btn" class="notif-action-btn" title="View Live Progress"><i class='bx bx-loader-circle'></i></button>
                <button id="fabricator-reset-btn" class="notif-action-btn" style="${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
            </div>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Review</span>
                    <span id="fabricator-review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-review-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Issue</span>
                    <span id="fabricator-issue-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-issue-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Construct</span>
                    <span id="fabricator-construct-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-construct-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Reporter</span>
                    <span id="fabricator-reporter-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-reporter-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

                <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">

                    <i class='bx bx-paper-plane' style="color: #03dac6; font-size: 1.5em;"></i>

                    <h2 style="margin: 0;">Courier</h2>

                    <button id="courier-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>

                </div>

        

                <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">

                        <div class="guardian-indicator" style="text-align: center;">

                            <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Researcher Protocol</span>

                            <span id="courier-researcher-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>

                            <div id="courier-researcher-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>

                        </div>

                        <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">

                            <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Compressor Protocol</span>

                            <span id="courier-compressor-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>

                            <div id="courier-compressor-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>

                        </div>

                    </div>

                </div>

        

                <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">

                    <i class='bx bx-layer' style="color: #bb86fc; font-size: 1.5em;"></i>

                    <h2 style="margin: 0;">Architect</h2>

                    <button id="imaginator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${resetBtnStyle}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>

                </div>

        

                <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">

                    <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">

                        <div class="guardian-indicator" style="text-align: center;">

                            <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Agent</span>

                            <span id="imaginator-alert_review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>

                            <div id="imaginator-alert_review-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>

                        </div>

                    </div>

                </div>

        `;
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
  const controlsStyle = isPublicMode() ? 'display: none;' : 'display: flex;';
  return `
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
            <div id="global-service-controls" class="header-controls" style="margin-left: auto; gap: 8px; ${controlsStyle}">
                <button id="global-restart-btn" class="notif-action-btn" title="Restart All Services"><i class='bx bx-refresh'></i></button>
                <button id="global-stop-btn" class="notif-action-btn" title="Stop All Services"><i class='bx bx-stop'></i></button>
                <button id="global-start-btn" class="notif-action-btn" title="Start All Services"><i class='bx bx-play'></i></button>
            </div>
        </div>
        <div id="services-widgets" style="margin-bottom: 30px;"></div>`;
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
  await Promise.all([updateProcessesTab(), updateSystemMonitor(), updateOpenIssueCount()]);

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

  // Global Service Controls
  const globalRestartBtn = document.getElementById('global-restart-btn');
  const globalStopBtn = document.getElementById('global-stop-btn');
  const globalStartBtn = document.getElementById('global-start-btn');

  const attachGlobalListener = (btn: HTMLElement | null, action: string) => {
    if (btn && !btn.dataset.listenerAttached) {
      btn.onclick = async () => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
        (btn as HTMLButtonElement).disabled = true;
        try {
          await smartFetch(`/system/service/${action}`, {
            method: 'POST',
            body: JSON.stringify({ service: 'all' }),
          });
          // Poll for update
          setTimeout(() => updateSystemMonitor(), 2000);
          setTimeout(() => updateSystemMonitor(), 5000);
          setTimeout(() => {
            btn.innerHTML = "<i class='bx bx-check'></i>";
            setTimeout(() => {
              btn.innerHTML = originalIcon;
              (btn as HTMLButtonElement).disabled = false;
            }, 1000);
          }, 1000);
        } catch (err) {
          console.error(err);
          btn.innerHTML = "<i class='bx bx-error'></i>";
          setTimeout(() => {
            btn.innerHTML = originalIcon;
            (btn as HTMLButtonElement).disabled = false;
          }, 2000);
        }
      };
      btn.dataset.listenerAttached = 'true';
    }
  };

  attachGlobalListener(globalRestartBtn, 'restart');
  attachGlobalListener(globalStopBtn, 'stop');
  attachGlobalListener(globalStartBtn, 'start');

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

  // Add Service Control Listener
  if (!widgetsContainer.dataset.controlsAttached) {
    widgetsContainer.addEventListener('click', async (e) => {
      const target = (e.target as HTMLElement).closest('.svc-btn');
      if (!target) return;

      const btn = target as HTMLButtonElement;
      const action = btn.dataset.action;
      const service = btn.dataset.service;
      if (!action || !service) return;

      const originalIcon = btn.innerHTML;
      btn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      btn.classList.add('loading');
      btn.disabled = true;

      try {
        await smartFetch(`/system/service/${action}`, {
          method: 'POST',
          body: JSON.stringify({ service }),
        });
        // Poll for update
        setTimeout(() => updateSystemMonitor(), 1000);
        setTimeout(() => updateSystemMonitor(), 3000);
      } catch (err) {
        console.error(err);
        alert(`Failed to ${action} ${service}`);
        btn.innerHTML = "<i class='bx bx-error'></i>";
        setTimeout(() => {
          btn.innerHTML = originalIcon;
          btn.classList.remove('loading');
          btn.disabled = false;
        }, 2000);
      }
    });
    widgetsContainer.dataset.controlsAttached = 'true';
  }

  const data = await fetchSystemData();

  if (!data || !data.services) {
    if (widgetsContainer.children.length === 0) {
      widgetsContainer.innerHTML = createPlaceholderMessage(
        'offline',
        'Failed to load system metrics.',
        'The event service may be offline.'
      );
    }
    return;
  }

  lastServicesUpdate = isPublicMode() ? syncState.lastDashboard || Date.now() : Date.now();
  updateTabTimestamp(3, lastServicesUpdate || 0); // TAB 3: Services
  const services = data.services || [];

  // Categorize services
  const categories: Record<string, any[]> = {
    cli: [],
    fe: [],
    cs: [],
    be: [],
    th: [],
    co: [],
    md: [], // Models
    prd: [],
    os: [],
  };

  const categoryLabels: Record<string, string> = {
    cli: 'CLI',
    fe: 'Front-end',
    cs: 'Core',
    be: 'Backend',
    th: 'Third Party',
    co: 'Cognitive',
    md: 'Models',
    prd: 'Production',
    os: 'Other',
  };

  services.forEach((s: any) => {
    if (categories[s.type]) categories[s.type].push(s);
    else categories['os'].push(s);
  });

  let finalHtml = '';

  Object.entries(categories).forEach(([type, list]) => {
    if (list.length === 0) return;

    finalHtml += `
            <div class="service-category-header" style="width: 100%; margin: 20px 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 10px;">
                <span style="color: #888; font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">${categoryLabels[type] || type}</span>
                <span style="flex: 1; height: 1px; background: rgba(255,255,255,0.02);"></span>
            </div>
            <div class="service-category-grid system-monitor-widgets" style="padding-bottom: 20px;">
                ${list.map((s) => generateWidgetHtml(s)).join('')}
            </div>`;
  });

  if (widgetsContainer.innerHTML !== finalHtml) {
    widgetsContainer.innerHTML = finalHtml;
  }

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

    // Determine if service is manageable (not OS, CLI, or Prod)
    const isManageable =
      service.type !== 'os' &&
      service.type !== 'cli' &&
      service.type !== 'prd' &&
      service.type !== 'md';
    let controlsHtml = '';

    if (isManageable && !isPublicMode()) {
      controlsHtml = `
            <div class="service-controls" style="display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end;">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${service.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${service.id}" ${!isOnline ? 'disabled' : ''}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${service.id}" ${isOnline ? 'disabled' : ''}><i class='bx bx-play'></i></button>
            </div>`;
    }

    if (isOnline) {
      const versionLabel = service.type === 'md' ? 'Size:' : 'Version:';
      const versionVal = service.type === 'md' ? service.memory : versionDisplay;
      const memLabel = service.type === 'md' ? 'Type:' : 'RAM:';
      const memVal = service.type === 'md' ? service.health_message || 'Model' : memDisplay;

      detailsHtml = `
                <div class="service-widget-info">
                    <span class="info-label">${versionLabel}</span>
                    <span class="info-value metric-version-monospace">${versionVal}</span>
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
                    <div class="service-widget-item" title="${memLabel}">
                        <i class="bx bxs-chip" style="color: ${memIconColor};"></i>
                        <span style="color: ${memTextColor};">${memVal}</span>
                    </div>
                </div>${controlsHtml}`;
    } else {
      detailsHtml = `<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>${controlsHtml}`;
    }

    const displayAddress =
      isPublicMode() || service.type === 'md'
        ? 'easter.company'
        : truncateAddress(
            service.domain && service.port ? `${service.domain}:${service.port}` : ''
          );

    return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${displayAddress}</span></div>${detailsHtml}</div></div>`;
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
  const fabricatorProgressBtn = document.getElementById('fabricator-progress-btn');
  const courierResetBtn = document.getElementById('courier-reset-btn');
  const pauseBtn = document.getElementById('system-pause-toggle-btn');

  if (fabricatorProgressBtn && !fabricatorProgressBtn.dataset.listenerAttached) {
    fabricatorProgressBtn.onclick = () => {
      const progressWin = createWindow({
        id: 'fabricator-progress-window',
        title: 'Mission Control',
        icon: 'bx-loader-circle',
        className: 'full-screen-modal', // Custom class for full screen style
        content: `
          <div class="mission-control-overlay">
            <div class="progress-section" style="height: 100%; display: flex; flex-direction: column;">
                <div class="system-section-header" style="margin-bottom: 20px;">
                    <i class='bx bx-loader-circle spin' style="color: #03dac6;"></i>
                    <h2>Fabricator Live Stream</h2>
                    <button class="notif-action-btn close-modal-btn" style="margin-left: auto;"><i class='bx bx-x'></i></button>
                </div>
                ${getProgressContent()}
            </div>
          </div>
        `,
        onOpen: () => {
          const winEl = document.getElementById('fabricator-progress-window');
          if (winEl) {
            winEl
              .querySelector('.close-modal-btn')
              ?.addEventListener('click', () => progressWin.close());
          }
          updateProgressTab();
        },
      });
      progressWin.open();
    };
    fabricatorProgressBtn.dataset.listenerAttached = 'true';
  }

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
        await smartFetch('/agent/reset?protocol=all', { method: 'POST' });
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
        await smartFetch('/agent/reset?protocol=synthesis', { method: 'POST' });
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
        await smartFetch('/agent/reset?protocol=review', { method: 'POST' });
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

  const architectResetBtn = document.getElementById('imaginator-reset-btn');
  if (architectResetBtn && !architectResetBtn.dataset.listenerAttached) {
    architectResetBtn.onclick = async () => {
      architectResetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      setTimeout(() => {
        architectResetBtn.innerHTML = "<i class='bx bx-check'></i>";
        setTimeout(() => {
          architectResetBtn.innerHTML = "<i class='bx bx-refresh'></i>";
        }, 2000);
      }, 500);
    };
    architectResetBtn.dataset.listenerAttached = 'true';
  }

  const guardianStatus = await fetchGuardianStatus();
  if (guardianStatus && guardianStatus.agents) {
    const guardianData = guardianStatus.agents.guardian || { protocols: {} };
    const analyzerData = guardianStatus.agents.analyzer || { protocols: {} };
    const architectData = guardianStatus.agents.architect || { protocols: {} };
    const fabricatorData = guardianStatus.agents.fabricator || { protocols: {} };
    const courierData = guardianStatus.agents.courier || { protocols: {} };
    const systemData = guardianStatus.system || {};

    const now = Math.floor(Date.now() / 1000);
    const aliases: Record<string, string> = {
      sentry: 'Sentry',
      synthesis: 'Synthesis',
      architect: 'Architect',
      review: 'Review',
      issue: 'Issue',
      construct: 'Construct',
      reporter: 'Reporter',
      researcher: 'Researcher',
      compressor: 'Compressor',
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
      protocolName: string,
      systemState?: string
    ) => {
      if (!el) return;
      const alias = aliases[protocolName] || protocolName.toUpperCase();

      // Update label if exists
      const labelEl = el.parentElement?.querySelector('span[style*="text-transform: uppercase"]');
      if (labelEl) labelEl.textContent = alias;

      if (systemState === 'paused') {
        el.textContent = 'PAUSED';
        el.style.color = '#ff9800';
        return;
      }

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
        'sentry',
        systemData.state
      );

    // Analyzer Protocols
    const summaryVal = document.getElementById('analyzer-summary-val');
    const summaryStats = document.getElementById('analyzer-summary-stats');
    if (summaryVal)
      updateProtocolWidget(
        summaryVal,
        summaryStats,
        analyzerData.protocols.summary,
        'summary',
        systemData.state
      );

    const synthesisVal = document.getElementById('analyzer-synthesis-val');
    const synthesisStats = document.getElementById('analyzer-synthesis-stats');
    if (synthesisVal)
      updateProtocolWidget(
        synthesisVal,
        synthesisStats,
        analyzerData.protocols.synthesis,
        'synthesis',
        systemData.state
      );

    // Architect Protocols
    const imaginatorVal = document.getElementById('imaginator-alert_review-val');
    const imaginatorStats = document.getElementById('imaginator-alert_review-stats');
    if (imaginatorVal)
      updateProtocolWidget(
        imaginatorVal,
        imaginatorStats,
        architectData.protocols.architect,
        'architect',
        systemData.state
      );

    // Fabricator Protocols
    const reviewVal = document.getElementById('fabricator-review-val');
    const reviewStats = document.getElementById('fabricator-review-stats');
    if (reviewVal)
      updateProtocolWidget(
        reviewVal,
        reviewStats,
        fabricatorData.protocols.review,
        'review',
        systemData.state
      );

    const issueVal = document.getElementById('fabricator-issue-val');
    const issueStats = document.getElementById('fabricator-issue-stats');
    if (issueVal)
      updateProtocolWidget(
        issueVal,
        issueStats,
        fabricatorData.protocols.issue,
        'issue',
        systemData.state
      );

    const constructVal = document.getElementById('fabricator-construct-val');
    const constructStats = document.getElementById('fabricator-construct-stats');
    if (constructVal)
      updateProtocolWidget(
        constructVal,
        constructStats,
        fabricatorData.protocols.construct,
        'construct',
        systemData.state
      );

    const reporterVal = document.getElementById('fabricator-reporter-val');
    const reporterStats = document.getElementById('fabricator-reporter-stats');
    if (reporterVal)
      updateProtocolWidget(
        reporterVal,
        reporterStats,
        fabricatorData.protocols.reporter,
        'reporter',
        systemData.state
      );

    // Courier Protocols
    const researcherVal = document.getElementById('courier-researcher-val');
    const researcherStats = document.getElementById('courier-researcher-stats');
    if (researcherVal)
      updateProtocolWidget(
        researcherVal,
        researcherStats,
        courierData.protocols.researcher,
        'researcher',
        systemData.state
      );

    const compressorVal = document.getElementById('courier-compressor-val');
    const compressorStats = document.getElementById('courier-compressor-stats');
    if (compressorVal)
      updateProtocolWidget(
        compressorVal,
        compressorStats,
        courierData.protocols.compressor,
        'compressor',
        systemData.state
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
      'system-courier': 'Courier Agent',
      'system-architect': 'Architect Agent',
      'system-fabricator': 'Fabricator Agent',
      'system-test': 'System Validation',
      'voice-mode': 'Voice Interaction',
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

    const isSystemTest = proc.channel_id === 'system-test';
    const stateColor = isSystemTest ? '#03dac6' : '#fff';
    const borderColor = isSystemTest ? 'border: 1px solid #03dac644;' : '';
    const icon = isSystemTest ? 'bx-shield-quarter' : 'bx-cog';

    return `
                <div class="service-widget process-widget" data-channel-id="${proc.channel_id}-${proc.start_time}" style="${borderColor}">
                    <div class="service-widget-header">
                        <i class="bx ${icon}" style="color: ${stateColor}"></i>
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
