from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set(); self.links=[]; self.assets=[]; self.tabs=[]; self.panels=set()
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f'Duplicate ID: {a["id"]}'
            self.ids.add(a['id'])
        if tag=='a':self.links.append(a.get('href',''))
        if tag in ('img','script') and 'src' in a:self.assets.append(a['src'])
        if tag=='link' and a.get('rel') in ('stylesheet','icon'):self.assets.append(a['href'])
        if a.get('role')=='tab':self.tabs.append(a)
        if a.get('role')=='tabpanel':self.panels.add(a['id'])
p=Page();p.feed(Path('site/index.html').read_text())
for link in p.links:
    assert link, 'Empty link'
    if link.startswith('#'):assert link[1:] in p.ids, f'Missing anchor: {link}'
for asset in p.assets:
    if not urlsplit(asset).scheme:assert (Path('site') / asset).is_file(), f'Missing asset: {asset}'
assert {'beta-form','application-review','application-summary','signup','work-email'} <= p.ids
# THE TAB RULE ONLY APPLIES WHEN THE PAGE HAS TABS, and this assertion used to say so by
# assuming it always would: the What's in your e-server section was the page's only tab strip,
# and when it was removed (Owen, 2026-11-08) this line failed the deploy on a page that had
# nothing wrong with it. A validator that hard-codes a section is a second author of that
# section, so the rule is written as the thing it means: if there are tabs, exactly one is
# selected.
if p.tabs:
    for tab in p.tabs:
        assert tab.get('aria-controls') in p.panels, 'Missing tab panel'
        assert tab.get('aria-selected') in ('true','false'), 'Missing tab state'
    assert sum(t['aria-selected']=='true' for t in p.tabs)==1, 'More than one tab is selected'
# MICROSOFT'S PUBLISHER-DOMAIN PROOF. Azure fetches this exact path and compares the one
# applicationId, so a renamed file, a moved directory or a typo'd id is the whole
# verification failing - silently, with the refusal happening in a portal rather than here.
import json
association = Path('site/.well-known/microsoft-identity-association.json')
assert association.is_file(), 'Missing site/.well-known/microsoft-identity-association.json'
document = json.loads(association.read_text())
assert list(document) == ['associatedApplications'], document.keys()
assert document['associatedApplications'] == [
    {'applicationId': 'c3fc8a5e-4540-4691-aecc-14ebbb17b94e'}], document['associatedApplications']

print(f'Validated {len(p.links)} links, {len(p.assets)} asset references and beta signup anchors.')
print('Validated the Microsoft publisher-domain association for application c3fc8a5e.')

# SEARCH INDEXING IS A PROPERTY OF THE PAGE, NOT A SEARCH CONSOLE SETTING.
# Owen, 2026-11-17: Search Console reported all three address variants as "Excluded by
# noindex tag". The review noindex is gone; the homepage is the one indexable page, the
# account page stays out, and robots/sitemap/canonical agree on the origin.
home = Path('site/index.html').read_text()
assert 'name="robots" content="noindex' not in home, 'the homepage is no longer under review'
assert 'rel="canonical" href="https://easter.company/"' in home, 'the homepage needs its canonical origin'
assert 'property="og:url" content="https://easter.company/"' in home, 'og:url must match canonical'
account = Path('site/account/index.html').read_text()
assert 'name="robots" content="noindex' in account, 'the account page must not be indexed'
robots = Path('site/robots.txt')
assert robots.is_file(), 'robots.txt is missing'
robots_text = robots.read_text()
assert 'Sitemap: https://easter.company/sitemap.xml' in robots_text
assert 'Disallow: /account/' in robots_text
sitemap = Path('site/sitemap.xml')
assert sitemap.is_file(), 'sitemap.xml is missing'
assert '<loc>https://easter.company/</loc>' in sitemap.read_text()
print('Validated indexability: homepage canonical, account noindex, robots and sitemap.')
not_found = Path('site/404.html')
assert not_found.is_file(), 'a custom 404 page is missing'
assert 'name="robots" content="noindex' in not_found.read_text(), 'the 404 page must not be indexed'
print('Validated the custom 404 page is noindex.')
login = Path('site/login/index.html')
assert login.is_file(), 'the retired /login URL must keep a redirect page'
login_text = login.read_text()
assert 'http-equiv="refresh" content="0; url=/account/"' in login_text
assert 'rel="canonical" href="https://easter.company/account/"' in login_text
assert 'name="robots" content="noindex' in login_text
print('Validated /login redirects to the noindex account page.')
