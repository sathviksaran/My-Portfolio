"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 180,
        y: position.y - 180,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        z-0
        h-[360px]
        w-[360px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
      "
    />
  );
}