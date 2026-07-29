import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { getCity } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";

interface TestimonialsProps {
  items: Testimonial[];
  heading?: string;
  subheading?: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials({
  items,
  heading = "What Homeowners Say",
  subheading = "Real reviews from real projects across the DFW Metroplex.",
}: TestimonialsProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-muted" aria-labelledby="testimonials-heading">
      <div className="container section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            {heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{subheading}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => {
            const city = getCity(t.citySlug);
            return (
              <Card key={i} className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <Quote className="h-8 w-8 text-primary/20" aria-hidden="true" />
                  <Stars rating={t.rating} />
                  <blockquote className="mt-3 flex-1 text-sm text-charcoal leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="mt-4 border-t pt-4">
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.project}
                      {city ? ` · ${cityLabel(city)}` : ""}
                    </p>
                  </footer>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
