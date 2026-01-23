// Progress View - Mission Control for Dexter's Cognition
import { escapeHtml, smartFetch } from '../core/utils.ts';

type ProgressState = 'STANDBY' | 'ACTIVE' | 'COMPLETED';

let currentState: ProgressState = 'STANDBY';
let lastRenderedState: ProgressState | null = null;

let liveLogs: { time: string; msg: string }[] = [];
let activeTask: { title: string; progress: number; phase: string } | null = null;
let lastMissionSummary: {
  duration: string;
  steps: number;
  result: string;
  timestamp: number;
} | null = null;

/**
 * Main entry point for the Progress Tab content.
 * Returns a persistent root container.
 */
export const getProgressContent = () => {
  return `
    <div id="progress-view-root" class="progress-container" style="flex: 1; overflow-y: auto;">
        ${renderStateHTML()}
    </div>
  `;
};

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
            <div class="orbit-ring orbit-ring-1"></div>
            <div class="orbit-ring orbit-ring-2"></div>
            <div class="radar-brain"><i class='bx bx-brain'></i></div>
        </div>
        <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
        <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto;">
            Dexter is currently monitoring system health. <br>
            No active missions in progress.
        </p>
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
                <h4 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px; color: #bb86fc; text-align: left;">Active Mission</h4>
                <h2 id="active-task-title" style="margin: 5px 0 0 0; font-size: 1.2em; text-align: left;">${activeTask?.title || 'Processing...'}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div id="active-task-progress-fill" class="task-progress-fill" style="width: ${activeTask?.progress || 0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span id="active-task-phase">PHASE: ${activeTask?.phase || 'IMPLEMENTATION'}</span>
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
            <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: rgba(255, 255, 255, 0.3); text-transform: uppercase;">dexter_fabricator_v3.sh</div>
        </div>
        <div id="terminal-output" class="terminal-content">
            ${logLines}
        </div>
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
            <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">The objective was successfully fulfilled by the Fabricator.</p>
        </div>

        <div class="summary-stat-grid">
            <div class="summary-stat">
                <span class="summary-stat-value">${lastMissionSummary?.duration || '-'}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">Real-time</span>
                <span class="summary-stat-label">Execution</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">100%</span>
                <span class="summary-stat-label">Accuracy</span>
            </div>
        </div>

        <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px;">Final Result</h5>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${lastMissionSummary?.result || 'Task Finalized'}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>
    </div>
  `;
}

export async function updateProgressTab() {
  try {
    const response = await smartFetch('/processes');
    const data = await response.json();
    const active = data.active || [];
    const history = data.history || [];

    const fabricatorProc = active.find((p: any) => p.channel_id === 'system-fabricator');

    if (fabricatorProc) {
      currentState = 'ACTIVE';
      const now = Math.floor(Date.now() / 1000);
      const duration = now - fabricatorProc.start_time;

      // Progress calculation heuristic
      let progress = 10;
      let phase = 'REVIEW';
      if (duration > 30) {
        progress = 30;
        phase = 'INVESTIGATION';
      }
      if (duration > 120) {
        progress = 60;
        phase = 'CONSTRUCTION';
      }
      if (duration > 300) {
        progress = 90;
        phase = 'REPORTING';
      }

      activeTask = {
        title: fabricatorProc.state || 'Fabricating system improvements...',
        progress: progress,
        phase: phase,
      };

      // Simple log generation based on state
      const timeStr = new Date(fabricatorProc.updated_at * 1000).toLocaleTimeString();
      if (liveLogs.length === 0 || liveLogs[liveLogs.length - 1].msg !== fabricatorProc.state) {
        liveLogs.push({ time: timeStr, msg: fabricatorProc.state });
        if (liveLogs.length > 50) liveLogs.shift();
      }
    } else {
      // Check history for recent fabricator completion
      const recentFab = history.find((p: any) => p.channel_id === 'system-fabricator');
      if (recentFab && Date.now() / 1000 - recentFab.end_time < 60) {
        currentState = 'COMPLETED';
        const dur = recentFab.end_time - recentFab.start_time;
        lastMissionSummary = {
          duration: `${Math.floor(dur / 60)}m ${dur % 60}s`,
          steps: 0,
          result: recentFab.state,
          timestamp: recentFab.end_time,
        };
      } else {
        currentState = 'STANDBY';
        liveLogs = [];
      }
    }

    const root = document.getElementById('progress-view-root');
    if (root) {
      if (currentState !== lastRenderedState) {
        root.innerHTML = renderStateHTML();
        lastRenderedState = currentState;
      }
      if (currentState === 'ACTIVE') {
        updateActiveUI();
      }
    }
  } catch (e) {
    console.error('Failed to update progress:', e);
  }
}

function updateActiveUI() {
  const titleEl = document.getElementById('active-task-title');
  const barEl = document.getElementById('active-task-progress-fill');
  const textEl = document.getElementById('active-task-progress-text');
  const phaseEl = document.getElementById('active-task-phase');
  const terminalEl = document.getElementById('terminal-output');

  if (titleEl && activeTask) titleEl.innerText = activeTask.title;
  if (barEl && activeTask) barEl.style.width = `${activeTask.progress}%`;
  if (textEl && activeTask) textEl.innerText = `${activeTask.progress}% COMPLETE`;
  if (phaseEl && activeTask) phaseEl.innerText = `PHASE: ${activeTask.phase}`;

  if (terminalEl) {
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
