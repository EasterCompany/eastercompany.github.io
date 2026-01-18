#!/bin/bash
set -e

# Define paths
ROOT_DIR=$(dirname "$0")/..
SRC_DIR="$ROOT_DIR/source"
TEMPLATES_DIR="$SRC_DIR/templates"
JS_ENTRY_POINT="$SRC_DIR/dex/main.ts"
CSS_ENTRY_POINT="$SRC_DIR/css/main.css"
ESBUILD_BIN="$HOME/go/bin/esbuild"

# 1. Clean up old hashed files
echo "Cleaning up old build files..."
rm -rf "$ROOT_DIR/dist"
mkdir -p "$ROOT_DIR/dist"

# Write version if available
if [ ! -z "$DEX_BUILD_VERSION" ]; then
    echo "Writing version $DEX_BUILD_VERSION to version.txt"
    echo "$DEX_BUILD_VERSION" > "$ROOT_DIR/version.txt"
fi

# 2. Generate a hash from the source file contents
echo "Generating content hash..."
# Find all source files and hash their combined content (including static assets)
HASH=$(find "$SRC_DIR" "$ROOT_DIR/static" -type f -print0 | sort -z | xargs -0 cat | sha1sum | head -c 8)
echo "Build hash: $HASH"
CURRENT_DATE=$(date +%Y-%m-%d)

# Define hashed output filenames
JS_OUTPUT_FILE="$ROOT_DIR/dist/dex.$HASH.js"
CSS_OUTPUT_FILE="$ROOT_DIR/dist/dex.$HASH.css"

# 3. Bundle, minify, and obfuscate the JavaScript
echo "Bundling JavaScript..."
"$ESBUILD_BIN" "$JS_ENTRY_POINT" --bundle --minify --tree-shaking=true --target=es2020 --outfile="$JS_OUTPUT_FILE"

# 4. Bundle and minify the CSS
echo "Bundling CSS..."
"$ESBUILD_BIN" "$CSS_ENTRY_POINT" --bundle --minify --outfile="$CSS_OUTPUT_FILE" --loader:.woff=file --loader:.woff2=file --loader:.eot=file --loader:.ttf=file --loader:.svg=file

# 4.5 Generate Study Pages
"$ROOT_DIR/scripts/generate_studies.sh"

# 5. Inject head content, script tag, and link tag into HTML files
echo "Injecting head content and build tags into HTML files..."
SCRIPT_TAG="<script src=\"/dist/dex.$HASH.js\" defer></script>"
LINK_TAG="<link rel=\"stylesheet\" href=\"/dist/dex.$HASH.css\">"

find "$ROOT_DIR" -name "*.html" | while read html_file; do
    if [ -f "$html_file" ]; then
        # Get filename without path and extension
        filename=$(basename "$html_file" .html)
        parent_dir=$(basename $(dirname "$html_file"))

        # Generate page title from filename
        # Replace hyphens and underscores with spaces, capitalize words
        if [ "$filename" = "404" ]; then
            page_title="404 - Page Not Found"
        elif [ "$filename" = "index" ]; then
            if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
                page_title="Home"
            elif [ "$parent_dir" = "dexter" ]; then
                page_title="Dexter"
            else
                page_title=$(echo "$parent_dir" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
            fi
        else
            # Convert filename: replace - and _ with spaces, then capitalize each word
            page_title=$(echo "$filename" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
        fi

        # Full title with site name
        full_title="$page_title - Easter Company"

        # Generate canonical URL
        if [ "$filename" = "index" ]; then
            if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
                canonical_url="https://easter.company"
            else
                canonical_url="https://easter.company/$parent_dir"
            fi
        else
            if [ "$parent_dir" = "easter.company" ] || [ "$parent_dir" = "." ] || [ "$parent_dir" = "EasterCompany" ] || [ "$parent_dir" = ".." ]; then
                canonical_url="https://easter.company/$filename"
            else
                canonical_url="https://easter.company/$parent_dir/$filename"
            fi
        fi

        # Extract specialized description if it exists (for SEO)
        specialized_desc=$(grep -oP '(?<=<meta name="description" content=")[^"]*' "$html_file" | head -n 1 || true)

        # Remove old tags (handling both > and /> endings)
        sed -i 's|<link rel="stylesheet" href="/dist/dex\..*\.css"[^>]*>||g' "$html_file"
        sed -i 's|<script src="/dist/dex\..*\.js" defer></script>||g' "$html_file"
        # Also cleanup legacy root paths just in case
        sed -i 's|<link rel="stylesheet" href="/dex\..*\.css">||g' "$html_file"
        sed -i 's|<script src="/dex\..*\.js" defer></script>||g' "$html_file"

        # Remove old head content between markers
        sed -i '/<!-- HEAD_START -->/,/<!-- HEAD_END -->/d' "$html_file"

        # Inject head template after <head> tag using a temp file approach
        if [ -f "$TEMPLATES_DIR/head.html" ]; then
            # Create a temporary file with the injection, replacing title and canonical
            # Using index() for literal matches instead of ~ for regex to avoid escape issues
            awk -v head_file="$TEMPLATES_DIR/head.html" -v title="$full_title" -v canonical="$canonical_url" -v build_hash="$HASH" -v current_date="$CURRENT_DATE" -v spec_desc="$specialized_desc" '
                /<head>/ {
                    print
                    print "<!-- HEAD_START -->"
                    while ((getline line < head_file) > 0) {
                        # Replace last_updated or last_build param with current build hash
                        gsub(/(last_updated|last_build)=[^"]*/, "last_build=" build_hash, line)
                        
                        if (index(line, "<title>") > 0) {
                            print "  <title>" title "</title>"
                        } else if (index(line, "og:url") > 0) {
                            print "  <meta property=\"og:url\" content=\"" canonical "\">"
                        } else if (index(line, "rel=\"canonical\"") > 0) {
                            print "  <link rel=\"canonical\" href=\"" canonical "\">"
                        } else if (index(line, "name=\"revised\"") > 0) {
                            # Update revised date
                            gsub(/content="[^"]*"/, "content=\"" current_date "\"", line)
                            print line
                        } else if (spec_desc != "" && (index(line, "name=\"description\"") > 0 || index(line, "property=\"og:description\"") > 0 || index(line, "name=\"twitter:description\"") > 0)) {
                            # Use specialized description if provided
                            gsub(/content="[^"]*"/, "content=\"" spec_desc "\"", line)
                            print line
                        } else {
                            print line
                        }
                    }
                    close(head_file)
                    print "<!-- HEAD_END -->"
                    next
                }
                { print }
            ' "$html_file" > "$html_file.tmp" && mv "$html_file.tmp" "$html_file"
        fi
        
        # Global replace for any other params in the body (scripts/links)
        sed -i -E "s/(last_updated|last_build)=[a-zA-Z0-9\-]*/last_build=$HASH/g" "$html_file"

        # Inject CSS and JS tags
        sed -i "s|</head>|$LINK_TAG</head>|" "$html_file"
        sed -i "s|</body>|$SCRIPT_TAG</body>|" "$html_file"
        echo "  - Injected tags into $html_file (title: $full_title)"
    fi
done

# 6. Generate Sitemap
echo "Generating Sitemap..."
"$ROOT_DIR/scripts/generate_sitemap.sh"

# 7. Generate Robots.txt
echo "Generating robots.txt..."
"$ROOT_DIR/scripts/generate_robots.sh"

# 8. Generate Web Manifest
echo "Generating Web Manifest..."
"$ROOT_DIR/scripts/generate_manifest.sh"

echo "Build complete!"
