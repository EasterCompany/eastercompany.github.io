#!/bin/bash
set -e

# Define paths
ROOT_DIR=$(dirname "$0")/..
SRC_DIR="$ROOT_DIR/source/dex"
ENTRY_POINT="$SRC_DIR/main.js"
OUTPUT_FILE="$ROOT_DIR/dex.js"
ESBUILD_BIN="$HOME/go/bin/esbuild"

# 1. Bundle, minify, and obfuscate the JavaScript
echo "Bundling JavaScript..."
"$ESBUILD_BIN" "$ENTRY_POINT" --bundle --minify --sourcemap --outfile="$OUTPUT_FILE"

# 2. Inject the script tag into HTML files
echo "Injecting script tag into HTML files..."
SCRIPT_TAG='<script src="/dex.js" defer></script>'

for html_file in "$ROOT_DIR"/*.html; do
    if [ -f "$html_file" ]; then
        # Check if the script tag already exists
        if ! grep -q "$SCRIPT_TAG" "$html_file"; then
            # Inject the script tag before the closing </body> tag
            sed -i "s|</body>|$SCRIPT_TAG</body>|" "$html_file"
            echo "  - Injected into $html_file"
        else
            echo "  - Already exists in $html_file"
        fi
    fi
done

echo "Build complete!"
