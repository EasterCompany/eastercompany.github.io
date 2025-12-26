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

/**
 * Updates a notification dot on the navbar.
 * @param {string} dotId - The ID of the dot element (e.g., "notif-dot")
 * @param {boolean} show - Whether to show the dot
 */
export function updateNavDot(dotId, show) {
    const dot = document.getElementById(dotId);
    if (dot) {
        dot.style.display = show ? 'block' : 'none';
    }
}

export function updateUnreadNotificationCount() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    const unreadCount = notificationsList.querySelectorAll('.notification-unread').length;
    updateNavDot('notif-dot', unreadCount > 0);
}

/**
 * Resolves the primary production URL or the local fallback.
 */
export function getEventServiceUrl() {
    return 'https://event.easter.company';
}

export const LOCAL_EVENT_SERVICE = 'http://127.0.0.1:8100';

/**
 * Resolves the primary production URL or the local fallback for Discord service.
 */
export function getDiscordServiceUrl() {
    return 'https://discord.easter.company';
}

export const LOCAL_DISCORD_SERVICE = 'http://127.0.0.1:8300';

const ANSI_MAP = {
    '31': 'ansi-red',
    '91': 'ansi-bright-red',
    '32': 'ansi-green',
    '33': 'ansi-yellow',
    '34': 'ansi-blue',
    '35': 'ansi-purple',
    '36': 'ansi-cyan',
    '37': 'ansi-white',
    '90': 'ansi-dark-gray'
};

/**
 * Converts ANSI escape sequences to HTML spans with color classes.
 */
export function ansiToHtml(text) {
    let escaped = escapeHtml(text);
    
    // Handle Reset
    escaped = escaped.replace(/\x1b\[0m/g, '</span>');

    // Handle Colors
    escaped = escaped.replace(/\x1b\[(\d+)m/g, (match, code) => {
        const className = ANSI_MAP[code];
        return className ? `<span class="${className}">` : '';
    });

    // Cleanup unclosed spans
    const openCount = (escaped.match(/<span/g) || []).length;
    const closeCount = (escaped.match(/<\/span/g) || []).length;
    if (openCount > closeCount) {
        escaped += '</span>'.repeat(openCount - closeCount);
    }

    return escaped;
}

let resolvedBaseUrl = null;
let resolvedDiscordBaseUrl = null;
let isFallingBack = false;
let isDiscordFallingBack = false;

/**
 * Executes a fetch against the primary domain, falling back to local on failure.
 * Remembers the working endpoint to prevent console spam.
 */
export async function smartFetch(endpoint, options = {}) {
    if (resolvedBaseUrl) {
        try {
            const response = await fetch(resolvedBaseUrl + endpoint, options);
            if (response.ok) return response;
            resolvedBaseUrl = null;
        } catch (e) {
            resolvedBaseUrl = null;
        }
    }

    const primary = getEventServiceUrl();
    const fallback = LOCAL_EVENT_SERVICE;

    try {
        const response = await fetch(primary + endpoint, options);
        if (response.ok) {
            resolvedBaseUrl = primary;
            if (isFallingBack) {
                console.log('✨ Production event service restored.');
                isFallingBack = false;
            }
            return response;
        }
        throw new Error('Primary failed');
    } catch (e) {
        if (!isFallingBack) {
            console.warn(`🌐 Production service unreachable. Falling back to local: ${fallback}`);
            isFallingBack = true;
        }
        
        try {
            const response = await fetch(fallback + endpoint, options);
            if (response.ok) {
                resolvedBaseUrl = fallback;
                return response;
            }
            throw new Error('Fallback failed');
        } catch (e2) {
            throw e2;
        }
    }
}

/**
 * Executes a fetch against the primary Discord domain, falling back to local on failure.
 */
export async function smartDiscordFetch(endpoint, options = {}) {
    if (resolvedDiscordBaseUrl) {
        try {
            const response = await fetch(resolvedDiscordBaseUrl + endpoint, options);
            if (response.ok) return response;
            resolvedDiscordBaseUrl = null;
        } catch (e) {
            resolvedDiscordBaseUrl = null;
        }
    }

    const primary = getDiscordServiceUrl();
    const fallback = LOCAL_DISCORD_SERVICE;

    try {
        const response = await fetch(primary + endpoint, options);
        if (response.ok) {
            resolvedDiscordBaseUrl = primary;
            if (isDiscordFallingBack) {
                console.log('✨ Production discord service restored.');
                isDiscordFallingBack = false;
            }
            return response;
        }
        throw new Error('Primary failed');
    } catch (e) {
        if (!isDiscordFallingBack) {
            console.warn(`🌐 Production discord service unreachable. Falling back to local: ${fallback}`);
            isDiscordFallingBack = true;
        }
        
        try {
            const response = await fetch(fallback + endpoint, options);
            if (response.ok) {
                resolvedDiscordBaseUrl = fallback;
                return response;
            }
            throw new Error('Fallback failed');
        } catch (e2) {
            throw e2;
        }
    }
}