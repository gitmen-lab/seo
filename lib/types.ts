export interface ProductReview {
  slug: string
  name: string
  brand: string
  rating: number
  priceRange: string
  excerpt: string
  image: string
  affiliateUrl: string
  pros: string[]
  cons: string[]
  bestFor: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
}
