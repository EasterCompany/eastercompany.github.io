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

// ── THE HERO FOLLOWS THE ACCOUNT'S THEME ────────────────────────────────────────────────
// The same contract e-server's billing page implements, documented in full at the top of
// site/assets/hero-loop.html: the iframe is told a PREFERENCE — `light`, `dark` or
// `system` — and resolves `system` itself, live, through prefers-color-scheme.
//
// WHERE THE PREFERENCE COMES FROM, and there is only one place: the account's saved
// settings document, through the same seam the shared control's User Settings panel reads
// and writes (`seam.settingsRead()` — the value that panel shows). This page publishes no
// light palette and stores no theme of its own; it does not read the panel's DOM and it
// does not keep a second copy.
//
// Signed out, or an account service that cannot answer, means `system`: the hero then
// follows the OS exactly as a signed-out visitor's page would. No document, no choice.
//
// WHY THE IFRAME'S URL CARRIES NO `?theme=`, unlike the billing page's: this page's
// preference is a server-side document, so it cannot be known synchronously while the
// markup parses. The frame therefore cold-loads the only answer available with no request
// at all — `system` — and this module repaints it the moment the document lands, over
// postMessage, which is a repaint rather than a reload: for a `system` account (the
// default) the first paint is already right, and for an explicit choice the frame is
// corrected once, before the person has read anything.
//
// THE LIVE PATH. The shared control publishes what it applied to this document as
// `documentElement.dataset.easterTheme` on every read, preview, save and discard (see
// site/user-settings.mjs, applyTheme). That attribute is RESOLVED — it can never tell us
// whether the person chose `system` or chose `dark` on a dark OS — so it is used only as
// the signal that the choice may have moved, and the document is re-read.
//
// ONE EXCEPTION, so the panel's preview is honest. When the attribute DISAGREES with what
// the saved document resolves to, the person is previewing a choice they have not saved:
// the panel is already painting the page in it, and the hero would otherwise sit out the
// preview and only move on save. The preview therefore wins until the document catches
// up, which it does on the save or on the discard that follows.
const HERO_THEMES=new Set(['light','dark','system']);
const heroFrame=document.querySelector('iframe.hero-loop');
if(heroFrame){
  const media=window.matchMedia?.('(prefers-color-scheme: light)');
  let sent=null;
  const paint=theme=>{
    sent=theme;
    try{heroFrame.contentWindow.postMessage({type:'hero-theme',theme},location.origin);}catch{/* a frame between documents drops it; load sends again */}
  };
  const readChoice=async()=>{
    try{
      const answer=await seam.settingsRead();
      const theme=answer?.ok?answer.value?.settings?.theme:null;
      return HERO_THEMES.has(theme)?theme:'system';
    }catch{ return 'system'; }
  };
  const follow=async()=>{
    const choice=await readChoice();
    const resolved=choice==='system'?(media?.matches?'light':'dark'):choice;
    const applied=document.documentElement.dataset.easterTheme;
    const previewing=(applied==='light'||applied==='dark')&&applied!==resolved;
    const theme=previewing?applied:choice;
    if(theme!==sent)paint(theme);
  };
  heroFrame.addEventListener('load',()=>{ if(sent)paint(sent); follow(); });
  new MutationObserver(follow).observe(document.documentElement,
    {attributes:true,attributeFilter:['data-easter-theme']});
  follow();
}

// Installer controls are available before and after sign-in. The shared account
// control above continues to own sign-in, sign-up, profile and linked accounts.

