# Products — How to add a new product

Each product is **one self-contained folder** in this directory. Adding a product
requires **no changes to components or routes** — just create a folder with an
`index.md` and drop in its images. The card on the home page and the bilingual
detail pages (`/products/<slug>` and `/es/productos/<slug>`) are generated
automatically.

## 1. Create the folder

The folder name becomes the URL **slug**:

```
src/content/products/<slug>/
├── index.md        ← the product data (required)
├── cover.jpg       ← main / hero image (required)
└── shot-1.jpg ...  ← optional gallery images
```

Example: `src/content/products/finance-tracker/` → `/products/finance-tracker`.

## 2. Fill in `index.md`

All text is bilingual: every field has `{ es, en }`. The schema is enforced by
Zod (`src/content.config.ts`), so the build fails if something is missing.

```markdown
---
order: 3                     # sort order of the card (lower = first)
status: available            # 'available' | 'coming-soon'
name:
  es: "Nombre del Producto"
  en: "Product Name"
tagline:                     # short line for the card
  es: "Frase corta."
  en: "Short line."
description:                 # long text for the detail page (basic HTML ok: <strong>, <br>)
  es: "Descripción larga..."
  en: "Long description..."
features:                    # bullet list on the detail page (optional)
  - es: "Característica 1"
    en: "Feature 1"
tags: ["Telegram", "n8n"]    # pills (not translated)
image: ./cover.jpg           # main image, optimized by astro:assets
gallery:                     # optional extra images
  - ./shot-1.jpg
  - ./shot-2.jpg
links:                       # all optional — buttons appear only if present
  telegram: "https://t.me/..."
  whatsapp: "https://wa.me/..."
  demo: "https://..."
  web: "https://..."
seo:                         # optional; falls back to name + tagline
  title:
    es: "Título SEO"
    en: "SEO Title"
  description:
    es: "Meta descripción"
    en: "Meta description"
---
```

## Notes

- **Images** must live inside the product folder and be referenced with a
  relative path (`./cover.jpg`). `astro:assets` converts them to responsive WebP.
- **`status: coming-soon`** products show the "In Development / En Desarrollo"
  badge and their card is **not** clickable. Omit `links` for them.
- Re-run `npm run dev` after adding a folder so the content layer picks it up.
