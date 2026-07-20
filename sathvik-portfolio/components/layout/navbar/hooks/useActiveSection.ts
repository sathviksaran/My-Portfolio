"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants/navigation";

const NAVBAR_HEIGHT = 80;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(
    NAV_LINKS[0]?.href.replace("#", "") ?? ""
  );

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.slice(1))
    ).filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 20;

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection((prev) =>
        prev === currentSection ? prev : currentSection
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}