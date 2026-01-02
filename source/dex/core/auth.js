// auth.js - Zero-friction authentication

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
    return !!localStorage.getItem('easter_user_email');
}

/**
 * Get the logged in user's email
 * @returns {string|null}
 */
export function getUserEmail() {
    return localStorage.getItem('easter_user_email') || 'master@easter.company';
}

/**
 * Login with email (stored locally for profile display)
 * @param {string} email
 */
export function login(email) {
    localStorage.setItem('easter_user_email', email.trim());
}

/**
 * Logout user
 */
export function logout() {
    localStorage.removeItem('easter_user_email');
}