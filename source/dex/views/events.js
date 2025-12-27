// Events Timeline Logic
import { createPlaceholderMessage, updateTabTimestamp, escapeHtml, smartFetch } from '../core/utils.js';
import { formatEventSummary } from '../core/templates.js';

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
            <div class="tab-placeholder">
                <i class='bx bx-calendar-event placeholder-icon'></i>
                <p class="placeholder-message">Loading events...</p>
            </div>
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
    return 'system'; // Default
}

function getEventIcon(type) {
    return EVENT_ICONS[type] || 'bx-square-rounded';
}

export async function updateEventsTimeline(forceReRender = false) {
    const eventsContainer = document.getElementById('events-timeline');
    if (!eventsContainer) return;

    // Attach button listeners if not already attached
    attachEventActionListeners();

    // Fetch MORE events if we are filtering, to ensure we have enough data
    const fetchCount = currentFilter === 'all' ? 100 : 250;
    const url = `/events?ml=${fetchCount}&format=json&exclude_types=system.notification.generated`;

    try {
        const response = await smartFetch(url);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const allEvents = data.events || [];
        
        // Filter events client-side based on category
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
        
        // Limit to 50 for display
        currentFilteredEvents = filteredEvents.slice(0, 50);

        lastEventsUpdate = Date.now();
        updateTabTimestamp(1, lastEventsUpdate); // Index 1 in mainWindow

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
                try {
                    eventData = JSON.parse(eventData);
                } catch (e) {
                    return null;
                }
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
            const cursorClass = isExpandable ? 'cursor-pointer' : '';

            const isExpanded = activeExpandedIds.has(event.id);
            const expandedClass = isExpanded ? 'expanded' : '';
            const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

            const utcDate = new Date(event.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            const summary = formatEventSummary(type, eventData);
            const userLevel = eventData.user_level ? `<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${eventData.user_level})</span>` : '';

            let detailsHtml = '';
            if (isExpandable) {
                let detailsContent = '';
                if (type === 'engagement.decision') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${eventData.engagement_model || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${eventData.context_history || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${eventData.engagement_raw || 'None'}</pre>
                        </div>
                    `;
                } else if (type === 'messaging.bot.sent_message') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${eventData.response_model || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${eventData.raw_input || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${eventData.response_raw || 'None'}</pre>
                        </div>
                    `;
                } else if (type === 'moderation.explicit_content.deleted') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${eventData.reason || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.raw_output) || 'None'}</pre>
                        </div>
                    `;
                } else if (type === 'analysis.link.completed') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${eventData.url}" target="_blank" class="attachment-link">${eventData.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${escapeHtml(eventData.title) || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.summary) || 'None'}</pre>
                        </div>
                    `;
                } else if (type === 'analysis.visual.completed') {
                    let imageHtml = '';
                    if (eventData.base64_preview) {
                        imageHtml = 
                        `<div class="event-detail-block"><img src="data:image/jpeg;base64,${eventData.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`
                    } else if (eventData.url) {
                        imageHtml = 
                        `<div class="event-detail-block"><img src="${eventData.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`
                    }

                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${eventData.filename}</span>
                        </div>
                        ${imageHtml}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                        </div>
                    `;
                } else if (type === 'system.cli.command') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${eventData.command || 'unknown'}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${eventData.args || 'None'}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${eventData.status || 'unknown'}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${eventData.duration || 'N/A'}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${eventData.exit_code !== undefined ? eventData.exit_code : 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.output) || 'No output recorded.'}</pre>
                        </div>
                    `;
                } else if (type === 'system.analysis.audit') {
                     detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${eventData.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${eventData.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${escapeHtml(eventData.raw_input)}</pre>
                        </div>
                    `;
                } else if (type === 'system.test.completed') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${eventData.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${eventData.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${eventData.format?.status || 'N/A'}: ${eventData.format?.message || 'OK'}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${eventData.lint?.status || 'N/A'}: ${eventData.lint?.message || 'OK'}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${eventData.test?.status || 'N/A'}: ${eventData.test?.details || eventData.test?.message || 'OK'}</pre>
                        </div>
                    `;
                } else if (type === 'error_occurred') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${eventData.severity || 'high'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(eventData.context || {}, null, 2)}</pre>
                        </div>
                    `;
                } else if (type === 'system.cli.status') {
                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${eventData.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${escapeHtml(eventData.message)}</pre>
                        </div>
                    `;
                } else if (type === 'messaging.user.sent_message') {
                    let attachmentsHtml = '';
                    if (eventData.attachments && eventData.attachments.length > 0) {
                        const attachmentsList = eventData.attachments.map(att => {
                            const isImage = att.content_type && att.content_type.startsWith('image/');
                            const sizeStr = (att.size / 1024).toFixed(1) + ' KB';
                            return `
                                <div class="attachment-item">
                                    ${isImage ? `<div class="attachment-thumb-container"><img src="${att.url}" alt="${att.filename}" class="attachment-thumb"></div>` : `<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${att.url}" target="_blank" class="attachment-link">${att.filename}</a>
                                        <span class="attachment-meta">${att.content_type} • ${sizeStr}</span>
                                    </div>
                                </div>`;
                        }).join('');

                        attachmentsHtml = `
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${attachmentsList}</div>
                            </div>`;
                    }

                    detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${eventData.content || '(empty)'}</pre>
                        </div>
                        ${attachmentsHtml}
                    `;
                }

                detailsHtml = `
                    <div class="event-details" style="${detailsStyle}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${detailsContent}
                    </div>
                `;
            }

            const tempDiv = document.createElement('div');
            tempDiv.className = `event-item ${borderClass} ${cursorClass} ${expandedClass}`;
            tempDiv.dataset.eventId = event.id;
            tempDiv.onclick = function (e) {
                if (!isExpandable) return;
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

            tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-icon"><i class='bx ${icon}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${category}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${category}</span>
                        ${event.service} ${userLevel}
                    </div>
                    <div class="event-message">${summary}</div>
                    ${detailsHtml}
                </div>
            `;

            if (isExpandable) {
                const closeBtn = tempDiv.querySelector('.close-details-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const item = e.target.closest('.event-item');
                        if (item) {
                            item.classList.remove('expanded');
                            activeExpandedIds.delete(event.id);
                            const details = item.querySelector('.event-details');
                            if (details) details.style.display = 'none';
                        }
                    });
                }
            }

            return tempDiv;
        };

        const currentChildren = Array.from(eventsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.eventId, el]));
        const newIds = new Set(currentFilteredEvents.map(e => e.id));

        // 1. Remove old events or placeholders
        currentChildren.forEach(child => {
            const id = child.dataset.eventId;
            if (!id || !newIds.has(id)) {
                child.remove();
            }
        });

        let previousElement = null;

        currentFilteredEvents.forEach((event, index) => {
            let el = currentMap.get(event.id);
            if (!el || forceReRender) {
                if (el) el.remove();
                el = createEventElement(event);
                if (!el) return;
            }
            if (index === 0) {
                if (eventsContainer.firstElementChild !== el) {
                    eventsContainer.prepend(el);
                }
            } else {
                if (previousElement && previousElement.nextElementSibling !== el) {
                    previousElement.after(el);
                }
            }
            previousElement = el;
        });

        lastEventsUpdate = Date.now();
        updateTabTimestamp(1, lastEventsUpdate); // Index 1

    } catch (error) {
        console.error('Error fetching events:', error);
        if (eventsContainer.children.length === 0) {
            eventsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load events.', 'The event service may be offline.');
        }
    }
}

function attachEventActionListeners() {
    const expandAllBtn = document.getElementById('events-expand-all');
    const closeAllBtn = document.getElementById('events-close-all');
    const filterContainer = document.getElementById('event-filters');

    if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
        expandAllBtn.onclick = () => {
            currentFilteredEvents.forEach(e => activeExpandedIds.add(e.id));
            updateEventsTimeline(true);
        };
        expandAllBtn.dataset.listenerAttached = "true";
    }

    if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
        closeAllBtn.onclick = () => {
            activeExpandedIds.clear();
            updateEventsTimeline(true);
        };
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
