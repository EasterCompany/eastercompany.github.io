#!/bin/bash
# dex-cli (source) installer
set -e
echo "Installing dex-cli from source..."
echo ""
# Clean up previous installations
rm -rf "$HOME/Dexter"
rm -rf "$HOME/EasterCompany/dex-cli"
# Ensure base directories exist
mkdir -p "$HOME/.local/bin" "$HOME/EasterCompany"
# Clone or update dex-cli repository
if [ -d "$HOME/EasterCompany/dex-cli/.git" ]; then
  echo "→ Updating dex-cli source..."
  cd "$HOME/EasterCompany/dex-cli"
  git fetch --all
  git reset --hard origin/main
else
  echo "→ Cloning dex-cli repository..."
  git clone --depth 1 --branch main git@github.com:EasterCompany/dex-cli.git "$HOME/EasterCompany/dex-cli"
  cd "$HOME/EasterCompany/dex-cli"
fi
# Build and install dex-cli using the Makefile
echo "→ Building and installing dex-cli..."
make clean
make install
# Add ~/.local/bin to PATH if not already present
SHELL_RC=""
if [ -n "$BASH_VERSION" ]; then
  SHELL_RC="$HOME/.bashrc"
elif [ -n "$ZSH_VERSION" ]; then
  SHELL_RC="$HOME/.zshrc"
fi
if [ -n "$SHELL_RC" ]; then
  if ! grep -q 'export PATH="$HOME/.local/bin:$PATH"' "$SHELL_RC" 2>/dev/null; then
    echo '' >>"$SHELL_RC"
    echo '# dex-cli' >>"$SHELL_RC"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >>"$SHELL_RC"
    echo "→ Added $HOME/.local/bin to PATH. Please run 'source $SHELL_RC' or restart your terminal."
    source "$SHELL_RC"
  else
    echo "→ $HOME/.local/bin already in PATH."
  fi
fi
echo "→ Initializing Dexter environment..."
"$HOME/.local/bin/dex" system scan
"$HOME/.local/bin/dex" system validate
"$HOME/.local/bin/dex" system install
"$HOME/.local/bin/dex" system upgrade
"$HOME/.local/bin/dex" build
"$HOME/.local/bin/dex" update
clear
echo ""
echo "✓ dex-cli installation and environment setup complete!"
echo ""
echo "To start using dex-cli, please run: source $SHELL_RC (or restart your terminal)"
echo "Then run: dex help"
echo ""
