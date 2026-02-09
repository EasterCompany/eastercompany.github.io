#!/bin/bash

# --- Styling & Variables ---
BOLD='\033[1;32m'
CYAN='\033[1;36m'
ERROR='\033[1;31m'
NC='\033[0m'

# --- 1 & 2: Detection Logic ---
detect_environment() {
    OS_TYPE="Unknown"
    ENV_TYPE="Native"
    
    # Check for WSL
    if [[ -f /proc/sys/fs/binfmt_misc/WSLInterop ]] || grep -qi "microsoft" /proc/version 2>/dev/null; then
        ENV_TYPE="WSL"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        ENV_TYPE="MacOS"
    fi

    # Check for Distro
    if [[ "$ENV_TYPE" == "MacOS" ]]; then
        OS_TYPE="macOS"
    elif [ -f /etc/os-release ]; then
        . /etc/os-release
        case "$ID" in
            debian|ubuntu|kali|raspbian|pop) OS_TYPE="Debian-based" ;;
            arch|manjaro|endeavouros)       OS_TYPE="Arch-based" ;;
            alpine)                         OS_TYPE="Alpine-based" ;;
            *)                              OS_TYPE="Unsupported" ;;
        esac
    fi
}

detect_environment

# --- 3: Display Results ---
echo -e "${CYAN}====================================${NC}"
echo -e "  DEXTER ENVIRONMENT DISCOVERY (DEX)"
echo -e "${CYAN}====================================${NC}"
echo -e "Detected OS:  ${BOLD}$OS_TYPE${NC}"
echo -e "Environment:  ${BOLD}$ENV_TYPE${NC}"
echo -e "${CYAN}------------------------------------${NC}"

# --- 3.1: Validation ---
if [[ "$OS_TYPE" == "Unsupported" || "$OS_TYPE" == "Unknown" ]]; then
    echo -e "${ERROR}Error: The system is not a supported installation.${NC}"
    echo "Requires: Debian-based, Arch-based, Alpine, or macOS."
    exit 1
fi

# --- 4 & 5: WSL Preparation ---
if [[ "$ENV_TYPE" == "WSL" ]]; then
    echo -e "WSL detected. Preparing system..."
    # Local fallback for development, otherwise remote fetch
    if [ -f "./prepare-wsl.sh" ]; then
        sudo bash ./prepare-wsl.sh
    else
        echo "Fetching preparation script from easter.company..."
        curl -fsSL https://easter.company/scripts/prepare-wsl.sh | sudo bash
    fi
fi

# --- Tailscale Installation & Auth ---
echo -e "Checking Tailscale status..."
if ! command -v tailscale >/dev/null 2>&1; then
    echo -e "${CYAN}Tailscale not found. Installing...${NC}"
    curl -fsSL https://tailscale.com/install.sh | sh
fi

# Check if authenticated
# 'tailscale status' returns 1 if the daemon isn't running or if logged out
if ! tailscale status >/dev/null 2>&1; then
    echo -e "${BOLD}Action Required:${NC} Please authenticate this device with Tailscale."
    # Use sudo as tailscale up usually requires it on Linux
    sudo tailscale up
else
    echo -e "${BOLD}[OK]${NC} Tailscale is connected."
fi

# --- 6, 7 & 8: Install Dexter CLI ---
if [ ! -f "./install-dexter-cli.sh" ]; then
    echo "Fetching installer..."
    # curl -fsSL https://easter.company/scripts/install-dexter-cli.sh -o install-dexter-cli.sh
    # chmod +x install-dexter-cli.sh
fi

echo -e "Starting installation for ${BOLD}dex-cli${NC}..."
bash ./install-dexter-cli.sh "$OS_TYPE" "$ENV_TYPE"

# --- New Step: Source Code Setup ---
echo -e "Checking for source repository access..."
if [ -f "./install-dexter-source.sh" ]; then
    bash ./install-dexter-source.sh
else
    # Remote fetch if local not found
    curl -fsSL https://easter.company/scripts/install-dexter-source.sh | bash
fi

echo -e "${CYAN}====================================${NC}"
echo -e "       SETUP PROCESS COMPLETE"
echo -e "${CYAN}====================================${NC}"
