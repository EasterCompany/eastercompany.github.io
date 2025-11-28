// Easter Company - Universal JS Entrypoint
import { applyBaseStyles } from './styler.js';

function onReady() {
    console.log("Welcome to Easter Company.");
    applyBaseStyles();
}

// Run when the DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
} else {
    onReady();
}
