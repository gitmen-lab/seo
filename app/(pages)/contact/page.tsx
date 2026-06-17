import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the BestSleepSolutions editorial team.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Questions, corrections, or partnership inquiries — we'd love to hear from you." />
      <div className="container-page max-w-xl py-12">
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-navy-200 px-3 py-2 text-sm focus:border-sage-500 focus:outline-none focus:ring-1 focus:ring-sage-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-navy-200 px-3 py-2 text-sm focus:border-sage-500 focus:outline-none focus:ring-1 focus:ring-sage-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-navy-200 px-3 py-2 text-sm focus:border-sage-500 focus:outline-none focus:ring-1 focus:ring-sage-500"
            />
          </div>
          <button type="submit" className="btn-cta">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
