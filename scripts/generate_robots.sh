#!/bin/bash
set -e

ROOT_DIR=$(dirname "$0")/..
ROBOTS_FILE="$ROOT_DIR/robots.txt"
BASE_URL="https://easter.company"

echo "Generating robots.txt..."

# Start with User-agent and default block
cat > "$ROBOTS_FILE" <<EOF
User-agent: *
Disallow: /
EOF

# Allow necessary assets for rendering (Googlebot needs these)
echo "Allow: /static/" >> "$ROBOTS_FILE"
echo "Allow: /dist/" >> "$ROBOTS_FILE"
echo "Allow: /site.webmanifest" >> "$ROBOTS_FILE"

# Find all HTML files, exclude templates, legacy, and 404
# We use the same logic as the sitemap to determine valid pages
find "$ROOT_DIR" -name "*.html" | sort | while read html_file; do
    # Skip template files and build artifacts if they exist in source
    if [[ "$html_file" == *"/source/"* ]] || [[ "$html_file" == *"/static/"* ]]; then
        continue
    fi
    
    filename=$(basename "$html_file" .html)
    parent_dir=$(basename $(dirname "$html_file"))
    
    # Skip 404 page (robots shouldn't crawl it explicitly, though they see it on error)
    # Skip legacy and google verification files
    if [ "$filename" = "404" ] || [[ "$html_file" == *"legacy_"* ]] || [[ "$html_file" == *"google"* ]]; then
        continue
    fi

    # Determine the URL path
    if [ "$filename" = "index" ]; then
        if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
            url_path="/"
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

    # Append Allow rule
    echo "Allow: $url_path" >> "$ROBOTS_FILE"
done

# Add Sitemap location
echo "" >> "$ROBOTS_FILE"
echo "Sitemap: $BASE_URL/sitemap.xml" >> "$ROBOTS_FILE"

echo "robots.txt generated successfully at $ROBOTS_FILE"
