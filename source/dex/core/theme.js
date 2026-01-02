// theme.js - Theme management system

const THEME_KEY = 'easter_theme';

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
    LEGACY: 'legacy'
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
 */
export function applyTheme(theme) {
    const body = document.body;

    // Remove all theme classes
    Object.values(THEMES).forEach(t => {
        body.classList.remove(`theme-${t}`);
    });

    // Add current theme class
    body.classList.add(`theme-${theme}`);

    // Ensure background element exists (All themes now use it)
    if (!document.querySelector('.background')) {
        const bg = document.createElement('div');
        bg.className = 'background';
        document.body.prepend(bg);
    }

    // Manage animation state (Always on now)
    body.classList.add('is-animated');
}

/**
 * Initialize theme on page load
 */
export function initTheme() {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme); 
}
