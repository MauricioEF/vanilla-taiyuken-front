#!/bin/bash
# build.sh - Converts /src to deployable /public

echo "🧼 Cleaning public/ folder..."
rm -rf public
mkdir -p public/assets/css public/assets/js public/components

echo "📄 Building pages..."

# Preserve CNAME
cp src/CNAME public/CNAME
cp src/pages/index.html public/index.html

for file in src/pages/*.html; do
  name=$(basename "$file" .html)
  if [ "$name" != "index" ]; then
    mkdir -p "public/$name"
    cp "$file" "public/$name/index.html"
  fi
done



echo "🎨 Copying styles, scripts, components..."
cp -r src/styles/* public/assets/css/
cp -r src/scripts/* public/assets/js/
cp -r src/components/* public/components/

echo "✅ Build complete: public/ is ready to deploy!"