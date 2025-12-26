// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme } from './theme.js';
import { updateTabTimestamp } from './utils.js';
import { getNotificationsContent, updateNotificationsTab, lastNotificationsUpdate } from './notifications.js';
import { getIdeasContent, updateIdeasTab } from './ideas.js';
import { getEventsContent, updateEventsTimeline, lastEventsUpdate } from './events.js';
import { getSystemContent, updateSystemTab, lastServicesUpdate, lastModelsUpdate, lastProcessesUpdate } from './monitor.js';
import { getSettingsContent, attachSettingsListeners } from './settings.js';
import { initCliDashboard } from './cli.js';

function onReady() {
  initTheme();
  applyBaseStyles();
  
  // Initialize CLI Dashboard if on dex.html
  if (window.location.pathname.includes('/dex')) {
      initCliDashboard();
  }

  const loggedIn = isLoggedIn();
  injectNavbar(loggedIn);
  injectFooter();

  // --- Window Management ---
  const footer = document.querySelector('footer');
  let openWindow = null;

  function onWindowClose() {
    openWindow = null;
    footer?.classList.remove('hide');
    document.querySelectorAll('.nav-right i').forEach(icon => icon.classList.remove('active', 'inactive'));
  }

  function handleWindow(windowInstance, clickedIcon = null, tabIndex = null) {
    const isCurrentlyOpen = openWindow && openWindow.id === windowInstance.id;
    
    // If opening the same window but a different tab, just switch tabs
    if (isCurrentlyOpen && tabIndex !== null) {
        const tabEl = document.querySelector(`#${windowInstance.id} .tab[data-tab-index="${tabIndex}"]`);
        if (tabEl) tabEl.click();
        
        // Update icon states
        document.querySelectorAll('.nav-right i').forEach(icon => {
          const isActive = icon === clickedIcon;
          icon.classList.toggle('active', isActive);
          icon.classList.toggle('inactive', !isActive && clickedIcon);
        });
        return;
    }

    if (openWindow) {
      openWindow.close(isCurrentlyOpen ? false : true);
    }

    if (!isCurrentlyOpen) {
      setTimeout(() => {
        windowInstance.open();
        openWindow = windowInstance;
        
        if (tabIndex !== null) {
            const tabEl = document.querySelector(`#${windowInstance.id} .tab[data-tab-index="${tabIndex}"]`);
            if (tabEl) tabEl.click();
        }

        document.querySelectorAll('.nav-right i').forEach(icon => {
          const isActive = icon === clickedIcon;
          icon.classList.toggle('active', isActive);
          icon.classList.toggle('inactive', !isActive && clickedIcon);
        });
        footer?.classList.add('hide');
      }, openWindow ? 220 : 0);
    } else {
      openWindow = null;
    }
  }

  async function initializeMainWindow() {
    // Initial fetch for all tabs
    await Promise.all([
      updateNotificationsTab(),
      updateEventsTimeline(),
      updateIdeasTab(),
      updateSystemTab()
    ]);

    // Update timestamps every second
    const timestampInterval = setInterval(() => {
      if (!mainWindow.isOpen()) return clearInterval(timestampInterval);
      updateTabTimestamp(0, lastNotificationsUpdate);
      updateTabTimestamp(1, lastEventsUpdate);
      // Ideas uses Roadmap/Blueprints timestamps internally
      updateTabTimestamp(3, lastProcessesUpdate);
      updateTabTimestamp(3, lastServicesUpdate);
      updateTabTimestamp(3, lastModelsUpdate);
    }, 1000);

    // Frequent updates (3s)
    const refreshInterval = setInterval(() => {
      if (!mainWindow.isOpen()) return clearInterval(refreshInterval);
      updateNotificationsTab();
      updateEventsTimeline();
      updateIdeasTab();
      updateSystemTab();
    }, 3000);
  }

  // Define windows
  const loginWindow = createWindow({
    id: 'login-window',
    title: 'Welcome',
    content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`,
    icon: 'bx-log-in',
    onClose: onWindowClose
  });
  
  const mainWindow = createWindow({
    id: 'main-window',
    tabs: [
      { icon: 'bx-bell', title: 'Notifications', content: getNotificationsContent(), 'data-tab-index': 0 },
      { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent(), 'data-tab-index': 1 },
      { icon: 'bx-bulb', title: 'Ideas', content: getIdeasContent(), 'data-tab-index': 2 },
      { icon: 'bx-server', title: 'System', content: getSystemContent(), 'data-tab-index': 3 },
      { icon: 'bx-cog', title: 'Settings', content: getSettingsContent(), 'data-tab-index': 4 }
    ],
    icon: 'bx-layer',
    onClose: onWindowClose,
    onOpen: () => {
        initializeMainWindow();
        setTimeout(() => attachSettingsListeners(mainWindow), 50);
    }
  });

  if (loggedIn) {
    document.getElementById('notif-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 0));
    document.getElementById('events-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 1));
    document.getElementById('ideas-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 2));
    document.getElementById('system-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 3));
    document.getElementById('settings-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 4));
  } else {
    document.getElementById('login-btn')?.addEventListener('click', () => {
      handleWindow(loginWindow);
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
