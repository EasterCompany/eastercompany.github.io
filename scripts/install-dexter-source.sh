#!/bin/bash
# Script: install-dexter-source.sh
# Purpose: Silently clone the EasterCompany source repository if SSH access is available.

TARGET_DIR="$HOME/EasterCompany"
REPO_URL="git@github.com:EasterCompany/EasterCompany"

# 1. Silent SSH Access Check
# We attempt to connect to GitHub via SSH. 
# GitHub returns exit code 1 on successful auth (but shell denial), 
# and 255 on connection failure/auth failure.
ssh -T -o ConnectTimeout=5 -o BatchMode=yes git@github.com 2>&1 | grep -q "successfully authenticated"
AUTH_SUCCESS=$?

if [ $AUTH_SUCCESS -ne 0 ]; then
    # User does not have SSH access or keys are not set up.
    # Exit silently per requirements.
    exit 0
fi

# 2. Clone and Setup
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "\033[1;36m[SOURCE]\033[0m SSH Access detected. Cloning source repository..."
    
    # Clone the parent repository
    git clone "$REPO_URL" "$TARGET_DIR"
    if [ $? -ne 0 ]; then exit 0; fi
    
    cd "$TARGET_DIR" || exit 0

    # Initialize and update submodules recursively
    echo -e "\033[1;36m[SOURCE]\033[0m Initializing submodules..."
    git submodule update --init --recursive
    
    # Ensure everything is tracking main correctly
    echo -e "\033[1;36m[SOURCE]\033[0m Setting upstream tracking for main..."
    git checkout main
    git branch -u origin/main
    
    # Update submodules to their remote main heads
    git submodule foreach --recursive 'git checkout main && git branch -u origin/main || : '

    echo -e "\033[1;32m[SUCCESS]\033[0m Source environment ready at $TARGET_DIR"
else
    # Directory already exists, just ensure submodules are healthy
    cd "$TARGET_DIR" || exit 0
    echo -e "\033[1;34m[SOURCE]\033[0m Source directory exists. Syncing submodules..."
    git submodule update --init --recursive --quiet
fi
