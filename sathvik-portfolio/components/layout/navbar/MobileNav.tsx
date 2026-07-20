"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import ThemeToggle from "@/components/ui/ThemeSwitch";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavProps {
  activeSection: string;
}

export default function MobileNav({
  activeSection,
}: MobileNavProps) {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <ThemeToggle />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              type="button"
              aria-label="Open navigation menu"
              className="
                rounded-xl
                border
                border-slate-300
                p-2
                transition-all
                hover:border-blue-500
                hover:text-blue-600
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                dark:border-slate-700
                dark:hover:border-blue-400
                dark:hover:text-blue-400
              "
            />
          }
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-10 flex h-full flex-col">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2"
            >
              {NAV_LINKS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: 20 }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 1, x: 0 }
                  }
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={activeSection === item.href.slice(1)}
                    variant="mobile"
                    onClick={() => setOpen(false)}
                  />
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto border-t border-slate-200 pt-6 dark:border-slate-800">
              <Link
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-indigo-600
                  px-5
                  py-3
                  font-medium
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  hover:shadow-blue-500/40
                "
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>

              <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} {SITE.name}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}