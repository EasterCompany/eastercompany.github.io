import { smartFetch, createPlaceholderMessage, escapeHtml } from '../core/utils.ts';

declare global {
  interface Window {
    hasWebResizeListener?: boolean;
  }
}

export const getWebContent = () => {
  return `
        <style>
            .web-view-container {
                display: flex;
                flex: 1;
                overflow: hidden;
                position: relative;
            }
            .web-sidebar {
                width: 350px;
                background: rgba(255,255,255,0.02);
                border-left: 1px solid rgba(255,255,255,0.05);
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease;
            }
            #web-switch-btn {
                display: none;
            }

            @media (max-width: 880px) {
                .web-view-container {
                    flex-direction: column;
                }
                .web-sidebar {
                    width: 100% !important;
                    border-left: none;
                    position: absolute;
                    inset: 0;
                    z-index: 5;
                    background: #050507;
                }
                #web-switch-btn {
                    display: flex;
                }
            }
        </style>
        <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
            <div class="system-section-header" style="flex-shrink: 0;">
                <i class='bx bx-globe' style="color: #03dac6;"></i>
                <h2 id="web-view-title">Web View</h2>
                <div style="margin-left: auto; display: flex; gap: 10px;">
                    <button id="web-switch-btn" class="notif-action-btn" title="Switch View"><i class='bx bx-transfer-alt'></i></button>
                    <button id="web-sidebar-toggle" class="notif-action-btn" title="Toggle Analysis Sidebar"><i class='bx bx-dock-right'></i></button>
                    <button id="web-refresh-btn" class="notif-action-btn" title="Refresh Data"><i class='bx bx-refresh'></i></button>
                </div>
            </div>
            <div class="web-view-container">
                <!-- Main Iframe Area -->
                <div id="web-frame-container" style="flex: 1; height: 100%; background: #000; position: relative;">
                    <div id="web-frame-placeholder" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1; background: #050507; color: #444; text-align: center; padding: 20px;">
                        <i class='bx bx-world' style="font-size: 4rem; margin-bottom: 15px; opacity: 0.2;"></i>
                        <p style="max-width: 300px; font-size: 0.9em; line-height: 1.6;">Enter a URL or wait for Dexter to browse the web.</p>
                    </div>
                    <iframe id="web-main-frame" sandbox="allow-scripts allow-forms allow-same-origin" style="width: 100%; height: 100%; border: none; background: #fff; display: none;"></iframe>
                </div>

                <!-- Analysis Sidebar -->
                <div id="web-analysis-sidebar" class="web-sidebar">
                    <div style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
                        <h3 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #888;">Active Analysis</h3>
                    </div>
                    <div id="web-analysis-content" style="flex: 1; overflow-y: auto; padding: 15px;">
                        <div style="text-align: center; color: #444; padding-top: 50px;">
                            <i class='bx bx-analyse' style="font-size: 2rem; opacity: 0.3;"></i>
                            <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">No analysis data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export async function updateWebTab() {
  const sidebar = document.getElementById('web-analysis-sidebar');
  const toggleBtn = document.getElementById('web-sidebar-toggle');
  const switchBtn = document.getElementById('web-switch-btn');
  const refreshBtn = document.getElementById('web-refresh-btn');
  const title = document.getElementById('web-view-title');

  if (toggleBtn && !toggleBtn.dataset.listenerAttached) {
    toggleBtn.onclick = () => {
      if (sidebar) {
        const isHidden = sidebar.style.display === 'none';
        sidebar.style.display = isHidden ? 'flex' : 'none';
        toggleBtn.style.color = isHidden ? '#03dac6' : '';
      }
    };
    toggleBtn.dataset.listenerAttached = 'true';
  }

  if (switchBtn && !switchBtn.dataset.listenerAttached) {
    switchBtn.onclick = () => {
      if (sidebar) {
        const showingSidebar = sidebar.style.display !== 'none';
        sidebar.style.display = showingSidebar ? 'none' : 'flex';
        if (title) title.textContent = showingSidebar ? 'Web View' : 'Web Analysis';
      }
    };
    switchBtn.dataset.listenerAttached = 'true';
  }

  // Ensure default state for mobile vs desktop
  const handleResize = () => {
    const isMobile = window.innerWidth < 880;
    if (sidebar && toggleBtn && switchBtn && title) {
      if (isMobile) {
        toggleBtn.style.display = 'none';
        sidebar.style.display = 'none'; // Hide sidebar by default on mobile (show iframe)
        title.textContent = 'Web View';
      } else {
        toggleBtn.style.display = 'flex';
        sidebar.style.display = 'flex'; // Show sidebar by default on desktop
        title.textContent = 'Web View';
      }
    }
  };

  if (!window.hasWebResizeListener) {
    window.addEventListener('resize', handleResize);
    window.hasWebResizeListener = true;
  }
  handleResize(); // Trigger once on load

  if (refreshBtn && !refreshBtn.dataset.listenerAttached) {
    refreshBtn.onclick = async () => {
      refreshBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      await renderWebView();
      refreshBtn.innerHTML = "<i class='bx bx-check'></i>";
      setTimeout(() => {
        refreshBtn.innerHTML = "<i class='bx bx-refresh'></i>";
      }, 2000);
    };
    refreshBtn.dataset.listenerAttached = 'true';
  }

  await renderWebView();
}

async function renderWebView() {
  const analysisContainer = document.getElementById('web-analysis-content');
  const iframe = document.getElementById('web-main-frame') as HTMLIFrameElement;
  const placeholder = document.getElementById('web-frame-placeholder');

  if (!analysisContainer || !iframe || !placeholder) return;

  try {
    const response = await smartFetch('/web/view');
    if (!response.ok) throw new Error('Failed to fetch web view state');
    const state = await response.json();

    if (!state || !state.url) {
      placeholder.style.display = 'flex';
      iframe.style.display = 'none';
      analysisContainer.innerHTML = `
                <div style="text-align: center; color: #444; padding-top: 50px;">
                    <i class='bx bx-analyse' style="font-size: 2rem; opacity: 0.3;"></i>
                    <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">No active analysis</p>
                </div>`;
      return;
    }

    // Update Iframe
    if (iframe.src !== state.url) {
      placeholder.style.display = 'none';
      iframe.style.display = 'block';
      iframe.src = state.url;
    }

    // Update Sidebar Analysis
    let sidebarHtml = '';

    // 1. Metadata Section
    if (state.metadata) {
      sidebarHtml += `
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #03dac6;">
                        <i class='bx bx-info-circle'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Metadata</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 0.9em; line-height: 1.4;">${state.metadata.title || 'Untitled'}</h4>
                        <p style="margin: 0; color: #888; font-size: 0.75em; line-height: 1.5;">${state.metadata.description || 'No description extracted.'}</p>
                    </div>
                </div>
            `;
    }

    // 2. Scrape Section
    if (state.scrape) {
      sidebarHtml += `
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #bb86fc;">
                        <i class='bx bx-code-alt'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Scraped Content</span>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.03); max-height: 200px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.7em; color: #aaa; white-space: pre-wrap;">${escapeHtml(state.scrape.content) || 'No content.'}</div>
                </div>
            `;
    }

    // 3. Visual Section
    if (state.visual) {
      const screenshot =
        state.visual.screenshot || state.visual.screenshot_base64 || state.visual.base64;
      const screenshotHtml = screenshot
        ? `<img src="data:image/png;base64,${screenshot}" style="width: 100%; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); margin-top: 10px; cursor: pointer;" onclick="window.open('data:image/png;base64,${screenshot}')">`
        : '';

      sidebarHtml += `
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #ff9800;">
                        <i class='bx bx-camera'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Visual Analysis</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <p style="margin: 0; color: #fff; font-size: 0.8em; line-height: 1.5;">${state.visual.description || 'Analyzing page layout...'}</p>
                        ${screenshotHtml}
                    </div>
                </div>
            `;
    }

    if (!sidebarHtml) {
      sidebarHtml = `<div style="text-align: center; color: #444; padding-top: 50px;">
            <i class='bx bx-loader-alt spin' style="font-size: 2rem; opacity: 0.3;"></i>
            <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">Awaiting analysis data...</p>
        </div>`;
    }

    analysisContainer.innerHTML = `
        <div style="margin-bottom: 20px;">
            <a href="${state.url}" target="_blank" style="color: #bb86fc; font-size: 0.7em; text-decoration: none; word-break: break-all; display: block; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 4px;">
                <i class='bx bx-link-external'></i> ${state.url}
            </a>
        </div>
        ${sidebarHtml}
    `;
  } catch (e: any) {
    analysisContainer.innerHTML = createPlaceholderMessage('error', 'Web View failed.', e.message);
  }
}
