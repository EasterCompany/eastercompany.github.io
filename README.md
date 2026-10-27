# Easter Company corporate website

A buildless corporate homepage draft for Easter Company, a trading name of Easter LTD.

The brief covers Engineering, Entertainment, Education and Enterprise, with primary
focus areas of Productivity, Management, AI and Gaming. The page reuses the established
company phoenix and navy/gold palette from the Easter Co. SMP site, with a quieter
corporate presentation. It features the real SMP project and the operator links supplied
by Owen; it invents no customers, case studies, metrics, contact addresses or product launches.

Preview from this directory: `python -m http.server --directory site 8080`, then open http://localhost:8080.
There is no dependency installation or build step. `site.js` implements keyboard-accessible
focus tabs; navigation and content links are native anchors. No analytics or forms are added.
The draft includes `noindex,nofollow`; remove that only when approved for launch.

Assets preserve the existing company logo geometry and the supplied project artwork.
`assets/ec-logo.svg` and `assets/favicon.png` come from the shared SMP site. The SMP
illustration is the existing generated promotional ship artwork, not a game screenshot.
No new raster art is needed for the corporate page's native HTML/CSS/SVG presentation.

Checks: `python scripts/validate.py` and `node --check site/site.js`.
The Pages workflow is manual-only and deploys `Prd`; this draft PR does not deploy.
Custom-domain configuration is done in repository Pages settings and DNS, not by masked
forwarding. No domain or hosting settings are changed by this draft.

Validation completed: all internal links, local assets and four focus-panel relationships
passed the repository check. JavaScript syntax passed. Browser QA covered desktop,
320px and 390px layouts, pointer and arrow-key tab switching, section navigation,
full artwork framing, and zero document horizontal overflow.

The package includes a self-contained `preview.html` for opening without a server.
The editable source remains in `site/`. This is a visual/content draft, not a public launch.
