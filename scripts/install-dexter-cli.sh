#!/bin/bash
# Script: install-dexter-cli.sh

OS_TYPE=$1
ENV_TYPE=$2
DEX_HOME="$HOME/Dexter"
DEX_BIN="$DEX_HOME/bin"
DATA_URL="https://easter.company/bin/data.json"
BASE_URL="https://easter.company"

# Helper to install jq based on OS_TYPE
ensure_jq() {
    if ! command -v jq >/dev/null 2>&1; then
        echo -e "\033[1;33m[DEPENDENCY]\033[0m 'jq' not found. Attempting to install..."
        case "$OS_TYPE" in
            "Debian-based")
                sudo apt-get update && sudo apt-get install -y jq
                ;;
            "Arch-based")
                sudo pacman -S --noconfirm jq
                ;;
            "Alpine-based")
                sudo apk add jq
                ;;
            "macOS")
                if command -v brew >/dev/null 2>&1; then
                    brew install jq
                else
                    echo -e "\033[1;31mError:\033[0m Homebrew required to install 'jq' on macOS."
                    exit 1
                fi
                ;;
            *)
                echo -e "\033[1;31mError:\033[0m Cannot auto-install 'jq' for $OS_TYPE. Please install it manually."
                exit 1
                ;;
        esac
    fi
}

echo -e "\033[1;36m[INSTALLER]\033[0m Setting up Dexter for $OS_TYPE..."

# Run dependency check
ensure_jq

# Create directory structure
mkdir -p "$DEX_BIN"

# Fetch JSON data
JSON_DATA=$(curl -fsSL "$DATA_URL")
if [ $? -ne 0 ]; then
    echo -e "\033[1;31mError:\033[0m Could not retrieve data from $DATA_URL"
    exit 1
fi

# Determine Latest Minor Version
# Logic: Filter releases for type=="minor", sort by version key, take the last one.
VERSION=$(echo "$JSON_DATA" | jq -r '.releases | to_entries | map(select(.value.type == "minor")) | sort_by(.key | split(".") | map(tonumber)) | last | .key')

if [ "$VERSION" == "null" ] || [ -z "$VERSION" ]; then
    echo -e "\033[1;31mError:\033[0m No 'minor' release found in data.json"
    exit 1
fi

# Determine Architecture key
ARCH="linux-amd64"
[[ "$OS_TYPE" == "macOS" ]] && ARCH="darwin-amd64"

# Find binary path (handle both "cli" and "dex-cli" keys)
REL_PATH=$(echo "$JSON_DATA" | jq -r ".releases[\"$VERSION\"].binaries | if has(\"dex-cli\") then .[\"dex-cli\"][\"$ARCH\"].path else .[\"cli\"][\"$ARCH\"].path end")

if [ "$REL_PATH" == "null" ] || [ -z "$REL_PATH" ]; then
    echo -e "\033[1;31mError:\033[0m Could not find binary path for version $VERSION ($ARCH)"
    exit 1
fi

DOWNLOAD_URL="${BASE_URL}${REL_PATH}"

echo -e "Target Version: \033[1;32m$VERSION\033[0m"
echo -e "Downloading from: $DOWNLOAD_URL"

# Download the binary
curl -fsSL "$DOWNLOAD_URL" -o "$DEX_BIN/dex"
if [ $? -ne 0 ]; then
    echo -e "\033[1;31mError:\033[0m Binary download failed."
    exit 1
fi

chmod +x "$DEX_BIN/dex"

# Update PATH
SHELL_CONFIG=""
case "$SHELL" in
    */zsh)  SHELL_CONFIG="$HOME/.zshrc" ;;
    */bash) SHELL_CONFIG="$HOME/.bashrc" ;;
    *)      SHELL_CONFIG="$HOME/.profile" ;;
esac

if ! grep -q "$DEX_BIN" "$SHELL_CONFIG" 2>/dev/null; then
    echo "export PATH=\"\$PATH:$DEX_BIN\"" >> "$SHELL_CONFIG"
    echo -e "\033[1;32m[SUCCESS]\033[0m Added $DEX_BIN to $SHELL_CONFIG"
    echo "Please run 'source $SHELL_CONFIG' or restart your terminal."
else
    echo -e "\033[1;34m[INFO]\033[0m $DEX_BIN is already in your PATH."
fi

echo -e "\033[1;32mDexter CLI installation complete.\033[0m"
