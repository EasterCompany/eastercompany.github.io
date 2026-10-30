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
