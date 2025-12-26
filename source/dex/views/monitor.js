// System Monitor Logic (Services, Models, Processes)
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, smartFetch, LOCAL_EVENT_SERVICE } from '../core/utils.js';
import { getLogsContent, updateLogs } from './logs.js';

export const getSystemContent = () => {
    return `
        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Analyst & Vitals</h2>
        </div>
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 0.9em; color: #888; text-transform: uppercase; letter-spacing: 1px;">Analyst Tiers</h3>
                <button id="analyst-reset-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Reset</button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Guardian</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Architect</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Strategist</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
            </div>
            
            <div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                 <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Cognitive Idle</span>
                    <span id="analyst-idle-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                 <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Active Procs</span>
                    <span id="vitals-processes-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading processes...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading services...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading models...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em; margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
            <p style="color: #ccc; font-size: 0.9em; margin: 0;">Loading hardware info...</p>
        </div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${getLogsContent()}
        </div>
    `;
};

export async function updateSystemTab() {
    // Initial fetch for all system components
    await Promise.all([
        updateProcessesTab(),
        updateSystemMonitor(),
        updateModelsTab()
    ]);
    
    // Update logs separately to ensure DOM is ready if needed, 
    // although Promise.all above is fine.
    await updateLogs();
}

export const getServicesContent = () => {
    return `<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>`;
};
export const getModelsContent = () => `<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>`;
export const getProcessesContent = () => {
    return `<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>`;
};

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
    const hardwareContainer = document.getElementById('hardware-info-content');
    const hardwareRefreshBtn = document.getElementById('hardware-refresh-btn');

    // Helper to render hardware widgets
    const renderHardwareWidgets = (data) => {
        if (!data) {
            hardwareContainer.innerHTML = '<p style="color: #ff4d4d;">Failed to load hardware info.</p>';
            return;
        }

        let html = '';

        // RAM
        const ramGB = (data.MEMORY_BYTES / (1024 * 1024 * 1024)).toFixed(1);
        html += `
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${ramGB} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`;

        // CPU
        if (data.CPU && data.CPU.length > 0) {
            const cpu = data.CPU[0]; // Assuming single CPU for simplicity
            html += `
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${cpu.LABEL}">${cpu.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${cpu.COUNT} Cores / ${cpu.THREADS} Threads</span>
                    </div>
                </div>`;
        }

        // GPU
        if (data.GPU && data.GPU.length > 0) {
            data.GPU.forEach((gpu, idx) => {
                const vramGB = (gpu.VRAM / (1024 * 1024 * 1024)).toFixed(1);
                html += `
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${idx}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${gpu.LABEL}">${gpu.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${vramGB} GB VRAM</span>
                        </div>
                    </div>`;
            });
        }

        // Storage
        if (data.STORAGE && data.STORAGE.length > 0) {
            let totalUsed = 0;
            let totalSize = 0;
            data.STORAGE.forEach(disk => {
                totalUsed += disk.USED;
                totalSize += disk.SIZE;
            });
            const usedGB = (totalUsed / (1024 * 1024 * 1024)).toFixed(1);
            const sizeGB = (totalSize / (1024 * 1024 * 1024)).toFixed(1);
            const percent = totalSize > 0 ? ((totalUsed / totalSize) * 100).toFixed(0) : 0;
            
            html += `
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${usedGB} / ${sizeGB} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${percent > 90 ? '#ff4d4d' : '#00ff00'}; width: ${percent}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`;
        }

        hardwareContainer.innerHTML = html;
    };

    // Handle Hardware Widget
    if (hardwareContainer && hardwareRefreshBtn) {
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
                    hardwareContainer.innerHTML = '<p style="color: #ff4d4d;">Failed to refresh.</p>';
                    hardwareRefreshBtn.innerHTML = "<i class='bx bx-error'></i> Failed";
                    setTimeout(() => { hardwareRefreshBtn.innerHTML = "<i class='bx bx-refresh'></i> Refresh"; }, 2000);
                }
            };
            hardwareRefreshBtn.dataset.listenerAttached = "true";
        }

        // Initial Load (only if showing "Loading..." text)
        // Check if it has the initial loading paragraph
        const loadingP = hardwareContainer.querySelector('p');
        if (loadingP && loadingP.textContent === "Loading hardware info...") {
            const hwData = await fetchHardwareData();
            renderHardwareWidgets(hwData);
        }
    }

    if (!widgetsContainer) return;

    const data = await fetchSystemData();

    if (!data || !data.services) {
        widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'The event service may be offline or unreachable.');
        return;
    }

    lastServicesUpdate = Date.now();
    updateTabTimestamp(3, lastServicesUpdate);
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
        widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load model status.');
        return;
    }

    lastModelsUpdate = Date.now();
    updateTabTimestamp(3, lastModelsUpdate);

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
    const resetBtn = document.getElementById('analyst-reset-btn');

    if (resetBtn && !resetBtn.dataset.listenerAttached) {
        resetBtn.onclick = async () => {
            resetBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Resetting...";
            try {
                await smartFetch('/analyst/reset?tier=all', { method: 'POST' });
                setTimeout(() => {
                    resetBtn.innerHTML = "<i class='bx bx-check'></i> Done";
                    setTimeout(() => { resetBtn.innerHTML = "<i class='bx bx-refresh'></i> Reset Analyst"; }, 2000);
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
            const mins = Math.floor(idle / 60);
            const secs = idle % 60;
            idleVal.textContent = `${mins}m ${secs}s`;
            // Color code idle time: Green if > 5 mins (300s), Orange if > 1 min, Red otherwise (just an example, or keep white)
            if (idle > 300) idleVal.style.color = "#5eff5e";
            else if (idle > 60) idleVal.style.color = "#ffa500";
            else idleVal.style.color = "#fff";
        }
    } else {
        const indicators = [t1Val, t2Val, t3Val, idleVal];
        indicators.forEach(el => {
            if (el) {
                el.textContent = "Offline";
                el.style.color = "#ff4d4d"; // Red for Offline
            }
        });
    }

    // --- Update Processes List ---
    const processes = await fetchProcessData();

    const vitalsProcVal = document.getElementById('vitals-processes-val');
    if (vitalsProcVal) {
        if (processes) {
            const count = processes.length;
            vitalsProcVal.textContent = count > 0 ? `${count} Active` : "Idle";
            vitalsProcVal.style.color = count > 0 ? "#bb86fc" : "#fff";
        } else {
            vitalsProcVal.textContent = "-";
            vitalsProcVal.style.color = "#888";
        }
    }

    if (processes === null) {
        widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load process status.');
        return;
    }

    lastProcessesUpdate = Date.now();
    updateTabTimestamp(3, lastProcessesUpdate);

    if (processes.length === 0) {
        // Only clear if we actually have the widgets container and no processes, 
        // but we want to KEEP the analyst status section intact.
        // So we should target a specific container for processes OR handle the HTML append carefully.
        // The current structure is: Analyst Section -> Processes Container.
        // wait, getProcessesContent returns TWO divs: .analyst-status-section and #processes-widgets.
        // BUT widgetsContainer IS #processes-widgets based on existing code: const widgetsContainer = document.getElementById('processes-widgets');
        
        // Correct logic: getProcessesContent is used in the main template. 
        // In updateProcessesTab, we look for #processes-widgets.
        // If I change getProcessesContent to return multiple root elements, I need to make sure they are inserted correctly.
        // Actually, window.js puts the content into .window-content.
        
        // Problem: getProcessesContent returns a template string with multiple top-level elements. 
        // window.js puts this into .window-content. 
        // updateProcessesTab grabs #processes-widgets.
        // So my new Analyst section is OUTSIDE #processes-widgets. This is GOOD.
        // But wait, if processes.length === 0, the existing code does:
        // widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
        // This is fine, it only clears the process list, not the analyst status!
        
        widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
        updateTabBadgeCount(3, 0);
        return;
    }

    if (widgetsContainer.querySelector('.tab-placeholder') || widgetsContainer.querySelector('p')) {
        widgetsContainer.innerHTML = '';
    }

    function generateProcessWidgetHtml(proc) {
        const duration = Math.floor((Date.now() / 1000) - proc.start_time);
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
            // If it's a numeric ID, it's likely a Discord channel ID
            displayName = `Channel ${displayName}`;
        }

        return `
                <div class="service-widget process-widget" data-channel-id="${proc.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${displayName}</h3>
                        ${retryBadge}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${proc.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${duration}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${proc.pid}</span>
                        </div>
                    </div>
                </div>`;
    }

    const existingWidgetsMap = new Map(Array.from(widgetsContainer.querySelectorAll('.process-widget')).map(widget => [widget.dataset.channelId, widget]));
    const incomingIds = new Set(processes.map(p => p.channel_id));

    for (const [id, widget] of existingWidgetsMap) {
        if (!incomingIds.has(id)) {
            widget.remove();
        }
    }

    processes.forEach(proc => {
        const newHtml = generateProcessWidgetHtml(proc);
        const existingWidget = existingWidgetsMap.get(proc.channel_id);
        if (existingWidget) {
            if (existingWidget.outerHTML !== newHtml) existingWidget.outerHTML = newHtml;
        } else {
            widgetsContainer.insertAdjacentHTML('beforeend', newHtml);
        }
    });

    updateTabBadgeCount(3, processes.length);
}
