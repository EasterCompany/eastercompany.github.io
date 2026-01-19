#!/bin/bash
# Generate SEO-friendly static pages for architectural studies
# Author: Fabricator (Dexter AI)

set -e

ROOT_DIR=$(dirname "$0")/..
STUDIES_DIR="$ROOT_DIR/static/docs/studies"
DOCS_DIR="$ROOT_DIR/docs"
TEMPLATE_FILE="$DOCS_DIR/index.html"
TEMPLATES_DIR="$ROOT_DIR/source/templates"

echo "Generating static study pages for SEO (Date Sorted)..."

GRID_FILE="$TEMPLATES_DIR/studies_grid.html"
echo "" > "$GRID_FILE"

# Create a temporary directory for sorting
TMP_SORT_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_SORT_DIR"' EXIT

# 1. Collect all studies and their dates
for md_file in "$STUDIES_DIR"/*.md; do
    [ -e "$md_file" ] || continue
    
    # Extract Date string
    date_str=$(grep "**Date:**" "$md_file" | head -n 1 | sed 's/\*\*Date:\*\* //')
    if [ -z "$date_str" ]; then date_str="01 January 1970"; fi
    
    # Convert to sortable timestamp (YYYYMMDD)
    # Handle different date formats if necessary, assuming "DD Month YYYY"
    sort_date=$(date -d "$date_str" +"%Y%m%d" 2>/dev/null || echo "19700101")
    
    # Save mapping to temp file: timestamp|filename
    echo "$sort_date|$(basename "$md_file")" >> "$TMP_SORT_DIR/list.txt"
done

# 2. Sort the list descending (newest first)
sort -rn "$TMP_SORT_DIR/list.txt" -o "$TMP_SORT_DIR/sorted.txt"

# 3. Process sorted studies
while IFS='|' read -r timestamp filename; do
    md_file="$STUDIES_DIR/$filename"
    slug=$(basename "$filename" .md)
    target_dir="$DOCS_DIR/$slug"
    mkdir -p "$target_dir"
    
    echo "  - Processing $slug ($timestamp)..."
    
    # Extract Title (First # header)
    title=$(grep "^# " "$md_file" | head -n 1 | sed 's/# //')
    
    # Extract Date string again for display
    date_display=$(grep "**Date:**" "$md_file" | head -n 1 | sed 's/\*\*Date:\*\* //')

    # Extract Description (Abstract or first long paragraph)
    description=$(sed -n '/## Abstract/,/##/p' "$md_file" | grep -v "##" | tr '\n' ' ' | sed 's/  */ /g' | cut -c1-160)
    if [ -z "$description" ]; then
        description=$(grep -v "^#" "$md_file" | grep -v "^---" | grep -v "^**" | grep "[a-zA-Z]" | head -n 1 | cut -c1-160)
    fi
    description=$(echo "$description" | sed 's/^[ 	]*//;s/[ 	]*$//')

    # SEO Description (escape quotes)
    seo_description=$(echo "$description" | sed 's/"/\&quot;/g')

    # UI Summary (strip markdown formatting)
    summary=$(echo "$description" | sed 's/\*\*//g' | sed 's/\*//g')
    summary=$(echo "$summary" | cut -c1-120)
    if [ ${#description} -gt 120 ]; then summary="$summary..."; fi

    # Add to the grid file
    cat <<EOF >> "$GRID_FILE"
            <a href="/docs/$slug/" class="study-card">
              <h3>$title</h3>
              <p>$summary</p>
              <div class="study-meta">
                <span>Case Study</span>
                <span>$date_display</span>
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
done < "$TMP_SORT_DIR/sorted.txt"

echo "Study generation complete."