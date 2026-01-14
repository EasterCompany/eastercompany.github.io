import { smartFetch, createPlaceholderMessage } from '../core/utils.js';

export const getChoresContent = () => {
    return `
        <div class="system-section-header">
            <i class='bx bx-task' style="color: #03dac6;"></i>
            <h2>Active Chores</h2>
            <button id="create-chore-btn" class="notif-action-btn" style="margin-left: auto;" title="New Chore"><i class='bx bx-plus'></i></button>
        </div>
        
        <!-- Create Chore Form -->
        <div id="create-chore-form" style="display: none; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <h3 style="margin-top: 0; color: #fff; font-size: 1em; margin-bottom: 10px;">New Courier Task</h3>
            <div style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                <input type="text" id="new-chore-instruction" placeholder="E.g., 'Find Fiat Punto in Belgrade'" style="flex: 2; min-width: 200px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
                <input type="text" id="new-chore-url" placeholder="Entry URL (Optional)" style="flex: 1; min-width: 150px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
                <input type="text" id="new-chore-owner" placeholder="Discord User ID" value="313071000877137920" style="flex: 1; min-width: 150px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 10px;">
                <button id="cancel-chore-btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #ccc; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button id="save-chore-btn" style="background: #03dac6; border: none; color: #000; padding: 6px 15px; border-radius: 4px; font-weight: bold; cursor: pointer;">Create Task</button>
            </div>
        </div>

        <div id="chores-list" class="system-monitor-widgets" style="margin-bottom: 30px; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px;"></div>
    `;
};

export async function updateChoresTab() {
    const container = document.getElementById('chores-list');
    const createBtn = document.getElementById('create-chore-btn');
    const form = document.getElementById('create-chore-form');
    const saveBtn = document.getElementById('save-chore-btn');
    const cancelBtn = document.getElementById('cancel-chore-btn');

    // Attach Listeners
    if (createBtn && !createBtn.dataset.listenerAttached) {
        createBtn.onclick = () => {
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
        };
        createBtn.dataset.listenerAttached = "true";
    }

    if (cancelBtn && !cancelBtn.dataset.listenerAttached) {
        cancelBtn.onclick = () => { form.style.display = 'none'; };
        cancelBtn.dataset.listenerAttached = "true";
    }

    if (saveBtn && !saveBtn.dataset.listenerAttached) {
        saveBtn.onclick = async () => {
            const instruction = document.getElementById('new-chore-instruction').value;
            const url = document.getElementById('new-chore-url').value;
            const ownerId = document.getElementById('new-chore-owner').value || "313071000877137920";
            
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
                        schedule: "every_6h"
                    })
                });
                form.style.display = 'none';
                document.getElementById('new-chore-instruction').value = '';
                document.getElementById('new-chore-url').value = '';
                updateChoresTab(); 
            } catch (e) {
                console.error(e);
                alert("Failed to create chore");
            } finally {
                saveBtn.innerHTML = "Create Task";
            }
        };
        saveBtn.dataset.listenerAttached = "true";
    }

    if (!container) return;

    try {
        const response = await smartFetch('/chores');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const chores = await response.json();

        if (!Array.isArray(chores) || chores.length === 0) {
            container.innerHTML = createPlaceholderMessage('empty', 'No active chores.', 'Create one to start monitoring.');
            return;
        }

        const html = chores.map(chore => {
            const lastRun = chore.last_run === 0 ? 'Never' : new Date(chore.last_run * 1000).toLocaleString();
            const memoryCount = chore.memory ? chore.memory.length : 0;
            const statusColor = chore.status === 'active' ? '#03dac6' : '#666';
            
            return `
                <div class="service-widget" style="border-left: 3px solid ${statusColor}; width: 100%;">
                    <div class="service-widget-header">
                        <i class='bx bx-search-alt' style="color: ${statusColor}"></i>
                        <h3 style="font-size: 0.95em; white-space: normal; line-height: 1.4;">${chore.natural_instruction}</h3>
                        <div style="margin-left: auto; display: flex; gap: 10px;">
                            <button class="icon-btn delete-chore-btn" data-id="${chore.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 5px;"><i class='bx bx-trash'></i></button>
                        </div>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Schedule:</span>
                            <span class="info-value">${chore.schedule}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Last Run:</span>
                            <span class="info-value">${lastRun}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Items Found:</span>
                            <span class="info-value">${memoryCount}</span>
                        </div>
                        <div class="service-widget-info" style="grid-column: span 2; margin-top: 5px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 5px;">
                            <span class="info-label">Target:</span>
                            <span class="info-value" style="font-size: 0.8em; opacity: 0.8; word-break: break-all;">${chore.execution_plan.entry_url || 'Auto-detected'}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = html;

        // Attach delete listeners
        container.querySelectorAll('.delete-chore-btn').forEach(btn => {
            btn.onclick = async (e) => {
                e.stopPropagation();
                if (confirm('Delete this chore?')) {
                    await smartFetch(`/chores/${btn.dataset.id}`, { method: 'DELETE' });
                    updateChoresTab();
                }
            };
        });

    } catch (e) {
        console.error("Failed to fetch chores", e);
    }
}
