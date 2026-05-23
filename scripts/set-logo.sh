#!/bin/bash
set -euo pipefail
SRC="${1:?Pass your logo PNG path: ./scripts/set-logo.sh ./my-logo.png}"
cp "$SRC" public/logo.png
cp "$SRC" src/assets/srl-logo.png
echo "Logo updated."
