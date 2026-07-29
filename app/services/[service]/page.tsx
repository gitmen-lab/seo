import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ServiceLinks } from "@/components/ServiceLinks";
import { CityLinks } from "@/components/CityLinks";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircle2, Clock } from "lucide-react";
import {
  serviceMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { services, getService } from "@/data/services";
import { cities } from "@/data/cities";
import { getRelatedServices } from "@/lib/helpers";
import { getTestimonialsByService } from "@/data/testimonials";
import { getGalleryByService } from "@/data/gallery";
import { company } from "@/data/company";

interface Params {
  service: string;
}

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ service: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return serviceMetadata(service);
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.slug, 3);
  const serviceTestimonials = getTestimonialsByService(service.slug);
  const serviceGallery = getGalleryByService(service.slug);

  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[serviceSchema(service), faqSchema(service.faqs), breadcrumbSchema(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Hero
        compact
        eyebrow={`Trusted ${service.shortName} Experts in DFW`}
        title={service.name}
        subtitle={service.shortDescription}
      />

      {/* Overview */}
      <section className="container section-padding" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
            >
              Professional {service.name} Across the Metroplex
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="accent">
                <Clock className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Typical timeline: {service.duration}
              </Badge>
              <Badge variant="accent">Free on-site estimates</Badge>
              <Badge variant="accent">Workmanship warranty</Badge>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted" aria-labelledby="benefits-heading">
        <div className="container section-padding">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Why Choose Us for {service.name}
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
        heading={`Our ${service.shortName} Process`}
        subheading="Every project follows the same proven, transparent playbook."
      />

      {serviceGallery.length > 0 && (
        <Gallery
          items={serviceGallery}
          heading={`Recent ${service.shortName} Projects`}
          subheading={`Real ${service.name.toLowerCase()} work from homes across DFW.`}
        />
      )}

      {serviceTestimonials.length > 0 && (
        <Testimonials
          items={serviceTestimonials}
          heading={`${service.shortName} Reviews`}
          subheading={`What homeowners say about our ${service.name.toLowerCase()} work.`}
        />
      )}

      <FAQAccordion
        faqs={service.faqs}
        heading={`${service.name} FAQs`}
        subheading={`Common questions about ${service.name.toLowerCase()} — answered by ${company.name}.`}
      />

      {/* Internal links: cities served + related services */}
      <section className="bg-muted">
        <div className="container section-padding space-y-14">
          <CityLinks
            cities={cities}
            service={service}
            heading={`${service.name} — Cities We Serve`}
          />
          <ServiceLinks
            services={relatedServices}
            heading="Related Services"
          />
        </div>
      </section>

      <CTASection
        heading={`Get Your Free ${service.shortName} Estimate`}
        body={`Tell us about your project and we'll schedule a free on-site visit anywhere in the DFW Metroplex. Transparent pricing, no pressure.`}
      />
    </>
  );
}
