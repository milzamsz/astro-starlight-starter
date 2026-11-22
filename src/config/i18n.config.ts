/**
 * I18n configuration — the single source of truth for locales.
 *
 * Astro's `i18n` routing and the sitemap (astro.config.ts), the docs helpers
 * (src/lib/docs.ts) and the docs UI strings (src/config/docs.config.ts) derive from this
 * file. The default locale lives at /docs/; others at /<code>/docs/ with content in
 * src/content/docs/<code>/docs/. See "Add a language" in the guide.
 */

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const i18nConfig = {
  locales,
  defaultLocale,
  /** Human-readable names, used by the language menu (shown once there are two locales) */
  localeLabels: { en: "English" } satisfies Record<Locale, string>,
  /** BCP-47 tags for hreflang / sitemap */
  localeTags: { en: "en-US" } satisfies Record<Locale, string>,
  routing: { prefixDefaultLocale: false },
};

export default i18nConfig;
