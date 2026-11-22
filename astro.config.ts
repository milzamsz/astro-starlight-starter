import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { siteConfig } from "./src/config/site.config";
import { i18nConfig } from "./src/config/i18n.config";
import { cspSources } from "./src/config/csp.config";
import { docsConfig } from "./src/config/docs.config";
import cspInlineScriptHashes from "./src/integrations/csp-inline-script-hashes";

const { defaultLocale, locales } = i18nConfig;

// One sidebar section per docs group, in the order of docsConfig.groups (the Sidebar
// override relies on it). Entries come from each group's folder under src/content/docs/docs/.
const sidebar = docsConfig.groups.map((g) => ({
  label: g.title[defaultLocale],
  collapsed: false,
  translations: Object.fromEntries(Object.entries(g.title).filter(([code]) => code !== defaultLocale)),
  items: [{ autogenerate: { directory: `docs/${g.id}` } }],
}));

export default defineConfig({
  site: siteConfig.url,
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: i18nConfig.routing.prefixDefaultLocale },
  },
  // The docs home is /docs/ (public/_redirects sends a 301 on Cloudflare; this covers preview/dev).
  redirects: { "/": "/docs/" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    starlight({
      title: siteConfig.name,
      favicon: "/favicon.svg",
      customCss: ["./src/styles/starlight.css"],
      components: {
        SiteTitle: "./src/components/docs/SiteTitle.astro",
        Header: "./src/components/docs/Header.astro",
        PageTitle: "./src/components/docs/PageTitle.astro",
        Sidebar: "./src/components/docs/Sidebar.astro",
        Footer: "./src/components/docs/Footer.astro",
      },
      // Preload the body font so text renders once, in Geist, instead of swapping after first paint.
      head: [
        {
          tag: "link",
          attrs: { rel: "preload", href: "/fonts/geist-variable.woff2", as: "font", type: "font/woff2", crossorigin: "" },
        },
      ],
      sidebar,
    }),
    mdx(),
    sitemap({
      i18n: { defaultLocale, locales: i18nConfig.localeTags },
    }),
    icon(),
    // Starlight renders a few is:inline bootstraps that Astro's CSP doesn't hash.
    cspInlineScriptHashes({
      paths: ["/docs/", ...locales.filter((code) => code !== defaultLocale).map((code) => `/${code}/docs/`)],
    }),
  ],
  build: { format: "directory" },
  markdown: { shikiConfig: { theme: "github-dark", wrap: true } },
  image: { layout: "constrained" },
  security: {
    checkOrigin: true,
    // Hash-based CSP: Astro emits a <meta http-equiv="content-security-policy"> per page with
    // SHA-256 hashes of every inline script/style it renders. Header-only directives
    // (frame-ancestors, …) stay in public/_headers.
    csp: {
      algorithm: "SHA-256",
      directives: cspSources.directives,
      scriptDirective: { resources: cspSources.scriptSources },
      styleDirective: {
        resources: [
          { resource: "'self'", kind: "element" },
          // Inline style *attributes* only: Starlight, expressive-code and Shiki set CSS
          // variables via style="". <style> elements stay hash-locked. (Astro still prints a
          // generic "Shiki + CSP" warning at build; it's expected with this setup.)
          { resource: "'unsafe-inline'", kind: "attribute" },
        ],
      },
    },
  },
});
