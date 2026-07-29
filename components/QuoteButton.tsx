import Link from "next/link";
import { MessageSquareQuote } from "lucide-react";

/** Floating quote button, visible on all pages (rendered in the root layout). */
export function QuoteButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Get a free quote"
    >
      <MessageSquareQuote className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Free Quote</span>
    </Link>
  );
}
