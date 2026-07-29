import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/data/services";
import type { City } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";

interface ServiceCardProps {
  service: Service;
  /** When set, links to the service+city page instead of the service page */
  city?: City;
}

export function ServiceCard({ service, city }: ServiceCardProps) {
  const href = city
    ? `/services/${service.slug}/${city.slug}`
    : `/services/${service.slug}`;
  const label = city ? `${service.name} in ${cityLabel(city)}` : service.name;

  return (
    <Card className="group h-full transition-shadow hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-6">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-semibold text-charcoal">
          <Link href={href} className="after:absolute after:inset-0 relative">
            {label}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </CardContent>
    </Card>
  );
}
