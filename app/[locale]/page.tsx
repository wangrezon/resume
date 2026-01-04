import Image from "next/image";
import { Hero } from "@/components/playful-resume/Hero";
import { Skills } from "@/components/playful-resume/Skills";
import { AppShows } from "@/components/playful-resume/AppShows";
import { Experience } from "@/components/playful-resume/Experience";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IntlToggle } from "@/components/IntlToggle";

export default async function Home() {
  return (
    <main
      id="main-scroll-container"
      className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#F8FAFC] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 selection:bg-purple-200 selection:text-purple-900"
    >
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 clay-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-6 shadow-xl">
        <div className="flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-800">
          <Image
            src="/avatar.webp"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 object-cover shadow-sm"
          />
          <span className="font-heading font-bold text-lg hidden sm:inline-block text-slate-900 dark:text-slate-50">
            Rozen
          </span>
        </div>
        <div className="flex items-center gap-4">
          <IntlToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* App Shows Section */}
      <AppShows />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />
    </main>
  );
}
