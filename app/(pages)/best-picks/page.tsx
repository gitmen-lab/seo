import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ProductCard from '@/components/ProductCard'
import { FEATURED_PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Best Sleep Picks',
  description: 'Our curated, editor-tested shortlist of the best sleep products by category.',
}

export default function BestPicksPage() {
  return (
    <>
      <PageHeader
        title="Best Picks"
        description="Curated shortlists for every sleep style, budget, and body type, updated as we test new products."
      />
      <div className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
