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
                <i id="form-icon" class='bx bx-plus-circle' style="color: #bb86fc; font-size: 1.2em;"></i>
                <h3 id="form-title" style="margin: 0; font-size: 1.1em; letter-spacing: 1px;">Initialize Research Task</h3>
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
                        <option value="daily">Daily (Fixed Time)</option>
                    </select>
                </div>

                <div id="new-chore-time-group" class="task-input-group" style="display: none;">
                    <label class="task-input-label">Scheduled Time & Timezone</label>
                    <div style="display: flex; gap: 10px;">
                        <input type="time" id="new-chore-time" class="task-form-input" style="flex: 1;" value="08:00">
                        <select id="new-chore-timezone" class="task-form-select" style="flex: 2;">
                            <option value="Local">Local (Server)</option>
                            <option value="America/Los_Angeles">California (PST/PDT)</option>
                            <option value="America/Chicago">Texas (CST/CDT)</option>
                            <option value="America/Toronto">Toronto (EST/EDT)</option>
                            <option value="America/New_York">New York (EST/EDT)</option>
                            <option value="Europe/London">London (GMT/BST)</option>
                            <option value="Europe/Berlin">Berlin (CET/CEST)</option>
                            <option value="Europe/Belgrade">Belgrade (CET/CEST)</option>
                            <option value="Europe/Moscow">Moscow (MSK)</option>
                            <option value="Asia/Shanghai">Beijing (CST)</option>
                            <option value="Asia/Tokyo">Tokyo (JST)</option>
                            <option value="Asia/Seoul">Seoul (KST)</option>
                            <option value="UTC">UTC</option>
                        </select>
                    </div>
                </div>

                <div class="task-input-group" style="grid-column: span 2;">
                    <label id="task-owner-label" class="task-input-label">Report results to (Select multiple)</label>
                    <div id="selected-recipients" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; min-height: 32px; padding: 5px; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>
                    </div>
                    <select id="new-chore-owner" class="task-form-select">
                        <option value="" disabled selected>Add recipient...</option>
                        <optgroup label="System">
                            <option value="dexter">Dexter (Event Timeline)</option>
                        </optgroup>
                        <optgroup label="Creators">
                            <option value="313071000877137920">Owen (Creator)</option>
                        </optgroup>
                        <optgroup id="contacts-group" label="Users">
                            <!-- Contacts will be injected here -->
                        </optgroup>
                        <optgroup id="channels-group" label="Channels">
                            <!-- Channels will be injected here -->
                        </optgroup>
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
let recipientMap: Record<string, string> = {
  '313071000877137920': 'Owen',
  dexter: 'Dexter',
};
let selectedRecipients: string[] = [];
let editingChoreId: string | null = null;

export async function updateChoresTab() {
  const container = document.getElementById('chores-list');
  const createBtn = document.getElementById('create-chore-btn');
  const form = document.getElementById('create-chore-form');
  const saveBtn = document.getElementById('save-chore-btn');
  const cancelBtn = document.getElementById('cancel-chore-btn');
  const recipientSelect = document.getElementById('new-chore-owner') as HTMLSelectElement;
  const selectedRecipientsContainer = document.getElementById('selected-recipients');
  const filterSelect = document.getElementById('task-filter-owner') as HTMLSelectElement;

  const instructionInput = document.getElementById('new-chore-instruction') as HTMLInputElement;
  const urlInput = document.getElementById('new-chore-url') as HTMLInputElement;
  const scheduleInput = document.getElementById('new-chore-schedule') as HTMLSelectElement;
  const timeInput = document.getElementById('new-chore-time') as HTMLInputElement;
  const timezoneInput = document.getElementById('new-chore-timezone') as HTMLSelectElement;
  const timeGroup = document.getElementById('new-chore-time-group');

  if (timezoneInput && !timezoneInput.dataset.initialValueAttached) {
    const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Check if userTz exists in our options, if not add it
    let exists = false;
    for (let i = 0; i < timezoneInput.options.length; i++) {
      if (timezoneInput.options[i].value === userTz) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const opt = document.createElement('option');
      opt.value = userTz;
      opt.textContent = userTz.replace('_', ' ');
      timezoneInput.appendChild(opt);
    }
    timezoneInput.value = userTz;
    timezoneInput.dataset.initialValueAttached = 'true';
  }

  if (scheduleInput && timeGroup && !scheduleInput.dataset.timeListenerAttached) {
    scheduleInput.addEventListener('change', () => {
      timeGroup.style.display = scheduleInput.value === 'daily' ? 'block' : 'none';
    });
    scheduleInput.dataset.timeListenerAttached = 'true';
  }

  const formTitle = document.getElementById('form-title');
  const formIcon = document.getElementById('form-icon');

  function renderSelectedRecipients() {
    if (!selectedRecipientsContainer) return;
    if (selectedRecipients.length === 0) {
      selectedRecipientsContainer.innerHTML =
        '<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';
      return;
    }

    selectedRecipientsContainer.innerHTML = selectedRecipients
      .sort((a, b) => {
        const aIsChannel = a.startsWith('channel:');
        const bIsChannel = b.startsWith('channel:');
        if (aIsChannel && !bIsChannel) return -1;
        if (!aIsChannel && bIsChannel) return 1;
        return 0;
      })
      .map((id) => {
        const name = recipientMap[id] || id;
        const isChannel = id.startsWith('channel:');
        const icon = id === 'dexter' ? 'bx-terminal' : isChannel ? 'bx-hash' : 'bx-user';
        const color = id === 'dexter' ? '#bb86fc' : isChannel ? '#03dac6' : '#fff';

        return `
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${color};">
          <i class='bx ${icon}'></i>
          <span>${name}</span>
          <i class='bx bx-x remove-recipient' data-id="${id}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `;
      })
      .join('');

    // Attach remove listeners
    selectedRecipientsContainer.querySelectorAll('.remove-recipient').forEach((btn) => {
      (btn as HTMLElement).onclick = () => {
        const id = (btn as HTMLElement).dataset.id;
        selectedRecipients = selectedRecipients.filter((r) => r !== id);
        renderSelectedRecipients();
      };
    });
  }

  function addRecipient(id: string) {
    if (id && !selectedRecipients.includes(id)) {
      selectedRecipients.push(id);
      renderSelectedRecipients();
    }
    if (recipientSelect) recipientSelect.value = ''; // Reset dropdown
  }

  function openForm(chore: any = null) {
    if (!form) return;
    editingChoreId = chore ? chore.id : null;

    if (chore) {
      if (formTitle) formTitle.textContent = 'Update Research Task';
      if (formIcon) {
        formIcon.className = 'bx bx-edit-alt';
        formIcon.style.color = '#03dac6';
      }
      if (saveBtn) saveBtn.innerHTML = "<i class='bx bx-check'></i> Update Task";

      if (instructionInput) instructionInput.value = chore.natural_instruction;
      if (urlInput) urlInput.value = chore.execution_plan?.entry_url || '';
      if (scheduleInput) {
        scheduleInput.value = chore.schedule;
        if (timeGroup) timeGroup.style.display = chore.schedule === 'daily' ? 'block' : 'none';
      }
      if (timeInput && chore.run_at) timeInput.value = chore.run_at;
      if (timezoneInput && chore.timezone) {
        // Ensure the timezone exists in dropdown
        let exists = false;
        for (let i = 0; i < timezoneInput.options.length; i++) {
          if (timezoneInput.options[i].value === chore.timezone) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          const opt = document.createElement('option');
          opt.value = chore.timezone;
          opt.textContent = chore.timezone.replace('_', ' ');
          timezoneInput.appendChild(opt);
        }
        timezoneInput.value = chore.timezone;
      }

      // Handle legacy single owner_id if recipients is empty
      selectedRecipients = chore.recipients || (chore.owner_id ? [chore.owner_id] : []);
      renderSelectedRecipients();
    } else {
      if (formTitle) formTitle.textContent = 'Initialize Research Task';
      if (formIcon) {
        formIcon.className = 'bx bx-plus-circle';
        formIcon.style.color = '#bb86fc';
      }
      if (saveBtn) saveBtn.innerHTML = "<i class='bx bx-zap'></i> Deploy Task";

      if (instructionInput) instructionInput.value = '';
      if (urlInput) urlInput.value = '';
      if (scheduleInput) scheduleInput.value = 'every_24h';
      selectedRecipients = [];
      renderSelectedRecipients();
    }

    form.style.display = 'block';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const contactsGroup = document.getElementById('contacts-group');
  const channelsGroup = document.getElementById('channels-group');

  // Populating Contacts Dropdown
  if (contactsGroup && !contactsGroup.dataset.populated && !isPublicMode()) {
    try {
      smartDiscordFetch('/contacts').then(async (resp) => {
        if (resp.ok) {
          const data = await resp.json();
          const members = data.members || [];
          members.forEach((m: any) => {
            recipientMap[m.id] = m.nickname || m.username;
            if (m.id === '313071000877137920') return; // Skip Owen, already default
            const opt = document.createElement('option');
            opt.value = m.id;
            const nickname = m.nickname || m.username;
            opt.textContent = `${nickname} (${m.username})`;
            contactsGroup.appendChild(opt);
          });
          contactsGroup.dataset.populated = 'true';
        }
      });
    } catch (e) {
      console.warn('Failed to fetch contacts for dropdown');
    }
  }

  // Populating Channels Dropdown
  if (channelsGroup && !channelsGroup.dataset.populated && !isPublicMode()) {
    try {
      smartDiscordFetch('/channels').then(async (resp) => {
        if (resp.ok) {
          const channels = await resp.json();
          channels.forEach((c: any) => {
            const id = `channel:${c.id}`;
            recipientMap[id] = c.name;
            const opt = document.createElement('option');
            opt.value = id;
            opt.textContent = `#${c.name} (${c.guild})`;
            channelsGroup.appendChild(opt);
          });
          channelsGroup.dataset.populated = 'true';
        }
      });
    } catch (e) {
      console.warn('Failed to fetch channels for dropdown');
    }
  }

  // Multi-select Dropdown Listener
  if (recipientSelect && !recipientSelect.dataset.listenerAttached) {
    recipientSelect.onchange = () => {
      addRecipient(recipientSelect.value);
    };
    recipientSelect.dataset.listenerAttached = 'true';
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
      filterValue === 'all'
        ? currentTasks
        : currentTasks.filter((t) => {
            const recipients = t.recipients || (t.owner_id ? [t.owner_id] : []);
            return recipients.includes(filterValue);
          });

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

        const recipients = (chore.recipients || (chore.owner_id ? [chore.owner_id] : [])).sort(
          (a: string, b: string) => {
            const aIsChannel = a.startsWith('channel:');
            const bIsChannel = b.startsWith('channel:');
            if (aIsChannel && !bIsChannel) return -1;
            if (!aIsChannel && bIsChannel) return 1;
            return 0;
          }
        );
        const recipientList = recipients
          .map((r: string) => {
            const name = recipientMap[r] || r.substring(0, 8);
            const isChannel = r.startsWith('channel:');
            const icon = r === 'dexter' ? 'bx-terminal' : isChannel ? 'bx-hash' : 'bx-user';
            return `<span title="${name}" style="display: flex; align-items: center; gap: 3px;"><i class='bx ${icon}'></i>${name}</span>`;
          })
          .join("<span style='color: #444;'>, </span>");

        return `
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${statusColor}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${statusColor}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${chore.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                                    <div style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace; display: flex; gap: 10px; align-items: center;">
                                      <i class='bx bx-send' style="margin-right: -5px;"></i>
                                      ${recipientList}
                                    </div>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${chore.schedule}${chore.run_at ? ' @ ' + chore.run_at + (chore.timezone ? ' (' + chore.timezone.split('/').pop()?.replace('_', ' ') + ')' : '') : ''}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn reset-chore-btn" data-id="${chore.id}" title="Reset Progress" style="background: none; border: none; color: #ff9800; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-refresh' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn edit-chore-btn" data-id="${chore.id}" style="background: none; border: none; color: #bb86fc; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-edit-alt' style="font-size: 1.2em;"></i></button>
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

    // Attach edit listeners
    container.querySelectorAll('.edit-chore-btn').forEach((btn) => {
      (btn as HTMLElement).onclick = (e) => {
        e.stopPropagation();
        const id = (btn as HTMLElement).dataset.id;
        const chore = currentTasks.find((t) => t.id === id);
        if (chore) openForm(chore);
      };
    });

    // Attach reset listeners
    container.querySelectorAll('.reset-chore-btn').forEach((btn) => {
      (btn as HTMLElement).onclick = async (e) => {
        e.stopPropagation();
        const id = (btn as HTMLElement).dataset.id;
        if (confirm('Reset this task? It will be re-run immediately on the next cycle.')) {
          (btn as HTMLElement).innerHTML = "<i class='bx bx-loader-alt spin'></i>";
          await smartFetch(`/chores/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ last_run: 0 }),
          });
          updateChoresTab();
        }
      };
    });

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
      if (form) {
        if (form.style.display === 'none' || editingChoreId !== null) {
          openForm(null);
        } else {
          form.style.display = 'none';
        }
      }
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
      const scheduleInput = document.getElementById('new-chore-schedule') as HTMLSelectElement;

      const instruction = instructionInput?.value;
      const schedule = scheduleInput?.value || 'every_24h';
      const runAt = schedule === 'daily' ? timeInput?.value : '';
      const timezone = schedule === 'daily' ? timezoneInput?.value : '';

      if (!instruction) return;
      if (selectedRecipients.length === 0) {
        alert('Please add at least one recipient.');
        return;
      }

      const originalBtnHTML = saveBtn.innerHTML;
      saveBtn.innerHTML = "<i class='bx bx-loader-alt spin'></i>";
      try {
        const method = editingChoreId ? 'PATCH' : 'POST';
        const url = editingChoreId ? `/chores/${editingChoreId}` : '/chores';

        await smartFetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipients: selectedRecipients,
            natural_instruction: instruction,
            entry_url: urlInput?.value,
            schedule: schedule,
            run_at: runAt,
            timezone: timezone,
          }),
        });
        if (form) form.style.display = 'none';
        if (instructionInput) instructionInput.value = '';
        if (urlInput) urlInput.value = '';
        editingChoreId = null;
        selectedRecipients = [];
        updateChoresTab();
      } catch (e) {
        console.error(e);
        alert(editingChoreId ? 'Failed to update research task' : 'Failed to create research task');
      } finally {
        saveBtn.innerHTML = originalBtnHTML;
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
      const allRecipients = new Set<string>();
      currentTasks.forEach((t) => {
        if (t.owner_id) allRecipients.add(t.owner_id);
        if (t.recipients) t.recipients.forEach((r: string) => allRecipients.add(r));
      });

      // Keep only 'all' and rebuild others
      filterSelect.innerHTML = '<option value="all">All Recipients</option>';
      allRecipients.forEach((rid) => {
        const opt = document.createElement('option');
        opt.value = rid;
        const isChannel = rid.startsWith('channel:');
        const name = recipientMap[rid] || `Recipient: ${rid.substring(0, 8)}`;
        opt.textContent = (isChannel && !name.startsWith('#') ? '#' : '') + name;
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
