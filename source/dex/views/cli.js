import { createPlaceholderMessage, escapeHtml, smartFetch, ansiToHtml } from '../core/utils.js';

const CLI_COMMANDS = [
    {
        id: 'chat',
        title: 'Chat',
        icon: 'bx-message-rounded-dots',
        description: 'Placeholder for the future Dexter chat interface.',
        usage: 'Coming soon...', 
        category: 'cognitive',
        dummy: true,
        docs: {
            overview: 'The Cognitive Chat interface will allow direct, natural language interaction with Dexter\'s strategic layer.',
            details: [
                'Context-aware reasoning based on system-wide events.',
                'Multi-modal input support (text, voice, images).',
                'Deep integration with the Roadmap and Blueprint systems.'
            ],
            extended_usage: 'Coming in Dexter v3.0'
        },
        demo_output: [
            'Initializing Cognitive Bridge...',
            '[ERROR] Neural uplink not established.',
            'Reason: Core deployment pending v3.0 release.'
        ]
    },
    {
        id: 'guardian',
        title: 'Guardian',
        icon: 'bx-shield-quarter',
        description: 'Trigger a manual Tier 1 Guardian system audit.',
        usage: 'dex guardian',
        category: 'cognitive',
        docs: {
            overview: 'Guardian is the Technical Sentry of the ecosystem. It performs automated health checks, log analysis, and technical audits.',
            details: [
                'Scans for service crashes and restarts.',
                'Analyzes logs for high-severity errors.',
                'Verifies system-wide resource availability (Redis, Ollama).',
                'Triggers immediate notifications if anomalies are detected.'
            ],
            extended_usage: 'dex guardian [--force] [--quiet]'
        },
        demo_output: [
            'Running Tier 1 Guardian Audit...',
            '→ Checking service health...',
            '✓ dex-event-service: ONLINE (v2.8.198)',
            '✓ dex-discord-service: ONLINE (v2.8.68)',
            '→ Analyzing system logs...',
            '✓ No critical errors detected in last 500 lines.',
            '→ Verifying resource availability...',
            '✓ Redis cluster reachable.',
            '✓ Ollama server responsive.',
            '✓ Audit complete. System is healthy.'
        ]
    },
    {
        id: 'status',
        title: 'Status',
        icon: 'bx-pulse',
        description: 'Check the real-time health of all system services.',
        usage: 'dex status [service]',
        category: 'system',
        docs: {
            overview: 'The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.',
            details: [
                'Reports status (online/offline/degraded).',
                'Displays version strings and build hashes.',
                'Shows network addresses and ports.',
                'Validates internal service-to-service communication.'
            ],
            extended_usage: 'dex status [service_id] [--json]'
        },
        demo_output: [
            'ID       NAME      STATUS    VERSION    ADDRESS',
            '───      ────      ──────    ───────    ───────',
            'cli      CLI       ONLINE    2.8.143    local',
            'event    Events    ONLINE    2.8.198    127.0.0.1:8100',
            'discord  Discord   ONLINE    2.8.68     127.0.0.1:8300',
            'tts      TTS       ONLINE    0.0.25     127.0.0.1:8200',
            'web      Web       ONLINE    0.0.5      127.0.0.1:8400'
        ]
    },
    {
        id: 'build',
        title: 'Build',
        icon: 'bx-package',
        description: 'Build and install the entire ecosystem from source.',
        usage: 'dex build [major|minor|patch]',
        category: 'lifecycle',
        docs: {
            overview: 'The Build command is the primary entry point for ecosystem evolution. It handles versioning, bundling, and deployment.',
            details: [
                'Increments semantic versioning automatically.',
                'Bundles JavaScript and CSS assets for the frontend.',
                'Builds Go binaries and Python environments.',
                'Creates Git tags and pushes to remote repositories.',
                'Handles post-build cleanup and Ollama model synchronization.'
            ],
            extended_usage: 'dex build [patch|minor|major] [--force] [--skip-git]'
        },
        demo_output: [
            'Incrementing version: 2.11.173 -> 2.11.174 (patch)',
            'Cleaning up old build files...',
            'Bundling JavaScript (97.3kb)...',
            'Bundling CSS (24.8kb)...',
            'Building binaries for target architecture: linux/amd64',
            '✓ Successfully built easter-company!',
            '✓ Release 2.11.174 published to https://easter.company'
        ]
    },
    {
        id: 'update',
        title: 'Update',
        icon: 'bx-cloud-download',
        description: 'Fetch and apply the latest updates for all components.',
        usage: 'dex update',
        category: 'lifecycle',
        docs: {
            overview: 'Update pulls the latest changes from the central repositories and synchronizes your local environment.',
            details: [
                'Performs git fetch/pull for all configured services.',
                'Verifies compatibility between local and remote versions.',
                'Triggers a rebuild if significant changes are detected.'
            ],
            extended_usage: 'dex update [--service=name]'
        },
        demo_output: [
            'Fetching updates from remote repositories...',
            '→ dex-cli: Already up to date.',
            '→ dex-event-service: Pulled 3 commits.',
            '→ dex-discord-service: Already up to date.',
            '✓ Environment synchronized successfully.'
        ]
    },
    {
        id: 'test',
        title: 'Test',
        icon: 'bx-check-shield',
        description: 'Execute the comprehensive system-wide test suite.',
        usage: 'dex test [service]',
        category: 'lifecycle',
        docs: {
            overview: 'Test ensures the integrity of the codebase by running unit tests, linters, and integration checks.',
            details: [
                'Runs go test for backend services.',
                'Executes linting via golangci-lint and ruff.',
                'Validates JSON configurations and schemas.',
                'Reports duration and pass/fail metrics.'
            ],
            extended_usage: 'dex test [service_id] [--bench] [--coverage]'
        },
        demo_output: [
            'Running system-wide test suite...',
            'PASS  dex-cli/utils/version_test.go (0.042s)',
            'PASS  dex-event-service/handlers/event_test.go (0.156s)',
            'PASS  dex-discord-service/audio/mixer_test.go (0.892s)',
            '✓ All 42 tests passed (1.09s)'
        ]
    },
    {
        id: 'logs',
        title: 'Logs',
        icon: 'bx-terminal',
        description: 'Stream or tail logs from any manageable service.',
        usage: 'dex logs <service> [-f]',
        category: 'system',
        docs: {
            overview: 'Logs provides real-time observability into the background processes of the Dexter services.',
            details: [
                'Tail live output from systemd services.',
                'Support for following (-f) and history limiting.',
                'ANSI color support for terminal readability.',
                'Aggregated view for multi-instance deployments.'
            ],
            extended_usage: 'dex logs <service_id> [-f] [-n lines]'
        },
        demo_output: [
            '[2025-12-26 14:20:01] [INFO] event-service: Processed webhook from Discord.',
            '[2025-12-26 14:20:05] [DEBUG] discord-service: Voice channel activity detected.',
            '[2025-12-26 14:20:10] [INFO] analyst-worker: Triggering Tier 1 audit...',
            '[2025-12-26 14:20:12] [SUCCESS] analyst-worker: Tier 1 audit completed.'
        ]
    },
    {
        id: 'system',
        title: 'System Info',
        icon: 'bx-info-square',
        description: 'View detailed hardware vitals and OS-level info.',
        usage: 'dex system [--json]',
        category: 'system',
        docs: {
            overview: 'System provides detailed hardware observability, focused on AI performance metrics (CPU/GPU/VRAM).',
            details: [
                'CPU Core/Thread count and current utilization.',
                'RAM and VRAM (GPU) availability.',
                'Storage usage for local model weights.',
                'OS-level environment variable validation.'
            ],
            extended_usage: 'dex system [--json] [--vitals-only]'
        },
        demo_output: [
            'OS: Linux (6.12.0-generic)',
            'CPU: AMD Ryzen 9 7950X (16 Cores / 32 Threads)',
            'RAM: 64.0 GB (12.4 GB Used)',
            'GPU: NVIDIA GeForce RTX 4090 (24.0 GB VRAM)',
            'STORAGE: 2.0 TB NVMe (450 GB Used)'
        ]
    },
    {
        id: 'config',
        title: 'Config',
        icon: 'bx-slider-alt',
        description: 'View or modify the central service-map.json.',
        usage: 'dex config <service> [field]',
        category: 'system',
        docs: {
            overview: 'Config manages the central registry that defines how services find and interact with each other.',
            details: [
                'View service definitions (domains, ports, IDs).',
                'Modify environment-specific parameters.',
                'Update authentication secrets and API endpoints.'
            ],
            extended_usage: 'dex config get <service> [field]\ndex config set <service> <field> <value>'
        },
        demo_output: [
            'Current configuration for [event-service]:',
            '{',
            '  "id": "event-service",',
            '  "port": 8100,',
            '  "domain": "127.0.0.1",',
            '  "log_level": "info",',
            '  "max_events": 10000',
            '}'
        ]
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

            <div class="cli-install-section">
                <div class="cli-install-header">
                    <i class='bx bxs-download'></i>
                    <h2>One-Step Installation</h2>
                </div>
                <div class="cli-install-command" id="install-command-copy">
                    <code>curl -sSL https://easter.company/scripts/install_dex-cli.sh | bash</code>
                    <i class='bx bx-copy'></i>
                </div>
                <p class="cli-install-note">Installs the latest pre-built binary for Linux/macOS and configures your environment.</p>
            </div>

            <div class="cli-divider">
                <i class='bx bx-chevron-down'></i>
                <span>Interactive Demos</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;

    for (const [catId, catInfo] of Object.entries(categories)) {
        const commands = CLI_COMMANDS.filter(cmd => cmd.category === catId);
        if (commands.length === 0) continue;

        html += `
            <div class="cli-category-section">
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

    html += `
        <div class="cli-divider">
            <i class='bx bx-chevron-down'></i>
            <span>Join the Evolution</span>
            <i class='bx bx-chevron-down'></i>
        </div>

        <div class="cli-contribute-section">
            <div class="cli-contribute-card">
                <i class='bx bxl-github'></i>
                <h3>For Developers</h3>
                <p>Dexter is open-source and built for the community. Help us refine the neural architecture or add new command modules.</p>
                <a href="https://github.com/eastercompany" target="_blank" class="notif-action-btn active">Contribute on GitHub</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>For Users</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="notif-action-btn active">Join Discord</a>
            </div>
        </div>
    </div>`;
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
                <div class="cli-terminal-split">
                    <div class="cli-terminal-pane">
                        <div id="cli-terminal-body" class="cli-terminal-body"></div>
                    </div>
                    <div class="cli-terminal-pane">
                        <div id="cli-docs-pane" class="cli-docs-pane"></div>
                    </div>
                </div>
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
    const docs = document.getElementById('cli-docs-pane');
    
    body.innerHTML = '';
    
    // Render Documentation
    const docData = cmdInfo.docs || { overview: cmdInfo.description, details: [], extended_usage: cmdInfo.usage };
    docs.innerHTML = `
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${cmdInfo.title}</h2>
            <p>${docData.overview}</p>
        </div>
        ${docData.details.length > 0 ? `
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${docData.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${docData.extended_usage}</pre>
        </div>
    `;

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
        line.innerHTML = `<span class="terminal-prompt">$</span> ${text}`;
    } else {
        line.innerHTML = ansiToHtml(text);
    }
    
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
}

async function showDemoCommand(cmdId) {

    const cmdInfo = CLI_COMMANDS.find(c => c.id === cmdId);

    if (!cmdInfo) return;



    const body = openTerminal(cmdInfo);

    logToTerminal(body, `dex ${cmdId}`, 'prompt');



    const demoLines = cmdInfo.demo_output || ['Executing command...', '✓ Done.'];

    

    // Simulate realistic terminal output with delays

    for (const line of demoLines) {

        await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));

        

        let type = 'output';

        if (line.includes('[ERROR]')) type = 'error';

        else if (line.includes('[SUCCESS]')) type = 'success';

        else if (line.includes('✓')) type = 'success';

        else if (line.includes('!')) type = 'warning';

        

        logToTerminal(body, line, type);

    }



    document.getElementById('terminal-status-badge').className = 'terminal-status status-success';

    document.getElementById('terminal-status-badge').textContent = 'Completed (Demo)';

    document.getElementById('terminal-action-btn').style.display = 'block';

}



export function initCliDashboard() {

    const container = document.getElementById('cli-interface-container');

    if (!container) return;



    container.innerHTML = getCliInterfaceContent();



    // Add copy-to-clipboard for install command

    const copyBtn = document.getElementById('install-command-copy');

    if (copyBtn) {

        copyBtn.addEventListener('click', () => {

            const command = copyBtn.querySelector('code').textContent;

            navigator.clipboard.writeText(command).then(() => {

                const icon = copyBtn.querySelector('i');

                icon.className = 'bx bx-check';

                icon.style.color = '#5eff5e';

                setTimeout(() => {

                    icon.className = 'bx bx-copy';

                    icon.style.color = '#bb86fc';

                }, 2000);

            });

        });

    }



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

            showDemoCommand(cmd);

        });

    });

}
