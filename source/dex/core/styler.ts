// styler.ts - Placeholder for dynamic styles and elements.

export function applyBaseStyles(): void {
  // Inject Grid Overlay if missing
  if (!document.querySelector('.grid-overlay')) {
    const grid = document.createElement('div');
    grid.className = 'grid-overlay';
    document.body.appendChild(grid);
  }
  console.log(
    'Applying base styles dynamically (e.g., for background animation or theme toggles).'
  );
}

/**
 * Injects the navbar into the page.
 */
export function injectNavbar(): void {
  const currentPath = window.location.pathname;
  // Check if we are effectively on the root page
  const isRoot = currentPath === '/' || currentPath === '/index.html';

  const navRightContent = `
        <div class="nav-right">
            <div id="dexter-menu-container" style="position: relative;">
                <button id="dexter-menu-btn" class="nav-btn" title="Dexter Menu"><img src="/static/assets/logo/dexter-icon.svg" class="dexter-nav-icon" alt="Dexter Icon" /></button>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
            </div>
            <button id="docs-icon" class="nav-btn" title="Documentation Archive"><i class='bx bx-book-open'></i></button>
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

export function updateNavbarState(isWindowOpen: boolean): void {
  const currentPath = window.location.pathname;
  const isRoot = currentPath === '/' || currentPath === '/index.html';

  const chevron = document.getElementById('nav-chevron');
  const container = document.querySelector('.nav-left') as HTMLElement;

  if (!chevron || !container) return;

  if (isWindowOpen || !isRoot) {
    // Show back state
    chevron.style.display = 'block';
    container.style.cursor = 'pointer';
    container.classList.add('recording'); // Reuse existing hover effect class or add new one

    // Ensure hover effect works for back button
    container.onmouseenter = () => {
      chevron.style.transform = 'translateX(-3px)';
    };
    container.onmouseleave = () => {
      chevron.style.transform = 'translateX(0)';
    };
  } else {
    // Root state (Logo only)
    chevron.style.display = 'none';
    container.style.cursor = 'default';
    container.classList.remove('recording');

    container.onmouseenter = null;
    container.onmouseleave = null;
  }
}

export function injectFooter(): void {
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
