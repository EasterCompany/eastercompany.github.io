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
            // Call onOpen callback when reopening existing window
            if (openCallback) {
                setTimeout(openCallback, 10);
            }
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

        const iconClass = options.icon || 'bx-window';
        let tabBarHTML = '';
        let windowTitleHTML = ''; // New variable for window title
        let contentHTML;

        if (options.tabs && options.tabs.length > 0) {
            const tabTitles = options.tabs.map((tab, index) => {
                let iconHtml;
                if (tab.icon) {
                    iconHtml = `<i class="bx ${tab.icon}"></i>`;
                } else if (tab.title && tab.title.length > 0) {
                    const glyph = tab.title.charAt(0).toUpperCase();
                    iconHtml = `<span class="tab-glyph">${glyph}</span>`;
                } else {
                    iconHtml = `<i class="bx bx-question-mark"></i>`; // Default fallback if no icon or title
                }

                return `
                    <div class="tab ${index === 0 ? 'active' : ''}" data-tab-index="${index}">
                        ${iconHtml}
                        <span class="tab-title">${tab.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${index}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `;
            }).join('');

            tabBarHTML = `<div class="tab-bar">${tabTitles}</div>`;

            const tabContents = options.tabs.map((tab, index) => {
                return `<div class="tab-content ${index === 0 ? 'active' : ''}" data-tab-content="${index}">${tab.content}</div>`;
            }).join('');
            contentHTML = `<div class="window-content">${tabContents}</div>`;

        } else {
            // No tabs, so render a window title if provided
            if (options.title) {
                windowTitleHTML = `<div class="window-title">${options.title}</div>`;
            }
            contentHTML = `<div class="window-content">${options.content}</div>`;
        }

        const headerHTML = `
            <div class="window-header">
                <i class="bx ${iconClass}"></i>
                ${tabBarHTML}
                ${windowTitleHTML}
                <i class="bx bx-x window-close"></i>
            </div>
        `;

        windowEl.innerHTML = headerHTML + contentHTML;
        container.appendChild(windowEl);

        const closeBtn = windowEl.querySelector('.window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                close();
            });
        }

        // This logic remains the same, as it operates on the rendered elements
        if (options.tabs && options.tabs.length > 0) {
            const tabs = windowEl.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabIndex = tab.getAttribute('data-tab-index');

                    windowEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    windowEl.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    windowEl.querySelector(`.tab-content[data-tab-content="${tabIndex}"]`).classList.add('active');

                    // Automatically scroll the tab into view if the bar is scrollable
                    tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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

    function close(immediate = false) {
        if (!windowEl) return;

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
