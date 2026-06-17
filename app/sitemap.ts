import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { FEATURED_PRODUCTS } from '@/lib/products'
import { getPostSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/reviews',
    '/comparisons',
    '/best-picks',
    '/education',
    '/about',
    '/contact',
    '/disclosure',
    '/privacy-policy',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))

  const reviewRoutes = FEATURED_PRODUCTS.map((product) => ({
    url: `${SITE_URL}/reviews/${product.slug}`,
    lastModified: new Date(),
  }))

  const educationRoutes = getPostSlugs().map((slug) => ({
    url: `${SITE_URL}/education/${slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...reviewRoutes, ...educationRoutes]
}
