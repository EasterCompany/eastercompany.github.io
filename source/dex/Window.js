// source/dex/Window.js

/**
 * Creates and manages a high-fidelity window instance.
 */
export function createWindow(options) {
    let windowEl = null;
    let currentContent = options.content || '';
    let closeCallback = options.onClose || null;
    let openCallback = options.onOpen || null;
    let isTransitioning = false;

    function open() {
        if (isTransitioning) return;
        
        if (windowEl) {
            windowEl.classList.remove('switching');
            windowEl.classList.add('open');
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
        windowEl.innerHTML = `<div class="window-content">${currentContent}</div>`;
        container.appendChild(windowEl);

        // Natural browser repaint before adding 'open' class
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (windowEl) {
                    windowEl.classList.add('open');
                    if (openCallback) openCallback();
                }
            });
        });
    }

    function close(immediate = false) {
        if (!windowEl || isTransitioning) return;
        isTransitioning = true;

        if (immediate) {
            windowEl.classList.add('switching');
            windowEl.classList.remove('open');
            setTimeout(() => {
                destroy();
                isTransitioning = false;
            }, 300);
        } else {
            windowEl.classList.remove('open');
            if (closeCallback) closeCallback();
            setTimeout(() => {
                destroy();
                isTransitioning = false;
            }, 500);
        }
    }

    function destroy() {
        if (windowEl && windowEl.parentNode) {
            windowEl.parentNode.removeChild(windowEl);
        }
        windowEl = null;
    }

    function setContent(content) {
        currentContent = content;
        if (windowEl) {
            const contentDiv = windowEl.querySelector('.window-content');
            if (contentDiv) contentDiv.innerHTML = content;
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
