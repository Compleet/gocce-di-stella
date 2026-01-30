#!/bin/bash
# Deploy Gocce di Stella to frrn.life/gocce
# Usage: ./deploy.sh

set -e

echo "🌟 Building Gocce di Stella..."
npm run build

echo "📦 Deploying to frrn.life/gocce..."
sudo cp -r dist/* /var/www/frrn.life/gocce/
sudo chown -R www-data:www-data /var/www/frrn.life/gocce

echo "✅ Deployed to https://frrn.life/gocce"
echo "   Italian: https://frrn.life/gocce/it"
echo "   English: https://frrn.life/gocce/en"
