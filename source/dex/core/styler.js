// styler.js - Placeholder for dynamic styles and elements.

export function applyBaseStyles() {
    // Inject Grid Overlay if missing
    if (!document.querySelector('.grid-overlay')) {
        const grid = document.createElement('div');
        grid.className = 'grid-overlay';
        document.body.appendChild(grid);
    }
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
    // Example: test.dev.easter.company
    // parts = ["test", "dev", "easter", "company"]
    // i=3: "company" is a TLD
    // i=2: "easter" is not a TLD, so current = "easter"
    // i=1: "dev" is not a TLD, so current = "dev"
    // i=0: "test" is not a TLD, so current = "test"
    // The logic needs to find the *effective* domain and then the subdomain part.

    // A simpler approach: find the last part that's not a TLD or common secondary domain,
    // and if there's a part before it, use that as the subdomain.
    let cleanName = hostname;
    for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (tlds.includes(part)) {
            // This is a TLD, continue to the next part
            cleanName = parts.slice(0, i).join('.'); // Reconstruct hostname without TLDs
        } else {
            // Found a non-TLD part. This is likely the main domain or a subdomain.
            // If there's only one part left (e.g., "easter"), or it's an IP/localhost after stripping TLDs, use it.
            // If there are multiple parts (e.g., "dev.easter"), the last one is the domain, the one before is the subdomain.
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
    
    // Fallback for cases like "www.google.com" -> "www", or single word domains
    // Let's refine the logic to always get the effective domain or the most specific subdomain.
    const effectiveDomainParts = [];
    let foundNonTld = false;
    for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (tlds.includes(part) && !foundNonTld) {
            // Skip TLDs from the right
            continue;
        } else {
            foundNonTld = true;
            effectiveDomainParts.unshift(part); // Add to the beginning
        }
    }

    if (effectiveDomainParts.length === 0) {
        return hostname; // Fallback if nothing found (e.g., just TLDs or malformed)
    }

    // Now effectiveDomainParts could be ["easter", "company"] or ["dev", "easter", "company"]
    // If it's ["www", "easter"], we want "easter"
    if (effectiveDomainParts[0] === 'www' && effectiveDomainParts.length > 1) {
        return effectiveDomainParts[1];
    }
    
    // If there's more than one part, return the first (deepest subdomain)
    if (effectiveDomainParts.length > 1) {
        return effectiveDomainParts[0];
    }
    
    return effectiveDomainParts[0]; // Otherwise, return the single part (e.g., "localhost", "easter")
}


/**
 * Injects the navbar into the page.
 */
export function injectNavbar() {
    const currentPath = window.location.pathname;
    // Check if we are effectively on the root page
    const isRoot = currentPath === '/' || currentPath === '/index.html';

    const navRightContent = `
        <div class="nav-right">
            <div id="dexter-menu-container" style="position: relative;">
                <button id="dexter-menu-btn" class="nav-btn" title="Dexter Menu"><i class='bx bx-bot'></i></button>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
            </div>
            <button id="settings-icon" class="nav-btn" title="Settings"><i class='bx bx-cog'></i></button>
            <button id="close-all-windows" class="nav-btn" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"><i class='bx bx-x-circle'></i></button>
        </div>
    `;

    const navLeftContent = `
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${isRoot ? 'default' : 'pointer'};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${isRoot ? 'none' : 'block'};"></i>
            <div class="navbar-favicon"></div>
        </div>
    `;

    const navbarHTML = `
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${navLeftContent}
        </div>
        <div class="nav-center" id="nav-window-switcher">
            <!-- Window buttons injected here by main.js -->
        </div>
        ${navRightContent}
    `;

    const navbar = document.createElement('nav');
    navbar.innerHTML = navbarHTML;
    document.body.prepend(navbar);

    // Inject Dropdown separately to avoid stacking context issues with backdrop-filter
    const dropdown = document.createElement('div');
    dropdown.id = 'dexter-dropdown';
    dropdown.className = 'dexter-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `;
    document.body.appendChild(dropdown);
}

export function updateNavbarState(isWindowOpen) {
    const currentPath = window.location.pathname;
    const isRoot = currentPath === '/' || currentPath === '/index.html';
    
    const chevron = document.getElementById('nav-chevron');
    const container = document.querySelector('.nav-left');
    
    if (!chevron || !container) return;

    if (isWindowOpen || !isRoot) {
        // Show back state
        chevron.style.display = 'block';
        container.style.cursor = 'pointer';
        container.classList.add('recording'); // Reuse existing hover effect class or add new one
        
        // Ensure hover effect works for back button
        container.onmouseenter = () => { chevron.style.transform = 'translateX(-3px)'; };
        container.onmouseleave = () => { chevron.style.transform = 'translateX(0)'; };
    } else {
        // Root state (Logo only)
        chevron.style.display = 'none';
        container.style.cursor = 'default';
        container.classList.remove('recording');
        
        container.onmouseenter = null;
        container.onmouseleave = null;
    }
}

export function injectFooter() {
    // Only inject if not already present
    if (document.querySelector('footer')) return;

    const footerHTML = `
        <a href="/dexter" class="footer-brand-left">DEXTER M.XIV</a>
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://linkedin.com/company/72223947" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://youtube.com/@eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-youtube'></i></a>
        </div>
        <a href="/contribute" class="footer-brand-right">CONTRIBUTE</a>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);
}