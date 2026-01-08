// System Monitor Logic (Services, Models, Processes)
import imaginatorSVG from '../components/imaginatorSVG.js';
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, smartFetch, LOCAL_EVENT_SERVICE, isPublicMode } from '../core/utils.js';
import { getLogsContent, updateLogs } from './logs.js';
import { updateChoresTab } from './chores.js';

export const getGuardianContent = () => {
  const resetBtnStyle = isPublicMode() ? 'display: none;' : '';
  const approximationText = isPublicMode() ? '<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>' : '';
  return `
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${approximationText}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span id="system-state-label" style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System State</span>
                <span id="system-state-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Idle</span>
                <span id="guardian-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Active</span>
                <span id="guardian-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Waste</span>
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
            <svg width="24" height="24" viewBox="0 0 276 268" style="color: #03dac6; fill: currentColor; min-width: 24px; margin: 0; max-width: 25px;">
                <path d="M0 0 C0.83273438 -0.02191406 1.66546875 -0.04382813 2.5234375 -0.06640625 C12.42281602 1.94089846 19.08310224 8.30026822 25.96826172 15.2746582 C26.95727226 16.25851896 27.94735021 17.2413077 28.93840027 18.22311401 C31.60457896 20.87090912 34.25495042 23.53400437 36.90205145 26.20085549 C39.68567156 29.00096491 42.48198637 31.78835012 45.27639771 34.5776825 C49.96361651 39.26039291 54.64058983 43.95314835 59.31152344 48.65209961 C64.70016956 54.07281989 70.10469891 59.47729615 75.51801288 64.87337428 C80.74280158 70.08226408 85.95618152 75.30243123 91.16449356 80.52779198 C93.37364835 82.74379185 95.58666299 84.95582576 97.80294418 87.16469765 C100.41418514 89.7682407 103.01523577 92.38156651 105.60895729 95.00255966 C107.00896503 96.4126634 108.41872373 97.81306531 109.82881165 99.21308899 C115.21512659 104.68091165 119.71720271 109.65638967 121.15625 117.43359375 C121.1459375 118.28050781 121.135625 119.12742187 121.125 120 C121.14046875 121.26650391 121.14046875 121.26650391 121.15625 122.55859375 C119.29273788 133.0956586 112.41291897 139.49918055 105.10546875 146.7109375 C103.96129859 147.8559378 102.81794583 149.00175542 101.67536926 150.14834595 C99.28844755 152.53811319 96.89305386 154.91893632 94.4909668 157.29345703 C91.42251357 160.32777217 88.37460205 163.38178886 85.33254528 166.44254112 C82.97814152 168.80754245 80.61404093 171.16265346 78.24685097 173.51485062 C77.11941282 174.63713069 75.99475802 175.76221449 74.87303734 176.8902092 C73.30147909 178.4672553 71.71750525 180.03070557 70.12963867 181.59130859 C69.23347336 182.48127533 68.33730804 183.37124207 67.41398621 184.28817749 C62.66560568 188.16031881 57.88332197 189.99168346 51.6875 190 C50.72972656 190.01933594 49.77195312 190.03867188 48.78515625 190.05859375 C39.43875364 188.59135873 33.68473352 182.19800083 27.30932617 175.7644043 C26.29907148 174.75957818 25.28796968 173.75560315 24.27609253 172.75241089 C21.5460013 170.040466 18.82860783 167.31612861 16.11394668 163.40727827 16.11394668 163.40727827 12.00000003 163.40727827 C7.88605338 163.40727827 7.88605338 163.40727827 5.17066956 167.31612861 C2.4560084 170.040466 -0.26199624 172.75241089 -1.27223206 173.75560315 C-2.28410919 174.75957818 -3.29521099 175.7644043 -4.296875 176.7734375 C-10.66254737 183.18739987 -16.40250772 189.56475727 -25.73828125 191.0546875 C-26.72507812 191.03476562 -27.68285156 191.01542969 -28.640625 189.99609375 C-34.83644697 189.98777722 -39.61873068 188.15641257 -44.3671875 184.28515625 C-45.29050933 183.36822083 -46.18667465 182.47825409 -47.08283997 181.58828735 C-48.67070654 180.02768433 -50.25468038 178.46423405 -51.82624054 176.88719177 C-52.94796122 175.75919706 -54.07261602 174.63411326 -55.20005798 173.51183319 C-57.56724794 171.15963603 -59.93134853 168.80452502 -62.28580856 166.4395256 C-65.32786533 163.37877334 -68.37577685 160.32475666 -71.4440918 157.29043579 C-73.84617887 154.91591508 -76.24157256 152.535092 -78.62850952 150.14532471 C-79.77108609 148.99873418 -80.91443885 147.85291661 -82.05859375 146.70703125 C-89.36604397 139.49527431 -96.24586288 133.09175243 -98.1086731 122.5546875 C-98.09304688 121.26259766 -98.09304688 121.26259766 -98.1086731 119.99609375 C-98.11929687 119.12351563 -98.12960937 118.27660156 -98.11408997 117.4296875 C-96.67504303 109.65248347 -92.17296691 104.67700547 -86.78659058 99.20918274 C-85.37650266 97.80915906 -83.96674396 96.40875715 -82.56673431 94.99865723 C-79.97301279 92.37766408 -77.37196216 89.76433838 -74.76072311 87.1607933 C-72.54444192 84.95192141 -70.33142728 82.7398875 -68.12227249 80.52388763 C-62.91396045 75.29852688 -57.70058051 70.07835973 -52.48318481 64.86946869 C-47.06987084 59.47339056 -41.66534149 54.0689143 -36.27669525 48.64819336 C-31.60576164 43.9492421 -26.92878832 39.25648666 -22.24157333 34.57377625 C-19.44716199 31.78444386 -16.65084718 28.99705865 -13.86722755 26.196949 C-11.22012652 23.53009788 -8.56975506 20.86700263 -5.90357637 18.21920776 C-4.91252631 17.23740145 -3.92244836 16.25461271 -2.93343735 15.27075195 C3.95172213 8.29636198 10.61200835 1.93699222 20.51138687 -0.0703125 C21.36935562 -0.04773438 22.20208999 -0.02582031 23.03482437 -0.00390625 " transform="translate(30.08984375,30.8984375)"/>
            </svg>
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
        </div>`;
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`;
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

// Deprecated, but kept for safety if referenced elsewhere temporarily
export const getSystemContent = () => {
  return getAnalystContent() + getProcessesContent() + getServicesContent() + getModelsContent() + getHardwareContent() + getServiceLogsContent();
};

export async function updateSystemTab() {
  // Initial fetch for all system components
  await Promise.all([
    updateProcessesTab(),
    updateSystemMonitor(),
    updateModelsTab(),
    updateChoresTab()
  ]);

  // Update logs separately
  await updateLogs();
}

export let lastServicesUpdate = null;
export let lastModelsUpdate = null;
export let lastProcessesUpdate = null;

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
  const renderHardwareWidgets = (data) => {
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
        gpuContainer.innerHTML = data.GPU.map(gpu => {
          const vramGB = (gpu.VRAM / (1024 * 1024 * 1024)).toFixed(1);
          return `
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${gpu.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${vramGB} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`;
        }).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>');
      } else {
        gpuContainer.innerHTML = `<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>`;
      }
    }

    // Storage - Individual Devices
    if (storageContainer && data.STORAGE && data.STORAGE.length > 0) {
      storageContainer.innerHTML = data.STORAGE.map(disk => {
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
                             <div style="background: ${percent > 90 ? '#cf6679' : '#03dac6'}; width: ${percent}%; height: 100%; box-shadow: 0 0 10px ${percent > 90 ? '#cf667944' : '#03dac644'};"></div>
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
          setTimeout(() => { hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i>"; }, 2000);
        } else {
          hardwareRefreshBtn.innerHTML = "<i class='bx bx-error'></i>";
          setTimeout(() => { hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i>"; }, 2000);
        }
      };
      hardwareRefreshBtn.dataset.listenerAttached = "true";
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
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'The event service may be offline.');
    }
    return;
  }

  lastServicesUpdate = Date.now();
  updateTabTimestamp(0, lastServicesUpdate);
  const services = data.services || [];

  Array.from(widgetsContainer.children).forEach(child => {
    if (!child.classList.contains('service-widget')) child.remove();
  });

  function sanitizeValue(value) { if (!value || value === 'N/A' || value === 'unknown' || value.trim() === '') { return '-'; } return value; }
  function extractMajorMinorPatch(versionStr) { if (!versionStr || versionStr === 'N/A' || versionStr === 'unknown') { return '-'; } const match = versionStr.match(/^(\d+\.\d+\.\d+)/); if (match) return match[0]; return versionStr.split('.').slice(0, 3).join('.') || '-'; }
  function truncateAddress(address) { if (!address || address.length <= 28) return address; return address.substring(0, 28) + '...'; }

  function formatUptime(uptimeStr) { if (!uptimeStr || uptimeStr === 'N/A' || uptimeStr === 'unknown') return '-'; const match = uptimeStr.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/); if (!match) return '-'; const days = parseInt(match[1]) || 0; const hours = parseInt(match[2]) || 0; const minutes = parseInt(match[3]) || 0; const seconds = parseFloat(match[4]) || 0; const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds; const totalDays = Math.floor(totalSeconds / 86400); if (totalDays > 0) return `${totalDays}d`; const totalHours = Math.floor(totalSeconds / 3600); if (totalHours > 0) return `${totalHours}h`; const totalMinutes = Math.floor(totalSeconds / 60); if (totalMinutes > 0) return `${totalMinutes}m`; return `${Math.floor(totalSeconds)}s`; }

  function generateWidgetHtml(service) {
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
      detailsHtml = `<div class="service-widget-footer offline"><span>OFFLINE</span></div>`;
    }

    const displayAddress = isPublicMode() ? "easter.company" : truncateAddress(service.domain && service.port ? `${service.domain}:${service.port}` : '');

    return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${displayAddress}</span></div>${detailsHtml}</div></div>`;
  }

  const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.service-widget')).map(widget => [widget.dataset.serviceId, widget]));
  const incomingServiceIds = new Set(services.map(s => s.id));

  for (const [id, widget] of existingWidgetsMap) {
    if (!incomingServiceIds.has(id)) {
      widget.remove();
    }
  }

  services.forEach(service => {
    const newHtml = generateWidgetHtml(service);
    const existingWidget = existingWidgetsMap.get(service.id);
    if (existingWidget) {
      if (existingWidget.outerHTML !== newHtml) existingWidget.outerHTML = newHtml;
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
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load model status.', 'The event service may be offline.');
    }
    return;
  }

  lastModelsUpdate = Date.now();
  updateTabTimestamp(2, lastModelsUpdate);

  const models = data.models || [];
  const whisperStatus = data.whisper;

  Array.from(widgetsContainer.children).forEach(child => {
    if (!child.classList.contains('service-widget')) child.remove();
  });

  function generateWhisperWidgetHtml(whisper) {
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

  function generateXTTSWidgetHtml(xtts) {
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

  function generateModelWidgetHtml(model) {
    const isDownloaded = model.status === 'Downloaded';
    const statusClass = isDownloaded ? 'service-widget-online' : 'service-widget-offline';
    const statusText = isDownloaded ? 'OK' : 'MISSING';
    const sizeDisplay = isDownloaded && model.size > 0 ? `${(model.size / 1e9).toFixed(2)} GB` : '-';

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

export async function updateProcessesTab() {
  const widgetsContainer = document.getElementById('processes-widgets');
  if (!widgetsContainer) return;

  // --- Update Guardian Status ---
  const sentryVal = document.getElementById('guardian-sentry-val');
  const architectVal = document.getElementById('guardian-architect-val');
  const idleVal = document.getElementById('guardian-idle-val');
  const totalIdleVal = document.getElementById('guardian-total-idle');
  const totalActiveVal = document.getElementById('guardian-total-active');
  const totalWasteVal = document.getElementById('guardian-total-waste');
  const resetBtn = document.getElementById('guardian-reset-btn');
  const analyzerResetBtn = document.getElementById('analyzer-reset-btn');

  if (resetBtn && !resetBtn.dataset.listenerAttached) {
    resetBtn.onclick = async () => {
      resetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/guardian/reset?protocol=all', { method: 'POST' });
        setTimeout(() => {
          resetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => { resetBtn.innerHTML = "<i class='bx bx-refresh'></i>"; }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        resetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    resetBtn.dataset.listenerAttached = "true";
  }

  if (analyzerResetBtn && !analyzerResetBtn.dataset.listenerAttached) {
    analyzerResetBtn.onclick = async () => {
      analyzerResetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/analyzer/reset?protocol=synthesis', { method: 'POST' });
        setTimeout(() => {
          analyzerResetBtn.innerHTML = "<i class='bx bx-check'></i>";
          setTimeout(() => { analyzerResetBtn.innerHTML = "<i class='bx bx-refresh'></i>"; }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        analyzerResetBtn.innerHTML = "<i class='bx bx-error'></i>";
      }
    };
    analyzerResetBtn.dataset.listenerAttached = "true";
  }

  const guardianStatus = await fetchGuardianStatus();
  if (guardianStatus) {
    const now = Math.floor(Date.now() / 1000);
    const activeTier = guardianStatus.active_tier;
    const activeSynthesis = guardianStatus.active_synthesis;
    const aliases = guardianStatus.protocol_aliases || { "sentry": "Sentry", "architect": "Architect", "synthesis": "Synthesis" };

    const formatDuration = (seconds) => {
      if (seconds < 0) seconds = 0;
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      if (h > 0) return `${h}h ${m}m`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    };

    const updateTimer = (el, statsEl, protocolData, protocolName, currentActive) => {
      if (!el) return;
      const alias = aliases[protocolName] || protocolName.toUpperCase();
      const labelEl = el.parentElement.querySelector('span[style*="text-transform: uppercase"]');
      if (labelEl) {
        labelEl.textContent = alias;
      }

      if (currentActive && currentActive.includes(protocolName)) {
        el.textContent = "Working";
        el.style.color = "#bb86fc";
      } else if (protocolData) {
        const nextRun = protocolData.next_run;
        const diff = nextRun - now;
        if (diff <= 0) {
          el.textContent = "Ready";
          el.style.color = "#5eff5e";
        } else {
          const mins = Math.floor(diff / 60);
          const secs = diff % 60;
          el.textContent = `${mins}m ${secs}s`;
          el.style.color = "#fff";
        }
      }

      if (statsEl && protocolData) {
        statsEl.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${protocolData.attempts || 0}</span>
            <span style="color: ${protocolData.failures > 0 ? '#ffa500' : '#666'}">Fails: ${protocolData.failures || 0}</span>
            <span style="color: ${protocolData.absolute_failures > 0 ? '#ff4d4d' : '#666'}">Aborted: ${protocolData.absolute_failures || 0}</span>
          </div>
        `;
      }
    };

    if (sentryVal) updateTimer(sentryVal, document.getElementById('guardian-sentry-stats'), guardianStatus.sentry, 'sentry', activeTier);
    if (architectVal) updateTimer(architectVal, document.getElementById('guardian-architect-stats'), guardianStatus.architect, 'architect', activeTier);
    
    const synthesisVal = document.getElementById('analyzer-synthesis-val');
    const synthesisStats = document.getElementById('analyzer-synthesis-stats');
    if (synthesisVal) updateTimer(synthesisVal, synthesisStats, guardianStatus.synthesis, 'synthesis', activeSynthesis);

    const stateLabel = document.getElementById('system-state-label');
    const stateVal = document.getElementById('system-state-val');
    if (stateVal && guardianStatus.system_state) {
      const state = guardianStatus.system_state;
      const duration = formatDuration(guardianStatus.system_state_time || 0);

      if (stateLabel) stateLabel.textContent = `State: ${state.toUpperCase()}`;
      stateVal.textContent = duration;

      if (state === 'idle') {
        stateVal.style.color = guardianStatus.system_state_time > 300 ? "#5eff5e" : "#fff";
      } else {
        stateVal.style.color = "#bb86fc"; // Purple for working/busy
      }
    }

    if (totalIdleVal) totalIdleVal.textContent = formatDuration(guardianStatus.total_idle_time || 0);
    if (totalActiveVal) totalActiveVal.textContent = formatDuration(guardianStatus.total_active_time || 0);
    if (totalWasteVal) totalWasteVal.textContent = formatDuration(guardianStatus.total_waste_time || 0);

  } else {
    const indicators = [sentryVal, architectVal, idleVal, totalIdleVal, totalActiveVal, totalWasteVal];
    indicators.forEach(el => {
      if (el) {
        el.textContent = "-";
        el.style.color = "#666";
      }
    });
  }

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
      history.sort((a, b) => (b.end_time || 0) - (a.end_time || 0));
    }
  }

  // ... (omitting middle parts)

  // Active Processes Rendering
  if (processes.length === 0) {
    if (!widgetsContainer.querySelector('.tab-placeholder')) {
      widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
    }
  } else {
    if (widgetsContainer.querySelector('.tab-placeholder') || widgetsContainer.querySelector('p')) {
      widgetsContainer.innerHTML = '';
    }
    renderProcessList(widgetsContainer, processes, false);
  }

  // Queue Processes Rendering
  const queueContainer = document.getElementById('processes-queue-widgets');
  if (queueContainer) {
    if (queue.length === 0) {
      if (!queueContainer.querySelector('.tab-placeholder') && !queueContainer.querySelector('div[style*="font-style: italic"]')) {
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

function renderProcessList(container, list, isHistory) {
  function generateProcessWidgetHtml(proc) {
    let durationStr = '';
    if (proc.end_time) {
      const dur = proc.end_time - proc.start_time;
      durationStr = `${dur}s`;
    } else {
      const dur = Math.floor((Date.now() / 1000) - proc.start_time);
      durationStr = `${dur}s`;
    }

    const retryBadge = proc.retries > 0 ? `<span class="process-retry-badge">Retry ${proc.retries}</span>` : '';

    // Pretty-print common system IDs
    let displayName = proc.channel_id;
    const idMap = {
      'system-guardian': 'Guardian Agent',
      'system-cli-op': 'CLI Operation',
      'system-analyzer': 'Analyzer Agent'
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
  const existingWidgetsMap = new Map(Array.from(container.querySelectorAll(selector)).map(widget => [widget.dataset.channelId, widget]));
  const incomingIds = new Set(list.map(p => `${p.channel_id}-${p.start_time}`));

  for (const [id, widget] of existingWidgetsMap) {
    if (!incomingIds.has(id)) {
      widget.remove();
    }
  }

  list.forEach(proc => {
    const uniqueId = `${proc.channel_id}-${proc.start_time}`;
    const newHtml = generateProcessWidgetHtml(proc);
    const existingWidget = existingWidgetsMap.get(uniqueId);
    if (existingWidget) {
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