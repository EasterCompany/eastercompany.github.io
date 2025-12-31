// Alerts Tab Logic
import { createPlaceholderMessage, updateTabTimestamp, updateUnreadAlertCount, escapeHtml, smartFetch, renderMarkdown, setUnreadAlerts } from '../core/utils.js';

export const getAlertsContent = () => `
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
            <button id="alerts-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="alerts-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
            <button id="alerts-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
        </div>
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

      const title = (alertData.title || 'Untitled Alert').trim();
      const body = (alertData.body || 'No description provided.').trim();
      const summaryContent = alertData.summary || '';
      const technicalContent = alertData.content || '';
      const protocol = alertData.protocol || '';
      const priority = (alertData.priority || 'low').toLowerCase();
      const isAlert = !!alertData.alert;
      const category = (alertData.category || 'system').trim();
      const relatedEventIDs = alertData.related_event_ids || [];
      const auditEventID = alertData.audit_event_id;

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
            <div style="flex: 1; min-width: 150px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    ${relatedEventIDs.map(id => `<a href="#" onclick="window.dexter.viewEvent('${id}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${id.substring(0, 8)}...</a>`).join(', ')}
                </div>
            </div>`;
      }

      let generatedByHtml = '';
      if (auditEventID) {
        generatedByHtml = `
            <div style="flex: 1; min-width: 120px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Generated By</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    <a href="#" onclick="window.dexter.viewEvent('${auditEventID}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3);">${auditEventID.substring(0, 8)}...</a>
                </div>
            </div>`;
      }

      let protocolHtml = '';
      if (protocol) {
        protocolHtml = `
            <div style="flex: 1; min-width: 100px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${protocol}</div>
            </div>`;
      }

      let reportBodyHtml = '';
      if (technicalContent) {
        reportBodyHtml = `
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="detail-pre" style="color: #ddd; font-size: 0.85em;">${renderMarkdown(technicalContent)}</div>
            </div>
        `;
      } else {
        reportBodyHtml = `
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="detail-pre" style="color: #fff;">${renderMarkdown(body)}</div>
            </div>
        `;
      }

      detailsContent = `
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Priority</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; font-weight: bold; color: ${priority === 'high' || priority === 'critical' ? '#ff4d4d' : priority === 'medium' ? '#ffa500' : '#888'}">
                            ${priority}
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${category}</div>
                    </div>
                    ${protocolHtml}
                    ${generatedByHtml}
                    ${relatedEventsHtml}
                </div>

                ${reportBodyHtml}
            `;


      const tempDiv = document.createElement('div');
      tempDiv.className = `event-item notification-item ${borderClass} ${readClass} ${expandedClass} cursor-pointer priority-${priority}`;
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

      const summary = `${protocol ? protocol.charAt(0).toUpperCase() + protocol.slice(1) : 'Guardian'} Alert: ${summaryContent || title}`;
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
                    <div class="event-service">
                        DEXTER ${isAlert ? '<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>' : ''}
                    </div>
                    <div class="event-message">${summary}</div>
                    <div class="event-details" style="${detailsStyle}">
                        ${detailsContent}
                    </div>
                </div>
            `;

      // Prevent close on detail interaction
      const detailsContentEl = tempDiv.querySelector('.event-details');
      if (detailsContentEl) {
        detailsContentEl.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }

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
  }
}

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
    clearBtn.onclick = async () => {
      if (!confirm("Are you sure you want to delete all alerts from the backend?")) return;

      clearBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Clearing...";
      try {
        await smartFetch('/events?type=system.notification.generated', { method: 'DELETE' });

        const longAgo = Date.now() - (48 * 60 * 60 * 1000);
        currentFilteredAlerts.forEach(notif => {
          localStorage.setItem(`alert_read_ts_${notif.id}`, longAgo.toString());
        });
        activeExpandedIds.clear();
        updateAlertsTab(true);
      } catch (e) {
        console.error("Failed to clear alerts:", e);
      } finally {
        clearBtn.innerHTML = "<i class='bx bx-trash'></i> Clear";
      }
    };
    clearBtn.dataset.listenerAttached = "true";
  }
}

export async function checkBackgroundAlerts() {
  const url = `/events?ml=1000&format=json&event.type=system.notification.generated`;
  try {
    const response = await smartFetch(url);
    if (!response.ok) return;
    const data = await response.json();
    const allAlerts = data.events || [];

    let unreadCount = 0;
    allAlerts.forEach(event => {
      let evtData = event.event;
      if (typeof evtData === 'string') {
        try { evtData = JSON.parse(evtData); } catch (e) { evtData = {}; }
      }
      const priority = (evtData.priority || 'low').toLowerCase();
      if (priority === 'low') return;

      const readTS = localStorage.getItem(`alert_read_ts_${event.id}`);
      if (!readTS) unreadCount++;
    });

    setUnreadAlerts(unreadCount);
  } catch (e) {
    // Silent fail in background
  }
}
