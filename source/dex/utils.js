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
    const seconds = Math.floor((now - timestamp) / 1000);
    
    let timeStr;
    if (seconds < 60) {
        timeStr = `${seconds}s ago`;
    } else if (seconds < 3600) {
        timeStr = `${Math.floor(seconds / 60)}m ago`;
    } else {
        timeStr = `${Math.floor(seconds / 3600)}h ago`;
    }
    
    subtitleElement.textContent = `Last updated: ${timeStr}`;
}

export function updateTabBadgeCount(tabIndex, count) {
    const tabBtn = document.querySelector(`.tab[data-tab-index="${tabIndex}"]`);
    if (!tabBtn) return;

    let badge = tabBtn.querySelector('.notification-badge');
    if (!badge) return;

    if (count > 0) {
        badge.textContent = count > 9 ? '9+' : count;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

export function updateUnreadNotificationCount() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    const unreadCount = notificationsList.querySelectorAll('.notification-unread').length;
    updateTabBadgeCount(0, unreadCount);
}