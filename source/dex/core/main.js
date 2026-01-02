// Easter Company - Universal JS Entrypoint
import { injectNavbar, injectFooter, applyBaseStyles, updateNavbarState } from './styler.js';
import { createWindow } from './Window.js';
import { initTheme, applyTheme, getCurrentTheme } from './theme.js';
import { getAlertsContent, updateAlertsTab, checkBackgroundAlerts } from '../views/alerts.js';
import { getIdeasContent, updateIdeasTab } from '../views/ideas.js';
import { checkBackgroundBlueprints } from '../views/blueprints.js';
import { getContactsContent, updateContactsTab } from '../views/contacts.js';
import { getEventsContent, updateEventsTimeline } from '../views/events.js';
import {
  updateSystemTab,
  updateSystemMonitor,
  updateModelsTab,
  updateProcessesTab,
  getGuardianContent,
  getProcessesContent,
  getServicesContent,
  getModelsContent,
  getHardwareContent,
  getServiceLogsContent
} from '../views/monitor.js';
import { getSettingsContent, attachSettingsListeners } from '../views/settings.js';
import { getLogsContent, updateLogs } from '../views/logs.js';
import { initCliDashboard } from '../views/cli.js';
import { getEventServiceUrl, getLastBadgeCount, updateGlobalBadgeCount, smartFetch, isPublicMode } from './utils.js';

async function checkServiceHealth() {
  // Use smartFetch which handles the fallback logic and public mode
  try {
    const response = await smartFetch('/system/status', { method: 'GET' }); // Changed to GET as smartFetch wrapper mocks Response
    if (!response.ok) throw new Error('Service unhealthy');
  } catch (e) {
    console.error('Service health check failed:', e);
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

  injectNavbar();
  injectFooter();

  // Handle Back Button / Logo Logic
  const navLeftBtn = document.getElementById('nav-left-container');
  if (navLeftBtn) {
      navLeftBtn.addEventListener('click', () => {
          if (activeWindows.length > 0) {
              closeAll();
          } else {
              const path = window.location.pathname;
              const isRoot = path === '/' || path === '/index.html';
              if (!isRoot) {
                  const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
                  const parts = cleanPath.split('/');
                  parts.pop();
                  const parentPath = parts.join('/') || '/';
                  window.location.href = parentPath;
              }
          }
      });
  }

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

  // Helper to save state
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

    updateNavbarState(activeWindows.length > 0);

    if (activeWindows.length > 0) {
      footer?.classList.add('hide');
      document.getElementById('close-all-windows')?.style.setProperty('display', 'block');
      document.querySelector('main')?.style.setProperty('opacity', '0.3', 'important');

      navbar?.classList.add('window-open');

      if (container) container.style.paddingTop = '60px'; 

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

    // Restore global badges after layout change
    updateGlobalBadgeCount();
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
    onOpen: () => {
      eventsWindow.setContent(getEventsContent());
      updateEventsTimeline();
    },
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
      { icon: 'bxs-zap', title: 'Agents', content: getGuardianContent() }
    ].filter(tab => {
      if (isPublicMode()) {
        return tab.title !== 'Hardware' && tab.title !== 'Logs';
      }
      return true;
    }),
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

  // Global API for cross-linking
  window.dexter = {
      viewEvent: (id) => {
          if (!eventsWindow.isOpen()) toggleWindow(eventsWindow);
          setTimeout(() => {
              const el = document.querySelector(`.event-item[data-event-id="${id}"]`);
              if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.classList.add('flash-highlight');
                  if (!el.classList.contains('expanded')) el.click();
                  setTimeout(() => el.classList.remove('flash-highlight'), 2000);
              }
          }, 500);
      },
      viewAlert: (id) => {
          if (!alertsWindow.isOpen()) toggleWindow(alertsWindow);
          setTimeout(() => {
              const el = document.querySelector(`.event-item[data-alert-id="${id}"]`);
              if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.classList.add('flash-highlight');
                  if (!el.classList.contains('expanded')) el.click();
                  setTimeout(() => el.classList.remove('flash-highlight'), 2000);
              }
          }, 500);
      }
  };

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
    menuContainer.addEventListener('mouseenter', () => {
      dropdown.classList.add('active');
      menuBtn.classList.add('active');
    });

    menuContainer.addEventListener('mouseleave', () => {
      dropdown.classList.remove('active');
      menuBtn.classList.remove('active');
    });

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lastWindowId = localStorage.getItem('dex_last_window') || 'alerts-window';

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

  document.getElementById('alerts-menu-item')?.addEventListener('click', () => { saveWindowState('alerts-window'); toggleWindow(alertsWindow); });
  document.getElementById('events-menu-item')?.addEventListener('click', () => { saveWindowState('events-window'); toggleWindow(eventsWindow); });
  document.getElementById('monitor-menu-item')?.addEventListener('click', () => { saveWindowState('monitor-window'); toggleWindow(monitorWindow); });
  document.getElementById('contacts-menu-item')?.addEventListener('click', () => { saveWindowState('contacts-window'); toggleWindow(contactsWindow); });
  document.getElementById('workspace-menu-item')?.addEventListener('click', () => { saveWindowState('workspace-window'); toggleWindow(workspaceWindow); });

  document.getElementById('settings-icon')?.addEventListener('click', () => toggleWindow(settingsWindow));
  document.getElementById('close-all-windows')?.addEventListener('click', () => closeAll());

  // 1. High-frequency updates (Local Mode only)
  if (!isPublicMode()) {
    setInterval(() => {
      if (eventsWindow.isOpen()) updateEventsTimeline();
      
      if (alertsWindow.isOpen()) {
        updateAlertsTab();
      } else {
        checkBackgroundAlerts();
      }
    }, 1000);
  }

  // 2. Standard background updates
  setInterval(() => {
    if (isPublicMode()) {
      if (alertsWindow.isOpen()) {
        updateAlertsTab();
      } else {
        checkBackgroundAlerts();
      }
    }
    
    if (workspaceWindow.isOpen()) {
      updateIdeasTab();
    } else {
      checkBackgroundBlueprints();
    }

    // In public mode, we still update the UI from the 1-minute cache
    if (isPublicMode() && eventsWindow.isOpen()) {
      updateEventsTimeline();
    }

    if (monitorWindow.isOpen()) {
      updateSystemTab();
    }
  }, 5000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}