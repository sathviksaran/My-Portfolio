"use client";

import { portfolio } from "@/data/portfolio";
import SocialButton from "./SocialButton";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({
  className,
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        className
      )}
    >
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