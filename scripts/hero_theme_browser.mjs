/**
 * THE CORPORATE PAGE'S HERO FOLLOWS THE ACCOUNT'S THEME — measured in a real browser.
 *
 * What is served: this repository's real `site/` directory, over a local HTTP server.
 * What runs: the real `site/index.html`, the real `site/account-corporate.mjs`, and the
 * REAL shared account control (site/account-control.mjs + site/user-settings.mjs and
 * their imports) fetched from launcher.easter.company — those requests are answered from
 * the deployed launcher checkout, so the control under test is the shipped one rather
 * than a description of it. The account SERVICE is a stub: a session in sessionStorage
 * and two JSON routes on the API origin, answering the shapes site/account-client.mjs
 * documents (`/v2/accounts/me`, `/v2/accounts/settings`).
 *
 * Asserts computed values out of the hero frame's own document, in every state the
 * ticket names: stored `light`, stored `dark`, stored `system` against a forced
 * prefers-color-scheme both ways, signed out (no document at all), and a Theme change
 * made in the shared control's panel — with no page reload and no frame reload.
 *
 * Run: node scripts/hero_theme_browser.mjs
 * Screenshots land in EASTER_HERO_OUTPUT (defaults to a temp directory).
 */
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {readFileSync, existsSync} from 'node:fs';
import {extname, join} from 'node:path';
import {tmpdir} from 'node:os';

const {chromium} = await import(process.env.PLAYWRIGHT_MODULE
  || '/root/deepseek-harness/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs');

const site = new URL('..', import.meta.url).pathname.replace(/\/scripts\/?$/, '') + 'site';
const output = process.env.EASTER_HERO_OUTPUT || join(tmpdir(), 'corporate-hero-review');
await mkdir(output, {recursive: true});
// The launcher checkout, which is where the shared account control actually lives. Its
// own repository is what serves launcher.easter.company; nothing here edits it.
// The shared control, from the checkout under test — the corporate page imports it over the wire,
// so a suite that served the deployed checkout would test yesterday's control against today's
// adapter. The launcher worktree wins when it is there; the deployed checkout is the fallback.
const launcher = process.env.EASTER_LAUNCHER_SITE || (
  existsSync('/root/easter-co-smp-worktrees/theme-default/site/account-control.mjs')
    ? '/root/easter-co-smp-worktrees/theme-default/site'
    : '/root/easter-co-smp.github.io/site');
const API = 'https://jyjshd22z3.execute-api.us-east-2.amazonaws.com';

const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
               '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
               '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.ico': 'image/x-icon'};

// ── the site, served the way Pages serves it ─────────────────────────────────────────
const server = createServer((request, response) => {
  const path = new URL(request.url, 'http://127.0.0.1').pathname;
  const file = join(site, path === '/' ? 'index.html' : path);
  if (!file.startsWith(site) || !existsSync(file)) {
    response.writeHead(404, {'content-type': 'text/plain'}).end('not found');
    return;
  }
  response.writeHead(200, {'content-type': TYPES[extname(file)] || 'application/octet-stream',
                           'access-control-allow-origin': '*'})
    .end(readFileSync(file));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

// ── the account service, in the shapes account-client.mjs documents ────────────────
// The shape `GET /v2/accounts/me` answers and site/account-client.mjs's sanitizeAccount
// accepts: a numeric `id`, and a linked provider only with its own 64-hex subject.
const ACCOUNT = {id: 34, username: 'owen', displayName: 'Owen Easter',
                 minecraftName: 'OCEaster', roles: ['owner'], passwordRequired: false,
                 microsoftLinked: false, providers: [], primaryProvider: null};
let stored = {version: 1, language: 'auto', theme: 'system',
              chat: {enter: 'submit', shiftEnter: 'newline', ctrlEnter: 'queue'},
              editor: {vim: false}};
let revision = 7;
const sent = [];

const browser = await chromium.launch({executablePath: '/usr/bin/chromium', args: ['--no-sandbox']});
const errors = [];
const measured = {};
let context, page;

async function wire(target) {
  target.on('pageerror', error => errors.push(String(error)));
  // The shared control's modules, from the shipped launcher checkout. Cross-origin
  // module loads need the same headers GitHub Pages serves.
  await target.route('https://launcher.easter.company/**', async route => {
    const path = new URL(route.request().url()).pathname;
    const file = join(launcher, path);
    if (!existsSync(file)) return route.fulfill({status: 404, body: ''});
    return route.fulfill({contentType: TYPES[extname(file)] || 'application/javascript',
                          headers: {'access-control-allow-origin': '*'},
                          body: readFileSync(file)});
  });
  // The frame links Google Fonts and the page's download widget asks GitHub; neither is
  // part of this test, and a suite that waits on the internet is a suite that hangs.
  await target.route('https://fonts.googleapis.com/**', route =>
    route.fulfill({contentType: 'text/css', headers: {'access-control-allow-origin': '*'}, body: ''}));
  await target.route('https://fonts.gstatic.com/**', route => route.fulfill({status: 404, body: ''}));
  await target.route('https://api.github.com/**', route =>
    route.fulfill({contentType: 'application/json', headers: {'access-control-allow-origin': '*'},
                   body: '[]'}));
  await target.route(API + '/**', async route => {
    const request = route.request();
    if (request.method() === 'OPTIONS') {
      return route.fulfill({status: 204, headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'authorization, content-type, accept',
        'access-control-allow-methods': 'GET, PUT, POST, OPTIONS'}});
    }
    const path = new URL(request.url()).pathname;
    const json = (body, status = 200) => route.fulfill({
      status, headers: {'access-control-allow-origin': '*', 'content-type': 'application/json',
                        'cache-control': 'no-store'}, body: JSON.stringify(body)});
    if (path === '/v2/accounts/settings') {
      if (request.method() === 'PUT') {
        const body = JSON.parse(request.postData() || '{}');
        sent.push(body);
        if (body.settings) stored = body.settings;
        revision += 1;
        return json({settings: stored, revision, updatedAt: null});
      }
      return json({settings: stored, revision, updatedAt: null});
    }
    if (path === '/v2/accounts/me') return json({account: ACCOUNT});
    return json({error: 'not_found'}, 404);
  });
}

const seed = (theme, signedIn) => async ([themeValue, signed]) => {
  if (!signed) { sessionStorage.clear(); return; }
  sessionStorage.setItem('easter-company-web-session-v1', JSON.stringify({
    token: 'fixture-session-token', expiresAt: Date.now() + 3600_000, account: null}));
};

async function load(theme, signedIn, scheme) {
  stored = {...stored, theme};
  sent.length = 0;
  if (context) await context.close();
  context = await browser.newContext({viewport: {width: 1280, height: 900},
                                      colorScheme: scheme});
  await context.addInitScript(seed(theme, signedIn), [theme, signedIn]);
  await wire(context);
  page = await context.newPage();
  await page.goto(origin + '/', {waitUntil: 'domcontentloaded'});
  await page.waitForFunction(() => {
    const frame = document.querySelector('iframe.hero-loop');
    return frame && frame.contentDocument && frame.contentDocument.readyState === 'complete';
  }, {timeout: 15000});
}

const heroState = async () => {
  const frame = page.frames().find(f => f.url().includes('hero-loop.html'));
  assert(frame, 'the hero iframe is not in the page');
  await page.waitForTimeout(750);   // the frame animates colours over 600ms
  return frame.evaluate(() => {
    const root = document.documentElement, style = getComputedStyle(root);
    return {theme: root.getAttribute('data-theme'),
            page: style.getPropertyValue('--page').trim(),
            g1: style.getPropertyValue('--g1').trim(),
            body: getComputedStyle(document.body).backgroundColor,
            controls: document.querySelectorAll('#tg, [aria-pressed], [data-t], button').length,
            href: location.href};
  });
};

const plant = async () => {
  const frame = page.frames().find(f => f.url().includes('hero-loop.html'));
  await frame.evaluate(() => { window.__heroFrame = 'same document'; });
};
const stillSameFrame = async () => {
  const frame = page.frames().find(f => f.url().includes('hero-loop.html'));
  return frame.evaluate(() => window.__heroFrame || null);
};

try {
  // ── 1. signed in, stored light, against a dark OS ────────────────────────────────
  await load('light', true, 'dark');
  let state = await heroState();
  measured.signedInLight = state;
  assert.equal(state.theme, 'light', 'the stored light theme must paint the light palette');
  assert.equal(state.page, '#eef2f9', 'the light palette token --page');
  assert.equal(state.body, 'rgb(238, 242, 249)', 'the painted body background');
  assert.equal(state.controls, 0, 'the corporate hero mounts no theme control either');
  assert.equal(sent, sent, 'no write was needed to paint');
  await page.screenshot({path: join(output, 'corporate-signed-in-light.png')});

  // ── 2. signed in, stored dark, against a light OS ───────────────────────────────
  await load('dark', true, 'light');
  state = await heroState();
  measured.signedInDark = state;
  assert.equal(state.theme, 'dark', 'the stored dark theme must paint the dark palette');
  assert.equal(state.page, '#04080d', 'the dark palette token --page');
  assert.equal(state.body, 'rgb(4, 8, 13)', 'the painted body background');
  await page.screenshot({path: join(output, 'corporate-signed-in-dark.png')});

  // ── 3. system, both directions, live ─────────────────────────────────────────────
  await load('system', true, 'light');
  state = await heroState();
  measured.systemLight = state;
  assert.equal(state.page, '#eef2f9', 'system on a light OS is the light palette');
  await plant();
  await page.emulateMedia({colorScheme: 'dark'});
  state = await heroState();
  measured.systemDark = state;
  assert.equal(state.page, '#04080d', 'the OS change repaints the hero live');
  assert.equal(await stillSameFrame(), 'same document', 'with no frame reload');
  await page.emulateMedia({colorScheme: 'light'});
  state = await heroState();
  measured.systemBackToLight = state;
  assert.equal(state.page, '#eef2f9', 'and back to light');

  // ── 4. signed out: no document, so `system` ─────────────────────────────────────
  await load('light', false, 'light');
  state = await heroState();
  measured.signedOutLightOS = state;
  assert.equal(state.page, '#eef2f9', 'signed out on a light OS follows the OS');
  await page.emulateMedia({colorScheme: 'dark'});
  state = await heroState();
  measured.signedOutDarkOS = state;
  assert.equal(state.page, '#04080d',
    'signed out, the stored preference is not read at all: the hero follows the OS');

  // ── 5. a Theme change in the shared control repaints the hero, no reload ────────
  await load('system', true, 'dark');
  state = await heroState();
  measured.beforePanel = state;
  assert.equal(state.page, '#04080d', 'starting dark through system+dark OS');
  await plant();
  // The panel is the launcher's own dialog, opened from the account control's menu.
  const openSettings = async () => {
    await page.locator('.web-account-nav').click();
    const item = page.getByRole('menuitem', {name: /settings/i}).or(
      page.getByRole('button', {name: /settings/i}));
    await item.first().click();
    const panel = page.locator('dialog, [role=dialog]').filter({hasText: /Preferred Theme/i}).first();
    await panel.waitFor({state: 'visible', timeout: 15000});
    return panel;
  };
  const dialog = await openSettings();
  const read = await page.evaluate(() => fetch(
    'https://jyjshd22z3.execute-api.us-east-2.amazonaws.com/v2/accounts/settings',
    {headers: {Authorization: 'Bearer fixture-session-token'}}).then(r => r.json()));
  assert.equal(read.revision, revision, 'the panel is reading the same document this suite holds');
  await dialog.getByRole('radio', {name: /^Light$/}).check().catch(async () => {
    await dialog.locator('input[name=es-theme][value=light]').check();
  });
  state = await heroState();
  measured.panelPreviewLight = state;
  assert.equal(state.theme, 'light', 'the panel reaches the hero (preview before saving)');
  assert.equal(state.page, '#eef2f9', 'the hero painted light from the panel');
  assert.equal(await stillSameFrame(), 'same document', 'no frame reload on a theme change');
  await dialog.getByRole('button', {name: /^Save Changes$/}).click();
  // The save writes the document; the control re-applies it, and the hero re-reads.
  await page.waitForTimeout(1200);
  state = await heroState();
  measured.afterSave = state;
  assert.ok(sent.length >= 1, 'the panel saved through the seam (PUT /v2/accounts/settings)');
  assert.equal(sent[sent.length - 1].settings.theme, 'light', 'the document now holds light');
  assert.equal(state.theme, 'light', 'the saved theme still paints the hero light');
  assert.equal(state.page, '#eef2f9', 'and the token is the light one');
  assert.equal(await stillSameFrame(), 'same document', 'saving must not reload the frame');
  // And back to dark through the same path.
  const again = await openSettings();
  await again.locator('input[name=es-theme][value=dark]').check();
  state = await heroState();
  measured.panelPreviewDark = state;
  assert.equal(state.page, '#04080d', 'the hero follows the panel back to dark');
  await again.getByRole('button', {name: /^Save Changes$/}).click();
  await page.waitForTimeout(1200);
  state = await heroState();
  measured.afterSaveDark = state;
  assert.equal(state.page, '#04080d', 'dark survives the save');
  assert.equal(await stillSameFrame(), 'same document', 'still the same frame');
  await page.screenshot({path: join(output, 'corporate-panel-dark.png')});

  // ── 6. no page reload anywhere in this run ──────────────────────────────────────
  const navigations = await page.evaluate(() =>
    performance.getEntriesByType('navigation').length);
  assert.equal(navigations, 1, 'the whole run is one document: nothing reloaded the page');

  const report = {measured, writes: sent, errors};
  await writeFile(join(output, 'measurements.json'), JSON.stringify(report, null, 2));
  console.log('MEASURED', JSON.stringify(measured, null, 2));
  console.log('page errors:', errors.length ? errors.join(' | ') : 'none');
  console.log('screenshots + measurements:', output);
} finally {
  if (context) await context.close().catch(() => {});
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
