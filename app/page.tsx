import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServiceCard } from "@/components/ServiceCard";
import { CityLinks } from "@/components/CityLinks";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { testimonials } from "@/data/testimonials";
import { generalFaqs } from "@/data/faqs";
import { galleryItems } from "@/data/gallery";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: `${company.name} | Home Remodeling Contractor in Dallas–Fort Worth, TX`,
  description: `Kitchen & bathroom remodeling, painting, flooring, drywall repair & demolition across the DFW Metroplex. Licensed & insured, free estimates. Call ${company.phoneDisplay}.`,
  path: "/",
});

const homeProcess = [
  {
    title: "Free Consultation",
    description:
      "We visit your home, listen to your goals, and provide a written, line-item estimate — free and without obligation.",
  },
  {
    title: "Design & Planning",
    description:
      "Materials, finishes, and a realistic schedule are locked in before work begins, so there are no surprises.",
  },
  {
    title: "Expert Construction",
    description:
      "Licensed crews build to code with daily cleanup and a dedicated project manager keeping you informed.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We walk every detail with you, complete the punch list, and back the work with our warranty.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(generalFaqs)]} />

      <Hero
        eyebrow="Rated 4.9/5 by DFW homeowners"
        title={
          <>
            Remodeling Done Right, <span className="text-primary">Backed by Proof</span>
          </>
        }
        subtitle={`From kitchens and bathrooms to painting, flooring, drywall, and demolition — ${company.name} delivers licensed, warrantied craftsmanship across ${cities.length} DFW communities.`}
      />

      <TrustBadges />

      {/* Services */}
      <section className="container section-padding" aria-labelledby="services-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Our Remodeling Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six specialized services, one accountable team. Every project includes free
            estimates, licensed crews, and our workmanship warranty.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateIn key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-charcoal-dark text-white" aria-labelledby="why-heading">
        <div className="container section-padding">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Why DFW Homeowners Choose {company.name}
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Since {company.foundedYear}, we&apos;ve completed more than 2,400 projects
                across the Metroplex. Our promise is simple: honest pricing, skilled
                crews, and homes treated with respect.
              </p>
              <ul className="mt-8 space-y-4">
                {company.guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-6 w-6 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-200">{g}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/about">More About Our Team</Link>
              </Button>
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {company.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-8 text-center"
                >
                  <dd className="text-4xl font-bold text-primary">{stat.value}</dd>
                  <dt className="mt-2 text-sm text-gray-300">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ProcessSteps steps={homeProcess} heading="How It Works" />

      <Gallery items={galleryItems.slice(0, 6)} />

      <Testimonials items={testimonials.slice(0, 6)} />

      {/* Service areas */}
      <section className="container section-padding" aria-labelledby="areas-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="areas-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            Proudly Serving {cities.length} DFW Communities
          </h2>
          <p className="mt-4 text-muted-foreground">
            From Fort Worth to Denton, Arlington to Southlake — our crews are local to
            the Metroplex and know its homes inside and out.
          </p>
        </div>
        <div className="mt-10">
          <CityLinks cities={cities} />
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/service-areas">Explore All Service Areas</Link>
          </Button>
        </div>
      </section>

      <FAQAccordion
        faqs={generalFaqs}
        subheading="Straight answers to the questions homeowners ask us most."
      />

      <CTASection />
    </>
  );
}
