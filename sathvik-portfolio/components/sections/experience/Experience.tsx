"use client";

import Section from "@/components/ui/Section";
import ExperienceTimeline from "./ExperienceTimeline";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        badge="Experience"
        title="My"
        highlight="Professional Journey"
        description="Nearly two years of experience delivering enterprise workflow automation and modern software solutions."
      />

      <ExperienceTimeline />
    </Section>
  );
}