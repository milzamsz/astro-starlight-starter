---
title: Frontmatter
description: The frontmatter fields articles use.
intro: Starlight's fields plus intro and type.
type: reference
sidebar:
  order: 2
---

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | Page title and sidebar label |
| `description` | Yes | Meta description; also the fallback intro |
| `intro` | Yes (validated) | One sentence under the title and on article cards |
| `type` | Yes (validated) | `overview`, `quickstart`, `how-to`, `tutorial` or `reference` |
| `sidebar.order` | No | Sorts articles inside a group; `0` is the group's index |
| `sidebar.label` | No | Overrides the sidebar text (the group index uses "Start here") |

`intro` and `type` are optional in the schema (`src/content.config.ts`) but `pnpm validate:docs` requires them so every card and label is filled.

`type: overview` hides the type badge under the title; the other types show it and appear as filter chips on the group page.

Other Starlight fields (`draft`, `lastUpdated`, `tableOfContents`, `head`) work as documented by Starlight.
