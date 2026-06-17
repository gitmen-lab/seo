import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import RatingStars from '@/components/RatingStars'
import { FEATURED_PRODUCTS, getProductBySlug } from '@/lib/products'

export function generateStaticParams() {
  return FEATURED_PRODUCTS.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return {}

  return {
    title: `${product.name} Review`,
    description: product.excerpt,
  }
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <article className="container-page py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-50">
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sage-600">{product.brand}</p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <div className="mt-3">
            <RatingStars rating={product.rating} />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">{product.excerpt}</p>
          <p className="mt-4 text-xl font-bold text-navy-900">{product.priceRange}</p>

          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="btn-cta mt-6">
            Check Current Price
          </a>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-base font-bold text-navy-900">Pros</h2>
              <ul className="mt-2 space-y-1 text-sm text-navy-600">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex gap-2">
                    <span className="text-sage-600">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-navy-900">Cons</h2>
              <ul className="mt-2 space-y-1 text-sm text-navy-600">
                {product.cons.map((con) => (
                  <li key={con} className="flex gap-2">
                    <span className="text-navy-400">&minus;</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 rounded-lg bg-navy-50 p-4 text-sm text-navy-600">
            <span className="font-semibold text-navy-800">Best for:</span> {product.bestFor}
          </p>
        </div>
      </div>
    </article>
  )
}
