"use client";

import { useTranslations, useMessages } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef, useEffect, useState, useMemo } from "react";

interface ExperienceItem {
  period: string;
  company: string;
  description: string;
}

export const Experience = () => {
  const t = useTranslations("Sections");
  const messages = useMessages() as unknown as { Experience: ExperienceItem[] };
  const experiences = useMemo(
    () => messages.Experience || [],
    [messages.Experience]
  );

  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const mainContainer = document.getElementById("main-scroll-container");
    if (mainContainer) {
      containerRef.current = mainContainer;
    }

    const calculateRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    const timer = setTimeout(calculateRange, 100);
    window.addEventListener("resize", calculateRange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateRange);
    };
  }, [experiences]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section
      ref={targetRef}
      className="timeline-horizontal-container relative snap-start snap-always"
    >
      <div className="timeline-sticky sticky top-0 h-screen overflow-hidden pt-24 md:pt-28">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto w-full px-4 mb-8 relative z-30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white text-center"
          >
            {t("experience")}
          </motion.h2>
        </div>

        {/* Timeline Area - Vertically Centered below title */}
        <div className="relative grow flex items-center h-[50vh] w-full">
          {/* Main Horizontal Line - Centered vertically in this area */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="timeline-track relative z-10 flex items-center h-full"
          >
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.period}
                className="relative shrink-0 w-[480px] md:w-[640px] h-full flex flex-col items-center justify-center"
              >
                {/* Timeline Dot Connector - Always centered on the line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 clay-card bg-white dark:bg-slate-800 border-4 border-purple-500 flex items-center justify-center z-30 shadow-lg">
                  <Briefcase size={20} className="text-purple-500" />
                </div>

                {/* Content Card - Positioned strictly above or below the line */}
                <div
                  className={`clay-card p-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-purple-300 transition-all duration-300 w-[90%] md:w-[85%] z-20 shadow-xl
                    ${
                      index % 2 === 0
                        ? "absolute bottom-[calc(50%+40px)]"
                        : "absolute top-[calc(50%+40px)]"
                    }`}
                >
                  <span className="inline-block px-3 py-1 clay-badge bg-purple-600 dark:bg-purple-500 text-white text-xs font-black mb-3 shadow-md">
                    {exp.period}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 mb-2 leading-tight">
                    {exp.company}
                  </h3>
                  <p className="font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-bold text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-linear-to-r from-purple-500 to-rose-400 origin-left"
          />
        </div>
      </div>
    </section>
  );
};
