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
    
    # Inject specific metadata
    # We use a custom marker or just replace the generic ones injected by build.sh later
    # Actually, we should replace the ones in the file RIGHT NOW so build.sh sees them as "standard"
    
    sed -i "s|<title>.*</title>|<title>$title - Architectural Study</title>|g" "$target_dir/index.html"
    sed -i "s|property=\"og:title\" content=\".*\"|property=\"og:title\" content=\"$$title\"|g" "$target_dir/index.html"
    sed -i "s|name=\"description\" content=\".*\"|name=\"description\" content=\"$$description\"|g" "$target_dir/index.html"
    sed -i "s|property=\"og:description\" content=\".*\"|property=\"og:description\" content=\"$$description\"|g" "$target_dir/index.html"
    sed -i "s|name=\"twitter:description\" content=\".*\"|name=\"twitter:description\" content=\"$$description\"|g" "$target_dir/index.html"

    # Add a data attribute to body to tell the JS to load this specific study instantly
    sed -i "s|<body class=\"dex-page\">|<body class=\"dex-page\" data-auto-load-study=\"$slug\">|g" "$target_dir/index.html"
done

echo "Study generation complete."
