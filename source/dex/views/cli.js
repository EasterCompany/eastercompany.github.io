import { createPlaceholderMessage, escapeHtml, smartFetch, ansiToHtml } from '../core/utils.js';

const CLI_COMMANDS = [
    {
        id: 'chat',
        title: 'Chat',
        icon: 'bx-message-rounded-dots',
        description: 'Direct natural language interaction with Dexter\'s cognitive core.',
        usage: 'dex chat', 
        category: 'cognitive',
        dummy: true,
        docs: {
            overview: 'The Cognitive Chat interface allows direct interaction with Dexter\'s strategic layer using natural language.',
            details: [
                'Context-aware reasoning based on system-wide events.',
                'Multi-modal input support (text, voice, images).',
                'Deep integration with the Roadmap and Blueprint systems.',
                'Real-time access to logs and service status.'
            ],
            extended_usage: 'dex chat [--voice] [--vision]'
        },
        demo_output: [
            '\x1b[35m[DEXTER]\x1b[0m Initializing neural uplink...',
            '\x1b[32m✓\x1b[0m Context window loaded (128k tokens)',
            '\x1b[34m[SYSTEM]\x1b[0m Attaching to live event stream...',
            '',
            'Owen: "Dexter, what\'s the status of the new event service build?"',
            'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',
            '        I\'ve noticed a slight increase in latency on the Redis cache,',
            '        should I run a diagnostic?"'
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
            overview: 'Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.',
            details: [
                'Scans for service crashes and restarts.',
                'Analyzes logs for high-severity errors.',
                'Verifies system-wide resource availability.',
                'Triggers immediate notifications if anomalies are detected.'
            ],
            extended_usage: 'dex guardian [--force] [--quiet]'
        },
        demo_output: [
            '\x1b[35m[GUARDIAN]\x1b[0m Starting Tier 1 System Audit...',
            '→ Probing 6 active services...',
            '\x1b[32m✓\x1b[0m Service: dex-event-service (Healthy)',
            '\x1b[32m✓\x1b[0m Service: dex-discord-service (Healthy)',
            '\x1b[32m✓\x1b[0m Service: dex-tts-service (Healthy)',
            '→ Analyzing recent error logs (last 60 mins)...',
            '\x1b[32m✓\x1b[0m 0 critical, 2 minor anomalies found.',
            '→ Verifying Redis consistency...',
            '\x1b[32m✓\x1b[0m All process IDs synchronized.',
            '\x1b[32m✓\x1b[0m \x1b[1mAudit Complete: System Integrity 100%\x1b[0m'
        ]
    },
    {
        id: 'ollama',
        title: 'Ollama',
        icon: 'bx-brain',
        description: 'Manage local LLMs and neural vision models.',
        usage: 'dex ollama [sync|pull|list]',
        category: 'system',
        docs: {
            overview: 'Ollama management tools for controlling local model weights and custom neural configurations.',
            details: [
                'Synchronizes custom Dexter model templates.',
                'Pulls latest base weights (Gemma 3, Qwen 3).',
                'Verifies VRAM availability for target models.',
                'Manages vision-language model (VLM) attachments.'
            ],
            extended_usage: 'dex ollama sync\ndex ollama pull <model>\ndex ollama list'
        },
        demo_output: [
            '\x1b[34m[OLLAMA]\x1b[0m Synchronizing custom Dexter models...',
            '→ Pulling base: gemma3:12b... \x1b[32m[100%]\x1b[0m',
            '→ Creating dex-analyst-guardian...',
            '\x1b[32m✓\x1b[0m Model weights verified (SHA256: 8f3b5...)',
            '→ Creating dex-vision-model...',
            '\x1b[32m✓\x1b[0m VLM integration complete.',
            '',
            '\x1b[1mACTIVE MODELS:\x1b[0m',
            'dex-commit-model       12b    \x1b[32mREADY\x1b[0m',
            'dex-analyst-guardian   20b    \x1b[32mREADY\x1b[0m',
            'dex-vision-model       8b     \x1b[32mREADY\x1b[0m'
        ]
    },
    {
        id: 'status',
        title: 'Status',
        icon: 'bx-pulse',
        description: 'Real-time health overview of all Dexter services.',
        usage: 'dex status',
        category: 'system',
        docs: {
            overview: 'Provides a high-level overview of the health, versioning, and connectivity of all network nodes.',
            details: [
                'Reports status (online/offline/degraded).',
                'Displays version strings and build hashes.',
                'Shows network addresses and ports.',
                'Validates cross-service communication tokens.'
            ],
            extended_usage: 'dex status [service_id] [--json]'
        },
        demo_output: [
            '\x1b[1mID       NAME      STATUS    VERSION    ADDRESS\x1b[0m',
            '───      ────      ──────    ───────    ───────',
            'cli      CLI       \x1b[32mONLINE\x1b[0m    2.8.143    local',
            'event    Events    \x1b[32mONLINE\x1b[0m    2.8.198    127.0.0.1:8100',
            'discord  Discord   \x1b[32mONLINE\x1b[0m    2.8.68     127.0.0.1:8300',
            'tts      TTS       \x1b[32mONLINE\x1b[0m    0.0.25     127.0.0.1:8200',
            'web      Web       \x1b[32mONLINE\x1b[0m    0.0.5      127.0.0.1:8400',
            '',
            '\x1b[34m[NET]\x1b[0m All internal gateways verified via 127.0.0.1.'
        ]
    },
    {
        id: 'build',
        title: 'Build',
        icon: 'bx-package',
        description: 'Increment version and build entire ecosystem.',
        usage: 'dex build [patch|minor|major]',
        category: 'lifecycle',
        docs: {
            overview: 'The primary entry point for ecosystem evolution. Handles versioning and deployment.',
            details: [
                'Increments semantic versioning automatically.',
                'Bundles JS/CSS assets with content hashing.',
                'Builds Go binaries and Python environments.',
                'Creates Git tags and pushes to remotes.',
                'Handles post-build service restarts.'
            ],
            extended_usage: 'dex build patch --force --skip-git'
        },
        demo_output: [
            '# \x1b[1mBuilding Dexter Ecosystem\x1b[0m',
            '→ Version: 2.11.177 -> \x1b[32m2.11.178\x1b[0m (patch)',
            '→ Cleaning old artifacts...',
            '→ Bundling frontend assets... \x1b[32m[DONE]\x1b[0m',
            '→ Compiling dex-cli (Go 1.23)... \x1b[32m[DONE]\x1b[0m',
            '→ Verifying Python venv (3.13)... \x1b[32m[DONE]\x1b[0m',
            '→ Pushing Git tag v2.11.178...',
            '→ \x1b[34mPublishing to https://easter.company...\x1b[0m',
            '\x1b[32m✓ Successfully built and deployed version 2.11.178!\x1b[0m'
        ]
    },
    {
        id: 'test',
        title: 'Test',
        icon: 'bx-check-shield',
        description: 'Run unit tests, linters, and integration checks.',
        usage: 'dex test',
        category: 'lifecycle',
        docs: {
            overview: 'Ensures code quality by running the full system test suite.',
            details: [
                'Runs go test for all backend services.',
                'Executes static analysis via golangci-lint.',
                'Runs Python unit tests for TTS logic.',
                'Validates configuration schemas.'
            ],
            extended_usage: 'dex test [service] [--coverage]'
        },
        demo_output: [
            '\x1b[1mRunning System Test Suite...\x1b[0m',
            '',
            '\x1b[32mPASS\x1b[0m  dex-cli/utils/version_parser_test.go',
            '\x1b[32mPASS\x1b[0m  dex-event-service/endpoints/roadmap_test.go',
            '\x1b[32mPASS\x1b[0m  dex-discord-service/audio/redis_test.go',
            '\x1b[33mWARN\x1b[0m  dex-tts-service (Lint): line 42 has long line',
            '',
            '\x1b[1mTest Summary:\x1b[0m',
            '  Passed:  \x1b[32m48\x1b[0m',
            '  Failed:  \x1b[31m0\x1b[0m',
            '  Skipped: \x1b[33m2\x1b[0m',
            '\x1b[32m✓ All critical path tests passed (2.4s)\x1b[0m'
        ]
    },
    {
        id: 'service',
        title: 'Service',
        icon: 'bx-server',
        description: 'Manage individual systemd background services.',
        usage: 'dex service [start|stop|restart]',
        category: 'lifecycle',
        docs: {
            overview: 'Direct control over the background processes that power the Dexter ecosystem.',
            details: [
                'Interfaces with systemd units.',
                'Supports starting, stopping, and restarting.',
                'Displays detailed uptime and PID info.',
                'Monitors resource consumption per service.'
            ],
            extended_usage: 'dex service restart all\ndex service stop discord'
        },
        demo_output: [
            '→ Restarting dex-event-service...',
            '\x1b[32m✓\x1b[0m Service stopped (PID 19420)',
            '\x1b[32m✓\x1b[0m Service started (PID 20155)',
            '→ Verifying health check (http://127.0.0.1:8100/status)...',
            '\x1b[32m✓\x1b[0m Response received in 12ms.',
            '',
            '\x1b[1mService uptime: 4 seconds\x1b[0m'
        ]
    },
    {
        id: 'logs',
        title: 'Logs',
        icon: 'bx-terminal',
        description: 'Aggregated real-time log streaming for all nodes.',
        usage: 'dex logs <service> [-f]',
        category: 'system',
        docs: {
            overview: 'Observability tool for monitoring live service output.',
            details: [
                'Aggregates logs from distributed nodes.',
                'Full ANSI color support.',
                'Follow mode (-f) for active debugging.',
                'Filter by severity or service ID.'
            ],
            extended_usage: 'dex logs discord -f --n 50'
        },
        demo_output: [
            '\x1b[34m[DISCORD]\x1b[0m \x1b[90m14:30:05\x1b[0m [INFO] Joined voice channel: 1437617331...',
            '\x1b[34m[DISCORD]\x1b[0m \x1b[90m14:30:08\x1b[0m [DEBUG] VAD triggered by user oweneaster',
            '\x1b[35m[EVENT]\x1b[0m   \x1b[90m14:30:09\x1b[0m [INFO] Emitted: messaging.user.speaking.started',
            '\x1b[32m[TTS]\x1b[0m     \x1b[90m14:30:12\x1b[0m [INFO] Generating audio for 12 words...',
            '\x1b[34m[DISCORD]\x1b[0m \x1b[90m14:30:15\x1b[0m [SUCCESS] Audio playback completed.',
            '\x1b[90m[Watching for new logs...]\x1b[0m'
        ]
    },
    {
        id: 'event',
        title: 'Event',
        icon: 'bx-broadcast',
        description: 'Manually query or emit system-wide events.',
        usage: 'dex event [list|emit|query]',
        category: 'system',
        docs: {
            overview: 'The event bus interface for manual debugging and data extraction.',
            details: [
                'Query the history of the system event log.',
                'Manually emit mock events for testing.',
                'Filter events by type, service, or timestamp.',
                'Export event data to JSON for analysis.'
            ],
            extended_usage: 'dex event query --type system.cli.command\ndex event emit custom.alert "Hello World"'
        },
        demo_output: [
            '\x1b[1mRecent Events (Limit 5):\x1b[0m',
            '1. system.build.completed    \x1b[90m2 mins ago\x1b[0m',
            '2. log_entry                 \x1b[90m1 min ago\x1b[0m',
            '3. metric_recorded           \x1b[90m45 secs ago\x1b[0m',
            '4. system.cli.command        \x1b[90m12 secs ago\x1b[0m',
            '5. error_occurred            \x1b[31m5 secs ago\x1b[0m',
            '',
            '\x1b[34m[CMD]\x1b[0m Use --json for full data payload.'
        ]
    },
    {
        id: 'discord',
        title: 'Discord',
        icon: 'bx-bot',
        description: 'Control the Discord engine and bot status.',
        usage: 'dex discord [ping|reconnect|status]',
        category: 'system',
        docs: {
            overview: 'Direct control over the Discord bot integration and audio engine.',
            details: [
                'Checks API latency and gateway health.',
                'Forces a gateway reconnection.',
                'Displays active users and voice channel status.',
                'Manages bot status text and activity presence.'
            ],
            extended_usage: 'dex discord ping\ndex discord status'
        },
        demo_output: [
            '\x1b[34m[DISCORD]\x1b[0m Querying Discord API health...',
            '→ Gateway Latency: \x1b[32m42ms\x1b[0m',
            '→ API Latency: \x1b[32m88ms\x1b[0m',
            '→ Active Guilds: 1',
            '→ Bot Status: \x1b[32mONLINE\x1b[0m',
            '→ Current Presence: "Managing the Nerve Center"',
            '',
            '\x1b[32m✓ Bot is functioning correctly.\x1b[0m'
        ]
    },
    {
        id: 'system',
        title: 'System Info',
        icon: 'bx-info-square',
        description: 'Detailed hardware and OS-level performance vitals.',
        usage: 'dex system',
        category: 'system',
        docs: {
            overview: 'Performance observability tool focused on AI resource availability.',
            details: [
                'CPU Core/Thread count and current utilization.',
                'RAM and VRAM (GPU) availability for LLM inference.',
                'Storage usage for local model weights and logs.',
                'OS environment validation.'
            ],
            extended_usage: 'dex system [--json] [--vitals-only]'
        },
        demo_output: [
            '\x1b[1mDEXTER SYSTEM VITALS\x1b[0m',
            'OS: Linux (6.12.0-generic)',
            'CPU: AMD Ryzen 9 7950X (32 Threads) \x1b[32m[4.2%]\x1b[0m',
            'RAM: 64.0 GB total / \x1b[32m12.4 GB used\x1b[0m',
            'GPU: NVIDIA RTX 4090 (24 GB VRAM) \x1b[32m[8.1 GB used]\x1b[0m',
            'STORAGE: 2.0 TB NVMe \x1b[32m[450 GB used]\x1b[0m',
            '',
            '\x1b[34m[IO]\x1b[0m Local Ollama server connected via 127.0.0.1:11434'
        ]
    },
    {
        id: 'config',
        title: 'Config',
        icon: 'bx-slider-alt',
        description: 'View or modify the central service-map.json.',
        usage: 'dex config',
        category: 'system',
        docs: {
            overview: 'Manages the central registry that defines service interaction.',
            details: [
                'View service definitions (domains, ports, IDs).',
                'Modify environment-specific parameters.',
                'Update authentication secrets and API endpoints.',
                'Synchronize configuration across the network.'
            ],
            extended_usage: 'dex config get <service> [field]\ndex config set <service> <field> <value>'
        },
        demo_output: [
            '\x1b[1mService Map Configuration [event-service]:\x1b[0m',
            '{',
            '  "id": "event-service",',
            '  "port": \x1b[33m8100\x1b[0m,',
            '  "domain": "127.0.0.1",',
            '  "log_level": "info",',
            '  "max_events": 10000',
            '}',
            '',
            '\x1b[34m[TIP]\x1b[0m Use `dex config set event-service port 8101` to modify.'
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
