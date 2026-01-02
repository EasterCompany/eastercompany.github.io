import { createPlaceholderMessage, escapeHtml, smartFetch, ansiToHtml } from '../core/utils.js';

const CLI_VERSION = '2.8.143';

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
      overview: 'The Cognitive Chat interface (Alpha) allows direct interaction with Dexter\'s strategic layer using natural language.',
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
    description: 'Run the Guardian Technical Sentry system (Tier 1 & Tier 2).',
    usage: 'dex guardian [tier]',
    category: 'cognitive',
    docs: {
      overview: 'Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.',
      details: [
        'Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.',
        'Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.',
        'Automated Trigger: Activates after 5 minutes of system idle time.',
        'CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.',
        'Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time.'
      ],
      extended_usage: 'dex guardian [0|1|2] [--force]\n0 = Full Analysis (Default)\n1 = Tier 1 Only (Reports)\n2 = Tier 2 Only (Blueprints)'
    },
    demo_output: [
      '█ \x1b[1mGUARDIAN TECHNICAL SENTRY\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '\x1b[90m[INFO] Verifying system state...\x1b[0m',
      ' \x1b[32m✓\x1b[0m No ongoing processes detected.',
      ' \x1b[32m✓\x1b[0m System idle time requirement met (312s).',
      '',
      '\x1b[1mInitializing Full Analysis (T1 + T2)...\x1b[0m',
      '\x1b[94m→ Executing Tier 1: Technical Sentry...\x1b[0m',
      ' \x1b[90m⚙️  Auditing 50 system events...\x1b[0m',
      ' \x1b[90m⚙️  Analyzing recent service logs...\x1b[0m',
      ' \x1b[90m⚙️  Executing pre-analysis test suite...\x1b[0m',
      '',
      '# [SYSTEM] Service Connectivity Alert',
      '**Priority**: high',
      '**Body**: dex-tts-service reported 3 consecutive timeouts.',
      '',
      '\x1b[95m→ Executing Tier 2: Architect Analysis...\x1b[0m',
      ' \x1b[90m⚙️  Synthesizing Tier 1 reports...\x1b[0m',
      '',
      '# [BLUEPRINT] Automated Service Recovery',
      '**Category**: architecture',
      '**Summary**: Implement exponential backoff for TTS connection retries.',
      '',
      '\x1b[32m✓ Guardian run completed successfully.\x1b[0m',
      '\x1b[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1b[0m'
    ]
  },
  {
    id: 'test',
    title: 'Test',
    icon: 'bx-check-shield',
    description: 'Run service tests (Format, Lint, Unit).',
    usage: 'dex test [service]',
    category: 'lifecycle',
    docs: {
      overview: 'Ensures code quality by running the full system test suite.',
      details: [
        'Runs go test for all backend services.',
        'Executes static analysis via golangci-lint.',
        'Runs Python unit tests for TTS logic.',
        'Validates configuration schemas.'
      ],
      extended_usage: 'dex test [service] [--models]'
    },
    demo_output: [
      '█ \x1b[1mTESTING ALL SERVICES\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '',
      '\x1b[36mTesting cli\x1b[0m',
      'Checking formatting...',
      'Linting...',
      'Running tests...',
      '\x1b[32m✓ Format (all files formatted) [12ms]\x1b[0m',
      '\x1b[32m✓ Lint (no issues) [842ms]\x1b[0m',
      '\x1b[32m✓ Test (12 passed) [42ms]\x1b[0m',
      '\x1b[90m  Total Duration: 896ms\x1b[0m',
      '',
      '\x1b[36mTesting event\x1b[0m',
      'Checking formatting...',
      'Linting...',
      'Running tests...',
      '\x1b[32m✓ Format (all files formatted) [15ms]\x1b[0m',
      '\x1b[32m✓ Lint (no issues) [1.2s]\x1b[0m',
      '\x1b[32m✓ Test (48 passed, 72.4% coverage) [156ms]\x1b[0m',
      '\x1b[90m  Total Duration: 1.37s\x1b[0m',
      '',
      '█ \x1b[1mTEST SUMMARY\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'SERVICE         FORMAT       LINT         TEST         DURATION  ',
      'cli             \x1b[32m✓ PASS\x1b[0m       \x1b[32m✓ PASS\x1b[0m       \x1b[32m✓ PASS\x1b[0m       896.2ms   ',
      'event           \x1b[32m✓ PASS\x1b[0m       \x1b[32m✓ PASS\x1b[0m       \x1b[32m✓ PASS\x1b[0m       1.37s     ',
      '',
      '\x1b[32m✓ All tests passed!\x1b[0m'
    ]
  },
  {
    id: 'build',
    title: 'Build',
    icon: 'bx-package',
    description: 'Build and install CLI and services from source.',
    usage: 'dex build [major|minor|patch]',
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
      extended_usage: 'dex build [patch|minor|major] [--force]'
    },
    demo_output: [
      '█ \x1b[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'Building cli with patch increment',
      'Capturing current versions...',
      '',
      '█ \x1b[1mBUILD PHASE\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '\x1b[36m# Building cli\x1b[0m',
      'Incrementing version: 2.8.142 -> 2.8.143 (patch)',
      'Cleaning old build files...',
      'Compiling binary...',
      '\x1b[32m✓ Successfully built cli!\x1b[0m',
      '',
      '█ \x1b[1mINSTALL PHASE\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '\x1b[32m✓ Successfully installed cli!\x1b[0m',
      '',
      '█ \x1b[1mGIT PHASE\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '[cli] Adding, committing, and pushing changes...',
      '[cli] Creating tag 2.8.143...',
      '\x1b[32m✓ [cli] Tag 2.8.143 created and pushed\x1b[0m',
      '',
      '█ \x1b[1mSUMMARY\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'Service  Version Change        Size Change  Note                                   ',
      '───────  ────────────────────  ───────────  ───────────────────────────────────────',
      'cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ',
      '',
      '\x1b[32m✓ Build complete.\x1b[0m'
    ]
  },
  {
    id: 'update',
    title: 'Update',
    icon: 'bx-cloud-download',
    description: 'Update CLI and services from source or pre-built binaries.',
    usage: 'dex update',
    category: 'lifecycle',
    docs: {
      overview: 'Synchronizes your environment with the latest releases.',
      details: [
        'In DEV mode: Clones fresh source and rebuilds everything.',
        'In USER mode: Downloads latest binaries from easter.company.',
        'Verifies checksums for all downloads.',
        'Automatically updates environment paths.'
      ],
      extended_usage: 'dex update'
    },
    demo_output: [
      '█ \x1b[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '\x1b[33m! Cloning fresh source and rebuilding everything from scratch...\x1b[0m',
      'Fetching latest dev version from easter.company...',
      'Latest dev version: 2.8.143',
      'Updating 6 services from source...',
      'Updating cli...',
      '  Cloning dex-cli...',
      '  Building cli via Makefile...',
      '\x1b[32m  ✓ cli updated (all binaries installed)\x1b[0m',
      '\x1b[32m✓ Update complete!\x1b[0m',
      'Run \'dex version\' to verify'
    ]
  },
  {
    id: 'restart',
    title: 'Restart',
    icon: 'bx-refresh',
    description: 'Restart all manageable services.',
    usage: 'dex restart',
    category: 'lifecycle',
    docs: {
      overview: 'Direct control over the background processes that power the Dexter ecosystem.',
      details: [
        'Interfaces with systemd units.',
        'Supports starting, stopping, and restarting.',
        'Displays detailed uptime and PID info.',
        'Monitors resource consumption per service.'
      ],
      extended_usage: 'dex start\ndex stop\ndex restart'
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
    id: 'status',
    title: 'Status',
    icon: 'bx-pulse',
    description: 'Check the status of CLI and services.',
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
      extended_usage: 'dex status [service_id|all]'
    },
    demo_output: [
      '█ \x1b[1mSERVICE STATUS\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM',
      '───────  ───────          ───────  ──────   ──────   ──────   ──────           ───      ───',
      'cli      local            2.8.143  main     240fc38  \x1b[32mOK\x1b[0m       \x1b[90m--\x1b[0m               \x1b[90m--\x1b[0m       \x1b[90m--\x1b[0m',
      'event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1b[32mOK\x1b[0m       14h22m           0.2%     12.4 MB',
      'discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1b[32mOK\x1b[0m       14h22m           0.1%     24.8 MB',
      'tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1b[32mOK\x1b[0m       14h22m           0.0%     1.2 GB',
      'web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1b[32mOK\x1b[0m       14h22m           0.0%     42.1 MB',
      'ollama   127.0.0.1:11434  0.5.4    \x1b[90m--\x1b[0m       \x1b[90m--\x1b[0m       \x1b[32mOK\x1b[0m       4d12h            0.5%     8.4 GB',
      'cache    127.0.0.1:6379   7.4.1    \x1b[90m--\x1b[0m       \x1b[90m--\x1b[0m       \x1b[32mOK\x1b[0m       32d              0.1%     4.2 MB'
    ]
  },
  {
    id: 'logs',
    title: 'Logs',
    icon: 'bx-terminal',
    description: 'View or tail service logs.',
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
      extended_usage: 'dex logs <service_id> [-f]'
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
    description: 'Interact with the Event Service.',
    usage: 'dex event [log|service|analyst|delete]',
    category: 'system',
    docs: {
      overview: 'The event bus interface for manual debugging and data extraction.',
      details: [
        'Query the history of the system event log.',
        'Manually reset analyst tier timers.',
        'Filter events by type, service, or count.',
        'Delete historical events matching patterns.'
      ],
      extended_usage: 'dex event log [-n count] [-t type]\ndex event analyst [status|reset]\ndex event delete <pattern>'
    },
    demo_output: [
      '█ \x1b[1mLAST 20 EVENTS\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      '\x1b[90m14:42:01\x1b[0m \x1b[90mcli            \x1b[0m | \x1b[38;5;208mCMD: dex guardian [] (success)\x1b[0m',
      '\x1b[90m14:42:02\x1b[0m \x1b[90mevent          \x1b[0m | \x1b[35m[INFO] Analysis complete: No significant insights found.\x1b[0m',
      '\x1b[90m14:45:10\x1b[0m \x1b[90mdiscord        \x1b[0m | \x1b[34moweneaster: Dexter, run a system scan.\x1b[0m',
      '\x1b[90m14:45:12\x1b[0m \x1b[90mevent          \x1b[0m | \x1b[32mPROC+: system-cli-op (started)\x1b[0m',
      '\x1b[90m14:45:15\x1b[0m \x1b[90mcli            \x1b[0m | \x1b[31m[ERROR] Connection timeout to Redis.\x1b[0m'
    ]
  },
  {
    id: 'discord',
    title: 'Discord',
    icon: 'bx-bot',
    description: 'Interact with the Discord Service.',
    usage: 'dex discord [contacts|channels|service|quiet]',
    category: 'system',
    docs: {
      overview: 'Direct control over the Discord bot integration and audio engine.',
      details: [
        'List all guild members and their permission levels.',
        'Inspect channel structures and user presence.',
        'Toggle "Quiet Mode" for public interactions.',
        'Check raw service state and gateway health.'
      ],
      extended_usage: 'dex discord contacts\ndex discord quiet [on|off]'
    },
    demo_output: [
      '█ \x1b[1mDISCORD CONTACTS\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'Fetching guild members...',
      '',
      '█ Server: Easter Company (12 members) █',
      '────────────────────────────────────────────────────────────────────────────────',
      'LEVEL           USERNAME        STATUS   DISCORD ID',
      '─────           ────────        ──────   ──────────',
      '\x1b[35mDEXTER (ME)\x1b[0m     Dexter          \x1b[32monline\x1b[0m   \x1b[90m1313...0432\x1b[0m',
      '\x1b[35mMASTER\x1b[0m          oweneaster      \x1b[32monline\x1b[0m   \x1b[90m3130...7920\x1b[0m',
      '\x1b[31mADMIN\x1b[0m           Developer       \x1b[33midle\x1b[0m     \x1b[90m4242...8181\x1b[0m',
      '\x1b[37mUSER\x1b[0m            GuestUser       \x1b[90moffline\x1b[0m  \x1b[90m9999...9999\x1b[0m'
    ]
  },
  {
    id: 'ollama',
    title: 'Ollama',
    icon: 'bx-brain',
    description: 'Run the system \'ollama\' executable or sync models.',
    usage: 'dex ollama [pull|sync|list]',
    category: 'system',
    docs: {
      overview: 'Proxy command for managing local LLMs and neural vision models.',
      details: [
        'Wraps the system ollama binary.',
        'Added \'pull\' subcommand to sync all Dexter-required models.',
        'Synchronizes custom model templates automatically.',
        'Validates model weight checksums.'
      ],
      extended_usage: 'dex ollama pull\ndex ollama run gemma3:12b'
    },
    demo_output: [
      '\x1b[34m[OLLAMA]\x1b[0m Synchronizing custom Dexter models...',
      'Pulling base models...',
      'Pulling gemma3:12b... \x1b[32m[100%]\x1b[0m',
      '\x1b[32m✓ Successfully pulled model: gemma3:12b\x1b[0m',
      'Creating custom Dexter models...',
      '  Rebuilding dex-analyst-guardian from gpt-oss:20b...',
      '\x1b[32m✓   Created dex-analyst-guardian\x1b[0m',
      '\x1b[32m✓ Ollama models are up-to-date.\x1b[0m'
    ]
  },
  {
    id: 'system',
    title: 'System Info',
    icon: 'bx-info-square',
    description: 'Show system info and manage packages.',
    usage: 'dex system [info|scan|validate|install]',
    category: 'system',
    docs: {
      overview: 'Performance observability tool focused on AI resource availability.',
      details: [
        'Scans and reports CPU, GPU, RAM, and Storage vitals.',
        'Validates presence of required system packages.',
        'Handles automatic installation of missing dependencies.',
        'Exports telemetry data in JSON format.'
      ],
      extended_usage: 'dex system scan\ndex system validate\ndex system install <package>'
    },
    demo_output: [
      '█ \x1b[1mSYSTEM CONFIGURATION\x1b[0m █',
      '────────────────────────────────────────────────────────────────────────────────',
      'Category        Value',
      '────────        ─────',
      'CPU (Generic)   Cores: 16, Threads: 32',
      '                Avg Clock: 4.20 GHz',
      'GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204',
      'Memory          64.0 GB',
      'Storage         2.0 TB (1 devices)',
      '                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)',
      'Packages        ',
      '                \x1b[32m✓ 12 checks passed\x1b[0m'
    ]
  },
  {
    id: 'config',
    title: 'Config',
    icon: 'bx-slider-alt',
    description: 'Show service config or a specific field.',
    usage: 'dex config <service> [field...]',
    category: 'system',
    docs: {
      overview: 'Manages the central registry that defines service interaction.',
      details: [
        'View service definitions (domains, ports, IDs).',
        'Modify environment-specific parameters.',
        'Update authentication secrets and API endpoints.',
        'Supports JSON path traversal for deep fields.'
      ],
      extended_usage: 'dex config <service> [field]\ndex config reset'
    },
    demo_output: [
      '{',
      '  "id": "event-service",',
      '  "short_name": "event",',
      '  "type": "be",',
      '  "port": 8100,',
      '  "domain": "127.0.0.1",',
      '  "log_path": "~/Dexter/logs/event-service.log"',
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
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEXTER</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>

            <div class="cli-install-section">
                <div class="cli-install-header">
                    <i class='bx bxs-download'></i>
                    <h2>One-Step Installation</h2>
                </div>
                <div class="cli-install-command" id="install-command-copy">
                    <code>curl -sSL https://easter.company/scripts/dex.sh | bash</code>
                    <i class='bx bx-copy'></i>
                </div>
                <p class="cli-install-note">Installs the latest pre-built binary for Arch/Debian Linux.</p>
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
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${catInfo.color}; position: relative; z-index: 1;">
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
                <h3>Open Source</h3>
                <p>Dexter is built with the help of creators around the world. Every contribution counts.</p>
                <a href="/contribute" class="action-btn">CONTRIBUTE</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>Community</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="action-btn">JOIN DISCORD</a>
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
