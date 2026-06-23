// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://defriction.org',
  base: '/defriction/', // TODO: Quitar esto cuando el dominio defriction.org apunte al VPS
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
