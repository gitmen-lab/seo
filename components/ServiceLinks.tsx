import Link from "next/link";
import type { Service } from "@/data/services";
import type { City } from "@/data/cities";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cityLabel } from "@/lib/helpers";

interface ServiceLinksProps {
  services: Service[];
  /** When set, links go to service+city pages */
  city?: City;
  heading?: string;
}

/** Compact internal-linking block listing services (optionally scoped to a city). */
export function ServiceLinks({ services, city, heading }: ServiceLinksProps) {
  return (
    <nav aria-label={heading ?? "Our services"}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal">
          {heading}
        </h2>
      )}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={
                city
                  ? `/services/${service.slug}/${city.slug}`
                  : `/services/${service.slug}`
              }
              className="flex items-center gap-3 rounded-lg border bg-card p-4 text-sm font-medium text-charcoal transition-colors hover:border-primary hover:text-primary"
            >
              <ServiceIcon name={service.icon} className="h-5 w-5 text-primary shrink-0" />
              {city ? `${service.name} in ${cityLabel(city)}` : service.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
