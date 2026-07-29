import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
  subheading?: string;
}

export function FAQAccordion({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
}: FAQAccordionProps) {
  return (
    <section className="container section-padding" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal text-center"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 text-center text-muted-foreground">{subheading}</p>
        )}
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
