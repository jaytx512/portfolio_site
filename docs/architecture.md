# Architecture

## Overview
- Static, content-first portfolio built with Astro and Tailwind CSS.
- No backend services or database by default.

## Key Directories
- `src/pages/`: Route-based pages.
- `src/layouts/`: Shared layout wrappers.
- `src/data/`: Structured content (projects, site details).
- `src/styles/`: Global styles and Tailwind entrypoint.
- `public/`: Static assets served as-is.

## Rendering Model
- Fully static HTML output with modern CSS and lightweight client behavior.
- JavaScript is kept minimal; add islands only when needed.

## Data Flow
- Content is sourced from `src/data/` and rendered at build time.
- If CMS or API integrations are added later, prefer build-time fetches or server islands.
