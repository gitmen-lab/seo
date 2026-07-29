export interface Company {
  name: string;
  /** Short brand label for tight spaces (mobile nav) */
  shortName: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  url: string;
  /** Approximate business location, used for LocalBusiness schema geo */
  coordinates: { lat: number; lng: number };
  logo: string;
  foundedYear: number;
  license: string;
  hours: { days: string; hours: string }[];
  social: { name: string; url: string }[];
  serviceRadius: string;
  stats: { label: string; value: string }[];
  guarantees: string[];
}

export const company: Company = {
  name: "My Dream Home Remodeling",
  shortName: "My Dream Home",
  legalName: "My Dream Home Remodeling", // TODO: confirm legal entity name (LLC?)
  tagline: "Trusted Home Remodeling Across the Dallas–Fort Worth Metroplex",
  phone: "+18173740962",
  phoneDisplay: "(817) 374-0962",
  email: "info@mydreamhomeremodeling.com", // TODO: confirm real email address
  address: {
    street: "5305 Hibbs Dr",
    city: "Fort Worth",
    state: "TX",
    zip: "76137",
  },
  url: "https://mydreamhomeremodeling.com",
  coordinates: { lat: 32.8735, lng: -97.2889 }, // TODO: confirm exact coordinates
  logo: "/images/logo.svg",
  foundedYear: 2009,
  license: "Licensed & Insured in Texas",
  hours: [
    { days: "Monday – Friday", hours: "7:30 AM – 6:30 PM" },
    { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  // Add real social profile URLs when available — these feed schema.org sameAs
  social: [],
  serviceRadius: "Dallas–Fort Worth Metroplex",
  stats: [
    { label: "Years in Business", value: "15+" },
    { label: "Projects Completed", value: "2,400+" },
    { label: "Cities Served", value: "20" },
    { label: "Average Rating", value: "4.9★" },
  ],
  guarantees: [
    "Free, no-obligation estimates",
    "Licensed & insured crews",
    "Transparent, itemized pricing",
    "Workmanship warranty on every project",
    "Clean job sites, every day",
  ],
};
