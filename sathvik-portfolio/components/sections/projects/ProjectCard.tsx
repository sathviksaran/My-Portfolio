"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CalendarDays,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type { Project } from "@/types/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
      whileHover={{
        y: -8,
      }}
    >
      <GlassCard className="group overflow-hidden p-0">

        {/* Image */}

        <div className="relative overflow-hidden">

          <Image
            src={project.image || "/images/project-placeholder.jpg"}
            alt={project.title}
            width={800}
            height={500}
            className="
              h-60
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/80
    via-black/20
    to-transparent
    opacity-70
    transition-opacity
    duration-300
    group-hover:opacity-90
  "
/>

          {/* Status */}

          {project.status && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-blue-600
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              {project.status}
            </span>
          )}

          {/* Category */}

          {project.category && (
            <span
              className="
                absolute
                right-4
                top-4
                rounded-full
                bg-white/90
                px-3
                py-1
                text-xs
                font-semibold
                text-slate-900
              "
            >
              {project.category}
            </span>
          )}

          {project.featured && (
    <div
      className="
        absolute
        left-4
        bottom-4
        rounded-full
        bg-gradient-to-r
        from-amber-400
        to-orange-500
        px-3
        py-1
        text-xs
        font-semibold
        text-white
        shadow-lg
      "
    >
      ⭐ Featured
    </div>
  )}

        </div>

        {/* Content */}

        <div className="p-6">

          <div className="flex items-center justify-between">

            <h3
              className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              {project.title}
            </h3>

            {project.year && (
              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  text-slate-500
                "
              >
                <CalendarDays size={15} />
                {project.year}
              </div>
            )}
          </div>

          <p
            className="
              mt-4
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-6 flex flex-wrap gap-2">
  {project.technologies.slice(0, 4).map((tech) => (
    <TechBadge
      key={tech}
      label={tech}
      compact
    />
  ))}

  {project.technologies.length > 4 && (
    <TechBadge
      label={`+${project.technologies.length - 4}`}
      compact
    />
  )}
</div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">

            {project.github && (
              <Link
  href={project.github}
  target="_blank"
  className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-slate-300
    px-4
    py-2
    font-medium
    transition
    hover:border-blue-500
    hover:text-blue-600
    dark:border-slate-700
  "
>
  <FaGithub className="text-lg" />
  GitHub
</Link>
            )}

            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-4
                  py-2
                  font-medium
                  text-white
                  transition
                  hover:scale-105
                "
              >
                <ExternalLink size={18} />
                Live Demo
              </Link>
            )}

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}