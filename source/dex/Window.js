// source/dex/Window.js

/**
 * Creates and manages a single window instance.
 * @param {object} options - Configuration for the window.
 * @param {string} options.id - A unique ID for the window.
 * @param {string} [options.content] - The initial HTML content for the window.
 * @param {string} options.icon - Optional boxicon class for the header icon
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
            window.addEventListener('resize', handleResize);
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
        let windowTitleHTML = options.title ? `<div class="window-title">${options.title}</div>` : '';

        const headerHTML = `
            <div class="window-header">
                <i class="bx ${iconClass}"></i>
                ${windowTitleHTML}
                <i class="bx bx-x window-close"></i>
            </div>
        `;

        windowEl.innerHTML = headerHTML + `<div class="window-content">${options.content || ''}</div>`;
        container.appendChild(windowEl);

        const closeBtn = windowEl.querySelector('.window-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                close();
            });
        }

        window.addEventListener('resize', handleResize);

        setTimeout(() => {
            windowEl.classList.add('open');
            if (openCallback) {
                openCallback();
            }
        }, 10);
    }

    function handleResize() {
        // Natural window behavior now
    }

    function close(immediate = false) {
        if (!windowEl) return;
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
            if (closeCallback) closeCallback();
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
