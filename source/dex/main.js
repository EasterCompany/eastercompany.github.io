// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme } from './theme.js';
import { updateTabTimestamp } from './utils.js';
import { getNotificationsContent, updateNotificationsTab, lastNotificationsUpdate } from './notifications.js';
import { getIdeasContent, updateIdeasTab } from './ideas.js';
import { getContactsContent, updateContactsTab, lastContactsUpdate } from './contacts.js';
import { getEventsContent, updateEventsTimeline, lastEventsUpdate } from './events.js';
import { getSystemContent, updateSystemTab, lastServicesUpdate, lastModelsUpdate, lastProcessesUpdate } from './monitor.js';
import { getSettingsContent, attachSettingsListeners } from './settings.js';
import { initCliDashboard } from './cli.js';
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

  async function refreshActiveTabData(forceReRender = false) {
    if (!mainWindow.isOpen()) return;
    
    const activeIndex = mainWindow.getActiveTabIndex();
    switch (activeIndex) {
      case 0: await updateNotificationsTab(forceReRender); break;
      case 1: await updateEventsTimeline(forceReRender); break;
      case 2: await updateIdeasTab(forceReRender); break;
      case 3: await updateSystemTab(forceReRender); break;
      // case 4 (Contacts) is now handled by a 10m interval or event-driven triggers
    }
  }

  async function initializeMainWindow() {
    // Initial fetch for everything once on open
    await Promise.all([
      updateNotificationsTab(),
      updateEventsTimeline(),
      updateIdeasTab(),
      updateSystemTab(),
      updateContactsTab()
    ]);

    // Update timestamps every second
    const timestampInterval = setInterval(() => {
      if (!mainWindow.isOpen()) return clearInterval(timestampInterval);
      const activeIndex = mainWindow.getActiveTabIndex();
      if (activeIndex === 0) updateTabTimestamp(0, lastNotificationsUpdate);
      if (activeIndex === 1) updateTabTimestamp(1, lastEventsUpdate);
      if (activeIndex === 3) {
          updateTabTimestamp(3, lastProcessesUpdate);
          updateTabTimestamp(3, lastServicesUpdate);
          updateTabTimestamp(3, lastModelsUpdate);
      }
      if (activeIndex === 4) updateTabTimestamp(4, lastContactsUpdate);
    }, 1000);

    // Frequent updates (3s) - ONLY for high-velocity data
    const refreshInterval = setInterval(() => {
      if (!mainWindow.isOpen()) return clearInterval(refreshInterval);
      refreshActiveTabData();
    }, 3000);

    // Infrequent updates (10m) - For Contacts
    const contactsInterval = setInterval(() => {
      if (!mainWindow.isOpen()) return clearInterval(contactsInterval);
      updateContactsTab();
    }, 600000);
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
      { icon: 'bx-book-content', title: 'Contacts', content: getContactsContent(), 'data-tab-index': 4 },
      { icon: 'bx-cog', title: 'Settings', content: getSettingsContent(), 'data-tab-index': 5 }
    ],
    icon: 'bx-layer',
    onClose: onWindowClose,
    onOpen: () => {
        initializeMainWindow();
        setTimeout(() => attachSettingsListeners(mainWindow), 50);
    },
    onTabChange: () => {
        refreshActiveTabData(true);
    }
  });

  if (loggedIn) {
    document.getElementById('notif-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 0));
    document.getElementById('events-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 1));
    document.getElementById('ideas-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 2));
    document.getElementById('system-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 3));
    document.getElementById('contacts-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 4));
    document.getElementById('settings-icon')?.addEventListener('click', (e) => handleWindow(mainWindow, e.currentTarget, 5));
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