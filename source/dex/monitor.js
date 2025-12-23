// System Monitor Logic (Services, Models, Processes)
import { createPlaceholderMessage, updateTabTimestamp } from './utils.js';

export const getServicesContent = () => localStorage.getItem('service_map') ? `<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
export const getModelsContent = () => localStorage.getItem('service_map') ? `<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
export const getProcessesContent = () => localStorage.getItem('service_map') ? `<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>` : createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');

export let lastServicesUpdate = null;
export let lastModelsUpdate = null;
export let lastProcessesUpdate = null;

async function fetchSystemData() {
    if (!localStorage.getItem('service_map')) return null;
    try {
        const serviceMap = JSON.parse(localStorage.getItem('service_map'));
        const eventService = (serviceMap.services?.cs || []).find(s => s.id === 'dex-event-service');
        if (!eventService) return null;
        const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
        const url = `http://${domain}:${eventService.port}/system_monitor`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching system data:', error);
        return null;
    }
}

async function fetchProcessData() {
    if (!localStorage.getItem('service_map')) return null;
    try {
        const serviceMap = JSON.parse(localStorage.getItem('service_map'));
        const eventService = (serviceMap.services?.cs || []).find(s => s.id === 'dex-event-service');
        if (!eventService) return null;
        const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
        const url = `http://${domain}:${eventService.port}/processes`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching process data:', error);
        return null;
    }
}

export async function updateSystemMonitor() {
    const widgetsContainer = document.getElementById('services-widgets');
    if (!widgetsContainer) return;

    const data = await fetchSystemData();

    if (!data || !data.services) {
        widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load system metrics.', 'The event service may be offline or unreachable.');
        return;
    }

    lastServicesUpdate = Date.now();
    updateTabTimestamp(5, lastServicesUpdate);
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
    updateTabTimestamp(4, lastModelsUpdate);

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

    const processes = await fetchProcessData();

    if (processes === null) {
        widgetsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load process status.');
        return;
    }

    lastProcessesUpdate = Date.now();
    updateTabTimestamp(1, lastProcessesUpdate);

    if (processes.length === 0) {
        widgetsContainer.innerHTML = createPlaceholderMessage('empty', 'No active processes.');
        return;
    }

    if (widgetsContainer.querySelector('.tab-placeholder') || widgetsContainer.querySelector('p')) {
        widgetsContainer.innerHTML = '';
    }

    function generateProcessWidgetHtml(proc) {
        const duration = Math.floor((Date.now() / 1000) - proc.start_time);
        const retryBadge = proc.retries > 0 ? `<span class="process-retry-badge">Retry ${proc.retries}</span>` : '';

        return `
                <div class="service-widget process-widget" data-channel-id="${proc.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${proc.channel_id}</h3>
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
}
