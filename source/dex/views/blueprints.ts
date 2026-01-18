// Blueprints Tab Logic
import {
  createPlaceholderMessage,
  updateTabTimestamp,
  updateTabBadgeCount,
  smartFetch,
  escapeHtml,
  updatePendingBlueprintCount,
  setPendingBlueprints,
  isPublicMode,
} from '../core/utils.ts';

export const getBlueprintActions = () => `
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${isPublicMode() ? 'display: none;' : ''}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`;

export const getBlueprintsContent = () => `
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`;

export let lastBlueprintsUpdate: number | null = null;

// Track expanded state globally within the module
let activeExpandedIds = new Set();
let currentFilteredBlueprints: any[] = [];

export async function updateBlueprintsTab(forceReRender = false) {
  const blueprintsContainer = document.getElementById('blueprints-list');
  if (!blueprintsContainer) return;

  // Attach button listeners if not already attached
  attachBlueprintActionListeners();

  const url = `/events?ml=1000&format=json&event.type=system.blueprint.generated`;

  try {
    const response = await smartFetch(url);
    if (!response.ok) throw new Error('Service is offline or unreachable.');

    const data = await response.json();
    const allBlueprints = data.events || [];
    currentFilteredBlueprints = allBlueprints;

    lastBlueprintsUpdate = Date.now();
    updateTabTimestamp(2, lastBlueprintsUpdate); // Index 2 (Ideas) in mainWindow

    const createBlueprintElement = (event: any) => {
      let blueprintData = event.event;
      if (typeof blueprintData === 'string') {
        try {
          blueprintData = JSON.parse(blueprintData);
        } catch (e) {
          return null;
        }
      }

      const title = (blueprintData.title || 'Untitled Blueprint').trim();
      const summary = (
        blueprintData.summary ||
        blueprintData.body ||
        'No summary provided.'
      ).trim();
      const content = (blueprintData.content || '').trim();
      const category = (blueprintData.category || 'architecture').trim();
      const relatedServices = (
        blueprintData.related_services ||
        blueprintData.affected_services ||
        []
      ).map((s: string) => s.trim());
      const implementationPath = (blueprintData.implementation_path || []).map((s: string) =>
        s.trim()
      );
      const sourceEventIDs = blueprintData.source_event_ids || [];
      const isApproved = blueprintData.approved === true;

      const utcDate = new Date(event.timestamp * 1000);
      const timeStr = utcDate.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const dateStr = utcDate.toLocaleDateString(navigator.language, {
        month: 'short',
        day: 'numeric',
      });

      const isExpanded = activeExpandedIds.has(event.id);
      const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

      const tempDiv = document.createElement('div');
      // Blueprints always use Purple border, but Approved get a special class
      tempDiv.className = `event-item notification-item event-border-purple cursor-pointer ${isExpanded ? 'expanded' : ''} ${isApproved ? 'blueprint-approved' : ''}`;
      tempDiv.dataset.blueprintId = event.id;

      if (isApproved) {
        tempDiv.style.boxShadow = '0 0 20px rgba(3, 218, 198, 0.15)';
        tempDiv.style.background =
          'linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)';
      }

      const iconMap: Record<string, string> = {
        architecture: 'bx-vector',
        optimization: 'bx-trending-up',
        feature: 'bx-extension',
        security: 'bx-shield-lock',
      };
      const icon = isApproved ? 'bx-check-shield' : iconMap[category] || 'bx-paint';

      tempDiv.onclick = function (this: GlobalEventHandlers, _e: MouseEvent) {
        const el = this as HTMLElement;
        const isCurrentlyExpanded = el.classList.contains('expanded');
        if (isCurrentlyExpanded) {
          el.classList.remove('expanded');
          activeExpandedIds.delete(event.id);
          const details = el.querySelector('.event-details') as HTMLElement;
          if (details) details.style.display = 'none';
        } else {
          el.classList.add('expanded');
          activeExpandedIds.add(event.id);
          const details = el.querySelector('.event-details') as HTMLElement;
          if (details) details.style.display = 'block';
        }
      };

      let pathHtml = '';
      if (implementationPath.length > 0) {
        pathHtml = `
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${implementationPath.map((step: string) => `<li style="margin-bottom: 5px;">${escapeHtml(step)}</li>`).join('')}</ul></div>
                    </div>
                `;
      }

      let sourceHtml = '';
      if (sourceEventIDs.length > 0) {
        sourceHtml = `
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${sourceEventIDs
                              .map(
                                (id: string) => `
                                <a href="#" onclick="window.dexter.viewEvent('${id}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${id.substring(0, 8)}...
                                </a>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                `;
      }

      let relatedServicesHtml =
        relatedServices.length > 0
          ? `<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${relatedServices.join(', ')}</span></div>`
          : '<div></div>';

      const publicMode = isPublicMode();

      let actionButtonsHtml = !isApproved
        ? `
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${relatedServicesHtml}
                    <div style="display: ${publicMode ? 'none' : 'flex'}; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `
        : `
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${relatedServicesHtml}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s; display: ${publicMode ? 'none' : 'block'};"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `;

      tempDiv.innerHTML = `
                ${isApproved ? '<div class="blueprint-sparkle"></div>' : ''}
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-icon" style="${isApproved ? 'color: #03dac6;' : ''}"><i class='bx ${icon}'></i></div>
                <div class="event-content">
                    <div class="event-service">${category.toUpperCase()}</div>
                    <div class="event-message">${title}</div>
                    <div class="event-details" style="${detailsStyle}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${escapeHtml(summary)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${escapeHtml(content)}</div>
                        </div>
                        ${pathHtml}
                        ${sourceHtml}
                        ${actionButtonsHtml}
                    </div>
                </div>
            `;

      // Add button listeners
      const approveBtn = tempDiv.querySelector('.blueprint-approve-btn');
      if (approveBtn) {
        (approveBtn as HTMLElement).onclick = async (e) => {
          e.stopPropagation();
          approveBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Approving...";
          try {
            const res = await smartFetch(`/events/${event.id}`, {
              method: 'PATCH',
              body: JSON.stringify({ approved: true }),
            });
            if (res.ok) {
              updateBlueprintsTab(true);
            }
          } catch (err) {
            console.error('Failed to approve blueprint:', err);
          }
        };
      }

      const deleteBtn = tempDiv.querySelector('.blueprint-delete-btn');
      if (deleteBtn) {
        (deleteBtn as HTMLElement).onclick = async (e) => {
          e.stopPropagation();
          const isActuallyDecline = !isApproved;
          deleteBtn.innerHTML = isActuallyDecline
            ? "<i class='bx bx-loader-alt spin'></i> Declining..."
            : "<i class='bx bx-loader-alt spin'></i> Deleting...";
          try {
            const res = await smartFetch(`/events/${event.id}`, {
              method: 'DELETE',
            });
            if (res.ok) {
              updateBlueprintsTab(true);
            }
          } catch (err) {
            console.error('Failed to delete blueprint:', err);
          }
        };
      }

      // Prevent close on detail interaction
      const detailsContentEl = tempDiv.querySelector('.event-details');
      if (detailsContentEl) {
        detailsContentEl.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }

      const closeBtn = tempDiv.querySelector('.close-details-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          tempDiv.classList.remove('expanded');
          const details = tempDiv.querySelector('.event-details') as HTMLElement;
          if (details) details.style.display = 'none';
          activeExpandedIds.delete(event.id);
        });
      }

      return tempDiv;
    };

    const createPlaceholderElement = (item: any) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = createPlaceholderMessage('empty', item.message, item.action, item.id);
      const el = tempDiv.firstElementChild as HTMLElement;
      el.dataset.blueprintId = item.id;
      return el;
    };

    const displayList: any[] = [];
    if (allBlueprints.length === 0) {
      displayList.push({
        id: 'placeholder-empty',
        type: 'placeholder',
        message: 'No architectural blueprints generated yet.',
        action: 'The Imaginator will synthesize these during system idle periods.',
      });
    } else {
      allBlueprints.forEach((b: any) => displayList.push({ ...b, type: 'blueprint' }));
    }

    if (forceReRender) {
      blueprintsContainer.innerHTML = '';
    }

    const currentChildren = Array.from(blueprintsContainer.children) as HTMLElement[];
    const currentMap = new Map(currentChildren.map((el) => [el.dataset.blueprintId, el]));
    const newIds = new Set(displayList.map((e: any) => e.id));

    currentChildren.forEach((child) => {
      const id = child.dataset.blueprintId;
      if (!id || !newIds.has(id)) {
        child.remove();
      }
    });

    let previousElement: HTMLElement | null = null;
    displayList.forEach((item: any, index: number) => {
      let el = currentMap.get(item.id) as HTMLElement | null;
      if (!el || forceReRender) {
        if (el) el.remove();
        if (item.type === 'placeholder') {
          el = createPlaceholderElement(item);
        } else {
          el = createBlueprintElement(item);
        }
        if (!el) return;
      }
      if (index === 0) {
        if (blueprintsContainer.firstElementChild !== el) blueprintsContainer.prepend(el);
      } else {
        if (previousElement && previousElement.nextElementSibling !== el) previousElement.after(el);
      }
      previousElement = el;
    });

    updateTabBadgeCount(2, allBlueprints.length);
    updatePendingBlueprintCount();
  } catch (error) {
    console.error('Error fetching blueprints:', error);
    if (blueprintsContainer.children.length === 0) {
      blueprintsContainer.innerHTML = createPlaceholderMessage(
        'offline',
        'Failed to load blueprints.',
        'The event service may be offline.'
      );
    }
  }
}

export async function checkBackgroundBlueprints() {
  const url = `/events?ml=1000&format=json&event.type=system.blueprint.generated`;
  try {
    const response = await smartFetch(url);
    if (!response.ok) return;
    const data = await response.json();
    const allBlueprints = data.events || [];

    let pendingCount = 0;
    allBlueprints.forEach((event: any) => {
      let evtData = event.event;
      if (typeof evtData === 'string') {
        try {
          evtData = JSON.parse(evtData);
        } catch (e) {
          evtData = {};
        }
      }
      if (evtData.approved !== true) {
        pendingCount++;
      }
    });

    setPendingBlueprints(pendingCount);
  } catch (e) {
    // Silent fail in background
  }
}

function attachBlueprintActionListeners() {
  const expandAllBtn = document.getElementById('blueprints-expand-all');
  const closeAllBtn = document.getElementById('blueprints-close-all');
  const clearBtn = document.getElementById('blueprints-clear');

  if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
    expandAllBtn.onclick = () => {
      currentFilteredBlueprints.forEach((b) => activeExpandedIds.add(b.id));
      updateBlueprintsTab(true);
    };
    expandAllBtn.dataset.listenerAttached = 'true';
  }

  if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
    closeAllBtn.onclick = () => {
      activeExpandedIds.clear();
      updateBlueprintsTab(true);
    };
    closeAllBtn.dataset.listenerAttached = 'true';
  }

  if (clearBtn && !clearBtn.dataset.listenerAttached) {
    clearBtn.onclick = async () => {
      if (!confirm('Are you sure you want to delete all UNAPPROVED blueprints?')) return;

      clearBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Clearing...";
      try {
        // We delete all blueprints that are not approved
        // Note: The backend DELETE handler might need support for filtering by nested fields if we want to be precise,
        // but for now we'll delete the event type.
        await smartFetch('/events?type=system.blueprint.generated', { method: 'DELETE' });
        activeExpandedIds.clear();
        updateBlueprintsTab(true);
      } catch (e) {
        console.error('Failed to clear blueprints:', e);
      } finally {
        clearBtn.innerHTML = "<i class='bx bx-trash'></i> Clear";
      }
    };
    clearBtn.dataset.listenerAttached = 'true';
  }
}
