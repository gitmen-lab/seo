"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Hammer, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { telHref } from "@/lib/helpers";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-charcoal"
          aria-label={`${company.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
            <Hammer className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">{company.name}</span>
          <span className="sm:hidden">{company.shortName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-primary transition-colors py-5"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-b-lg border bg-white shadow-lg py-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2.5 text-sm text-charcoal hover:bg-accent hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telHref(company.phone)}
            className="flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <Button asChild>
            <Link href="/contact">Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="lg:hidden border-t bg-white px-4 pb-6 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <p className="px-1 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Services
          </p>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {service.name}
            </Link>
          ))}
          <div className="my-2 border-t" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={telHref(company.phone)}
              className="flex items-center justify-center gap-2 rounded-md border py-2.5 text-sm font-semibold text-charcoal"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a Free Estimate
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
