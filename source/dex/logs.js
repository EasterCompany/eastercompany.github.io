// Easter Company - Logs

// Standardized error/placeholder message component
function createPlaceholderMessage(type, message, actionText = null) {
    const iconMap = {
        'config': 'bx-cog',
        'error': 'bx-error-circle',
        'empty': 'bx-info-circle',
        'offline': 'bx-wifi-off'
    };

    const icon = iconMap[type] || 'bx-info-circle';
    const actionHtml = actionText ? `<p class="placeholder-action">${actionText}</p>` : '';

    return `
        <div class="tab-placeholder">
            <i class='bx ${icon} placeholder-icon'></i>
            <p class="placeholder-message">${message}</p>
            ${actionHtml}
        </div>
    `;
}

export function getLogsContent() {
    return `
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `;
}

export async function updateLogs() {
    const logsContainer = document.getElementById('logs-container');
    if (!logsContainer) return false;

    // Reset class state
    logsContainer.classList.remove('placeholder-active');

    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
        logsContainer.classList.add('placeholder-active');
        logsContainer.innerHTML = createPlaceholderMessage(
            'config',
            'No service map configured.',
            'Please upload your service-map.json in Settings to enable log monitoring.'
        );
        return false;
    }

    let serviceMapData;
    try {
        serviceMapData = JSON.parse(serviceMapString);
    } catch (e) {
        console.error("Error parsing service_map from localStorage:", e);
        logsContainer.classList.add('placeholder-active');
        logsContainer.innerHTML = createPlaceholderMessage(
            'error',
            'Invalid service map data.',
            'Please re-upload a valid service-map.json file in Settings.'
        );
        return false;
    }

    // Find the event service
    let eventService = null;
    if (serviceMapData && typeof serviceMapData.services === 'object') {
        const serviceGroups = ['cs', 'be', 'th'];
        for (const group of serviceGroups) {
            if (Array.isArray(serviceMapData.services[group])) {
                const found = serviceMapData.services[group].find(s => s.short_name === 'event' || s.id === 'event' || s.id === 'dex-event-service');
                if (found) {
                    eventService = found;
                    break;
                }
            }
        }
    }

    if (!eventService) {
        logsContainer.classList.add('placeholder-active');
        logsContainer.innerHTML = createPlaceholderMessage(
            'error',
            'Event service not found in service map.',
            'Please ensure dex-event-service is configured in your service-map.json.'
        );
        return false;
    }

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    const logsUrl = `http://${domain}:${eventService.port}/logs`;

    try {
        const response = await fetch(logsUrl);
        if (!response.ok) {
            logsContainer.classList.add('placeholder-active');
            logsContainer.innerHTML = createPlaceholderMessage(
                'offline',
                'Event service is offline.',
                'Please ensure the event service is running.'
            );
            return false;
        }

        const logsData = await response.json();
        if (!logsData || logsData.length === 0) {
            logsContainer.classList.add('placeholder-active');
            logsContainer.innerHTML = createPlaceholderMessage(
                'empty',
                'No logs found.',
                'Service logs will appear here when available.'
            );
            return false;
        }

        const hiddenServiceIDs = ["local-ollama-0", "local-cache-0", "cloud-cache-0", "cloud-cache-1"];

        const filteredLogsData = logsData.filter(logReport => !hiddenServiceIDs.includes(logReport.id));

        // Reverse the order of log reports so newest appear at the top
        filteredLogsData.forEach(logReport => {
            if (logReport.logs && Array.isArray(logReport.logs)) {
                logReport.logs.reverse();
            } else {
                logReport.logs = [];
            }
        });
        filteredLogsData.reverse();

        const logsHtml = filteredLogsData.map(logReport => {
            const logs = logReport.logs.join('\n');
            return `
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${logReport.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(logs)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${logs}</pre>
                </div>
            `;
        }).join('');

        logsContainer.innerHTML = logsHtml;

        // Add event listeners for copy buttons
        document.querySelectorAll('.copy-logs-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const logs = unescape(btn.dataset.logs);
                navigator.clipboard.writeText(logs).then(() => {
                    const icon = btn.querySelector('i');
                    icon.classList.remove('bx-copy');
                    icon.classList.add('bx-check');
                    setTimeout(() => {
                        icon.classList.remove('bx-check');
                        icon.classList.add('bx-copy');
                    }, 2000);
                });
            });
        });

        return true;

    } catch (error) {
        console.error('Error fetching logs:', error);
        logsContainer.classList.add('placeholder-active');
        logsContainer.innerHTML = createPlaceholderMessage(
            'offline',
            'Failed to load logs.',
            'The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker).'
        );
        return false;
    }
}
