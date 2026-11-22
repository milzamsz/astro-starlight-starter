/**
 * Docs configuration — the single source of truth for the /docs layout
 * (see "Configure the layout" in the docs).
 *
 *   tabs    top tabs; each lists the groups its sidebar shows
 *   groups  one folder per group in src/content/docs/docs/<id>/ (needs an index.mdx),
 *           shown as a card on /docs/ and as a sidebar section. Order matters: it is
 *           the order of the sidebar entries built in astro.config.ts.
 *   links   icon links at the bottom of the sidebar
 *   ui      interface strings per locale
 *
 * Keep this file erasable TypeScript (no enums): scripts/validate-docs.mjs imports it.
 */
import type { Locale } from "./i18n.config";


export type Localized = Record<Locale, string>;

export const docTypes = ["overview", "quickstart", "how-to", "tutorial", "reference"] as const;
export type DocType = (typeof docTypes)[number];

export interface DocsGroup {
  id: string;
  title: Localized;
  description: Localized;
  /** lucide icon name */
  icon: string;
  /** links shown on the group's card on /docs/ */
  popular: { label: Localized; href: string }[];
}

export interface DocsTab {
  id: string;
  label: Localized;
  /** group ids whose sections this tab's sidebar shows */
  groups: string[];
  /** path below /docs/ that the tab opens ("" = docs home) */
  landing?: string;
}

export interface DocsLink {
  /** lucide icon name */
  icon: string;
  label: Localized;
  href: string;
}

export interface DocsUi {
  docs: string;
  homeTitle: string;
  homeTagline: string;
  search: string;
  helpful: string;
  yes: string;
  no: string;
  needHelp: string;
  missing: string;
  send: string;
  thanks: string;
  failed: string;
  all: string;
  article: string;
  filterBy: string;
  language: string;
  sections: string;
  types: Record<DocType, string>;
}

export const docsConfig = {
  /** Small badge next to the logo in the sidebar */
  badge: "Docs",
  tabs: [
    {
      id: "guide",
      label: { en: "Guide" },
      groups: ["getting-started", "guides", "deployment"],
    },
    { id: "reference", label: { en: "Reference" }, groups: ["reference"], landing: "reference" },
  ] as DocsTab[],
  groups: [
    {
      id: "getting-started",
      title: { en: "Get started" },
      description: { en: "What this starter gives you and how to run it." },
      icon: "rocket",
      popular: [
        { label: { en: "Overview" }, href: "/docs/getting-started/overview/" },
        { label: { en: "Quick start" }, href: "/docs/getting-started/quick-start/" },
        { label: { en: "Project structure" }, href: "/docs/getting-started/project-structure/" },
      ],
    },
    {
      id: "guides",
      title: { en: "Guides" },
      description: { en: "Write content, set up tabs and groups, change the look, add a language." },
      icon: "book-open",
      popular: [
        { label: { en: "Write content" }, href: "/docs/guides/write-content/" },
        { label: { en: "Customize the look" }, href: "/docs/guides/customize-the-look/" },
        { label: { en: "Add a language" }, href: "/docs/guides/add-a-language/" },
      ],
    },
    {
      id: "deployment",
      title: { en: "Deployment" },
      description: { en: "Ship to Cloudflare Pages and set the secrets the feedback widget needs." },
      icon: "cloud",
      popular: [
        { label: { en: "Cloudflare Pages" }, href: "/docs/deployment/cloudflare-pages/" },
        { label: { en: "Environment variables" }, href: "/docs/deployment/environment-variables/" },
      ],
    },
    {
      id: "reference",
      title: { en: "Reference" },
      description: { en: "Every option in docs.config.ts, the frontmatter fields and the scripts." },
      icon: "file-text",
      popular: [
        { label: { en: "docs.config.ts" }, href: "/docs/reference/docs-config/" },
        { label: { en: "Frontmatter" }, href: "/docs/reference/frontmatter/" },
        { label: { en: "Scripts" }, href: "/docs/reference/scripts/" },
      ],
    },
  ] satisfies DocsGroup[],
  links: [
    { icon: "github", label: { en: "GitHub" }, href: "https://github.com/milzamsz/astro-starlight-starter" },
    { icon: "globe", label: { en: "Website" }, href: "https://example.com" },
  ] satisfies DocsLink[],
  ui: {
    en: {
      docs: "Docs",
      homeTitle: "Documentation",
      homeTagline: "Guides, reference and answers for your project.",
      search: "Search the docs",
      helpful: "Was this helpful?",
      yes: "Yes",
      no: "No",
      needHelp: "Still need help? Open an issue",
      missing: "What was missing or wrong? (optional)",
      send: "Send",
      thanks: "Thanks for your feedback.",
      failed: "Could not send feedback. Please try again later.",
      all: "All",
      article: "Article",
      filterBy: "Filter by type",
      language: "Language",
      sections: "Sections",
      types: {
        overview: "Overview",
        quickstart: "Quickstart",
        "how-to": "How-to",
        tutorial: "Tutorial",
        reference: "Reference",
      },
    },
  } satisfies Record<Locale, DocsUi>,
  /** Paths below /docs/ that exist only in the default locale (links and the language menu stay unprefixed) */
  untranslated: [] as string[],
  /** Where "Still need help?" points */
  helpHref: "https://github.com/milzamsz/astro-starlight-starter/issues",
};
