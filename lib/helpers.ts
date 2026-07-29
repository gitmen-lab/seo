import { services, type Service } from "@/data/services";
import { cities, getCity, type City } from "@/data/cities";

/**
 * Deterministic hash used to pick content variants per service+city combo.
 * Keeps generated copy varied across pages while staying stable between builds.
 */
export function seedHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Pick an item from a list deterministically based on a seed string. */
export function pickVariant<T>(seed: string, variants: T[]): T {
  return variants[seedHash(seed) % variants.length];
}

/** Related services: every other service, ordered starting after the current one. */
export function getRelatedServices(serviceSlug: string, limit?: number): Service[] {
  const index = services.findIndex((s) => s.slug === serviceSlug);
  const others =
    index === -1
      ? services
      : [...services.slice(index + 1), ...services.slice(0, index)];
  const related = others.filter((s) => s.slug !== serviceSlug);
  return limit ? related.slice(0, limit) : related;
}

/** Nearby cities as defined in the city's data entry, resolved to full objects. */
export function getNearbyCities(citySlug: string): City[] {
  const city = getCity(citySlug);
  if (!city) return [];
  return city.nearbyCities
    .map((slug) => getCity(slug))
    .filter((c): c is City => Boolean(c));
}

/**
 * Related cities: nearby cities first, topped up with other cities
 * (deterministically ordered per seed) up to the limit.
 */
export function getRelatedCities(citySlug: string, limit = 6): City[] {
  const nearby = getNearbyCities(citySlug);
  if (nearby.length >= limit) return nearby.slice(0, limit);

  const used = new Set([citySlug, ...nearby.map((c) => c.slug)]);
  const rest = cities.filter((c) => !used.has(c.slug));
  const offset = seedHash(citySlug) % Math.max(rest.length, 1);
  const rotated = [...rest.slice(offset), ...rest.slice(0, offset)];
  return [...nearby, ...rotated].slice(0, limit);
}

/** "Denton, TX" style label */
export function cityLabel(city: City): string {
  return `${city.city}, ${city.stateAbbr}`;
}

/** Format a phone number for tel: links */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
