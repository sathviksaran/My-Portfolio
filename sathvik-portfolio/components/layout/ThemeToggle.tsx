"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="
              relative
              h-10
              w-10
              overflow-hidden
              rounded-xl
              border-slate-700
              bg-transparent
              transition-all
              duration-300
              hover:scale-105
              hover:border-blue-500
            "
            aria-label="Toggle Theme"
          />
        }
      >
        <AnimatePresence mode="wait">

          <motion.div
            key={resolvedTheme}
            initial={{
              rotate: -180,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 180,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </motion.div>

        </AnimatePresence>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}