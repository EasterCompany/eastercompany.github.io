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
for tab in p.tabs:
    assert tab.get('aria-controls') in p.panels, 'Missing tab panel'
    assert tab.get('aria-selected') in ('true','false'), 'Missing tab state'
assert sum(t['aria-selected']=='true' for t in p.tabs)==1
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
