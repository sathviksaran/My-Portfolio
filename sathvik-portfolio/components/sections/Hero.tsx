"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "3+",
    label: "Certifications",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-blue-400 font-semibold">
            👋 Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Sathvik
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Saran Atchukolu
            </span>
          </h1>

          {/* Typing */}

          <div className="mt-8 h-16 text-xl font-semibold text-slate-200 sm:text-2xl">

            <TypeAnimation
              sequence={[
                "Associate IT Consultant",
                2000,
                "SharePoint Administrator",
                2000,
                "Power Automate Developer",
                2000,
                "Python Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />

          </div>

          {/* Availability */}

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>

            Available for Opportunities

          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">

            Associate IT Consultant with nearly{" "}

            <span className="font-semibold text-blue-400">
              2 years of experience
            </span>

            {" "}building enterprise workflow automation using{" "}

            <span className="text-blue-400">SharePoint</span>,{" "}

            <span className="text-blue-400">Power Automate</span>,{" "}

            <span className="text-blue-400">Python</span>,{" "}

            <span className="text-blue-400">Azure</span> and{" "}

            <span className="text-blue-400">AWS</span>.

            <br />
            <br />

            Passionate about creating scalable automation solutions,
            cloud-based applications and modern web experiences.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/resume.pdf"
              className="w-full rounded-xl bg-blue-600 px-8 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="w-full rounded-xl border border-blue-500 px-8 py-4 text-center font-semibold transition-all duration-300 hover:bg-blue-500 sm:w-auto"
            >
              View Projects
            </a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-6 text-2xl">

            <a
              href="https://github.com/sathviksaran"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sathvik-saran-atchukolu-403733227"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:atchukolus@gmail.com"
              className="transition hover:text-blue-400"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6">

            {stats.map((stat) => (

              <div key={stat.label}>

                <h3 className="text-3xl font-bold text-blue-500 sm:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

            <div className="rounded-full border-4 border-blue-500 p-2 shadow-[0_0_60px_rgba(59,130,246,.45)]">

              <Image
                src="/images/profile.jpg"
                alt="Sathvik Saran Atchukolu"
                width={420}
                height={420}
                priority
                className="rounded-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">

        <FaArrowDown className="text-xl text-blue-400" />

      </div>

    </section>
  );
}