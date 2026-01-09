import { smartFetch, createPlaceholderMessage } from '../core/utils.js';

export const getWebContent = () => {
    return `
        <div class="system-section-header">
            <i class='bx bx-globe' style="color: #03dac6;"></i>
            <h2>Web History</h2>
            <button id="web-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
        </div>
        <div id="web-carousel-container" style="position: relative; min-height: 400px;">
            <div id="web-history-content"></div>
        </div>
    `;
};

export async function updateWebTab() {
    const container = document.getElementById('web-history-content');
    if (!container) return;

    // Attach refresh button listener
    const refreshBtn = document.getElementById('web-refresh-btn');
    if (refreshBtn && !refreshBtn.dataset.listenerAttached) {
        refreshBtn.onclick = async () => {
            refreshBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
            await renderWebHistory(container);
            refreshBtn.innerHTML = "<i class='bx bx-check'></i>";
            setTimeout(() => { refreshBtn.innerHTML = "<i class='bx bx-refresh'></i>"; }, 2000);
        };
        refreshBtn.dataset.listenerAttached = "true";
    }

    await renderWebHistory(container);
}

async function renderWebHistory(container) {
    try {
        const response = await smartFetch('/web/history');
        if (!response.ok) throw new Error("Failed to fetch history");
        const history = await response.json();

        if (!history || history.length === 0) {
            container.innerHTML = createPlaceholderMessage('empty', 'No web history found.');
            return;
        }

        // Build Carousel
        let html = `
            <div class="web-carousel" style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 20px; scroll-behavior: smooth;">
        `;

        history.forEach((item, index) => {
            const date = new Date(item.timestamp * 1000).toLocaleString();
            const screenshotHtml = item.screenshot ? 
                `<img src="data:image/png;base64,${item.screenshot}" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px;">` : 
                `<div style="width: 100%; height: 200px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 15px; border-radius: 8px;">No Screenshot</div>`;

            html += `
                <div class="web-card" style="flex: 0 0 100%; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span style="color: #03dac6; font-weight: bold;">#${index + 1}</span>
                        <span style="color: #888; font-size: 0.85em;">${date}</span>
                    </div>
                    <h3 style="margin-bottom: 10px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.title || 'No Title'}</h3>
                    <a href="${item.url}" target="_blank" style="color: #bb86fc; font-size: 0.85em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.url}</a>
                    
                    ${screenshotHtml}

                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; height: 150px; overflow-y: auto; font-family: monospace; font-size: 0.8em; color: #ccc; white-space: pre-wrap;">${item.content ? item.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'No content'}</div>
                </div>
            `;
        });

        html += `</div>`;
        
        // Add navigation hints
        html += `
            <div style="text-align: center; color: #666; font-size: 0.8em; margin-top: 5px;">
                <i class='bx bx-left-arrow-alt'></i> Swipe to navigate <i class='bx bx-right-arrow-alt'></i>
            </div>
        `;

        container.innerHTML = html;

    } catch (e) {
        container.innerHTML = createPlaceholderMessage('error', 'Failed to load web history.', e.message);
    }
}
