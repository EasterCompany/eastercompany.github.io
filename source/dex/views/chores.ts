import {
  smartFetch,
  smartDiscordFetch,
  createPlaceholderMessage,
  isPublicMode,
} from '../core/utils.ts';

export const getChoresActions = () => `
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${isPublicMode() ? 'display: none;' : ''}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`;

export const getChoresContent = () => {
  return `
        <!-- Create Task Form -->
        <div id="create-chore-form" class="new-task-form-container" style="display: none;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <i class='bx bx-plus-circle' style="color: #bb86fc; font-size: 1.2em;"></i>
                <h3 style="margin: 0; font-size: 1.1em; letter-spacing: 1px;">Initialize Research Task</h3>
            </div>

            <div class="task-form-grid">
                <div class="task-input-group" style="grid-column: span 2;">
                    <label class="task-input-label">Task Goal / Instruction</label>
                    <input type="text" id="new-chore-instruction" class="task-form-input" placeholder="E.g., 'Analyze recent crypto market trends in Serbia'">
                </div>
                
                <div class="task-input-group">
                    <label class="task-input-label">Target URL (Optional)</label>
                    <input type="text" id="new-chore-url" class="task-form-input" placeholder="https://example.com/data">
                </div>

                <div class="task-input-group">
                    <label class="task-input-label">Frequency (Schedule)</label>
                    <select id="new-chore-schedule" class="task-form-select">
                        <option value="every_1h">Once per Hour</option>
                        <option value="every_6h">Once per 6 Hours</option>
                        <option value="every_12h">Once per 12 Hours</option>
                        <option value="every_24h" selected>Once per Day</option>
                        <option value="every_168h">Once per Week</option>
                    </select>
                </div>

                <div class="task-input-group">
                    <label id="task-owner-label" class="task-input-label">Report result to</label>
                    <select id="new-chore-owner" class="task-form-select">
                        <option value="313071000877137920">Creator (Owen)</option>
                        <option value="dexter">Dexter (Event Timeline)</option>
                        <!-- Contacts will be injected here -->
                    </select>
                </div>
            </div>

            <div class="task-form-actions">
                <button id="cancel-chore-btn" class="task-btn task-btn-discard"><i class='bx bx-x'></i> Discard</button>
                <button id="save-chore-btn" class="task-btn task-btn-deploy"><i class='bx bx-zap'></i> Deploy Task</button>
            </div>
        </div>

        <div id="chores-list" class="tasks-vertical-list" style="margin-bottom: 30px; display: flex; flex-direction: column; gap: 15px;"></div>
    `;
};

let currentTasks: any[] = [];
let ownerMap: Record<string, string> = { '313071000877137920': 'Owen' };

export async function updateChoresTab() {
  const container = document.getElementById('chores-list');
  const createBtn = document.getElementById('create-chore-btn');
  const form = document.getElementById('create-chore-form');
  const saveBtn = document.getElementById('save-chore-btn');
  const cancelBtn = document.getElementById('cancel-chore-btn');
  const ownerSelect = document.getElementById('new-chore-owner') as HTMLSelectElement;
  const ownerLabel = document.getElementById('task-owner-label') as HTMLLabelElement;
  const filterSelect = document.getElementById('task-filter-owner') as HTMLSelectElement;

  // Populating Contacts Dropdown
  if (ownerSelect && !ownerSelect.dataset.populated && !isPublicMode()) {
    try {
      smartDiscordFetch('/contacts').then(async (resp) => {
        if (resp.ok) {
          const data = await resp.json();
          const members = data.members || [];
          members.forEach((m: any) => {
            ownerMap[m.id] = m.nickname || m.username;
            if (m.id === '313071000877137920') return; // Skip Owen, already default
            const opt = document.createElement('option');
            opt.value = m.id;
            const nickname = m.nickname || m.username;
            opt.textContent = `${nickname} (${m.username})`;
            ownerSelect.appendChild(opt);
          });
          ownerSelect.dataset.populated = 'true';
        }
      });
    } catch (e) {
      console.warn('Failed to fetch contacts for dropdown');
    }
  }

  // Label Sync Listener
  if (ownerSelect && ownerLabel && !ownerSelect.dataset.listenerAttached) {
    ownerSelect.onchange = () => {
      const selectedOption = ownerSelect.options[ownerSelect.selectedIndex];
      if (selectedOption) {
        let name = selectedOption.text.split(' (')[0];
        if (selectedOption.value === 'dexter') name = 'Dexter';
        ownerLabel.textContent = `Report result to: ${name}`;
      }
    };
    ownerSelect.dataset.listenerAttached = 'true';
  }

  // Filter Listener
  if (filterSelect && !filterSelect.dataset.listenerAttached) {
    filterSelect.onchange = () => renderTasks();
    filterSelect.dataset.listenerAttached = 'true';
  }

  function renderTasks() {
    if (!container) return;
    const filterValue = filterSelect?.value || 'all';

    const filtered =
      filterValue === 'all' ? currentTasks : currentTasks.filter((t) => t.owner_id === filterValue);

    if (filtered.length === 0) {
      container.innerHTML = createPlaceholderMessage(
        'empty',
        filterValue === 'all' ? 'No active tasks.' : 'No tasks found for this owner.',
        isPublicMode()
          ? 'Dexter is not currently performing research.'
          : 'Click the plus icon to create a research task.'
      );
      return;
    }

    const html = filtered
      .map((chore: any) => {
        const lastRun =
          chore.last_run === 0 ? 'Never' : new Date(chore.last_run * 1000).toLocaleString();
        const memoryCount = chore.memory ? chore.memory.length : 0;
        const statusColor = chore.status === 'active' ? '#03dac6' : '#666';
        const ownerName = ownerMap[chore.owner_id] || chore.owner_id.substring(0, 8);

        return `
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${statusColor}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${statusColor}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${chore.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center;">
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-user' style="margin-right: 4px;"></i>${ownerName}</span>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${chore.schedule}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn delete-chore-btn" data-id="${chore.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-trash' style="font-size: 1.2em;"></i></button>
                        </div>
                    </div>
                    
                    <div class="service-widget-body" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Last Run</span>
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${lastRun}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Items Found</span>
                            <span style="font-size: 0.85em; color: #03dac6; font-weight: bold;">${memoryCount}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 200px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Target Focus</span>
                            <span style="font-size: 0.8em; color: #888; font-family: 'JetBrains Mono'; word-break: break-all;">${chore.execution_plan.entry_url || 'Autonomous Detection'}</span>
                        </div>
                    </div>
                </div>
            `;
      })
      .join('');

    container.innerHTML = html;

    // Attach delete listeners
    container.querySelectorAll('.delete-chore-btn').forEach((btn) => {
      (btn as HTMLElement).onclick = async (e) => {
        e.stopPropagation();
        const id = (btn as HTMLElement).dataset.id;
        if (confirm('Delete this task?')) {
          await smartFetch(`/chores/${id}`, { method: 'DELETE' });
          updateChoresTab();
        }
      };
    });
  }

  // Attach Create/Cancel Listeners (only once)
  if (createBtn && !createBtn.dataset.listenerAttached) {
    createBtn.onclick = () => {
      if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
    };
    createBtn.dataset.listenerAttached = 'true';
  }

  if (cancelBtn && !cancelBtn.dataset.listenerAttached) {
    cancelBtn.onclick = () => {
      if (form) form.style.display = 'none';
    };
    cancelBtn.dataset.listenerAttached = 'true';
  }

  if (saveBtn && !saveBtn.dataset.listenerAttached) {
    saveBtn.onclick = async () => {
      const instructionInput = document.getElementById('new-chore-instruction') as HTMLInputElement;
      const urlInput = document.getElementById('new-chore-url') as HTMLInputElement;
      const ownerInput = document.getElementById('new-chore-owner') as HTMLSelectElement;
      const scheduleInput = document.getElementById('new-chore-schedule') as HTMLSelectElement;

      const instruction = instructionInput?.value;
      const url = urlInput?.value;
      const ownerId = ownerInput?.value || '313071000877137920';
      const schedule = scheduleInput?.value || 'every_24h';

      if (!instruction) return;

      saveBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        await smartFetch('/chores', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            owner_id: ownerId,
            natural_instruction: instruction,
            entry_url: url,
            schedule: schedule,
          }),
        });
        if (form) form.style.display = 'none';
        if (instructionInput) instructionInput.value = '';
        if (urlInput) urlInput.value = '';
        updateChoresTab();
      } catch (e) {
        console.error(e);
        alert('Failed to create research task');
      } finally {
        saveBtn.innerHTML = "<i class='bx bx-zap'></i> Deploy Task";
      }
    };
    saveBtn.dataset.listenerAttached = 'true';
  }

  try {
    const response = await smartFetch('/chores');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const chores = await response.json();
    currentTasks = chores || [];

    // Update filter dropdown with unique owners from current tasks
    if (filterSelect) {
      const currentFilter = filterSelect.value;
      const uniqueOwners = Array.from(new Set(currentTasks.map((t) => t.owner_id)));

      // Keep only 'all' and rebuild others
      filterSelect.innerHTML = '<option value="all">All Owners</option>';
      uniqueOwners.forEach((oid) => {
        const opt = document.createElement('option');
        opt.value = oid;
        opt.textContent = ownerMap[oid] || `Owner: ${oid.substring(0, 8)}`;
        filterSelect.appendChild(opt);
      });
      filterSelect.value = currentFilter;
      // If the previously selected owner is gone, default back to 'all'
      if (filterSelect.selectedIndex === -1) filterSelect.value = 'all';
    }

    renderTasks();
  } catch (e) {
    console.error('Failed to fetch chores', e);
  }
}
