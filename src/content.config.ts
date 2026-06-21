import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper for any string that must exist in both languages.
const bilingual = z.object({ en: z.string(), es: z.string() });

// Portfolio of products. One YAML/JSON file per product in src/content/products/.
// Adding a product = drop one file here + its images in src/assets/products/<slug>/.
const products = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      status: z.enum(['live', 'coming-soon']),
      name: bilingual,
      tagline: bilingual,
      hero: z.object({ headline: bilingual, subtitle: bilingual }),
      overview: bilingual,
      audiences: z.array(bilingual).default([]),
      features: z
        .array(
          z.object({
            title: bilingual,
            desc: bilingual,
            icon: z.string(),
            // Each feature can carry a screenshot that backs it up (zig-zag rows).
            image: image().optional(),
          })
        )
        .default([]),
      supportFeatures: z.array(bilingual).default([]),
      differentiators: z.array(bilingual).default([]),
      // Concrete gains by area (time saved, communication, etc.). Each carries a
      // short qualitative highlight pill — no invented figures.
      benefits: z
        .array(
          z.object({
            icon: z.string(),
            area: bilingual,
            benefit: bilingual,
            highlight: bilingual,
          })
        )
        .default([]),
      techNotes: z.array(bilingual).default([]),
      honestScope: z.array(bilingual).default([]),
      tags: z.array(bilingual).default([]),
      // Optional per-product brand colors for the detail page. Falls back to the
      // site theme when omitted, so each product can carry its own identity.
      brand: z
        .object({
          color: z.string(),
          colorDark: z.string(),
          accent: z.string(),
        })
        .optional(),
      // Cover/hero image is optional; products without one fall back to a
      // gradient + Material Symbol icon (same look as the home cards).
      image: image().optional(),
      icon: z.string().optional(),
      gradient: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), caption: bilingual }))
        .optional(),
      // Generic detail-page buttons (Telegram/WhatsApp/contact/etc.).
      actions: z
        .array(
          z.object({
            label: bilingual,
            url: z.string(),
            variant: z.enum(['primary', 'telegram', 'whatsapp', 'secondary']).default('primary'),
          })
        )
        .default([]),
      // Sinnet-specific CTAs (demo / live portal / contact).
      ctas: z
        .object({
          demoUrl: z.string(),
          liveUrl: z.string(),
          contactUrl: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { products };
