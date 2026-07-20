"use client";

import { useEffect, useState } from "react";

import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useActiveSection } from "./hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
  role="banner"
  className={cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    scrolled
      ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
      : "bg-transparent"
  )}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <NavbarLogo />

        <DesktopNav activeSection={activeSection} />

        <MobileNav activeSection={activeSection} />
      </div>
    </header>
  );
}