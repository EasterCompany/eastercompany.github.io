# easter.company

This repository contains the source code for the easter.company website.

## Development

The website is built using simple HTML files and a universal JavaScript application (`dex.js`) that provides styling and interactive features.

### Build Process

To make changes to the JavaScript application, edit the files in `/source/dex/`.

The build system relies on `esbuild`. To install it, you need to have Go installed and then run:
```bash
go install github.com/evanw/esbuild/cmd/esbuild@latest
```

To build the site, run the following script from the repository root:
```bash
./easter.company/scripts/build.sh
```

This script will:
1. Bundle all JavaScript from `/source/dex/` into `/dex.js`.
2. Automatically inject the required `<script>` tag into all `.html` files in the root directory.
