"""The browser's own chrome must wear the page's colour, in both themes.

<meta name="theme-color"> paints the address bar on a phone and the window edge in some
desktops. It is a literal, so it cannot follow the theme unless it is keyed to the scheme,
and one hardcoded value is what left a light page with a near-black strip above it (Diana's
review, 2026-10-30: "for mobile browser chrome, update meta[name=theme-color] with the
resolved --bg as well; the source still hardcodes #111317").

Since 2026-10-31 the page's ground is not its own: both moods come from the household theme
(site/theme.css), which is linked first in every page's head, and site/page-theme.css binds the
page's --bg to --ec-bg. So this gate reads the ground where it is now declared - the vendored
theme - and still holds the pages' literals to it.

This gate reads the real pages and the real stylesheets, so a palette change that moves --bg
moves these literals with it or fails here.
"""
import re
from pathlib import Path

SITE = Path(__file__).resolve().parents[1] / "site"
PAGES = ("index.html", "account/index.html")
THEME = SITE / "theme.css"


def _bg():
    """(dark --bg, light --bg) as the household theme declares them."""
    css = THEME.read_text(encoding="utf-8")
    dark = re.search(r"--ec-bg:(#[0-9a-fA-F]{6})", css)
    light = re.search(r'html\[data-easter-theme="light"\][^}]*--ec-bg:(#[0-9a-fA-F]{6})', css, re.S)
    assert dark and light, "the household theme's --ec-bg is not declared where this gate reads it"
    return dark.group(1).lower(), light.group(1).lower()


def test_every_page_keys_the_browser_chrome_to_both_schemes():
    dark, light = _bg()
    for page in PAGES:
        text = (SITE / page).read_text()
        found = re.findall(r'<meta name="theme-color" content="(#[0-9a-fA-F]{6})" media="\(prefers-color-scheme:(dark|light)\)">', text)
        assert sorted(scheme for _, scheme in found) == ["dark", "light"], f"{page} must key theme-color to both schemes, found {found}"
        values = {scheme: colour.lower() for colour, scheme in found}
        assert values["dark"] == dark, f"{page}'s dark chrome {values['dark']} is not the theme's dark --ec-bg {dark}"
        assert values["light"] == light, f"{page}'s light chrome {values['light']} is not the theme's light --ec-bg {light}"


def test_the_light_hero_lets_the_animation_show_and_protects_the_words_locally():
    """Owen, 2026-10-31: "the hero background animation is barely visible".

    A 96-100% light veil (Diana's suggestion, applied 2026-10-31) erased the animation entirely.
    The light stops are the original 90/72/80 again, and the ghost text she objected to is
    handled where it actually matters - behind the two reading columns - by a scrim on each
    column. Dark stops are the shipped design and do not move.

    The light stops are expressed as 30/26/28% of the page ground (--bg, which IS the household
    theme's --ec-bg in light), so they follow a palette change instead of restating it; the
    numbers are still the 30/26/28 the veil was measured at, and each one is checked by value.
    """
    theme = (SITE / "page-theme.css").read_text()
    light = theme.split('html[data-easter-theme="light"]{', 1)[1]
    for stop, percent in (("--veil-90", "30"), ("--veil-72", "26"), ("--veil-80", "28")):
        assert f"{stop}:color-mix(in srgb,var(--bg) {percent}%,transparent)" in light, (
            f"the light {stop} must be {percent}% of the page ground so the hero animation shows through")
    for ghostkiller in ("--veil-72:color-mix(in srgb,var(--bg) 96%,transparent)",
                        "--veil-90:var(--ec-hero-veil-start)"):
        assert ghostkiller not in light, f"a veil that erases the animation came back: {ghostkiller}"
    # The local protection, on the two columns that carry words over the hero.
    assert 'html[data-easter-theme="light"] .intro::before{' in theme, "the reading field behind the hero columns is missing"
    assert "position:absolute;inset:-38px -40px;z-index:-1" in theme, (
        "the scrim must be a painted layer, not padding: padding or negative margins move the columns")
    # Dark is the shipped design and does not move: the theme's own artwork washes, value for value.
    for stop, token in (("--veil-90", "--ec-hero-veil-start"),
                        ("--veil-72", "--ec-hero-veil-middle"),
                        ("--veil-80", "--ec-hero-veil-lower")):
        assert f"{stop}:var({token})" in theme, f"the dark {stop} no longer comes from {token}"
    assert "linear-gradient(180deg,var(--veil-90) 0%,var(--veil-72) 30%,var(--veil-80) 68%,var(--bg) 100%)" in (
        (SITE / "styles.css").read_text()), "the veil's gradient is no longer the page's own stops"
