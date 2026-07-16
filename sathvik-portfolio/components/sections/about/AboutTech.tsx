"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";

// import { technologies } from "@/data/technologies";

import { portfolio } from "@/data/portfolio"

export default function AboutTech() {

    featuredTechnologies: [
  {
    name: "SharePoint",
    image: "/icons/sharepoint.svg",
  },
  {
    name: "Power Automate",
    image: "/icons/power-automate.svg",
  },
  {
    name: "Azure",
    image: "/icons/azure.svg",
  },
  {
    name: "AWS",
    image: "/icons/aws.svg",
  },
  {
    name: "Python",
    image: "/icons/python.svg",
  },
  {
    name: "React",
    image: "/icons/react.svg",
  },
]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <SectionHeader
        badge="Tech Stack"
        title="Core"
        highlight="Technologies"
        description="Technologies I use to build enterprise workflow automation, cloud solutions and modern web applications."
      />

      <div className="flex flex-wrap justify-center gap-4">
  {portfolio.featuredTechnologies.map((tech) => (
    <TechBadge
      key={tech.name}
      label={tech.name}
      image={tech.image}
    />
  ))}
</div>
    </motion.div>
  );
}