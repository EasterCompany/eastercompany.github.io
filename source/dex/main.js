// Easter Company - Universal JS Entrypoint
import { applyBaseStyles, injectNavbar } from './styler.js';
import { createWindow } from './Window.js';
import { isLoggedIn, login } from './auth.js';
import { initTheme } from './theme.js';
import { getNotificationsContent, updateNotificationsTab } from './notifications.js';
import { getIdeasContent, updateIdeasTab } from './ideas.js';
import { getContactsContent, updateContactsTab } from './contacts.js';
import { getEventsContent, updateEventsTimeline } from './events.js';
import { getSystemContent, updateSystemTab } from './monitor.js';
import { getSettingsContent, attachSettingsListeners } from './settings.js';
import { getErrorContent, attachErrorListeners } from './ErrorView.js';
import { injectSocialsBar } from './SocialsBar.js';
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
  
  // If we are on a 404 page, render the ErrorView component
  const errorContainer = document.getElementById('error-main-view');
  if (errorContainer) {
      errorContainer.innerHTML = getErrorContent();
      attachErrorListeners();
  }

  if (window.location.pathname.includes('/dex')) {
      initCliDashboard();
  }

  const loggedIn = isLoggedIn();
  injectNavbar(loggedIn);
  injectSocialsBar();

  // --- Window & State Management ---
  const footer = document.getElementById('main-socials-bar');
  const navbar = document.getElementById('main-navbar');
  const closeBtn = document.getElementById('nav-window-close');
  let openWindow = null;
  let activeRefreshInterval = null;
  let activeContactsInterval = null;

  function stopAllIntervals() {
      if (activeRefreshInterval) clearInterval(activeRefreshInterval);
      if (activeContactsInterval) clearInterval(activeContactsInterval);
      activeRefreshInterval = null;
      activeContactsInterval = null;
  }

  function onWindowClose() {
    stopAllIntervals();
    openWindow = null;
    footer?.classList.remove('hide');
    navbar?.classList.remove('window-open');
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  }

  // Navbar Close Listener
  closeBtn?.addEventListener('click', () => {
      if (openWindow) openWindow.close();
  });

  function handleWindow(windowInstance, clickedIcon = null, tabIndex = null) {
    const isCurrentlyOpen = openWindow && openWindow.id === windowInstance.id;
    const isSameTab = openWindow && openWindow.activeTabIndex === tabIndex;

    if (isCurrentlyOpen && isSameTab) {
        windowInstance.close();
        return;
    }
    
    // Smooth transition between windows/tabs
    if (openWindow) {
      openWindow.close(true); // Immediate-style transition
    }

    if (!isCurrentlyOpen || !isSameTab) {
      navbar?.classList.add('window-open');
      
      // Load content
      if (tabIndex === 0) windowInstance.setContent(getNotificationsContent());
      else if (tabIndex === 1) windowInstance.setContent(getEventsContent());
      else if (tabIndex === 2) windowInstance.setContent(getIdeasContent());
      else if (tabIndex === 3) windowInstance.setContent(getSystemContent());
      else if (tabIndex === 4) windowInstance.setContent(getContactsContent());
      else if (tabIndex === 5) windowInstance.setContent(getSettingsContent());

      windowInstance.activeTabIndex = tabIndex;
      windowInstance.open();
      openWindow = windowInstance;

      // Update navbar state
      document.querySelectorAll('.nav-tab').forEach(tab => {
        const isActive = parseInt(tab.dataset.tabIndex) === tabIndex;
        tab.classList.toggle('active', isActive);
      });

      footer?.classList.add('hide');
      refreshActiveTabData();
      
      if (tabIndex === 5) attachSettingsListeners(windowInstance);
    }
  }

  async function refreshActiveTabData(forceReRender = false) {
    if (!openWindow || !openWindow.isOpen()) return;
    
    const activeIndex = openWindow.activeTabIndex;
    switch (activeIndex) {
      case 0: await updateNotificationsTab(forceReRender); break;
      case 1: await updateEventsTimeline(forceReRender); break;
      case 2: await updateIdeasTab(forceReRender); break;
      case 3: await updateSystemTab(forceReRender); break;
      case 4: await updateContactsTab(forceReRender); break;
    }
  }

  function startMainWindowPolling() {
    stopAllIntervals();
    
    // Frequent updates (3s)
    activeRefreshInterval = setInterval(() => {
      if (openWindow) refreshActiveTabData();
    }, 3000);

    // Infrequent updates (10m) - For Contacts
    activeContactsInterval = setInterval(() => {
      if (openWindow && openWindow.activeTabIndex === 4) updateContactsTab();
    }, 600000);
  }

  const loginWindow = createWindow({
    id: 'login-window',
    title: 'Welcome',
    icon: 'bx-log-in',
    onClose: onWindowClose
  });
  
  const mainWindow = createWindow({
    id: 'main-window',
    icon: 'bx-layer',
    onClose: onWindowClose,
    onOpen: startMainWindowPolling
  });

  if (loggedIn) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.tabIndex);
            handleWindow(mainWindow, e.currentTarget, index);
        });
    });
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