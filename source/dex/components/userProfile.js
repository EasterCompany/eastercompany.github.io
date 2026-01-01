import { escapeHtml } from '../core/utils.js';

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
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
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
    }

    @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    .profile-header {
        padding: 40px;
        background: linear-gradient(180deg, rgba(187, 134, 252, 0.05) 0%, rgba(30, 30, 30, 0) 100%);
        display: flex;
        align-items: center;
        gap: 30px;
        position: relative;
    }

    .profile-avatar-container {
        position: relative;
        width: 120px;
        height: 120px;
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
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #1e1e1e;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .profile-identity h2 {
        margin: 0;
        font-size: 2.5em;
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

    .profile-body {
        padding: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        overflow-y: auto;
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
    }

    .close-profile-btn:hover {
        color: #fff;
    }
`;

// --- Mock Data Generator ---
function getMockData(userId, username) {
    const isMaster = userId === '313071000877137920';
    
    if (isMaster) {
        return {
            techLevel: 11, // As requested :)
            commStyle: 'Direct / Efficient',
            patience: 'Infinite',
            vibe: 'Architect',
            facts: [
                { k: 'Role', v: 'Creator' },
                { k: 'Lang', v: 'Go' },
                { k: 'OS', v: 'Linux' },
                { k: 'Editor', v: 'VS Code' },
                { k: 'Music', v: 'Synthwave' },
                { k: 'Status', v: 'God Mode' }
            ],
            badges: ['Creator', 'Admin', 'Architect'],
            stats: {
                msgs: 14052,
                tokens: '45.2M',
                lastSeen: 'Now'
            }
        };
    }

    // Random generation for others
    const techLevels = [2, 4, 6, 8, 3, 5];
    const styles = ['Verbose', 'Casual', 'Formal', 'Chaotic', 'Inquisitive'];
    const vibes = ['NPC', 'Guest', 'Lurker', 'Regular', 'Fan'];
    
    return {
        techLevel: techLevels[Math.floor(Math.random() * techLevels.length)],
        commStyle: styles[Math.floor(Math.random() * styles.length)],
        patience: Math.random() > 0.5 ? 'High' : 'Medium',
        vibe: vibes[Math.floor(Math.random() * vibes.length)],
        facts: [
            { k: 'Role', v: 'User' },
            { k: 'Interest', v: Math.random() > 0.5 ? 'Coding' : 'Gaming' }
        ],
        badges: ['User'],
        stats: {
            msgs: Math.floor(Math.random() * 500),
            tokens: Math.floor(Math.random() * 100) + 'K',
            lastSeen: Math.floor(Math.random() * 24) + 'h ago'
        }
    };
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

    // 2. Get Data
    const data = getMockData(user.id, user.username);
    const statusColor = user.status === 'online' ? '#03dac6' : (user.status === 'idle' ? '#ffb74d' : '#cf6679');

    // 3. Build HTML
    const badgesHtml = data.badges.map(b => `<span class="profile-badge ${b === 'Creator' ? 'master' : ''}">${b}</span>`).join('');
    
    const factsHtml = data.facts.map(f => `
        <div class="fact-chip">
            <span class="fact-key">${f.k}:</span>
            <span class="fact-val">${f.v}</span>
        </div>
    `).join('');

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
                    <div class="profile-badges">${badgesHtml}</div>
                </div>
            </div>

            <div class="profile-body">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${data.techLevel}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(data.techLevel * 10, 100)}%;"></div>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Communication Style</span>
                            <span style="color: #03dac6;">${data.commStyle}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${data.patience}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${data.vibe}</span>
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

            <div class="profile-footer">
                <div>ID: ${user.id}</div>
                <div>LIFETIME TOKENS: ${data.stats.tokens}</div>
                <div>MSGS: ${data.stats.msgs}</div>
            </div>
        </div>
    `;

    // 4. Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'profile-overlay';
    overlay.innerHTML = html;

    // 5. Interaction Logic
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    });

    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => {
        overlay.classList.add('active');
    });
}
