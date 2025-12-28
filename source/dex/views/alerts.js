// Alerts Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateUnreadAlertCount, escapeHtml, smartFetch, renderMarkdown } from '../core/utils.js';

export const getAlertsContent = () => `
    <div class="alerts-actions">
        <button id="alerts-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="alerts-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="alerts-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="alerts-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`;

// Export this to track updates in main.js if needed, or manage it internally
export let lastAlertsUpdate = null;

// Track expanded state globally within the module
let activeExpandedIds = new Set();
let currentFilteredAlerts = [];

export async function updateAlertsTab(forceReRender = false) {
  const alertsContainer = document.getElementById('alerts-list');
  if (!alertsContainer) return;

  // Attach button listeners if not already attached
  attachActionListeners();

  if (forceReRender) {
    alertsContainer.innerHTML = '<p>Updating...</p>';
  }

  // Fetch only notifications (now alerts)
  const url = `/events?ml=1000&format=json&event.type=system.notification.generated`;

  try {
    const response = await smartFetch(url);
    if (!response.ok) throw new Error('Service is offline or unreachable.');

    const data = await response.json();
    const allAlerts = data.events || [];

    lastAlertsUpdate = Date.now();
    updateTabTimestamp(0, lastAlertsUpdate); // Index 0 for Alerts

    // Persistence Logic Filter:
    // 1. Always keep UNREAD alerts.
    // 2. Keep READ alerts for 24 hours after they were marked as read.
    const now = Date.now();
    const persistenceThreshold = 24 * 60 * 60 * 1000; // 24 hours

    const filteredAlerts = allAlerts.filter(event => {
      const readTSStr = localStorage.getItem(`alert_read_ts_${event.id}`);
      if (!readTSStr) return true; // Keep unread

      const readTS = parseInt(readTSStr);
      return (now - readTS) < persistenceThreshold; // Keep if read within last 24h
    });

    // Sort: Priority (Desc) -> Time (Desc)
    filteredAlerts.sort((a, b) => {
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

    currentFilteredAlerts = filteredAlerts;

    const getPriority = (evt) => {
      let data = evt.event;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (e) { return 'low'; }
      }
      return (data.priority || 'low').toLowerCase();
    };

    // Build Display List with Dividers
    const displayList = [];
    const uniquePriorities = new Set(filteredAlerts.map(n => getPriority(n)));
    const showDividers = uniquePriorities.size > 1;

    if (filteredAlerts.length > 0) {
      let lastPriority = null;
      filteredAlerts.forEach(n => {
        const p = getPriority(n);
        if (showDividers && p !== lastPriority) {
          displayList.push({ id: `divider-${p}`, type: 'divider', label: p.toUpperCase() });
          lastPriority = p;
        }
        displayList.push(n);
      });
    }

    if (forceReRender) {
      alertsContainer.innerHTML = '';
    }

    if (filteredAlerts.length === 0) {
      alertsContainer.innerHTML = createPlaceholderMessage('empty', 'No alerts yet.');
      updateUnreadAlertCount();
      return;
    }

    const createAlertElement = (alertEvent) => {
      let alertData = alertEvent.event;
      if (typeof alertData === 'string') {
        try {
          alertData = JSON.parse(alertData);
        } catch (e) { return null; }
      }

      const title = alertData.title || 'Untitled Alert';
      const body = alertData.body || 'No description provided.';
      const priority = alertData.priority || 'low';
      const isAlert = !!alertData.alert;
      const category = alertData.category || 'system';
      const relatedEventIDs = alertData.related_event_ids || [];

      const readTS = localStorage.getItem(`alert_read_ts_${alertEvent.id}`);
      const isRead = !!readTS;

      const utcDate = new Date(alertEvent.timestamp * 1000);
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

      const readClass = isRead ? 'alert-read' : 'alert-unread';
      const isExpanded = activeExpandedIds.has(alertEvent.id);
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
                ${relatedEventsHtml}
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <div class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${renderMarkdown(body)}</div>
                </div>
            `;


      const tempDiv = document.createElement('div');
      tempDiv.className = `event-item notification-item ${borderClass} ${readClass} ${expandedClass} cursor-pointer`;
      tempDiv.dataset.alertId = alertEvent.id;

      tempDiv.onclick = function (e) {
        const isCurrentlyExpanded = this.classList.contains('expanded');
        if (isCurrentlyExpanded) {
          this.classList.remove('expanded');
          activeExpandedIds.delete(alertEvent.id);
          const details = this.querySelector('.event-details');
          if (details) details.style.display = 'none';
        } else {
          this.classList.add('expanded');
          activeExpandedIds.add(alertEvent.id);
          const details = this.querySelector('.event-details');
          if (details) details.style.display = 'block';

          if (!localStorage.getItem(`alert_read_ts_${alertEvent.id}`)) {
            localStorage.setItem(`alert_read_ts_${alertEvent.id}`, Date.now().toString());
            this.classList.add('alert-read');
            this.classList.remove('alert-unread');

            this.classList.remove('event-border-blue', 'event-border-red', 'event-border-purple');
            let newBorder = 'event-border-grey';
            if (priority === 'high' || priority === 'critical') newBorder = 'event-border-red';
            else if (priority === 'medium') newBorder = 'event-border-orange';
            this.classList.add(newBorder);

            updateUnreadAlertCount();
          }
        }
      };

      const summary = title;
      const iconMap = {
          'system': 'bx-cog',
          'messaging': 'bx-message-detail',
          'cognitive': 'bx-brain',
          'moderation': 'bx-shield-x',
          'lifecycle': 'bx-git-branch'
      };
      const icon = iconMap[category] || 'bx-bell';

      tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-icon"><i class='bx ${icon}'></i></div>
                <div class="event-content">
                    <div class="event-service">${category.toUpperCase()} ${isAlert ? '<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>' : ''}</div>
                    <div class="event-message">${title}</div>
                    <div class="event-details" style="${detailsStyle}">
                        <div class="event-details-header">
                            <h4>${isAlert ? 'Alert' : 'Notification'} Details</h4>
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
          activeExpandedIds.delete(alertEvent.id);
        });
      }

      return tempDiv;
    };

    const createDividerElement = (item) => {
      const div = document.createElement('div');
      div.className = 'notification-divider';
      div.dataset.alertId = item.id;

      let color = '#888888';
      if (item.label === 'CRITICAL') color = '#ff4d4d';
      else if (item.label === 'HIGH') color = '#ff8888';
      else if (item.label === 'MEDIUM') color = '#ffa500';

      div.style.cssText = `display: flex; align-items: center; gap: 15px; color: ${color}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`;
      div.innerHTML = `<span style="white-space: nowrap;">${item.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${color}44, transparent); flex-grow: 1;"></div>`;
      return div;
    };

    // Basic diffing and rendering logic for alerts
    const currentChildren = Array.from(alertsContainer.children);
    const currentMap = new Map(currentChildren.map(el => [el.dataset.alertId, el]));
    const newIds = new Set(displayList.map(e => e.id));

    // Remove old alerts OR placeholders (anything without a valid current ID)
    currentChildren.forEach(child => {
      const id = child.dataset.alertId;
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
          el = createAlertElement(item);
        }
        if (!el) return;
      }
      if (index === 0) {
        if (alertsContainer.firstElementChild !== el) {
          alertsContainer.prepend(el);
        }
      } else {
        if (previousElement && previousElement.nextElementSibling !== el) {
          previousElement.after(el);
        }
      }
      previousElement = el;
    });

    lastAlertsUpdate = Date.now();
    updateTabTimestamp(0, lastAlertsUpdate); // Index 0 for Alerts
    updateUnreadAlertCount(); // Update badge on each refresh

      } catch (error) {
          console.error('Error fetching alerts:', error);
          if (alertsContainer.children.length === 0) {
              alertsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load alerts.', 'The event service may be offline.');
          }
      }}

function attachActionListeners() {
  const readAllBtn = document.getElementById('alerts-read-all');
  const expandAllBtn = document.getElementById('alerts-expand-all');
  const closeAllBtn = document.getElementById('alerts-close-all');
  const clearBtn = document.getElementById('alerts-clear');

  if (readAllBtn && !readAllBtn.dataset.listenerAttached) {
    readAllBtn.onclick = () => {
      currentFilteredAlerts.forEach(notif => {
        if (!localStorage.getItem(`alert_read_ts_${notif.id}`)) {
          localStorage.setItem(`alert_read_ts_${notif.id}`, Date.now().toString());
        }
      });
      updateAlertsTab(true);
    };
    readAllBtn.dataset.listenerAttached = "true";
  }

  if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
    expandAllBtn.onclick = () => {
      currentFilteredAlerts.forEach(notif => {
        activeExpandedIds.add(notif.id);
        if (!localStorage.getItem(`alert_read_ts_${notif.id}`)) {
          localStorage.setItem(`alert_read_ts_${notif.id}`, Date.now().toString());
        }
      });
      updateAlertsTab(true);
    };
    expandAllBtn.dataset.listenerAttached = "true";
  }

  if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
    closeAllBtn.onclick = () => {
      activeExpandedIds.clear();
      updateAlertsTab(true);
    };
    closeAllBtn.dataset.listenerAttached = "true";
  }

  if (clearBtn && !clearBtn.dataset.listenerAttached) {
    clearBtn.onclick = () => {
      const longAgo = Date.now() - (48 * 60 * 60 * 1000); // 48 hours ago
      currentFilteredAlerts.forEach(notif => {
        localStorage.setItem(`alert_read_ts_${notif.id}`, longAgo.toString());
      });
      activeExpandedIds.clear();
      updateAlertsTab(true);
    };
    clearBtn.dataset.listenerAttached = "true";
  }
}
