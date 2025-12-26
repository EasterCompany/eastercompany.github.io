// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar, injectFooter } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme } from './theme.js';
import { getNotificationsContent, updateNotificationsTab } from './notifications.js';
import { getIdeasContent, updateIdeasTab } from './ideas.js';
import { getContactsContent, updateContactsTab } from './contacts.js';
import { getEventsContent, updateEventsTimeline } from './events.js';
import { getSystemContent, updateSystemTab } from './monitor.js';
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
    
    // In the new tab-less system, we just set the content directly
    if (openWindow) {
      openWindow.close(isCurrentlyOpen ? false : true);
    }

    if (!isCurrentlyOpen) {
      setTimeout(() => {
        // Set content BEFORE opening
        if (tabIndex === 0) windowInstance.setContent(getNotificationsContent());
        else if (tabIndex === 1) windowInstance.setContent(getEventsContent());
        else if (tabIndex === 2) windowInstance.setContent(getIdeasContent());
        else if (tabIndex === 3) windowInstance.setContent(getSystemContent());
        else if (tabIndex === 4) windowInstance.setContent(getContactsContent());
        else if (tabIndex === 5) windowInstance.setContent(getSettingsContent());

        windowInstance.open();
        openWindow = windowInstance;
        windowInstance.activeTabIndex = tabIndex; // Store for refresh logic

        document.querySelectorAll('.nav-right i').forEach(icon => {
          const isActive = icon === clickedIcon;
          icon.classList.toggle('active', isActive);
          icon.classList.toggle('inactive', !isActive && clickedIcon);
        });
        footer?.classList.add('hide');
        
        // Immediate refresh for the new "tab"
        refreshActiveTabData();
        if (tabIndex === 5) attachSettingsListeners(windowInstance);
      }, openWindow ? 220 : 0);
    } else {
      // If clicking same icon while open, close it
      openWindow = null;
    }
  }

  async function refreshActiveTabData(forceReRender = false) {
    if (!mainWindow.isOpen()) return;
    
    const activeIndex = mainWindow.activeTabIndex;
    switch (activeIndex) {
      case 0: await updateNotificationsTab(forceReRender); break;
      case 1: await updateEventsTimeline(forceReRender); break;
      case 2: await updateIdeasTab(forceReRender); break;
      case 3: await updateSystemTab(forceReRender); break;
      case 4: await updateContactsTab(forceReRender); break;
    }
  }

  async function initializeMainWindow() {
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
    icon: 'bx-layer',
    onClose: onWindowClose,
    onOpen: () => {
        initializeMainWindow();
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
