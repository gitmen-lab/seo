import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

interface CTASectionProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
}

export function CTASection({
  heading = "Ready to Transform Your Home?",
  body = `Get a free, no-obligation estimate from ${company.name}. Transparent pricing, licensed crews, and a workmanship warranty on every project.`,
  buttonLabel = "Get a Free Estimate",
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">{body}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="white" asChild>
              <Link href="/contact">{buttonLabel}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={telHref(company.phone)}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {company.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
