# Norexa - Premium Affiliate Website

A fashion affiliate platform built with React, Vite, and highly optimized Vanilla CSS.

## Features
- **GrabOn Style Coupon Cards**: High-conversion component architecture natively injecting hardcoded dynamic affiliate links.
- **Top Picks Layout**: Fully responsive CSS Grid architecture (3-2-1 layout).
- **Offline Assets**: Base64 encoded SVGs native to the data layer to fully bypass external CDN rate limiting and scraping shields.
- **Zero JS Redirects**: Links dynamically build out standard semantic `<a>` tags targeting precise fashion endpoints on Amazon, Myntra, H&M, and Ajio.

## Quick Start
```bash
npm install
npm run dev
```

## Deployment Info
This project relies on the Vite build environment. 
- **Build command**: `npm run build`
- **Output Directory**: `dist`
*(Note: Attempting to deploy this natively without building the output via the `dist` flag on Vercel will attempt to execute raw JSX, which is unsupported!)*
