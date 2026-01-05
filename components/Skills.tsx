"use client";

import { useTranslations, useMessages } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Skills = () => {
  const t = useTranslations("Sections");
  const messages = useMessages() as unknown as { Skills: string[] };
  const skills = messages.Skills || [];

  return (
    <section className="relative h-dvh flex flex-col justify-center py-16 px-4 max-w-6xl mx-auto snap-start snap-always">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
      >
        {t("skills")}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill: string, index: number) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className={`clay-badge px-6 py-3 text-white font-black text-lg cursor-default shadow-xl
              ${
                index % 3 === 0
                  ? "bg-purple-600 dark:bg-purple-500"
                  : index % 3 === 1
                  ? "bg-rose-600 dark:bg-rose-500"
                  : "bg-amber-600 dark:bg-amber-500"
              }`}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="clay-card p-2 bg-white/50 dark:bg-slate-900/50 text-slate-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
