#!/bin/bash
# Script: prepare-wsl.sh
# Purpose: Configure WSL for systemd and Tailscale-friendly DNS

echo -e "\033[1;34m[WSL PREP]\033[0m Configuring system environment..."

# 1. Enable Systemd and Network Gen in wsl.conf
WSL_CONF="/etc/wsl.conf"
if [ ! -f "$WSL_CONF" ]; then
    touch "$WSL_CONF"
fi

# Use a temp file to build config to avoid partial writes
cat <<EOF > /tmp/wsl.conf
[boot]
systemd=true
[network]
generateResolvConf = false
EOF

if ! diff -q /tmp/wsl.conf "$WSL_CONF" > /dev/null 2>&1; then
    cp /tmp/wsl.conf "$WSL_CONF"
    echo -e "\033[1;33m[NOTICE]\033[0m wsl.conf updated. You must run 'wsl --shutdown' from Windows to apply changes."
fi

# 2. Fix DNS for Tailscale (MagicDNS)
# Remove the auto-generated symlink and replace with Tailscale resolver
if [ -L /etc/resolv.conf ]; then
    rm /etc/resolv.conf
    echo "nameserver 100.100.100.100" > /etc/resolv.conf
    echo "search tailscale.internal" >> /etc/resolv.conf
    echo -e "\033[1;32m[OK]\033[0m /etc/resolv.conf updated for Tailscale."
fi
