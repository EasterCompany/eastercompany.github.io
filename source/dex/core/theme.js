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
    const html = document.documentElement;
    const body = document.body;

    // 1. Manage Body Classes
    Object.values(THEMES).forEach(t => {
        body.classList.remove(`theme-${t}`);
    });
    body.classList.add(`theme-${theme}`);

    // 2. Manage Theme Color Meta (For Safari/Chrome Mobile)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }

    // 3. Define Theme Constants
    const themeColors = {
        [THEMES.DARK]: '#050507',
        [THEMES.LIGHT]: '#FFFFFF',
        [THEMES.LEGACY]: '#000000'
    };

    const targetColor = themeColors[theme] || themeColors[THEMES.DARK];
    metaThemeColor.setAttribute('content', targetColor);

    // 4. Fix Safari white overscroll by coloring the root HTML element
    // We leave the body background to the CSS theme engine to preserve gradients
    html.style.backgroundColor = targetColor;

    // 5. Ensure background element exists
    if (!document.querySelector('.background')) {
        const bg = document.createElement('div');
        bg.className = 'background';
        document.body.prepend(bg);
    }

    // 6. Manage animation state
    body.classList.add('is-animated');
}

/**
 * Initialize theme on page load
 */
export function initTheme() {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme); 
}
