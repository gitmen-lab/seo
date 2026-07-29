import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b bg-muted/50">
      <ol className="container flex flex-wrap items-center gap-1.5 py-3 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              <ChevronRight
                className="h-3.5 w-3.5 text-muted-foreground/60"
                aria-hidden="true"
              />
              {isLast ? (
                <span aria-current="page" className="font-medium text-charcoal">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
