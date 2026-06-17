import Image from 'next/image'
import Link from 'next/link'
import { ProductReview } from '@/lib/types'
import RatingStars from './RatingStars'

export default function ProductCard({ product }: { product: ProductReview }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-navy-50">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">{product.brand}</p>
          <h3 className="mt-1 font-serif text-lg font-bold text-navy-900">{product.name}</h3>
        </div>

        <RatingStars rating={product.rating} />

        <p className="text-sm leading-relaxed text-navy-600">{product.excerpt}</p>

        <p className="text-sm font-medium text-navy-800">Best for: {product.bestFor}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-navy-900">{product.priceRange}</span>
          <Link href={`/reviews/${product.slug}`} className="btn-outline text-xs">
            Read Review
          </Link>
        </div>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-cta w-full"
        >
          Check Price
        </a>
      </div>
    </article>
  )
}
