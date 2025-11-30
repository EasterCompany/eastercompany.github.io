// Easter Company - Logs
export function getLogsContent() {
    return `
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `;
}

export async function updateLogs() {
    const logsContainer = document.getElementById('logs-container');
    if (!logsContainer) return;

    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
        logsContainer.innerHTML = '<p class="logs-placeholder">No service map configured. Please upload your service-map.json in Settings.</p>';
        return;
    }

    let serviceMapData;
    try {
        serviceMapData = JSON.parse(serviceMapString);
    } catch (e) {
        console.error("Error parsing service_map from localStorage:", e);
        logsContainer.innerHTML = '<p class="logs-placeholder">Error: Invalid service map data.</p>';
        return;
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
        logsContainer.innerHTML = '<p class="logs-placeholder">Event service not found in service map.</p>';
        return;
    }

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    const logsUrl = `http://${domain}:${eventService.port}/logs`;

    try {
        const response = await fetch(logsUrl);
        if (!response.ok) {
            logsContainer.innerHTML = '<p class="logs-placeholder">Event service is offline.</p>';
            return;
        }

        const logsData = await response.json();
        if (!logsData || logsData.length === 0) {
            logsContainer.innerHTML = '<p class="logs-placeholder">No logs found.</p>';
            return;
        }

        const hiddenServiceIDs = ["local-ollama-0", "local-cache-0", "cloud-cache-0", "cloud-cache-1"];

        const filteredLogsData = logsData.filter(logReport => !hiddenServiceIDs.includes(logReport.id));

        // Reverse the order of log reports so newest appear at the top
        filteredLogsData.forEach(logReport => {
            logReport.logs.reverse();
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

    } catch (error) {
        console.error('Error fetching logs:', error);
        logsContainer.innerHTML = '<p class="logs-placeholder">Failed to load logs.</p>';
    }
}
