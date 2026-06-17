import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: `Read the affiliate disclosure for ${SITE_NAME}.`,
}

export default function DisclosurePage() {
  return (
    <>
      <PageHeader title="Affiliate Disclosure" />
      <div className="container-page max-w-2xl space-y-4 py-12 text-navy-700">
        <p>
          {SITE_NAME} participates in affiliate marketing programs, which means we may earn a commission on
          purchases made through links on this site, at no additional cost to you.
        </p>
        <p>
          Our editorial content is independent of these partnerships. Affiliate relationships do not
          determine which products we cover or how we rate them. We only recommend products we believe offer
          genuine value based on our research and testing.
        </p>
        <p>
          As an affiliate, we may earn from qualifying purchases made through links to retailer and brand
          websites, including but not limited to major e-commerce and direct-to-consumer mattress and bedding
          retailers.
        </p>
      </div>
    </>
  )
}
