"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { portfolio } from "@/data/portfolio";

const facts = [
  {
    icon: Briefcase,
    title: "Experience",
    value: `${portfolio.personal.experience}+ Years`,
  },
  {
    icon: Building2,
    title: "Company",
    value: portfolio.personal.company,
  },
  {
    icon: MapPin,
    title: "Location",
    value: portfolio.personal.location,
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech (CSE)",
  },
];

export default function AboutFacts() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {facts.map((fact) => {
        const Icon = fact.icon;

        return (
          <GlassCard
            key={fact.title}
            className="flex flex-col items-center text-center"
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-white
                shadow-lg
              "
            >
              <Icon size={26} />
            </div>

            <h4
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {fact.title}
            </h4>

            <p
              className="
                mt-2
                text-slate-600
                dark:text-slate-400
              "
            >
              {fact.value}
            </p>
          </GlassCard>
        );
      })}
    </motion.div>
  );
}