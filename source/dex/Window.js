// source/dex/Window.js

/**
 * Creates and manages a single window instance.
 * @param {object} options - Configuration for the window.
 * @param {string} options.id - A unique ID for the window.
 * @param {string} [options.content] - The initial HTML content for the window (if not using tabs).
 * @param {Array<object>} [options.tabs] - An array of tab objects, each with a 'title', 'content', and optional 'scrollable' (default true).
 * @param {string} options.icon - Optional boxicon class for the header icon (e.g., 'bx-user', 'bxs-message-dots')
 * @param {function} options.onClose - Optional callback when window is closed
 * @param {function} options.onOpen - Optional callback when window is opened
 */
export function createWindow(options) {
    let windowEl = null;
    let closeCallback = options.onClose || null;
    let openCallback = options.onOpen || null;

    function open() {
        if (windowEl) {
            windowEl.classList.add('open');
            // Add resize listener for the existing window
            window.addEventListener('resize', handleResize);
            // Call onOpen callback when reopening existing window
            if (openCallback) {
                setTimeout(openCallback, 10);
            }
            return;
        }

        let container = document.getElementById('windows-container');
// ... existing container creation ...
        windowEl = document.createElement('div');
        windowEl.id = options.id;
        windowEl.className = 'window';

        const iconClass = options.icon || 'bx-window';
// ... rest of the open function setup ...
        windowEl.innerHTML = headerHTML + contentHTML;
        container.appendChild(windowEl);

        const closeBtn = windowEl.querySelector('.window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                close();
            });
        }

        // Add resize listener
        window.addEventListener('resize', handleResize);

        if (options.tabs && options.tabs.length > 0) {
            const tabs = windowEl.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabIndex = tab.getAttribute('data-tab-index');

                    windowEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    windowEl.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    windowEl.querySelector(`.tab-content[data-tab-content="${tabIndex}"]`).classList.add('active');

                    // Automatically scroll the tab into view
                    scrollToActiveTab(tab, windowEl);
                });
            });
        }

        setTimeout(() => {
            windowEl.classList.add('open');
            // Call onOpen callback after window is opened
            if (openCallback) {
                openCallback();
            }
        }, 10);
    }

    function handleResize() {
        if (!windowEl || !windowEl.classList.contains('open')) return;
        const activeTab = windowEl.querySelector('.tab.active');
        if (activeTab) {
            scrollToActiveTab(activeTab, windowEl);
        }
    }

    function scrollToActiveTab(tab, windowEl) {
        // Automatically scroll the tab into view with optimized visibility for neighbors
        // Delaying by 350ms to allow the active tab expansion animation/reflow to complete fully
        setTimeout(() => {
            const tabBar = windowEl.querySelector('.tab-bar');
            if (tabBar) {
                const tabs = Array.from(tabBar.querySelectorAll('.tab'));
                const currentIndex = tabs.indexOf(tab);
                const barWidth = tabBar.clientWidth;

                // Target the neighbors to ensure they are visible
                const leftNeighbor = tabs[Math.max(0, currentIndex - 2)];
                const rightNeighbor = tabs[Math.min(tabs.length - 1, currentIndex + 2)];

                // Use relative position within the scroll container
                const leftPos = (leftNeighbor.offsetLeft - tabBar.offsetLeft) - 25;
                const rightPos = (rightNeighbor.offsetLeft + rightNeighbor.offsetWidth) - tabBar.offsetLeft + 25;
                const windowWidth = rightPos - leftPos;

                let targetScroll;
                if (windowWidth <= barWidth) {
                    targetScroll = leftPos - (barWidth - windowWidth) / 2;
                } else {
                    targetScroll = (tab.offsetLeft - tabBar.offsetLeft) - (barWidth / 2) + (tab.offsetWidth / 2);
                }

                tabBar.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        }, 350);
    }

    function close(immediate = false) {
        if (!windowEl) return;

        // Remove resize listener
        window.removeEventListener('resize', handleResize);

        if (immediate) {
            windowEl.classList.add('switching');
            windowEl.classList.remove('open');
            setTimeout(() => {
                if (windowEl && windowEl.parentNode) {
                    windowEl.parentNode.removeChild(windowEl);
                }
                windowEl = null;
            }, 200);
        } else {
            windowEl.classList.remove('open');
            if (closeCallback) {
                closeCallback();
            }
            setTimeout(() => {
                if (windowEl && windowEl.parentNode) {
                    windowEl.parentNode.removeChild(windowEl);
                }
                windowEl = null;
            }, 400);
        }
    }

    function setContent(content) {
        if (windowEl) {
            const contentDiv = windowEl.querySelector('.window-content');
            if (contentDiv) {
                // This is more complex with tabs, for now, we just replace the whole content
                contentDiv.innerHTML = content;
            }
        }
    }
    
    function isOpen() {
        return windowEl && windowEl.classList.contains('open');
    }

    return {
        open,
        close,
        setContent,
        isOpen,
        id: options.id,
    };
}
