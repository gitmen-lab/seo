import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about the mission and review process behind ${SITE_NAME}.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="container-page max-w-2xl py-12 text-navy-700">
        <p>
          {SITE_NAME} was founded to help readers make informed decisions about mattresses, bedding, and
          sleep aids, without the marketing noise. We test products, review specifications, and summarize
          publicly available sleep research so you can shop with confidence.
        </p>
        <h2 className="mt-8 text-xl font-bold text-navy-900">Our Review Process</h2>
        <p className="mt-3">
          Every product we feature is evaluated against a consistent set of criteria, including material
          quality, firmness, temperature regulation, motion isolation, trial period, and price relative to
          comparable options.
        </p>
        <h2 className="mt-8 text-xl font-bold text-navy-900">How We Make Money</h2>
        <p className="mt-3">
          We may earn a commission when you purchase through links on this site. This does not influence our
          ratings or recommendations. See our{' '}
          <a href="/disclosure" className="font-medium text-sage-600 underline">
            affiliate disclosure
          </a>{' '}
          for details.
        </p>
      </div>
    </>
  )
}
