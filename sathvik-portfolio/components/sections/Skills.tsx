"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Technical{" "}
            <span className="gradient-text">
              Skills
            </span>
          </h2>

          <p className="mt-5 text-center text-slate-400 max-w-2xl mx-auto">
            Technologies and tools that I use to build enterprise
            solutions, automation workflows and modern web applications.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {skillCategories.map((category, index) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-xl
                hover:shadow-blue-500/20
                "
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-blue-600 p-4 text-2xl">
                      <Icon />
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {category.title}
                      </h3>

                      <p className="text-blue-400 text-sm">
                        {category.level}
                      </p>

                    </div>

                  </div>

                </div>

                <p className="mt-6 text-slate-400 leading-8">
                  {category.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/30
                      px-4
                      py-2
                      text-sm
                      transition
                      group-hover:bg-blue-600/20
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}