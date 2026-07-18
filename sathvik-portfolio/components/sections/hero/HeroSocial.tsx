"use client";

import { portfolio } from "@/data/portfolio";
import SocialButton from "@/components/ui/SocialButton";

export default function HeroSocial() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {portfolio.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.href}
          label={social.name}
          icon={social.icon}
        />
      ))}
    </div>
  );
}