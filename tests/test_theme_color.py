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


def test_the_light_hero_lets_the_animation_show_and_protects_the_words_locally():
    """Owen, 2026-10-31: "the hero background animation is barely visible".

    A 96-100% light veil (Diana's suggestion, applied 2026-10-31) erased the animation entirely.
    The light stops are the original 90/72/80 again, and the ghost text she objected to is
    handled where it actually matters - behind the two reading columns - by a scrim on each
    column. Dark stops are the shipped design and do not move.
    """
    theme = (SITE / "page-theme.css").read_text()
    light = theme.split('html[data-easter-theme="light"]', 1)[1]
    assert "--veil-90:#eef2f94d;--veil-72:#eef2f942;--veil-80:#eef2f947;" in light, (
        "the light veil must let the hero animation show through (30%, not 90%)")
    for ghostkiller in ("--veil-72:#eef2f9f5;", "--veil-90:#eef2f9;--veil-72:#eef2f9b8;"):
        assert ghostkiller not in light, f"a veil that erases the animation came back: {ghostkiller}"
    # The local protection, on the two columns that carry words over the hero.
    assert 'html[data-easter-theme="light"] .intro::before{' in theme, "the reading field behind the hero columns is missing"
    assert "position:absolute;inset:-38px -40px;z-index:-1" in theme, (
        "the scrim must be a painted layer, not padding: padding or negative margins move the columns")
    # Dark is the shipped design and does not move.
    assert "--veil-90:#111317e6;--veil-72:#111317b8;--veil-80:#111317cc;" in theme
    assert "linear-gradient(180deg,var(--veil-90) 0%,var(--veil-72) 30%,var(--veil-80) 68%,var(--bg) 100%)" in theme
