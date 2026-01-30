// Events Timeline Logic
import {
  createPlaceholderMessage,
  updateTabTimestamp,
  escapeHtml,
  smartFetch,
  renderMarkdown,
  isPublicMode,
} from '../core/utils.ts';
import { formatEventSummary } from '../core/templates.ts';

export const getEventsContent = () => `
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all" title="All Events"><i class='bx bx-list-ul'></i></button>
            <button class="notif-action-btn filter-btn ${currentFilter === 'messaging' ? 'active' : ''}" data-filter="messaging" title="Messaging"><i class='bx bx-message-square-detail'></i></button>
            <button class="notif-action-btn filter-btn ${currentFilter === 'system' ? 'active' : ''}" data-filter="system" title="System"><i class='bx bx-cog'></i></button>
            <button class="notif-action-btn filter-btn ${currentFilter === 'cognitive' ? 'active' : ''}" data-filter="cognitive" title="Cognitive"><i class='bx bx-brain'></i></button>
            <button class="notif-action-btn filter-btn ${currentFilter === 'moderation' ? 'active' : ''}" data-filter="moderation" title="Moderation"><i class='bx bx-shield-quarter'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="events-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="events-clear" class="notif-action-btn danger" style="${isPublicMode() ? 'display: none;' : ''}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    
    <div id="timeline-view-container">
        <div id="events-timeline" class="events-timeline">
            <div class="tab-placeholder">
                <i class='bx bx-calendar-event placeholder-icon'></i>
                <p class="placeholder-message">Loading events...</p>
            </div>
        </div>
    </div>
`;

export let lastEventsUpdate: number | null = null;

// Track expanded state globally within the module
const activeExpandedIds = new Set<string>();
let currentFilteredEvents: any[] = [];
let currentFilter = 'all';

const CATEGORIES: Record<string, string[]> = {
  messaging: [
    'message_received',
    'messaging.user.sent_message',
    'messaging.bot.sent_message',
    'messaging.user.transcribed',
    'voice_transcribed',
    'bot_response',
    'messaging.user.joined_voice',
    'messaging.user.left_voice',
    'messaging.bot.joined_voice',
    'messaging.bot.voice_response',
    'messaging.user.speaking.started',
    'messaging.user.speaking.stopped',
    'messaging.webhook.message',
  ],
  system: [
    'system.cli.command',
    'system.cli.status',
    'system.status.change',
    'metric_recorded',
    'log_entry',
    'error_occurred',
    'webhook.processed',
    'messaging.bot.status_update',
    'messaging.user.joined_server',
    'system.test.completed',
    'system.build.completed',
    'system.roadmap.created',
    'system.roadmap.updated',
    'system.process.registered',
    'system.process.unregistered',
  ],
  cognitive: [
    'engagement.decision',
    'system.analysis.audit',
    'system.blueprint.generated',
    'analysis.link.completed',
    'analysis.visual.completed',
    'analysis.router.decision',
    'analysis.user.message_signals',
    'system.cognitive.model_inference',
  ],
  moderation: ['moderation.explicit_content.deleted'],
};

const EVENT_ICONS: Record<string, string> = {
  message_received: 'bx-message-detail',
  'messaging.user.sent_message': 'bx-message-rounded-dots',
  'messaging.bot.sent_message': 'bx-bot',
  'messaging.user.transcribed': 'bx-microphone',
  voice_transcribed: 'bx-microphone',
  'messaging.user.joined_voice': 'bx-phone-incoming',
  'messaging.user.left_voice': 'bx-phone-outgoing',
  'messaging.webhook.message': 'bx-cloud-lightning',
  'system.cli.command': 'bx-terminal',
  'system.cli.status': 'bx-info-circle',
  'system.test.completed': 'bx-check-shield',
  'system.build.completed': 'bx-package',
  'system.roadmap.created': 'bx-map-pin',
  'system.roadmap.updated': 'bx-map-alt',
  'system.process.registered': 'bx-play-circle',
  'system.process.unregistered': 'bx-stop-circle',
  error_occurred: 'bx-error-alt',
  'engagement.decision': 'bx-brain',
  'system.analysis.audit': 'bx-search-alt',
  'system.blueprint.generated': 'bx-paint',
  'analysis.link.completed': 'bx-link',
  'analysis.visual.completed': 'bx-image',
  'analysis.router.decision': 'bx-git-branch',
  'analysis.user.message_signals': 'bx-pulse',
  'moderation.explicit_content.deleted': 'bx-shield-x',
  'system.status.change': 'bx-refresh',
  metric_recorded: 'bx-line-chart',
  'system.cognitive.model_inference': 'bx-brain',
};

function getEventCategory(type: string) {
  for (const [cat, types] of Object.entries(CATEGORIES)) {
    if (types.includes(type)) return cat;
  }
  return 'system'; // Default
}

function getEventIcon(type: string) {
  return EVENT_ICONS[type] || 'bx-square-rounded';
}

export async function updateEventsTimeline(forceReRender = false) {
  const eventsContainer = document.getElementById('events-timeline');
  if (!eventsContainer) return;

  // Attach button listeners if not already attached
  attachEventActionListeners();

  // Fetch MORE events if we are filtering, to ensure we have enough data
  const fetchCount = currentFilter === 'all' ? 100 : 250;
  let url = `/events?ml=${fetchCount}&format=json&exclude_types=system.process.registered,system.process.unregistered`;
  if (currentFilter !== 'all') {
    url += `&category=${currentFilter}`;
  }

  try {
    const response = await smartFetch(url);
    if (!response.ok) throw new Error('Service unreachable');

    const data = await response.json();
    const allEvents = data.events || [];

    // UI ONLY: Filter out primary structural events that belong in dedicated windows
    currentFilteredEvents = allEvents.filter((e: any) => {
      let ed = e.event;
      if (typeof ed === 'string') {
        try {
          ed = JSON.parse(ed);
        } catch {
          return true;
        }
      }
      const type = ed.type;
      if (type === 'system.blueprint.generated' || type === 'system.notification.generated')
        return false;
      return true;
    });

    lastEventsUpdate = Date.now();
    updateTabTimestamp(1, lastEventsUpdate); // Index 1 in mainWindow

    if (currentFilteredEvents.length === 0) {
      eventsContainer.innerHTML = createPlaceholderMessage(
        'empty',
        'No events found for this filter.'
      );
      return;
    }

    if (forceReRender) {
      eventsContainer.innerHTML = '';
    }

    const createEventElement = (event: any) => {
      let eventData = event.event;
      if (typeof eventData === 'string') {
        try {
          eventData = JSON.parse(eventData);
        } catch (e) {
          return null;
        }
      }

      const type = eventData.type;
      const category = getEventCategory(type);
      const icon = getEventIcon(type);

      const isExpandable =
        type === 'engagement.decision' ||
        type === 'messaging.bot.sent_message' ||
        type === 'messaging.bot.voice_response' ||
        type === 'messaging.user.sent_message' ||
        type === 'moderation.explicit_content.deleted' ||
        type === 'analysis.link.completed' ||
        type === 'analysis.visual.completed' ||
        type === 'analysis.router.decision' ||
        type === 'analysis.user.message_signals' ||
        type === 'system.cli.command' ||
        type === 'system.analysis.audit' ||
        type === 'system.cognitive.model_inference' ||
        type === 'system.test.completed' ||
        type === 'error_occurred' ||
        type === 'system.cli.status' ||
        type === 'system.attention.expired' ||
        type.startsWith('system.roadmap') ||
        type.startsWith('system.process');
      let borderClass = 'event-border-grey';
      if (isExpandable) {
        if (type === 'moderation.explicit_content.deleted' || type === 'error_occurred') {
          borderClass = 'event-border-red';
        } else if (
          type === 'analysis.link.completed' ||
          type === 'analysis.visual.completed' ||
          type === 'analysis.router.decision' ||
          type === 'system.analysis.audit' ||
          type === 'analysis.user.message_signals'
        ) {
          borderClass = 'event-border-purple';
        } else if (type === 'engagement.decision') {
          borderClass = 'event-border-purple';
        } else if (type === 'system.attention.expired') {
          borderClass = 'event-border-orange';
        } else if (type === 'system.cli.command' || type === 'system.cli.status') {
          borderClass = 'event-border-orange';
        } else if (type === 'system.test.completed') {
          const passed =
            eventData.test?.status === 'OK' &&
            eventData.lint?.status === 'OK' &&
            eventData.format?.status === 'OK';
          borderClass = passed ? 'event-border-blue' : 'event-border-red';
        } else {
          borderClass = 'event-border-blue';
        }
      }
      const cursorClass = isExpandable ? 'cursor-pointer' : '';

      const isExpanded = activeExpandedIds.has(event.id);
      const expandedClass = isExpanded ? 'expanded' : '';
      const detailsStyle = isExpanded ? 'display: block;' : 'display: none;';

      const utcDate = new Date(event.timestamp * 1000);
      const timeStr = utcDate.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const dateStr = utcDate.toLocaleDateString(navigator.language, {
        month: 'short',
        day: 'numeric',
      });

      const summary = formatEventSummary(type, eventData);
      const userLevel = eventData.user_level
        ? `<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${eventData.user_level})</span>`
        : '';

      let detailsHtml = '';
      if (isExpandable) {
        let detailsContent = '';
        if (type === 'engagement.decision') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${eventData.engagement_model || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Input Prompt')}
                            <pre class="detail-pre">${eventData.input_prompt || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Context History')}
                            <pre class="detail-pre">${eventData.context_history || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Raw Engagement Output')}
                            <pre class="detail-pre">${eventData.engagement_raw || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'system.cognitive.model_inference') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${eventData.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Method:</span>
                            <span class="detail-value" style="text-transform: uppercase;">${eventData.method}</span>
                        </div>
                        ${stylisedHeader('Inference Metrics')}
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.prompt_eval_count || 0} / ${eventData.eval_count || 0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${eventData.duration_ms || 0}ms</div>
                            </div>
                        </div>
                    `;
        } else if (type === 'system.attention.expired') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          const idleTime = eventData.timestamp - eventData.last_active;
          const idleMinutes = Math.floor(idleTime / 60);

          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${eventData.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${idleMinutes} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Context (Last Input)')}
                            <div class="detail-pre">${renderMarkdown(eventData.last_input || 'None')}</div>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Thought Process (Last Output)')}
                            <div class="detail-pre">${renderMarkdown(eventData.last_output || 'None')}</div>
                        </div>
                    `;
        } else if (type === 'messaging.bot.sent_message') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;

          let embedHtml = '';
          if (eventData.embed) {
            const e = eventData.embed;
            const title = e.title
              ? `<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${escapeHtml(e.title)}</div>`
              : '';
            const desc = e.description
              ? `<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${renderMarkdown(e.description)}</div>`
              : '';
            const fields = (e.fields || [])
              .map(
                (f: any) => `
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${escapeHtml(f.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${renderMarkdown(f.value)}</div>
              </div>
            `
              )
              .join('');

            embedHtml = `
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${e.color ? '#' + e.color.toString(16).padStart(6, '0') : '#bb86fc'}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${title}
                ${desc}
                ${fields}
              </div>
            `;
          }

          let metricsHtml = '';
          if (eventData.eval_count) {
            metricsHtml = `
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.prompt_count} / ${eventData.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${eventData.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.prompt_duration_ms}ms / ${eventData.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `;
          }

          let historyHtml = '';
          if (eventData.chat_history && eventData.chat_history.length > 0) {
            const totalTurns = eventData.chat_history.length;
            const slides = eventData.chat_history
              .map((m: any, index: number) => {
                let roleName = m.name ? m.name.toUpperCase() : m.role.toUpperCase();
                if (!m.name && roleName === 'ASSISTANT') roleName = 'DEXTER';

                const roleColor =
                  m.role === 'user' ? '#03dac6' : m.role === 'system' ? '#ffb74d' : '#bb86fc';
                const displayStyle = index === totalTurns - 1 ? 'block' : 'none'; // Default to showing Dexter's response
                return `
                                <div class="history-slide" data-index="${index}" style="display: ${displayStyle};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${roleColor}; letter-spacing: 1px; font-weight: bold;">${roleName}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${index + 1} of ${totalTurns}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${escapeHtml(m.content)}</div>
                                </div>
                            `;
              })
              .join('');

            historyHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader('Turn-by-Turn History')}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${slides}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `;
          }

          detailsContent = `
                        ${metricsHtml}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${eventData.response_model || 'N/A'}</span>
                        </div>
                        ${embedHtml}
                        ${
                          historyHtml ||
                          `
                            <div class="event-detail-block">
                                ${stylisedHeader('Raw Input (Prompt)')}
                                <pre class="detail-pre">${eventData.raw_input || 'None'}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${stylisedHeader('Raw Response Output')}
                                <pre class="detail-pre">${eventData.response_raw || 'None'}</pre>
                            </div>
                        `
                        }
                    `;
        } else if (type === 'messaging.bot.voice_response') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;

          let historyHtml = '';
          // Parse raw input if it contains the chat history array structure
          // The backend sends raw_input as a string representation of the array
          let parsedHistory = [];
          const rawInput = eventData.raw_input || '';
          // Heuristic parsing for the Go-formatted log output: [{role ...} {role ...}]
          if (rawInput.startsWith('[{') && rawInput.endsWith('}]')) {
            // This is a rough parse for display purposes. Ideally backend sends structured history.
            // We'll rely on the backend update if possible, but for now we try to extract
            // segments that look like message objects.
            const matches = rawInput.match(/{.*?}/g);
            if (matches) {
              parsedHistory = matches.map((m: string) => {
                // Remove outer braces
                const content = m.substring(1, m.length - 1);
                // Extract role (first word)
                const firstSpace = content.indexOf(' ');
                const role = content.substring(0, firstSpace);
                // Extract content (rest)
                let text = content.substring(firstSpace + 1);
                // Remove trailing [] which seems to be an empty Name field in Go struct
                text = text.replace(/\[\]$/, '').trim();
                return { role, content: text };
              });
            }
          }

          // Append the bot's actual response as the final turn
          if (parsedHistory.length > 0 && eventData.response_raw) {
            parsedHistory.push({ role: 'assistant', content: eventData.response_raw });
          }

          if (parsedHistory.length > 0) {
            const totalTurns = parsedHistory.length;
            const slides = parsedHistory
              .map((m: any, index: number) => {
                let roleName = m.role.toUpperCase();
                if (roleName === 'ASSISTANT') roleName = 'DEXTER';

                const roleColor =
                  m.role === 'user' ? '#03dac6' : m.role === 'system' ? '#ffb74d' : '#bb86fc';
                const displayStyle = index === totalTurns - 1 ? 'block' : 'none'; // Default to showing Dexter's response
                return `
                                <div class="history-slide" data-index="${index}" style="display: ${displayStyle};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${roleColor}; letter-spacing: 1px; font-weight: bold;">${roleName}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${index + 1} of ${totalTurns}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${escapeHtml(m.content)}</div>
                                </div>
                            `;
              })
              .join('');

            historyHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader('Turn-by-Turn History')}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${slides}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `;
          }

          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${eventData.response_model || 'N/A'}</span>
                        </div>
                        ${historyHtml}
                        <div class="event-detail-block">
                            ${stylisedHeader('Raw Input (Prompt)')}
                            <pre class="detail-pre">${eventData.raw_input || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Raw Response Output')}
                            <pre class="detail-pre">${eventData.response_raw || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'analysis.user.message_signals') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          const s = eventData.signals || {};
          const sentimentColor =
            s.sentiment > 0.3 ? '#03dac6' : s.sentiment < -0.3 ? '#cf6679' : '#aaa';

          detailsContent = `
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${sentimentColor}; font-weight: bold;">${s.sentiment?.toFixed(2) || 0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${s.intent || 'N/A'}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.technical_depth || 0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${s.mood || 'N/A'}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Extracted Topics')}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(s.topics || []).map((t: string) => `<span class="profile-badge">${t}</span>`).join('') || '<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${stylisedHeader('Raw Model Output')}
                            <pre class="detail-pre">${escapeHtml(eventData.raw_output) || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'moderation.explicit_content.deleted') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${eventData.reason || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Raw Model Output')}
                            <pre class="detail-pre">${escapeHtml(eventData.raw_output) || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'analysis.link.completed') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${eventData.url}" target="_blank" class="attachment-link">${eventData.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${escapeHtml(eventData.title) || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Description')}
                            <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Content Summary')}
                            <pre class="detail-pre">${escapeHtml(eventData.summary) || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'analysis.visual.completed') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          let imageHtml = '';
          if (eventData.base64_preview) {
            imageHtml = `<div class="event-detail-block"><img src="data:image/jpeg;base64,${eventData.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`;
          } else if (eventData.url) {
            imageHtml = `<div class="event-detail-block"><img src="${eventData.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`;
          } else {
            // Placeholder for public mode or missing images
            imageHtml = `
              <div class="event-detail-block" style="margin-top: 10px; height: 100px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-low-vision' style="font-size: 2rem; margin-bottom: 5px; opacity: 0.3;"></i>
                <span style="font-size: 0.65em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">Visual Data Restricted</span>
              </div>`;
          }

          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${eventData.filename}</span>
                        </div>
                        ${imageHtml}
                        <div class="event-detail-block">
                            ${stylisedHeader('Visual Description')}
                            <pre class="detail-pre">${escapeHtml(eventData.description) || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'analysis.router.decision') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${eventData.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${eventData.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${eventData.url}" target="_blank" class="attachment-link">${eventData.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Raw Model Output')}
                            <pre class="detail-pre">${escapeHtml(eventData.raw_output) || 'None'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Input Context')}
                            <pre class="detail-pre">${escapeHtml(eventData.raw_input) || 'None'}</pre>
                        </div>
                    `;
        } else if (type === 'system.cli.command') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${eventData.exit_code !== undefined ? eventData.exit_code : 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Output')}
                            <pre class="detail-pre">${escapeHtml(eventData.output) || 'No output recorded.'}</pre>
                        </div>
                    `;
        } else if (type === 'system.analysis.audit') {
          const statusColor = eventData.success ? '#03dac6' : '#ff4d4d';
          const statusText = eventData.success ? 'SUCCESS' : 'FAILED';
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;

          let errorHtml = '';
          if (eventData.error) {
            errorHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader('Error')}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${escapeHtml(eventData.error)}</pre>
                            </div>
                        `;
          }

          let historyHtml = '';
          if (eventData.chat_history && eventData.chat_history.length > 0) {
            const totalTurns = eventData.chat_history.length;
            const slides = eventData.chat_history
              .map((m: any, index: number) => {
                let roleName = m.name ? m.name.toUpperCase() : m.role.toUpperCase();
                if (!m.name && roleName === 'USER') roleName = 'SYSTEM';
                if (!m.name && roleName === 'ASSISTANT') roleName = 'AGENT';

                const roleColor =
                  m.role === 'user' ? '#03dac6' : m.role === 'system' ? '#ffb74d' : '#bb86fc';
                const displayStyle = index === 0 ? 'block' : 'none';
                return `
                                <div class="history-slide" data-index="${index}" style="display: ${displayStyle};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${roleColor}; letter-spacing: 1px; font-weight: bold;">${roleName}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${index + 1} of ${totalTurns}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${escapeHtml(m.content)}</div>
                                </div>
                            `;
              })
              .join('');

            historyHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader('Turn-by-Turn History')}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${slides}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${totalTurns <= 1 ? 'disabled' : ''}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `;
          }

          let correctionsHtml = '';
          if (eventData.corrections && eventData.corrections.length > 0) {
            const correctionItems = eventData.corrections
              .map(
                (c: any, _i: number) => `
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${c.type}] ${c.guidance}</div>
                                ${c.snippet ? `<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${escapeHtml(c.snippet)}</div>` : ''}
                            </div>
                        `
              )
              .join('');

            correctionsHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader(`Corrections (${eventData.corrections.length})`)}
                                ${correctionItems}
                            </div>
                        `;
          }

          let resultsHtml = '';
          if (eventData.parsed_results && eventData.parsed_results.length > 0) {
            const resultItems = eventData.parsed_results
              .map(
                (r: any) => `
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${escapeHtml(r.title)}</div>
                                <div style="color: #ddd;">${escapeHtml(r.summary)}</div>
                            </div>
                        `
              )
              .join('');

            resultsHtml = `
                            <div class="event-detail-block">
                                ${stylisedHeader('Parsed Results')}
                                ${resultItems}
                            </div>
                        `;
          }

          detailsContent = `
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.agent_name || 'Guardian'}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${eventData.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${statusColor}; font-weight: bold;">${statusText} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${eventData.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${eventData.model}</div>
                            </div>
                        </div>
                        ${errorHtml}
                        ${resultsHtml}
                        ${correctionsHtml}
                        ${historyHtml}
                    `;
        } else if (type === 'system.test.completed') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${eventData.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${eventData.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Format')}
                            <pre class="detail-pre">${eventData.format?.status || 'N/A'}: ${eventData.format?.message || 'OK'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Lint')}
                            <pre class="detail-pre">${eventData.lint?.status || 'N/A'}: ${eventData.lint?.message || 'OK'}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Tests')}
                            <pre class="detail-pre">${eventData.test?.status || 'N/A'}: ${eventData.test?.details || eventData.test?.message || 'OK'}</pre>
                        </div>
                    `;
        } else if (type === 'error_occurred') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${eventData.severity || 'high'}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Error Message')}
                            <pre class="detail-pre" style="color: #ff4d4d;">${escapeHtml(eventData.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Context')}
                            <pre class="detail-pre">${JSON.stringify(eventData.context || {}, null, 2)}</pre>
                        </div>
                    `;
        } else if (type === 'system.cli.status') {
          const stylisedHeader = (text: string) =>
            `<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${text}</h5>`;
          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${eventData.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${stylisedHeader('Message')}
                            <pre class="detail-pre">${escapeHtml(eventData.message)}</pre>
                        </div>
                    `;
        } else if (type === 'messaging.user.sent_message') {
          let attachmentsHtml = '';
          if (eventData.attachments && eventData.attachments.length > 0) {
            const attachmentsList = eventData.attachments
              .map((att: any) => {
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
              })
              .join('');

            attachmentsHtml = `
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${attachmentsList}</div>
                            </div>`;
          }

          detailsContent = `
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${eventData.message_id || 'N/A'}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${eventData.content || '(empty)'}</pre>
                        </div>
                        ${attachmentsHtml}
                    `;
        }

        detailsHtml = `
                    <div class="event-details" style="${detailsStyle}">
                        ${detailsContent}
                    </div>
                `;
      }

      const tempDiv = document.createElement('div');
      tempDiv.className = `event-item ${borderClass} ${cursorClass} ${expandedClass}`;
      tempDiv.dataset.eventId = event.id;
      tempDiv.onclick = function (this: GlobalEventHandlers, _e: MouseEvent) {
        if (!isExpandable) return;
        const el = this as HTMLElement;
        const isCurrentlyExpanded = el.classList.contains('expanded');
        if (isCurrentlyExpanded) {
          el.classList.remove('expanded');
          activeExpandedIds.delete(event.id);
          const details = el.querySelector('.event-details') as HTMLElement;
          if (details) details.style.display = 'none';
        } else {
          el.classList.add('expanded');
          activeExpandedIds.add(event.id);
          const details = el.querySelector('.event-details') as HTMLElement;
          if (details) details.style.display = 'block';
        }
      };

      tempDiv.innerHTML = `
                <div class="event-time">
                    <span class="event-time-main">${timeStr}</span>
                    <span class="event-date">${dateStr}</span>
                </div>
                <div class="event-icon"><i class='bx ${icon}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${category}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${category}</span>
                        ${event.service} ${userLevel}
                    </div>
                    <div class="event-message">${summary}</div>
                    ${detailsHtml}
                </div>
            `;

      // Prevent close on detail interaction
      const detailsContentEl = tempDiv.querySelector('.event-details');
      if (detailsContentEl) {
        detailsContentEl.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }

      if (isExpandable) {
        const closeBtn = tempDiv.querySelector('.close-details-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = (e.target as HTMLElement).closest('.event-item');
            if (item) {
              item.classList.remove('expanded');
              activeExpandedIds.delete(event.id);
              const details = item.querySelector('.event-details') as HTMLElement;
              if (details) details.style.display = 'none';
            }
          });
        }
      }

      // Carousel Logic
      const prevBtn = tempDiv.querySelector('.prev-btn') as HTMLButtonElement;
      const nextBtn = tempDiv.querySelector('.next-btn') as HTMLButtonElement;
      if (prevBtn && nextBtn) {
        let currentSlide = 0;
        const slides = Array.from(tempDiv.querySelectorAll('.history-slide')) as HTMLElement[];
        const total = slides.length;

        const updateCarousel = () => {
          slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
          });
          prevBtn.disabled = currentSlide === 0;
          nextBtn.disabled = currentSlide === total - 1;

          // Update opacity/style for disabled state
          prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
          nextBtn.style.opacity = currentSlide === total - 1 ? '0.5' : '1';
        };

        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent toggling the event expansion
          if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
          }
        });

        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (currentSlide < total - 1) {
            currentSlide++;
            updateCarousel();
          }
        });

        // Initial state check
        updateCarousel();
      }

      return tempDiv;
    };

    const currentChildren = Array.from(eventsContainer.children) as HTMLElement[];
    const currentMap = new Map(currentChildren.map((el) => [el.dataset.eventId, el]));
    const newIds = new Set(currentFilteredEvents.map((e) => e.id));

    // 1. Remove old events or placeholders
    currentChildren.forEach((child) => {
      const id = child.dataset.eventId;
      if (!id || !newIds.has(id)) {
        child.remove();
      }
    });

    let previousElement: HTMLElement | null = null;

    currentFilteredEvents.forEach((event, index) => {
      let el = currentMap.get(event.id) as HTMLElement;
      if (!el || forceReRender) {
        if (el) el.remove();
        el = createEventElement(event) as HTMLElement;
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
    updateTabTimestamp(1, lastEventsUpdate); // Index 1
  } catch (error) {
    console.error('Error fetching events:', error);
    if (eventsContainer.children.length === 0) {
      eventsContainer.innerHTML = createPlaceholderMessage(
        'offline',
        'Failed to load events.',
        'The event service may be offline.'
      );
    }
  }
}

function attachEventActionListeners() {
  const expandAllBtn = document.getElementById('events-expand-all');
  const closeAllBtn = document.getElementById('events-close-all');
  const filterContainer = document.getElementById('event-filters');

  if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
    expandAllBtn.onclick = () => {
      currentFilteredEvents.forEach((e) => activeExpandedIds.add(e.id));
      updateEventsTimeline(true);
    };
    expandAllBtn.dataset.listenerAttached = 'true';
  }

  if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
    closeAllBtn.onclick = () => {
      activeExpandedIds.clear();
      updateEventsTimeline(true);
    };
    closeAllBtn.dataset.listenerAttached = 'true';
  }

  if (filterContainer && !filterContainer.dataset.listenerAttached) {
    filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
      (btn as HTMLElement).onclick = () => {
        filterContainer
          .querySelectorAll('.filter-btn')
          .forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = (btn as HTMLElement).dataset.filter || 'all';
        updateEventsTimeline(true);
      };
    });
    filterContainer.dataset.listenerAttached = 'true';
  }

  // Force active state to match currentFilter (in case window was re-opened with cached HTML)
  if (filterContainer) {
    filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
      if ((btn as HTMLElement).dataset.filter === currentFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  const clearBtn = document.getElementById('events-clear');
  if (clearBtn && !clearBtn.dataset.listenerAttached) {
    clearBtn.onclick = async () => {
      const filterName = currentFilter === 'all' ? 'ALL' : currentFilter.toUpperCase();
      if (
        !confirm(
          `Are you sure you want to delete ${filterName} events from the backend? This cannot be undone.`
        )
      )
        return;

      clearBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i> Clearing...";
      try {
        let url = '/events';
        if (currentFilter !== 'all') {
          url += `?category=${currentFilter}`;
        } else {
          // Protect structural events from 'Clear All' in general timeline
          url += `?exclude_types=system.blueprint.generated,system.notification.generated`;
        }
        const response = await smartFetch(url, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete events');

        activeExpandedIds.clear();
        updateEventsTimeline(true);
      } catch (e) {
        console.error('Failed to clear events:', e);
        alert('Failed to clear events. Check console.');
      } finally {
        clearBtn.innerHTML = "<i class='bx bx-trash'></i> Clear";
      }
    };
    clearBtn.dataset.listenerAttached = 'true';
  }
}
