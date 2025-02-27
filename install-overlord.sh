#!/bin/bash
read -p -r "Name your Overlord project: " project_name
git clone git@github.com:EasterCompany/Overlord.git "$project_name" --branch DEV --depth 1
rm -rf "$project_name/.git"
