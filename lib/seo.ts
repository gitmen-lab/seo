import type { Metadata } from "next";
import { company } from "@/data/company";
import type { Service, ServiceFAQ } from "@/data/services";
import type { City } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";
import { generateSEODescription } from "@/lib/content";

export const SITE_URL = company.url;

/* ------------------------------------------------------------------ */
/* Metadata builders                                                    */
/* ------------------------------------------------------------------ */

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "/images/og-default.svg";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: "en_US",
      images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}

export function serviceMetadata(service: Service): Metadata {
  return buildMetadata({
    title: `${service.name} in Dallas–Fort Worth | ${company.name}`,
    description: `${service.shortDescription} Free estimates across the DFW Metroplex. Licensed & insured. Call ${company.phoneDisplay}.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export function cityMetadata(city: City): Metadata {
  return buildMetadata({
    title: `Home Remodeling in ${cityLabel(city)} | ${company.name}`,
    description: `Trusted remodeling contractor serving ${cityLabel(city)} and ${city.county}: kitchens, bathrooms, painting, flooring, drywall & demolition. Free estimates — call ${company.phoneDisplay}.`,
    path: `/service-areas/${city.slug}`,
  });
}

export function serviceCityMetadata(service: Service, city: City): Metadata {
  return buildMetadata({
    title: `${service.name} in ${cityLabel(city)} | ${company.name}`,
    description: generateSEODescription(service, city),
    path: `/services/${service.slug}/${city.slug}`,
    image: service.image,
  });
}

/* ------------------------------------------------------------------ */
/* Schema.org JSON-LD builders                                          */
/* ------------------------------------------------------------------ */

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${company.logo}`,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundedYear),
    ...(company.social.length > 0 && {
      sameAs: company.social.map((s) => s.url),
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: company.name,
    image: `${SITE_URL}${company.logo}`,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.coordinates.lat,
      longitude: company.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    // NOTE: add an aggregateRating block here only with real review data
    // (matching your Google Business Profile) — fabricated ratings in
    // structured data risk manual penalties.
  };
}

export function serviceSchema(service: Service, city?: City): JsonLd {
  const areaServed = city
    ? {
        "@type": "City",
        name: city.city,
        containedInPlace: { "@type": "State", name: city.state },
      }
    : { "@type": "State", name: "Texas" };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city ? `${service.name} in ${cityLabel(city)}` : service.name,
    serviceType: service.name,
    description: service.shortDescription,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed,
    url: city
      ? `${SITE_URL}/services/${service.slug}/${city.slug}`
      : `${SITE_URL}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: ServiceFAQ[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
