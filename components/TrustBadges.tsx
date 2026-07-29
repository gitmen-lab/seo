import { ShieldCheck, Award, Clock, ThumbsUp } from "lucide-react";
import { company } from "@/data/company";

const badges = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed and insured in Texas",
  },
  {
    icon: Award,
    title: `${new Date().getFullYear() - company.foundedYear}+ Years Experience`,
    description: `Serving DFW since ${company.foundedYear}`,
  },
  {
    icon: ThumbsUp,
    title: "4.9★ Average Rating",
    description: "Hundreds of five-star reviews",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget",
    description: "Written schedules & itemized pricing",
  },
];

export function TrustBadges() {
  return (
    <section className="border-b bg-white" aria-label="Why homeowners trust us">
      <ul className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {badges.map((badge) => (
          <li key={badge.title} className="flex items-center gap-3">
            <badge.icon className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-charcoal">{badge.title}</p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {badge.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
