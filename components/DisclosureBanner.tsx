import Link from 'next/link'
import { AFFILIATE_DISCLOSURE_SHORT } from '@/lib/constants'

export default function DisclosureBanner() {
  return (
    <div className="border-b border-navy-100 bg-navy-50">
      <div className="container-page flex flex-col items-start justify-between gap-1 py-2 text-xs text-navy-600 sm:flex-row sm:items-center">
        <p>{AFFILIATE_DISCLOSURE_SHORT}</p>
        <Link href="/disclosure" className="font-medium text-navy-700 underline hover:text-sage-600">
          Learn more
        </Link>
      </div>
    </div>
  )
}
