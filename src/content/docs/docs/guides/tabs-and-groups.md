---
title: Tabs and groups
description: Organize the docs into tabs and groups.
intro: A tab owns groups; a group is a folder of articles.
type: how-to
sidebar:
  order: 3
---

Both are defined in `src/config/docs.config.ts`.

## Groups

```ts
{
  id: "guides",                       // folder: src/content/docs/docs/guides/
  title: { en: "Guides" },
  description: { en: "How to do things." },
  icon: "book-open",                  // any lucide icon name
  popular: [{ label: { en: "Write content" }, href: "/docs/guides/write-content/" }],
}
```

Order matters: the sidebar sections follow the order of `groups`.

## Tabs

```ts
{ id: "reference", label: { en: "Reference" }, groups: ["reference"], landing: "reference" }
```

- `groups` lists the groups the tab's sidebar shows. A tab with one group shows its articles directly, without a heading.
- `landing` is the path below `/docs/` the tab opens. Leave it out for the first tab: it opens the docs home.
- A page belongs to the tab that lists its group; unknown paths fall back to the first tab.

## Check

Run `pnpm validate:docs`: it fails when a tab lists an unknown group, a group has no `index.mdx`, or an article sits in a folder that is not a group.
