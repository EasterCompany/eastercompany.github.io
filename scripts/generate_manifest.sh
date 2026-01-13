#!/bin/bash
set -e

ROOT_DIR=$(dirname "$0")/..
MANIFEST_FILE="$ROOT_DIR/site.webmanifest"

echo "Generating site.webmanifest..."

cat > "$MANIFEST_FILE" <<EOF
{
  "name": "Easter Company",
  "short_name": "Easter",
  "icons": [
    {
      "src": "/static/meta/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/static/meta/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#000000",
  "display": "standalone"
}
EOF

echo "Manifest generated successfully at $MANIFEST_FILE"
