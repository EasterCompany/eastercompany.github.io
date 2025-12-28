// Easter Company - Universal JS Entrypoint
import { injectNavbar, injectFooter, applyBaseStyles } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme, applyTheme, getCurrentTheme } from './theme.js';
import { getAlertsContent, updateAlertsTab } from '../views/alerts.js';
import { getIdeasContent, updateIdeasTab } from '../views/ideas.js';
import { getContactsContent, updateContactsTab } from '../views/contacts.js';
import { getEventsContent, updateEventsTimeline } from '../views/events.js';
import {
  updateSystemTab,
  updateSystemMonitor,
  updateModelsTab,
  updateProcessesTab,
  getAnalystContent,
  getProcessesContent,
  getServicesContent,
  getModelsContent,
  getHardwareContent,
  getServiceLogsContent
} from '../views/monitor.js';
import { getSettingsContent, attachSettingsListeners } from '../views/settings.js';
import { getLogsContent, updateLogs } from '../views/logs.js';
import { initCliDashboard } from '../views/cli.js';
import { getEventServiceUrl } from './utils.js';

async function checkServiceHealth() {
  const isProduction = window.location.hostname === 'easter.company';
  if (!isProduction) return;

  try {
    const response = await fetch(`${getEventServiceUrl()}/system/status`, { method: 'HEAD' });
    if (!response.ok) throw new Error('Service unhealthy');
  } catch (e) {
    console.error('Production event service unreachable. Redirecting to 404.');
    window.location.href = '/404.html';
  }
}

function onReady() {
  checkServiceHealth();
  initTheme();
  applyBaseStyles();

  const path = window.location.pathname;
  if (path.includes('/dexter/cli') || path === '/cli' || path === '/cli/') {
    initCliDashboard();
  }

  const loggedIn = isLoggedIn();
  injectNavbar(loggedIn);
  injectFooter();

  // Initialize visibility
  const isRoot = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const isErrorPage = window.location.pathname.includes('404') || !!document.getElementById('error-main-view');
  if (!isRoot && !isErrorPage) {
    document.querySelector('footer')?.classList.add('hide');
  }

  // --- Single Window Manager Logic ---
  let activeWindows = [];
  const container = document.getElementById('windows-container');
  if (container) container.setAttribute('data-count', '0');

  // Helper to save state - Moved to top level of onReady for visibility
  const saveWindowState = (winId) => {
    localStorage.setItem('dex_last_window', winId);
  };

  function getWindowLimit() {
    return 1; // Strict limit of 1 window always
  }

  function recalculateLayout() {
    // Ensure only 1 window is active
    while (activeWindows.length > 1) {
      const oldest = activeWindows.shift();
      oldest.close(true);
    }

    const container = document.getElementById('windows-container');
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const isRoot = window.location.pathname === '/' || window.location.pathname === '/index.html';
    const isErrorPage = window.location.pathname.includes('404') || !!document.getElementById('error-main-view');

    if (container) {
      container.setAttribute('data-count', activeWindows.length);
    }

    // Always snap/stretch if a window is open
    const isStretched = activeWindows.length > 0;

    // Manage per-window header close button visibility
    activeWindows.forEach(win => {
      const winEl = document.getElementById(win.id);
      if (winEl) winEl.classList.remove('hide-close');
    });

    // Synchronize theme background
    applyTheme(getCurrentTheme());

    const navMenuContainer = document.getElementById('dexter-menu-container');
    const navWindowSwitcher = document.getElementById('nav-window-switcher');
    const settingsIcon = document.getElementById('settings-icon');

    if (activeWindows.length > 0) {
      footer?.classList.add('hide');
      document.getElementById('close-all-windows')?.style.setProperty('display', 'block');
      document.querySelector('main')?.style.setProperty('opacity', '0.3', 'important');

      navbar?.classList.add('window-open');

      if (container) container.style.paddingTop = '60px'; // Always SNAP when open

      // Navbar Transformation
      if (navMenuContainer) navMenuContainer.style.display = 'none';
      if (settingsIcon) settingsIcon.style.display = 'none';
      if (navWindowSwitcher) {
        const currentWinId = activeWindows[0].id;

        // Only show switcher if the active window is one of the main dropdown windows
        const dropdownWindows = ['alerts-window', 'events-window', 'monitor-window', 'contacts-window', 'workspace-window'];
        const isMainWindow = dropdownWindows.includes(currentWinId);

        if (isMainWindow) {
          navWindowSwitcher.innerHTML = `
                      <div class="nav-switch-btn ${currentWinId === 'alerts-window' ? 'active' : ''}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${currentWinId === 'events-window' ? 'active' : ''}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${currentWinId === 'monitor-window' ? 'active' : ''}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${currentWinId === 'contacts-window' ? 'active' : ''}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${currentWinId === 'workspace-window' ? 'active' : ''}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `;

          // Re-attach listeners to new DOM elements
          document.getElementById('switch-alerts').addEventListener('click', () => { saveWindowState('alerts-window'); toggleWindow(alertsWindow); });
          document.getElementById('switch-events').addEventListener('click', () => { saveWindowState('events-window'); toggleWindow(eventsWindow); });
          document.getElementById('switch-monitor').addEventListener('click', () => { saveWindowState('monitor-window'); toggleWindow(monitorWindow); });
          document.getElementById('switch-contacts').addEventListener('click', () => { saveWindowState('contacts-window'); toggleWindow(contactsWindow); });
          document.getElementById('switch-workspace').addEventListener('click', () => { saveWindowState('workspace-window'); toggleWindow(workspaceWindow); });
        } else {
          navWindowSwitcher.innerHTML = '';
        }
      }

    } else {
      navbar?.classList.remove('window-open');
      document.getElementById('close-all-windows')?.style.setProperty('display', 'none');
      if (container) container.style.paddingTop = '100px';
      document.querySelector('main')?.style.setProperty('opacity', '1', 'important');

      if (isRoot || isErrorPage) {
        footer?.classList.remove('hide');
      } else {
        footer?.classList.add('hide');
      }

      // Navbar Revert
      if (navMenuContainer) navMenuContainer.style.display = 'flex';
      if (settingsIcon) settingsIcon.style.display = 'block';
      if (navWindowSwitcher) navWindowSwitcher.innerHTML = '';
    }
  }

  function toggleWindow(win) {
    if (win.isOpen()) {
      win.close();
      return;
    }

    // Close any existing window before opening new one
    while (activeWindows.length > 0) {
      const existing = activeWindows.pop();
      existing.close(true);
    }

    activeWindows.push(win);
    win.open();
    recalculateLayout();
  }

  function closeAll() {
    const windowsToClose = [...activeWindows];
    windowsToClose.forEach(win => win.close());
    activeWindows = [];
  }

  window.addEventListener('resize', recalculateLayout);

  // --- Window Definitions ---

  const alertsWindow = createWindow({
    id: 'alerts-window',
    title: 'Alerts',
    icon: 'bx-bell',
    content: getAlertsContent(),
    onOpen: () => updateAlertsTab(),
    onClose: () => {
      const idx = activeWindows.indexOf(alertsWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const eventsWindow = createWindow({
    id: 'events-window',
    title: 'Events',
    icon: 'bx-calendar-event',
    content: getEventsContent(),
    onOpen: () => updateEventsTimeline(),
    onClose: () => {
      const idx = activeWindows.indexOf(eventsWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const contactsWindow = createWindow({
    id: 'contacts-window',
    title: 'Contacts',
    icon: 'bx-book-content',
    content: getContactsContent(),
    onOpen: () => updateContactsTab(),
    onClose: () => {
      const idx = activeWindows.indexOf(contactsWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const monitorWindow = createWindow({
    id: 'monitor-window',
    icon: 'bx-pulse',
    tabs: [
      { icon: 'bxs-server', title: 'Services', content: getServicesContent() },
      { icon: 'bxs-component', title: 'Processes', content: getProcessesContent() },
      { icon: 'bxs-brain', title: 'Models', content: getModelsContent() },
      { icon: 'bxs-hdd', title: 'Hardware', content: getHardwareContent() },
      { icon: 'bxs-terminal', title: 'Logs', content: getServiceLogsContent() },
      { icon: 'bxs-zap', title: 'Analyst', content: getAnalystContent() }
    ],
    onOpen: () => {
      updateSystemMonitor();
      updateProcessesTab();
      updateModelsTab();
      updateLogs();
    },
    onClose: () => {
      const idx = activeWindows.indexOf(monitorWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const workspaceWindow = createWindow({
    id: 'workspace-window',
    title: 'Workspace',
    icon: 'bx-brain',
    content: getIdeasContent(),
    onOpen: () => updateIdeasTab(),
    onClose: () => {
      const idx = activeWindows.indexOf(workspaceWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const settingsWindow = createWindow({
    id: 'settings-window',
    title: 'Settings',
    icon: 'bx-cog',
    content: getSettingsContent(),
    onOpen: () => {
      settingsWindow.setContent(getSettingsContent());
      attachSettingsListeners(settingsWindow);
    },
    onClose: () => {
      const idx = activeWindows.indexOf(settingsWindow);
      if (idx > -1) activeWindows.splice(idx, 1);
      recalculateLayout();
    }
  });

  const loginWindow = createWindow({
    id: 'login-window',
    title: 'Welcome',
    content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`,
    icon: 'bx-log-in'
  });

  if (loggedIn) {
    // Populate Dropdown
    const dropdown = document.getElementById('dexter-dropdown');
    if (dropdown) {
      dropdown.innerHTML = `
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `;
    }

    // Dropdown Logic
    const menuContainer = document.getElementById('dexter-menu-container');
    const menuBtn = document.getElementById('dexter-menu-btn');

    if (menuContainer && dropdown && menuBtn) {
      // Hover to show
      menuContainer.addEventListener('mouseenter', () => {
        dropdown.classList.add('active');
        menuBtn.classList.add('active');
      });

      menuContainer.addEventListener('mouseleave', () => {
        dropdown.classList.remove('active');
        menuBtn.classList.remove('active');
      });

      // Click to toggle last active window
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lastWindowId = localStorage.getItem('dex_last_window') || 'alerts-window';

        // Find the window object by ID
        let targetWindow = null;
        if (lastWindowId === 'alerts-window') targetWindow = alertsWindow;
        else if (lastWindowId === 'events-window') targetWindow = eventsWindow;
        else if (lastWindowId === 'monitor-window') targetWindow = monitorWindow;
        else if (lastWindowId === 'contacts-window') targetWindow = contactsWindow;
        else if (lastWindowId === 'workspace-window') targetWindow = workspaceWindow;

        if (targetWindow) {
          toggleWindow(targetWindow);
        }
      });
    }

    // Dropdown Item Listeners - Update to save state
    document.getElementById('alerts-menu-item')?.addEventListener('click', () => { saveWindowState('alerts-window'); toggleWindow(alertsWindow); });
    document.getElementById('events-menu-item')?.addEventListener('click', () => { saveWindowState('events-window'); toggleWindow(eventsWindow); });
    document.getElementById('monitor-menu-item')?.addEventListener('click', () => { saveWindowState('monitor-window'); toggleWindow(monitorWindow); });
    document.getElementById('contacts-menu-item')?.addEventListener('click', () => { saveWindowState('contacts-window'); toggleWindow(contactsWindow); });
    document.getElementById('workspace-menu-item')?.addEventListener('click', () => { saveWindowState('workspace-window'); toggleWindow(workspaceWindow); });

    // Switcher Listeners - Update to save state (handled in recalculateLayout where these are created)
    // We need to update the creation logic below to attach the saveWindowState call.

    document.getElementById('settings-icon')?.addEventListener('click', () => toggleWindow(settingsWindow));
    document.getElementById('close-all-windows')?.addEventListener('click', () => closeAll());

    // Refresh loop (only if relevant window is open)
    setInterval(() => {
      if (alertsWindow.isOpen()) updateAlertsTab();
      if (eventsWindow.isOpen()) updateEventsTimeline();
      if (contactsWindow.isOpen()) updateContactsTab();
      if (monitorWindow.isOpen()) {
        updateSystemTab(); // This triggers the component updates internally
      }
      if (workspaceWindow.isOpen()) updateIdeasTab();
    }, 5000);

  } else {
    // ... Login logic remains ...
    document.getElementById('login-btn')?.addEventListener('click', () => {
      loginWindow.open();
      setTimeout(() => {
        document.getElementById('login-form')?.addEventListener('submit', e => {
          e.preventDefault();
          try {
            login(document.getElementById('email-input').value);
            window.location.reload();
          } catch (error) {
            const errorDiv = document.getElementById('login-error');
            if (errorDiv) {
              errorDiv.textContent = error.message;
              errorDiv.style.display = 'block';
            }
          }
        });
      }, 100);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}
