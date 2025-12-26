// Events Timeline Logic
import { createPlaceholderMessage, escapeHtml, smartFetch, getGlassyLoader } from './utils.js';
import { formatEventSummary } from './templates.js';
import { updateContactsTab } from './contacts.js';

export const getEventsContent = () => `
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    
    <div id="timeline-view-container">
        <div id="event-filters" class="event-filters">
            <button class="notif-action-btn filter-btn active" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn" data-filter="moderation">Moderation</button>
        </div>
        <div id="events-timeline" class="events-timeline">
            ${getGlassyLoader()}
        </div>
    </div>
`;

export let lastEventsUpdate = null;

// Track expanded state globally within the module
let activeExpandedIds = new Set();
let currentFilteredEvents = [];
let currentFilter = 'all';

const CATEGORIES = {
    messaging: [
        'message_received', 'messaging.user.sent_message', 'messaging.bot.sent_message',
        'messaging.user.transcribed', 'voice_transcribed', 'bot_response',
        'messaging.user.joined_voice', 'messaging.user.left_voice',
        'messaging.bot.joined_voice', 'messaging.bot.voice_response',
        'messaging.user.speaking.started', 'messaging.user.speaking.stopped',
        'messaging.webhook.message'
    ],
    system: [
        'system.cli.command', 'system.cli.status', 'system.status.change',
        'metric_recorded', 'log_entry', 'error_occurred', 'webhook.processed',
        'messaging.bot.status_update', 'messaging.user.joined_server',
        'system.test.completed', 'system.build.completed',
        'system.roadmap.created', 'system.roadmap.updated',
        'system.process.registered', 'system.process.unregistered'
    ],
    cognitive: [
        'engagement.decision', 'system.analysis.audit', 'system.blueprint.generated',
        'analysis.link.completed', 'analysis.visual.completed'
    ],
    moderation: [
        'moderation.explicit_content.deleted'
    ]
};

const EVENT_ICONS = {
    'message_received': 'bx-message-detail',
    'messaging.user.sent_message': 'bx-message-rounded-dots',
    'messaging.bot.sent_message': 'bx-bot',
    'messaging.user.transcribed': 'bx-microphone',
    'voice_transcribed': 'bx-microphone',
    'messaging.user.joined_voice': 'bx-phone-incoming',
    'messaging.user.left_voice': 'bx-phone-outgoing',
    'messaging.webhook.message': 'bx-cloud-lightning',
    'system.cli.command': 'bx-terminal',
    'system.cli.status': 'bx-info-circle',
    'system.test.completed': 'bx-check-shield',
    'system.build.completed': 'bx-package',
    'system.roadmap.created': 'bx-map-pin',
    'system.roadmap.updated': 'bx-map-alt',
    'system.process.registered': 'bx-play-circle',
    'system.process.unregistered': 'bx-stop-circle',
    'error_occurred': 'bx-error-alt',
    'engagement.decision': 'bx-brain',
    'system.analysis.audit': 'bx-search-alt',
    'system.blueprint.generated': 'bx-paint',
    'analysis.link.completed': 'bx-link',
    'analysis.visual.completed': 'bx-image',
    'moderation.explicit_content.deleted': 'bx-shield-x',
    'system.status.change': 'bx-refresh',
    'metric_recorded': 'bx-line-chart'
};

function getEventCategory(type) {
    for (const [cat, types] of Object.entries(CATEGORIES)) {
        if (types.includes(type)) return cat;
    }
    return 'system';
}

function getEventIcon(type) {
    return EVENT_ICONS[type] || 'bx-square-rounded';
}

export async function updateEventsTimeline(forceReRender = false) {
    const eventsContainer = document.getElementById('events-timeline');
    if (!eventsContainer) return;

    attachEventActionListeners();

    const fetchCount = currentFilter === 'all' ? 100 : 250;
    const url = `/events?ml=${fetchCount}&format=json&exclude_types=system.notification.generated`;

    try {
        const response = await smartFetch(url);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const allEvents = data.events || [];

        const hasJoinEvent = allEvents.some(e => {
            let eventData = e.event;
            if (typeof eventData === 'string') {
                try { eventData = JSON.parse(eventData); } catch (err) { return false; }
            }
            return eventData.type === 'messaging.user.joined_server';
        });
        if (hasJoinEvent) {
            updateContactsTab();
        }
        
        let filteredEvents = allEvents;
        if (currentFilter !== 'all') {
            filteredEvents = allEvents.filter(e => {
                let eventData = e.event;
                if (typeof eventData === 'string') {
                    try { eventData = JSON.parse(eventData); } catch (err) { return false; }
                }
                return getEventCategory(eventData.type) === currentFilter;
            });
        }
        
        currentFilteredEvents = filteredEvents.slice(0, 50);
        lastEventsUpdate = Date.now();

        if (currentFilteredEvents.length === 0) {
            eventsContainer.innerHTML = createPlaceholderMessage('empty', 'No events found for this filter.');
            return;
        }

        if (forceReRender) {
            eventsContainer.innerHTML = '';
        }

        const createEventElement = (event) => {
            let eventData = event.event;
            if (typeof eventData === 'string') {
                try { eventData = JSON.parse(eventData); } catch (e) { return null; }
            }

            const type = eventData.type;
            const category = getEventCategory(type);
            const icon = getEventIcon(type);

            const isExpandable = type === 'engagement.decision' || type === 'messaging.bot.sent_message' || type === 'messaging.user.sent_message' || type === 'moderation.explicit_content.deleted' || type === 'analysis.link.completed' || type === 'analysis.visual.completed' || type === 'system.cli.command' || type === 'system.analysis.audit' || type === 'system.test.completed' || type === 'error_occurred' || type === 'system.cli.status' || type.startsWith('system.roadmap') || type.startsWith('system.process');
            let borderClass = 'event-border-grey';
            if (isExpandable) {
                if (type === 'moderation.explicit_content.deleted' || type === 'error_occurred') {
                    borderClass = 'event-border-red';
                } else if (type === 'analysis.link.completed' || type === 'analysis.visual.completed' || type === 'system.analysis.audit') {
                    borderClass = 'event-border-purple';
                } else if (type === 'system.cli.command' || type === 'system.cli.status') {
                    borderClass = 'event-border-orange';
                } else if (type === 'system.test.completed') {
                    const passed = (eventData.test?.status === 'OK' && eventData.lint?.status === 'OK' && eventData.format?.status === 'OK');
                    borderClass = passed ? 'event-border-blue' : 'event-border-red';
                } else {
                    borderClass = 'event-border-blue';
                }
            }
            const isExpanded = activeExpandedIds.has(event.id);
            const utcDate = new Date(event.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });
            const summary = formatEventSummary(type, eventData);
            const userLevel = eventData.user_level ? `<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${eventData.user_level})</span>` : '';

            let detailsHtml = '';
            if (isExpandable) {
                let detailsContent = '';
                if (type === 'engagement.decision') detailsContent = `<div class="event-detail-row"><span class="detail-label">Model:</span><span class="detail-value">${eventData.engagement_model || 'N/A'}</span></div><div class="event-detail-block"><span class="detail-label">Raw Output:</span><pre class="detail-pre">${eventData.engagement_raw || 'None'}</pre></div>`;
                else if (type === 'messaging.bot.sent_message') detailsContent = `<div class="event-detail-row"><span class="detail-label">Model:</span><span class="detail-value">${eventData.response_model || 'N/A'}</span></div><div class="event-detail-block"><span class="detail-label">Raw Output:</span><pre class="detail-pre">${eventData.response_raw || 'None'}</pre></div>`;
                else if (type === 'moderation.explicit_content.deleted') detailsContent = `<div class="event-detail-row"><span class="detail-label">Reason:</span><span class="detail-value">${eventData.reason || 'N/A'}</span></div>`;
                else if (type === 'analysis.link.completed') detailsContent = `<div class="event-detail-row"><span class="detail-label">URL:</span><span class="detail-value"><a href="${eventData.url}" target="_blank">${eventData.url}</a></span></div>`;
                else if (type === 'system.cli.command') detailsContent = `<div class="event-detail-row"><span class="detail-label">Command:</span><span class="detail-value">dex ${eventData.command}</span></div><div class="event-detail-block"><span class="detail-label">Output:</span><pre class="detail-pre">${escapeHtml(eventData.output) || 'No output.'}</pre></div>`;
                else if (type === 'system.test.completed') detailsContent = `<div class="event-detail-row"><span class="detail-label">Service:</span><span class="detail-value">${eventData.service_name}</span></div><div class="event-detail-block"><span class="detail-label">Tests:</span><pre class="detail-pre">${eventData.test?.status || 'N/A'}: ${eventData.test?.details || 'OK'}</pre></div>`;

                detailsHtml = `<div class="event-details" style="${isExpanded ? 'display: block;' : 'display: none;'}"><div class="event-details-header"><h4>Details</h4><i class="bx bx-x close-details-btn"></i></div>${detailsContent}</div>`;
            }

            const tempDiv = document.createElement('div');
            tempDiv.className = `event-item ${borderClass} ${isExpandable ? 'cursor-pointer' : ''} ${isExpanded ? 'expanded' : ''}`;
            tempDiv.dataset.eventId = event.id;
            tempDiv.onclick = function (e) {
                if (!isExpandable) return;
                const expanding = !this.classList.contains('expanded');
                this.classList.toggle('expanded', expanding);
                if (expanding) activeExpandedIds.add(event.id); else activeExpandedIds.delete(event.id);
                const details = this.querySelector('.event-details');
                if (details) details.style.display = expanding ? 'block' : 'none';
            };

            tempDiv.innerHTML = `<div class="event-time"><span class="event-time-main">${timeStr}</span><span class="event-date">${dateStr}</span></div><div class="event-icon"><i class='bx ${icon}'></i></div><div class="event-content"><div class="event-service"><span class="event-category-tag cat-${category}">${category}</span> ${event.service} ${userLevel}</div><div class="event-message">${summary}</div>${detailsHtml}</div>`;

            if (isExpandable) {
                const closeBtn = tempDiv.querySelector('.close-details-btn');
                if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); tempDiv.click(); };
            }
            return tempDiv;
        };

        const currentChildren = Array.from(eventsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.eventId, el]));
        const newIds = new Set(currentFilteredEvents.map(e => e.id));

        currentChildren.forEach(child => { if (child.dataset.eventId && !newIds.has(child.dataset.eventId)) child.remove(); });

        let previousElement = null;
        currentFilteredEvents.forEach((event, index) => {
            let el = currentMap.get(event.id);
            if (!el || forceReRender) { if (el) el.remove(); el = createEventElement(event); if (!el) return; }
            if (index === 0) { if (eventsContainer.firstElementChild !== el) eventsContainer.prepend(el); } 
            else { if (previousElement && previousElement.nextElementSibling !== el) previousElement.after(el); }
            previousElement = el;
        });

    } catch (error) {
        console.error('Error fetching events:', error);
        if (eventsContainer.children.length === 0) {
            eventsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load events.');
        }
    }
}

function attachEventActionListeners() {
    const expandAllBtn = document.getElementById('events-expand-all');
    const closeAllBtn = document.getElementById('events-close-all');
    const filterContainer = document.getElementById('event-filters');

    if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
        expandAllBtn.onclick = () => { currentFilteredEvents.forEach(e => activeExpandedIds.add(e.id)); updateEventsTimeline(true); };
        expandAllBtn.dataset.listenerAttached = "true";
    }
    if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
        closeAllBtn.onclick = () => { activeExpandedIds.clear(); updateEventsTimeline(true); };
        closeAllBtn.dataset.listenerAttached = "true";
    }
    if (filterContainer && !filterContainer.dataset.listenerAttached) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                updateEventsTimeline(true);
            };
        });
        filterContainer.dataset.listenerAttached = "true";
    }
}