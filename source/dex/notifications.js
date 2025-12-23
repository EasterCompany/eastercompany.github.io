// Notifications Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateUnreadNotificationCount } from './utils.js';

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
    // Fetch only notifications
    const notificationsUrl = `http://${domain}:${eventService.port}/events?ml=100&format=json&event.type=system.notification.generated`;

    try {
        const response = await fetch(notificationsUrl);
        if (!response.ok) throw new Error('Service is offline or unreachable.');

        const data = await response.json();
        const notifications = data.events || [];

        if (notifications.length === 0) {
            notificationsContainer.innerHTML = createPlaceholderMessage('empty', 'No notifications yet.');
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
            const isRead = localStorage.getItem(`notification_read_${notificationEvent.id}`) === 'true'; // Track read status locally

            const utcDate = new Date(notificationEvent.timestamp * 1000);
            const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

            // Apply priority-based styling
            let priorityClass = '';
            if (priority === 'high' || priority === 'critical') {
                priorityClass = 'notification-priority-high';
            } else if (priority === 'medium') {
                priorityClass = 'notification-priority-medium';
            }

            const readClass = isRead ? 'notification-read' : 'notification-unread';

            let relatedEventsHtml = '';
            if (relatedEventIDs.length > 0) {
                relatedEventsHtml = `<div class="notification-details-related">Related Events: ${relatedEventIDs.map(id => `<span class="related-event-id">${id.substring(0, 8)}...</span>`).join(', ')}</div>`;
            }


            const tempDiv = document.createElement('div');
            tempDiv.className = `notification-item ${priorityClass} ${readClass}`;
            tempDiv.dataset.notificationId = notificationEvent.id;
            tempDiv.onclick = () => {
                localStorage.setItem(`notification_read_${notificationEvent.id}`, 'true');
                tempDiv.classList.add('notification-read');
                tempDiv.classList.remove('notification-unread');
                updateUnreadNotificationCount(); // Update the count on click
            };

            tempDiv.innerHTML = `
                <div class="notification-header">
                    <span class="notification-priority">${priority.toUpperCase()}</span>
                    <span class="notification-title">${title}</span>
                </div>
                <div class="notification-body">
                    <p>${body}</p>
                    ${relatedEventsHtml}
                </div>
                <div class="notification-footer">
                    <span class="notification-category">${category}</span>
                    <span class="notification-timestamp">${dateStr} ${timeStr}</span>
                </div>
            `;
            return tempDiv;
        };

        // Basic diffing and rendering logic for notifications
        const currentChildren = Array.from(notificationsContainer.children);
        const currentMap = new Map(currentChildren.map(el => [el.dataset.notificationId, el]));
        const newIds = new Set(notifications.map(e => e.id));

        // Remove old notifications not in the new list
        currentChildren.forEach(child => {
            if (!child.dataset.notificationId || !newIds.has(child.dataset.notificationId)) {
                child.remove();
            }
        });

        let previousElement = null;

        notifications.forEach((notificationEvent, index) => {
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
