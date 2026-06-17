import Link from 'next/link'
import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { FEATURED_PRODUCTS } from '@/lib/products'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Trusted Sleep Product Reviews`,
  description: SITE_DESCRIPTION,
}

const PILLARS = [
  {
    title: 'Reviews',
    description: 'In-depth, hands-on testing of mattresses, pillows, and sleep aids.',
    href: '/reviews',
  },
  {
    title: 'Comparisons',
    description: 'Side-by-side breakdowns to help you choose between top contenders.',
    href: '/comparisons',
  },
  {
    title: 'Best Picks',
    description: 'Curated shortlists for every sleep style, budget, and body type.',
    href: '/best-picks',
  },
  {
    title: 'Education',
    description: 'Sleep science explained in plain language, backed by research.',
    href: '/education',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="container-page flex flex-col items-start gap-6 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-600">
            Independent sleep research
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Better sleep starts with the right information.
          </h1>
          <p className="max-w-xl text-lg text-navy-600">{SITE_DESCRIPTION}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/best-picks" className="btn-cta">
              See Our Top Picks
            </Link>
            <Link href="/reviews" className="btn-outline">
              Browse Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group rounded-xl border border-navy-100 p-6 transition-colors hover:border-sage-300 hover:bg-sage-50"
            >
              <h2 className="text-lg font-bold">{pillar.title}</h2>
              <p className="mt-2 text-sm text-navy-600">{pillar.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-sage-600 group-hover:underline">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy-50 py-16">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">Editor&apos;s Top Picks</h2>
            <Link href="/best-picks" className="text-sm font-semibold text-sage-600 hover:underline">
              View all picks &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy-900 px-8 py-12 text-center text-white sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-200">
            Take a look at our sleep education hub to learn how sleep position, firmness, and materials affect
            your rest.
          </p>
          <Link href="/education" className="btn-cta mt-6 inline-flex">
            Start Learning
          </Link>
        </div>
      </section>
    </>
  )
}
