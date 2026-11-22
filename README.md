# astro-starlight-starter

A docs-site starter: **Astro 7 + Starlight** with a Tebar / GitHub-Docs style layout.

**Live demo: https://starlight-starter.pages.dev**

- Top **tabs** (Guide | Reference), a sidebar with logo, search, the current tab's sections, language menu, links and a light/dark toggle, and an "On this page" column
- **Groups** with landing pages, card home page, content types (overview, quickstart, how-to, tutorial, reference) with a type filter
- Breadcrumbs, a **"Was this helpful?"** widget backed by a Cloudflare Pages Function (Resend)
- Geist (self-hosted), violet accent that you can swap in one place, light + dark, WCAG AA checked
- Strict hash-based CSP, `pnpm validate:docs` (frontmatter + links), unit, axe and CSP tests, Lighthouse budgets

## Use it

1. Click **Use this template** on GitHub, or `gh repo create my-docs --template milzamsz/astro-starlight-starter`.
2. `pnpm install && pnpm dev`
3. Edit `src/config/site.config.ts` (name, and `url`: it is the demo address until you change it) and `src/config/docs.config.ts` (tabs, groups, links, strings).
4. Replace the articles in `src/content/docs/docs/<group>/` (each group needs an `index.mdx`).
5. Set your brand color in `src/styles/starlight.css` (`--docs-accent`, `--docs-accent-text`).

```bash
pnpm dev            # http://localhost:4321
pnpm lint           # oxlint, eslint, stylelint, astro check, validate:docs, secret scan
pnpm test           # unit tests
pnpm build && pnpm test:e2e   # layout, axe (light + dark), CSP, search
pnpm cf:deploy      # wrangler pages deploy dist
```

The docs under `/docs` explain every option. Requirements: Node 26, pnpm 12.

## License

MIT
