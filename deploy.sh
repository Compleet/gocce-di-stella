#!/bin/bash
# Deploy Gocce di Stella to Cloudflare Pages
# Usage: ./deploy.sh

set -e

echo "🌟 Building Gocce di Stella..."
npm run build

echo "☁️ Deploying to Cloudflare Pages..."
CLOUDFLARE_API_TOKEN="eP9b9ZcVQ_WnU5Ud1MAnVyH6XEbD460RQWKSp5-v" \
CLOUDFLARE_ACCOUNT_ID="05c1c14b179be989445db9f5c2e26763" \
npx wrangler pages deploy dist --project-name=essential-oils-italia

echo "✅ Deployed to https://essential-oils-italia.pages.dev"
echo "   Italian: https://essential-oils-italia.pages.dev/it"
echo "   English: https://essential-oils-italia.pages.dev/en"
