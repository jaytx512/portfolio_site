# Jared Shadduck Portfolio

## Overview
A fast, static portfolio site showcasing web apps and marketing sites built by Jared Shadduck. Designed for potential clients and employers, focused on performance and clarity.

## Setup
1. Install Node.js 20+ and npm.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`

## Scripts
- `npm run dev`: Start local dev server.
- `npm run build`: Create production build.
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run ESLint.
- `npm run typecheck`: Run Astro type checks.
- `npm run format`: Check formatting with Prettier.
- `npm run format:write`: Auto-format files.

## Environment Variables
Copy `.env.example` to `.env` and adjust as needed.
- `PUBLIC_SITE_URL`: Public base URL used for metadata and links.

## Deploy
1. Run `npm run build`.
2. Upload the `dist/` folder to your static host.
3. Set `PUBLIC_SITE_URL` in your hosting provider's environment settings.

## Notes
- Project data lives in `src/data/`.
- Global styles are defined in `src/styles/global.css`.
