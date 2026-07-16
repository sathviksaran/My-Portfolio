"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import ThemeToggle from "@/components/layout/ThemeToggle";

import { navigation } from "@/data/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="#home"
          className="flex items-center gap-3"
        >
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            text-lg
            font-bold
            text-white
            shadow-lg
            shadow-blue-500/30
            "
          >
            SA
          </div>

          <div className="hidden sm:block">

            <h1 className="text-lg font-bold leading-none text-slate-900 dark:text-white">

              Sathvik Saran

            </h1>

            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">

              Associate IT Consultant

            </p>

          </div>

        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => {

            const isActive =
              activeSection === item.href.substring(1);

            return (

              <Link
                key={item.name}
                href={item.href}
                className="group relative"
              >

                <span
                  className={`transition duration-300 ${
                    isActive
  ? "text-blue-600 dark:text-blue-400"
  : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

              </Link>

            );

          })}

          <ThemeToggle />

        </nav>

        {/* Mobile */}

        <div className="flex items-center gap-3 lg:hidden">

          <ThemeToggle />

          <Sheet>

            <SheetTrigger
              className="
rounded-xl
border
border-slate-300
bg-white/80
p-2
transition
hover:border-blue-500
hover:bg-slate-100
dark:border-slate-700
dark:bg-slate-900/80
dark:hover:bg-slate-800
"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
                        <SheetContent
              side="right"
              className="
border-slate-200
bg-white
text-slate-900
dark:border-slate-800
dark:bg-slate-950
dark:text-white
"
            >
              <div className="mt-16 flex flex-col gap-6">

                {navigation.map((item) => {

                  const isActive =
                    activeSection === item.href.substring(1);

                  return (

                    <SheetClose
                      key={item.name}
                      render={
                        <Link
                          href={item.href}
                          className={`text-lg font-medium transition ${
                            isActive
  ? "text-blue-600 dark:text-blue-400"
  : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                          }`}
                        >
                          {item.name}
                        </Link>
                      }
                    />

                  );

                })}

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">

                  <a
                    href="/Sathvik_Saran_Resume.pdf"
                    download
                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
                    "
                  >
                    Download Resume
                  </a>

                </div>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>
  );
}