---
title: Overview
description: What the starter is and what you get out of the box.
intro: A docs site on Astro and Starlight with tabs, grouped sidebar, search and a feedback widget.
type: overview
sidebar:
  order: 1
---

This starter turns [Starlight](https://starlight.astro.build) into a docs site with a layout in the style of Tebar and GitHub Docs. You write Markdown; the layout, search and navigation come with it.

## What is included

- **Tabs** along the top (Guide, Reference). Each tab owns some groups.
- **A sidebar** with the logo, search, the current tab's sections, a language menu, icon links and a light/dark toggle.
- **Groups**: a folder of articles with a landing page of cards you can filter by content type.
- **Article chrome**: breadcrumbs, an intro line, a content-type label, "On this page" and previous/next links.
- **A feedback widget** ("Was this helpful?") that emails votes through Resend from a Pages Function.
- **Search** (Pagefind) that works under a strict Content-Security-Policy.
- **Checks**: lint, `validate:docs`, unit tests, axe accessibility tests in light and dark, Lighthouse budgets.

## How it fits together

Structure and copy live in `src/config/docs.config.ts`. Articles live in `src/content/docs/docs/<group>/`. The look lives in `src/styles/starlight.css`. See [Project structure](/docs/getting-started/project-structure/).

## Next steps

Follow the [Quick start](/docs/getting-started/quick-start/), then [Write content](/docs/guides/write-content/).
