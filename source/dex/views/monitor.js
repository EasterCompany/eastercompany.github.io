// System Monitor Logic (Services, Models, Processes)
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, smartFetch, LOCAL_EVENT_SERVICE } from '../core/utils.js';
import { getLogsContent, updateLogs } from './logs.js';

export const getGuardianContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
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
            <button id="guardian-reset-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Reset</button>
        </div>
        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Sentry Protocol</span>
                    <span id="guardian-sentry-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-sentry-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Protocol</span>
                    <span id="guardian-architect-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-architect-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header">
            <svg width="20" height="20" viewBox="0 0 276 268" style="color: #03dac6; fill: currentColor; margin-right: 10px;">
                <path d="M0 0 C0.83273438 -0.02191406 1.66546875 -0.04382813 2.5234375 -0.06640625 C12.42281602 1.94089846 19.08310224 8.30026822 25.96826172 15.2746582 C26.95727226 16.25851896 27.94735021 17.2413077 28.93840027 18.22311401 C31.60457896 20.87090912 34.25495042 23.53400437 36.90205145 26.20085549 C39.68567156 29.00096491 42.48198637 31.78835012 45.27639771 34.5776825 C49.96361651 39.26039291 54.64058983 43.95314835 59.31152344 48.65209961 C64.70016956 54.07281989 70.10469891 59.47729615 75.51801288 64.87337428 C80.74280158 70.08226408 85.95618152 75.30243123 91.16449356 80.52779198 C93.37364835 82.74379185 95.58666299 84.95582576 97.80294418 87.16469765 C100.41418514 89.7682407 103.01523577 92.38156651 105.60895729 95.00255966 C107.00896503 96.4126634 108.41872373 97.81306531 109.82881165 99.21308899 C115.21512659 104.68091165 119.71720271 109.65638967 121.15625 117.43359375 C121.1459375 118.28050781 121.135625 119.12742187 121.125 120 C121.14046875 121.26650391 121.14046875 121.26650391 121.15625 122.55859375 C119.29273788 133.0956586 112.41291897 139.49918055 105.10546875 146.7109375 C103.96129859 147.8559378 102.81794583 149.00175542 101.67536926 150.14834595 C99.28844755 152.53811319 96.89305386 154.91893632 94.4909668 157.29345703 C91.42251357 160.32777217 88.37460205 163.38178886 85.33254528 166.44254112 C82.97814152 168.80754245 80.61404093 171.16265346 78.24685097 173.51485062 C77.11941282 174.63713069 75.99475802 175.76221449 74.87303734 176.8902092 C73.30147909 178.4672553 71.71750525 180.03070557 70.12963867 181.59130859 C69.23347336 182.48127533 68.33730804 183.37124207 67.41398621 184.28817749 C62.66560568 188.16031881 57.88332197 189.99168346 51.6875 190 C50.72972656 190.01933594 49.77195312 190.03867188 48.78515625 190.05859375 C39.43875364 188.59135873 33.68473352 182.19800083 27.30932617 175.7644043 C26.29907148 174.75957818 25.28796968 173.75560315 24.27609253 172.75241089 C21.5460013 170.040466 18.82860783 167.31612861 16.11394668 164.58874869 C13.26396116 161.72859314 10.40417989 158.87825841 7.54597473 156.02632141 C2.7500778 151.23768806 -2.03735442 146.44071357 -6.82006836 141.63891602 C-12.34193771 136.09526806 -17.87808586 130.56619364 -23.42184621 125.04444379 C-28.19119159 120.29327429 -32.95266783 115.53432414 -37.70770282 110.7688325 C-40.54340877 107.92690528 -43.38171285 105.08771456 -46.22715187 102.2555294 C-48.90145417 99.59281726 -51.5657144 96.92044172 -54.22267532 94.24042892 C-55.19676448 93.26107013 -56.17423765 92.28506324 -57.15538216 91.31277275 C-67.60330716 80.95044548 -67.60330716 80.95044548 -68.80859375 72.53515625 C-68.80988281 71.57480469 -68.81117187 70.61445312 -68.8125 69.625 C-68.83183594 68.66722656 -68.85117188 67.70945312 -68.87109375 66.72265625 C-67.30574621 56.75126914 -59.94014197 50.53844575 -53.109375 43.765625 C-51.99024053 42.64379096 -50.87169999 41.52136415 -49.75372314 40.39837646 C-47.41663676 38.05541695 -45.072532 35.7197827 -42.72314453 33.38916016 C-39.72603827 30.41484171 -36.747253 27.42292163 -33.77352524 24.42525101 C-31.46951551 22.10672421 -29.15598517 19.79788601 -26.8395462 17.49178314 C-25.737909 16.3927969 -24.63918713 15.29087962 -23.54357147 14.1858902 C-9.43730391 -0.01451893 -9.43730391 -0.01451893 0 0 Z " transform="translate(144.375,4.4375)"/>
                <path d="M0 0 C1.1040332 0.93706754 2.20673163 1.8757078 3.30888367 2.81498718 C4.23020096 3.59878518 4.23020096 3.59878518 5.17013073 4.39841747 C7.93327454 6.81684316 10.50793202 9.40308666 13.08203125 12.01953125 C13.62228439 12.56357101 14.16253754 13.10761078 14.71916199 13.6681366 C16.41943213 15.38047707 18.11636669 17.09606241 19.8125 18.8125 C22.06614488 21.09270671 24.32306859 23.36959413 26.58203125 25.64453125 C27.09659378 26.16739212 27.61115631 26.69025299 28.14131165 27.22895813 C30.80906769 29.95870643 30.80906769 29.95870643 34 32 C32.60013666 35.15762163 30.95160504 37.30453576 28.52392578 39.75022888 C27.44343208 40.84568527 27.44343208 40.84568527 26.34111023 41.96327209 C25.55049698 42.75455002 24.75988373 43.54582794 23.9453125 44.36108398 C23.11252274 45.20219727 22.27973297 46.04331055 21.42170715 46.90991211 C19.13803757 49.21354749 16.84982552 51.51253513 14.55869675 53.80874896 C13.12471671 55.24637776 11.69204244 56.68529502 10.25979614 58.12465096 C5.2546008 63.15433924 0.24371059 68.17828103 -4.77197266 73.19750977 C-9.43259377 77.86175845 -14.07994342 82.53894789 -18.72135925 87.22230095 C-22.71683946 91.25259879 -26.72200991 95.2730975 -30.73458862 99.28637177 C-33.12632807 101.67890061 -35.51400356 104.07515694 -37.89178467 106.48156548 C-40.55282793 109.16958677 -43.22936601 111.84121293 -45.91015625 114.50952148 C-46.68457565 115.29877518 -47.45899506 116.08802887 -48.25688171 116.90119934 C-54.65361487 123.21386137 -61.31272776 128.00286915 -70.5 128.625 C-77.28976582 128.26006209 -83.06594048 125.95835815 -87.88671875 121.09765625 C-92.60027132 115.15150397 -94.61336757 109.36758536 -94.35209942 101.76492119 C-93.17518729 92.52301649 -86.63472017 85.92640937 -80.26245117 79.69482422 C-79.39365326 78.82529617 -78.52485535 77.95576813 -77.62973022 77.05989075 C-75.26909233 74.70211816 -72.89800233 72.35592197 -70.52134109 70.0143714 C-68.0312607 67.55576868 -65.55554321 65.08278451 -63.07820129 62.61135864 C-58.39573444 57.94436778 -53.70068202 53.29025845 -49.00085384 48.64075863 C-43.6462765 43.34227024 -38.3060662 38.02939992 -32.96695364 32.71533561 C-21.99376178 21.79426027 -11.00286569 10.89118365 0 0 Z " transform="translate(103,133)"/>
                <path d="M0 0 C5.38774836 3.27445051 9.48629464 7.72940902 11.375 13.796875 C12.57556759 20.12129356 13.08379186 26.61224973 9.8125 32.3515625 C9.1525 33.2590625 8.4925 34.1665625 7.8125 35.1015625 C3.14375463 31.20179529 -1.27877809 27.14941606 -5.55859375 22.828125 C-6.12578629 22.25951752 -6.69297882 21.69091003 -7.27735901 21.10507202 C-9.06229913 19.31460014 -10.84370256 17.52065766 -12.625 15.7265625 C-13.84546939 14.50106927 -15.06617053 13.27580678 -16.28710938 12.05078125 C-19.25658756 9.07036476 -22.22290257 6.08683356 -25.1875 3.1015625 C-18.60177483 -3.68024927 -8.47804034 -3.77979299 0 0 Z " transform="translate(229.1875,30.8984375)"/>
            </svg>
            <h2>Fabricator</h2>
        </div>
        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); opacity: 0.5;">
            <div style="text-align: center; color: #666; font-style: italic; font-size: 0.85em;">
                Fabricator Agent coming soon...
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
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
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
    updateModelsTab()
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
        hardwareRefreshBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Refreshing...";
        const hwData = await fetchHardwareData();
        if (hwData) {
          renderHardwareWidgets(hwData);
          hardwareRefreshBtn.innerHTML = "<i class='bx bx-check'></i> Done";
          setTimeout(() => { hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i> Refresh"; }, 2000);
        } else {
          hardwareRefreshBtn.innerHTML = "<i class='bx bx-error'></i> Failed";
          setTimeout(() => { hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i> Refresh"; }, 2000);
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
    return `<div class="service-widget ${statusClass}" data-service-id="${service.id}"><div class="service-widget-header"><i class="bx ${statusIcon}"></i><h3>${service.short_name || service.id}</h3><span class="service-widget-status">${statusText}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${truncateAddress(service.domain && service.port ? `${service.domain}:${service.port}` : '')}</span></div>${detailsHtml}</div></div>`;
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

  if (resetBtn && !resetBtn.dataset.listenerAttached) {
    resetBtn.onclick = async () => {
      resetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Resetting...";
      try {
        await smartFetch('/guardian/reset?protocol=all', { method: 'POST' });
        setTimeout(() => {
          resetBtn.innerHTML = "<i class='bx bx-check'></i> Done";
          setTimeout(() => { resetBtn.innerHTML = "<i class='bx bx-refresh'></i> Reset"; }, 2000);
        }, 500);
        updateProcessesTab(); // refresh immediately
      } catch (e) {
        resetBtn.innerHTML = "<i class='bx bx-error'></i> Failed";
      }
    };
    resetBtn.dataset.listenerAttached = "true";
  }

  const guardianStatus = await fetchGuardianStatus();
  if (guardianStatus) {
    const now = Math.floor(Date.now() / 1000);
    const activeTier = guardianStatus.active_tier;
    const aliases = guardianStatus.protocol_aliases || { "sentry": "Sentry", "architect": "Architect" };

    const formatDuration = (seconds) => {
      if (seconds < 0) seconds = 0;
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      if (h > 0) return `${h}h ${m}m`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    };

    const updateTimer = (el, statsEl, protocolData, protocolName) => {
      if (!el) return;
      const alias = aliases[protocolName] || protocolName.toUpperCase();
      const labelEl = el.parentElement.querySelector('span[style*="text-transform: uppercase"]');
      if (labelEl) {
          labelEl.textContent = alias;
      }

      if (activeTier && activeTier.includes(alias)) {
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

    if (sentryVal) updateTimer(sentryVal, document.getElementById('guardian-sentry-stats'), guardianStatus.sentry, 'sentry');
    if (architectVal) updateTimer(architectVal, document.getElementById('guardian-architect-stats'), guardianStatus.architect, 'architect');

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
      'system-cli-op': 'CLI Operation'
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
// End of updateProcessesTab logic replacement (helper function outside)
// Wait, I cannot put renderProcessList outside if I am replacing the inside of updateProcessesTab.
// I must inline it or define it before/after.
// The replace tool replaces a specific string.
// I'll replace the entire body of `updateProcessesTab` or the relevant part.

// Current code structure:
// export async function updateProcessesTab() {
//    ...
//    // --- Update Processes List ---
//    const processes = await fetchProcessData();
//    ...
//    // Logic
//    ...
//    function generateProcessWidgetHtml(proc) { ... }
//    ...
//    processes.forEach(...)
//    updateTabBadgeCount(...)
// }

// I will replace from `// --- Update Processes List ---` to the end of the function.

