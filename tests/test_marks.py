"""The wordmark's mark is one asset, in both themes, and nothing recolours it.

Owen, 2026-10-31: "the Easter Co. phoenix icon is black in light mode, but it should not be,
it's a complex detailed fire-y phoenix icon, should not be impacted by the theme at all."

`assets/ec-logo.svg` is that icon: the 60 KB fire phoenix, gradient-filled with `url(#ecEmber)`
and `url(#ecFire)`. Until now the header never showed it. The markup carried two 5 KB flat
silhouettes — `assets/ec-logo-outline.svg` in white for the dark page and
`assets/ec-logo-outline-light.svg` in `#2b2b36` for the light one — and `styles.css` swapped
them by the theme attribute, which is why the light page wore a flat near-black shape.

This gate holds the replacement in place by name and by file: the header carries
`assets/ec-logo.svg` exactly once, no stylesheet applies a filter, an opacity or a colour to a
logo mark, no page swaps one mark asset for another by theme, and the flattenings are gone
from the repository rather than merely unused.
"""
import re
from pathlib import Path

SITE = Path(__file__).resolve().parents[1] / "site"
INDEX = SITE / "index.html"
STYLES = SITE / "styles.css"

#: The one mark, and the flattenings it replaced.
MARK = "assets/ec-logo.svg"
FLATTENINGS = ("ec-logo-outline.svg", "ec-logo-outline-light.svg")

#: Every class name that addresses a logo mark. A rule matching one of these may size the
#: artwork; it may not recolour it.
MARK_CLASSES = (".wordmark-mark", ".mark-for-dark", ".mark-for-light")

#: Class names that existed only to swap one asset for another by theme.
SWAP_CLASSES = ("mark-for-dark", "mark-for-light")

#: The declarations a mark rule may never carry: each one changes the artwork's own colour.
RECOLOURING = ("filter", "opacity", "color", "fill", "background", "mix-blend-mode",
               "-webkit-filter")


def _css_rules(path):
    """(selector list, declarations) for every rule, with comments stripped."""
    body = re.sub(r"/\*.*?\*/", "", path.read_text(encoding="utf-8"), flags=re.S)
    return re.findall(r"([^{}]+)\{([^{}]*)\}", body)


def test_the_header_carries_the_artwork_exactly_once():
    markup = INDEX.read_text(encoding="utf-8")
    header = markup.split("<header", 1)[1].split("</header>", 1)[0]
    assert header.count(MARK) == 1, (
        f"the header carries {header.count(MARK)} marks from {MARK}, expected exactly one")
    assert '<img class="wordmark-mark" src="assets/ec-logo.svg"' in header, (
        "the header mark is no longer the artwork, or lost its class")
    # One mark, not one per theme: no page swaps a mark asset by the theme attribute.
    for swap in SWAP_CLASSES:
        assert swap not in markup, f"index.html still carries the {swap!r} theme swap"
    for flattening in FLATTENINGS:
        assert flattening not in markup, f"index.html still references {flattening}"


def test_no_stylesheet_recolours_the_mark_or_swaps_it_by_theme():
    """styles.css is where the swap lived, so it is asserted first and by name."""
    css = STYLES.read_text(encoding="utf-8")
    for swap in SWAP_CLASSES:
        assert swap not in css, f"styles.css still carries the {swap!r} swap rule"
    # And no sheet in site/ filters, fades or paints any logo mark.
    sheets = sorted(SITE.glob("*.css"))
    assert len(sheets) >= 6, f"expected the page's stylesheets, found {[s.name for s in sheets]}"
    for sheet in sheets:
        for selector_list, declarations in _css_rules(sheet):
            for selector in selector_list.split(","):
                if not any(mark_class in selector for mark_class in MARK_CLASSES):
                    continue
                for declaration in declarations.split(";"):
                    name = declaration.partition(":")[0].strip()
                    assert name not in RECOLOURING, (
                        f"{sheet.name}: {selector.strip()!r} recolours the mark: "
                        f"{declaration.strip()!r}")


def test_the_flattenings_are_deleted_not_merely_unused():
    remaining = [name for name in FLATTENINGS if (SITE / "assets" / name).exists()]
    assert not remaining, f"the flattened cuts survive in site/assets: {remaining}"
    # The artwork they were standing in for is still here, still the gradient phoenix.
    artwork = (SITE / "assets" / "ec-logo.svg").read_text(encoding="utf-8")
    assert "url(#ecEmber)" in artwork and "url(#ecFire)" in artwork, (
        "assets/ec-logo.svg is no longer the gradient-filled phoenix")
    assert 'fill="#ffffff"' not in artwork and 'fill="#2b2b36"' not in artwork, (
        "assets/ec-logo.svg has been flattened to a single colour")
