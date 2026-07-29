import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { CityLinks } from "@/components/CityLinks";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircle2, MapPin } from "lucide-react";
import { cityMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { services } from "@/data/services";
import { cities, getCity } from "@/data/cities";
import { generateCityIntro, generateWhyChooseUs } from "@/lib/content";
import { getNearbyCities, cityLabel } from "@/lib/helpers";
import { getTestimonialsByCity, testimonials } from "@/data/testimonials";
import { generalFaqs } from "@/data/faqs";
import { company } from "@/data/company";

interface Params {
  city: string;
}

export function generateStaticParams(): Params[] {
  return cities.map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return cityMetadata(city);
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const intro = generateCityIntro(city);
  const whyChooseUs = generateWhyChooseUs(city);
  const nearbyCities = getNearbyCities(city.slug);
  const cityTestimonials = getTestimonialsByCity(city.slug);
  const pageTestimonials =
    cityTestimonials.length > 0 ? cityTestimonials : testimonials.slice(0, 3);

  const localFaqs = [
    {
      question: `Which remodeling services do you offer in ${cityLabel(city)}?`,
      answer: `All six of our services are available in ${city.city}: interior & exterior painting, floor installation, bathroom remodeling, kitchen remodeling, drywall repair, and demolition. Every project includes a free on-site estimate.`,
    },
    {
      question: `Which parts of ${city.city} do you cover?`,
      answer: `We serve all of ${city.city}, including ${city.localHighlights.join(", ")}, and the ${city.zipCodes.join(", ")} zip code${city.zipCodes.length > 1 ? "s" : ""} — plus surrounding ${city.county} communities.`,
    },
    ...generalFaqs.slice(0, 4),
  ];

  const crumbs = [
    { name: "Service Areas", path: "/service-areas" },
    { name: cityLabel(city), path: `/service-areas/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={[faqSchema(localFaqs), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <Hero
        compact
        eyebrow={`Local crews serving ${city.county}`}
        title={
          <>
            Home Remodeling in{" "}
            <span className="text-primary">{cityLabel(city)}</span>
          </>
        }
        subtitle={`Kitchens, bathrooms, painting, flooring, drywall, and demolition for ${city.city} homeowners — licensed, insured, and backed by a workmanship warranty.`}
      />

      {/* Local introduction */}
      <section className="container section-padding" aria-labelledby="intro-heading">
        <div className="max-w-3xl">
          <h2
            id="intro-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Your Neighbors in {city.city} Already Know Us
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge variant="accent">
              <MapPin className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              {city.county}
            </Badge>
            <Badge variant="accent">Population {city.population}</Badge>
            <Badge variant="accent">
              Zip codes: {city.zipCodes.slice(0, 4).join(", ")}
              {city.zipCodes.length > 4 ? " +" : ""}
            </Badge>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted" aria-labelledby="why-heading">
        <div className="container section-padding">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            Why {city.city} Homeowners Choose {company.name}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border bg-card p-6">
                <CheckCircle2
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available in this city */}
      <section className="container section-padding" aria-labelledby="services-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Remodeling Services in {cityLabel(city)}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every service below is available to {city.city} homeowners with free
            estimates and local crews.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} city={city} />
          ))}
        </div>
      </section>

      {pageTestimonials.length > 0 && (
        <Testimonials
          items={pageTestimonials.slice(0, 3)}
          heading={
            cityTestimonials.length > 0
              ? `Reviews From ${city.city} Homeowners`
              : "Reviews From DFW Homeowners"
          }
        />
      )}

      <FAQAccordion
        faqs={localFaqs}
        heading={`Remodeling in ${city.city} — FAQs`}
      />

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-muted">
          <div className="container section-padding">
            <CityLinks
              cities={nearbyCities}
              heading={`We Also Serve Communities Near ${city.city}`}
            />
            <p className="mt-6 text-sm text-muted-foreground">
              Browse the full list on our{" "}
              <Link href="/service-areas" className="font-semibold text-primary hover:underline">
                service areas page
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <CTASection
        heading={`Start Your ${city.city} Project Today`}
        body={`Get a free, no-obligation estimate at your ${city.city} home. Transparent pricing, licensed crews, and a warranty on every project.`}
      />
    </>
  );
}
