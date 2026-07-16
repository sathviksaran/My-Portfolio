"use client";

import { motion } from "framer-motion";

import {
  Building2,
  CalendarDays,
  CircleCheck,
} from "lucide-react";



import type { Experience } from "@/types/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative pl-16"
    >
      {/* Timeline Dot */}

      <div
        className="
        absolute
        left-1
        top-8
        h-8
        w-8
        rounded-full
        border-4
        border-white
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        shadow-lg
        dark:border-slate-950
      "
      />

      <GlassCard>

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-3xl font-bold">
              {experience.role}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-blue-500">

              <Building2 size={18} />

              <span className="font-medium">
                {experience.company}
              </span>

            </div>

          </div>

          <div className="flex items-center gap-2 text-slate-500">

            <CalendarDays size={18} />

            {experience.duration}

          </div>

        </div>

        {/* Description */}

        <p className="mt-8 leading-8 text-slate-600 dark:text-slate-400">
          {experience.description}
        </p>

        {/* Responsibilities */}

        <div className="mt-10">

          <h4 className="mb-5 text-lg font-semibold">
            Responsibilities
          </h4>

          <div className="grid gap-4 md:grid-cols-2">

            {experience.responsibilities.map((item) => (
              <div
                key={item}
                className="flex gap-3"
              >
                <CircleCheck
                  className="mt-1 text-green-500"
                  size={18}
                />

                <span className="text-slate-600 dark:text-slate-400">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Tech Stack */}

        <div className="mt-10">

          <h4 className="mb-5 text-lg font-semibold">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (
              <TechBadge
                key={tech}
                label={tech}
              />
            ))}

          </div>

        </div>

      </GlassCard>

    </motion.div>
  );
}