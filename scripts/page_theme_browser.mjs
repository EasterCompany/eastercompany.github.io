/**
 * THE PAGE'S THEME, MEASURED AT THE FIRST PAINT — not after it settles.
 *
 * Owen, 2026-10-30: "the easter.company website is dark theme by default, even though my
 * setting is 'system - light' and when I open the settings modal, the settings suddenly
 * update to system auto (light) ... make sure that the site when not logged in uses system
 * (auto) and when logging in, automatically updates to user preference."
 *
 * So this suite reads the page's own background token at two moments an animation-free
 * assertion can trust, and it reads them from the PAGE, not from the modules:
 *
 *   · DOMContentLoaded — the head script has run and the document is parsed. The value here
 *     is what the visitor's first painted frame is built from.
 *   · the account landing — the shared control has read the saved document and published
 *     it. A snapshot here is what the page looks like once the person's choice is known.
 *
 * Every case prints the computed `--bg`, the published `data-easter-theme` and the
 * `color-scheme` it set. Nothing here clicks a panel to make a theme appear: that is the
 * defect this suite exists to keep out.
 *
 * WHAT IS SERVED: this repository's real site/, and the REAL shared account control from
 * the launcher checkout under test (easter-co-smp-worktrees/theme-default/site by default,
 * else /root/easter-co-smp.github.io/site), answered over its own origin. The account
 * SERVICE is a stub in the shapes site/account-client.mjs documents.
 *
 * Run: node scripts/page_theme_browser.mjs
 */
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdir, writeFile} from 'node:fs/promises';
import {readFileSync, existsSync} from 'node:fs';
import {extname, join} from 'node:path';
import {tmpdir} from 'node:os';

const {chromium} = await import(process.env.PLAYWRIGHT_MODULE
  || '/root/deepseek-harness/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs');

const site = new URL('..', import.meta.url).pathname.replace(/\/scripts\/?$/, '') + 'site';
const output = process.env.EASTER_THEME_OUTPUT || join(tmpdir(), 'page-theme-review');
await mkdir(output, {recursive: true});
// The shared control, from the checkout under test: the corporate page imports it over the wire.
const launcher = process.env.EASTER_LAUNCHER_SITE || (
  existsSync('/root/easter-co-smp-worktrees/theme-default/site/account-control.mjs')
    ? '/root/easter-co-smp-worktrees/theme-default/site'
    : '/root/easter-co-smp.github.io/site');
const API = 'https://jyjshd22z3.execute-api.us-east-2.amazonaws.com';
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
               '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
               '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.ico': 'image/x-icon'};

const ACCOUNT = {id: 34, username: 'owen', displayName: 'Owen Easter', minecraftName: 'OCEaster',
                 roles: ['owner'], passwordRequired: false, microsoftLinked: false, providers: []};
// The two palettes this page publishes, read from the stylesheets once so the suite states
// what it expects instead of trusting whatever paints.
// `--bg` is a custom property, so the computed value is the token as written; the painted
// background is the same colour as rgb. Both are asserted, because one is the palette the
// page declares and the other is what the browser actually paints.
const LIGHT_BG = '#eef2f9', LIGHT_PAINTED = 'rgb(238, 242, 249)';   // page-theme.css
const DARK_BG = '#111317', DARK_PAINTED = 'rgb(17, 19, 23)';        // styles.css

const server = createServer((request, response) => {
  const path = new URL(request.url, 'http://127.0.0.1').pathname;
  const file = join(site, path === '/' ? 'index.html' : path);
  if (!file.startsWith(site) || !existsSync(file)) {
    response.writeHead(404, {'content-type': 'text/plain'}).end('not found');
    return;
  }
  response.writeHead(200, {'content-type': TYPES[extname(file)] || 'application/octet-stream',
                           'access-control-allow-origin': '*'}).end(readFileSync(file));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({executablePath: '/usr/bin/chromium', args: ['--no-sandbox']});
const errors = [];
const measured = {};
let context, page;
let stored = {version: 1, language: 'auto', theme: 'system',
              chat: {enter: 'submit', shiftEnter: 'newline', ctrlEnter: 'queue'},
              editor: {vim: false}};
let revision = 7;
const settingsReads = [];

async function wire(target) {
  target.on('pageerror', error => errors.push(String(error)));
  await target.route('https://launcher.easter.company/**', async route => {
    const path = new URL(route.request().url()).pathname;
    const file = join(launcher, path);
    if (!existsSync(file)) return route.fulfill({status: 404, body: ''});
    return route.fulfill({contentType: TYPES[extname(file)] || 'application/javascript',
                          headers: {'access-control-allow-origin': '*'},
                          body: readFileSync(file)});
  });
  await target.route('https://fonts.googleapis.com/**', route =>
    route.fulfill({contentType: 'text/css', headers: {'access-control-allow-origin': '*'}, body: ''}));
  await target.route('https://fonts.gstatic.com/**', route => route.fulfill({status: 404, body: ''}));
  await target.route('https://api.github.com/**', route =>
    route.fulfill({contentType: 'application/json', headers: {'access-control-allow-origin': '*'}, body: '[]'}));
  await target.route(API + '/**', async route => {
    const request = route.request();
    if (request.method() === 'OPTIONS') {
      return route.fulfill({status: 204, headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'authorization, content-type, accept',
        'access-control-allow-methods': 'GET, PUT, POST, OPTIONS'}});
    }
    const path = new URL(request.url()).pathname;
    const json = body => route.fulfill({status: 200, headers: {
      'access-control-allow-origin': '*', 'content-type': 'application/json', 'cache-control': 'no-store'},
      body: JSON.stringify(body)});
    if (path === '/v2/accounts/settings') {
      if (request.method() === 'PUT') {
        const body = JSON.parse(request.postData() || '{}');
        if (body.settings) stored = body.settings;
        revision += 1;
        return json({settings: stored, revision, updatedAt: null});
      }
      settingsReads.push(Date.now());
      return json({settings: stored, revision, updatedAt: null});
    }
    if (path === '/v2/accounts/me') return json({account: ACCOUNT});
    if (path === '/v2/accounts/password/login') {
      return json({session: {token: 'fixture-session-token', expiresAt: Date.now() + 3600_000},
                   account: ACCOUNT});
    }
    if (path === '/v2/accounts/logout') return route.fulfill({status: 204, headers: {'access-control-allow-origin': '*'}});
    return json({});
  });
}

/** The page's own palette, read from the document it is painting. */
const readTheme = () => page.evaluate(() => ({
  bg: getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(),
  painted: getComputedStyle(document.documentElement).backgroundColor,
  attribute: document.documentElement.getAttribute('data-easter-theme'),
  colorScheme: document.documentElement.style.colorScheme,
}));

let atDOMContentLoaded = null;
async function load(theme, scheme, {signedIn = true} = {}) {
  stored = {...stored, theme};
  settingsReads.length = 0;
  if (context) await context.close();
  context = await browser.newContext({viewport: {width: 1280, height: 900}, colorScheme: scheme});
  await context.addInitScript(signed => {
    if (signed) {
      sessionStorage.setItem('easter-company-web-session-v1', JSON.stringify({
        token: 'fixture-session-token', expiresAt: Date.now() + 3600_000, account: null}));
    } else {
      sessionStorage.clear();
    }
  }, signedIn);
  await wire(context);
  page = await context.newPage();
  // `waitUntil: 'domcontentloaded'` resolves on the page's own DOMContentLoaded event, so the
  // read that follows is the state the visitor's first frame is built from — not a value after
  // the page has been open for a while.
  await page.goto(origin + '/', {waitUntil: 'domcontentloaded'});
  atDOMContentLoaded = await readTheme();
}

/** Wait for the account's answer to land, and say how long it took after DOMContentLoaded. */
const waitForAccountTheme = async (expected, budgetMs = 10000) => {
  const start = Date.now();
  while (Date.now() - start < budgetMs) {
    const now = await readTheme();
    if (now.bg === expected) return {...now, landedAfterMs: Date.now() - start};
    await page.waitForTimeout(25);
  }
  return {...(await readTheme()), landedAfterMs: null};
};

try {
  // ── 1. OS light, signed out: light at DOMContentLoaded ───────────────────────────
  await load('light', 'light', {signedIn: false});
  measured.signedOutLightOS = atDOMContentLoaded;
  assert.equal(atDOMContentLoaded.bg, LIGHT_BG,
    `OS light and signed out must be light at DOMContentLoaded; saw ${atDOMContentLoaded.bg}`
    + ` (attribute ${atDOMContentLoaded.attribute})`);
  assert.equal(atDOMContentLoaded.painted, LIGHT_PAINTED, 'and the browser paints it, not just declares it');
  assert.equal(atDOMContentLoaded.attribute, 'light', 'the published attribute is resolved, and colour-scheme follows it');
  assert.equal(atDOMContentLoaded.colorScheme, 'light', 'color-scheme is published beside the attribute');
  await page.waitForTimeout(400);
  const stillLight = await readTheme();
  measured.signedOutLightOSAfter = stillLight;
  assert.equal(stillLight.bg, LIGHT_BG, 'a signed-out page does not repaint itself a moment later');
  assert.equal(settingsReads.length, 0, 'a signed-out page must not ask for a document it does not have');
  await page.screenshot({path: join(output, 'signed-out-light-os.png')});

  // ── 2. the same page with a dark OS ──────────────────────────────────────────────
  await load('dark', 'dark', {signedIn: false});
  measured.signedOutDarkOS = atDOMContentLoaded;
  assert.equal(atDOMContentLoaded.bg, DARK_BG,
    `OS dark and signed out must be dark at DOMContentLoaded; saw ${atDOMContentLoaded.bg}`);
  assert.equal(atDOMContentLoaded.attribute, 'dark', 'the attribute follows the OS, not a guess');

  // ── 3. a live OS change while signed out ────────────────────────────────────────
  await page.emulateMedia({colorScheme: 'light'});
  const flipped = await waitForAccountTheme(LIGHT_BG, 3000);
  measured.signedOutLiveOSChange = flipped;
  assert.equal(flipped.bg, LIGHT_BG, 'a signed-out page follows a live OS change');
  assert.equal(flipped.attribute, 'light', '…publishing it on the same attribute');
  await page.screenshot({path: join(output, 'signed-out-os-flip.png')});

  // ── 4. an account that chose light on a DARK OS ─────────────────────────────────
  await load('light', 'dark');
  measured.accountLightDarkOS = {atDOMContentLoaded};
  assert.equal(atDOMContentLoaded.bg, DARK_BG,
    'no document has been read at DOMContentLoaded, so the page wears the OS answer — '
    + `this is the one moment a saved choice cannot reach; saw ${atDOMContentLoaded.bg}`);
  const landedLight = await waitForAccountTheme(LIGHT_BG);
  measured.accountLightDarkOSLanded = landedLight;
  assert.equal(landedLight.bg, LIGHT_BG,
    `a saved light must win over a dark OS with no interaction; saw ${landedLight.bg}`);
  assert.equal(landedLight.attribute, 'light', 'the account answer is published as the same attribute');
  assert.equal(landedLight.colorScheme, 'light', 'with color-scheme beside it');
  assert.ok(landedLight.landedAfterMs !== null,
    'the account theme never arrived: the page stayed on the OS answer');
  assert.ok(settingsReads.length >= 1, 'the control read the account document on load');
  assert.equal(await page.evaluate(() => performance.getEntriesByType('navigation').length), 1,
    'nothing navigated: the theme moved inside one document');
  await page.screenshot({path: join(output, 'account-light-on-dark-os.png')});

  // ── 5. an account that chose dark on a LIGHT OS ─────────────────────────────────
  await load('dark', 'light');
  measured.accountDarkLightOS = {atDOMContentLoaded};
  assert.equal(atDOMContentLoaded.bg, LIGHT_BG,
    `the pre-paint answer is the OS one; saw ${atDOMContentLoaded.bg}`);
  const landedDark = await waitForAccountTheme(DARK_BG);
  measured.accountDarkLightOSLanded = landedDark;
  assert.equal(landedDark.bg, DARK_BG,
    `a saved dark must win over a light OS with no interaction; saw ${landedDark.bg}`);
  assert.equal(landedDark.attribute, 'dark', 'and the attribute says dark');

  // ── 6. an account on `system` follows the OS in both directions ─────────────────
  await load('system', 'light');
  assert.equal(atDOMContentLoaded.bg, LIGHT_BG, 'system on a light OS is light from the first frame');
  measured.accountSystemLightOS = await readTheme();
  await page.emulateMedia({colorScheme: 'dark'});
  const systemDark = await waitForAccountTheme(DARK_BG, 3000);
  measured.accountSystemDarkOS = systemDark;
  assert.equal(systemDark.bg, DARK_BG, 'a signed-in `system` account follows the OS live');
  assert.equal(systemDark.attribute, 'dark', 'and publishes it');

  // ── 7. the panel changes nothing it should not ──────────────────────────────────
  // The defect was a page that corrected itself when the panel opened. Opening it now must be
  // a no-op on the page's palette.
  await load('light', 'dark');
  const before = await waitForAccountTheme(LIGHT_BG);
  assert.equal(before.bg, LIGHT_BG, 'the page is already the account’s light');
  await page.locator('.web-account-nav').click();
  const item = page.getByRole('menuitem', {name: /settings/i}).or(
    page.getByRole('button', {name: /settings/i}));
  await item.first().click();
  const dialog = page.locator('dialog, [role=dialog]').filter({hasText: /Preferred Theme/i}).first();
  await dialog.waitFor({state: 'visible', timeout: 15000});
  await page.waitForTimeout(400);
  const after = await readTheme();
  measured.openingThePanel = {before, after};
  assert.equal(after.bg, before.bg, 'opening the settings panel must not move the page theme');
  assert.equal(after.attribute, before.attribute, 'nor the attribute it publishes');
  await page.screenshot({path: join(output, 'panel-open-account-light.png')});

  // ── 8. the control's five tokens still resolve, in the theme that is on ──────────
  // Diana's page-theme.css and the host-token file are untouched by this ticket; what has to
  // hold is that the panel the control paints still reads its five --es-* tokens off the page,
  // and that they follow the theme rather than freezing at the launcher's teal/gold defaults.
  const panelTokens = await dialog.evaluate(node => {
    const style = getComputedStyle(node);
    return Object.fromEntries(['--es-surface', '--es-border', '--es-text', '--es-muted', '--es-accent']
      .map(name => [name, style.getPropertyValue(name).trim()]));
  });
  measured.panelTokensLight = panelTokens;
  for (const [name, value] of Object.entries(panelTokens)) {
    assert.ok(value, `${name} did not resolve on the panel`);
    assert.ok(!/^var\(/.test(value), `${name} did not resolve to a value: ${value}`);
  }
  // The panel is account-wide, so the dark reading is taken signed in with a dark account.
  await load('dark', 'dark', {signedIn: true});
  await waitForAccountTheme(DARK_BG);
  await page.locator('.web-account-nav').click();
  const darkItem = page.getByRole('menuitem', {name: /settings/i}).or(
    page.getByRole('button', {name: /settings/i}));
  await darkItem.first().click();
  const darkDialog = page.locator('dialog, [role=dialog]').filter({hasText: /Preferred Theme/i}).first();
  await darkDialog.waitFor({state: 'visible', timeout: 15000});
  const panelTokensDark = await darkDialog.evaluate(node => {
    const style = getComputedStyle(node);
    return Object.fromEntries(['--es-surface', '--es-border', '--es-text', '--es-muted', '--es-accent']
      .map(name => [name, style.getPropertyValue(name).trim()]));
  });
  measured.panelTokensDark = panelTokensDark;
  for (const [name, value] of Object.entries(panelTokensDark)) {
    assert.ok(value, `${name} did not resolve on the panel in the dark theme`);
  }
  assert.notDeepEqual(panelTokensDark, panelTokens,
    'the control’s tokens must follow the page theme, not stay at one set of values');

  const report = {measured, settingsReads, errors};
  await writeFile(join(output, 'measurements.json'), JSON.stringify(report, null, 2));
  console.log('MEASURED', JSON.stringify(measured, null, 2));
  console.log('settings reads during load:', settingsReads.length);
  console.log('page errors:', errors.length ? errors.join(' | ') : 'none');
  console.log('screenshots + measurements:', output);
} finally {
  if (context) await context.close().catch(() => {});
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
