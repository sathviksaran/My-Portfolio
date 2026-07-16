import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-4
            py-1.5
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-blue-600
            dark:text-blue-400
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-5
          text-4xl
          font-extrabold
          leading-tight
          text-slate-900
          dark:text-white
          sm:text-5xl
        "
      >
        {title}{" "}
        {highlight && (
          <span
            className="
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-indigo-500
              bg-clip-text
              text-transparent
            "
          >
            {highlight}
          </span>
        )}
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}