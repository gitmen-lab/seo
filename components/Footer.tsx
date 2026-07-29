import Link from "next/link";
import { Phone, Mail, MapPin, Hammer } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { telHref, cityLabel } from "@/lib/helpers";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-gray-300">
      <div className="container section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
                <Hammer className="h-5 w-5" aria-hidden="true" />
              </span>
              {company.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{company.tagline}</p>
            <p className="mt-4 text-sm">{company.license}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={telHref(company.phone)}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" aria-hidden="true" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <nav aria-label="Footer service areas">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {cities.slice(0, 12).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cityLabel(city)}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-3 inline-block text-sm font-medium text-primary hover:text-white transition-colors"
            >
              View all {cities.length} cities →
            </Link>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company links">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Free Estimates
                </Link>
              </li>
            </ul>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {company.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-gray-400">{h.hours}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>{company.license} · Serving the {company.serviceRadius}</p>
        </div>
      </div>
    </footer>
  );
}
