import { smartFetch, createPlaceholderMessage } from '../core/utils.ts';

export const getWebContent = () => {
  return `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <div class="system-section-header" style="flex-shrink: 0;">
                <i class='bx bx-globe' style="color: #03dac6;"></i>
                <h2>Web History</h2>
                <button id="web-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
            </div>
            <div id="web-carousel-container" style="flex: 1; position: relative; min-height: 0; overflow: hidden;">
                <div id="web-history-content" style="height: 100%;"></div>
            </div>
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
      setTimeout(() => {
        refreshBtn.innerHTML = "<i class='bx bx-refresh'></i>";
      }, 2000);
    };
    refreshBtn.dataset.listenerAttached = 'true';
  }

  await renderWebHistory(container);
}

async function renderWebHistory(container: HTMLElement) {
  try {
    const response = await smartFetch('/web/history');
    if (!response.ok) throw new Error('Failed to fetch history');
    const history = await response.json();

    if (!history || history.length === 0) {
      container.innerHTML = createPlaceholderMessage('empty', 'No web history found.');
      return;
    }

    // Build Carousel
    let html = `
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;

    history.forEach((item: any, index: number) => {
      const date = new Date(item.timestamp * 1000).toLocaleString([], {
        dateStyle: 'short',
        timeStyle: 'short',
      });
      const screenshotHtml = item.screenshot
        ? `<img src="data:image/png;base64,${item.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`
        : `<div style="width: 100%; height: 120px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">
            <i class='bx bx-image-alt' style="font-size: 2.5rem; margin-bottom: 8px; opacity: 0.3;"></i>
            <span style="font-size: 0.7em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">No Screenshot Available</span>
           </div>`;

      html += `
                <div class="web-card" style="flex: 0 0 100%; height: 100%; display: flex; flex-direction: column; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; flex-shrink: 0;">
                        <span style="color: #03dac6; font-weight: bold; font-family: monospace;">#${index + 1}</span>
                        <span style="color: #888; font-size: 0.8em; font-family: monospace;">${date}</span>
                    </div>
                    <h3 style="margin-bottom: 5px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; font-size: 1.1em;">${item.title || 'No Title'}</h3>
                    <a href="${item.url}" target="_blank" style="color: #bb86fc; font-size: 0.8em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; text-decoration: none;">${item.url}</a>
                    
                    ${screenshotHtml}

                    <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; color: #aaa; white-space: pre-wrap; border: 1px solid rgba(255,255,255,0.03);">${item.content ? item.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'No content available'}</div>
                </div>
            `;
    });

    html += `
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0 0; flex-shrink: 0;">
                    <button id="web-prev-btn" class="notif-action-btn" style="margin-right: auto;"><i class='bx bx-left-arrow-alt'></i> Prev</button>
                    <span style="color: #555; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px;">Swipe to navigate</span>
                    <button id="web-next-btn" class="notif-action-btn" style="margin-left: auto;">Next <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        `;

    container.innerHTML = html;

    const carousel = container.querySelector('.web-carousel') as HTMLElement;
    const prevBtn = container.querySelector('#web-prev-btn') as HTMLElement;
    const nextBtn = container.querySelector('#web-next-btn') as HTMLElement;

    if (prevBtn) {
      prevBtn.onclick = () => {
        carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
      };
    }
    if (nextBtn) {
      nextBtn.onclick = () => {
        carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
      };
    }
  } catch (e: any) {
    container.innerHTML = createPlaceholderMessage(
      'error',
      'Failed to load web history.',
      e.message
    );
  }
}
