import { MapPin } from "lucide-react";

import { SITE } from "@/lib/constants/site";

export default function FooterBrand() {
  return (
    <section aria-labelledby="footer-brand-heading" className="space-y-4">
      <div>
        <h3
          id="footer-brand-heading"
          className="text-2xl font-bold tracking-tight"
        >
          {SITE.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-primary">
          {SITE.role}
        </p>
      </div>

      <p className="max-w-sm text-sm leading-7 text-muted-foreground">
        {SITE.tagline}
      </p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        <span>Ongole, Andhra Pradesh, India</span>
      </div>
    </section>
  );
}