import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper for any string that must exist in both languages.
const bilingual = z.object({ es: z.string(), en: z.string() });

const products = defineCollection({
  // Each product lives in its own self-contained folder:
  //   src/content/products/<slug>/index.md   (+ cover.jpg, gallery images)
  // The slug is derived from the folder name (see generateId).
  loader: glob({
    pattern: '**/index.{md,mdx}',
    base: './src/content/products',
    generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      status: z.enum(['available', 'coming-soon']),
      name: bilingual,
      tagline: bilingual,
      // Long description shown on the detail page. Basic HTML is allowed
      // (rendered with set:html), e.g. <strong>, <br>.
      description: bilingual,
      features: z.array(bilingual).default([]),
      tags: z.array(z.string()).default([]),
      image: image(),
      gallery: z.array(image()).optional(),
      links: z
        .object({
          telegram: z.string().optional(),
          whatsapp: z.string().optional(),
          demo: z.string().optional(),
          web: z.string().optional(),
        })
        .optional(),
      seo: z
        .object({
          title: bilingual,
          description: bilingual,
        })
        .optional(),
    }),
});

export const collections = { products };
