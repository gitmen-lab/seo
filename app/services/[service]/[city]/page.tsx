import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceLinks } from "@/components/ServiceLinks";
import { CityLinks } from "@/components/CityLinks";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircle2, MapPin, Clock } from "lucide-react";
import {
  serviceCityMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { services, getService } from "@/data/services";
import { cities, getCity } from "@/data/cities";
import {
  generateServiceIntro,
  generateFAQs,
  generateCTA,
} from "@/lib/content";
import {
  getRelatedServices,
  getNearbyCities,
  cityLabel,
} from "@/lib/helpers";
import { getTestimonialsByService, getTestimonialsByCity } from "@/data/testimonials";
import { company } from "@/data/company";

interface Params {
  service: string;
  city: string;
}

/** Pre-render every service × city combination (6 × 20 = 120 pages). */
export function generateStaticParams(): Params[] {
  return services.flatMap((service) =>
    cities.map((city) => ({ service: service.slug, city: city.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) return {};
  return serviceCityMetadata(service, city);
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);
  if (!service || !city) notFound();

  const intro = generateServiceIntro(service, city);
  const faqs = generateFAQs(service, city);
  const cta = generateCTA(service, city);
  const relatedServices = getRelatedServices(service.slug, 5);
  const nearbyCities = getNearbyCities(city.slug);

  // Prefer testimonials matching this city+service, then this service, then this city.
  const cityServiceTestimonials = getTestimonialsByCity(city.slug).filter(
    (t) => t.serviceSlug === service.slug
  );
  const testimonialPool =
    cityServiceTestimonials.length > 0
      ? cityServiceTestimonials
      : [...getTestimonialsByService(service.slug), ...getTestimonialsByCity(city.slug)];
  const pageTestimonials = testimonialPool
    .filter((t, i, arr) => arr.indexOf(t) === i)
    .slice(0, 3);

  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
    { name: cityLabel(city), path: `/services/${service.slug}/${city.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[serviceSchema(service, city), faqSchema(faqs), breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Hero
        compact
        eyebrow={`Serving ${cityLabel(city)} & all of ${city.county}`}
        title={
          <>
            {service.name} in{" "}
            <span className="text-primary">{cityLabel(city)}</span>
          </>
        }
        subtitle={`Licensed, insured ${service.name.toLowerCase()} for ${city.city} homeowners — free on-site estimates and a workmanship warranty on every project.`}
      />

      {/* Local intro */}
      <section className="container section-padding" aria-labelledby="local-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="local-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              {city.city}&apos;s Trusted {service.shortName} Team
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="accent">
                <MapPin className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                {city.county}
              </Badge>
              <Badge variant="accent">
                <Clock className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Typical timeline: {service.duration}
              </Badge>
              <Badge variant="accent">Zip codes: {city.zipCodes.slice(0, 3).join(", ")}{city.zipCodes.length > 3 ? " +" : ""}</Badge>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Also looking for something else in {city.city}?{" "}
              <Link
                href={`/service-areas/${city.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                See all services in {cityLabel(city)}
              </Link>{" "}
              or learn more about{" "}
              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                our {service.name.toLowerCase()} service
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
            <Image
              src={service.image}
              alt={`${service.name} services in ${cityLabel(city)}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits localized */}
      <section className="bg-muted" aria-labelledby="benefits-heading">
        <div className="container section-padding">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Why {city.city} Homeowners Choose {company.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 rounded-lg border bg-card p-6">
                <CheckCircle2
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={service.processSteps}
        heading={`How ${service.shortName} Projects Work in ${city.city}`}
        subheading={`The same proven process behind every ${company.name} project in ${city.county}.`}
      />

      {pageTestimonials.length > 0 && (
        <Testimonials
          items={pageTestimonials}
          heading="Reviews From Nearby Homeowners"
          subheading={`Recent feedback from ${service.name.toLowerCase()} and ${city.city}-area projects.`}
        />
      )}

      <FAQAccordion
        faqs={faqs}
        heading={`${service.name} in ${cityLabel(city)} — FAQs`}
        subheading={`Answers for ${city.city} homeowners planning a ${service.shortName.toLowerCase()} project.`}
      />

      {/* Internal links */}
      <section className="bg-muted">
        <div className="container section-padding space-y-14">
          <ServiceLinks
            services={relatedServices}
            city={city}
            heading={`More Services in ${cityLabel(city)}`}
          />
          {nearbyCities.length > 0 && (
            <CityLinks
              cities={nearbyCities}
              service={service}
              heading={`${service.name} Near ${city.city}`}
            />
          )}
        </div>
      </section>

      <CTASection heading={cta.heading} body={cta.body} buttonLabel={cta.buttonLabel} />
    </>
  );
}
