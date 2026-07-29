import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/data/gallery";
import { getCity } from "@/data/cities";
import { getService } from "@/data/services";
import { cityLabel } from "@/lib/helpers";

interface GalleryProps {
  items: GalleryItem[];
  heading?: string;
  subheading?: string;
}

export function Gallery({
  items,
  heading = "Recent Projects",
  subheading = "A look at the craftsmanship we bring to every home.",
}: GalleryProps) {
  if (items.length === 0) return null;

  return (
    <section className="container section-padding" aria-labelledby="gallery-heading">
      <div className="text-center max-w-2xl mx-auto">
        <h2
          id="gallery-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
        >
          {heading}
        </h2>
        <p className="mt-4 text-muted-foreground">{subheading}</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const city = getCity(item.citySlug);
          const service = getService(item.serviceSlug);
          return (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {service && city && (
                  <p className="mt-3 text-xs font-medium text-primary">
                    <Link
                      href={`/services/${service.slug}/${city.slug}`}
                      className="hover:underline"
                    >
                      {service.shortName} in {cityLabel(city)} →
                    </Link>
                  </p>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
