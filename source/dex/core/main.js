// Easter Company - Universal JS Entrypoint
import { injectNavbar, injectFooter, applyBaseStyles, updateNavbarState } from './styler.js';
import { createWindow } from './Window.js';
import { initTheme, applyTheme, getCurrentTheme } from './theme.js';
import { getAlertsContent, updateAlertsTab, checkBackgroundAlerts } from '../views/alerts.js';
import { getIdeasContent, updateIdeasTab } from '../views/ideas.js';
import { getChoresContent, updateChoresTab } from '../views/chores.js';
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
import { getWebContent, updateWebTab } from '../views/web.js';
import { initCliDashboard } from '../views/cli.js';
import { getEventServiceUrl, getLastBadgeCount, updateGlobalBadgeCount, smartFetch, isPublicMode } from './utils.js';

async function checkServiceHealth() {
  if (isPublicMode()) return; // Snapshots handle health in public mode
  
  // Use smartFetch which handles the fallback logic and public mode
  try {
    const response = await smartFetch('/system/status', { method: 'GET' }); // Changed to GET as smartFetch wrapper mocks Response
    if (!response.ok) throw new Error('Service unhealthy');
  } catch (e) {
    console.error('Service health check failed:', e);
  }
}

function onReady() {
  // Enforce HTTPS on production domain
  if (window.location.protocol === 'http:' && window.location.hostname === 'easter.company') {
    window.location.replace('https://' + window.location.hostname + window.location.pathname + window.location.search);
    return;
  }

  // --- 0. Core UI Injection (Highest Priority) ---
  injectNavbar();
  injectFooter();

  checkServiceHealth();
  initTheme();
  applyBaseStyles();

  const path = window.location.pathname;
  if (path === '/dexter' || path === '/dexter/') {
    initCliDashboard();
  }

  // --- 1. Single Window Manager Logic & Definitions ---
  let activeWindows = [];
  const container = document.getElementById('windows-container');
  if (container) container.setAttribute('data-count', '0');

  // Helper to save state
  const saveWindowState = (winId) => {
    localStorage.setItem('dex_last_window', winId);
  };

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

    const navMenuContainer = document.getElementById('dexter-menu-container');
    const navWindowSwitcher = document.getElementById('nav-window-switcher');
    const settingsIcon = document.getElementById('settings-icon');
    const closeAllWindowsIcon = document.getElementById('close-all-windows');
    const isMobile = window.innerWidth < 880;

    // Reset mobile-only states when resizing back to desktop
    if (!isMobile) {
      const dropdown = document.getElementById('dexter-dropdown');
      const menuBtn = document.getElementById('dexter-menu-btn');
      if (dropdown) dropdown.classList.remove('active');
      if (menuBtn) menuBtn.classList.remove('active');
      if (container) container.classList.remove('menu-open');
    }

    updateNavbarState(activeWindows.length > 0);

    if (activeWindows.length > 0) {
      footer?.classList.add('hide');
      if (closeAllWindowsIcon) {
        closeAllWindowsIcon.style.display = isMobile ? 'none' : 'block';
      }
      document.querySelector('main')?.style.setProperty('opacity', '0', 'important');
      document.body.style.overflow = 'hidden';

      navbar?.classList.add('window-open');

      if (container) container.style.paddingTop = '60px'; 

      // Navbar Transformation
      if (navMenuContainer) navMenuContainer.style.display = isMobile ? 'flex' : 'none';
      if (settingsIcon) settingsIcon.style.display = isMobile ? 'block' : 'none';
      
      // Desktop-only Switcher logic
      if (!isMobile && navWindowSwitcher) {
        const currentWinId = activeWindows[0].id;
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
        navWindowSwitcher.innerHTML = ''; 
      }

    } else {
      navbar?.classList.remove('window-open');
      if (closeAllWindowsIcon) closeAllWindowsIcon.style.display = 'none';
      if (container) container.style.paddingTop = '100px';
      document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
      document.body.style.overflow = '';

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

    updateGlobalBadgeCount();
  }

  function toggleWindow(win) {
    if (win.isOpen()) {
      win.close();
      return;
    }

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

  // --- 2. Window Definitions ---

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
      { icon: 'bx-globe', title: 'Web', content: getWebContent() },
      { icon: 'bxs-hdd', title: 'Hardware', content: getHardwareContent() },
      { icon: 'bxs-terminal', title: 'Logs', content: getServiceLogsContent() },
      { icon: 'bxs-zap', title: 'Agents', content: getGuardianContent() },
      { icon: 'bx-task', title: 'Chores', content: getChoresContent() }
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
      updateWebTab();
      updateLogs();
      updateChoresTab();
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

  const closeDropdown = () => {
    const dropdown = document.getElementById('dexter-dropdown');
    const menuBtn = document.getElementById('dexter-menu-btn');
    if (dropdown && menuBtn) {
      dropdown.classList.remove('active');
      menuBtn.classList.remove('active');
      const isMobile = window.innerWidth < 880;
      if (isMobile) {
        const winContainer = document.getElementById('windows-container');
        winContainer?.classList.remove('menu-open');
      }
    }
  };

  // Resilient listener attachment for Safari
  const setupNavbarListeners = () => {
    const menuBtn = document.getElementById('dexter-menu-btn');
    const settingsIcon = document.getElementById('settings-icon');
    const closeAllBtn = document.getElementById('close-all-windows');
    const navLeftBtn = document.getElementById('nav-left-container');
    const dropdown = document.getElementById('dexter-dropdown');
    const container = document.getElementById('windows-container');

    if (menuBtn && dropdown) {
      menuBtn.onclick = (e) => {
        e.stopPropagation();
        const isMobile = window.innerWidth < 880;
        
        if (!isMobile) {
            // Position dropdown relative to button for desktop
            const rect = menuBtn.getBoundingClientRect();
            
            // Width of dropdown is 220px (from CSS).
            const dropdownWidth = 220;
            
            // Right-align the dropdown with the right edge of the button
            // rect.right is the right edge of the button.
            // leftPos = rect.right - dropdownWidth
            let leftPos = rect.right - dropdownWidth;
            
            // Ensure it doesn't go off-screen to the left (unlikely given it's on the right)
            if (leftPos < 10) leftPos = 10;
            
            dropdown.style.top = (rect.bottom + 15) + 'px'; // 15px gap
            dropdown.style.left = leftPos + 'px';
            dropdown.style.right = 'auto';
            dropdown.style.transform = 'none'; // Reset any CSS transforms
        } else {
            // Mobile: Reset inline styles to let CSS handle fixed full screen
            dropdown.style.top = '';
            dropdown.style.left = '';
            dropdown.style.right = '';
            dropdown.style.transform = '';
        }

        dropdown.classList.toggle('active');
        menuBtn.classList.toggle('active');
        const nowActive = dropdown.classList.contains('active');

        if (isMobile) {
          const navEl = document.querySelector('nav');
          if (nowActive) {
            document.querySelector('footer')?.classList.add('hide');
            document.querySelector('main')?.style.setProperty('opacity', '0', 'important');
            navEl?.classList.add('window-open');
            container?.classList.add('menu-open');
            updateNavbarState(true);
          } else {
            container?.classList.remove('menu-open');
            if (activeWindows.length === 0) {
              document.querySelector('footer')?.classList.remove('hide');
              document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
              navEl?.classList.remove('window-open');
              updateNavbarState(false);
            }
          }
        }
      };
    }

    if (settingsIcon) {
      settingsIcon.onclick = (e) => {
        e.stopPropagation();
        toggleWindow(settingsWindow);
      };
    }

    if (closeAllBtn) {
      closeAllBtn.onclick = (e) => {
        e.stopPropagation();
        closeAll();
      };
    }

    // Dropdown Item Listeners
    const attachItem = (id, win, storageId) => {
      const el = document.getElementById(id);
      if (el) {
        el.onclick = (e) => {
          e.stopPropagation();
          closeDropdown();
          if (storageId) saveWindowState(storageId);
          toggleWindow(win);
        };
      }
    };

    attachItem('alerts-menu-item', alertsWindow, 'alerts-window');
    attachItem('events-menu-item', eventsWindow, 'events-window');
    attachItem('monitor-menu-item', monitorWindow, 'monitor-window');
    attachItem('contacts-menu-item', contactsWindow, 'contacts-window');
    attachItem('workspace-menu-item', workspaceWindow, 'workspace-window');

    if (navLeftBtn) {
      navLeftBtn.onclick = (e) => {
        e.stopPropagation();
        if (dropdown && dropdown.classList.contains('active')) {
          closeDropdown();
          const isMobile = window.innerWidth < 880;
          if (isMobile && activeWindows.length === 0) {
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
      };
    }

    document.addEventListener('click', () => {
      const isMobile = window.innerWidth < 880;
      if (dropdown && dropdown.classList.contains('active')) {
        closeDropdown();
        if (isMobile) {
          if (activeWindows.length === 0) {
            document.querySelector('footer')?.classList.remove('hide');
            document.querySelector('main')?.style.setProperty('opacity', '1', 'important');
            document.querySelector('nav')?.classList.remove('window-open');
            updateNavbarState(false);
          }
        }
      }
    });

    if (dropdown) {
      dropdown.onclick = (e) => e.stopPropagation();
    }
  };

  setupNavbarListeners();

  // Initialize visibility after setup
  const isRootPath = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const isError = window.location.pathname.includes('404') || !!document.getElementById('error-main-view');
  if (!isRootPath && !isError) {
    document.querySelector('footer')?.classList.add('hide');
  }

  // --- 4. Background Updates ---
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