// Easter Company - Logs
import { smartFetch, ansiToHtml } from '../core/utils.js';

export function getLogsContent() {
    return `
        <div id="logs-container" class="logs-container">
            <p style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">Loading logs...</p>
        </div>
    `;
}

export let lastLogsUpdate = null;

export async function updateLogs() {
    const logsContainer = document.getElementById('logs-container');
    if (!logsContainer) return false;

    // Reset class state
    logsContainer.classList.remove('placeholder-active');

    try {
        const response = await smartFetch('/logs');
        if (!response.ok) throw new Error('Logs offline');

        const logsData = await response.json();
        if (!logsData || logsData.length === 0) {
            logsContainer.innerHTML = '<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>';
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
            const rawLogs = logReport.logs.join('\n');
            
            // Ensure exactly 25 lines
            let lines = [...logReport.logs];
            if (lines.length < 25) {
                const paddingNeeded = 25 - lines.length;
                for (let i = 0; i < paddingNeeded; i++) {
                    lines.push(''); // Add empty lines
                }
            } else if (lines.length > 25) {
                lines = lines.slice(-25); // Take last 25 if somehow more
            }

            const styledLogs = lines.map(line => ansiToHtml(line)).join('\n');
            
            return `
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${logReport.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(rawLogs)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${logReport.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${styledLogs}</pre>
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

        // Add event listeners for clear buttons
        document.querySelectorAll('.clear-logs-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const serviceId = btn.dataset.serviceId;
                if (!confirm(`Are you sure you want to clear logs for ${serviceId}?`)) return;

                try {
                    const res = await smartFetch(`/logs?service_id=${serviceId}`, { method: 'DELETE' });
                    if (res.ok) {
                        updateLogs(); // Refresh
                    }
                } catch (e) {
                    console.error("Error clearing logs:", e);
                }
            });
        });

        lastLogsUpdate = Date.now();
        return true;

    } catch (error) {
        console.error('Error fetching logs:', error);
        logsContainer.innerHTML = '<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>';
        return false;
    }
}