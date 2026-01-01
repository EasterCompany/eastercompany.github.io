import { escapeHtml, smartDiscordFetch } from '../core/utils.js';

// --- CSS Styles for the Profile Modal ---
const PROFILE_STYLES = `
    .profile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .profile-overlay.active {
        opacity: 1;
    }

    .profile-card {
        width: 800px;
        max-width: 90%;
        max-height: 90vh;
        background: #1e1e1e;
        border: 1px solid #333;
        border-radius: 12px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: scale(0.95);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
    }
    
    .profile-card.expanded {
        width: 1300px;
        height: 85vh;
        max-height: 95vh;
    }

    .profile-overlay.active .profile-card {
        transform: scale(1);
    }

    /* Holographic Border Effect */
    .profile-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #bb86fc, #03dac6, #bb86fc);
        background-size: 200% 100%;
        animation: gradientMove 3s linear infinite;
        z-index: 10;
    }

    @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    .profile-header {
        padding: 40px 40px 20px 40px;
        background: linear-gradient(180deg, rgba(187, 134, 252, 0.05) 0%, rgba(30, 30, 30, 0) 100%);
        display: flex;
        align-items: center;
        gap: 30px;
        position: relative;
        flex-shrink: 0;
    }

    .profile-avatar-container {
        position: relative;
        width: 100px;
        height: 100px;
    }

    .profile-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #bb86fc;
        box-shadow: 0 0 15px rgba(187, 134, 252, 0.4);
    }

    .profile-status-dot {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 3px solid #1e1e1e;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .profile-identity h2 {
        margin: 0;
        font-size: 2.2em;
        color: #fff;
        font-weight: 700;
        letter-spacing: -0.5px;
    }

    .profile-badges {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .profile-badge {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.75em;
        padding: 4px 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.05);
        color: #aaa;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .profile-badge.master {
        background: rgba(187, 134, 252, 0.15);
        color: #bb86fc;
        border-color: #bb86fc;
    }
    
    /* Navigation Tabs (Hidden unless expanded) */
    .profile-nav {
        display: none; /* Flex when expanded */
        padding: 0 40px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        margin-top: 10px;
        gap: 25px;
    }
    
    .profile-card.expanded .profile-nav {
        display: flex;
    }
    
    .profile-tab-btn {
        background: none;
        border: none;
        color: #888;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        padding: 15px 0;
        cursor: pointer;
        position: relative;
        font-size: 0.9em;
        transition: color 0.2s;
    }
    
    .profile-tab-btn:hover {
        color: #fff;
    }
    
    .profile-tab-btn.active {
        color: #03dac6;
    }
    
    .profile-tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #03dac6;
        box-shadow: 0 -2px 10px rgba(3, 218, 198, 0.5);
    }

    .profile-body {
        padding: 40px;
        overflow-y: auto;
        flex: 1;
        position: relative;
    }
    
    /* Grid layout for Overview */
    .overview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .profile-section-title {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8em;
        text-transform: uppercase;
        color: #666;
        margin-bottom: 20px;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .profile-section-title::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #333;
    }

    /* Cognitive Model Bars */
    .cog-metric {
        margin-bottom: 15px;
    }

    .cog-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 0.9em;
        color: #ddd;
    }

    .cog-bar-bg {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
    }

    .cog-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #03dac6, #00bfa5);
        border-radius: 3px;
    }

    /* Fact Chips */
    .fact-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .fact-chip {
        display: flex;
        align-items: center;
        background: rgba(3, 218, 198, 0.05);
        border: 1px solid rgba(3, 218, 198, 0.2);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        color: #03dac6;
        transition: all 0.2s;
    }
    
    .fact-chip:hover {
        background: rgba(3, 218, 198, 0.15);
        transform: translateY(-2px);
    }

    .fact-key {
        font-weight: bold;
        margin-right: 6px;
        opacity: 0.8;
    }

    .fact-val {
        opacity: 1;
    }

    /* Stats Footer */
    .profile-footer {
        padding: 20px 40px;
        background: #181818;
        border-top: 1px solid #333;
        display: flex;
        justify-content: space-between;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8em;
        color: #666;
        flex-shrink: 0;
        align-items: center;
    }

    .close-profile-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: #666;
        font-size: 1.5em;
        cursor: pointer;
        transition: color 0.2s;
        z-index: 20;
    }

    .close-profile-btn:hover {
        color: #fff;
    }
    
    .expand-btn {
        background: rgba(187, 134, 252, 0.1);
        border: 1px solid rgba(187, 134, 252, 0.3);
        color: #bb86fc;
        padding: 6px 16px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .expand-btn:hover {
        background: rgba(187, 134, 252, 0.2);
        box-shadow: 0 0 15px rgba(187, 134, 252, 0.2);
    }
    
    /* Tab Content Logic */
    .tab-content {
        display: none;
        animation: fadeIn 0.3s ease;
    }
    
    .tab-content.active {
        display: block;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Deep Dive Styles */
    .topic-bar {
        margin-bottom: 20px;
    }
    .topic-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9em;
    }
    .topic-track {
        height: 25px;
        background: rgba(255,255,255,0.05);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
    }
    .topic-fill {
        height: 100%;
        background: rgba(187, 134, 252, 0.4);
        border-right: 2px solid #bb86fc;
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-size: 0.75em;
        color: #fff;
        white-space: nowrap;
    }
    
    .raw-json {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        color: #03dac6;
        background: rgba(0,0,0,0.3);
        padding: 20px;
        border-radius: 8px;
        white-space: pre-wrap;
        max-height: 600px;
        overflow-y: auto;
    }

    /* Dossier Styles */
    .dossier-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    
    .dossier-item {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.05);
        padding: 20px;
        border-radius: 8px;
    }

    .dossier-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.7em;
        text-transform: uppercase;
        color: #666;
        margin-bottom: 8px;
        letter-spacing: 1px;
    }
    
    .dossier-value {
        font-size: 1.1em;
        color: #fff;
        font-weight: 500;
    }
    
    .dossier-list-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        font-size: 0.9em;
    }
    
    .dossier-list-item:last-child {
        border-bottom: none;
    }

    .friend-chip {
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(0,0,0,0.2);
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 10px;
        border: 1px solid rgba(255,255,255,0.05);
    }
`;

// --- Mock Data Generator (Fallback) ---
function getMockData(userId, username) {
    const isMaster = userId === '313071000877137920';
    
    const base = isMaster ? {
        techLevel: 11, 
        commStyle: 'Direct / Efficient',
        patience: 'Infinite',
        vibe: 'Architect',
        facts: [
            { k: 'Role', v: 'Creator' },
            { k: 'Lang', v: 'Go' },
            { k: 'OS', v: 'Linux' },
            { k: 'Editor', v: 'VS Code' }
        ],
        badges: ['Creator', 'Admin', 'Architect'],
        stats: { msgs: 14052, tokens: '45.2M', lastSeen: 'Now' },
        topics: [
            { name: "System Architecture", val: 85 },
            { name: "Code Review", val: 60 },
            { name: "Music / Vibes", val: 30 },
            { name: "Debugging", val: 45 }
        ],
        traits: { openness: 95, conscientiousness: 90, extraversion: 40, agreeableness: 60, neuroticism: 15 },
        dossier: {
            identity: {
                fullName: "Owen Easter",
                ageRange: "25-30",
                location: "United Kingdom",
                sexuality: "Heterosexual",
                relationship: "Single"
            },
            career: {
                jobTitle: "Founder / Systems Architect",
                company: "Easter Company",
                skills: ["Go", "Distributed Systems", "AI Integration"]
            },
            personal: {
                hobbies: ["Synthwave Production", "Coding", "Gaming"],
                habits: ["Late Night Coding", "Coffee Consumption", "System Optimization"],
                vices: ["Perfectionism"],
                virtues: ["Efficiency", "Vision"]
            },
            social: [
                { name: "Dexter", relation: "Creation / AI", trust: "100%" },
                { name: "Sarah", relation: "Close Friend", trust: "95%" },
                { name: "Mike", relation: "Developer Peer", trust: "88%" }
            ]
        }
    } : {
        // Random generation for others
        techLevel: [2, 4, 6, 8, 3, 5][Math.floor(Math.random() * 6)],
        commStyle: ['Verbose', 'Casual', 'Formal', 'Chaotic', 'Inquisitive'][Math.floor(Math.random() * 5)],
        patience: Math.random() > 0.5 ? 'High' : 'Medium',
        vibe: ['NPC', 'Guest', 'Lurker', 'Regular', 'Fan'][Math.floor(Math.random() * 5)],
        facts: [
            { k: 'Role', v: 'User' },
            { k: 'Interest', v: Math.random() > 0.5 ? 'Coding' : 'Gaming' }
        ],
        badges: ['User'],
        stats: {
            msgs: Math.floor(Math.random() * 500),
            tokens: Math.floor(Math.random() * 100) + 'K',
            lastSeen: Math.floor(Math.random() * 24) + 'h ago'
        },
        topics: [
            { name: "General Chat", val: 80 },
            { name: "Troubleshooting", val: 40 },
            { name: "Off-Topic", val: 20 }
        ],
        traits: { 
            openness: Math.floor(Math.random() * 100), 
            conscientiousness: Math.floor(Math.random() * 100), 
            extraversion: Math.floor(Math.random() * 100), 
            agreeableness: Math.floor(Math.random() * 100), 
            neuroticism: Math.floor(Math.random() * 100) 
        },
        dossier: {
            identity: {
                fullName: "Unknown Subject",
                ageRange: "Unknown",
                location: "Global",
                sexuality: "Unknown",
                relationship: "Unknown"
            },
            career: {
                jobTitle: "Unknown",
                company: "Unknown",
                skills: ["General User"]
            },
            personal: {
                hobbies: ["Lurking", "Chatting"],
                habits: ["Unknown"],
                vices: ["None Observed"],
                virtues: ["None Observed"]
            },
            social: []
        }
    };
    
    return { ...base, id: userId, username };
}

// --- Main Function ---
export function showUserProfile(user) {
    // 1. Inject Styles if missing
    if (!document.getElementById('dex-profile-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'dex-profile-styles';
        styleEl.textContent = PROFILE_STYLES;
        document.head.appendChild(styleEl);
    }

    // 2. Render Skeleton Overlay
    const overlay = document.createElement('div');
    overlay.className = 'profile-overlay';
    // Skeleton content
    overlay.innerHTML = `
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `;
    
    // Close logic
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    });

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));

    // 3. Fetch Data
    smartDiscordFetch(`/profile/${user.id}`)
        .then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                renderProfileContent(overlay, user, data);
            } else {
                // Fallback to mock if not found (404)
                console.log("Profile not found or error, using mock data.");
                const mock = getMockData(user.id, user.username);
                renderProfileContent(overlay, user, mock);
            }
        })
        .catch(err => {
            console.error("Profile fetch error:", err);
            const mock = getMockData(user.id, user.username);
            renderProfileContent(overlay, user, mock);
        });
}

function renderProfileContent(overlay, user, data) {
    const statusColor = user.status === 'online' ? '#03dac6' : (user.status === 'idle' ? '#ffb74d' : '#cf6679');

    // 3. Render Helpers
    const renderOverview = () => {
        const badgesHtml = (data.badges || []).map(b => `<span class="profile-badge ${b === 'Creator' ? 'master' : ''}">${b}</span>`).join('');
        const factsHtml = (data.attributes || data.facts || []).map(f => {
            // Handle both backend 'attributes' and mock 'facts' structures
            const key = f.key || f.k;
            const val = f.value || f.v;
            return `
            <div class="fact-chip">
                <span class="fact-key">${key}:</span>
                <span class="fact-val">${val}</span>
            </div>
        `}).join('');
        
        // Handle nested or flat cognitive model
        const cm = data.cognitive_model || data;
        const techLevel = cm.technical_level || cm.techLevel || 0;
        const commStyle = cm.communication_style || cm.commStyle || 'Unknown';
        const patience = cm.patience_level || cm.patience || 'Unknown';
        const vibe = cm.vibe || 'Unknown';

        return `
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${techLevel}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(techLevel * 10, 100)}%;"></div>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Communication Style</span>
                            <span style="color: #03dac6;">${commStyle}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${patience}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${vibe}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-purchase-tag-alt'></i> Fact Bank</div>
                    <div class="fact-grid">
                        ${factsHtml}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `;
    };

    const renderDossier = () => {
        const d = data.dossier || {};
        const identity = d.identity || {};
        const career = d.career || {};
        const personal = d.personal || {};
        const social = d.social || [];

        return `
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${identity.fullName || 'Unknown'}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${identity.ageRange || 'Unknown'}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${identity.location || 'Unknown'}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${identity.sexuality || 'Unknown'}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${identity.relationship || 'Unknown'}</div>
                    </div>
                    
                    <div class="profile-section-title" style="margin-top: 30px;"><i class='bx bx-briefcase'></i> Career</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Current Role</div>
                        <div class="dossier-value">${career.jobTitle || 'Unknown'}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${career.company || 'Unknown'}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(career.skills || []).map(s => `<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${s}</span>`).join('')}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(personal.hobbies || []).map(h => `<div class="dossier-list-item">${h}</div>`).join('')}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(personal.habits || []).map(h => `<div class="dossier-list-item">${h}</div>`).join('')}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(personal.vices || []).map(h => `<div class="dossier-list-item" style="color: #cf6679;">${h}</div>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${social.length > 0 ? social.map(s => `
                            <div class="friend-chip">
                                <div style="width: 35px; height: 35px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #888;">${s.name.substring(0,1)}</div>
                                <div style="flex: 1;">
                                    <div style="color: #fff; font-weight: 500;">${s.name}</div>
                                    <div style="font-size: 0.75em; color: #888;">${s.relation}</div>
                                </div>
                                <div style="font-size: 0.8em; color: #03dac6;">${s.trust}</div>
                            </div>
                        `).join('') : '<div style="color: #666; font-style: italic;">No associates mapped.</div>'}
                    </div>
                </div>
            </div>
        `;
    };

    const renderPsychometrics = () => {
        const traits = data.traits || {};
        return `
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(traits).map(([trait, val]) => `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${val}%; background: ${val > 50 ? '#03dac6' : '#cf6679'}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${trait.substring(0,4)}</div>
                    <div style="font-family: monospace;">${val}%</div>
                </div>
            `).join('')}
        </div>
        <div style="margin-top: 40px;">
            <div class="profile-section-title"><i class='bx bx-message-square-detail'></i> Sentiment History</div>
            <div style="height: 100px; border-bottom: 1px solid #333; display: flex; align-items: flex-end; gap: 5px; padding-bottom: 5px;">
                ${Array.from({length: 40}).map(() => {
                    const h = Math.floor(Math.random() * 80) + 10;
                    const c = Math.random() > 0.7 ? '#cf6679' : (Math.random() > 0.5 ? '#03dac6' : '#444');
                    return `<div style="flex: 1; background: ${c}; height: ${h}%; border-radius: 2px;"></div>`
                }).join('')}
            </div>
            <div style="font-family: monospace; color: #666; font-size: 0.7em; margin-top: 5px; display: flex; justify-content: space-between;">
                <span>30 Days Ago</span>
                <span>Today</span>
            </div>
        </div>
    `};

    const renderTopicMap = () => `
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(data.topics || []).map(t => `
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${t.name}</span>
                        <span style="color: #bb86fc;">${t.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${t.val}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const renderRawData = () => `
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(data, null, 2)}</div>
    `;

    const html = `
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${user.avatar_url || 'https://cdn.discordapp.com/embed/avatars/0.png'}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${statusColor}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${escapeHtml(user.username)}</h2>
                    <div class="profile-badges">${(data.badges || []).map(b => `<span class="profile-badge ${b === 'Creator' ? 'master' : ''}">${b}</span>`).join('')}</div>
                </div>
            </div>
            
            <div class="profile-nav">
                <button class="profile-tab-btn active" data-tab="overview">Overview</button>
                <button class="profile-tab-btn" data-tab="dossier">Dossier</button>
                <button class="profile-tab-btn" data-tab="psychometrics">Psychometrics</button>
                <button class="profile-tab-btn" data-tab="topics">Topic Matrix</button>
                <button class="profile-tab-btn" data-tab="raw">Raw Data</button>
            </div>

            <div class="profile-body">
                <div id="tab-overview" class="tab-content active">${renderOverview()}</div>
                <div id="tab-dossier" class="tab-content">${renderDossier()}</div>
                <div id="tab-psychometrics" class="tab-content">${renderPsychometrics()}</div>
                <div id="tab-topics" class="tab-content">${renderTopicMap()}</div>
                <div id="tab-raw" class="tab-content">${renderRawData()}</div>
            </div>

            <div class="profile-footer">
                <div style="display: flex; gap: 20px;">
                    <span>ID: ${user.id}</span>
                    <span>LIFETIME TOKENS: ${data.stats?.tokens_consumed || data.stats?.tokens || '0'}</span>
                    <span>MSGS: ${data.stats?.total_messages || data.stats?.msgs || '0'}</span>
                </div>
                <button id="profile-expand-toggle" class="expand-btn"><i class='bx bx-expand-alt'></i> Detailed Analysis</button>
            </div>
        </div>
    `;

    overlay.innerHTML = html;

    // Elements
    const card = overlay.querySelector('.profile-card');
    const expandBtn = overlay.querySelector('#profile-expand-toggle');
    const tabs = overlay.querySelectorAll('.profile-tab-btn');
    const contents = overlay.querySelectorAll('.tab-content');
    const closeBtn = overlay.querySelector('.close-profile-btn');

    // Close Button
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    });

    // Tab Switching
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            overlay.querySelector(`#tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    // Expand / Collapse
    expandBtn.addEventListener('click', () => {
        card.classList.toggle('expanded');
        const isExpanded = card.classList.contains('expanded');
        expandBtn.innerHTML = isExpanded 
            ? `<i class='bx bx-collapse-alt'></i> Collapse View` 
            : `<i class='bx bx-expand-alt'></i> Detailed Analysis`;
    });
}