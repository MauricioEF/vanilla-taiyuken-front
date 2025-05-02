#!/bin/bash
# build.sh — Compiles /src into deployable /public directory

set -e  # Exit immediately if a command fails

echo "🧼 Cleaning public/ folder..."
rm -rf public
mkdir -p public/assets/css public/assets/js public/components

echo "📄 Building root index.html..."
# Rewrite links from /pages/about.html → /about/
sed -e 's|href="/pages/index.html"|href="/"|g' \
    -e 's|href="/pages/\([^"]*\)\.html"|href="/\1/"|g' \
    src/pages/index.html > public/index.html

echo "📄 Building internal pages..."
for file in src/pages/*.html; do
  name=$(basename "$file" .html)
  if [ "$name" != "index" ]; then
    mkdir -p "public/$name"
    sed -e 's|href="/pages/index.html"|href="/"|g' \
    -e 's|href="/pages/\([^"]*\)\.html"|href="/\1/"|g' \
    "$file" > "public/$name/index.html"
  fi
done



echo "🎨 Copying assets (CSS/JS)..."
cp -r src/assets/css/* public/assets/css/
cp -r src/assets/js/* public/assets/js/

echo "🔁 Building reusable components..."

for component in src/components/*; do
  name=$(basename "$component")
  mkdir -p "public/components/$name"

  # ✅ Rewrite hrefs in HTML
  if [ -f "$component/$name.html" ]; then
    sed -e 's|href="/pages/index.html"|href="/"|g' \
        -e 's|href="/pages/\([^"]*\)\.html"|href="/\1/"|g' \
        "$component/$name.html" > "public/components/$name/$name.html"
  fi

  # ✅ Copy CSS and JS without rewriting
  [ -f "$component/$name.css" ] && cp "$component/$name.css" "public/components/$name/"
  [ -f "$component/$name.js" ] && cp "$component/$name.js" "public/components/$name/"
done

echo "✅ Build complete! Deployed structure is ready in /public/"