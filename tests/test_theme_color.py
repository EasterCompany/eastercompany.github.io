"""The browser's own chrome must wear the page's colour, in both themes.

<meta name="theme-color"> paints the address bar on a phone and the window edge in some
desktops. It is a literal, so it cannot follow the theme unless it is keyed to the scheme,
and one hardcoded value is what left a light page with a near-black strip above it (Diana's
review, 2026-10-30: "for mobile browser chrome, update meta[name=theme-color] with the
resolved --bg as well; the source still hardcodes #111317").

This gate reads the real pages and the real stylesheets, so a palette change that moves --bg
moves these literals with it or fails here.
"""
import re
from pathlib import Path

SITE = Path(__file__).resolve().parents[1] / "site"
PAGES = ("index.html", "account/index.html")


def _bg(directory_dark, directory_light):
    """(dark --bg, light --bg) as the page's own stylesheets declare them."""
    dark = re.search(r"--bg:(#[0-9a-fA-F]{6})", (SITE / directory_dark).read_text())
    light = re.search(r"html\[data-easter-theme=\"light\"\][^}]*--bg:(#[0-9a-fA-F]{6})",
                      (SITE / directory_light).read_text(), re.S)
    assert dark and light, "the page's --bg is not declared where this gate reads it"
    return dark.group(1).lower(), light.group(1).lower()


def test_every_page_keys_the_browser_chrome_to_both_schemes():
    dark, light = _bg("styles.css", "page-theme.css")
    for page in PAGES:
        text = (SITE / page).read_text()
        found = re.findall(r'<meta name="theme-color" content="(#[0-9a-fA-F]{6})" media="\(prefers-color-scheme:(dark|light)\)">', text)
        assert sorted(scheme for _, scheme in found) == ["dark", "light"], f"{page} must key theme-color to both schemes, found {found}"
        values = {scheme: colour.lower() for colour, scheme in found}
        assert values["dark"] == dark, f"{page}'s dark chrome {values['dark']} is not the page's dark --bg {dark}"
        assert values["light"] == light, f"{page}'s light chrome {values['light']} is not the page's light --bg {light}"


def test_the_light_hero_veil_and_offer_rule_are_the_reviewed_values():
    """Diana's verdict of 2026-10-31, as numbers a future edit cannot quietly undo.

    Equal alpha in both modes was not visually equivalent: at 72-90% the hero's own ghost
    words ran behind the reading columns, and the header met the hero in an accidental tonal
    step. The fix is a light veil that is nearly opaque - 100% at the top stop, 96.08% at 30%,
    96.86% at 68% - over #eef2f9, and a strengthened rule on the offer column. The frame's own
    artwork is untouched, and so is every dark stop.
    """
    theme = (SITE / "page-theme.css").read_text()
    light = theme.split('html[data-easter-theme="light"]', 1)[1]
    assert "--veil-90:#eef2f9;" in light, "the light veil's top stop must be fully opaque, so the header meets it with no seam"
    assert "--veil-72:#eef2f9f5;" in light, "the light veil's 30% stop must be #eef2f9f5 (96.08%)"
    assert "--veil-80:#eef2f9f7;" in light, "the light veil's 68% stop must be #eef2f9f7 (96.86%)"
    assert 'html[data-easter-theme="light"] .beta-summary{border-color:#b5c1d4}' in theme
    # Dark is the shipped design and does not move.
    assert "--veil-90:#111317e6;--veil-72:#111317b8;--veil-80:#111317cc;" in theme
    # And the gradient still runs top stop, 30%, 68%, page.
    assert "linear-gradient(180deg,var(--veil-90) 0%,var(--veil-72) 30%,var(--veil-80) 68%,var(--bg) 100%)" in theme
