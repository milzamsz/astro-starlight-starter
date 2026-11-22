---
title: Write content
description: Add articles and groups.
intro: One Markdown file per article, one folder per group.
type: how-to
sidebar:
  order: 1
---

## Add an article

Create `src/content/docs/docs/<group>/<slug>.md`:

```md
---
title: Restore a backup
description: Restore a backup to production or staging.
intro: Restore any backup in a few steps.
type: how-to
sidebar:
  order: 3
---

Your content in Markdown.
```

It appears in the sidebar and on the group's landing page. `sidebar.order` sorts it; articles without one sort by title. See [Frontmatter](/docs/reference/frontmatter/) for every field.

## Add a group

1. Add the group to `groups` in `src/config/docs.config.ts` and to a tab. See [Tabs and groups](/docs/guides/tabs-and-groups/).
2. Create `src/content/docs/docs/<id>/index.mdx`:

```mdx
---
title: Billing
description: Plans, invoices and payment.
intro: Plans, invoices and payment.
type: overview
sidebar:
  order: 0
  label: Start here
---

import ArticleCards from '../../../../components/docs/ArticleCards.astro';

<ArticleCards group="billing" />
```

## Links

Link to other articles with their full path and a trailing slash, for example `[Quick start](/docs/getting-started/quick-start/)`. `pnpm validate:docs` fails on a broken internal link.

## Callouts, tabs and code

Use Starlight's components (asides, tabs, code blocks); they are styled by the same theme. Rename an article to `.mdx` to import components.
