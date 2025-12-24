// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login, getUserEmail } from './auth.js';
import { initTheme } from './theme.js';
import { getLogsContent, updateLogs, lastLogsUpdate } from './logs.js';
import { createPlaceholderMessage, updateTabTimestamp } from './utils.js';
import { getEventsContent, updateEventsTimeline, lastEventsUpdate } from './events.js';
import { getNotificationsContent, updateNotificationsTab, lastNotificationsUpdate } from './notifications.js';
import { getBlueprintsContent, updateBlueprintsTab, lastBlueprintsUpdate } from './blueprints.js';
import { getServicesContent, getModelsContent, getProcessesContent, updateSystemMonitor, updateModelsTab, updateProcessesTab, lastServicesUpdate, lastModelsUpdate, lastProcessesUpdate } from './monitor.js';
import { getSettingsContent, attachSettingsListeners } from './settings.js';
import { getRoadmapContent, updateRoadmapTab } from './roadmap.js';

function onReady() {
  initTheme();
  applyBaseStyles();
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

  function handleWindow(windowInstance, clickedIcon = null) {
    const isCurrentlyOpen = openWindow && openWindow.id === windowInstance.id;
    if (openWindow) {
      openWindow.close(isCurrentlyOpen ? false : true);
    }
    if (!isCurrentlyOpen) {
      setTimeout(() => {
        windowInstance.open();
        openWindow = windowInstance;
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

  async function initializeMessageWindow() {
    // Initial fetch for all tabs
    await Promise.all([
      updateSystemMonitor(),
      updateModelsTab(),
      updateEventsTimeline(),
      updateProcessesTab(),
      updateNotificationsTab(),
      updateBlueprintsTab(),
      updateLogs()
    ]);

    // Update timestamps every second
    const timestampInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(timestampInterval);
      updateTabTimestamp(4, lastLogsUpdate);
      updateTabTimestamp(3, lastEventsUpdate);
      updateTabTimestamp(5, lastModelsUpdate);
      updateTabTimestamp(6, lastServicesUpdate);
      updateTabTimestamp(2, lastProcessesUpdate);
      updateTabTimestamp(1, lastBlueprintsUpdate);
      updateTabTimestamp(0, lastNotificationsUpdate);
    }, 1000);

    // Frequent updates (3s)
    const refreshInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(refreshInterval);
      updateEventsTimeline();
      updateProcessesTab();
      updateNotificationsTab();
      updateBlueprintsTab();
      updateLogs();
    }, 3000);

    // Infrequent updates (60s)
    const servicesRefreshInterval = setInterval(() => {
      if (!messageWindow.isOpen()) return clearInterval(servicesRefreshInterval);
      updateSystemMonitor();
      updateModelsTab();
    }, 60000);
  }

  async function initializeUserWindow() {
    await updateRoadmapTab();
    const refreshInterval = setInterval(() => {
      if (!userWindow.isOpen()) return clearInterval(refreshInterval);
      updateRoadmapTab();
    }, 5000);
  }

  // Define windows
  const loginWindow = createWindow({ 
    id: 'login-window', 
    title: 'Welcome', 
    content: `<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>`, 
    icon: 'bx-log-in', 
    onClose: onWindowClose 
  });
  
  const userWindow = createWindow({ 
    id: 'user-window', 
    tabs: [
      { icon: 'bx-user', title: 'Profile', content: `<p style="padding: 20px;">Logged in as: ${getUserEmail() || 'Unknown'}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`, 'data-tab-index': 0 },
      { icon: 'bx-map-alt', title: 'Roadmap', content: getRoadmapContent(), 'data-tab-index': 1 }
    ],
    icon: 'bx-user', 
    onClose: onWindowClose,
    onOpen: () => setTimeout(initializeUserWindow, 100)
  });

  const settingsWindow = createWindow({
    id: 'settings-window', 
    title: 'Settings', 
    content: getSettingsContent(), 
    icon: 'bx-cog', 
    onClose: onWindowClose, 
    onOpen: () => {
      settingsWindow.setContent(getSettingsContent());
      setTimeout(() => attachSettingsListeners(settingsWindow), 50);
    }
  });

  const messageWindow = createWindow({
    id: 'message-window',
    tabs: [
      { icon: 'bx-bell', title: 'Notifications', content: getNotificationsContent(), 'data-tab-index': 0 },
      { icon: 'bx-paint', title: 'Blueprints', content: getBlueprintsContent(), 'data-tab-index': 1 },
      { icon: 'bx-cog', title: 'Processes', content: getProcessesContent(), 'data-tab-index': 2 },
      { icon: 'bx-calendar-event', title: 'Events', content: getEventsContent(), 'data-tab-index': 3 },
      { icon: 'bx-history', title: 'Logs', content: getLogsContent(), 'data-tab-index': 4 },
      { icon: 'bx-brain', title: 'Models', content: getModelsContent(), 'data-tab-index': 5 },
      { icon: 'bx-line-chart', title: 'Services', content: getServicesContent(), 'data-tab-index': 6 }
    ],
    icon: 'bxs-message-dots',
    onClose: onWindowClose,
    onOpen: () => setTimeout(initializeMessageWindow, 100)
  });

  if (loggedIn) {
    document.getElementById('user-icon')?.addEventListener('click', (e) => handleWindow(userWindow, e.currentTarget));
    document.getElementById('message-icon')?.addEventListener('click', (e) => handleWindow(messageWindow, e.currentTarget));
    document.getElementById('settings-icon')?.addEventListener('click', (e) => handleWindow(settingsWindow, e.currentTarget));
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