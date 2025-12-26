// styler.js - Placeholder for dynamic styles and elements.

export function applyBaseStyles() {
    console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).");
}

function getCleanHostname() {
    let hostname = window.location.hostname;

    // Remove port if present (e.g., localhost:8000 -> localhost)
    if (hostname.includes(':')) {
        hostname = hostname.split(':')[0];
    }

    const parts = hostname.split('.');
    const tlds = ['com', 'org', 'net', 'info', 'biz', 'co', 'io', 'company', 'xyz', 'app']; // Add more TLDs as needed

    // Handle localhost and IP addresses
    if (hostname === 'localhost' || hostname.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
        return hostname;
    }

    // Iterate from the end to find the significant part
    let cleanName = hostname;
    for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (tlds.includes(part)) {
            // This is a TLD, continue to the next part
            cleanName = parts.slice(0, i).join('.'); // Reconstruct hostname without TLDs
        } else {
            // Found a non-TLD part. This is likely the main domain or a subdomain.
            const remainingParts = cleanName.split('.');
            if (remainingParts.length > 1 && remainingParts[remainingParts.length - 1] !== 'www') {
                return remainingParts[0]; // Return the deepest subdomain
            } else if (remainingParts.length === 1 && remainingParts[0] === 'www') {
                // If only "www", try to get the next part if it's there
                if (i > 0 && !tlds.includes(parts[i-1])) {
                    return parts[i-1];
                }
            }
            return remainingParts[remainingParts.length -1]; // Default to main domain if no deep subdomain
        }
    }
    
    const effectiveDomainParts = [];
    let foundNonTld = false;
    for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (tlds.includes(part) && !foundNonTld) {
            continue;
        } else {
            foundNonTld = true;
            effectiveDomainParts.unshift(part);
        }
    }

    if (effectiveDomainParts.length === 0) {
        return hostname;
    }

    if (effectiveDomainParts[0] === 'www' && effectiveDomainParts.length > 1) {
        return effectiveDomainParts[1];
    }
    
    if (effectiveDomainParts.length > 1) {
        return effectiveDomainParts[0];
    }
    
    return effectiveDomainParts[0];
}


/**
 * Injects the navbar with conditional content based on login state
 * @param {boolean} isLoggedIn - Whether the user is logged in
 */
export function injectNavbar(isLoggedIn = false) {
    const isDexPath = window.location.pathname.includes('/dex');
    
    const leftButtonHTML = isDexPath ? `
        <div class="nav-brand-container" id="nav-root-link" title="Back to Home">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>` : `
        <div class="nav-brand-container" id="nav-root-link" title="Back to Home">
            <img src="/static/meta/favicon.svg" alt="Easter Company" class="navbar-favicon">
        </div>`;

    const authIcons = isLoggedIn ? `
        <div class="nav-right">
            <div class="nav-tab" id="notif-icon" data-tab-index="0">
                <i class='bx bx-bell'></i>
                <span class="nav-tab-title">Notifications</span>
                <div class="nav-dot" id="notif-dot"></div>
            </div>
            <div class="nav-tab" id="events-icon" data-tab-index="1">
                <i class='bx bx-calendar-event'></i>
                <span class="nav-tab-title">Events</span>
                <div class="nav-dot" id="events-dot"></div>
            </div>
            <div class="nav-tab" id="ideas-icon" data-tab-index="2">
                <i class='bx bx-bulb'></i>
                <span class="nav-tab-title">Ideas</span>
                <div class="nav-dot" id="ideas-dot"></div>
            </div>
            <div class="nav-tab" id="system-icon" data-tab-index="3">
                <i class='bx bx-server'></i>
                <span class="nav-tab-title">System</span>
                <div class="nav-dot" id="system-dot"></div>
            </div>
            <div class="nav-tab" id="contacts-icon" data-tab-index="4">
                <i class='bx bx-book-content'></i>
                <span class="nav-tab-title">Contacts</span>
                <div class="nav-dot" id="contacts-dot"></div>
            </div>
            <div class="nav-tab" id="settings-icon" data-tab-index="5">
                <i class='bx bx-cog'></i>
                <span class="nav-tab-title">Settings</span>
            </div>
        </div>` : `<button id="login-btn" class="login-btn">Login</button>`;

    const navbarHTML = `
        <div class="nav-left">
            ${leftButtonHTML}
        </div>
        ${authIcons}
        <div class="nav-close-container" id="nav-window-close" title="Close Window">
            <i class='bx bx-x'></i>
        </div>
    `;

    const navbar = document.createElement('nav');
    navbar.id = 'main-navbar';
    navbar.innerHTML = navbarHTML;
    document.body.prepend(navbar);

    // Add click listener for root link
    document.getElementById('nav-root-link')?.addEventListener('click', () => {
        window.location.href = '/';
    });
}
