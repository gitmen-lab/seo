import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Remodeling Services in Dallas–Fort Worth | ${company.name}`,
  description: `Explore our six remodeling services: painting, flooring, bathroom & kitchen remodeling, drywall repair, and demolition. Free estimates across DFW — call ${company.phoneDisplay}.`,
  path: "/services",
});

const crumbs = [{ name: "Services", path: "/services" }];

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Our Remodeling Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {company.name} offers six specialized services under one roof, each backed
            by licensed crews, transparent pricing, and our workmanship warranty. Pick a
            service to see how we work, what it costs, and where we offer it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
