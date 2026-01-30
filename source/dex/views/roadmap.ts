// Roadmap Tab Logic
import {
  createPlaceholderMessage,
  escapeHtml,
  smartFetch,
  isPublicMode,
  renderMarkdown,
} from '../core/utils.ts';

export const getRoadmapActions = () => `
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${isPublicMode() ? 'display: none;' : ''}" title="New Issue"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`;

export const getRoadmapContent = () => `
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <input id="roadmap-editor-title" class="settings-input" style="margin-bottom: 10px; width: 100%;" placeholder="Issue Title (e.g. [event] Fix bug)">
    <textarea id="roadmap-editor-body" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe the issue or feature in detail..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-git-pull-request'></i> Create Issue</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-timeline-container" style="margin-bottom: 20px;"></div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`;

const activeExpandedIds = new Set();
let currentItems: any[] = [];

const createItemElement = (issue: any) => {
  const isExpanded = activeExpandedIds.has(issue.number);
  const createdAt = new Date(issue.createdAt);
  const dateStr = createdAt.toLocaleDateString(navigator.language, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const tempDiv = document.createElement('div');
  tempDiv.className = `event-item notification-item event-border-blue cursor-pointer ${isExpanded ? 'expanded' : ''}`;
  tempDiv.dataset.issueNumber = issue.number;
  tempDiv.id = `roadmap-issue-${issue.number}`;

  tempDiv.onclick = (e) => {
    if (
      (e.target as HTMLElement).closest('button') ||
      (e.target as HTMLElement).closest('textarea')
    )
      return;
    const wasExpanded = tempDiv.classList.contains('expanded');
    if (wasExpanded) {
      tempDiv.classList.remove('expanded');
      const details = tempDiv.querySelector('.event-details') as HTMLElement;
      if (details) details.style.display = 'none';
      activeExpandedIds.delete(issue.number);
    } else {
      tempDiv.classList.add('expanded');
      const details = tempDiv.querySelector('.event-details') as HTMLElement;
      if (details) details.style.display = 'block';
      activeExpandedIds.add(issue.number);
    }
  };

  tempDiv.innerHTML = `

          <div class="event-time">

            <span class="event-time-main">${dateStr.split(',')[1]}</span>

            <span class="event-date">${dateStr.split(',')[0]}</span>

          </div>

          <div class="event-content">

            <div class="event-service" style="display: flex; justify-content: space-between; align-items: center;">

              <span>ISSUE #${issue.number}</span>

              <span style="font-size: 0.85em; color: #666; font-family: 'JetBrains Mono', monospace;">${issue.repository || 'EasterCompany/EasterCompany'}</span>

            </div>

            <div class="event-message" style="font-weight: bold; margin-bottom: 5px;">${escapeHtml(issue.title)}</div>

            <div class="event-details" style="${isExpanded ? 'display: block;' : 'display: none;'} ">

              <div style="font-size: 0.75em; color: #bb86fc; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: bold;">Target Repository: ${issue.repository || 'EasterCompany/EasterCompany'}</div>

              <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 15px; white-space: pre-wrap;">${renderMarkdown(issue.body)}</div>

  
        ${
          isPublicMode()
            ? ''
            : `
        <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; margin-top: 15px;">
          <textarea class="settings-textarea comment-input" style="min-height: 80px; font-size: 0.85em; margin-bottom: 10px;" placeholder="Add a technical comment..."></textarea>
          <div style="display: flex; gap: 10px; align-items: center;">
            <button class="notif-action-btn comment-btn" style="padding: 6px 12px; font-size: 0.8em;"><i class='bx bx-comment'></i> Comment</button>
            <button class="notif-action-btn close-btn danger" style="padding: 6px 12px; font-size: 0.8em; margin-left: auto;"><i class='bx bx-check-circle'></i> Close Issue</button>
          </div>
        </div>
        `
        }
      </div>
    </div>
  `;

  tempDiv.querySelector('.comment-btn')?.addEventListener('click', async () => {
    const input = tempDiv.querySelector('.comment-input') as HTMLTextAreaElement;
    const body = input.value.trim();
    if (!body) return;
    await addComment(issue.number, body);
    input.value = '';
    updateRoadmapTab(true);
  });

  tempDiv.querySelector('.close-btn')?.addEventListener('click', async () => {
    if (confirm(`Close issue #${issue.number}?`)) {
      await closeIssue(issue.number);
      updateRoadmapTab(true);
    }
  });

  return tempDiv;
};

export async function updateRoadmapTab(forceReRender = false) {
  const roadmapContainer = document.getElementById('roadmap-list');
  const timelineContainer = document.getElementById('roadmap-timeline-container');
  if (!roadmapContainer) return;

  attachRoadmapListeners();

  try {
    const response = await smartFetch('/roadmap');
    if (!response.ok) throw new Error('Offline');

    const issues = await response.json();
    // Sort oldest to newest for roadmap
    issues.sort(
      (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    // Deep compare with currentItems to prevent flicker
    if (!forceReRender && JSON.stringify(issues) === JSON.stringify(currentItems)) {
      return;
    }

    currentItems = issues;

    // --- Intelligent DOM Diffing to resolve flickering ---
    const existingItems = Array.from(roadmapContainer.children) as HTMLElement[];
    const existingMap = new Map(
      existingItems.filter((el) => el.dataset.issueNumber).map((el) => [el.dataset.issueNumber, el])
    );

    if (issues.length === 0) {
      roadmapContainer.innerHTML = createPlaceholderMessage(
        'empty',
        'No open issues found.',
        'Dexter is currently in a perfect state.'
      );
      return;
    }

    // Grouping
    const groupedIssues: Record<string, any[]> = {};
    issues.forEach((issue: any) => {
      let category = 'General';
      const match = issue.title.match(/^\[(.*?)\]/);
      if (match) category = match[1].toLowerCase();
      if (!groupedIssues[category]) groupedIssues[category] = [];
      groupedIssues[category].push(issue);
    });

    // Clear and rebuild headers and order
    roadmapContainer.innerHTML = '';

    Object.entries(groupedIssues).forEach(([category, list]) => {
      const headerHtml = `<div class="service-category-header" style="margin: 20px 0 10px 0; color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 2px;">${category}</div>`;
      roadmapContainer.insertAdjacentHTML('beforeend', headerHtml);

      list.forEach((issue) => {
        const issueKey = issue.number.toString();
        const el = existingMap.get(issueKey);

        if (el && !forceReRender) {
          // Update content if needed (basic check)
          const messageEl = el.querySelector('.event-message');
          if (messageEl && messageEl.textContent !== issue.title) {
            roadmapContainer.appendChild(createItemElement(issue));
          } else {
            // Re-use existing element to preserve state (expansion)
            roadmapContainer.appendChild(el);
          }
        } else {
          roadmapContainer.appendChild(createItemElement(issue));
        }
      });
    });

    // Render Timeline: Show oldest 4 issues in order
    if (timelineContainer) {
      const oldestFour = issues.slice(0, 4);
      const timelineHtml = `
        <div class="roadmap-timeline" style="display: flex; gap: 5px; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); overflow-x: auto; align-items: center;">
          <span style="font-size: 0.6em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">Execution Queue:</span>
          ${oldestFour
            .map(
              (issue: any, idx: number) => `
            <div class="timeline-dot-wrap" style="display: flex; align-items: center; gap: 5px;">
                <div class="timeline-dot" title="#${issue.number}: ${issue.title}" style="width: 12px; height: 12px; border-radius: 50%; background: #bb86fc; flex-shrink: 0; opacity: 0.8; cursor: pointer;" onclick="dexter.viewRoadmapIssue(${issue.number})"></div>
                <span style="font-size: 0.7em; color: #aaa; white-space: nowrap;">#${issue.number}</span>
                ${idx < oldestFour.length - 1 ? "<div style='width: 15px; height: 1px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin: 0 5px;'></div>" : ''}
            </div>
          `
            )
            .join('')}
            ${issues.length > 4 ? `<span style="font-size: 0.7em; color: #444; margin-left: 10px;">+${issues.length - 4} more</span>` : ''}
        </div>
      `;
      timelineContainer.innerHTML = timelineHtml;
    }
  } catch (e) {
    if (roadmapContainer.querySelector('.placeholder-message.offline')) return;
    roadmapContainer.innerHTML = createPlaceholderMessage(
      'offline',
      'Failed to load roadmap.',
      'Could not sync with GitHub.'
    );
  }
}

// Global helper for timeline clicking
if (!(window as any).dexter) (window as any).dexter = {};
(window as any).dexter.viewRoadmapIssue = (num: number) => {
  const el = document.getElementById(`roadmap-issue-${num}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (!el.classList.contains('expanded')) el.click();
  }
};

function attachRoadmapListeners() {
  const newBtn = document.getElementById('roadmap-new');
  const saveBtn = document.getElementById('roadmap-save');
  const cancelBtn = document.getElementById('roadmap-cancel');
  const expandAllBtn = document.getElementById('roadmap-expand-all');
  const closeAllBtn = document.getElementById('roadmap-close-all');

  if (newBtn && !newBtn.dataset.listenerAttached) {
    newBtn.onclick = () => {
      const titleInput = document.getElementById('roadmap-editor-title') as HTMLInputElement;
      const bodyInput = document.getElementById('roadmap-editor-body') as HTMLTextAreaElement;
      if (titleInput) titleInput.value = '';
      if (bodyInput) bodyInput.value = '';

      const container = document.getElementById('roadmap-editor-container');
      if (container) container.style.display = 'block';
    };
    newBtn.dataset.listenerAttached = 'true';
  }

  if (cancelBtn && !cancelBtn.dataset.listenerAttached) {
    cancelBtn.onclick = () => {
      const container = document.getElementById('roadmap-editor-container');
      if (container) container.style.display = 'none';
    };
    cancelBtn.dataset.listenerAttached = 'true';
  }

  if (saveBtn && !saveBtn.dataset.listenerAttached) {
    saveBtn.onclick = async () => {
      const titleInput = document.getElementById('roadmap-editor-title') as HTMLInputElement;
      const bodyInput = document.getElementById('roadmap-editor-body') as HTMLTextAreaElement;

      const title = titleInput ? titleInput.value.trim() : '';
      const body = bodyInput ? bodyInput.value.trim() : '';

      if (!title || !body) {
        alert('Title and Body are required.');
        return;
      }

      try {
        await smartFetch('/roadmap', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, body }),
        });
        const container = document.getElementById('roadmap-editor-container');
        if (container) container.style.display = 'none';
        updateRoadmapTab(true);
      } catch (e) {
        console.error(e);
      }
    };
    saveBtn.dataset.listenerAttached = 'true';
  }

  if (expandAllBtn && !expandAllBtn.dataset.listenerAttached) {
    expandAllBtn.onclick = () => {
      currentItems.forEach((item) => activeExpandedIds.add(item.number));
      updateRoadmapTab(true);
    };
    expandAllBtn.dataset.listenerAttached = 'true';
  }

  if (closeAllBtn && !closeAllBtn.dataset.listenerAttached) {
    closeAllBtn.onclick = () => {
      activeExpandedIds.clear();
      updateRoadmapTab(true);
    };
    closeAllBtn.dataset.listenerAttached = 'true';
  }
}

async function addComment(number: number, body: string) {
  await smartFetch(`/roadmap/${number}/comment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  });
}

async function closeIssue(number: number) {
  await smartFetch(`/roadmap/${number}`, { method: 'DELETE' });
}
