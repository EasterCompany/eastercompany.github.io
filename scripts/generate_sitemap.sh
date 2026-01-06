#!/bin/bash
set -e

ROOT_DIR=$(dirname "$0")/..
SITEMAP_FILE="$ROOT_DIR/sitemap.xml"
BASE_URL="https://easter.company"
CURRENT_DATE=$(date -u +"%Y-%m-%dT%H:%M:%S+00:00")

echo "Generating sitemap.xml..."

# Start the XML file
cat > "$SITEMAP_FILE" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="
    http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
  "
>
EOF

# Find all HTML files, exclude templates, legacy, and 404
find "$ROOT_DIR" -name "*.html" | sort | while read html_file; do
    # Skip template files and build artifacts if they exist in source
    if [[ "$html_file" == *"/source/"* ]] || [[ "$html_file" == *"/static/"* ]]; then
        continue
    fi
    
    filename=$(basename "$html_file" .html)
    parent_dir=$(basename $(dirname "$html_file"))
    
    # Skip 404 page and legacy references
    if [ "$filename" = "404" ] || [[ "$html_file" == *"legacy_"* ]] || [[ "$html_file" == *"google"* ]]; then
        continue
    fi

    # Determine the URL path
    if [ "$filename" = "index" ]; then
        if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
            url_path=""
        else
            url_path="/$parent_dir/"
        fi
    else
        if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
            url_path="/$filename"
        else
            url_path="/$parent_dir/$filename"
        fi
    fi

    # Append to sitemap
    echo "  Adding $BASE_URL$url_path"
    cat >> "$SITEMAP_FILE" <<EOF
<url>
  <loc>$BASE_URL$url_path</loc>
  <lastmod>$CURRENT_DATE</lastmod>
</url>
EOF

done

# Close the XML file
echo "</urlset>" >> "$SITEMAP_FILE"

echo "Sitemap generated successfully at $SITEMAP_FILE"
