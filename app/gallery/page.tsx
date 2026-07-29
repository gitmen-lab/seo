import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { galleryItems } from "@/data/gallery";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: `Project Gallery — Kitchens, Baths & More | ${company.name}`,
  description: `Browse recent remodeling projects by ${company.name}: kitchen renovations, bathroom remodels, painting, flooring, drywall, and demolition across the DFW Metroplex.`,
  path: "/gallery",
});

const crumbs = [{ name: "Gallery", path: "/gallery" }];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container pt-16 md:pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
            Our Work, Room by Room
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every project below is a real DFW home remodeled by our crews. Click
            through to see how we handle the same kind of project in your city.
          </p>
        </div>
      </section>

      <Gallery
        items={galleryItems}
        heading="Recent Projects Across DFW"
        subheading="Kitchens, bathrooms, flooring, painting, drywall, and demolition."
      />

      <CTASection
        heading="Want Results Like These?"
        body="Every project here started with a free estimate. Yours can too — tell us what you're dreaming up."
      />
    </>
  );
}
