---
title: Add a language
description: Add a second locale to the docs.
intro: A locale needs a config entry, strings, a content folder and a home page.
type: how-to
sidebar:
  order: 4
---

Example: add Indonesian (`id`). The default locale stays at `/docs/`; the new one lives at `/id/docs/`.

1. **Locale.** In `src/config/i18n.config.ts` add `"id"` to `locales` and entries to `localeLabels` and `localeTags`.
2. **Strings.** In `src/config/docs.config.ts` add `id` to every `Localized` value (titles, descriptions, labels) and a `ui.id` block. TypeScript points at what is missing.
3. **Content.** Copy `src/content/docs/docs/` to `src/content/docs/id/docs/` and translate. Keep the same folder names; the `index.mdx` imports go one folder deeper (`../../../../../components/...`).
4. **Home page.** Create `src/pages/id/docs/index.astro`:

   ```astro
   ---
   import DocsHome from "../../../components/docs/DocsHome.astro";
   ---
   <DocsHome locale="id" />
   ```

5. **Pages that exist in one language only.** List their paths in `untranslated` in `docs.config.ts`, for example `["/docs/reference"]`. Links and the language menu then stay unprefixed for them.

The language menu appears automatically once there are two locales. `pnpm validate:docs` checks every locale folder.
