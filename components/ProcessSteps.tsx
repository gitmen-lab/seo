import type { ProcessStep } from "@/data/services";

interface ProcessStepsProps {
  steps: ProcessStep[];
  heading?: string;
  subheading?: string;
}

export function ProcessSteps({
  steps,
  heading = "Our Process",
  subheading = "Simple, transparent, and predictable from first call to final walkthrough.",
}: ProcessStepsProps) {
  return (
    <section className="bg-muted" aria-labelledby="process-heading">
      <div className="container section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal"
          >
            {heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{subheading}</p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-lg border bg-card p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
