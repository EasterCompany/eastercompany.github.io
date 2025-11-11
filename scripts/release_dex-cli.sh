#!/bin/bash
# dex-cli binary installer
set -e
echo "Releasing dex-cli..."
# Current Dexter Build Info
DEX_BIN_DIR="$HOME/Dexter/bin"
DEX_EXECUTABLE="$DEX_BIN_DIR/dex"
DEX_VERSION_OUT=$(
  "$DEX_EXECUTABLE" "version"
  echo "SUFFIX"
)
DEX_VERSION_OUT="${DEX_VERSION_OUT%SUFFIX}"
DEX_VERSION="${DEX_VERSION_OUT//[$'\t\r\n ']/}"
# ~/EasterCompany organisation directory
EC_DIR="$HOME/EasterCompany"
# .../easter.company website repo paths
EC_WEB_DIR="$EC_DIR/easter.company"
EC_WEB_STATIC_DIR="$EC_WEB_DIR/static"
EC_WEB_BIN_DIR="$EC_WEB_STATIC_DIR/bin"
EC_WEB_SCRIPTS_DIR="$EC_WEB_DIR/scripts"
EC_WEB_DEX_CLI_INSTALL_SCRIPT="$EC_WEB_SCRIPTS_DIR/install_dex-cli.sh"
EC_WEB_DEX_CLI_RELEASE_SCRIPT="$EC_WEB_SCRIPTS_DIR/release_dex-cli.sh"
EC_WEB_DEX_CLI_INSTALL_SOURCE="$EC_WEB_SCRIPTS_DIR/install_dex-cli_source.sh"
# .../easter.company website repo paths for dex-cli
EC_WEB_DEX_CLI_DIR="$EC_WEB_BIN_DIR/dex-cli"
EC_WEB_DEX_CLI_LATEST_TXT="$EC_WEB_DEX_CLI_DIR/latest.txt"
EC_WEB_DEX_CLI_EXECUTABLE="$EC_WEB_DEX_CLI_DIR/dex"
# production urls
LATEST_TXT_URL="https://easter.company/static/bin/dex-cli/latest.txt"
EXECUTABLE_URL="https://easter.company/static/bin/dex-cli/dex"
# ~/EasterCompany/dex-cli project directory
DEX_CLI_PROJECT_DIR="$HOME/EasterCompany/dex-cli/"

echo "Release Candidate: $DEX_VERSION"
echo ""
echo "Updating $LATEST_TXT_URL ..."
echo "$DEX_VERSION" >"$EC_WEB_DEX_CLI_LATEST_TXT"

NEW_DEX_VERSION_OUT=$(
  cat "$EC_WEB_DEX_CLI_LATEST_TXT"
  echo "SUFFIX"
)
NEW_DEX_VERSION_OUT="${NEW_DEX_VERSION_OUT%SUFFIX}"
NEW_DEX_VERSION="${NEW_DEX_VERSION_OUT//[$'\t\r\n ']/}"

if [ "$NEW_DEX_VERSION" != "$DEX_VERSION" ]; then
  echo ""
  echo "[ERROR] New release '$EC_WEB_DEX_CLI_LATEST_TXT' doesn't match the original release candidate version. Something went wrong?"
  exit 1
fi

echo "Updated and verified '$EC_WEB_DEX_CLI_LATEST_TXT' successfully!"
echo ""

echo "Updating $EXECUTABLE_URL ..."
cp -rf "$DEX_EXECUTABLE" "$EC_WEB_DEX_CLI_EXECUTABLE"

NEW_DEX_VERSION_OUT=$(
  "$EC_WEB_DEX_CLI_EXECUTABLE" "version"
  echo "SUFFIX"
)
NEW_DEX_VERSION_OUT="${NEW_DEX_VERSION_OUT%SUFFIX}"
NEW_DEX_VERSION="${NEW_DEX_VERSION_OUT//[$'\t\r\n ']/}"

if [ "$NEW_DEX_VERSION" != "$DEX_VERSION" ]; then
  echo ""
  echo "[ERROR] New release '$EC_WEB_DEX_CLI_EXECUTABLE' doesn't match the original release candidate version. Something went wrong?"
  exit 1
fi

echo "Updated and verified '$EC_WEB_DEX_CLI_EXECUTABLE' successfully!"
echo ""

echo "Staging changes in '$EC_WEB_DIR' ..."
cd "$EC_WEB_DIR"
git add static/bin/dex-cli/dex
git add static/bin/dex-cli/latest.txt

echo "Staged changes successfully!"
echo ""

echo "Creating commit ..."
git commit -m "new dex-cli release: $DEX_VERSION"

echo "Created commit successfully!"
echo ""

echo "Pushing new latest release ..."
git push -f origin main

echo ""
echo "Pushed new latest release of dex-cli."
echo "Latest Tag URL: $LATEST_TXT_URL"
echo "Latest Executable URL: $EXECUTABLE_URL"
echo "Latest Version: $DEX_VERSION"
echo ""
