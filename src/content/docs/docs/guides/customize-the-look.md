---
title: Customize the look
description: Brand color, fonts, logo and widths.
intro: Change the accent color, fonts and logo in one place each.
type: how-to
sidebar:
  order: 2
---

## Brand color

The starter ships with a violet accent. Change four values in `src/styles/starlight.css`:

```css
:root {
  --docs-accent: #6e56cf;          /* lines, tab underline, active bars */
  --docs-accent-text: #b4a0ff;     /* accent as text on dark: keep 4.5:1 */
  --docs-accent-contrast: #fff;    /* text on a filled accent (theme toggle) */
}
:root[data-theme="light"] {
  --docs-accent: #6e56cf;
  --docs-accent-text: #5b45b8;     /* accent as text on light: keep 4.5:1 */
}
```

Text uses `--docs-accent-text`, not `--docs-accent`, because a color that works as a line often fails contrast as text. Run `pnpm test:e2e` after changing it; the axe tests check light and dark.

### Colors to try

Contrast was checked for each: the text colors pass 4.5:1 on the dark sidebar, the page and the accent tint, and `On accent` passes on the filled toggle.

| Color | `--docs-accent` | Dark text | Light text | `--docs-accent-contrast` |
| --- | --- | --- | --- | --- |
| Violet (default) | `#6e56cf` | `#b4a0ff` | `#5b45b8` | `#fff` |
| Indigo | `#3e63dd` | `#9eb1ff` | `#3a5bc7` | `#fff` |
| Teal | `#0d9488` | `#5eead4` | `#0f766e` | `#111` |
| Amber | `#d97706` | `#fbbf24` | `#92400e` | `#111` |
| Rose | `#e11d48` | `#fda4af` | `#be123c` | `#fff` |

## Fonts

Geist and Geist Mono are self-hosted in `public/fonts/` and declared at the top of `starlight.css`. To switch, add your woff2 files, change the `@font-face` rules and set `--sl-font` / `--sl-font-mono`. Update the preload link in `astro.config.ts` (`head`) so the body font loads before first paint.

## Logo and favicon

`src/components/docs/SiteTitle.astro` renders a monogram, the site name and the badge from `docsConfig.badge`. Replace it with an `<img>` for a real logo, and swap `public/favicon.svg`.

## Widths and type scale

`--docs-toc-width` (right column) and `--sl-content-width` (article) are set in `starlight.css`, next to the heading sizes (32/24/20/16 px).
