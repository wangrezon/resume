"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

export const AppShows = () => {
  const t = useTranslations("Sections");

  return (
    <section className="relative h-dvh flex flex-col justify-center py-16 px-4 max-w-6xl mx-auto snap-start snap-always">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
      >
        {t("apps")}
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="clay-card group relative p-12 md:p-16 flex flex-col items-center text-center overflow-hidden cursor-default bg-purple-50 dark:bg-slate-900/50 dark:border-slate-800 max-w-md w-full"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 dark:bg-white/5 rounded-bl-[6rem] group-hover:w-28 group-hover:h-28 transition-all duration-500" />

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="clay-card p-6 bg-white dark:bg-slate-800 mb-8"
          >
            <Sparkles size={48} className="text-purple-500" />
          </motion.div>

          <h3 className="font-heading text-3xl font-black text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
            Coming Soon
          </h3>

          <p className="font-sans text-slate-600 dark:text-slate-400 text-lg font-bold">
            Stay tuned for amazing projects!
          </p>

          <motion.div className="mt-10 w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="h-full w-1/2 bg-linear-to-r from-transparent via-purple-500 to-transparent"
            />
          </motion.div>
        </motion.div>
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
