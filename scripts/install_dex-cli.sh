#!/bin/bash
# dex-cli binary installer
set -e
echo "Installing dex-cli..."
echo ""
DEX_BIN_DIR="$HOME/Dexter/bin"
DEX_EXECUTABLE_PATH="$DEX_BIN_DIR/dex"
TAGS_URL="https://easter.company/static/bin/dex-cli/latest.txt"
DOWNLOAD_URL="https://easter.company/static/bin/latest/dex-cli"
# Ensure the Dexter bin directory exists
mkdir -p "$DEX_BIN_DIR"
# Download the pre-built binary
echo "→ Downloading the latest dex-cli binary from $DOWNLOAD_URL..."
if ! curl -fsSL -o "$DEX_EXECUTABLE_PATH" "$DOWNLOAD_URL"; then
  echo "❌ Error: Failed to download the dex-cli binary."
  exit 1
fi
# Make the binary executable
chmod +x "$DEX_EXECUTABLE_PATH"
echo "→ Binary installed to $DEX_EXECUTABLE_PATH"
# Add ~/Dexter/bin to PATH if not already present
SHELL_RC=""
if [ -n "$BASH_VERSION" ]; then
  SHELL_RC="$HOME/.bashrc"
elif [ -n "$ZSH_VERSION" ]; then
  SHELL_RC="$HOME/.zshrc"
fi
if [ -n "$SHELL_RC" ]; then
  if ! grep -q 'export PATH="$HOME/Dexter/bin:$PATH"' "$SHELL_RC" 2>/dev/null; then
    echo '' >>"$SHELL_RC"
    echo '# dex-cli' >>"$SHELL_RC"
    echo 'export PATH="$HOME/Dexter/bin:$PATH"' >>"$SHELL_RC"
    echo "→ Added $HOME/Dexter/bin to your PATH."
    # Source the file to make the command available immediately in the current session
    source "$SHELL_RC"
  else
    echo "→ $HOME/Dexter/bin is already in your PATH."
  fi
fi
echo "→ Initializing Dexter environment..."
"$HOME/Dexter/bin/dex" system scan
"$HOME/Dexter/bin/dex" system validate
"$HOME/Dexter/bin/dex" system install
"$HOME/Dexter/bin/dex" system upgrade
"$HOME/Dexter/bin/dex" build
"$HOME/Dexter/bin/dex" update
clear
echo ""
echo "✓ dex-cli installation and environment setup complete!"
echo ""
echo "To start using dex-cli, please run: source $SHELL_RC (or restart your terminal)"
echo "Then run: dex help"
echo ""
