// Progress View - Mission Control for Dexter's Cognition
import { smartFetch, isPublicMode, ansiToHtml } from '../core/utils.ts';

/**
 * FABRICATOR LIVE STREAMING SYSTEM
 */

let fabLiveLogs: string[] = [];
const MAX_FAB_LOGS = 200;
let eventSource: EventSource | null = null;

export const getFabricatorLiveContent = () => {
  return `
    <div id="fabricator-live-root" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; background: #000;">
        <div id="fabricator-standby" class="progress-standby" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="radar-container">
                <div class="orbit-ring orbit-ring-1"></div>
                <div class="orbit-ring orbit-ring-2"></div>
                <div class="radar-brain"><i class='bx bx-brain'></i></div>
            </div>
            <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
            <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto; text-align: center;">
                Dexter is currently monitoring system health. <br>
                Fabricator CLI self-instance is idle.
            </p>
        </div>

        <div id="fabricator-terminal" class="thinking-stream-container" style="flex: 1; display: none; flex-direction: column; margin: 0; border-radius: 0; border: none;">
            <div class="terminal-header" style="background: #1a1a1a; padding: 8px 15px;">
                <div class="terminal-controls">
                    <div class="terminal-dot" style="background: #ff5f56;"></div>
                    <div class="terminal-dot" style="background: #ffbd2e;"></div>
                    <div class="terminal-dot" style="background: #27c93f;"></div>
                </div>
                <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 1px;">fabricator_cli_self.sh</div>
            </div>
            <div id="fabricator-terminal-output" class="terminal-content" style="flex: 1; overflow-y: auto; padding: 15px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; line-height: 1.4; color: #e0e0e0; background: #000;">
                <!-- Live logs will be injected here -->
            </div>
        </div>
    </div>
  `;
};

export function startFabricatorLiveStream() {
  const root = document.getElementById('fabricator-live-root');
  if (!root) return;

  // Clear previous logs
  fabLiveLogs = [];
  const terminalOutput = document.getElementById('fabricator-terminal-output');
  if (terminalOutput) terminalOutput.innerHTML = '';

  if (isPublicMode()) {
    // PUBLIC MODE: Use Cloud Pulse / Sync Data
    startPublicSync();
  } else {
    // LOCAL MODE: Use SSE from Event Service
    startLocalSSE();
  }
}

async function startPublicSync() {
  // In public mode, we poll the /fabricator/live endpoint which smartFetch redirects to the cache
  const updateFromCache = async () => {
    try {
      const response = await smartFetch('/fabricator/live');
      if (!response.ok) return;

      const data = await response.json();
      if (data && data.buffer) {
        fabLiveLogs = data.buffer;
        renderFabLogs();
      }
    } catch (e) {
      console.error('Failed to sync fabricator live from cache:', e);
    }
  };

  // Initial fetch
  await updateFromCache();

  // Update every 5 seconds in public mode (since dashboard snapshot updates every 60s,
  // but we want to be responsive to cache changes)
  const interval = setInterval(() => {
    if (!document.getElementById('fabricator-live-root')) {
      clearInterval(interval);
      return;
    }
    updateFromCache();
  }, 5000);
}

function startLocalSSE() {
  if (eventSource) eventSource.close();

  // Use the event service URL directly for SSE
  eventSource = new EventSource('http://127.0.0.1:8100/fabricator/live');

  eventSource.onmessage = (event) => {
    // SSE data is already escaped newlines, we need to unescape if we want to treat as raw chunks
    // but ansiToHtml handles escaping for display.
    const chunk = event.data.replace(/\\n/g, '\n');
    fabLiveLogs.push(chunk);
    if (fabLiveLogs.length > MAX_FAB_LOGS) fabLiveLogs.shift();

    renderFabLogs();
  };

  eventSource.onerror = (err) => {
    console.error('Fabricator SSE Error:', err);
    eventSource?.close();
    // Retry after 5s
    setTimeout(() => {
      if (document.getElementById('fabricator-live-root')) startLocalSSE();
    }, 5000);
  };

  // Close SSE when modal is closed (detected by root element removal)
  const checkRemoval = setInterval(() => {
    if (!document.getElementById('fabricator-live-root')) {
      eventSource?.close();
      eventSource = null;
      clearInterval(checkRemoval);
    }
  }, 1000);
}

function renderFabLogs() {
  const terminal = document.getElementById('fabricator-terminal');
  const standby = document.getElementById('fabricator-standby');
  const output = document.getElementById('fabricator-terminal-output');

  if (!terminal || !standby || !output) return;

  if (fabLiveLogs.length > 0) {
    terminal.style.display = 'flex';
    standby.style.display = 'none';

    // We combine all logs and convert ANSI to HTML
    const fullText = fabLiveLogs.join('');
    output.innerHTML = ansiToHtml(fullText) || '';
    output.scrollTop = output.scrollHeight;
  } else {
    terminal.style.display = 'none';
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
