# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BestSleepSolutions — an affiliate publishing site for sleep products (mattresses, bedding, sleep aids), built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run build` — production build (also type-checks and lints)
- `npm run start` — run the production build
- `npm run lint` — run ESLint

There is no test suite configured yet.

## Architecture

- `app/(pages)/` — all routes, grouped under a route group so the URL structure stays flat (`/`, `/reviews`, `/reviews/[slug]`, `/comparisons`, `/best-picks`, `/education`, `/education/[slug]`, `/about`, `/contact`, `/disclosure`, `/privacy-policy`).
- `app/layout.tsx` — root layout; loads fonts (Inter for body, Source Serif 4 for headings) and renders the global `DisclosureBanner`, `Header`, and `Footer` on every page.
- `app/sitemap.ts` / `app/robots.ts` — generated SEO files; new routes and content slugs should be added here.
- `components/` — shared UI (`Header`, `Footer`, `DisclosureBanner`, `ProductCard`, `RatingStars`, `PageHeader`).
- `content/blog/*.mdx` — MDX posts that power the Education section. Frontmatter fields: `title`, `description`, `date`, `author`, `category`, `image`. Loaded via `lib/blog.ts` (frontmatter listing with `gray-matter`) and dynamically imported as MDX components in `app/(pages)/education/[slug]/page.tsx`.
- `lib/products.ts` — static product/review data (`FEATURED_PRODUCTS`); swap for a CMS or database when real product data is available.
- `lib/constants.ts` — site-wide constants: nav links, footer links, affiliate disclosure copy.
- `public/images/` — product and blog images.

## Conventions

- All affiliate outbound links use `rel="sponsored noopener noreferrer"` and `target="_blank"`.
- The `DisclosureBanner` component must remain in the root layout so it appears on every page, per FTC affiliate disclosure requirements.
- Color palette: `navy` (primary/text) and `sage` (CTA/accent) defined in `tailwind.config.ts`.
