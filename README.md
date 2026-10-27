# Easter Company AI corporate beta draft

A buildless, conversion-focused company landing page: two weeks of free AI
credits, beta access to three proprietary models, and a tailored agent harness.
The broader Engineering, Entertainment, Education and Enterprise story, SMP
feature and owner links sit below the main AI signup path.

Open the included self-contained preview.html without a server, or serve editable
source with `python -m http.server --directory site 8080` and visit localhost:8080.
No dependency installation or build step is required.

The signup is an explicit prototype. It validates company contact details, shows a
safe text-only review, supports editing, and downloads a draft JSON application.
It submits nothing, creates no account and activates no credits. No contact data
is stored in localStorage, sent to analytics, or submitted to an external service.
See docs/beta-launch-readiness.md before wiring a real registration endpoint.

Real evaluation references are linked, without fabricated scores or unverified
comparative pricing claims. The user-supplied frontier-parity and 10x-cheaper
claims require reproducible model evaluations and matched pricing evidence.
The existing company phoenix and SMP artwork are preserved.

Validation: `python scripts/validate.py`, `node --check site/site.js`.
Browser review covered desktop, 320px and 390px layouts with zero horizontal
overflow, working anchors, required-field validation, application summary,
downloaded draft/submitted flags, and editing without losing entered details.

The noindex/nofollow metadata and manual-only Pages workflow retain draft status.
No production deploy or public signup integration was made. The GitHub connection
previously refused repository writes with403 Resource not accessible by integration.
