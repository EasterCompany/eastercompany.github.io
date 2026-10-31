# Easter Company / e-server

Buildless product site, served from site/. No dependency installation required.
Serve locally with `python3 -m http.server --directory site 8080`.

The page introduces e-server,
explains the four agents and uses accessible tabs for security, network privacy
and event monitoring. The first screen is the supplied hero loop (site/assets/hero-loop.html)
behind the hero; the owner photos are preserved.

The hero loop is COPIED, not authored here: e-server owns the animation and its theme
contract (e-server/infra/web-app/hero-loop.html, whose header documents it), and this
repository publishes the same bytes. site/account-corporate.mjs hands it the account's
saved Theme setting through that contract, and e-server's tests/test_hero_theme.py is the
`cmp` gate that fails when the two copies drift. The interactive agent-harness preview that
used to sit under the hero was removed on 2026-10-27 (docs/agent-product-preview.md).

Beta requests are email-based. The form validates company, work email and use case,
shows a text-only review and creates an encoded mailto link to the company's
published contact@easter.company address. The visitor must open their email app
and send the request. There is no backend submission or automatic provisioning.
A direct email link and no-JavaScript fallback are included.

Validation: python3 scripts/validate.py; node --check site/site.js.
Browser checks cover desktop, 320px/390px layouts, keyboard tab navigation,
review/edit and correct encoding of ampersands and line breaks in the email draft.
No emails were sent during testing.

Published to GitHub Pages by the manual pages.yml workflow from Prd. The public
review URL is https://eastercompany.github.io/. The previous custom-domain setting
was cleared because easter.company resolves to parking; DNS was not changed.
Noindex/nofollow is retained during review. Remove it for the confirmed launch.

No fabricated benchmarks, price comparisons or blanket security guarantees appear
on the page. Product specification and offer-term checks remain in docs.

The palette is the household's, not this page's. `site/theme.css` is EASTER
HOUSEHOLD THEME v1.1, VENDORED BYTE FOR BYTE from launcher.easter.company's
`site/theme.css` (commit 9c0cc23) and linked FIRST in every page's head: dark is
the launcher's maritime teal ground with a gold accent, light is paper with this
site's own violet-indigo `#6d4fd8`. `site/page-theme.css` is the ADAPTER - it
binds this page's older names (`--bg`, `--eyebrow`, `--button`, `--veil-90`...) to
`--ec-*` tokens and carries the page's own veil, scrim and artwork-caption
decisions, and it may never hold a colour of its own. `site/account/account-corporate.css`
teaches the borrowed account card the same light mood, because that sheet's own
tokens are dark literals. Never edit `site/theme.css` in this repository: re-vendor
it. `tests/test_household_theme.py` gates the bytes (a sha256 pin plus a byte
comparison against the launcher checkout when it is present), the link order, the
absence of the retired `#c9b1ff` lilac family, and the accent's measured contrast
in both moods (>= 4.5:1 for text, >= 3:1 for an edge).
