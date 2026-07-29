import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { cities } from "@/data/cities";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Service Areas — ${cities.length} DFW Cities | ${company.name}`,
  description: `${company.name} serves ${cities.length} communities across the Dallas–Fort Worth Metroplex, from Fort Worth and Arlington to Denton and Southlake. Find remodeling services in your city.`,
  path: "/service-areas",
});

const crumbs = [{ name: "Service Areas", path: "/service-areas" }];

export default function ServiceAreasIndexPage() {
  // Group cities by county for a useful, scannable directory
  const counties = Array.from(new Set(cities.map((c) => c.county)));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Cities We Serve Across DFW
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {company.name} brings licensed remodeling crews to {cities.length}{" "}
            communities across the Metroplex. Select your city to see local services,
            reviews, and answers to common questions.
          </p>
        </div>

        {counties.map((county) => (
          <div key={county} className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal">{county}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cities
                .filter((c) => c.county === county)
                .map((city) => (
                  <CityCard key={city.slug} city={city} />
                ))}
            </div>
          </div>
        ))}
      </section>

      <CTASection
        heading="Don't See Your City?"
        body={`We serve the entire ${company.serviceRadius} and regularly take projects in neighboring communities. Reach out — chances are we've already worked on your street.`}
      />
    </>
  );
}
