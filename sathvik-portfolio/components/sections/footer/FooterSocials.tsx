import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SITE } from "@/lib/constants/site";
import { FaEnvelope } from "react-icons/fa6";
import { FileText } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: SITE.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: SITE.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: `mailto:${SITE.email}`,
    icon: FaEnvelope,
  },
  {
  name: "Resume",
  href: "/resume.pdf",
  icon: FileText,
  },
] as const;

export default function FooterSocials() {
  return (
    <section aria-labelledby="footer-socials-heading">
      <h3
        id="footer-socials-heading"
        className="text-lg font-semibold"
      >
        Connect
      </h3>

      <ul className="mt-4 space-y-3">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <Link
              href={href}
              target={name !== "Email" ? "_blank" : undefined}
              rel={
                name !== "Email"
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={name}
              className="
                inline-flex
                items-center
                gap-3
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
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}