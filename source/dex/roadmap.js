// Roadmap Tab Logic
import { createPlaceholderMessage, escapeHtml } from './utils.js';

export const getRoadmapContent = () => `
    <div class="notifications-actions">
        <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
        <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
        <div style="display: flex; gap: 10px; justify-content: center;">
            <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
            <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
        </div>
    </div>
    <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading roadmap...</p>
    </div>
`;

let activeExpandedIds = new Set();
let currentItems = [];
let editingItemId = null;

export async function updateRoadmapTab(forceReRender = false) {
    const roadmapContainer = document.getElementById('roadmap-list');
    if (!roadmapContainer) return;

    attachRoadmapListeners();

    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) return;
    
    let eventService = null;
    try {
      const serviceMapData = JSON.parse(serviceMapString);
      eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
    } catch (e) { return; }
    if (!eventService) return;

    const domain = eventService.domain === '0.0.0.0' ? '127.0.0.1' : eventService.domain;
    const roadmapUrl = `http://${domain}:${eventService.port}/roadmap`;

    try {
        const response = await fetch(roadmapUrl);
        if (!response.ok) throw new Error('Offline');

        const items = await response.json();
        currentItems = items;

        if (items.length === 0) {
            roadmapContainer.innerHTML = createPlaceholderMessage('empty', 'Your roadmap is empty.', 'Click "New Idea" to start planning Dexter\'s future.');
            return;
        }

        if (forceReRender) roadmapContainer.innerHTML = '';

                const createItemElement = (item) => {

                    const isExpanded = activeExpandedIds.has(item.id);

                    const isDraft = item.state === 'draft';

                    const isPublished = item.state === 'published';

                    const isConsumed = item.state === 'consumed';

        

                    let borderClass = 'event-border-grey'; // Draft

                    if (isPublished) borderClass = 'event-border-blue';

                    if (isConsumed) borderClass = 'event-border-purple';

        

                    const utcDate = new Date(item.created_at * 1000);

                    const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        

                    const tempDiv = document.createElement('div');

                    tempDiv.className = `event-item notification-item ${borderClass} cursor-pointer ${isExpanded ? 'expanded' : ''}`;

                    tempDiv.dataset.itemId = item.id;

        

                    tempDiv.onclick = (e) => {

                        if (e.target.closest('button')) return;

                        const wasExpanded = tempDiv.classList.contains('expanded');

                        if (wasExpanded) {

                            tempDiv.classList.remove('expanded');

                            tempDiv.querySelector('.event-details').style.display = 'none';

                            activeExpandedIds.delete(item.id);

                        } else {

                            tempDiv.classList.add('expanded');

                            tempDiv.querySelector('.event-details').style.display = 'block';

                            activeExpandedIds.add(item.id);

                        }

                    };

        

                    let statusBadge = `<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${item.state.toUpperCase()}]</span>`;

                    

                    tempDiv.innerHTML = `

                        <div class="event-time">

                            <span class="event-time-main">${dateStr.split(',')[1]}</span>

                            <span class="event-date">${dateStr.split(',')[0]}</span>

                        </div>

                        <div class="event-content">

                            <div class="event-service">ROADMAP ${statusBadge}</div>

                            <div class="event-message" style="white-space: pre-wrap;">${escapeHtml(item.content)}</div>

                            <div class="event-details" style="${isExpanded ? 'display: block;' : 'display: none;'}">

                                <div class="event-details-header">

                                    <h4>Item Controls</h4>

                                    <i class="bx bx-x close-details-btn"></i>

                                </div>

                                <div style="display: flex; gap: 10px; flex-wrap: wrap;">

                                    ${isConsumed ? '' : `<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}

                                    <button class="notif-action-btn publish-toggle-btn">

                                        <i class='bx ${isPublished ? 'bx-pause' : 'bx-rocket'}'></i> ${isPublished ? 'Un-publish' : 'Publish'}

                                    </button>

                                    <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>

                                </div>

                                ${isConsumed ? `<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(item.consumed_at * 1000).toLocaleString()}</div>` : ''}

                            </div>

                        </div>

                    `;

        

                    // Button listeners

                    tempDiv.querySelector('.edit-btn')?.addEventListener('click', () => startEditing(item));

                    tempDiv.querySelector('.publish-toggle-btn')?.addEventListener('click', () => togglePublish(item));

                    tempDiv.querySelector('.delete-btn')?.addEventListener('click', () => deleteItem(item.id));

                    tempDiv.querySelector('.close-details-btn')?.addEventListener('click', (e) => {

                        e.stopPropagation();

                        tempDiv.classList.remove('expanded');

                        tempDiv.querySelector('.event-details').style.display = 'none';

                        activeExpandedIds.delete(item.id);

                    });

        

                    return tempDiv;

                };

        

                const currentChildren = Array.from(roadmapContainer.children);

                const currentMap = new Map(currentChildren.map(el => [el.dataset.itemId, el]));

                const newIds = new Set(items.map(e => e.id));

        

                // Remove old items OR placeholders

                currentChildren.forEach(child => {

                    const id = child.dataset.itemId;

                    if (!id || !newIds.has(id)) {

                        child.remove();

                    }

                });

        let previousElement = null;
        items.forEach((item, index) => {
            let el = currentMap.get(item.id);
            if (!el || forceReRender) {
                if (el) el.remove();
                el = createItemElement(item);
                if (!el) return;
            }
            if (index === 0) {
                if (roadmapContainer.firstElementChild !== el) roadmapContainer.prepend(el);
            } else {
                if (previousElement && previousElement.nextElementSibling !== el) previousElement.after(el);
            }
            previousElement = el;
        });

    } catch (e) {
        roadmapContainer.innerHTML = createPlaceholderMessage('error', 'Failed to load roadmap.');
    }
}

function attachRoadmapListeners() {
    const newBtn = document.getElementById('roadmap-new');
    const saveBtn = document.getElementById('roadmap-save');
    const cancelBtn = document.getElementById('roadmap-cancel');
    const expandAllBtn = document.getElementById('roadmap-expand-all');
    const closeAllBtn = document.getElementById('roadmap-close-all');

    if (newBtn && !newBtn.dataset.listenerAttached) {
        newBtn.onclick = () => {
            editingItemId = null;
            document.getElementById('roadmap-editor-input').value = '';
            document.getElementById('roadmap-editor-container').style.display = 'block';
        };
        newBtn.dataset.listenerAttached = "true";
    }

    if (cancelBtn && !cancelBtn.dataset.listenerAttached) {
        cancelBtn.onclick = () => {
            document.getElementById('roadmap-editor-container').style.display = 'none';
            editingItemId = null;
        };
        cancelBtn.dataset.listenerAttached = "true";
    }

    if (saveBtn && !saveBtn.dataset.listenerAttached) {
        saveBtn.onclick = async () => {
            const content = document.getElementById('roadmap-editor-input').value;
            if (!content.trim()) return;

            const serviceMapData = JSON.parse(localStorage.getItem('service_map'));
            const eventService = serviceMapData.services.cs.find(s => s.id === 'dex-event-service');
            const domain = eventService.domain === '0.0.0.0' ? '127.0.0.1' : eventService.domain;
            
            const url = editingItemId 
                ? `http://${domain}:${eventService.port}/roadmap/${editingItemId}`
                : `http://${domain}:${eventService.port}/roadmap`;
            
            const method = editingItemId ? 'PATCH' : 'POST';

            try {
                await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content })
                });
                document.getElementById('roadmap-editor-container').style.display = 'none';
                updateRoadmapTab(true);
            } catch (e) { console.error(e); }
        };
        saveBtn.dataset.listenerAttached = "true";
    }

    if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
        expandAllBtn.onclick = () => {
            currentItems.forEach(item => activeExpandedIds.add(item.id));
            updateRoadmapTab(true);
        };
        expandAllBtn.dataset.listenerAttached = "true";
    }

    if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
        closeAllBtn.onclick = () => {
            activeExpandedIds.clear();
            updateRoadmapTab(true);
        };
        closeAllBtn.dataset.listenerAttached = "true";
    }
}

function startEditing(item) {
    editingItemId = item.id;
    document.getElementById('roadmap-editor-input').value = item.content;
    document.getElementById('roadmap-editor-container').style.display = 'block';
    document.getElementById('roadmap-editor-container').scrollIntoView({ behavior: 'smooth' });
}

async function togglePublish(item) {
    const newState = item.state === 'published' ? 'draft' : 'published';
    const serviceMapData = JSON.parse(localStorage.getItem('service_map'));
    const eventService = serviceMapData.services.cs.find(s => s.id === 'dex-event-service');
    const domain = eventService.domain === '0.0.0.0' ? '127.0.0.1' : eventService.domain;

    try {
        await fetch(`http://${domain}:${eventService.port}/roadmap/${item.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: newState })
        });
        updateRoadmapTab(true);
    } catch (e) { console.error(e); }
}

async function deleteItem(id) {
    if (!confirm("Delete this roadmap item?")) return;
    const serviceMapData = JSON.parse(localStorage.getItem('service_map'));
    const eventService = serviceMapData.services.cs.find(s => s.id === 'dex-event-service');
    const domain = eventService.domain === '0.0.0.0' ? '127.0.0.1' : eventService.domain;

    try {
        await fetch(`http://${domain}:${eventService.port}/roadmap/${id}`, { method: 'DELETE' });
        activeExpandedIds.delete(id);
        updateRoadmapTab(true);
    } catch (e) { console.error(e); }
}
