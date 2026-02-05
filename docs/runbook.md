# Runbook

## Common Tasks
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Format check: `npm run format`
- Format write: `npm run format:write`

## Troubleshooting
- Node version mismatch: use Node 20+.
- Install issues: delete `node_modules` and `package-lock.json`, then run `npm install`.
- Tailwind styles missing: confirm `src/styles/global.css` is imported in `src/layouts/BaseLayout.astro`.
