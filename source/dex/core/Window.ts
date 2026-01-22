// source/dex/Window.ts

let windowZIndex = 1000;

export interface WindowTab {
  title: string;
  icon?: string;
  content: string;
}

export interface WindowOptions {
  id: string;
  title?: string;
  icon?: string;
  content?: string;
  tabs?: WindowTab[];
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}

export interface WindowInstance {
  open: () => void;
  close: (immediate?: boolean) => void;
  setContent: (content: string) => void;
  isOpen: () => boolean;
  focus: () => void;
  id: string;
}

/**
 * Creates and manages a single window instance.
 * @param {WindowOptions} options - Configuration for the window.
 */
export function createWindow(options: WindowOptions): WindowInstance {
  let windowEl: HTMLElement | null = null;
  let closeCallback = options.onClose || null;
  let openCallback = options.onOpen || null;

  function focus() {
    if (windowEl) {
      windowEl.style.zIndex = (++windowZIndex).toString();
    }
  }

  function open() {
    if (windowEl) {
      windowEl.classList.add('open');
      focus();
      window.addEventListener('resize', handleResize);
      if (openCallback) setTimeout(openCallback, 10);
      return;
    }

    let container = document.getElementById('windows-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'windows-container';
      container.className = 'windows-container';
      document.body.appendChild(container);
    }

    windowEl = document.createElement('div');
    windowEl.id = options.id;
    windowEl.className = 'window';
    if (options.className) {
      windowEl.classList.add(options.className);
    }
    if (options.tabs && options.tabs.length > 0) {
      windowEl.classList.add('has-tabs');
    }
    windowEl.style.zIndex = (++windowZIndex).toString();

    // Add focus listener
    windowEl.addEventListener('mousedown', focus);

    const iconClass = options.icon || 'bx-window';
    let tabBarHTML = '';
    let windowTitleHTML = '';
    let contentHTML;

    const spacerHTML = `<div class="window-bottom-spacer"></div>`;

    if (options.tabs && options.tabs.length > 0) {
      const tabTitles = options.tabs
        .map((tab, index) => {
          const iconHtml = tab.icon
            ? `<i class="bx ${tab.icon}"></i>`
            : `<span class="tab-glyph">${tab.title?.charAt(0).toUpperCase() || '?'}</span>`;
          return `
                    <div class="tab ${index === 0 ? 'active' : ''}" data-tab-index="${index}">
                        ${iconHtml}
                        <span class="tab-title">${tab.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${index}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `;
        })
        .join('');

      tabBarHTML = `<div class="tab-bar">${tabTitles}</div>`;
      const tabContents = options.tabs
        .map(
          (tab, index) =>
            `<div class="tab-content ${index === 0 ? 'active' : ''}" data-tab-content="${index}">${tab.content}${spacerHTML}</div>`
        )
        .join('');
      contentHTML = `<div class="window-content">${tabContents}</div>`;
    } else {
      if (options.title) windowTitleHTML = `<div class="window-title">${options.title}</div>`;
      contentHTML = `<div class="window-content">${options.content || ''}${spacerHTML}</div>`;
    }

    windowEl.innerHTML = `
            <div class="window-header">
                <i class="bx ${iconClass}"></i>
                ${tabBarHTML}
                ${windowTitleHTML}
                <i class="bx bx-x window-close"></i>
            </div>
            ${contentHTML}
        `;
    container.appendChild(windowEl);

    windowEl.querySelector('.window-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      close();
    });

    window.addEventListener('resize', handleResize);

    if (options.tabs) {
      windowEl.querySelectorAll('.tab').forEach((tab) => {
        tab.addEventListener('click', () => {
          if (!windowEl) return;
          const idx = tab.getAttribute('data-tab-index');
          windowEl.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
          tab.classList.add('active');
          windowEl.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
          const targetContent = windowEl.querySelector(`.tab-content[data-tab-content="${idx}"]`);
          if (targetContent) targetContent.classList.add('active');
          scrollToActiveTab(tab as HTMLElement, windowEl);
        });
      });
    }

    setTimeout(() => {
      if (windowEl) windowEl.classList.add('open');
      if (openCallback) openCallback();
    }, 10);
  }

  function handleResize() {
    if (!windowEl || !windowEl.classList.contains('open')) return;
    const activeTab = windowEl.querySelector('.tab.active');
    if (activeTab) scrollToActiveTab(activeTab as HTMLElement, windowEl);
  }

  function scrollToActiveTab(tab: HTMLElement, windowEl: HTMLElement) {
    setTimeout(() => {
      const tabBar = windowEl.querySelector('.tab-bar');
      if (!tabBar) return;
      const tabs = Array.from(tabBar.querySelectorAll('.tab')) as HTMLElement[];
      const currentIndex = tabs.indexOf(tab);
      const barWidth = tabBar.clientWidth;
      const leftNeighbor = tabs[Math.max(0, currentIndex - 2)];
      const rightNeighbor = tabs[Math.min(tabs.length - 1, currentIndex + 2)];

      const tabBarEl = tabBar as HTMLElement;
      const leftPos = leftNeighbor.offsetLeft - tabBarEl.offsetLeft - 25;
      const rightPos =
        rightNeighbor.offsetLeft + rightNeighbor.offsetWidth - tabBarEl.offsetLeft + 25;
      const windowWidth = rightPos - leftPos;
      const targetScroll =
        windowWidth <= barWidth
          ? leftPos - (barWidth - windowWidth) / 2
          : tab.offsetLeft - tabBarEl.offsetLeft - barWidth / 2 + tab.offsetWidth / 2;
      tabBar.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }, 350);
  }

  function close(immediate = false) {
    if (!windowEl) return;
    window.removeEventListener('resize', handleResize);
    if (immediate) {
      windowEl.remove();
      windowEl = null;
    } else {
      windowEl.classList.remove('open');
      if (closeCallback) closeCallback();
      setTimeout(() => {
        windowEl?.remove();
        windowEl = null;
      }, 400);
    }
  }

  function setContent(content: string) {
    options.content = content;
    const contentDiv = windowEl?.querySelector('.window-content');
    if (contentDiv) contentDiv.innerHTML = content;
  }

  function isOpen() {
    return !!(windowEl && windowEl.classList.contains('open'));
  }

  return { open, close, setContent, isOpen, focus, id: options.id };
}
