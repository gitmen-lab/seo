import Link from 'next/link'
import { AFFILIATE_DISCLOSURE_SHORT, FOOTER_LINKS, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-100">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg font-bold text-white">{SITE_NAME}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-300">{AFFILIATE_DISCLOSURE_SHORT}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6 text-xs text-navy-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Content is for informational
            purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
