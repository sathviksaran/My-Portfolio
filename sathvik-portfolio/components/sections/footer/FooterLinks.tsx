import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants/navigation";

export default function FooterLinks() {
  return (
    <nav aria-labelledby="footer-links-heading">
      <h3
        id="footer-links-heading"
        className="text-lg font-semibold"
      >
        Quick Links
      </h3>

      <ul className="mt-4 space-y-3">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                text-sm
                text-muted-foreground
                transition-colors
                duration-200
                hover:text-primary
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}