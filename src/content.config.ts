import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { docTypes } from "./config/docs.config";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      /** One-sentence summary shown under the title and on article cards. */
      intro: z.string().optional(),
      type: z.enum(docTypes).optional(),
    }),
  }),
});

// Starlight UI string overrides (src/content/i18n/<lang>.json); empty = Starlight defaults.
const i18n = defineCollection({
  loader: i18nLoader(),
  schema: i18nSchema(),
});

export const collections = { docs, i18n };
