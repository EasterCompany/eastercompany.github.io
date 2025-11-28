// theme.js - Theme management system

const THEME_KEY = 'easter_theme';

export const THEMES = {
    AUTO: 'auto',
    DEFAULT: 'default',
    ANIMATED: 'animated'
};

/**
 * Get the current theme preference
 * @returns {string}
 */
export function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || THEMES.AUTO;
}

/**
 * Determine which theme to apply based on Auto rules
 * @returns {string} Either THEMES.DEFAULT or THEMES.ANIMATED
 */
function resolveAutoTheme() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isFullscreen = window.innerHeight === window.screen.height && window.innerWidth === window.screen.width;

    // Use Legacy if window is above 1920x1080
    if (width > 1920 && height > 1080) {
        return THEMES.ANIMATED;
    }

    // Use Default if equal to 1920x1080 AND fullscreen, OR below 1920x1080
    if ((width === 1920 && height === 1080 && isFullscreen) || width <= 1920 || height <= 1080) {
        return THEMES.DEFAULT;
    }

    return THEMES.DEFAULT;
}

/**
 * Set the theme
 * @param {string} theme
 */
export function setTheme(theme) {
    if (!Object.values(THEMES).includes(theme)) {
        throw new Error('Invalid theme');
    }
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
}

/**
 * Apply the theme to the document
 * @param {string} theme - The theme preference (can be AUTO, DEFAULT, or ANIMATED)
 * @param {boolean} skipTransition - Whether to skip the transition animation
 */
export function applyTheme(theme, skipTransition = false) {
    const body = document.body;

    // Resolve AUTO theme to actual theme
    const resolvedTheme = theme === THEMES.AUTO ? resolveAutoTheme() : theme;

    if (!skipTransition) {
        // Add transition class for fade effect
        body.classList.add('theme-transitioning');

        // Remove transition class after animation
        setTimeout(() => {
            body.classList.remove('theme-transitioning');
        }, 300);
    }

    // Remove all theme classes
    Object.values(THEMES).forEach(t => {
        body.classList.remove(`theme-${t}`);
    });

    // Add current theme class
    body.classList.add(`theme-${theme}`);

    // Handle background element with smooth transition
    if (resolvedTheme === THEMES.ANIMATED) {
        // Create background element if it doesn't exist
        if (!document.querySelector('.background')) {
            const bg = document.createElement('div');
            bg.className = 'background';
            document.body.prepend(bg);
        }
    } else {
        // Remove background element with fade out
        const bg = document.querySelector('.background');
        if (bg) {
            if (skipTransition) {
                bg.remove();
            } else {
                bg.style.animation = 'fadeOutBackground 0.4s ease forwards';
                setTimeout(() => {
                    bg.remove();
                }, 400);
            }
        }
    }
}

/**
 * Initialize theme on page load
 */
export function initTheme() {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme, true); // Skip transition on initial load

    // Add resize listener for auto theme
    if (currentTheme === THEMES.AUTO) {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                applyTheme(THEMES.AUTO);
            }, 300); // Debounce resize events
        });
    }
}
