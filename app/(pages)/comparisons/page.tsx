import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { FEATURED_PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Sleep Product Comparisons',
  description: 'Side-by-side comparisons of top mattresses, pillows, and sleep aids.',
}

export default function ComparisonsPage() {
  return (
    <>
      <PageHeader
        title="Comparisons"
        description="See how leading sleep products stack up across price, firmness, and sleeper type."
      />
      <div className="container-page py-12">
        <div className="overflow-x-auto rounded-xl border border-navy-100">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-navy-50 text-navy-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Product</th>
                <th className="px-4 py-3 font-semibold">Rating</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {FEATURED_PRODUCTS.map((product) => (
                <tr key={product.slug}>
                  <td className="px-4 py-3 font-medium text-navy-900">{product.name}</td>
                  <td className="px-4 py-3 text-navy-600">{product.rating.toFixed(1)} / 5</td>
                  <td className="px-4 py-3 text-navy-600">{product.priceRange}</td>
                  <td className="px-4 py-3 text-navy-600">{product.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
