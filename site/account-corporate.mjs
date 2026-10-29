// THE CORPORATE SITE'S HEADER CONTROL, IN THE LAUNCHER'S OWN IMPLEMENTATION.
//
// easter.company does not grow its own account button, menu or dialogs. It mounts the launcher's
// (https://launcher.easter.company/account-control.mjs) into its header and hands it an account
// seam built HERE, because the one thing that cannot be shared is the address Microsoft returns to:
// the corporate site is registered at https://easter.company/account/ (registered as a Web redirect
// on the Easter Company application, 2026-10-27), so the same resource started from this origin has
// to name this origin's callback. That is the whole difference between the two surfaces - the face
// precedence, the menu, My Profile, Linked Accounts, Sign out and the sign-in dialogs are one
// implementation, which is the rule Owen keeps paying for: the launcher's face, the site's face and
// the browser's face have to be the same face.
//
// THE THREE IMPORTS ARE ABSOLUTE ON PURPOSE. GitHub Pages serves .mjs with
// `access-control-allow-origin: *` (measured 2026-10-27), and every relative import inside those
// modules (`./company-auth.mjs`, `./company-profile.mjs`, `./account/microsoft-signin.mjs`) resolves
// against the module's OWN url, so all of them come from launcher.easter.company whichever page
// loaded them. One file, and the dialogs arrive with it.
//
// WHAT THIS PAGE OWNS: the mount point (site/index.html's .site-header nav, which already holds the
// Request Beta Access button, so the control lands to its right and reads [IMG NAME] there), the
// `web-mode` class the copied rules in site/account-control.css are scoped to, and the redirect.
import {createWebAccount} from 'https://launcher.easter.company/web-account.mjs';
import {createMicrosoftSignIn} from 'https://launcher.easter.company/account/microsoft-signin.mjs';
import {mountAccountControl} from 'https://launcher.easter.company/account-control.mjs';

// The corporate origin's registered callback, and nothing else. It is the literal the start answer
// and the authorize URL are both checked against (account/microsoft-signin.mjs, start()), so a
// deployment that does not allow this address refuses here, before a browser is sent to Microsoft
// and before a code is ever spent on a redirect URI the authority does not know. The account page
// that receives the answer (site/account/index.html) carries the same literal in its
// `<meta name="easter-redirect-uri">`.
const REDIRECT_URI='https://easter.company/account/';

// site/account-control.css is scoped to .web-mode, exactly as the launcher's web.css is: that class
// is what makes the copied rules apply, and it is set before the control is mounted so the pill is
// never painted twice. The launcher's own page script (site/web.js) does the same.
document.documentElement.classList.add('web-mode');

// The seam: the launcher's web account client with THIS page's Microsoft redirect. Everything else
// about it - the session storage, the API origin, the sign-in window - is the launcher module's.
const seam=createWebAccount({microsoftBrowser:createMicrosoftSignIn({redirectUri:REDIRECT_URI})});

const nav=document.querySelector('.site-header nav');
const control=nav?await mountAccountControl({nav,seam}):null;

// Installer controls are available before and after sign-in. The shared account
// control above continues to own sign-in, sign-up, profile and linked accounts.

