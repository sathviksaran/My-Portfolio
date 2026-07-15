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
          ? "border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl"
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

            <h1 className="text-lg font-bold leading-none">

              Sathvik Saran

            </h1>

            <p className="mt-1 text-xs text-slate-400">

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
                      ? "text-blue-500"
                      : "text-slate-300 hover:text-blue-400"
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
              border-slate-700
              p-2
              transition
              hover:border-blue-500
              hover:bg-slate-900
              "
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
                        <SheetContent
              side="right"
              className="border-slate-800 bg-slate-950 text-white"
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
                              ? "text-blue-500"
                              : "text-slate-300 hover:text-blue-400"
                          }`}
                        >
                          {item.name}
                        </Link>
                      }
                    />

                  );

                })}

                <div className="mt-8 border-t border-slate-800 pt-6">

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
                    hover:scale-105
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