---
title: Project structure
description: Where things live in the repository.
intro: Config, content, components and styles each have one home.
type: reference
sidebar:
  order: 3
---

```text
astro.config.ts            Starlight, sitemap, CSP and the sidebar built from docs.config.ts
functions/api/feedback.ts  "Was this helpful?" endpoint (Pages Function, Resend)
public/                    _headers, _redirects, favicon, fonts
scripts/                   validate-docs.mjs, validate-secrets.cjs
src/
  config/
    site.config.ts         name, url, description
    docs.config.ts         tabs, groups, links, UI strings
    i18n.config.ts         locales
    csp.config.ts          Content-Security-Policy sources
  content/docs/docs/       articles, one folder per group
  components/docs/         Starlight overrides (Header, Sidebar, PageTitle, Footer, ...)
  lib/docs.ts              helpers used by the components
  pages/docs/index.astro   the docs home (card grid)
  styles/starlight.css     look: fonts, accent, type scale, layout
  test/                    Playwright specs (layout, axe, CSP, search)
```

## Rules of thumb

- Structure and wording come from `docs.config.ts`, never from the components.
- Every group folder needs an `index.mdx` and every article needs `intro` and `type`; `pnpm validate:docs` enforces both.
- Colors and fonts are CSS variables in `starlight.css`; do not hardcode them in components.
