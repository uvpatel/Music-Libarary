"use client";
import Link from "next/link";
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden px-4">
      {/* Background Spotlight */}
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20 z-0"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or refining your skills,
          join us to unlock your true potential.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="px-6 py-3 text-lg font-medium bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
