import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export const metadata: Metadata = buildMetadata({
  title: `Contact Us — Free Remodeling Estimates | ${company.name}`,
  description: `Request a free, no-obligation remodeling estimate anywhere in the DFW Metroplex. Call ${company.phoneDisplay} or send us a message — we respond within one business day.`,
  path: "/contact",
});

const crumbs = [{ name: "Contact", path: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="container section-padding">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
              Get Your Free Estimate
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tell us about your project and we&apos;ll schedule a free on-site visit.
              No pressure, no obligation — just honest numbers from a licensed local
              contractor.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-charcoal">Call or Text</dt>
                  <dd>
                    <a
                      href={telHref(company.phone)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {company.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-charcoal">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-charcoal">Office</dt>
                  <dd className="text-muted-foreground">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-charcoal">Hours</dt>
                  <dd className="text-muted-foreground">
                    {company.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.hours}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-charcoal">
                Request a Free Estimate
              </h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">
                We respond to every request within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
