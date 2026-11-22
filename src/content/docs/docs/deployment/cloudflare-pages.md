---
title: Cloudflare Pages
description: Deploy the docs to Cloudflare Pages.
intro: Build with pnpm and publish dist/ with Wrangler.
type: how-to
sidebar:
  order: 1
---

## One-off deploy

```bash
pnpm build
pnpm exec wrangler pages project create <your-project> --production-branch main
pnpm exec wrangler pages deploy dist --project-name <your-project> --branch main
```

`wrangler.jsonc` points Pages at `./dist` and includes `functions/` automatically (the feedback endpoint). Change `name` in it to your project name.

## Git integration

In the Cloudflare dashboard connect the repository, set the build command to `pnpm build` and the output directory to `dist`. The build reads `PNPM_VERSION` from `wrangler.jsonc`; keep it equal to `packageManager` in `package.json`.

## Domain

Add your domain under **Custom domains** in the project. Set `url` in `src/config/site.config.ts` to the same address so canonical links and the sitemap are right.

## Headers and CSP

`public/_headers` carries the header-only security directives; the script and style policy is a `<meta>` tag with hashes, generated at build time (`astro.config.ts` and `src/config/csp.config.ts`). The `cspInlineScriptHashes` integration hashes the inline scripts and styles Starlight and our components emit. Add a new third-party origin in `csp.config.ts`, not in `_headers`.

## CI

`.github/workflows/ci.yml` runs lint, unit tests, build, Playwright and Lighthouse. `release.yml` deploys on a `v*` tag and needs the repository secrets `CF_API_TOKEN` and `CF_ACCOUNT_ID`.
