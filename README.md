# defriction — Landing Page

Marketing site for **defriction**, a digital automation studio. Built with
[Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

The site is bilingual (English + Spanish) and statically generated.

## Routes

| Path  | Language |
| :---- | :------- |
| `/`   | English  |
| `/es` | Spanish  |

All copy lives in a single dictionary at [`src/i18n/ui.ts`](src/i18n/ui.ts).
Each component receives a `lang` prop and pulls its strings from there, so
adding or editing text means editing that one file.

## Project structure

```text
/
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/      # Page sections (Hero, Services, FAQ, …)
│   ├── i18n/ui.ts       # All translatable copy (en / es)
│   ├── layout/          # Base HTML document + <head> meta/SEO
│   ├── pages/           # Routes: index.astro (en), es/index.astro (es)
│   └── styles/          # global.css — Tailwind import + design tokens
└── astro.config.mjs     # Astro config (site URL, Tailwind, sitemap)
```

## Styling

Tailwind v4 is wired in through the official Vite plugin
([`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite)).
Design tokens (brand colors, fonts, shadows) and custom utilities live in
[`src/styles/global.css`](src/styles/global.css) under the `@theme` block.

Dark mode is class-based (`<html class="dark">`) with a toggle in the navbar;
the initial theme is resolved before paint to avoid a flash.

## Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Deployment

The production `site` URL is configured in `astro.config.mjs` (used for
canonical/`hreflang` tags and the generated sitemap). Update it there if the
domain changes.
