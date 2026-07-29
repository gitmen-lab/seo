import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceLinks } from "@/components/ServiceLinks";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <div className="container section-padding text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-charcoal">
        Page Not Found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one
        of our services below, or head back home.
      </p>
      <Button size="lg" className="mt-8" asChild>
        <Link href="/">Back to Homepage</Link>
      </Button>
      <div className="mx-auto mt-14 max-w-2xl text-left">
        <ServiceLinks services={services} heading="Popular Services" />
      </div>
    </div>
  );
}
