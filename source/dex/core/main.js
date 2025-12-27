// Easter Company - Universal JS Entrypoint
import { injectNavbar, injectFooter, applyBaseStyles } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme, applyTheme, getCurrentTheme } from './theme.js';
import { getNotificationsContent, updateNotificationsTab } from '../views/notifications.js';
import { getIdeasContent, updateIdeasTab } from '../views/ideas.js';
import { getContactsContent, updateContactsTab } from '../views/contacts.js';
import { getEventsContent, updateEventsTimeline } from '../views/events.js';
import { getSystemContent, updateSystemTab } from '../views/monitor.js';
import { getSettingsContent, attachSettingsListeners } from '../views/settings.js';
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
  if ((path === '/dex' || path === '/dex/' || path.includes('/dex/index.html')) && !path.includes('/contribute')) {
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

      // Manage per-window header close button visibility (always hide close if it's the only window, or show? Logic says hide if forced 1, but maybe user wants to close it?)
      // Actually, if it's the ONLY window, we might want to allow closing it to return to "desktop".
      // Previous logic: if (activeWindows.length === 1) winEl.classList.add('hide-close');
      // Let's allow closing the single window so user can see the background/widgets if we add them later.
      // But wait, if we hide the close button, they can toggle via navbar.
      // Let's keep the close button visible so interaction is clear.
      activeWindows.forEach(win => {
          const winEl = document.getElementById(win.id);
          if (winEl) winEl.classList.remove('hide-close');
      });

      // Sync navbar active icons
      const icons = {
          'feed-window': 'feed-icon',
          'monitor-window': 'monitor-icon',
          'workspace-window': 'workspace-icon',
          'settings-window': 'settings-icon'
      };
      
      Object.values(icons).forEach(id => document.getElementById(id)?.classList.remove('active'));
      activeWindows.forEach(win => {
          const iconId = icons[win.id];
          if (iconId) document.getElementById(iconId)?.classList.add('active');
      });

      // Synchronize theme background
      applyTheme(getCurrentTheme());

      const navMenuContainer = document.getElementById('dexter-menu-container');
      const navWindowSwitcher = document.getElementById('nav-window-switcher');

      if (activeWindows.length > 0) {
          footer?.classList.add('hide');
          document.getElementById('close-all-windows')?.style.setProperty('display', 'block'); 
          document.querySelector('main')?.style.setProperty('opacity', '0.3', 'important');
          
          navbar?.classList.add('window-open');
          
          if (container) container.style.paddingTop = '60px'; // Always SNAP when open

          // Navbar Transformation
          if (navMenuContainer) navMenuContainer.style.display = 'none';
          if (navWindowSwitcher) {
              const currentWinId = activeWindows[0].id;
              
              // Only show switcher if the active window is one of the main dropdown windows
              const isMainWindow = ['feed-window', 'monitor-window', 'workspace-window'].includes(currentWinId);
              
              if (isMainWindow) {
                  navWindowSwitcher.innerHTML = `
                      <div class="nav-switch-btn ${currentWinId === 'feed-window' ? 'active' : ''}" id="switch-feed"><i class='bx bx-news'></i> Feed</div>
                      <div class="nav-switch-btn ${currentWinId === 'monitor-window' ? 'active' : ''}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${currentWinId === 'workspace-window' ? 'active' : ''}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `;
                  
                  // Re-attach listeners to new DOM elements
                  document.getElementById('switch-feed').addEventListener('click', () => toggleWindow(feedWindow));
                  document.getElementById('switch-monitor').addEventListener('click', () => toggleWindow(monitorWindow));
                  document.getElementById('switch-workspace').addEventListener('click', () => toggleWindow(workspaceWindow));
              } else {
                  // If Settings or other window is open, keep center empty? Or just show title?
                  // Prompt implied only "other windows from the same drop down" appear. 
                  // If Settings is open, it's not in the dropdown.
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
          if (navMenuContainer) navMenuContainer.style.display = 'block';
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
      // Create a copy to iterate safely while closing
      const windowsToClose = [...activeWindows];
      windowsToClose.forEach(win => win.close());
      activeWindows = [];
  }

  window.addEventListener('resize', recalculateLayout);

  // --- Window Definitions ---
  
  const feedWindow = createWindow({
    id: 'feed-window',
    icon: 'bx-news',
    tabs: [
      { icon: 'bx-bell', title: 'Notifications', content: getNotificationsContent() },
      { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent() }
    ],
    onOpen: () => {
        updateNotificationsTab();
        updateEventsTimeline();
    },
    onClose: () => {
        const idx = activeWindows.indexOf(feedWindow);
        if (idx > -1) activeWindows.splice(idx, 1);
        recalculateLayout();
    }
  });

  const monitorWindow = createWindow({
    id: 'monitor-window',
    icon: 'bx-pulse',
    tabs: [
      { icon: 'bx-server', title: 'System', content: getSystemContent() },
      { icon: 'bx-book-content', title: 'Contacts', content: getContactsContent() }
    ],
    onOpen: () => {
        updateSystemTab();
        updateContactsTab();
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
    onOpen: () => attachSettingsListeners(settingsWindow),
    onClose: () => {
        const idx = activeWindows.indexOf(settingsWindow);
        if (idx > -1) activeWindows.splice(idx, 1);
        recalculateLayout();
    }
  });

  const loginWindow = createWindow({
    id: 'login-window',
    title: 'Welcome',
    content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dex/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`,
    icon: 'bx-log-in'
  });

  if (loggedIn) {
    // Dropdown Logic
    const menuBtn = document.getElementById('dexter-menu-btn');
    const dropdown = document.getElementById('dexter-dropdown');
    
    if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== menuBtn) {
                dropdown.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    // Dropdown Item Listeners
    document.getElementById('feed-menu-item')?.addEventListener('click', () => { dropdown?.classList.remove('active'); toggleWindow(feedWindow); });
    document.getElementById('monitor-menu-item')?.addEventListener('click', () => { dropdown?.classList.remove('active'); toggleWindow(monitorWindow); });
    document.getElementById('workspace-menu-item')?.addEventListener('click', () => { dropdown?.classList.remove('active'); toggleWindow(workspaceWindow); });
    
    document.getElementById('settings-icon')?.addEventListener('click', () => toggleWindow(settingsWindow));
    document.getElementById('close-all-windows')?.addEventListener('click', () => closeAll());
    
    setInterval(() => {
        if (feedWindow.isOpen()) {
            updateNotificationsTab();
            updateEventsTimeline();
        }
        if (monitorWindow.isOpen()) updateSystemTab();
        if (workspaceWindow.isOpen()) updateIdeasTab();
    }, 5000);

  } else {
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