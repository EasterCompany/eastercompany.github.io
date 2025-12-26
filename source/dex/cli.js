import { createPlaceholderMessage, escapeHtml, smartFetch } from './utils.js';

const ANSI_MAP = {
    '31': 'ansi-red',
    '91': 'ansi-bright-red',
    '32': 'ansi-green',
    '33': 'ansi-yellow',
    '34': 'ansi-blue',
    '35': 'ansi-purple',
    '36': 'ansi-cyan',
    '37': 'ansi-white',
    '90': 'ansi-dark-gray'
};

function ansiToHtml(text) {
    let escaped = escapeHtml(text);
    
    // Handle Reset
    escaped = escaped.replace(/\x1b\[0m/g, '</span>');

    // Handle Colors
    escaped = escaped.replace(/\x1b\[(\d+)m/g, (match, code) => {
        const className = ANSI_MAP[code];
        return className ? `<span class="${className}">` : '';
    });

    // Cleanup unclosed spans
    const openCount = (escaped.match(/<span/g) || []).length;
    const closeCount = (escaped.match(/<\/span/g) || []).length;
    if (openCount > closeCount) {
        escaped += '</span>'.repeat(openCount - closeCount);
    }

    return escaped;
}

const CLI_COMMANDS = [
    {
        id: 'chat',
        title: 'Chat',
        icon: 'bx-message-rounded-dots',
        description: 'Placeholder for the future Dexter chat interface.',
        usage: 'Coming soon...',
        category: 'cognitive',
        dummy: true
    },
    {
        id: 'guardian',
        title: 'Guardian',
        icon: 'bx-shield-quarter',
        description: 'Trigger a manual Tier 1 Guardian system audit.',
        usage: 'dex guardian',
        category: 'cognitive'
    },
    {
        id: 'status',
        title: 'Status',
        icon: 'bx-pulse',
        description: 'Check the real-time health of all system services.',
        usage: 'dex status [service]',
        category: 'system'
    },
    {
        id: 'build',
        title: 'Build',
        icon: 'bx-package',
        description: 'Build and install the entire ecosystem from source.',
        usage: 'dex build [major|minor|patch]',
        category: 'lifecycle'
    },
    {
        id: 'update',
        title: 'Update',
        icon: 'bx-cloud-download',
        description: 'Fetch and apply the latest updates for all components.',
        usage: 'dex update',
        category: 'lifecycle'
    },
    {
        id: 'test',
        title: 'Test',
        icon: 'bx-check-shield',
        description: 'Execute the comprehensive system-wide test suite.',
        usage: 'dex test [service]',
        category: 'lifecycle'
    },
    {
        id: 'logs',
        title: 'Logs',
        icon: 'bx-terminal',
        description: 'Stream or tail logs from any manageable service.',
        usage: 'dex logs <service> [-f]',
        category: 'system'
    },
    {
        id: 'system',
        title: 'System Info',
        icon: 'bx-info-square',
        description: 'View detailed hardware vitals and OS-level info.',
        usage: 'dex system [--json]',
        category: 'system'
    },
    {
        id: 'config',
        title: 'Config',
        icon: 'bx-slider-alt',
        description: 'View or modify the central service-map.json.',
        usage: 'dex config <service> [field]',
        category: 'system'
    }
];

export const getCliInterfaceContent = () => {
    const categories = {
        cognitive: { title: 'Cognitive Core', icon: 'bx-brain', color: '#bb86fc' },
        lifecycle: { title: 'Development Lifecycle', icon: 'bx-git-branch', color: '#03dac6' },
        system: { title: 'System Management', icon: 'bx-cog', color: '#aaa' }
    };

    let html = `
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;

    for (const [catId, catInfo] of Object.entries(categories)) {
        const commands = CLI_COMMANDS.filter(cmd => cmd.category === catId);
        if (commands.length === 0) continue;

        html += `
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${catInfo.icon}' style="color: ${catInfo.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${catInfo.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${commands.map(cmd => `
                        <div class="cli-command-card ${cmd.dummy ? 'dummy' : ''}" data-cmd="${cmd.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${catInfo.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${cmd.icon}' style="font-size: 2em; color: ${catInfo.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${cmd.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${cmd.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${catInfo.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${cmd.usage}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    html += `</div>`;
    return html;
};

let terminalActive = false;

function openTerminal(cmdInfo) {
    let overlay = document.getElementById('cli-terminal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'cli-terminal-overlay';
        overlay.className = 'cli-execution-overlay';
        overlay.innerHTML = `
            <div class="cli-terminal-window">
                <div class="cli-terminal-header">
                    <div class="terminal-title">
                        <i class='bx bx-terminal'></i>
                        <span id="terminal-cmd-name">dex command</span>
                        <span id="terminal-status-badge" class="terminal-status status-running">Running</span>
                    </div>
                    <i class='bx bx-x' id="close-terminal-btn" style="cursor: pointer; font-size: 1.5em; color: #666; transition: color 0.2s;"></i>
                </div>
                <div id="cli-terminal-body" class="cli-terminal-body"></div>
                <div class="cli-terminal-footer">
                    <button id="terminal-action-btn" class="notif-action-btn" style="display: none;">Done</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        document.getElementById('close-terminal-btn').onclick = () => closeTerminal();
        document.getElementById('terminal-action-btn').onclick = () => closeTerminal();
    }

    const body = document.getElementById('cli-terminal-body');
    body.innerHTML = '';
    document.getElementById('terminal-cmd-name').textContent = `dex ${cmdInfo.id}`;
    document.getElementById('terminal-status-badge').className = 'terminal-status status-running';
    document.getElementById('terminal-status-badge').textContent = 'Running';
    document.getElementById('terminal-action-btn').style.display = 'none';

    overlay.classList.add('active');
    terminalActive = true;

    return body;
}

function closeTerminal() {
    const overlay = document.getElementById('cli-terminal-overlay');
    if (overlay) overlay.classList.remove('active');
    terminalActive = false;
}

function logToTerminal(body, text, type = 'output') {
    if (!terminalActive) return;
    const line = document.createElement('div');
    line.className = `terminal-line terminal-${type}`;
    
    if (type === 'prompt') {
        line.innerHTML = `<span class=\"terminal-prompt\">$</span> ${text}`;
    } else {
        line.innerHTML = ansiToHtml(text);
    }
    
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
}

async function executeRealCommand(cmdId) {
    const cmdInfo = CLI_COMMANDS.find(c => c.id === cmdId);
    if (!cmdInfo) return;

    const body = openTerminal(cmdInfo);
    logToTerminal(body, `dex ${cmdId}`, 'prompt');

    try {
        const response = await smartFetch('/cli/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: cmdId, args: [] })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            lines.forEach(line => {
                if (line.trim() === '') return;
                
                let type = 'output';
                if (line.includes('[ERROR]')) type = 'error';
                else if (line.includes('[SUCCESS]')) type = 'success';
                else if (line.includes('✓')) type = 'success';
                else if (line.includes('!')) type = 'warning';
                
                logToTerminal(body, line, type);
            });
        }

        document.getElementById('terminal-status-badge').className = 'terminal-status status-success';
        document.getElementById('terminal-status-badge').textContent = 'Completed';
    } catch (err) {
        logToTerminal(body, `Connection Error: ${err.message}`, 'error');
        document.getElementById('terminal-status-badge').className = 'terminal-status status-error';
        document.getElementById('terminal-status-badge').textContent = 'Failed';
    } finally {
        document.getElementById('terminal-action-btn').style.display = 'block';
    }
}

export function initCliDashboard() {
    const container = document.getElementById('cli-interface-container');
    if (!container) return;

    container.innerHTML = getCliInterfaceContent();

    // Add interactivity
    container.querySelectorAll('.cli-command-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.borderColor = 'rgba(255,255,255,0.15)';
            card.style.backgroundColor = 'rgba(255,255,255,0.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(255,255,255,0.05)';
            card.style.backgroundColor = 'rgba(255,255,255,0.03)';
        });
        card.addEventListener('click', () => {
            const cmd = card.dataset.cmd;
            if (cmd === 'chat') {
                alert('Connection to cognitive core pending deployment...');
                return;
            }
            executeRealCommand(cmd);
        });
    });
}
