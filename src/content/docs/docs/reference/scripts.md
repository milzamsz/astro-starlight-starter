---
title: Scripts
description: The pnpm scripts.
intro: Develop, check, test and deploy.
type: reference
sidebar:
  order: 3
---

| Script | Does |
| --- | --- |
| `pnpm dev` | Dev server on port 4321 |
| `pnpm build` | Production build into `dist/`, including the search index |
| `pnpm preview` | Serve `dist/` |
| `pnpm lint` | oxlint, eslint (`.astro`), stylelint, `astro check`, Functions types, `validate:docs`, secret scan |
| `pnpm validate:docs` | Frontmatter, group folders and indexes, internal links |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:e2e` | Playwright against `astro preview`: layout, axe in light and dark, CSP, search |
| `pnpm lighthouse` | Lighthouse CI budgets (accessibility and SEO must be 100) |
| `pnpm cf:dev` | `wrangler pages dev dist` (runs the Functions) |
| `pnpm cf:deploy` | `wrangler pages deploy dist` |

Playwright needs a Chromium: run `pnpm exec playwright install chromium`, or set `PW_CHROMIUM_PATH` to an installed Chrome.
