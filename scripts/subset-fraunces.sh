#!/usr/bin/env bash
# Rebuilds src/assets/fonts/fraunces-subset.woff2 from @fontsource-variable/fraunces.
# Keeps opsz, limits wght to 400-600, fixes SOFT=50 and WONK=0, and keeps Latin-1 plus common punctuation.
# Needs: pip install fonttools brotli
set -euo pipefail
SRC=node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2
TMP=$(mktemp -d)
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('$SRC'); f.flavor=None; f.save('$TMP/fr.ttf')"
fonttools varLib.instancer "$TMP/fr.ttf" wght=400:600 SOFT=50 WONK=0 -o "$TMP/fr-inst.ttf"
pyftsubset "$TMP/fr-inst.ttf" \
  --unicodes="U+0020-007E,U+00A0-00FF,U+2018,U+2019,U+201C,U+201D,U+2026,U+2013,U+00B7,U+2192,U+2022" \
  --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk" \
  --flavor=woff2 --output-file=src/assets/fonts/fraunces-subset.woff2
rm -rf "$TMP"
