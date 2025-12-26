// Contacts Tab Logic (Synced with Discord)
import { createPlaceholderMessage, updateTabTimestamp, updateTabBadgeCount, smartDiscordFetch } from './utils.js';

export const getContactsContent = () => `
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <p>Loading contacts...</p>
    </div>
`;

export let lastContactsUpdate = null;

export async function updateContactsTab() {
    const container = document.getElementById('contacts-list');
    if (!container) return;

    // Attach refresh listener
    const refreshBtn = document.getElementById('contacts-refresh');
    if (refreshBtn && !refreshBtn.dataset.listenerAttached) {
        refreshBtn.onclick = () => updateContactsTab();
        refreshBtn.dataset.listenerAttached = "true";
    }

    try {
        const response = await smartDiscordFetch('/contacts');
        if (!response.ok) throw new Error('Service unreachable');

        const data = await response.json();
        const members = data.members || [];

        lastContactsUpdate = Date.now();

        if (members.length === 0) {
            container.innerHTML = createPlaceholderMessage('empty', 'No contacts found.', 'Check your Discord connection.');
            return;
        }

        // Sort: Me > Master > Admin > Moderator > Contributor > User > Anyone
        const levelOrder = {
            'Me': 0,
            'Master User': 1,
            'Admin': 2,
            'Moderator': 3,
            'Contributor': 4,
            'User': 5,
            'Anyone': 6
        };

        members.sort((a, b) => {
            const orderA = levelOrder[a.level] ?? 10;
            const orderB = levelOrder[b.level] ?? 10;
            if (orderA !== orderB) return orderA - orderB;
            return a.username.localeCompare(b.username);
        });

        container.innerHTML = members.map(m => {
            // Convert decimal color to hex
            const hexColor = m.color ? '#' + m.color.toString(16).padStart(6, '0') : 'rgba(255,255,255,0.1)';
            const statusColor = m.status === 'online' ? '#5eff5e' : m.status === 'idle' ? '#ffa500' : m.status === 'dnd' ? '#ff4d4d' : '#666';
            
            // Branding colors for specific levels
            let levelColor = '#888';
            if (m.level === 'Me') levelColor = '#bb86fc';
            else if (m.level === 'Master User') levelColor = '#bb86fc';
            else if (m.level === 'Admin') levelColor = '#cf6679';
            else if (m.level === 'Moderator') levelColor = '#03dac6';
            else if (m.level === 'Contributor') levelColor = '#ffa500';

            const isMe = m.level === 'Me';
            const cardBg = isMe ? 'rgba(187, 134, 252, 0.08)' : 'rgba(255,255,255,0.03)';
            const borderStyle = isMe ? `2px solid #bb86fc` : `1px solid ${hexColor}33`;

            return `
                <div class="user-profile-section" style="background: ${cardBg}; padding: 15px; border-radius: 8px; border: ${borderStyle}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${isMe ? '#bb86fc' : hexColor}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${m.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${isMe ? '2px solid #bb86fc' : 'none'};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${statusColor}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${levelColor}; font-weight: 600; text-transform: uppercase;">${isMe ? 'DEXTER (ME)' : m.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${m.id}</p>
                    </div>
                </div>
            `;
        }).join('');

    } catch (e) {
        container.innerHTML = createPlaceholderMessage('offline', 'Failed to fetch contacts.', 'The Discord service may be offline.');
    }
}
