import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Read the privacy policy for ${SITE_NAME}.`,
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <div className="container-page max-w-2xl space-y-4 py-12 text-navy-700">
        <p>
          This Privacy Policy explains how {SITE_NAME} ("we", "us") collects, uses, and protects information
          when you visit our website.
        </p>
        <h2 className="text-xl font-bold text-navy-900">Information We Collect</h2>
        <p>
          We may collect basic analytics data such as pages visited, browser type, and referral source. If
          you contact us via our contact form, we collect the name, email, and message you provide.
        </p>
        <h2 className="text-xl font-bold text-navy-900">Cookies</h2>
        <p>
          We may use cookies and similar technologies for analytics and to support affiliate tracking links.
          You can disable cookies in your browser settings.
        </p>
        <h2 className="text-xl font-bold text-navy-900">Third-Party Links</h2>
        <p>
          Our site contains links to third-party retailers and affiliate partners. We are not responsible for
          the privacy practices of those external sites.
        </p>
        <h2 className="text-xl font-bold text-navy-900">Contact</h2>
        <p>
          If you have questions about this policy, please reach out via our{' '}
          <a href="/contact" className="font-medium text-sage-600 underline">
            contact page
          </a>
          .
        </p>
      </div>
    </>
  )
}
