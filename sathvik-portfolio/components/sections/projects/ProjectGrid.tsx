"use client";

import { portfolio } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {portfolio.projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}