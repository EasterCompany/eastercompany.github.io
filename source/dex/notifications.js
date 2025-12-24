// Notifications Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateUnreadNotificationCount, escapeHtml } from './utils.js';

export const getNotificationsContent = () => `<div id="notifications-list" class="notifications-list"><p>Loading notifications...</p></div>`;

// Export this to track updates in main.js if needed, or manage it internally
export let lastNotificationsUpdate = null;

export async function updateNotificationsTab() {
    const notificationsContainer = document.getElementById('notifications-list');
    if (!notificationsContainer) return;
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

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    // Fetch a large batch of notifications to ensure we find older unread ones
    const notificationsUrl = `http://${domain}:${eventService.port}/events?ml=1000&format=json&event.type=system.notification.generated`;

    try {
        const response = await fetch(notificationsUrl);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const allNotifications = data.events || [];

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
            const category = notificationData.category || 'system';
            const relatedEventIDs = notificationData.related_event_ids || [];
            const readTS = localStorage.getItem(`notification_read_ts_${notificationEvent.id}`);
            const isRead = !!readTS;

            const utcDate = new Date(notificationEvent.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            // Apply priority-based styling (matching event borders)
            let borderClass = 'event-border-grey';
            if (priority === 'high' || priority === 'critical') {
                borderClass = 'event-border-red';
            } else if (priority === 'medium') {
                borderClass = 'event-border-orange';
            }

            const readClass = isRead ? 'notification-read' : 'notification-unread';
            
            // Check if it was already expanded
            const isExpanded = expandedNotificationIds.has(notificationEvent.id);
            const expandedClass = isExpanded ? 'expanded' : '';
            const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

            let relatedEventsHtml = '';
            if (relatedEventIDs.length > 0) {
                relatedEventsHtml = `
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${relatedEventIDs.map(id => `<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${id.substring(0, 8)}...</span>`).join(', ')}</span>
                    </div>`;
            }

            const tempDiv = document.createElement('div');
            tempDiv.className = `event-item notification-item ${borderClass} ${readClass} ${expandedClass} cursor-pointer`;
            tempDiv.dataset.notificationId = notificationEvent.id;
            
            tempDiv.onclick = function(e) {
                // Mark as read with timestamp for 24h persistence
                if (!localStorage.getItem(`notification_read_ts_${notificationEvent.id}`)) {
                    localStorage.setItem(`notification_read_ts_${notificationEvent.id}`, Date.now().toString());
                    this.classList.add('notification-read');
                    this.classList.remove('notification-unread');
                    updateUnreadNotificationCount();
                }

                // Toggle expansion
                this.classList.toggle('expanded');
                const details = this.querySelector('.event-details');
                if (details) {
                    const becomingVisible = details.style.display === 'none';
                    details.style.display = becomingVisible ? 'block' : 'none';
                    if (becomingVisible) {
                        expandedNotificationIds.add(notificationEvent.id);
                    } else {
                        expandedNotificationIds.delete(notificationEvent.id);
                    }
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
                            <h4>Notification Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${priority === 'high' || priority === 'critical' ? '#ff4d4d' : priority === 'medium' ? '#ffa500' : '#888'}">${priority.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px;">${escapeHtml(body)}</p>
                        </div>
                        ${relatedEventsHtml}
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
                    expandedNotificationIds.delete(notificationEvent.id);
                });
            }

            return tempDiv;
        };

        const expandedNotificationIds = new Set(
            Array.from(notificationsContainer.querySelectorAll('.event-item.expanded'))
              .map(el => el.dataset.notificationId)
              .filter(id => id)
        );

        // Basic diffing and rendering logic for notifications
        const currentChildren = Array.from(notificationsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.notificationId, el]));
        const newIds = new Set(filteredNotifications.map(e => e.id));

        // Remove old notifications not in the filtered list
        currentChildren.forEach(child => {
            if (!child.dataset.notificationId || !newIds.has(child.dataset.notificationId)) {
                child.remove();
            }
        });

        let previousElement = null;

        filteredNotifications.forEach((notificationEvent, index) => {
            let el = currentMap.get(notificationEvent.id);
            if (!el) {
                el = createNotificationElement(notificationEvent);
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
