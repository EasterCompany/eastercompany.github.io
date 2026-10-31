"""The corporate site consumes the household theme; it does not own a second palette.

Owen, 2026-10-31, the global rule: "Light mode: Light + Blue Accent (light the corporate theme).
Dark mode: Dark + Gold Accents beautiful style (exactly the same as the current launcher dark mode
theme)" - and, told that he is colour blind, the light accent is this site's own light violet-indigo
`#6d4fd8`.

So the launcher's repository is the single source: `site/theme.css` (EASTER HOUSEHOLD THEME v1.1,
commit 9c0cc23) declares `--ec-*` and two moods - the launcher's maritime teal ground with a gold
accent in `:root`, and paper with this site's violet under `html[data-easter-theme="light"]`.
easter.company vendors those bytes and links them first; `site/page-theme.css` is the ADAPTER that
binds this page's older names (--bg, --eyebrow, --button...) to the tokens and carries the page's
own layout decisions. It may not hold a colour of its own.

These gates are the ones a drift would touch:

  * the vendored file's bytes (a pin, plus a byte comparison when the launcher checkout is here);
  * the link order in every page's head;
  * the adapter has no palette, and the retired lilac family is gone from the page;
  * the accent's measured contrast, computed from the shipped bytes, in both moods.
"""
import hashlib
import os
import re
from pathlib import Path

SITE = Path(__file__).resolve().parents[1] / "site"
THEME = SITE / "theme.css"
ADAPTER = SITE / "page-theme.css"
PAGES = ("index.html", "account/index.html")

#: The bytes this repository consumes, pinned. Taken from launcher.easter.company's repository
#: (/root/easter-co-smp.github.io/site/theme.css at commit 9c0cc23): the comment block and the
#: token values are the household's, so this copy is the same file rather than a similar one.
THEME_SHA256 = "84a0a5d67f41034e03c6445ec8927f3f54503ee040667bbf466633eb25167f79"

#: Where the owner of those bytes keeps them on this machine. CI has no such checkout, so the pin
#: above is the gate there; here the gate is the byte comparison, which names the drift.
THEME_UPSTREAM = Path(os.environ.get("EASTER_THEME_UPSTREAM",
                                     "/root/easter-co-smp.github.io/site/theme.css"))

#: The dark accent this ticket retires. The lilac family that painted it is listed with it, so
#: restoring any part of the old palette fails here by name rather than by eye.
RETIRED = {
    "#c9b1ff": "the retired lilac dark accent",
    "#d4c2fa": "the lilac button fill",
    "#e2d4fd": "the lilac button hover",
    "#dfd2fa": "the lilac button label",
    "#bba7dc": "the lilac eyebrow",
    "#b497e5": "the lilac tab underline",
    "#e3d6fc": "the lilac tab label",
    "#bc9aef": "the lilac check mark",
    "#c6aaf4": "the lilac status dot",
    "#9466df": "the lilac selection",
    "#17131f": "the old ink on the lilac skip link",
    "#21182f": "the old ink on the lilac button",
}

#: The page's own sheets, and nothing else. `theme.css` is vendored and owns the tokens (its light
#: --ec-selection is #9466df33 by the household's choice); `eserver-downloads.css` is e-server's
#: widget vendored verbatim, whose own drift gate lives in that repository.
PAGE_SHEETS = ("styles.css", "page-theme.css", "client-download-theme.css",
               "account-host-tokens.css", "account-control.css", "components.css")

#: The one colour literal the adapter may hold: the caption on the framed artwork, whose ground
#: stays dark in both moods because the theme does not own artwork palettes.
ARTWORK_CAPTION = "#c3cedd"


def _block(css, selector):
    """The declarations of the one rule whose selector is `selector`."""
    start = css.index(selector + "{") + len(selector) + 1
    return css[start:css.index("}", start)]


def _tokens(body):
    """name -> value for every custom property in a declaration block."""
    return {name: value.strip()
            for name, value in re.findall(r"(--[\w-]+)\s*:\s*([^;]+);", body)}


def theme_tokens():
    """(dark, light) as `site/theme.css` declares them."""
    css = THEME.read_text(encoding="utf-8")
    return _tokens(_block(css, ":root")), _tokens(_block(css, 'html[data-easter-theme="light"]'))


def adapter_tokens():
    """name -> value for every custom property `site/page-theme.css` binds."""
    return _tokens(_block(ADAPTER.read_text(encoding="utf-8"), ":root"))


def _rgb(value):
    value = value.strip().lower()
    assert re.fullmatch(r"#[0-9a-f]{6}", value), f"not a plain 6-digit colour: {value!r}"
    return tuple(int(value[i:i + 2], 16) for i in (1, 3, 5))


def _luminance(value):
    """WCAG relative luminance of a #rrggbb colour."""
    def channel(byte):
        srgb = byte / 255
        return srgb / 12.92 if srgb <= 0.04045 else ((srgb + 0.055) / 1.055) ** 2.4
    red, green, blue = (channel(byte) for byte in _rgb(value))
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue


def contrast(foreground, background):
    """The ratio a reader's eye gets between two #rrggbb colours."""
    a, b = _luminance(foreground), _luminance(background)
    return (max(a, b) + 0.05) / (min(a, b) + 0.05)


# ---------------------------------------------------------------------------------------------
# 1. THE VENDORED BYTES
# ---------------------------------------------------------------------------------------------

def test_the_vendored_theme_is_the_households_file_byte_for_byte():
    shipped = THEME.read_bytes()
    digest = hashlib.sha256(shipped).hexdigest()
    assert digest == THEME_SHA256, (
        f"{THEME.name} has drifted from the household theme: sha256 {digest}, expected "
        f"{THEME_SHA256}. Re-vendor launcher.easter.company's site/theme.css rather than editing "
        f"this copy.")
    if THEME_UPSTREAM.is_file():
        assert shipped == THEME_UPSTREAM.read_bytes(), (
            f"{THEME} is not byte for byte {THEME_UPSTREAM}; every difference belongs in the "
            f"adapter (site/page-theme.css), never in the owner's file")


def test_the_theme_declares_the_one_rule_in_both_moods():
    dark, light = theme_tokens()
    # Dark is the launcher's palette, value for value.
    assert dark["--ec-bg"] == "#0d2029" and dark["--ec-accent"] == "#dbba79", dark
    assert dark["--ec-accent-action"] == "#e4c486" and dark["--ec-on-accent"] == "#14262e", dark
    # Light is paper with the corporate light accent this site already owned.
    assert light["--ec-bg"] == "#eef2f9" and light["--ec-accent"] == "#6d4fd8", light
    assert light["--ec-accent-action"] == "#6d4fd8" and light["--ec-on-accent"] == "#ffffff", light


# ---------------------------------------------------------------------------------------------
# 2. EVERY HEAD LINKS IT FIRST
# ---------------------------------------------------------------------------------------------

def test_every_page_links_the_household_theme_first():
    for page in PAGES:
        markup = (SITE / page).read_text(encoding="utf-8")
        head = markup.split("<head", 1)[1].split("</head>", 1)[0]
        links = re.findall(r'<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"', head)
        assert links, f"{page} links no stylesheet"
        assert SITE.joinpath(Path(page).parent, links[0]).resolve() == THEME.resolve(), (
            f"{page} must link the household theme first, its first stylesheet is {links[0]!r}")
        assert sum(1 for href in links if Path(href).name == "theme.css") == 1, (
            f"{page} links theme.css more than once")


# ---------------------------------------------------------------------------------------------
# 3. THE ADAPTER BINDS NAMES; THE RETIRED PALETTE IS GONE
# ---------------------------------------------------------------------------------------------

def test_the_adapter_is_a_binding_and_never_a_palette():
    css = re.sub(r"/\*.*?\*/", "", ADAPTER.read_text(encoding="utf-8"), flags=re.S)
    literals = {value.lower() for value in re.findall(r"#[0-9a-fA-F]{3,8}", css)}
    assert literals <= {ARTWORK_CAPTION}, (
        f"site/page-theme.css holds colours of its own: {sorted(literals - {ARTWORK_CAPTION})}. "
        f"The only permitted literal is the artwork caption {ARTWORK_CAPTION}.")
    assert not re.search(r"\b(?:rgb|rgba|hsl|hsla)\(", css), (
        "site/page-theme.css paints with a colour function instead of a token")
    bindings = adapter_tokens()
    assert len(bindings) >= 30, f"the adapter binds only {len(bindings)} names"
    for name, value in bindings.items():
        assert re.search(r"var\(--ec-[\w-]+", value) or re.search(r"var\(--(?:bg|accent)\)", value), (
            f"{name} is bound to {value!r}, which is not a household token")


def test_the_retired_lilac_is_gone_from_the_page():
    offenders = []
    for sheet in PAGE_SHEETS:
        text = (SITE / sheet).read_text(encoding="utf-8").lower()
        for colour, what in RETIRED.items():
            if colour in text:
                offenders.append(f"{sheet}: {colour} ({what})")
    for page in PAGES:
        text = (SITE / page).read_text(encoding="utf-8").lower()
        for colour, what in RETIRED.items():
            if colour in text:
                offenders.append(f"{page}: {colour} ({what})")
    assert not offenders, "the retired lilac palette came back: " + "; ".join(offenders)


# ---------------------------------------------------------------------------------------------
# 4. THE ACCENT'S MEASURED CONTRAST, FROM THE SHIPPED BYTES
# ---------------------------------------------------------------------------------------------

def _painted(mode, name):
    """The hex a reader's eye actually receives for one adapter name in one mood."""
    dark, light = theme_tokens()
    value = adapter_tokens()[name]
    token = re.fullmatch(r"var\((--ec-[\w-]+)\)", value.strip())
    assert token, f"{name} is {value!r}, which this gate cannot resolve to a shipped colour"
    tokens = light if mode == "light" else dark
    resolved = tokens.get(token.group(1), dark.get(token.group(1)))
    assert resolved, f"{token.group(1)} is declared in neither mood"
    return resolved

#: The pairs the adapter paints with the accent, and the floor each one has to clear: a label on
#: the action it sits in, accent text on the page ground and on a panel (text, 4.5:1), and the
#: accent as a mark against the ground (an edge, 3:1).
PAIRS = (
    ("label on the action", "--button-ink", "--button", 4.5),
    ("accent text on the page ground", "--accent-text", "--bg", 4.5),
    ("accent text on a panel", "--accent-text", "--surface", 4.5),
    ("accent edge on the page ground", "--accent", "--bg", 3.0),
)


def test_the_accent_clears_its_contrast_floor_in_both_moods():
    """Measured from the shipped bytes: theme.css's tokens through the adapter's own bindings."""
    measured = {}
    for mode in ("dark", "light"):
        for label, ink, ground, floor in PAIRS:
            ratio = contrast(_painted(mode, ink), _painted(mode, ground))
            measured[f"{mode} {label}"] = ratio
            assert ratio >= floor, (
                f"{mode}: {label} is {ratio:.2f}:1 "
                f"({_painted(mode, ink)} on {_painted(mode, ground)}), below the {floor}:1 floor")
    print("accent contrast: " + ", ".join(f"{k} {v:.2f}:1" for k, v in measured.items()))


# ---------------------------------------------------------------------------------------------
# 5. THE BORROWED ACCOUNT CARD LEARNS THE SAME TWO MOODS
# ---------------------------------------------------------------------------------------------

def test_the_borrowed_account_card_is_taught_the_light_mood():
    """site/account/ borrows launcher.easter.company's account.css, which is dark by construction
    (its own five --account-* tokens are literals). Linking the theme on that page is what lets
    the card follow light mode, and this file is the adapter that binds those five names - so a
    page that links the theme but never teaches the card fails here rather than looking half-lit.
    """
    css = (SITE / "account" / "account-corporate.css").read_text(encoding="utf-8")
    for token, bound in (("--account-panel", "--ec-panel"), ("--account-ink", "--ec-ink"),
                         ("--account-muted", "--ec-muted"), ("--account-gold", "--ec-accent"),
                         ("--account-line", "--ec-line")):
        assert f"{token}:var({bound})" in css, f"the borrowed card's {token} is not bound to {bound}"
    assert 'html[data-easter-theme="light"] .company-microsoft' in css, (
        "the light primary control is missing: the borrowed card's cream CTA would paint on paper")
    assert "background:var(--ec-accent-action);color:var(--ec-on-accent)" in css, (
        "the primary control must take the action pair, label included")
