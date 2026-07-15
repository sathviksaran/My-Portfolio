"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-blue-500
      hover:shadow-[0_20px_60px_rgba(59,130,246,.25)]
      "
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-7">

        <p className="text-blue-400 text-sm">
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-5 text-slate-400 leading-8">
          {project.description}
        </p>

        {/* Highlights */}

        <div className="mt-6 space-y-3">

          {project.highlights.map((item: string) => (

            <div
              key={item}
              className="flex items-start gap-3"
            >

              <FaCheckCircle className="mt-1 text-blue-500" />

              <span className="text-slate-300">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-2">

          {project.technologies.map((tech: string) => (

            <span
              key={tech}
              className="
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-3
              py-1
              text-sm
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            className="
            flex-1
            rounded-xl
            bg-blue-600
            py-3
            text-center
            font-semibold
            hover:bg-blue-700
            transition
            "
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="
            flex-1
            rounded-xl
            border
            border-blue-500
            py-3
            text-center
            font-semibold
            hover:bg-blue-500
            transition
            "
          >
            <FaExternalLinkAlt className="inline mr-2" />
            Demo
          </a>

        </div>

      </div>

    </div>
  );
}