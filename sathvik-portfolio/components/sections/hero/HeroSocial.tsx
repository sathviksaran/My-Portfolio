"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: portfolio.social.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: portfolio.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: portfolio.social.email,
    label: "Email",
  },
];

export default function HeroSocial() {
  return (
    <div className="mt-10 flex gap-5">
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
          key={item.label}
  whileHover={{ y: -5, scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    href={item.href}
    target={item.href.startsWith("http") ? "_blank" : undefined}
    rel={
      item.href.startsWith("http")
        ? "noopener noreferrer"
        : undefined
    }
    aria-label={item.label} title={item.label}
    className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
border
border-slate-200
bg-white/70
text-xl
text-slate-700
shadow-md
backdrop-blur-xl
transition-all
duration-300

hover:border-blue-500
hover:bg-blue-600
hover:text-white
hover:shadow-lg
hover:shadow-blue-500/30

dark:border-slate-700
dark:bg-slate-900/70
dark:text-slate-300
dark:hover:border-blue-500
dark:hover:bg-blue-600
dark:hover:text-white
"
  >
    <Icon />
  </Link>
</motion.div>
        );
      })}
    </div>
  );
}