import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustBadges } from "@/components/TrustBadges";
import { CTASection } from "@/components/CTASection";
import { ServiceLinks } from "@/components/ServiceLinks";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export const metadata: Metadata = buildMetadata({
  title: `About ${company.name} | DFW Remodeling Contractor Since ${company.foundedYear}`,
  description: `Meet the team behind ${company.name}: a licensed, insured remodeling contractor serving ${cities.length} DFW communities since ${company.foundedYear} with 2,400+ completed projects.`,
  path: "/about",
});

const crumbs = [{ name: "About", path: "/about" }];

const values = [
  {
    title: "Honesty First",
    description:
      "Line-item estimates, milestone payments, and straight answers — even when the honest answer is 'you don't need that.'",
  },
  {
    title: "Craftsmanship That Lasts",
    description:
      "We build like we'll be back — because with warranties and repeat clients, we usually are.",
  },
  {
    title: "Respect for Your Home",
    description:
      "Dust barriers, floor protection, daily cleanup, and crews that show up when they say they will.",
  },
  {
    title: "Local Accountability",
    description:
      "We live and work in the same communities we serve. Our reputation in DFW is our whole business.",
  },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - company.foundedYear;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            {years} Years of Remodeling DFW Homes the Right Way
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {company.name} started in {company.foundedYear} with one crew, one truck,
            and a simple belief: homeowners deserve contractors who show up, tell the
            truth, and stand behind their work. Today we&apos;re {cities.length} cities
            strong across the Metroplex with more than 2,400 completed projects — and
            the same belief.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="bg-muted" aria-labelledby="values-heading">
        <div className="container section-padding">
          <h2
            id="values-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
          >
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 rounded-lg border bg-card p-6">
                <CheckCircle2
                  className="h-6 w-6 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
              Licensed Crews, One Accountable Team
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every {company.name} project is staffed by our own vetted crews — not a
              rotating cast of unknown subcontractors. Plumbing, electrical, and gas
              work is always performed by licensed trade professionals and inspected to
              local code. One project manager owns your job from the first walkthrough
              to the final punch list.
            </p>
            <ul className="mt-8 space-y-3">
              {company.guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3 text-charcoal">
                  <CheckCircle2
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {g}
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Meet Us at Your Free Estimate</Link>
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border bg-muted p-8 text-center"
              >
                <dd className="text-4xl font-bold text-primary">{stat.value}</dd>
                <dt className="mt-2 text-sm text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container section-padding">
          <ServiceLinks services={services} heading="What We Do" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
