"""The wordmark's mark exists in two colours and only those two things differ.

`assets/ec-logo-outline.svg` is white, for the dark page. On the light page white measures
1.12:1 against `#eef2f9` — a mark nobody can find — so `assets/ec-logo-outline-light.svg` is
the same geometry in the page's ink (`#2b2b36`, 12.46:1 there). The markup carries both and
`styles.css` shows exactly one, which means the swap costs no JavaScript and no CSS filter:
a filter would recolour the fire phoenix along with it.

This gate exists because two copies of a drawing drift. The only permitted differences are
the fill attribute and the explanatory comment this repository added to the light cut; every
path, transform and coordinate must be identical, and each file must declare exactly one fill.
"""
import re
import xml.etree.ElementTree as ElementTree
from pathlib import Path

import pytest

SITE = Path(__file__).resolve().parents[1] / "site"
WHITE = SITE / "assets" / "ec-logo-outline.svg"
INK = SITE / "assets" / "ec-logo-outline-light.svg"
STYLES = SITE / "styles.css"
INDEX = SITE / "index.html"


def geometry(path):
    """Every drawing element, as tag + attributes, with the fill stripped out."""
    root = ElementTree.parse(path).getroot()
    shapes = []
    for element in root.iter():
        tag = element.tag.split("}")[-1]
        if tag in {"svg", "defs", "metadata", "title", "desc"}:
            continue
        attributes = {key: value for key, value in element.attrib.items() if key != "fill"}
        shapes.append((tag, tuple(sorted(attributes.items()))))
    return shapes


def test_the_two_marks_are_the_same_drawing():
    white, ink = geometry(WHITE), geometry(INK)
    assert white, "the white mark carries no drawing elements"
    assert ink == white, "the light mark's geometry has drifted from the white one"


def test_each_mark_declares_exactly_one_fill_and_they_differ():
    fills = {}
    for path in (WHITE, INK):
        found = set(re.findall(r'fill="([^"]+)"', path.read_text(encoding="utf-8")))
        assert len(found) == 1, f"{path.name} declares {sorted(found)}, expected one fill"
        fills[path.name] = found.pop()
    assert fills[WHITE.name] == "#ffffff", "the dark page's mark is white"
    assert fills[INK.name] != "#ffffff", "the light page's mark must not be white"


def test_the_page_carries_both_and_shows_one_by_theme():
    markup = INDEX.read_text(encoding="utf-8")
    assert markup.count('class="mark-for-dark"') == 1
    assert markup.count('class="mark-for-light"') == 1
    css = STYLES.read_text(encoding="utf-8")
    # Hidden by default, shown under the light attribute, and the white one hidden there.
    assert re.search(r"\.mark-for-light\s*\{[^}]*display:\s*none", css), "the light mark must be hidden by default"
    assert re.search(r'html\[data-easter-theme="light"\]\s+\.mark-for-dark\s*\{[^}]*display:\s*none', css), (
        "the white mark must be hidden on the light page")
    assert re.search(r'html\[data-easter-theme="light"\]\s+\.mark-for-light\s*\{[^}]*display:', css), (
        "the ink mark must be shown on the light page")


def test_the_swap_needs_no_script():
    """A filter or a script would be a second way to recolour the mark; the gate refuses both."""
    css = STYLES.read_text(encoding="utf-8")
    block = css[css.index(".mark-for-light"):]
    assert "filter" not in block.split("/*")[0], "the swap must not use a CSS filter"
    assert "ec-logo-outline-light" in INDEX.read_text(encoding="utf-8")
