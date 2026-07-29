# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build; statically generates all pages (158 total, including 120 service×city pages) via `generateStaticParams()`
- `npm run start` — serve the production build
- `npm run lint` — run Next.js lint

There is no test suite. Verify changes with `npm run build` — it type-checks and pre-renders every route, so data errors (e.g. a bad `nearbyCities` slug) surface at build time.

## Architecture

Data-driven local SEO site for a remodeling company (Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui-style components). **Pages are generated from data — never create per-city or per-service page files.**

### The data layer drives everything

All site content lives in `/data`:

- `services.ts` — 6 services (slug, descriptions, benefits, process steps, FAQs, keywords, image)
- `cities.ts` — 20 DFW cities (slug, county, zips, `nearbyCities` slugs, local highlights, housing notes, coordinates)
- `company.ts` — business identity, contact info, hours, stats (also feeds schema.org markup)
- `testimonials.ts`, `faqs.ts`, `gallery.ts` — supporting content keyed by service/city slugs

**Adding a service or city = adding one object to the relevant data file.** All routes, sitemap entries, internal links, and metadata update automatically. City `nearbyCities` and testimonial/gallery `citySlug`/`serviceSlug` fields must reference existing slugs.

### Dynamic routes (all use `generateStaticParams` + `dynamicParams = false`)

- `app/services/[service]/page.tsx` — 6 service pages
- `app/services/[service]/[city]/page.tsx` — 120 service×city pages
- `app/service-areas/[city]/page.tsx` — 20 city pages

### Supporting libraries

- `lib/seo.ts` — metadata builders (title/description/canonical/OG/Twitter) and schema.org JSON-LD builders (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList). `SITE_URL` derives from `data/company.ts`.
- `lib/content.ts` — deterministic copy generation for service×city pages. Uses `pickVariant(seed, variants)` (hash-based) so each of the 120 pages gets stable but *different* copy, woven with city-specific data to avoid duplicate content.
- `lib/helpers.ts` — `getRelatedServices`, `getNearbyCities`, `getRelatedCities`, `seedHash`/`pickVariant`, formatting helpers.

### Conventions

- Server Components by default; the only `"use client"` files are `Navbar`, `ContactForm`, `AnimateIn` (Framer Motion via LazyMotion), and `ui/accordion`.
- shadcn/ui-style primitives are hand-maintained in `components/ui/` (no shadcn CLI config).
- Images are placeholder SVGs in `public/images/` (hence `dangerouslyAllowSVG` in `next.config.ts`); replace with real photos and update paths in the data files.
- `ContactForm` simulates submission — wire it to a real backend before production.
- `app/sitemap.ts` and `app/robots.ts` generate sitemap.xml/robots.txt from the same data files.
