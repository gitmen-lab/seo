import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Customer Reviews — 4.9★ Rated Remodeler | ${company.name}`,
  description: `Read real reviews from DFW homeowners about ${company.name}'s kitchen remodels, bathroom renovations, painting, flooring, drywall, and demolition work.`,
  path: "/reviews",
});

const crumbs = [{ name: "Reviews", path: "/reviews" }];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container pt-16 md:pt-24 pb-4">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </span>
            4.9 average across hundreds of reviews
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            What DFW Homeowners Say About Us
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We don&apos;t cherry-pick. These are real projects from real homes across
            the Metroplex — the same crews and process you&apos;ll get on your project.
          </p>
        </div>
      </section>

      <Testimonials
        items={testimonials}
        heading="Recent Reviews"
        subheading="From kitchens in Southlake to drywall repairs in Watauga."
      />

      <CTASection
        heading="Ready to Be Our Next 5-Star Review?"
        body="Start with a free estimate and see why homeowners across DFW recommend us to their neighbors."
      />
    </>
  );
}
