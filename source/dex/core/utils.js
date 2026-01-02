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

  return html;
}

import { isLoggedIn } from './auth.js';

const UPSTASH_URL = "https://sterling-javelin-12539.upstash.io";
const UPSTASH_TOKEN = "AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw"; // Read Only

function isPublicMode() {
  return window.location.hostname === 'easter.company';
}

// --- CENTRALIZED DASHBOARD CACHE ---
let DASHBOARD_CACHE = null;
const CACHE_KEY = 'dex_dashboard_snapshot';

/**
 * Loads the dashboard cache from localStorage on script boot.
 */
function loadDashboardFromStorage() {
  const stored = localStorage.getItem(CACHE_KEY);
  if (stored) {
    try {
      DASHBOARD_CACHE = JSON.parse(stored);
    } catch (e) {
      DASHBOARD_CACHE = null;
    }
  }
}

async function refreshDashboardCache() {
  if (!isPublicMode()) return;
  
  const snapshot = await upstashCommand('GET', 'state:dashboard:full');
  if (snapshot) {
    try {
      const data = JSON.parse(snapshot);
      DASHBOARD_CACHE = data;
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      // console.log('✨ Dashboard snapshot synchronized at :59');
    } catch (e) {
      console.error("Failed to parse dashboard snapshot:", e);
    }
  }
}

/**
 * Start the synchronized poller at :59 of every minute.
 */
function initDashboardSync() {
  if (!isPublicMode()) return;

  loadDashboardFromStorage();

  // If no cache or cache is old (over 2 mins), do an immediate fetch to bootstrap
  const now = Date.now();
  if (!DASHBOARD_CACHE || (now / 1000 - DASHBOARD_CACHE.timestamp) > 120) {
    refreshDashboardCache();
  }

  // Set interval to check clock every second
  setInterval(() => {
    const clock = new Date();
    if (clock.getSeconds() === 59) {
      refreshDashboardCache();
    }
  }, 1000);
}

// Self-initialize sync
if (isPublicMode()) {
  initDashboardSync();
}

async function upstashCommand(command, ...args) {
  try {
    const response = await fetch(UPSTASH_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      body: JSON.stringify([command, ...args])
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.result;
  } catch (e) {
    console.error("Upstash Error:", e);
    return null;
  }
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
  // --- PUBLIC MODE ADAPTER (Served from Local Dashboard Cache) ---
  if (isPublicMode()) {
    // Ensure we have a cache to serve from
    if (!DASHBOARD_CACHE) {
      // If still no cache, wait a tiny bit or try one more upstash call if it's critical
      // For now, we return error to avoid infinite loops, refreshDashboardCache handles the background fetch
      return new Response(JSON.stringify({ error: "Initializing dashboard cache..." }), { status: 503 });
    }

    // 1. System Monitor & Status
    if (endpoint.startsWith('/system_monitor') || endpoint.startsWith('/system/status')) {
      return new Response(JSON.stringify(DASHBOARD_CACHE.monitor), { status: 200 });
    }

    // 2. Processes
    if (endpoint.startsWith('/processes')) {
      return new Response(JSON.stringify(DASHBOARD_CACHE.processes), { status: 200 });
    }

    // 3. Events Timeline
    if (endpoint.startsWith('/events')) {
      const urlParams = new URLSearchParams(endpoint.split('?')[1] || '');
      const type = urlParams.get('type') || urlParams.get('event.type');
      const order = urlParams.get('order') || 'desc';

      let events = [];
      
      // Route to correct pool in cache
      if (type === 'system.notification.generated') {
        events = [...(DASHBOARD_CACHE.alerts || [])];
      } else {
        events = [...(DASHBOARD_CACHE.events || [])];
      }

      // Handle Sorting
      if (order === 'asc') {
        events.sort((a, b) => a.timestamp - b.timestamp);
      } else {
        events.sort((a, b) => b.timestamp - a.timestamp);
      }

      return new Response(JSON.stringify({ events: events, count: events.length }), { status: 200 });
    }

    // 4. Logs (Not public, return empty)
    if (endpoint.startsWith('/logs')) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    // 5. Agent Status
    if (endpoint.startsWith('/agent/status') || endpoint.startsWith('/guardian/status')) {
      // We don't have this explicitly in the snapshot but we can mock enough for the UI if needed
      // or just return empty {}
      return new Response(JSON.stringify({}), { status: 200 });
    }

    // Default: Return 404 for unsupported public endpoints
    return new Response(JSON.stringify({ error: "Not available in public demo" }), { status: 404 });
  }

  // --- STANDARD MODE ---
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
