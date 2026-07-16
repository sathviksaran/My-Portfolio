"use client";

import { portfolio } from "@/data/portfolio";
import SkillCategory from "./SkillCategory";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {portfolio.technologies.map((category) => (
        <SkillCategory
          key={category.category}
          category={category}
        />
      ))}
    </div>
  );
}