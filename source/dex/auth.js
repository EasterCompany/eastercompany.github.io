// auth.js - Simple email-based authentication

const AUTH_KEY = 'easter_user_email';

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
    return localStorage.getItem(AUTH_KEY) !== null;
}

/**
 * Get the logged in user's email
 * @returns {string|null}
 */
export function getUserEmail() {
    return localStorage.getItem(AUTH_KEY);
}

/**
 * Login with email
 * @param {string} email
 */
export function login(email) {
    if (!email || !email.includes('@')) {
        throw new Error('Invalid email address');
    }

    // Restrict to @easter.company emails only
    if (!email.trim().toLowerCase().endsWith('@easter.company')) {
        throw new Error('Access denied. Please check your credentials.');
    }

    localStorage.setItem(AUTH_KEY, email.trim());
}

/**
 * Logout user
 */
export function logout() {
    localStorage.removeItem(AUTH_KEY);
}
