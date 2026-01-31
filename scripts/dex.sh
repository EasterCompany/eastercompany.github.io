#!/bin/bash
# Dexter Fabricator CLI - Modernized Installer
set -e

DEX_ROOT="$HOME/Dexter"
DEX_BIN_DIR="$DEX_ROOT/bin"
DEX_PATH_DIR="$DEX_ROOT/path"
DEX_EXECUTABLE="$DEX_BIN_DIR/dex"

echo "🚀 Modernizing Dexter environment..."

# 1. Fetch latest version info from data.json
DATA_URL="https://easter.company/bin/data.json"
echo "→ Fetching latest release info..."

# Try to parse version using python3 for reliability, fallback to grep/sed
if command -v python3 >/dev/null 2>&1; then
    LATEST_VERSION=$(curl -fsSL "$DATA_URL" | python3 -c "import sys, json; print(json.load(sys.stdin)['latest']['user'])")
else
    LATEST_VERSION=$(curl -fsSL "$DATA_URL" | grep '"user":' | head -n 1 | sed -E 's/.*"user": "([^"]+)".*/\1/')
fi

SHORT_VERSION=$(echo "$LATEST_VERSION" | cut -d'.' -f1-3)

if [ -z "$SHORT_VERSION" ]; then
    echo "❌ Error: Could not determine latest version."
    exit 1
fi

DOWNLOAD_URL="https://easter.company/bin/$SHORT_VERSION/dex"
echo "→ Latest version: $LATEST_VERSION"

# 2. Install dex-cli
mkdir -p "$DEX_BIN_DIR"
echo "→ Downloading dex-cli binary..."
if ! curl -fsSL -o "$DEX_EXECUTABLE" "$DOWNLOAD_URL"; then
    echo "❌ Error: Failed to download dex-cli from $DOWNLOAD_URL"
    exit 1
fi
chmod +x "$DEX_EXECUTABLE"

# 3. Setup surgical PATH (Only dex, not the whole bin directory)
# We create a dedicated directory containing only a symlink to dex
mkdir -p "$DEX_PATH_DIR"
ln -sf "$DEX_EXECUTABLE" "$DEX_PATH_DIR/dex"

# Detect shell RC
case "$SHELL" in
    */zsh)  SHELL_RC="$HOME/.zshrc" ;;
    */bash) SHELL_RC="$HOME/.bashrc" ;;
    *)      SHELL_RC="$HOME/.profile" ;;
esac

PATH_LINE="export PATH=\"\$HOME/Dexter/path:\$PATH\""

if [ -f "$SHELL_RC" ]; then
    # Remove old-style Dexter/bin path if present to avoid pollution
    sed -i '/Dexter\/bin/d' "$SHELL_RC"
    
    if ! grep -q "Dexter/path" "$SHELL_RC"; then
        echo "" >> "$SHELL_RC"
        echo "# Dexter Fabricator CLI" >> "$SHELL_RC"
        echo "$PATH_LINE" >> "$SHELL_RC"
        echo "→ Updated PATH in $SHELL_RC"
    fi
fi

# 4. Config Sync
# This will pull service-map.json, options.json, and server-map.json from the network
# Crucial for step 6 to know what requirements to install
echo "→ Synchronizing configuration from network..."
"$DEX_EXECUTABLE" config sync || echo "⚠️ Warning: Config sync failed. Ensure dex-event-service is reachable."

# 5. System Introspection
# Scans hardware and initializes system.json
echo "→ Scanning system..."
"$DEX_EXECUTABLE" system scan

# 6. Install System Requirements
# Installs OS packages (git, redis, cuda, etc.) based on the services assigned to this machine
echo "→ Installing required system packages (may require sudo)..."
"$DEX_EXECUTABLE" system install || echo "⚠️ Warning: System install failed. Run 'dex system install' manually if needed."

# 7. Service Binary Update
# This will automatically download/install binaries for any services this machine is responsible for
echo "→ Downloading service binaries..."
"$DEX_EXECUTABLE" update || echo "⚠️ Warning: Service update failed."

echo ""
echo "✅ Dexter installation and environment setup complete!"
echo "Run 'source $SHELL_RC' or restart your terminal to start using the 'dex' command."
echo ""