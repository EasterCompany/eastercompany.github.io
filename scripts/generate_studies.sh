#!/bin/bash
# Generate SEO-friendly static pages for architectural studies (Paginated)
# Author: Fabricator (Dexter AI)

set -e

ROOT_DIR=$(dirname "$0")/..
STUDIES_DIR="$ROOT_DIR/static/docs/studies"
DOCS_DIR="$ROOT_DIR/docs"
TEMPLATE_FILE="$DOCS_DIR/index.html"
TEMPLATES_DIR="$ROOT_DIR/source/templates"

echo "Generating static study pages for SEO (Paginated)..."

# Ensure the main grid file exists (for Page 1, injected by build.sh)
GRID_FILE="$TEMPLATES_DIR/studies_grid.html"
echo "" > "$GRID_FILE"

# Cleanup old pagination directories
rm -rf "$DOCS_DIR/page"

# Create a temporary directory for sorting
TMP_SORT_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_SORT_DIR"' EXIT

# 1. Collect all studies and their dates
count=0
for md_file in "$STUDIES_DIR"/*.md; do
    [ -e "$md_file" ] || continue
    
    # Extract Date string
    date_str=$(grep "**Date:**" "$md_file" | head -n 1 | sed 's/\*\*Date:\*\* //')
    if [ -z "$date_str" ]; then date_str="01 January 1970"; fi
    
    # Convert to sortable timestamp (YYYYMMDD)
    sort_date=$(date -d "$date_str" +"%Y%m%d" 2>/dev/null || echo "19700101")
    
    # Save mapping to temp file: timestamp|filename
    echo "$sort_date|$(basename "$md_file")" >> "$TMP_SORT_DIR/list.txt"
    count=$((count + 1))
done

# 2. Sort the list descending (newest first)
sort -rn "$TMP_SORT_DIR/list.txt" -o "$TMP_SORT_DIR/sorted.txt"

# Calculate total pages
items_per_page=10
total_pages=$(( (count + items_per_page - 1) / items_per_page ))

echo "Found $count studies. Generating $total_pages pages..."

# 3. Process sorted studies
current_item=0
current_page=1
page_content=""

while IFS='|' read -r timestamp filename; do
    md_file="$STUDIES_DIR/$filename"
    slug=$(basename "$filename" .md)
    target_dir="$DOCS_DIR/$slug"
    mkdir -p "$target_dir"
    
    # --- Generate Individual Study Page (Same as before) ---
    # Extract Title (First # header)
    title=$(grep "^# " "$md_file" | head -n 1 | sed 's/# //')
    
    # Extract Date string again for display
    date_display=$(grep "**Date:**" "$md_file" | head -n 1 | sed 's/\*\*Date:\*\* //')

    # Extract Description
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

    # Create the index.html for this study
    cp "$TEMPLATE_FILE" "$target_dir/index.html"
    
    # Inject temporary SEO metadata tags for build.sh to pick up
    sed -i "1i <meta name=\"dex-seo-title\" content=\"$title\">" "$target_dir/index.html"
    sed -i "2i <meta name=\"dex-seo-description\" content=\"$seo_description\">" "$target_dir/index.html"

    # Add a data attribute to body to tell the JS to load this specific study instantly
    sed -i "s|<body class=\"dex-page\">|<body class=\"dex-page\" data-auto-load-study=\"$slug\">|g" "$target_dir/index.html"

    # --- Append to Page Grid ---
    item_html="
            <a href=\"/docs/$slug/\" class=\"study-card\">
              <h3>$title</h3>
              <p>$summary</p>
              <div class=\"study-meta\">
                <span>Case Study</span>
                <span>$date_display</span>
              </div>
            </a>"
    page_content="${page_content}${item_html}"
    
    current_item=$((current_item + 1))

    # Check if page is full or last item
    if [ $((current_item % items_per_page)) -eq 0 ] || [ $current_item -eq $count ]; then
        
        # Generate Pagination Controls
        # We use grid-column: 1 / -1 to make it span the full width of the grid container
        pagination_html="<div class=\"pagination\" style=\"grid-column: 1 / -1; display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 40px; width: 100%;\">"
        
        # Prev Link
        if [ $current_page -gt 1 ]; then
            prev_page=$((current_page - 1))
            link="/docs/page/$prev_page/"
            if [ $prev_page -eq 1 ]; then link="/docs/"; fi
            pagination_html="${pagination_html}<a href=\"$link\" class=\"btn-pagination\">&larr; Newer</a>"
        else
            pagination_html="${pagination_html}<span class=\"btn-pagination disabled\" style=\"opacity: 0.5; cursor: not-allowed;\">&larr; Newer</span>"
        fi
        
        # Page Indicator
        pagination_html="${pagination_html}<span class=\"page-indicator\" style=\"color: #888; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem;\">Page $current_page of $total_pages</span>"
        
        # Next Link
        if [ $current_page -lt $total_pages ]; then
            next_page=$((current_page + 1))
            link="/docs/page/$next_page/"
            pagination_html="${pagination_html}<a href=\"$link\" class=\"btn-pagination\">Older &rarr;</a>"
        else
            pagination_html="${pagination_html}<span class=\"btn-pagination disabled\" style=\"opacity: 0.5; cursor: not-allowed;\">Older &rarr;</span>"
        fi
        
        pagination_html="${pagination_html}</div>"
        
        # Final Content Block
        final_content="${page_content}${pagination_html}"

        if [ $current_page -eq 1 ]; then
            # Page 1: Write to GRID_FILE (build.sh will inject into docs/index.html)
            echo "$final_content" > "$GRID_FILE"
        else
            # Page N: Create directory and inject manually
            page_dir="$DOCS_DIR/page/$current_page"
            mkdir -p "$page_dir"
            cp "$TEMPLATE_FILE" "$page_dir/index.html"
            
            # Inject Content (Replacing placeholders)
            # We use a temp file to handle newlines safely with sed/awk
            echo "$final_content" > "$TMP_SORT_DIR/content.html"
            
            # Use awk to inject content between markers
            awk -v content_file="$TMP_SORT_DIR/content.html" '
                /<!-- STUDIES_GRID_START -->/ {
                    print
                    while ((getline line < content_file) > 0) {
                        print line
                    }
                    close(content_file)
                    print "<!-- STUDIES_GRID_END -->"
                    # Skip lines until end marker in original file
                    while ((getline line) > 0) {
                        if (line ~ /<!-- STUDIES_GRID_END -->/) {
                            break
                        }
                    }
                    next
                }
                { print }
            ' "$page_dir/index.html" > "$page_dir/index.html.tmp" && mv "$page_dir/index.html.tmp" "$page_dir/index.html"
            
            # Update title for paginated pages
            sed -i "1i <meta name=\"dex-seo-title\" content=\"Docs - Page $current_page\">" "$page_dir/index.html"
        fi

        # Reset for next page
        page_content=""
        current_page=$((current_page + 1))
    fi

done < "$TMP_SORT_DIR/sorted.txt"

echo "Study generation complete."