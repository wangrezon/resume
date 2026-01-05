"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, ChevronDown } from "lucide-react";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-dvh flex flex-col items-center justify-center text-center px-4 overflow-hidden snap-start snap-always">
      {/* Background blobs for playful feel */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative mb-8"
      >
        <div className="clay-card p-2 bg-white/50 backdrop-blur-sm border-4 border-white dark:border-slate-800">
          <Image
            src="/avatar.webp"
            alt="Rozen"
            width={120}
            height={120}
            className="rounded-[1.5rem]"
            priority
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-6xl md:text-7xl font-bold text-foreground mb-4"
      >
        {t("name")}
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-sans text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl"
      >
        {t("role")} •{" "}
        <span className="text-purple-600 dark:text-purple-400 font-bold">
          {t("mode")}
        </span>
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-6 w-full"
      >
        <a
          href="mailto:wangrozen@outlook.com"
          className="clay-card group max-w-full flex items-center gap-4 px-8 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-rose-300 transition-all duration-300 shadow-xl"
          title="Email"
        >
          <div className="clay-button p-3 text-white bg-rose-500 group-hover:rotate-12 transition-transform shadow-lg">
            <Mail size={24} />
          </div>
          <span className="font-sans font-black text-xl text-slate-800 dark:text-slate-100 tracking-tight">
            wangrozen@outlook.com
          </span>
        </a>

        <div className="flex gap-4">
          <a
            href="https://github.com/wangrezon"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-card p-4 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://x.com/Rozen_Wang"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-card p-4 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
            title="X"
          >
            <Twitter size={24} />
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="clay-card p-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-purple-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
