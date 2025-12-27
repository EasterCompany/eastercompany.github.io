// theme.js - Theme management system

const THEME_KEY = 'easter_theme';

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
    LEGACY: 'legacy',
    LUCID: 'lucid'
};

/**
 * Get the current theme preference
 * @returns {string}
 */
export function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || THEMES.DARK;
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
 * @param {string} theme - The theme preference
 * @param {boolean} skipTransition - Whether to skip the transition animation
 */
export function applyTheme(theme, skipTransition = false) {
    const body = document.body;

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

    // Manage background element
    const needsBackground = [THEMES.LIGHT, THEMES.LEGACY, THEMES.LUCID].includes(theme);

    if (needsBackground) {
        body.classList.add('is-animated');
        // Create background element if it doesn't exist
        if (!document.querySelector('.background')) {
            const bg = document.createElement('div');
            bg.className = 'background';
            document.body.prepend(bg);
        }
    } else {
        body.classList.remove('is-animated');
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
}
