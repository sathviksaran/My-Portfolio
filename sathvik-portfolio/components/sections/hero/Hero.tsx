"use client";

import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroStats from "./HeroStats";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroLeft />
          <HeroRight />
        </div>

        <HeroStats />

        <HeroScroll />
      </div>
    </section>
  );
}