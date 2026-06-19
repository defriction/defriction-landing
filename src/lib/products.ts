// Shared helpers for product routing and ordering, used by the products
// section and the bilingual detail pages.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'es' | 'en';
export type Product = CollectionEntry<'products'>;

/** URL of a product's detail page, respecting the site's i18n routing. */
export function productHref(lang: Lang, slug: string): string {
  return lang === 'es' ? `/es/products/${slug}` : `/products/${slug}`;
}

/** URL of the products section on the home of the given language. */
export function productsAnchor(lang: Lang): string {
  return lang === 'es' ? '/es#products' : '/#products';
}

/** All products sorted by their `order` field. */
export async function getSortedProducts(): Promise<Product[]> {
  const products = await getCollection('products');
  return products.sort((a, b) => a.data.order - b.data.order);
}
