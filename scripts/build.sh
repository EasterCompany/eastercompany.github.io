#!/bin/bash
set -e

# Define paths
ROOT_DIR=$(dirname "$0")/..
SRC_DIR="$ROOT_DIR/source/dex"
JS_ENTRY_POINT="$SRC_DIR/main.js"
JS_OUTPUT_FILE="$ROOT_DIR/dex.js"

CSS_SRC_DIR="$ROOT_DIR/source/css"
CSS_ENTRY_POINT="$CSS_SRC_DIR/main.css"
CSS_OUTPUT_FILE="$ROOT_DIR/dex.css"

ESBUILD_BIN="$HOME/go/bin/esbuild"

# 1. Bundle, minify, and obfuscate the JavaScript
echo "Bundling JavaScript..."
"$ESBUILD_BIN" "$JS_ENTRY_POINT" --bundle --minify --sourcemap --outfile="$JS_OUTPUT_FILE"

# 2. Bundle and minify the CSS
echo "Bundling CSS..."
"$ESBUILD_BIN" "$CSS_ENTRY_POINT" --bundle --minify --outfile="$CSS_OUTPUT_FILE"

# 3. Inject the script tag and link tag into HTML files
echo "Injecting script and link tags into HTML files..."
SCRIPT_TAG='<script src="/dex.js" defer></script>'
LINK_TAG='<link rel="stylesheet" href="/dex.css">'

for html_file in "$ROOT_DIR"/*.html; do
    if [ -f "$html_file" ]; then
        # Inject CSS link tag if not present
        if ! grep -q "$LINK_TAG" "$html_file"; then
            sed -i "s|</head>|$LINK_TAG</head>|" "$html_file"
            echo "  - Injected CSS link into $html_file"
        else
            echo "  - CSS link already exists in $html_file"
        fi

        # Inject JS script tag if not present
        if ! grep -q "$SCRIPT_TAG" "$html_file"; then
            sed -i "s|</body>|$SCRIPT_TAG</body>|" "$html_file"
            echo "  - Injected JS script into $html_file"
        else
            echo "  - JS script already exists in $html_file"
        fi
    fi
done

echo "Build complete!"
