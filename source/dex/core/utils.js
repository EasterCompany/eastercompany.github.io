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

let lastGlobalBadgeCount = 0;

export function getLastBadgeCount() {
  return lastGlobalBadgeCount;
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

let lastUnreadAlerts = 0;
let lastPendingBlueprints = 0;

export function setUnreadAlerts(count) {
  lastUnreadAlerts = count;
  updateGlobalBadgeCount();
}

export function setPendingBlueprints(count) {
  lastPendingBlueprints = count;
  updateGlobalBadgeCount();
}

export function updateGlobalBadgeCount() {
  const count = lastUnreadAlerts + lastPendingBlueprints;
  lastGlobalBadgeCount = count;

  // 1. Robot Icon Badge
  const navBadge = document.getElementById('dexter-nav-badge');
  if (navBadge) {
    navBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  // 2. Dropdown Menu Badges
  const alertsDropdown = document.getElementById('alerts-menu-item');
  if (alertsDropdown) {
    let badge = alertsDropdown.querySelector('.notification-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.style.marginLeft = 'auto';
      alertsDropdown.appendChild(badge);
    }
    badge.textContent = lastUnreadAlerts > 9 ? '9+' : lastUnreadAlerts;
    badge.style.display = lastUnreadAlerts > 0 ? 'flex' : 'none';
  }

  const workspaceDropdown = document.getElementById('workspace-menu-item');
  if (workspaceDropdown) {
    let badge = workspaceDropdown.querySelector('.notification-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.style.marginLeft = 'auto';
      workspaceDropdown.appendChild(badge);
    }
    badge.textContent = lastPendingBlueprints > 9 ? '9+' : lastPendingBlueprints;
    badge.style.display = lastPendingBlueprints > 0 ? 'flex' : 'none';
  }

  // 3. Window Switcher Badges
  const alertsSwitcher = document.getElementById('switch-alerts');
  if (alertsSwitcher) {
    let badge = alertsSwitcher.querySelector('.notification-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.style.marginLeft = '8px';
      alertsSwitcher.appendChild(badge);
    }
    badge.textContent = lastUnreadAlerts > 9 ? '9+' : lastUnreadAlerts;
    badge.style.display = lastUnreadAlerts > 0 ? 'flex' : 'none';
  }

  const workspaceSwitcher = document.getElementById('switch-workspace');
  if (workspaceSwitcher) {
    let badge = workspaceSwitcher.querySelector('.notification-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.style.marginLeft = '8px';
      workspaceSwitcher.appendChild(badge);
    }
    badge.textContent = lastPendingBlueprints > 9 ? '9+' : lastPendingBlueprints;
    badge.style.display = lastPendingBlueprints > 0 ? 'flex' : 'none';
  }
}

export function updateUnreadAlertCount() {
  const alertsList = document.getElementById('alerts-list');
  if (!alertsList) return;

  const unreadCount = alertsList.querySelectorAll('.alert-unread:not(.priority-low)').length;
  lastUnreadAlerts = unreadCount;
  updateGlobalBadgeCount();
}

export function updatePendingBlueprintCount() {
  const blueprintsList = document.getElementById('blueprints-list');
  if (!blueprintsList) return;

  const pendingCount = blueprintsList.querySelectorAll('.event-item:not(.blueprint-approved)').length;
  lastPendingBlueprints = pendingCount;
  updateGlobalBadgeCount();
}

/**
 * Resolves the primary production URL or the local fallback.
 */
export function getEventServiceUrl() {
  return 'https://event.easter.company';
}

/**
 * Resolves the primary production URL or the local fallback for Discord service.
 */
export function getDiscordServiceUrl() {
  return 'https://discord.easter.company';
}

export const LOCAL_EVENT_SERVICE = 'http://127.0.0.1:8100';
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

export function renderMarkdown(text) {
  if (!text) return '';
  let html = escapeHtml(text);

  // Multiline Code
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="md-code-block">$1</pre>');

  // Inline Code
  html = html.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Headers
  html = html.replace(/^# (.*$)/gm, '<h3 class="md-header">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h4 class="md-header">$1</h4>');
  html = html.replace(/^### (.*$)/gm, '<h5 class="md-header">$1</h5>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (match, content) => {
    const cells = content.split('|').map(c => c.trim());
    if (cells.every(c => c.match(/^:?-+:?$/))) {
      return ''; // Hide the separator row
    }
    // If it's the first row, we might want to style it as a header, 
    // but for now, we'll just make them all rows.
    return `<div class="md-table-row">${cells.map(c => `<span class="md-table-cell">${c}</span>`).join('')}</div>`;
  });

  // Bullet Points
  html = html.replace(/^- (.*$)/gm, '<div class="md-list-item"><span class="md-bullet">•</span> $1</div>');

  // Numbered Lists
  html = html.replace(/^(\d+)\. (.*$)/gm, '<div class="md-list-item"><span class="md-number">$1.</span> $2</div>');

  // Paragraphs (Double newlines)
  html = html.split(/\n\n+/).map(p => {
    // If it's already a complex block (header, list, code), don't wrap in <p>
    if (p.trim().startsWith('<')) return p;
    return `<p class="md-para">${p.trim()}</p>`;
  }).join('\n');

  return html;
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
      // If the cached URL starts failing, clear it and try full discovery again
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
