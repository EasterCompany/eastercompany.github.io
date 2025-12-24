// Blueprints Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, escapeHtml } from './utils.js';

export const getBlueprintsContent = () => `<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>`;

export let lastBlueprintsUpdate = null;

export async function updateBlueprintsTab() {
    const blueprintsContainer = document.getElementById('blueprints-list');
    if (!blueprintsContainer) return;
    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
      blueprintsContainer.innerHTML = createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
      return;
    }
    let eventService = null;
    try {
      const serviceMapData = JSON.parse(serviceMapString);
      eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
    } catch (e) { blueprintsContainer.innerHTML = createPlaceholderMessage('error', 'Invalid service map data.'); return; }
    if (!eventService) { blueprintsContainer.innerHTML = createPlaceholderMessage('error', 'Event service not found in service map.'); return; }

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    const blueprintsUrl = `http://${domain}:${eventService.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;

    try {
        const response = await fetch(blueprintsUrl);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const allBlueprints = data.events || [];

        if (allBlueprints.length === 0) {
            blueprintsContainer.innerHTML = createPlaceholderMessage('empty', 'No architectural blueprints generated yet.', 'The Analyst Worker will generate these when idle.');
            updateTabBadgeCount(1, 0);
            return;
        }

        const createBlueprintElement = (event) => {
            let blueprintData = event.event;
            if (typeof blueprintData === 'string') {
                try {
                    blueprintData = JSON.parse(blueprintData);
                } catch (e) { return null; }
            }

            const title = blueprintData.title || 'Untitled Blueprint';
            const body = blueprintData.body || 'No details provided.';
            const category = blueprintData.category || 'architecture';
            
            const utcDate = new Date(event.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            const isExpanded = expandedBlueprintIds.has(event.id);
            const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

            const tempDiv = document.createElement('div');
            // Blueprints always use Purple border
            tempDiv.className = `event-item notification-item event-border-purple cursor-pointer ${isExpanded ? 'expanded' : ''}`;
            tempDiv.dataset.blueprintId = event.id;
            
            tempDiv.onclick = function(e) {
                this.classList.toggle('expanded');
                const details = this.querySelector('.event-details');
                if (details) {
                    const becomingVisible = details.style.display === 'none';
                    details.style.display = becomingVisible ? 'block' : 'none';
                    if (becomingVisible) expandedBlueprintIds.add(event.id);
                    else expandedBlueprintIds.delete(event.id);
                }
            };

            tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${category.toUpperCase()}</div>
                    <div class="event-message">${title}</div>
                    <div class="event-details" style="${detailsStyle}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left;">${escapeHtml(body)}</p>
                        </div>
                    </div>
                </div>
            `;

            const closeBtn = tempDiv.querySelector('.close-details-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    tempDiv.classList.remove('expanded');
                    const details = tempDiv.querySelector('.event-details');
                    if (details) details.style.display = 'none';
                    expandedBlueprintIds.delete(event.id);
                });
            }

            return tempDiv;
        };

        const expandedBlueprintIds = new Set(
            Array.from(blueprintsContainer.querySelectorAll('.event-item.expanded'))
              .map(el => el.dataset.blueprintId)
              .filter(id => id)
        );

        const currentChildren = Array.from(blueprintsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.blueprintId, el]));
        const newIds = new Set(allBlueprints.map(e => e.id));

        currentChildren.forEach(child => {
            if (child.dataset.blueprintId && !newIds.has(child.dataset.blueprintId)) {
                child.remove();
            }
        });

        let previousElement = null;
        allBlueprints.forEach((event, index) => {
            let el = currentMap.get(event.id);
            if (!el) {
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

        lastBlueprintsUpdate = Date.now();
        updateTabTimestamp(1, lastBlueprintsUpdate); 
        updateTabBadgeCount(1, allBlueprints.length);

    } catch (error) {
      console.error('Error fetching blueprints:', error);
      if (blueprintsContainer.children.length === 0) {
        blueprintsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load blueprints.', 'The event service may be offline or unreachable.');
      }
    }
}