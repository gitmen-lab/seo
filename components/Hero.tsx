import Link from "next/link";
import { Phone, ShieldCheck, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";
import type { ReactNode } from "react";

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  eyebrow?: string;
  compact?: boolean;
}

export function Hero({ title, subtitle, eyebrow, compact = false }: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-charcoal-dark text-white ${
        compact ? "py-16 md:py-20" : "py-20 md:py-32"
      }`}
    >
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.15),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button size="lg" variant="white" asChild>
              <a href={telHref(company.phone)}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Licensed &amp; Insured
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Workmanship Warranty
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              4.9★ Average Rating
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
