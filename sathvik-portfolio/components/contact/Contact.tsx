"use client";

import { motion } from "framer-motion";

import FloatingParticles from "@/components/effects/FloatingParticles";

import ContactInfo from "./ContactForm";
import ContactForm from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-5 sm:px-6 lg:px-8"
    >
      {/* Background */}

      <FloatingParticles />

      {/* Animated Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-5
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Decorative Blobs */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1.15, 1, 1.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Whether you have a job opportunity,
            freelance project,
            or simply want to connect,
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Two Columns */}

        <div className="grid gap-14 lg:grid-cols-2">

          <ContactForm />
          
          <ContactInfo />

        </div>

      </div>

      {/* Bottom Divider */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-3/4
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-500/40
          to-transparent
        "
      />

    </section>
  );
}