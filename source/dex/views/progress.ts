// Progress View - Mission Control for Dexter's Cognition
import { escapeHtml } from '../core/utils.ts';

type ProgressState = 'STANDBY' | 'ACTIVE' | 'COMPLETED';

let currentState: ProgressState = 'STANDBY';
let liveLogs: { time: string; msg: string }[] = [];
let activeTask: { title: string; progress: number } | null = null;
let lastMissionSummary: { duration: string; steps: number; result: string } | null = null;

export const getProgressContent = () => {
  return `
    <div id="progress-view-root" class="progress-container">
        ${renderState()}
    </div>
  `;
};

function renderState() {
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
            <div class="radar-circle"></div>
            <div class="radar-circle" style="animation-delay: 1s;"></div>
            <div class="radar-circle" style="animation-delay: 2s;"></div>
            <div class="radar-brain"><i class='bx bx-brain'></i></div>
        </div>
        <h3 style="margin-bottom: 10px; color: #bb86fc;">System Standby</h3>
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
                <h2 style="margin: 5px 0 0 0; font-size: 1.2em;">${activeTask?.title || 'Processing Objective...'}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div class="task-progress-fill" style="width: ${activeTask?.progress || 0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span>PHASE: IMPLEMENTATION</span>
            <span>${activeTask?.progress || 0}% COMPLETE</span>
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
            <div class="terminal-line"><span class="line-time"></span><span class="line-prefix">></span><span class="cursor-block">_</span></div>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div class="event-item notification-item event-border-grey" style="margin: 0; padding: 15px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #888; text-transform: uppercase;">Visual Output</h5>
            <div style="aspect-ratio: 16/9; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-image' style="font-size: 2em;"></i>
            </div>
        </div>
        <div class="event-item notification-item event-border-grey" style="margin: 0; padding: 15px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #888; text-transform: uppercase;">Recent Steps</h5>
            <div style="font-family: 'JetBrains Mono'; font-size: 0.75em;">
                <div style="color: #03dac6; margin-bottom: 5px;"><i class='bx bx-check'></i> Analyzed codebase</div>
                <div style="color: #03dac6; margin-bottom: 5px;"><i class='bx bx-check'></i> Drafted logic</div>
                <div style="color: #bb86fc;"><i class='bx bx-loader-alt spin'></i> Writing tests</div>
                <div style="color: #444;"><i class='bx bx-circle'></i> Deploying</div>
            </div>
        </div>
    </div>

    <div style="display: flex; gap: 10px; justify-content: center;">
        <button class="notif-action-btn danger" onclick="window.dispatchEvent(new CustomEvent('dex-mock-stop'))">
            <i class='bx bx-square'></i> Terminate Mission
        </button>
    </div>
  `;
}

function renderCompletedState() {
  return `
    <div class="mission-summary-card">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <div style="background: rgba(3, 218, 198, 0.1); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #03dac6; font-size: 1.5em;">
                <i class='bx bx-check-double'></i>
            </div>
            <div>
                <h4 style="margin: 0; color: #03dac6; text-transform: uppercase; letter-spacing: 2px;">Mission Accomplished</h4>
                <p style="margin: 0; font-size: 0.9em; color: #888;">The objective was successfully fulfilled.</p>
            </div>
        </div>

        <div class="summary-stat-grid">
            <div class="summary-stat">
                <span class="summary-stat-value">${lastMissionSummary?.duration || '12m 4s'}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">${lastMissionSummary?.steps || '42'}</span>
                <span class="summary-stat-label">Cognitive Steps</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">Success</span>
                <span class="summary-stat-label">Outcome</span>
            </div>
        </div>

        <div style="margin-top: 25px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #888; text-transform: uppercase;">Final Output</h5>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.85em; color: #bb86fc;">${lastMissionSummary?.result || 'Blueprint: Event-Bus-Refactor'}</span>
                <button class="notif-action-btn" style="padding: 4px 12px; font-size: 0.75em;">View Results</button>
            </div>
        </div>

        <div style="margin-top: 30px; display: flex; gap: 10px; justify-content: center;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-reset'))">
                <i class='bx bx-refresh'></i> Return to Standby
            </button>
        </div>
    </div>
  `;
}

export async function updateProgressTab() {
  const root = document.getElementById('progress-view-root');
  if (!root) return;
  root.innerHTML = renderState();

  // Handle autoscroll for terminal
  if (currentState === 'ACTIVE') {
    const terminal = document.getElementById('terminal-output');
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }
}

// --- MOCK LOGIC FOR PROTOTYPE ---
window.addEventListener('dex-mock-start', () => {
  currentState = 'ACTIVE';
  liveLogs = [
    { time: new Date().toLocaleTimeString(), msg: 'Initializing cognitive engine...' },
    { time: new Date().toLocaleTimeString(), msg: 'Connecting to event-service...' },
    { time: new Date().toLocaleTimeString(), msg: 'Fetching mission parameters from Roadmap...' },
  ];
  activeTask = { title: 'Refactoring System Event Bus', progress: 15 };
  updateProgressTab();

  // Simple simulation
  let count = 0;
  const interval = setInterval(() => {
    if (currentState !== 'ACTIVE') {
      clearInterval(interval);
      return;
    }
    count++;
    activeTask!.progress = Math.min(100, activeTask!.progress + Math.floor(Math.random() * 10));

    const messages = [
      'Analyzing file: internal/bus.go',
      'Identified 3 performance bottlenecks.',
      'Synthesizing optimization logic...',
      'Applying transformations to service layer.',
      'Running validation tests...',
      'Verifying data integrity.',
      'Cleaning up temporary artifacts.',
    ];

    if (count < messages.length) {
      liveLogs.push({ time: new Date().toLocaleTimeString(), msg: messages[count] });
    }

    if (activeTask!.progress >= 100) {
      currentState = 'COMPLETED';
      lastMissionSummary = {
        duration: '1m 15s',
        steps: 24,
        result: 'Optimized Event Bus Logic',
      };
      clearInterval(interval);
    }
    updateProgressTab();
  }, 2000);
});

window.addEventListener('dex-mock-stop', () => {
  currentState = 'STANDBY';
  updateProgressTab();
});

window.addEventListener('dex-mock-reset', () => {
  currentState = 'STANDBY';
  updateProgressTab();
});
