// Events Timeline Logic
import { createPlaceholderMessage, updateTabTimestamp, escapeHtml } from './utils.js';
import { formatEventSummary } from './templates.js';

export const getEventsContent = () => `<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>`;

export let lastEventsUpdate = null;

export async function updateEventsTimeline() {
    const eventsContainer = document.getElementById('events-timeline');
    if (!eventsContainer) return;
    const serviceMapString = localStorage.getItem('service_map');
    if (!serviceMapString) {
      eventsContainer.innerHTML = createPlaceholderMessage('config', 'No service map configured.', 'Upload service-map.json in Settings.');
      return;
    }
    let eventService = null;
    try {
      const serviceMapData = JSON.parse(serviceMapString);
      eventService = (serviceMapData.services?.cs || []).find(s => s.id === 'dex-event-service');
    } catch (e) { eventsContainer.innerHTML = createPlaceholderMessage('error', 'Invalid service map data.'); return; }
    if (!eventService) { eventsContainer.innerHTML = createPlaceholderMessage('error', 'Event service not found in service map.'); return; }

    const domain = eventService.domain === '0.0.0.0' ? 'localhost' : eventService.domain;
    const eventsUrl = `http://${domain}:${eventService.port}/events?ml=50&format=json&exclude_types=system.notification.generated`; // Exclude notifications from main timeline

    try {
      const expandedEventIds = new Set(
        Array.from(eventsContainer.querySelectorAll('.event-item.expanded'))
          .map(el => el.dataset.eventId)
          .filter(id => id)
      );

      const response = await fetch(eventsUrl);
      if (!response.ok) throw new Error('Service is offline or unreachable.');

      const data = await response.json();
      const events = data.events || [];

      if (events.length === 0) {
        eventsContainer.innerHTML = createPlaceholderMessage('empty', 'No events found.');
        return;
      }

      const createEventElement = (event) => {
        let eventData = event.event;
        if (typeof eventData === 'string') {
          try {
            eventData = JSON.parse(eventData);
          } catch (e) {
            return null;
          }
        }

        const type = eventData.type;
        const isExpandable = type === 'engagement.decision' || type === 'messaging.bot.sent_message' || type === 'messaging.user.sent_message' || type === 'moderation.explicit_content.deleted' || type === 'analysis.link.completed' || type === 'analysis.visual.completed' || type === 'system.cli.command';
        let borderClass = 'event-border-grey';
        if (isExpandable) {
            if (type === 'moderation.explicit_content.deleted') {
                borderClass = 'event-border-red';
            } else if (type === 'analysis.link.completed' || type === 'analysis.visual.completed') {
                borderClass = 'event-border-purple';
            } else if (type === 'system.cli.command') {
                borderClass = 'event-border-orange';
            } else {
                borderClass = 'event-border-blue';
            }
        }
        const cursorClass = isExpandable ? 'cursor-pointer' : '';

        const isExpanded = expandedEventIds.has(event.id);
        const expandedClass = isExpanded ? 'expanded' : '';
        const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

        const utcDate = new Date(event.timestamp * 1000);
        const timeStr = utcDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateStr = utcDate.toLocaleDateString(navigator.language, { month: 'short', day: 'numeric' });

        const summary = formatEventSummary(type, eventData);

        let detailsHtml = '';
        if (isExpandable) {
          let detailsContent = '';
          if (type === 'engagement.decision') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${eventData.engagement_model || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${eventData.context_history || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${eventData.engagement_raw || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'messaging.bot.sent_message') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${eventData.response_model || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${eventData.raw_input || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${eventData.response_raw || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'moderation.explicit_content.deleted') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${eventData.reason || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${escapeHtml(eventData.raw_output) || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'analysis.link.completed') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${eventData.url}" target="_blank" class="attachment-link">${eventData.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${escapeHtml(eventData.title) || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${escapeHtml(eventData.summary) || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'analysis.visual.completed') {
            let imageHtml = '';
            if (eventData.base64_preview) {
                imageHtml = `<div class="event-detail-block"><img src="data:image/jpeg;base64,${eventData.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`;
            } else if (eventData.url) {
                imageHtml = `<div class="event-detail-block"><img src="${eventData.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`;
            }

            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${eventData.filename}</span>
                            </div>
                            ${imageHtml}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                            </div>
                        `;
          } else if (type === 'system.cli.command') {
            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Command:</span>
                                <span class="detail-value">dex ${eventData.command || 'unknown'}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Arguments:</span>
                                <span class="detail-value">${eventData.args || 'None'}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Status:</span>
                                <span class="detail-value">${eventData.status || 'unknown'}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Duration:</span>
                                <span class="detail-value">${eventData.duration || 'N/A'}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Exit Code:</span>
                                <span class="detail-value">${eventData.exit_code !== undefined ? eventData.exit_code : 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Output:</span>
                                <pre class="detail-pre">${escapeHtml(eventData.output) || 'No output recorded.'}</pre>
                            </div>
                        `;
          } else if (type === 'messaging.user.sent_message') {
            let attachmentsHtml = '';
            if (eventData.attachments && eventData.attachments.length > 0) {
              const attachmentsList = eventData.attachments.map(att => {
                const isImage = att.content_type && att.content_type.startsWith('image/');
                const sizeStr = (att.size / 1024).toFixed(1) + ' KB';
                return `
                                    <div class="attachment-item">
                                        ${isImage ? `<div class="attachment-thumb-container"><img src="${att.url}" alt="${att.filename}" class="attachment-thumb"></div>` : `<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${att.url}" target="_blank" class="attachment-link">${att.filename}</a>
                                            <span class="attachment-meta">${att.content_type} • ${sizeStr}</span>
                                        </div>
                                    </div>`;
              }).join('');

              attachmentsHtml = `
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${attachmentsList}</div>
                                </div>`;
            }

            detailsContent = `
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${eventData.content || '(empty)'}</pre>
                            </div>
                            ${attachmentsHtml}
                         `;
          }

          detailsHtml = `
                        <div class="event-details" style="${detailsStyle}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${detailsContent}
                        </div>
                    `;
        }

        const tempDiv = document.createElement('div');
        tempDiv.className = `event-item ${borderClass} ${cursorClass} ${expandedClass}`;
        tempDiv.dataset.eventId = event.id;
        tempDiv.onclick = function (e) {
          if (!isExpandable) return;
          this.classList.toggle('expanded');
          const details = this.querySelector('.event-details');
          if (details) details.style.display = details.style.display === 'none' ? 'block' : 'none';
        };

        tempDiv.innerHTML = `
                    <div class="event-time">
                        <span class="event-time-main">${timeStr}</span>
                        <span class="event-date">${dateStr}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${event.service}</div>
                        <div class="event-message">${summary}</div>
                        ${detailsHtml}
                    </div>
                `;

        if (isExpandable) {
          const closeBtn = tempDiv.querySelector('.close-details-btn');
          if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              const item = e.target.closest('.event-item');
              if (item) {
                item.classList.remove('expanded');
                const details = item.querySelector('.event-details');
                if (details) details.style.display = 'none';
              }
            });
          }
        }

        return tempDiv;
      };

      const currentChildren = Array.from(eventsContainer.children);
      const currentMap = new Map(currentChildren.map(el => [el.dataset.eventId, el]));
      const newIds = new Set(events.map(e => e.id));

      // 1. Remove old events not in the new list
      currentChildren.forEach(child => {
        if (!child.dataset.eventId || !newIds.has(child.dataset.eventId)) {
          child.remove();
        }
      });

      let previousElement = null;

      events.forEach((event, index) => {
        let el = currentMap.get(event.id);
        if (!el) {
          el = createEventElement(event);
          if (!el) return;
        }
        if (index === 0) {
          if (eventsContainer.firstElementChild !== el) {
            eventsContainer.prepend(el);
          }
        } else {
          if (previousElement && previousElement.nextElementSibling !== el) {
            previousElement.after(el);
          }
        }
        previousElement = el;
      });

      lastEventsUpdate = Date.now();
      updateTabTimestamp(2, lastEventsUpdate); // Index 2

    } catch (error) {
      console.error('Error fetching events:', error);
      if (eventsContainer.children.length === 0) {
        eventsContainer.innerHTML = createPlaceholderMessage('offline', 'Failed to load events.', 'The event service may be offline or unreachable.');
      }
    }
  }
