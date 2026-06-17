import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ProductCard from '@/components/ProductCard'
import { FEATURED_PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Sleep Product Reviews',
  description: 'Hands-on, in-depth reviews of mattresses, pillows, and sleep aids.',
}

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Sleep Product Reviews"
        description="Every product is researched and reviewed against firmness, materials, cooling, motion isolation, and value."
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
