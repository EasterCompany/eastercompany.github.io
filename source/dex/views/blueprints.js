// Blueprints Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, escapeHtml, smartFetch } from '../core/utils.js';

export const getBlueprintActions = () => `
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`;

export const getBlueprintsContent = () => `
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`;

export let lastBlueprintsUpdate = null;

// Track expanded state globally within the module
let activeExpandedIds = new Set();
let currentFilteredBlueprints = [];

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

    if (allBlueprints.length === 0) {
      blueprintsContainer.innerHTML = createPlaceholderMessage('empty', 'No architectural blueprints generated yet.', 'The Guardian will generate these when idle.');
      updateTabBadgeCount(2, 0);
      return;
    }

        if (forceReRender) {
            blueprintsContainer.innerHTML = '';
        }

        const createBlueprintElement = (event) => {
            let blueprintData = event.event;
            if (typeof blueprintData === 'string') {
                try {
                    blueprintData = JSON.parse(blueprintData);
                } catch (e) { return null; }
            }

            const title = blueprintData.title || 'Untitled Blueprint';
            const summary = blueprintData.summary || blueprintData.body || 'No summary provided.';
            const content = blueprintData.content || '';
            const category = blueprintData.category || 'architecture';
            const affectedServices = blueprintData.affected_services || [];
            const implementationPath = blueprintData.implementation_path || [];

            const utcDate = new Date(event.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            const isExpanded = activeExpandedIds.has(event.id);
            const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

            const tempDiv = document.createElement('div');
            // Blueprints always use Purple border
            tempDiv.className = `event-item notification-item event-border-purple cursor-pointer ${isExpanded ? 'expanded' : ''}`;
            tempDiv.dataset.blueprintId = event.id;

            const iconMap = {
                'architecture': 'bx-vector',
                'optimization': 'bx-trending-up',
                'feature': 'bx-extension',
                'security': 'bx-shield-lock'
            };
            const icon = iconMap[category] || 'bx-paint';

            tempDiv.onclick = function(e) {
                const isCurrentlyExpanded = this.classList.contains('expanded');
                if (isCurrentlyExpanded) {
                    this.classList.remove('expanded');
                    activeExpandedIds.delete(event.id);
                    const details = this.querySelector('.event-details');
                    if (details) details.style.display = 'none';
                } else {
                    this.classList.add('expanded');
                    activeExpandedIds.add(event.id);
                    const details = this.querySelector('.event-details');
                    if (details) details.style.display = 'block';
                }
            };

            let affectedHtml = affectedServices.length > 0
                ? `<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${affectedServices.join(', ')}</span></div>`
                : '';

            let pathHtml = '';
            if (implementationPath.length > 0) {
                pathHtml = `
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${implementationPath.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-icon"><i class='bx ${icon}'></i></div>
                <div class="event-content">
                    <div class="event-service">${category.toUpperCase()}</div>
                    <div class="event-message">${title}</div>
                    <div class="event-details" style="${detailsStyle}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${escapeHtml(summary)}
                        </div>
                        ${affectedHtml}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${escapeHtml(content)}</div>
                        </div>
                        ${pathHtml}
                    </div>
                </div>
            `;

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
                    const details = tempDiv.querySelector('.event-details');
                    if (details) details.style.display = 'none';
                    activeExpandedIds.delete(event.id);
                });
            }

            return tempDiv;
        };

        const currentChildren = Array.from(blueprintsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.blueprintId, el]));
        const newIds = new Set(allBlueprints.map(e => e.id));

        currentChildren.forEach(child => {
            const id = child.dataset.blueprintId;
            if (!id || !newIds.has(id)) {
                child.remove();
            }
        });

        let previousElement = null;
        allBlueprints.forEach((event, index) => {
            let el = currentMap.get(event.id);
            if (!el || forceReRender) {
                if (el) el.remove();
                el = createBlueprintElement(event);
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

    } catch (error) {
        console.error('Error fetching blueprints:', error);
        if (blueprintsContainer.children.length === 0) {
            blueprintsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load blueprints.', 'The event service may be offline.');
        }
    }
}

function attachBlueprintActionListeners() {
    const expandAllBtn = document.getElementById('blueprints-expand-all');
    const closeAllBtn = document.getElementById('blueprints-close-all');

    if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
        expandAllBtn.onclick = () => {
            currentFilteredBlueprints.forEach(b => activeExpandedIds.add(b.id));
            updateBlueprintsTab(true);
        };
        expandAllBtn.dataset.listenerAttached = "true";
    }

    if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
        closeAllBtn.onclick = () => {
            activeExpandedIds.clear();
            updateBlueprintsTab(true);
        };
        closeAllBtn.dataset.listenerAttached = "true";
    }
}
