// Notifications Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateUnreadNotificationCount, escapeHtml } from './utils.js';

export const getNotificationsContent = () => `
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`;

// Export this to track updates in main.js if needed, or manage it internally
export let lastNotificationsUpdate = null;

// Track expanded state globally within the module
let activeExpandedIds = new Set();
let currentFilteredNotifications = [];

export async function updateNotificationsTab(forceReRender = false) {
    const notificationsContainer = document.getElementById('notifications-list');
    if (!notificationsContainer) return;

    // Attach button listeners if not already attached
    attachActionListeners();

    if (forceReRender) {
        notificationsContainer.innerHTML = '<p>Updating...</p>';
    }

    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
        notificationsContainer.innerHTML = createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
        return;
    }
    let eventService = null;
    try {
        const serviceMapData = JSON.parse(serviceMapString);
        eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
    } catch (e) { notificationsContainer.innerHTML = createPlaceholderMessage('error', 'Invalid service map data.'); return; }
    if (!eventService) { notificationsContainer.innerHTML = createPlaceholderMessage('error', 'Event service not found in service map.'); return; }

    const domain = eventService.domain === '0.0.0.0' ? '127.0.0.1' : eventService.domain;
    // Fetch only notifications
    const notificationsUrl = `http://${domain}:${eventService.port}/events?ml=1000&format=json&event.type=system.notification.generated`;

    try {
        const response = await fetch(notificationsUrl);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const allNotifications = data.events || [];

        lastNotificationsUpdate = Date.now();
        updateTabTimestamp(0, lastNotificationsUpdate); // Index 0 for Notifications

        // Persistence Logic Filter:
        // 1. Always keep UNREAD notifications.
        // 2. Keep READ notifications for 24 hours after they were marked as read.
        const now = Date.now();
        const persistenceThreshold = 24 * 60 * 60 * 1000; // 24 hours

        const filteredNotifications = allNotifications.filter(event => {
            const readTSStr = localStorage.getItem(`notification_read_ts_${event.id}`);
            if (!readTSStr) return true; // Keep unread

            const readTS = parseInt(readTSStr);
            return (now - readTS) < persistenceThreshold; // Keep if read within last 24h
        });

        // Sort: Priority (Desc) -> Time (Desc)
        filteredNotifications.sort((a, b) => {
            const getPriority = (evt) => {
                let data = evt.event;
                if (typeof data === 'string') {
                    try { data = JSON.parse(data); } catch (e) { return 'low'; }
                }
                return (data.priority || 'low').toLowerCase();
            };

            const score = (p) => {
                if (p === 'critical') return 4;
                if (p === 'high') return 3;
                if (p === 'medium') return 2;
                return 1;
            };

            const scoreA = score(getPriority(a));
            const scoreB = score(getPriority(b));

            if (scoreA !== scoreB) {
                return scoreB - scoreA; // Higher priority first
            }
            return b.timestamp - a.timestamp; // Newer timestamp first
        });

        currentFilteredNotifications = filteredNotifications;

        const getPriority = (evt) => {
             let data = evt.event;
             if (typeof data === 'string') {
                 try { data = JSON.parse(data); } catch (e) { return 'low'; }
             }
             return (data.priority || 'low').toLowerCase();
        };

        // Build Display List with Dividers
        const displayList = [];
        const uniquePriorities = new Set(filteredNotifications.map(n => getPriority(n)));
        const showDividers = uniquePriorities.size > 1;

        if (filteredNotifications.length > 0) {
            let lastPriority = null;
            filteredNotifications.forEach(n => {
                const p = getPriority(n);
                if (showDividers && p !== lastPriority) {
                    displayList.push({ id: `divider-${p}`, type: 'divider', label: p.toUpperCase() });
                    lastPriority = p;
                }
                displayList.push(n);
            });
        }

        if (forceReRender) {
            notificationsContainer.innerHTML = '';
        }

        if (filteredNotifications.length === 0) {
            notificationsContainer.innerHTML = createPlaceholderMessage('empty', 'No notifications yet.');
            updateUnreadNotificationCount();
            return;
        }

        const createNotificationElement = (notificationEvent) => {
            let notificationData = notificationEvent.event;
            if (typeof notificationData === 'string') {
                try {
                    notificationData = JSON.parse(notificationData);
                } catch (e) { return null; }
            }

            const title = notificationData.title || 'Untitled Notification';
            const body = notificationData.body || 'No description provided.';
            const priority = notificationData.priority || 'low';
            const isAlert = !!notificationData.alert;
            const category = notificationData.category || 'system';
            const relatedEventIDs = notificationData.related_event_ids || [];

            const readTS = localStorage.getItem(`notification_read_ts_${notificationEvent.id}`);
            const isRead = !!readTS;

            const utcDate = new Date(notificationEvent.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            // Styling
            let borderClass = isRead ? 'event-border-grey' : 'event-border-blue';
            
            if (!isRead && isAlert) borderClass = 'event-border-red';

            if (isRead && (priority === 'high' || priority === 'critical')) {
                borderClass = 'event-border-red';
            } else if (isRead && priority === 'medium') {
                borderClass = 'event-border-orange';
            }

            const readClass = isRead ? 'notification-read' : 'notification-unread';
            const isExpanded = activeExpandedIds.has(notificationEvent.id);
            const expandedClass = isExpanded ? 'expanded' : '';
            const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

            let detailsContent = '';
            
            let relatedEventsHtml = '';
            if (relatedEventIDs.length > 0) {
                relatedEventsHtml = `
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${relatedEventIDs.map(id => `<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${id.substring(0, 8)}...</span>`).join(', ')}</span>
                    </div>`;
            }
            detailsContent = `
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${priority === 'high' || priority === 'critical' ? '#ff4d4d' : priority === 'medium' ? '#ffa500' : '#888'}">${priority.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${escapeHtml(body)}</p>
                </div>
                ${relatedEventsHtml}
            `;
            

            const tempDiv = document.createElement('div');
            tempDiv.className = `event-item notification-item ${borderClass} ${readClass} ${expandedClass} cursor-pointer`;
            tempDiv.dataset.notificationId = notificationEvent.id;

            tempDiv.onclick = function(e) {
                const isCurrentlyExpanded = this.classList.contains('expanded');
                if (isCurrentlyExpanded) {
                    this.classList.remove('expanded');
                    activeExpandedIds.delete(notificationEvent.id);
                    const details = this.querySelector('.event-details');
                    if (details) details.style.display = 'none';
                } else {
                    this.classList.add('expanded');
                    activeExpandedIds.add(notificationEvent.id);
                    const details = this.querySelector('.event-details');
                    if (details) details.style.display = 'block';

                    if (!localStorage.getItem(`notification_read_ts_${notificationEvent.id}`)) {
                        localStorage.setItem(`notification_read_ts_${notificationEvent.id}`, Date.now().toString());
                        this.classList.add('notification-read');
                        this.classList.remove('notification-unread');

                        this.classList.remove('event-border-blue', 'event-border-red', 'event-border-purple');
                        let newBorder = 'event-border-grey';
                        if (priority === 'high' || priority === 'critical') newBorder = 'event-border-red';
                        else if (priority === 'medium') newBorder = 'event-border-orange';
                        this.classList.add(newBorder);

                        updateUnreadNotificationCount();
                    }
                }
            };

            tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${category.toUpperCase()} ${isAlert ? '<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>' : ''}</div>
                    <div class="event-message">${title}</div>
                    <div class="event-details" style="${detailsStyle}">
                        <div class="event-details-header">
                            <h4>${isAlert ? 'Alert' : 'Notification'} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${detailsContent}
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
                    activeExpandedIds.delete(notificationEvent.id);
                });
            }

            return tempDiv;
        };

        const createDividerElement = (item) => {
            const div = document.createElement('div');
            div.className = 'notification-divider';
            div.dataset.notificationId = item.id;
            
            let color = '#aaaaaa';
            if (item.label === 'CRITICAL') color = '#ff4d4d';
            else if (item.label === 'HIGH') color = '#ff8888';
            else if (item.label === 'MEDIUM') color = '#ffa500';

            div.style.cssText = `display: flex; align-items: center; gap: 15px; color: ${color}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`;
            div.innerHTML = `<span style="white-space: nowrap;">${item.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${color}44, transparent); flex-grow: 1;"></div>`;
            return div;
        };

        // Basic diffing and rendering logic for notifications
        const currentChildren = Array.from(notificationsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.notificationId, el]));
        const newIds = new Set(displayList.map(e => e.id));

        // Remove old notifications OR placeholders (anything without a valid current ID)
        currentChildren.forEach(child => {
            const id = child.dataset.notificationId;
            if (!id || !newIds.has(id)) {
                child.remove();
            }
        });

        let previousElement = null;

        displayList.forEach((item, index) => {
            let el = currentMap.get(item.id);
            if (!el || forceReRender) {
                if (el) el.remove();
                if (item.type === 'divider') {
                    el = createDividerElement(item);
                } else {
                    el = createNotificationElement(item);
                }
                if (!el) return;
            }
            if (index === 0) {
                if (notificationsContainer.firstElementChild !== el) {
                    notificationsContainer.prepend(el);
                }
            } else {
                if (previousElement && previousElement.nextElementSibling !== el) {
                    previousElement.after(el);
                }
            }
            previousElement = el;
        });

        lastNotificationsUpdate = Date.now();
        updateTabTimestamp(0, lastNotificationsUpdate); // Index 0 for Notifications
        updateUnreadNotificationCount(); // Update badge on each refresh

    } catch (error) {
        console.error('Error fetching notifications:', error);
        if (notificationsContainer.children.length === 0) {
            notificationsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load notifications.', 'The event service may be offline or unreachable.');
        }
    }
}

function attachActionListeners() {
    const readAllBtn = document.getElementById('notif-read-all');
    const expandAllBtn = document.getElementById('notif-expand-all');
    const closeAllBtn = document.getElementById('notif-close-all');
    const clearBtn = document.getElementById('notif-clear');

    if (readAllBtn && !readAllBtn.dataset.listenerAttached) {
        readAllBtn.onclick = () => {
            currentFilteredNotifications.forEach(notif => {
                if (!localStorage.getItem(`notification_read_ts_${notif.id}`)) {
                    localStorage.setItem(`notification_read_ts_${notif.id}`, Date.now().toString());
                }
            });
            updateNotificationsTab(true);
        };
        readAllBtn.dataset.listenerAttached = "true";
    }

    if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
        expandAllBtn.onclick = () => {
            currentFilteredNotifications.forEach(notif => {
                activeExpandedIds.add(notif.id);
                if (!localStorage.getItem(`notification_read_ts_${notif.id}`)) {
                    localStorage.setItem(`notification_read_ts_${notif.id}`, Date.now().toString());
                }
            });
            updateNotificationsTab(true);
        };
        expandAllBtn.dataset.listenerAttached = "true";
    }

    if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
        closeAllBtn.onclick = () => {
            activeExpandedIds.clear();
            updateNotificationsTab(true);
        };
        closeAllBtn.dataset.listenerAttached = "true";
    }

    if (clearBtn && !clearBtn.dataset.listenerAttached) {
        clearBtn.onclick = () => {
            const longAgo = Date.now() - (48 * 60 * 60 * 1000); // 48 hours ago
            currentFilteredNotifications.forEach(notif => {
                localStorage.setItem(`notification_read_ts_${notif.id}`, longAgo.toString());
            });
            activeExpandedIds.clear();
            updateNotificationsTab(true);
        };
        clearBtn.dataset.listenerAttached = "true";
    }
}