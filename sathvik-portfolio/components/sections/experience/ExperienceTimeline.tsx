"use client";

import { portfolio } from "@/data/portfolio";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">

      {/* Timeline */}

      <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-blue-500/20" />

      <div className="space-y-12">
        {portfolio.experience.map((experience) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}