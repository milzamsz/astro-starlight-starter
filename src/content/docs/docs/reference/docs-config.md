---
title: docs.config.ts
description: Every option in src/config/docs.config.ts.
intro: Tabs, groups, links, strings and a few switches.
type: reference
sidebar:
  order: 1
---

| Option | Type | What it does |
| --- | --- | --- |
| `badge` | `string` | Small label next to the logo ("Docs") |
| `tabs[]` | `DocsTab` | `id`, `label`, `groups` (group ids) and optional `landing` (path below `/docs/`) |
| `groups[]` | `DocsGroup` | `id` (folder name), `title`, `description`, `icon` (lucide), `popular` (links on the home card) |
| `links[]` | `DocsLink` | Icon links at the bottom of the sidebar: `icon` (lucide), `label`, `href` |
| `ui` | per locale | Interface strings: search, feedback widget, content-type labels, home title and tagline |
| `untranslated` | `string[]` | Paths below `/docs/` that exist in the default locale only |
| `helpHref` | `string` | Target of "Still need help?" |

`Localized` values are objects keyed by locale (`{ en: "Guides" }`); with more locales TypeScript requires every key.

The file must stay erasable TypeScript (no enums): `scripts/validate-docs.mjs` imports it directly.

See [Tabs and groups](/docs/guides/tabs-and-groups/) and [Add a language](/docs/guides/add-a-language/).
