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
          const dropdown = document.getElementById('dexter-dropdown');
          const menuBtn = document.getElementById('dexter-menu-btn');
          
          if (dropdown && dropdown.classList.contains('active')) {
              dropdown.classList.remove('active');
              menuBtn.classList.remove('active');
              container?.classList.remove('menu-open'); // Restore windows
              if (activeWindows.length === 0) {
                  document.querySelector('footer')?.classList.remove('hide');
                  document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
                  document.querySelector('nav')?.classList.remove('window-open');
                  updateNavbarState(false);
              }
              return;
          }

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
    const closeAllWindowsIcon = document.getElementById('close-all-windows');
    const isMobile = window.innerWidth < 880;

    updateNavbarState(activeWindows.length > 0);

    if (activeWindows.length > 0) {
      footer?.classList.add('hide');
      if (closeAllWindowsIcon) {
        closeAllWindowsIcon.style.display = isMobile ? 'none' : 'block';
      }
      document.querySelector('main')?.style.setProperty('opacity', '0.3', 'important');

      navbar?.classList.add('window-open');

      if (container) container.style.paddingTop = '60px'; 

      // Navbar Transformation
      // On Desktop: Hide menu/settings when a window is open (replaced by close icon)
      // On Mobile: Always show menu/settings as they are the primary nav
      if (navMenuContainer) navMenuContainer.style.display = isMobile ? 'flex' : 'none';
      if (settingsIcon) settingsIcon.style.display = isMobile ? 'block' : 'none';
      
      // Desktop-only Switcher logic
      if (!isMobile && navWindowSwitcher) {
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
      } else if (navWindowSwitcher) {
        navWindowSwitcher.innerHTML = ''; // Hide on mobile
      }

    } else {
      navbar?.classList.remove('window-open');
      if (closeAllWindowsIcon) closeAllWindowsIcon.style.display = 'none';
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
      // Toggle on click
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMobile = window.innerWidth < 880;
        
        // Toggle active state
        dropdown.classList.toggle('active');
        menuBtn.classList.toggle('active');

        const nowActive = dropdown.classList.contains('active');

        // Treat like a window on mobile
        if (isMobile) {
          const navEl = document.querySelector('nav');
          if (nowActive) {
            document.querySelector('footer')?.classList.add('hide');
            document.querySelector('main')?.style.setProperty('opacity', '0.3', 'important');
            navEl?.classList.add('window-open');
            container?.classList.add('menu-open'); // Hide windows
            updateNavbarState(true);
          } else {
            container?.classList.remove('menu-open'); // Restore windows
            if (activeWindows.length === 0) {
              document.querySelector('footer')?.classList.remove('hide');
              document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
              navEl?.classList.remove('window-open');
              updateNavbarState(false);
            }
          }
        }
      });

      // Close when clicking outside
      document.addEventListener('click', () => {
        const isMobile = window.innerWidth < 880;
        const wasActive = dropdown.classList.contains('active');
        
        dropdown.classList.remove('active');
        menuBtn.classList.remove('active');

        if (isMobile && wasActive) {
          container?.classList.remove('menu-open'); // Restore windows
          const navEl = document.querySelector('nav');
          if (activeWindows.length === 0) {
            document.querySelector('footer')?.classList.remove('hide');
            document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
            navEl?.classList.remove('window-open');
            updateNavbarState(false);
          }
        }
      });

      // Prevent closing when clicking inside the dropdown
      dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    const closeDropdown = () => {
      if (dropdown && menuBtn) {
        dropdown.classList.remove('active');
        menuBtn.classList.remove('active');
        container?.classList.remove('menu-open'); // Restore windows on selection
      }
    };
  
      document.getElementById('alerts-menu-item')?.addEventListener('click', () => { closeDropdown(); saveWindowState('alerts-window'); toggleWindow(alertsWindow); });
      document.getElementById('events-menu-item')?.addEventListener('click', () => { closeDropdown(); saveWindowState('events-window'); toggleWindow(eventsWindow); });
      document.getElementById('monitor-menu-item')?.addEventListener('click', () => { closeDropdown(); saveWindowState('monitor-window'); toggleWindow(monitorWindow); });
      document.getElementById('contacts-menu-item')?.addEventListener('click', () => { closeDropdown(); saveWindowState('contacts-window'); toggleWindow(contactsWindow); });
      document.getElementById('workspace-menu-item')?.addEventListener('click', () => { closeDropdown(); saveWindowState('workspace-window'); toggleWindow(workspaceWindow); });
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