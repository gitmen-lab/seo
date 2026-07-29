# My Dream Home Remodeling — Data-Driven Local SEO Website

A production-ready local remodeling company website built with a **data-driven architecture**: the entire site — 158 statically generated pages, including 120 service×city landing pages — is generated from a handful of structured data files. Adding a new service or city requires editing **one data file**, nothing else.

## Tech Stack

- **Next.js 15** (App Router, Server Components, SSG)
- **TypeScript**
- **Tailwind CSS** + shadcn/ui-style components
- **Framer Motion** (LazyMotion, minimal bundle)
- **Lucide Icons**

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statically generates all 158 pages
npm run start
```

## How Pages Are Generated

| Route | Source | Count |
|---|---|---|
| `/services/[service]` | `data/services.ts` | 6 |
| `/service-areas/[city]` | `data/cities.ts` | 20 |
| `/services/[service]/[city]` | services × cities | 120 |
| `/`, `/about`, `/contact`, `/gallery`, `/reviews`, indexes | static | 7 |

All dynamic routes use `generateStaticParams()` with `dynamicParams = false`, so every page is pre-rendered at build time and unknown slugs 404.

### Adding a city (or service)

Add one object to `data/cities.ts` (or `data/services.ts`). That's it. The build automatically creates:

- the city page and all 6 service+city pages for it
- sitemap.xml entries
- internal links (footer, city chips, "nearby cities" blocks)
- unique metadata, Open Graph tags, and JSON-LD schema

## SEO System

- **Unique titles, meta descriptions, canonicals, OG/Twitter cards** on every page (`lib/seo.ts`)
- **Schema.org JSON-LD**: Organization, LocalBusiness (HomeAndConstructionBusiness), Service, FAQPage, BreadcrumbList
- **`/sitemap.xml` + `/robots.txt`** generated from the same data (`app/sitemap.ts`, `app/robots.ts`)
- **Anti-duplicate content**: `lib/content.ts` composes page copy from deterministic, hash-seeded template variants woven with each city's real local data (county, zip codes, neighborhoods, housing stock) — so every one of the 120 combo pages reads differently and stays locally useful

## Internal Linking

- Service pages → all 20 cities (as service+city links) + related services
- City pages → all 6 services (as service+city links) + nearby cities
- Service+city pages → parent service, parent city, related services in the same city, same service in nearby cities

## Before Going Live

Business name, phone, address, and domain are already set in `data/company.ts`. Still remaining:

1. Confirm the TODOs in `data/company.ts`: email address, legal entity name, exact geo coordinates, founded year
2. Replace the placeholder stats (`stats`, founded year, "2,400+ projects", "4.9★" claims) with real numbers — they appear on the home, about, and hero sections
3. Replace the illustrative testimonials in `data/testimonials.ts` with real customer reviews
4. Replace placeholder SVGs in `public/images/` with real project photos
5. Wire `components/ContactForm.tsx` to a form backend (API route, Formspree, Resend, …)
6. Add real social profile URLs to `company.social` (feeds schema.org `sameAs`)
7. Once real review data exists, optionally add an `aggregateRating` back to `localBusinessSchema()` in `lib/seo.ts` — it was intentionally left out to avoid fabricated-rating penalties
