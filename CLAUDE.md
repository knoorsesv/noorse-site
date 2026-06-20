# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Website for K. Noorse S.V., a Belgian football club. Live at [noorse.be](https://www.noorse.be). Deployed via Netlify.

## Commands

```bash
pnpm start:dev          # Dev server using Contentful staging environment
pnpm start:master       # Dev server using Contentful production environment
pnpm start:storybook    # Storybook on port 6006
pnpm start              # Both dev server and Storybook concurrently

pnpm build              # Production build
pnpm lint               # Run all linters (astro check + eslint) concurrently
pnpm format             # Prettier + sort JSON data files

pnpm update-vv-data     # Fetch fresh Voetbal Vlaanderen data → data/vv-responses.json

# Tests (require a running server at localhost:4321 via `pnpm build && pnpm preview`)
pnpm test               # All Playwright tests
pnpm test:func          # Functional tests only (no screenshot comparison)
pnpm test:local         # Local Playwright tests without starting server
pnpm test:storybook     # Storybook interaction tests
```

## Architecture

**Framework**: Astro 6 with React islands (`client:visible`). Astro pages handle build-time data fetching; React components handle all UI rendering.

**Two data sources:**

1. **Contentful CMS** — content (news, sponsors, events, teams, board members, pages). The Contentful environment is controlled by `CONTENTFUL_ENV` env var (`staging` in dev, `master` in production).
   - Client setup: `src/lib/contentful.ts`
   - Type definitions: `src/data/contentful/types.d.ts`
   - Data fetching: `src/data/contentful/get-entries.ts` — `getEntries()` + `getPage()`
   - Mapping to app types: `src/data/contentful/mapping.ts`

2. **Voetbal Vlaanderen (VV) API** — match schedules and rankings. This is pre-fetched and committed as `data/vv-responses.json` (run `pnpm update-vv-data` to refresh). Team config lives in `data/calendar-config.json`.
   - Reading: `src/utils/get-vv-data.ts`
   - Fetching script: `fetch-vv.mjs`

**Layout chain:**

- `src/layouts/Page.astro` — base HTML shell, imports global CSS/fonts
- `src/layouts/Layout.astro` — wraps `Page.astro`, fetches sponsors from Contentful, renders the full site shell (navbar + footer) via `src/react/pages/layout.tsx`

**React component structure** (`src/react/`):

- `pages/` — full page components (home, team, category, news, calendar, etc.)
- `layout/` — `Container` and `Section` primitives
- `links/` — `ExternalLink`, `EmailLink`, `DocumentLink`
- `hooks/` — `useBreakpoint` for responsive logic
- `icons/` — SVG icons
- `types/` — TypeScript type definitions for app domain models
- `index.ts` — barrel export for all shared components

**Page routing** (`src/pages/`):

- `[category].astro` — dynamic routes per Contentful category (e.g. `/dames`, `/senioren`, `/jeugd`)
- `nieuws/[category]/[title].astro` — news detail pages
- `team/[category]/` — team-specific pages with VV data (games, rankings)
- `info/` — static info pages backed by Contentful `page` content type

**Site navigation** is defined statically in `src/env/constants.ts` (`siteMap`).

**Testing**: Playwright in `tests/` directory. Visual regression uses screenshot snapshots; functional tests cover page behavior. Storybook stories exist alongside every component (`*.stories.tsx`).

**Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`). Global styles in `src/styles/`.
