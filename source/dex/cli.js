import { smartFetch, ansiToHtml } from './utils.js';

const CLI_COMMANDS = [
    // --- Cognitive Core ---
    {
        id: 'chat',
        title: 'Chat',
        icon: 'bx-message-rounded-dots',
        description: 'Engage with Dexter\'s internal cognitive core directly from the browser.',
        usage: 'Coming soon...',
        category: 'cognitive',
        dummy: true
    },
    {
        id: 'guardian',
        title: 'Guardian',
        icon: 'bx-shield-quarter',
        description: 'Manually trigger a Tier 1 technical audit. Analyzes vitals, logs, and events for system anomalies.',
        usage: 'dex guardian',
        category: 'cognitive'
    },
    {
        id: 'whisper',
        title: 'Whisper',
        icon: 'bx-microphone',
        description: 'Access the local OpenAI Whisper model for high-fidelity speech-to-text transcription.',
        usage: 'dex whisper transcribe -k <redis_key>',
        category: 'cognitive'
    },
    {
        id: 'ollama',
        title: 'Ollama',
        icon: 'bx-brain',
        description: 'Direct proxy to the underlying Ollama instance managing local large language models.',
        usage: 'dex ollama [pull|run|ps|list]',
        category: 'cognitive'
    },

    // --- Development Lifecycle ---
    {
        id: 'build',
        title: 'Build',
        icon: 'bx-package',
        description: 'Ecosystem-wide build system. Increments versions, compiles binaries, and updates the dashboard.',
        usage: 'dex build [major|minor|patch]',
        category: 'lifecycle'
    },
    {
        id: 'update',
        title: 'Update',
        icon: 'bx-cloud-download',
        description: 'Syncs all service repositories and applies the latest patches from source.',
        usage: 'dex update',
        category: 'lifecycle'
    },
    {
        id: 'test',
        title: 'Test',
        icon: 'bx-check-shield',
        description: 'Executes the unified test suite across all services (Format, Lint, and Unit Tests).',
        usage: 'dex test [service] [--models]',
        category: 'lifecycle'
    },
    {
        id: 'add',
        title: 'Add Service',
        icon: 'bx-plus-circle',
        description: 'Registers and installs a new service into the Dexter ecosystem from a remote repository.',
        usage: 'dex add <repo_url>',
        category: 'lifecycle'
    },
    {
        id: 'remove',
        title: 'Remove Service',
        icon: 'bx-minus-circle',
        description: 'Uninstalls a service and removes its registration from the global service map.',
        usage: 'dex remove <service_id>',
        category: 'lifecycle'
    },

    // --- System Management ---
    {
        id: 'status',
        title: 'Status',
        icon: 'bx-pulse',
        description: 'Real-time health check for all system components, including networking and version info.',
        usage: 'dex status [service|all]',
        category: 'system'
    },
    {
        id: 'logs',
        title: 'Logs',
        icon: 'bx-terminal',
        description: 'High-performance log streaming. Connects directly to localized service log files.',
        usage: 'dex logs <service> [-f]',
        category: 'system'
    },
    {
        id: 'system',
        title: 'System Info',
        icon: 'bx-info-square',
        description: 'Hardware introspection. Reports CPU, GPU, Memory, and OS package dependencies.',
        usage: 'dex system [info|scan|validate|install]',
        category: 'system'
    },
    {
        id: 'config',
        title: 'Config',
        icon: 'bx-slider-alt',
        description: 'Low-level configuration management for the centralized service-map.json.',
        usage: 'dex config <service> [field]',
        category: 'system'
    },
    {
        id: 'cache',
        title: 'Cache',
        icon: 'bx-data',
        description: 'Manages the local Redis-backed cognitive and ephemeral data cache.',
        usage: 'dex cache [clear|list]',
        category: 'system'
    },
    {
        id: 'serve',
        title: 'Serve',
        icon: 'bx-broadcast',
        description: 'Internal static file server for local development and dashboard hosting.',
        usage: 'dex serve -d <dir> -p <port>',
        category: 'system'
    },
    {
        id: 'event',
        title: 'Event Bus',
        icon: 'bx-share-alt',
        description: 'Direct interaction with the core event service. Manage the system-wide event stream.',
        usage: 'dex event [service|log|delete|analyst]',
        category: 'system'
    },
    {
        id: 'discord',
        title: 'Discord',
        icon: 'bx-message-square-dots',
        description: 'Manages the Discord engine, including channel mapping and contact synchronization.',
        usage: 'dex discord [contacts|channels|service|quiet]',
        category: 'system'
    },

    // --- Service Lifecycle ---
    {
        id: 'restart',
        title: 'Restart',
        icon: 'bx-refresh',
        description: 'Gracefully restarts all manageable systemd services in the ecosystem.',
        usage: 'dex restart [service|all]',
        category: 'service'
    },
    {
        id: 'start',
        title: 'Start',
        icon: 'bx-play',
        description: 'Initiates service execution for all stopped manageable components.',
        usage: 'dex start [service|all]',
        category: 'service'
    },
    {
        id: 'stop',
        title: 'Stop',
        icon: 'bx-stop',
        description: 'Gracefully terminates the execution of manageable systemd services.',
        usage: 'dex stop [service|all]',
        category: 'service'
    },

    // --- Proxy Proxies ---
    {
        id: 'python',
        title: 'Python Env',
        icon: 'bx-code-curly',
        description: 'Proxy command to run executables within Dexter\'s managed Python virtual environments.',
        usage: 'dex python <command>',
        category: 'proxy'
    },
    {
        id: 'bun',
        title: 'Bun Runtime',
        icon: 'bx-bolt-circle',
        description: 'Proxy command to the local Bun runtime for high-performance JavaScript execution.',
        usage: 'dex bun <args>',
        category: 'proxy'
    }
];

export const getCliInterfaceContent = () => {
    const categories = {
        cognitive: { title: 'Cognitive Core', icon: 'bx-brain', color: '#bb86fc' },
        lifecycle: { title: 'Development Lifecycle', icon: 'bx-git-branch', color: '#03dac6' },
        service: { title: 'Service Control', icon: 'bx-power-off', color: '#ffa500' },
        system: { title: 'System Management', icon: 'bx-cog', color: '#aaa' },
        proxy: { title: 'Runtime Proxies', icon: 'bx-code-alt', color: '#666' }
    };

    let html = `
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 60px 20px; margin-bottom: 40px;">
                <h1 style="font-size: 3em; margin-bottom: 15px; color: #fff; letter-spacing: -1px;">DEX CLI</h1>
                <p style="color: #888; max-width: 700px; margin: 0 auto; font-size: 1.1em; line-height: 1.6;">The unified command-line interface for the Dexter ecosystem. A high-fidelity toolset designed to manage, monitor, and evolve your autonomous infrastructure.</p>
            </div>
    `;

    for (const [catId, catInfo] of Object.entries(categories)) {
        const commands = CLI_COMMANDS.filter(cmd => cmd.category === catId);
        if (commands.length === 0) continue;

        html += `
            <div class="cli-category-section" style="margin-bottom: 60px;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 30px; padding: 0 20px;">
                    <i class='bx ${catInfo.icon}' style="color: ${catInfo.color}; font-size: 1.8em;"></i>
                    <h2 style="font-size: 1.4em; text-transform: uppercase; letter-spacing: 3px; color: #eee; margin: 0;">${catInfo.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 25px; padding: 0 20px;">
                    ${commands.map(cmd => `
                        <div class="cli-command-card ${cmd.dummy ? 'dummy' : ''}" data-cmd="${cmd.id}" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; position: relative; overflow: hidden; display: flex; flex-direction: column;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${catInfo.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 20px; position: relative; z-index: 1;">
                                <i class='bx ${cmd.icon}' style="font-size: 2.2em; color: ${catInfo.color};"></i>
                                <h3 style="font-size: 1.4em; color: #fff; margin: 0; letter-spacing: -0.5px;">${cmd.title}</h3>
                            </div>
                            <p style="font-size: 0.95em; color: #999; margin-bottom: 25px; line-height: 1.6; text-align: left; position: relative; z-index: 1; flex: 1;">${cmd.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.4); padding: 12px 18px; border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${catInfo.color}; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.03);">
                                <span style="opacity: 0.4; margin-right: 8px;">$</span>${cmd.usage}
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
                    <button id="terminal-action-btn" class="notif-action-btn" style="display: none; padding: 6px 20px;">Done</button>
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
        // --- FALLBACK TO SIMULATION ---
        logToTerminal(body, '* this is a demonstration', 'warning');
        await simulateExecution(cmdId, body);
    } finally {
        document.getElementById('terminal-action-btn').style.display = 'block';
    }
}

async function simulateExecution(cmdId, body) {
    await new Promise(r => setTimeout(r, 500));

    switch (cmdId) {
        case 'guardian':
            logToTerminal(body, 'Initializing Tier 1 Analysis...');
            await new Promise(r => setTimeout(r, 800));
            logToTerminal(body, 'Fetching system context...');
            logToTerminal(body, '  ✓ system_monitor (6.2 KiB)');
            logToTerminal(body, '  ✓ events (17.3 KiB)');
            logToTerminal(body, '  ✓ logs (22.9 KiB)');
            await new Promise(r => setTimeout(r, 1000));
            logToTerminal(body, 'Constructing prompt (47005 characters)...');
            logToTerminal(body, 'Running Guardian Analysis via Ollama (gpt-oss:20b)...');
            await new Promise(r => setTimeout(r, 1500));
            logToTerminal(body, '\n# System Health Snapshot', 'success');
            logToTerminal(body, 'Everything looks green. System is operating within normal parameters.');
            logToTerminal(body, '  • All 5 services reporting OK');
            logToTerminal(body, '  • No critical errors in last 50 log lines');
            logToTerminal(body, '  • Memory usage at 42%');
            await new Promise(r => setTimeout(r, 800));
            logToTerminal(body, '\nResetting Guardian timer...');
            logToTerminal(body, '✓ Guardian timer reset.', 'success');
            break;

        case 'test':
            logToTerminal(body, 'Executing system-wide test suite...');
            const services = ['cli', 'event', 'discord', 'tts', 'web'];
            for (const svc of services) {
                await new Promise(r => setTimeout(r, 600));
                logToTerminal(body, `Testing ${svc}...`);
                await new Promise(r => setTimeout(r, 400));
                logToTerminal(body, `  ✓ Format`, 'success');
                logToTerminal(body, `  ✓ Lint`, 'success');
                logToTerminal(body, `  ✓ Unit Tests`, 'success');
            }
            logToTerminal(body, '\n✨ All tests passed!', 'success');
            break;

        case 'build':
            logToTerminal(body, 'Incrementing version: 2.8.137 -> 2.8.138 (patch)');
            logToTerminal(body, 'Building all services from local source...');
            await new Promise(r => setTimeout(r, 1000));
            logToTerminal(body, '[1/3] Building dex-cli...');
            logToTerminal(body, '  ✓ compilation successful');
            await new Promise(r => setTimeout(r, 800));
            logToTerminal(body, '[2/3] Building dex-event-service...');
            logToTerminal(body, '  ✓ compilation successful');
            await new Promise(r => setTimeout(r, 800));
            logToTerminal(body, '[3/3] Building easter.company...');
            logToTerminal(body, '  ✓ bundling assets');
            await new Promise(r => setTimeout(r, 1200));
            logToTerminal(body, '\n✓ Build complete. Release 2.8.138 ready.', 'success');
            break;

        default:
            logToTerminal(body, `Executing ${cmdId} logic...`);
            await new Promise(r => setTimeout(r, 1000));
            logToTerminal(body, 'Operation completed successfully.', 'success');
    }

    document.getElementById('terminal-status-badge').className = 'terminal-status status-success';
    document.getElementById('terminal-status-badge').textContent = 'Completed';
}

export function initCliDashboard() {
    const container = document.getElementById('cli-interface-container');
    if (!container) return;

    container.innerHTML = getCliInterfaceContent();

    // Add interactivity
    container.querySelectorAll('.cli-command-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.borderColor = 'rgba(255,255,255,0.15)';
            card.style.backgroundColor = 'rgba(255,255,255,0.04)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(255,255,255,0.05)';
            card.style.backgroundColor = 'rgba(255,255,255,0.02)';
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