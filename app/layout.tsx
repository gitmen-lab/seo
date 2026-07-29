import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteButton } from "@/components/QuoteButton";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, SITE_URL } from "@/lib/seo";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s`,
  },
  description: `${company.name} provides kitchen remodeling, bathroom remodeling, painting, flooring, drywall repair, and demolition across the Dallas–Fort Worth Metroplex. Free estimates: ${company.phoneDisplay}.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <QuoteButton />
      </body>
    </html>
  );
}
