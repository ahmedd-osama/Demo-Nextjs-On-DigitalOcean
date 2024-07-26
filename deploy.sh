#!/bin/bash

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
