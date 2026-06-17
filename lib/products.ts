import { ProductReview } from './types'

export const FEATURED_PRODUCTS: ProductReview[] = [
  {
    slug: 'cloudrest-hybrid-mattress',
    name: 'CloudRest Hybrid Mattress',
    brand: 'CloudRest',
    rating: 4.7,
    priceRange: '$899 - $1,599',
    excerpt:
      'A medium-firm hybrid with responsive coils and a cooling gel-infused foam top, well suited to combination sleepers.',
    image: '/images/products/cloudrest-hybrid.jpg',
    affiliateUrl: '#',
    pros: ['Strong edge support', 'Cooling cover', '365-night trial'],
    cons: ['Heavier than average', 'Premium price point'],
    bestFor: 'Combination sleepers who run warm',
  },
  {
    slug: 'driftwell-memory-foam',
    name: 'Driftwell Memory Foam Mattress',
    brand: 'Driftwell',
    rating: 4.5,
    priceRange: '$599 - $1,199',
    excerpt:
      'Deep memory-foam contouring for pressure relief, a favorite among side sleepers with shoulder or hip pain.',
    image: '/images/products/driftwell-memory-foam.jpg',
    affiliateUrl: '#',
    pros: ['Excellent pressure relief', 'Budget friendly', 'Minimal motion transfer'],
    cons: ['Slower temperature regulation', 'Limited bounce'],
    bestFor: 'Side sleepers seeking pressure relief',
  },
  {
    slug: 'nightowl-weighted-blanket',
    name: 'NightOwl Weighted Blanket',
    brand: 'NightOwl',
    rating: 4.6,
    priceRange: '$79 - $129',
    excerpt:
      'Glass-bead weighted blanket designed to ease anxiety and promote deeper sleep through gentle, even pressure.',
    image: '/images/products/nightowl-weighted-blanket.jpg',
    affiliateUrl: '#',
    pros: ['Breathable cotton shell', 'Machine washable', 'Multiple weight options'],
    cons: ['Can feel warm in summer'],
    bestFor: 'Anxious or restless sleepers',
  },
]

export function getProductBySlug(slug: string): ProductReview | undefined {
  return FEATURED_PRODUCTS.find((product) => product.slug === slug)
}
