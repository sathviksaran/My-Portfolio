"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">

            Featured{" "}

            <span className="gradient-text">
              Projects
            </span>

          </h2>

          <p className="text-center text-slate-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on, showcasing enterprise automation,
            web development, and full-stack application development.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              <ProjectCard project={project} />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}