#!/bin/bash
# Generate SEO-friendly static pages for architectural studies
# Author: Fabricator (Dexter AI)

set -e

ROOT_DIR=$(dirname "$0")/..
STUDIES_DIR="$ROOT_DIR/static/docs/studies"
DOCS_DIR="$ROOT_DIR/docs"
TEMPLATE_FILE="$DOCS_DIR/index.html"

echo "Generating static study pages for SEO..."

GRID_FILE="$ROOT_DIR/source/templates/studies_grid.html"
echo "" > "$GRID_FILE"

# Iterate through all markdown studies (sorted by name or date if needed, currently alphabetical)
for md_file in $(ls "$STUDIES_DIR"/*.md | sort -r); do
    [ -e "$md_file" ] || continue
    
    slug=$(basename "$md_file" .md)
    target_dir="$DOCS_DIR/$slug"
    mkdir -p "$target_dir"
    
    echo "  - Processing $slug..."
    
    # Extract Title (First # header)
    title=$(grep "^# " "$md_file" | head -n 1 | sed 's/# //')
    
    # Extract Date
    date_str=$(grep "**Date:**" "$md_file" | head -n 1 | sed 's/\*\*Date:\*\* //')
    if [ -z "$date_str" ]; then date_str="Jan 18, 2026"; fi

    # Extract Description (Abstract or first long paragraph)
description=$(sed -n '/## Abstract/,/##/p' "$md_file" | grep -v "##" | tr '\n' ' ' | sed 's/  */ /g' | cut -c1-160)
    if [ -z "$description" ]; then
        description=$(grep -v "^#" "$md_file" | grep -v "^---" | grep -v "^**" | grep "[a-zA-Z]" | head -n 1 | cut -c1-160)
    fi
    # Clean whitespace
    description=$(echo "$description" | sed 's/^[ 	]*//;s/[ 	]*$//')

    # SEO Description (escape quotes for meta tags using standard HTML entity)
    seo_description=$(echo "$description" | sed 's/"/\&quot;/g')

    # Extract Short Summary for the Card (using unescaped description for UI)
    summary=$(echo "$description" | cut -c1-120)
    if [ ${#description} -gt 120 ]; then summary="$summary..."; fi

    # Add to the grid file
    cat <<EOF >> "$GRID_FILE"
            <a href="/docs/$slug/" class="study-card">
              <h3>$title</h3>
              <p>$summary</p>
              <div class="study-meta">
                <span>Case Study</span>
                <span>$date_str</span>
              </div>
            </a>
EOF

    # Create the index.html for this study
    cp "$TEMPLATE_FILE" "$target_dir/index.html"
    
    # Inject temporary SEO metadata tags for build.sh to pick up
    sed -i "1i <meta name=\"dex-seo-title\" content=\"$title\">" "$target_dir/index.html"
    sed -i "2i <meta name=\"dex-seo-description\" content=\"$seo_description\">" "$target_dir/index.html"

    # Add a data attribute to body to tell the JS to load this specific study instantly
    sed -i "s|<body class=\"dex-page\">|<body class=\"dex-page\" data-auto-load-study=\"$slug\">|g" "$target_dir/index.html"
done

echo "Study generation complete."
