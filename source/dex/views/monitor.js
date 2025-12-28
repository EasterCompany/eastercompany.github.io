// System Monitor Logic (Services, Models, Processes)
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, smartFetch, LOCAL_EVENT_SERVICE } from '../core/utils.js';
import { getLogsContent, updateLogs } from './logs.js';

export const getAnalystContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Current Idle</span>
                <span id="analyst-idle-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Idle</span>
                <span id="analyst-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Active</span>
                <span id="analyst-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Waste</span>
                <span id="analyst-total-waste" style="color: #cf6679; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2>Analyst</h2>
            <button id="analyst-reset-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Reset</button>
        </div>
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Guardian</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Strategist</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
            </div>
        </div>`;
};

export const getProcessesContent = () => {
  return `
        <div class="system-section-header">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2>Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" class="system-monitor-widgets" style="margin-bottom: 30px; opacity: 0.7; flex-direction: row-reverse;"></div>`;
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

async function fetchAnalystStatus() {
  try {
    const response = await smartFetch('/analyst/status');
    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function updateSystemMonitor() {
  const widgetsContainer = document.getElementById('services-widgets');
  const hardwareRefreshBtn = document.getElementById('hardware-refresh-btn');

  // Hardware Containers
  const cpuContainer = document.querySelector('#hw-cpu .hw-content');
  const ramContainer = document.querySelector('#hw-ram .hw-content');
  const gpuContainer = document.querySelector('#hw-gpu .hw-content');
  const storageContainer = document.querySelector('#hw-storage .hw-content');

  // Helper to render hardware widgets
  const renderHardwareWidgets = (data) => {
    if (!data) return;

    // RAM
    if (ramContainer) {
      const ramGB = (data.MEMORY_BYTES / (1024 * 1024 * 1024)).toFixed(1);
      ramContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #888; font-weight: 500;">Total System Memory</span>
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

  // --- Update Analyst Status ---
  const t1Val = document.getElementById('analyst-t1-val');
  const t2Val = document.getElementById('analyst-t2-val');
  const t3Val = document.getElementById('analyst-t3-val');
  const idleVal = document.getElementById('analyst-idle-val');
  const totalIdleVal = document.getElementById('analyst-total-idle');
  const totalActiveVal = document.getElementById('analyst-total-active');
  const totalWasteVal = document.getElementById('analyst-total-waste');
  const resetBtn = document.getElementById('analyst-reset-btn');

  if (resetBtn && !resetBtn.dataset.listenerAttached) {
    resetBtn.onclick = async () => {
      resetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Resetting...";
      try {
        await smartFetch('/analyst/reset?tier=all', { method: 'POST' });
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

  const analystStatus = await fetchAnalystStatus();
  if (analystStatus) {
    const now = Math.floor(Date.now() / 1000);
    const activeTier = analystStatus.active_tier;

    const formatDuration = (seconds) => {
      if (seconds < 0) seconds = 0;
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      if (h > 0) return `${h}h ${m}m`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    };

    const updateTimer = (el, nextRun, tierName) => {
      if (activeTier === tierName || (tierName === 'guardian' && activeTier === 'tests')) {
        el.textContent = "Working";
        el.style.color = "#bb86fc"; // Purple for Analyst activity
        return;
      }

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
    };

    if (t1Val && analystStatus.guardian) updateTimer(t1Val, analystStatus.guardian.next_run, 'guardian');
    if (t2Val && analystStatus.architect) updateTimer(t2Val, analystStatus.architect.next_run, 'architect');
    if (t3Val && analystStatus.strategist) updateTimer(t3Val, analystStatus.strategist.next_run, 'strategist');

    if (idleVal && analystStatus.system_idle_time !== undefined) {
      const idle = analystStatus.system_idle_time;
      idleVal.textContent = formatDuration(idle);
      if (idle > 300) idleVal.style.color = "#5eff5e";
      else if (idle > 60) idleVal.style.color = "#ffa500";
      else idleVal.style.color = "#fff";
    }

    if (totalIdleVal) totalIdleVal.textContent = formatDuration(analystStatus.total_idle_time || 0);
    if (totalActiveVal) totalActiveVal.textContent = formatDuration(analystStatus.total_active_time || 0);
    if (totalWasteVal) totalWasteVal.textContent = formatDuration(analystStatus.total_waste_time || 0);

  } else {
    const indicators = [t1Val, t2Val, t3Val, idleVal, totalIdleVal, totalActiveVal, totalWasteVal];
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
  let history = [];

  if (processesData) {
    if (Array.isArray(processesData)) {
      processes = processesData;
    } else {
      processes = processesData.active || [];
      history = processesData.history || [];
    }
  }

  const vitalsProcVal = document.getElementById('vitals-processes-val');
  if (vitalsProcVal) {
    if (processesData) {
      const count = processes.length;
      vitalsProcVal.textContent = count > 0 ? `${count} Active` : "Idle";
      vitalsProcVal.style.color = count > 0 ? "#bb86fc" : "#fff";
    } else {
      vitalsProcVal.textContent = "-";
      vitalsProcVal.style.color = "#888";
    }
  }

  if (processesData === null) {
    if (widgetsContainer.children.length === 0) {
      widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load process status.', 'The event service may be offline.');
    }
    return;
  }

  lastProcessesUpdate = Date.now();
  updateTabTimestamp(1, lastProcessesUpdate);

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
      'system-discord': 'Discord Engine',
      'system-analyst': 'Analyst Worker',
      'system-cli-op': 'CLI Operation'
    };
    if (idMap[displayName]) {
      displayName = idMap[displayName];
    } else if (/^\d+$/.test(displayName)) {
      displayName = `Channel ${displayName}`;
    }

    const stateColor = isHistory ? '#888' : '#fff';
    const borderColor = isHistory ? 'border-left: 3px solid #666;' : ''; // Default uses class style, override if history

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

  const existingWidgetsMap = new Map(Array.from(container.querySelectorAll('.process-widget')).map(widget => [widget.dataset.channelId, widget]));

  // Map list to unique IDs (channel_id + start_time to distinguish history items)
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
      if (existingWidget.outerHTML !== newHtml) existingWidget.outerHTML = newHtml;
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

