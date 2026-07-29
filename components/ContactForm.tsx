"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";

interface ContactFormProps {
  defaultService?: string;
  defaultCity?: string;
}

export function ContactForm({ defaultService, defaultCity }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Static site: simulate submission. Wire this to your form backend
    // (Formspree, Resend, an API route, etc.) when deploying.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border bg-accent p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-charcoal">Request Received!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. A member of our team will contact you within one
          business day to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Free estimate request">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input id="name" name="name" autoComplete="name" required placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(817) 555-0123"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-charcoal"
          >
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-charcoal">
            Your City
          </label>
          <select
            id="city"
            name="city"
            defaultValue={defaultCity ?? ""}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select your city…</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {cityLabel(c)}
              </option>
            ))}
            <option value="other">Other / nearby</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Tell Us About Your Project
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="e.g., We'd like to convert our tub to a walk-in shower…"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Request My Free Estimate"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No spam, no pressure. We&apos;ll contact you within one business day.
      </p>
    </form>
  );
}
