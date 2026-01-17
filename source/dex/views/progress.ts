// Progress View - Mission Control for Dexter's Cognition
import { escapeHtml } from '../core/utils.ts';

type ProgressState = 'STANDBY' | 'ACTIVE' | 'COMPLETED';

let currentState: ProgressState = 'STANDBY';
let lastRenderedState: ProgressState | null = null;

let liveLogs: { time: string; msg: string }[] = [];
let activeTask: { title: string; progress: number } | null = null;
let lastMissionSummary: { duration: string; steps: number; result: string } | null = null;

/**
 * Main entry point for the Progress Tab content.
 * Returns a persistent root container.
 */
export const getProgressContent = () => {
  return `
    <div id="progress-view-root" class="progress-container">
        <!-- Initial render will happen here -->
        ${renderStateHTML()}
    </div>
  `;
};

/**
 * Renders the HTML string for a specific state.
 */
function renderStateHTML() {
  switch (currentState) {
    case 'ACTIVE':
      return renderActiveState();
    case 'COMPLETED':
      return renderCompletedState();
    case 'STANDBY':
    default:
      return renderStandbyState();
  }
}

function renderStandbyState() {
  return `
    <div class="progress-standby">
        <div class="radar-container">
            <!-- 
               These rings are now part of a PERSISTENT DOM. 
               They will never be removed/re-added while in Standby. 
            -->
            <div class="orbit-ring orbit-ring-1"></div>
            <div class="orbit-ring orbit-ring-2"></div>
            <div class="radar-brain"><i class='bx bx-brain'></i></div>
        </div>
        <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
        <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5;">
            Dexter is currently monitoring system health. <br>
            No active missions in progress.
        </p>
        <div style="margin-top: 30px; display: flex; gap: 15px;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-start'))">
                <i class='bx bx-play'></i> Simulate Mission
            </button>
        </div>
    </div>
  `;
}

function renderActiveState() {
  const logLines = liveLogs
    .map(
      (log) => `
    <div class="terminal-line">
        <span class="line-time">${log.time}</span>
        <span class="line-prefix">></span>
        <span class="line-msg">${escapeHtml(log.msg)}</span>
    </div>
  `
    )
    .join('');

  return `
    <div class="active-task-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h4 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px; color: #bb86fc;">Active Mission</h4>
                <h2 id="active-task-title" style="margin: 5px 0 0 0; font-size: 1.2em;">${activeTask?.title || 'Processing...'}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div id="active-task-progress-fill" class="task-progress-fill" style="width: ${activeTask?.progress || 0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span>PHASE: IMPLEMENTATION</span>
            <span id="active-task-progress-text">${activeTask?.progress || 0}% COMPLETE</span>
        </div>
    </div>

    <div class="thinking-stream-container">
        <div class="terminal-header">
            <div class="terminal-controls">
                <div class="terminal-dot" style="background: #ff5f56;"></div>
                <div class="terminal-dot" style="background: #ffbd2e;"></div>
                <div class="terminal-dot" style="background: #27c93f;"></div>
            </div>
            <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: #666; text-transform: uppercase;">dexter_mind_v2.0.sh</div>
            <div></div>
        </div>
        <div id="terminal-output" class="terminal-content">
            ${logLines}
        </div>
    </div>

    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
        <button class="notif-action-btn danger" onclick="window.dispatchEvent(new CustomEvent('dex-mock-stop'))">
            <i class='bx bx-square'></i> Terminate Mission
        </button>
    </div>
  `;
}

function renderCompletedState() {
  return `
    <div class="mission-summary-card">
        <div class="success-icon-wrap">
            <div class="success-pulse-ring"></div>
            <i class='bx bx-check-double'></i>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
            <h4 style="margin: 0; color: #03dac6; text-transform: uppercase; letter-spacing: 3px; font-weight: 800;">Mission Accomplished</h4>
            <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">The objective was successfully fulfilled by Dexter.</p>
        </div>

        <div class="summary-stat-grid">
            <div class="summary-stat">
                <span class="summary-stat-value">${lastMissionSummary?.duration || '12m 4s'}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">${lastMissionSummary?.steps || '42'}</span>
                <span class="summary-stat-label">Steps</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">100%</span>
                <span class="summary-stat-label">Accuracy</span>
            </div>
        </div>

        <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px;">Final Result</h5>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${lastMissionSummary?.result || 'Optimized Event Bus'}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-reset'))">
                <i class='bx bx-refresh'></i> Return to Standby
            </button>
        </div>
    </div>
  `;
}

/**
 * Called by the global timer every 5 seconds.
 * CRITICAL: We only update innerHTML if the STATE changed.
 * This preserves running CSS animations.
 */
export async function updateProgressTab() {
  const root = document.getElementById('progress-view-root');
  if (!root) return;

  // 1. Only re-render the WHOLE block if the top-level state changed.
  if (currentState !== lastRenderedState) {
    root.innerHTML = renderStateHTML();
    lastRenderedState = currentState;
  }

  // 2. Perform incremental updates for ACTIVE state
  if (currentState === 'ACTIVE') {
    updateActiveUI();
  }
}

/**
 * Updates specific sub-elements without touching the whole DOM.
 */
function updateActiveUI() {
  const titleEl = document.getElementById('active-task-title');
  const barEl = document.getElementById('active-task-progress-fill');
  const textEl = document.getElementById('active-task-progress-text');
  const terminalEl = document.getElementById('terminal-output');

  if (titleEl && activeTask) titleEl.innerText = activeTask.title;
  if (barEl && activeTask) barEl.style.width = `${activeTask.progress}%`;
  if (textEl && activeTask) textEl.innerText = `${activeTask.progress}% COMPLETE`;

  if (terminalEl) {
    // Only add new lines
    const currentLines = terminalEl.children.length;
    if (liveLogs.length > currentLines) {
      for (let i = currentLines; i < liveLogs.length; i++) {
        const log = liveLogs[i];
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `
            <span class="line-time">${log.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${escapeHtml(log.msg)}</span>
        `;
        terminalEl.appendChild(line);
      }
      terminalEl.scrollTop = terminalEl.scrollHeight;
    }
  }
}

// --- MOCK LOGIC FOR PROTOTYPE ---
window.addEventListener('dex-mock-start', () => {
  currentState = 'ACTIVE';
  liveLogs = [
    { time: new Date().toLocaleTimeString(), msg: 'Initializing cognitive engine...' },
    { time: new Date().toLocaleTimeString(), msg: 'Connecting to event-service...' },
  ];
  activeTask = { title: 'Refactoring System Event Bus', progress: 10 };
  updateProgressTab();

  let count = 0;
  const interval = setInterval(() => {
    if (currentState !== 'ACTIVE') {
      clearInterval(interval);
      return;
    }
    count++;
    activeTask!.progress = Math.min(100, activeTask!.progress + Math.floor(Math.random() * 15));

    const messages = [
      'Analyzing internal/bus.go...',
      'Checking circular dependencies.',
      'Optimizing channel throughput.',
      'Writing unit tests for refactor.',
      'Deploying to staging environment.',
      'Verifying system integrity.',
    ];

    if (count < messages.length) {
      liveLogs.push({ time: new Date().toLocaleTimeString(), msg: messages[count] });
    }

    if (activeTask!.progress >= 100) {
      currentState = 'COMPLETED';
      lastMissionSummary = {
        duration: '1m 12s',
        steps: 32,
        result: 'Optimized Event Bus',
      };
      clearInterval(interval);
    }
    updateProgressTab();
  }, 1500);
});

window.addEventListener('dex-mock-stop', () => {
  currentState = 'STANDBY';
  updateProgressTab();
});

window.addEventListener('dex-mock-reset', () => {
  currentState = 'STANDBY';
  updateProgressTab();
});
