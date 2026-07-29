export interface Company {
  name: string;
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
  name: "DFW Prime Remodeling",
  legalName: "DFW Prime Remodeling LLC",
  tagline: "Trusted Home Remodeling Across the Dallas–Fort Worth Metroplex",
  phone: "+18175550142",
  phoneDisplay: "(817) 555-0142",
  email: "hello@dfwprimeremodeling.com",
  address: {
    street: "1200 Main Street, Suite 210",
    city: "Fort Worth",
    state: "TX",
    zip: "76102",
  },
  url: "https://www.dfwprimeremodeling.com",
  logo: "/images/logo.svg",
  foundedYear: 2009,
  license: "Licensed & Insured in Texas",
  hours: [
    { days: "Monday – Friday", hours: "7:30 AM – 6:30 PM" },
    { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: [
    { name: "Facebook", url: "https://www.facebook.com/dfwprimeremodeling" },
    { name: "Instagram", url: "https://www.instagram.com/dfwprimeremodeling" },
    { name: "Google", url: "https://g.page/dfwprimeremodeling" },
  ],
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
