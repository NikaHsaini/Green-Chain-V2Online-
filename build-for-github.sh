#!/bin/bash

# Script pour builder et copier les fichiers à la racine pour GitHub Pages
# MyCrypto Energy - Green Chain™

set -e

echo "🔨 Building project..."
npx vite build --config vite.config.github.ts

echo "📦 Copying files to root..."

# Copier index.html à la racine
cp dist/index.html ./index.html

# Copier les dossiers assets, images, css, js à la racine
cp -r dist/assets ./assets 2>/dev/null || true
cp -r dist/images ./images 2>/dev/null || true
cp -r dist/css ./css 2>/dev/null || true
cp -r dist/js ./js 2>/dev/null || true
cp dist/.nojekyll ./.nojekyll 2>/dev/null || true

echo "✅ Build complete! Files are now at the root:"
ls -la | grep -E "(index.html|assets|images|css|js|.nojekyll)"

echo ""
echo "🚀 Ready for GitHub Pages!"
echo "   - index.html is at the root"
echo "   - All assets are copied"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Deploy to GitHub Pages'"
echo "3. git push"
