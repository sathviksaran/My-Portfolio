"use client";

import { motion } from "framer-motion";



import type { TechnologyCategory } from "@/types/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";

interface Props {
  category: TechnologyCategory;
}

export default function SkillCategory({
  category,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <GlassCard className="h-full">

        <h3
          className="
            mb-6
            text-xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          {category.category}
        </h3>

        <div className="flex flex-wrap gap-3">
          {category.items.map((tech) => (
            <TechBadge
              key={tech.name}
              label={tech.name}
              image={tech.image}
            />
          ))}
        </div>

      </GlassCard>
    </motion.div>
  );
}