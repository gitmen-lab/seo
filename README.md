# BestSleepSolutions

An affiliate publishing site for sleep products, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and MDX.

## Stack

- **Next.js 14** App Router
- **TypeScript**
- **Tailwind CSS** with a navy / sage color palette
- **MDX** for blog-style education content (`content/blog`)
- **Inter** for body text, **Source Serif 4** for headings (via `next/font/google`)

## Getting Started

```bash
npm install
npm run dev
```

## Structure

- `app/(pages)` — all routes (home, reviews, comparisons, best-picks, education, about, contact, disclosure, privacy-policy)
- `components/` — Header, Footer, DisclosureBanner, ProductCard, and other shared UI
- `content/blog/` — MDX posts powering the Education section
- `lib/` — site constants, product data, and blog helpers
- `public/` — images and static assets

## Notes

- Product and review data currently lives in `lib/products.ts` as static sample data — swap in a CMS or database as needed.
- Affiliate links use `rel="sponsored noopener noreferrer"` and the global `DisclosureBanner` appears on every page.
