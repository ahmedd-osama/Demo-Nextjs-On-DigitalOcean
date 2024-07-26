#!/bin/bash

# Enable debugging
set -x

# Add yarn and pm2 to PATH
export PATH="$HOME/.yarn/bin:$PATH:/usr/local/bin"

# Print current directory
echo "Current directory: $(pwd)"

# Check if node, yarn, and pm2 are installed
node -v
yarn -v
pm2 -v

# Pull the latest changes from the main branch
git pull origin main

# Install dependencies
yarn install

# Build the Next.js application
yarn build

# Restart the application using PM2
pm2 restart 0

# Log deployment time
echo "Deployment completed at $(date)" >> deployment.log

# Disable debugging
set +x
