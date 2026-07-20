"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";

import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants/navigation";

interface DesktopNavProps {
  activeSection: string;
}

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/ui/ThemeSwitch"),
  {
    ssr: false,
    loading: () => (
      <div className="h-10 w-10 rounded-xl border border-slate-700" />
    ),
  }
);

export default function DesktopNav({
  activeSection,
}: DesktopNavProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {/* Navigation Links */}
      {NAV_LINKS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          active={activeSection === item.href.slice(1)}
        />
      ))}

      {/* Resume Button */}
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      >
        <Link
          href="/Sathvik_Saran_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-600
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300
            hover:shadow-blue-500/40
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
            dark:focus-visible:ring-offset-slate-950
          "
          aria-label="Open resume in a new tab"
        >
          <Download className="h-4 w-4" />
          Resume
        </Link>
      </motion.div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}