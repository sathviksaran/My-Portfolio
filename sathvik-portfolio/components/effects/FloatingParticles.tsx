"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, left: 5, top: 8, size: 5, duration: 18, delay: 0 },
  { id: 2, left: 15, top: 30, size: 8, duration: 20, delay: 1 },
  { id: 3, left: 25, top: 70, size: 6, duration: 15, delay: 2 },
  { id: 4, left: 40, top: 20, size: 10, duration: 22, delay: 0.5 },
  { id: 5, left: 55, top: 50, size: 7, duration: 19, delay: 3 },
  { id: 6, left: 70, top: 12, size: 6, duration: 16, delay: 2 },
  { id: 7, left: 85, top: 40, size: 9, duration: 24, delay: 1.5 },
  { id: 8, left: 92, top: 80, size: 5, duration: 18, delay: 4 },
  { id: 9, left: 30, top: 90, size: 8, duration: 20, delay: 2.5 },
  { id: 10, left: 60, top: 85, size: 6, duration: 21, delay: 1 },
  { id: 11, left: 12, top: 55, size: 5, duration: 17, delay: 3 },
  { id: 12, left: 48, top: 8, size: 9, duration: 22, delay: 2 },
  { id: 13, left: 78, top: 65, size: 7, duration: 19, delay: 0 },
  { id: 14, left: 90, top: 18, size: 6, duration: 23, delay: 1 },
  { id: 15, left: 35, top: 45, size: 10, duration: 18, delay: 2 },
  { id: 16, left: 20, top: 15, size: 7, duration: 20, delay: 4 },
  { id: 17, left: 68, top: 32, size: 5, duration: 16, delay: 2 },
  { id: 18, left: 82, top: 55, size: 8, duration: 22, delay: 0.5 },
  { id: 19, left: 45, top: 72, size: 6, duration: 19, delay: 3 },
  { id: 20, left: 8, top: 88, size: 9, duration: 21, delay: 1 },
];

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0.25,
            scale: 1,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          className="
            absolute
            rounded-full
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-indigo-400
            shadow-lg
            shadow-cyan-500/40
          "
        />
      ))}
    </div>
  );
}