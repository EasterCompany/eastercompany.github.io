// Progress View - Mission Control for Dexter's Cognition
import { smartFetch, isPublicMode, renderMarkdown } from '../core/utils.ts';

/**
 * FABRICATOR LIVE SNAPSHOT SYSTEM
 */

let fabLiveHistory: any[] = [];
let livePollInterval: any = null;

export const getFabricatorLiveContent = () => {
  return `
    <div id="fabricator-live-root" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; background: #000;">
        <div id="fabricator-standby" class="progress-standby" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="radar-container">
                <div class="orbit-ring orbit-ring-1"></div>
                <div class="orbit-ring orbit-ring-2"></div>
                <div class="radar-brain"><i class='bx bx-brain'></i></div>
            </div>
            <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Mission Control</h3>
            <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto; text-align: center;">
                Fabricator CLI self-instance is currently idle. <br>
                Waiting for automated construction mission...
            </p>
        </div>

        <div id="fabricator-chat-view" class="thinking-stream-container" style="flex: 1; display: none; flex-direction: column; margin: 0; border-radius: 0; border: none; background: #0a0a0a;">
            <div class="terminal-header" style="background: #1a1a1a; padding: 10px 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <div style="font-family: 'JetBrains Mono'; font-size: 0.75em; color: #03dac6; text-transform: uppercase; letter-spacing: 1.5px; font-weight: bold;">[LIVE] fabricator-self-instance</div>
            </div>
            <div id="fabricator-chat-messages" style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 20px;">
                <!-- Chat messages will be injected here -->
            </div>
        </div>
    </div>
  `;
};

export function startFabricatorLiveStream() {
  const root = document.getElementById('fabricator-live-root');
  if (!root || isPublicMode()) return;

  // Clear previous history
  fabLiveHistory = [];
  const messagesContainer = document.getElementById('fabricator-chat-messages');
  if (messagesContainer) messagesContainer.innerHTML = '';

  // LOCAL MODE ONLY: Poll every 3 seconds
  if (livePollInterval) clearInterval(livePollInterval);

  const fetchSnapshot = async () => {
    try {
      const response = await smartFetch('/fabricator/live');
      if (!response.ok) return;

      const data = await response.json();
      if (data && data.messages) {
        // Only re-render if history changed
        if (JSON.stringify(data.messages) !== JSON.stringify(fabLiveHistory)) {
          fabLiveHistory = data.messages;
          renderFabHistory();
        }
      }
    } catch (e) {
      console.error('Failed to fetch fabricator live snapshot:', e);
    }
  };

  // Initial fetch
  fetchSnapshot();

  livePollInterval = setInterval(() => {
    if (!document.getElementById('fabricator-live-root')) {
      clearInterval(livePollInterval);
      livePollInterval = null;
      return;
    }
    fetchSnapshot();
  }, 3000);
}

function renderFabHistory() {
  const chatView = document.getElementById('fabricator-chat-view');
  const standby = document.getElementById('fabricator-standby');
  const messagesContainer = document.getElementById('fabricator-chat-messages');

  if (!chatView || !standby || !messagesContainer) return;

  // Filter out system messages for a cleaner live view
  const visibleMessages = fabLiveHistory.filter(m => m.role !== 'system');

  if (visibleMessages.length > 0) {
    chatView.style.display = 'flex';
    standby.style.display = 'none';

    messagesContainer.innerHTML = visibleMessages.map(m => {
      const isUser = m.role === 'user';
      const roleName = isUser ? 'USER' : 'FABRICATOR';
      const roleColor = isUser ? '#03dac6' : '#bb86fc';
      const bgColor = isUser ? 'rgba(3, 218, 198, 0.05)' : 'rgba(187, 134, 252, 0.05)';
      const borderColor = isUser ? 'rgba(3, 218, 198, 0.1)' : 'rgba(187, 134, 252, 0.1)';

      return `
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 15px; background: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: ${roleColor}; font-size: 0.7em; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">${roleName}</span>
            </div>
            <div class="message-content" style="color: #eee; font-size: 0.9em; line-height: 1.6; font-family: 'JetBrains Mono', monospace; white-space: pre-wrap;">${renderMarkdown(m.content)}</div>
        </div>
      `;
    }).join('');

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    chatView.style.display = 'none';
    standby.style.display = 'flex';
  }
}

/**
 * MISSION CONTROL TAB SYSTEM (LEGACY/MODIFIED)
 */

export const getProgressContent = () => {
  return `
    <div id="progress-view-root" class="progress-container" style="flex: 1; overflow-y: auto;">
        <div class="progress-standby">
            <div class="radar-container">
                <div class="orbit-ring orbit-ring-1"></div>
                <div class="orbit-ring orbit-ring-2"></div>
                <div class="radar-brain"><i class='bx bx-brain'></i></div>
            </div>
            <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Mission Control</h3>
            <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto; text-align: center;">
                Monitoring system processes and active fabrication missions.
            </p>
        </div>
    </div>
  `;
};

export async function updateProgressTab() {
  // This is for the "Processes" or "Mission Control" tab, not the Live view.
  // We keep it simple or just leave it as standby since Live view is the priority.
}
