---
title: Quick start
description: Install, run and build the starter.
intro: Create your repo from the template, install, and see the docs in the browser.
type: quickstart
sidebar:
  order: 2
---

You need Node 26 and pnpm 12 (see `.node-version` and `packageManager` in `package.json`).

## 1. Create your repo

Use **Use this template** on GitHub, or:

```bash
gh repo create my-docs --template milzamsz/astro-starlight-starter --clone
cd my-docs
```

## 2. Install and run

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321. The root redirects to `/docs/`.

## 3. Make it yours

1. Set the name and URL in `src/config/site.config.ts`.
2. Edit groups, tabs and links in `src/config/docs.config.ts`.
3. Replace the articles under `src/content/docs/docs/`.
4. Pick your brand color: [Customize the look](/docs/guides/customize-the-look/).

## 4. Check and build

```bash
pnpm lint
pnpm test
pnpm build
```

`pnpm build` also builds the search index. Preview the result with `pnpm preview`.

## Next steps

[Write content](/docs/guides/write-content/) and [deploy to Cloudflare Pages](/docs/deployment/cloudflare-pages/).
