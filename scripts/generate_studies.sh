#!/bin/bash
# Generate SEO-friendly static pages for architectural studies
# Author: Fabricator (Dexter AI)

set -e

ROOT_DIR=$(dirname "$0")/..
STUDIES_DIR="$ROOT_DIR/static/docs/studies"
DOCS_DIR="$ROOT_DIR/docs"
TEMPLATE_FILE="$DOCS_DIR/index.html"

echo "Generating static study pages for SEO..."

if [ ! -f "$TEMPLATE_FILE" ]; then
    echo "Error: Template $TEMPLATE_FILE not found."
    exit 1
fi

# Iterate through all markdown studies
for md_file in "$STUDIES_DIR"/*.md; do
    [ -e "$md_file" ] || continue
    
    slug=$(basename "$md_file" .md)
    target_dir="$DOCS_DIR/$slug"
    mkdir -p "$target_dir"
    
    echo "  - Processing $slug..."
    
    # Extract Title (First # header)
    title=$(grep "^# " "$md_file" | head -n 1 | sed 's/# //')
    if [ -z "$title" ]; then title=$(echo "$slug" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1'); fi
    
    # Extract Description (Abstract or first long paragraph)
    # 1. Try to get text under Abstract header
    description=$(sed -n '/## Abstract/,/##/p' "$md_file" | grep -v "##" | tr '\n' ' ' | sed 's/  */ /g' | cut -c1-160)
    
    # 2. Fallback to first non-header paragraph
    if [ -z "$description" ]; then
        description=$(grep -v "^#" "$md_file" | grep -v "^---" | grep -v "^**" | grep "[a-zA-Z]" | head -n 1 | cut -c1-160)
    fi
    
    # Final fallback
    if [ -z "$description" ]; then description="Technical study regarding $title within the Dexter AI ecosystem."; fi

    # Clean description for meta tags (escape quotes)
    description=$(echo "$description" | sed 's/"/\\"/g' | sed 's/^[ 	]*//;s/[ 	]*$//')

    # Create the index.html for this study
    cp "$TEMPLATE_FILE" "$target_dir/index.html"
    
    # Inject temporary SEO metadata tags for build.sh to pick up
    # We put them at the top of the file so grep finds them before any generic ones
    sed -i "1i <meta name=\"dex-seo-title\" content=\"$title\">" "$target_dir/index.html"
    sed -i "2i <meta name=\"dex-seo-description\" content=\"$description\">" "$target_dir/index.html"

    # Add a data attribute to body to tell the JS to load this specific study instantly
    sed -i "s|<body class=\"dex-page\">|<body class=\"dex-page\" data-auto-load-study=\"$slug\">|g" "$target_dir/index.html"
done

echo "Study generation complete."