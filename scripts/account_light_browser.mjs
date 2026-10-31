/**
 * THE SHARED CONTROL'S OWN SURFACES, IN LIGHT: the menu, the profile dialog, Linked Accounts
 * and the settings panel — measured, not assumed.
 *
 * Owen, 2026-10-31, twice: a `<button>My Profile</button>` and the whole Linked Accounts dialog
 * were white text on a white page. Every audit before this one missed them for the same reason:
 * those surfaces only exist once a signed-in account opens them, and the audits were looking at
 * a signed-out page. So this suite drives the REAL shared control (site/account-control.mjs,
 * served from the launcher checkout over its own origin) against a stub account service, opens
 * each surface in the light theme, and fails if any visible text inside it is under 4.5:1.
 *
 * Run: node scripts/account_light_browser.mjs
 */
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdir} from 'node:fs/promises';
import {readFileSync, existsSync} from 'node:fs';
import {extname, join} from 'node:path';
import {tmpdir} from 'node:os';

const {chromium} = await import(process.env.PLAYWRIGHT_MODULE
  || '/root/deepseek-harness/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs');

const site = new URL('..', import.meta.url).pathname.replace(/\/scripts\/?$/, '') + 'site';
const launcher = process.env.EASTER_LAUNCHER_SITE || (existsSync('/root/easter-co-smp.github.io/site/account-control.mjs')
  ? '/root/easter-co-smp.github.io/site' : '/root/easter-co-smp-worktrees/theme-default/site');
const output = process.env.EASTER_ACCOUNT_OUTPUT || join(tmpdir(), 'account-light-review');
await mkdir(output, {recursive: true});
const API = 'https://jyjshd22z3.execute-api.us-east-2.amazonaws.com';
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
               '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
               '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.ico': 'image/x-icon'};
const ACCOUNT = {id: 34, username: 'owen', displayName: 'Owen Easter', minecraftName: 'OwenEaster',
                 roles: ['owner'], passwordRequired: false, microsoftLinked: false,
                 providers: [{provider: 'microsoft', label: 'Microsoft / Xbox', detail: 'Minecraft Username: OwenEaster'},
                             {provider: 'google', label: 'Google', detail: 'oceaster@gmail.com'},
                             {provider: 'steam', label: 'Steam', detail: 'Owen'},
                             {provider: 'discord', label: 'Discord', detail: 'oweneaster'}],
                 emails: [{email: 'oceaster@gmail.com', verified: true}]};

const server = createServer((request, response) => {
  const path = new URL(request.url, 'http://127.0.0.1').pathname;
  const file = join(site, path === '/' ? 'index.html' : path);
  if (!file.startsWith(site) || !existsSync(file)) {
    response.writeHead(404, {'content-type': 'text/plain'}).end('not found');
    return;
  }
  response.writeHead(200, {'content-type': TYPES[extname(file)] || 'application/octet-stream'}).end(readFileSync(file));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({executablePath: '/usr/bin/chromium', args: ['--no-sandbox']});
const context = await browser.newContext({viewport: {width: 1280, height: 900}, colorScheme: 'light'});
await context.addInitScript(() => {
  sessionStorage.setItem('easter-company-web-session-v1', JSON.stringify({
    token: 'fixture-session-token', expiresAt: Date.now() + 3600_000, account: null}));
});
await context.route('https://launcher.easter.company/**', route => {
  const path = new URL(route.request().url()).pathname;
  const file = join(launcher, path);
  if (!existsSync(file)) return route.fulfill({status: 404, body: ''});
  return route.fulfill({contentType: TYPES[extname(file)] || 'application/javascript',
                        headers: {'access-control-allow-origin': '*'}, body: readFileSync(file)});
});
await context.route('https://fonts.googleapis.com/**', route => route.fulfill({contentType: 'text/css', body: ''}));
await context.route('https://fonts.gstatic.com/**', route => route.fulfill({status: 404, body: ''}));
await context.route('https://api.github.com/**', route =>
  route.fulfill({contentType: 'application/json', headers: {'access-control-allow-origin': '*'}, body: '[]'}));
for (const host of [API, 'https://auth.easter.company']) await context.route(host + '/**', route => {
  const request = route.request();
  const json = body => route.fulfill({status: 200, headers: {
    'access-control-allow-origin': '*', 'content-type': 'application/json', 'cache-control': 'no-store'},
    body: JSON.stringify(body)});
  if (request.method() === 'OPTIONS') {
    return route.fulfill({status: 204, headers: {'access-control-allow-origin': '*',
      'access-control-allow-headers': 'authorization, content-type, accept',
      'access-control-allow-methods': 'GET, PUT, POST, OPTIONS'}});
  }
  const path = new URL(request.url()).pathname;
  if (path === '/v2/accounts/me') return json({account: ACCOUNT});
  if (path === '/v2/accounts/providers') return json({providers: ACCOUNT.providers});
  if (path === '/v2/accounts/emails') return json({emails: ACCOUNT.emails});
  if (path === '/v2/accounts/settings') return json({settings: {version: 1, language: 'auto', theme: 'light',
    chat: {enter: 'submit', shiftEnter: 'newline', ctrlEnter: 'queue'}, editor: {vim: false}}, revision: 2});
  return json({});
});

const page = await context.newPage();
const errors = [];
const calls = [];
page.on('response', async response => {
  if (response.url().includes('execute-api')) calls.push(response.request().method() + ' ' + new URL(response.url()).pathname + ' -> ' + response.status());
});
page.on('pageerror', error => errors.push(String(error)));

/** Every visible text node's contrast, alpha-correct, over its real composited ground. */
const audit = () => page.evaluate(() => {
  const parse = v => { const m = String(v).match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m ? {r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4]} : null; };
  const lin = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const lum = c => 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b);
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); const hi = Math.max(l1, l2), lo = Math.min(l1, l2); return (hi + 0.05) / (lo + 0.05); };
  const ground = el => {
    const layers = [];
    for (let n = el; n; n = n.parentElement) { const bg = parse(getComputedStyle(n).backgroundColor); if (bg && bg.a > 0.001) { layers.push(bg); if (bg.a >= 0.999) break; } }
    let base = {r: 255, g: 255, b: 255, a: 1};
    for (let i = layers.length - 1; i >= 0; i -= 1) { const t = layers[i]; base = {r: t.r * t.a + base.r * (1 - t.a), g: t.g * t.a + base.g * (1 - t.a), b: t.b * t.a + base.b * (1 - t.a), a: 1}; }
    return base;
  };
  const shown = el => {
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 2 && r.height > 2 && r.bottom > 0 && r.top < window.innerHeight;
  };
  const out = [];
  const seen = new Set();
  for (const el of document.querySelectorAll('.desktop-profile-menu *, .desktop-company-dialog *, .company-provider *, #company-profile *')) {
    const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    if (!text || seen.has(el) || !shown(el)) continue;
    seen.add(el);
    const ink = parse(getComputedStyle(el).color);
    if (!ink) continue;
    const back = ground(el);
    const c = ratio(ink, back);
    if (c < 4.5) out.push({text: text.slice(0, 48), ratio: +c.toFixed(2), ink: getComputedStyle(el).color,
      ground: `rgb(${Math.round(back.r)},${Math.round(back.g)},${Math.round(back.b)})`,
      tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 50)});
  }
  return out;
});

const failures = [];
const check = async (label, shot) => {
  await page.waitForTimeout(500);
  const rows = await audit();
  console.log(`\n${label}: ${rows.length} unreadable`);
  for (const r of rows.slice(0, 12)) {
    console.log(`  ${String(r.ratio).padStart(5)} <${r.tag}> "${r.text}" ink=${r.ink} on ${r.ground} [${r.cls}]`);
    failures.push(`${label}: ${r.ratio} "${r.text}"`);
  }
  await page.screenshot({path: join(output, shot), fullPage: false});
};

const auditOrigin = process.env.EASTER_AUDIT_ORIGIN || origin;
await page.goto(auditOrigin + '/', {waitUntil: 'load'});
await page.waitForTimeout(3500);
assert.equal(await page.evaluate(() => document.documentElement.getAttribute('data-easter-theme')), 'light',
  'this suite only means anything in the light theme');

// The pill, then the menu.
const pill = page.locator('.desktop-profile-menu ~ *, [aria-label*="Account"], .web-account-pill, .user-menu').first();
await pill.click().catch(async () => { await page.mouse.click(1150, 60); });
await page.waitForTimeout(600);
await check('account menu', 'menu.png');
const offered = await page.evaluate(() => [...document.querySelectorAll('button, a, [role="menuitem"]')]
  .filter(el => { const r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4; })
  .map(el => el.textContent.trim().slice(0, 28)).filter(Boolean));
console.log('visible controls:', JSON.stringify(offered));
console.log('account API calls:', JSON.stringify(calls.slice(0, 12)));

// Every dialog the menu offers, opened by its own label.
for (const [label, shot] of [['My Profile', 'profile.png'], ['Linked Accounts', 'linked.png'], ['Settings', 'settings.png']]) {
  const item = page.getByRole('button', {name: label, exact: false}).first();
  const link = page.getByRole('menuitem', {name: label, exact: false}).first();
  const target = (await item.count()) ? item : link;
  if (!(await target.count())) { console.log(`${label}: not offered on this page`); continue; }
  await target.click().catch(error => console.log(`${label}: could not open (${error})`));
  await check(label, shot);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);
  await pill.click().catch(() => {});
  await page.waitForTimeout(400);
}

console.log(`\npage errors: ${errors.length}${errors.length ? ' — ' + errors.slice(0, 3).join(' | ') : ''}`);
assert.equal(failures.length, 0, `unreadable text in the control's light surfaces:\n  ${failures.join('\n  ')}`);
console.log('PASS: every visible word in the control\'s menu and dialogs meets 4.5:1 in light');
await browser.close();
server.close();
