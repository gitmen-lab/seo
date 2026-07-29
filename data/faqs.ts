import { company } from "@/data/company";

export interface FAQ {
  question: string;
  answer: string;
}

/** General company FAQs shown on the home page and city pages */
export const generalFaqs: FAQ[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      `Yes. ${company.name} is fully licensed and insured in the State of Texas, and all plumbing, electrical, and gas work is performed by licensed trade professionals and inspected to local code.`,
  },
  {
    question: "Do you charge for estimates?",
    answer:
      "Never. Every project starts with a free, no-obligation consultation and a written, line-item estimate. You'll know exactly what you're paying for before any work begins.",
  },
  {
    question: "How do payments work?",
    answer:
      "We use a milestone-based payment schedule tied to completed work — never large upfront deposits. You pay as progress happens, and the final payment is due only after your walkthrough approval.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Every project includes our workmanship warranty, on top of manufacturer warranties for materials and fixtures. If something we built isn't right, we come back and fix it.",
  },
  {
    question: "Will the same crew be at my house every day?",
    answer:
      "Yes — each project is assigned a dedicated crew and a single project manager who is your point of contact from estimate to final walkthrough.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Small jobs like drywall repair can often be scheduled within days. Larger remodels typically book 2–4 weeks out, and we recommend reaching out early for kitchen projects so design and material orders don't delay your start date.",
  },
];
