// Shared Utility Functions

export function createPlaceholderMessage(type, message, actionText = null) {
    const iconMap = { config: 'bx-cog', error: 'bx-error-circle', empty: 'bx-info-circle', offline: 'bx-wifi-off' };
    const icon = iconMap[type] || 'bx-info-circle';
    const actionHtml = actionText ? `<p class="placeholder-action">${actionText}</p>` : '';
    return `<div class="tab-placeholder"><i class='bx ${icon} placeholder-icon'></i><p class="placeholder-message">${message}</p>${actionHtml}</div>`;
}

export function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function updateTabTimestamp(tabIndex, timestamp) {
    const subtitleElement = document.querySelector(`.tab[data-tab-index="${tabIndex}"] .tab-subtitle`);
    if (!subtitleElement) return;
    if (!timestamp) {
        subtitleElement.textContent = 'Last updated: never';
        return;
    }
    const now = Date.now();
    const seconds = (now - timestamp) / 1000;
    let timeStr;
    if (seconds < 30) {
        timeStr = `${Math.floor(seconds)}s ago`;
    } else {
        subtitleElement.textContent = 'Last updated: never';
        return;
    }
    subtitleElement.textContent = `Last updated: ${timeStr}`;
}

export function updateUnreadNotificationCount() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    // Count .notification-unread elements
    const unreadCount = notificationsList.querySelectorAll('.notification-unread').length;
    
    // Update badge in tab button
    // The tab button is likely inside .window-tabs associated with message-window
    // We need to find the tab button for index 0
    // This depends on Window.js implementation details, but usually tabs are rendered in order.
    // Let's assume we can find it via data attribute if we add it, or just find the icon.
    
    // Window.js renders tabs as <div class="tab" data-tab-index="0">...</div>
    const tabBtn = document.querySelector(`.tab[data-tab-index="0"]`);
    if (tabBtn) {
        let badge = tabBtn.querySelector('.notification-badge');
        if (unreadCount > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'notification-badge';
                tabBtn.appendChild(badge);
            }
            badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            badge.style.display = 'flex';
        } else {
            if (badge) badge.style.display = 'none';
        }
    }
}
