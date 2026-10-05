"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  useImageTheme,
  type ImageThemeMode,
} from "@/components/layout/image-theme-provider";
import { heroSlides as heroSlideContent } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
};

type HeroImage = Pick<HeroSlide, "imagePath" | "imageAlt">;

const heroImageSets: Record<ImageThemeMode, HeroImage[]> = {
  new: [
    {
      imagePath: "/assets/hero/rf-front-end-hero-v2.png",
      imageAlt: "RF front-end technology hero visual",
    },
    {
      imagePath: "/assets/hero/gan-pa-module-hero-v2.png",
      imageAlt: "GaN power amplifier module hero visual",
    },
    {
      imagePath: "/assets/hero/cmos-rfic-development-hero-v2.png",
      imageAlt: "Si CMOS RFIC development hero visual",
    },
    {
      imagePath: "/assets/hero/sige-rfic-development-hero-v2.png",
      imageAlt: "SiGe BiCMOS RFIC development hero visual",
    },
    {
      imagePath: "/assets/hero/mmwave-packaging-hero-v3.png",
      imageAlt: "mm-wave packaging integration hero visual",
    },
  ],
  old: [
    {
      imagePath: "/assets/hero/rfic-chip.png",
      imageAlt: "Linear-AmpTech RFIC chip hero visual",
    },
    {
      imagePath: "/assets/hero/rf-lab-validation.png",
      imageAlt: "GaN power amplifier module hero visual",
    },
    {
      imagePath: "/assets/hero/silicon-wafer.png",
      imageAlt: "Si CMOS RFIC development hero visual",
    },
    {
      imagePath: "/assets/hero/transmitter-47ghz.png",
      imageAlt: "47 GHz transmitter chip hero visual",
    },
    {
      imagePath: "/assets/hero/silicon-wafer.png",
      imageAlt: "Semiconductor wafer hero visual",
    },
  ],
};

const SLIDE_DURATION = 5200;

export function LandingHeroSlider() {
  const { mode } = useImageTheme();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(true);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const isPlaybackPaused = isSliderPaused || isNavHovered;
  const heroSlides = useMemo<HeroSlide[]>(() => {
    const heroImages = heroImageSets[mode];

    return heroSlideContent.map((slide, index) => {
      const image = heroImages[index % heroImages.length];

      return {
        eyebrow: slide.eyebrow,
        title: slide.title,
        description: slide.description,
        imagePath: image.imagePath,
        imageAlt: image.imageAlt,
      };
    });
  }, [mode]);

  useEffect(() => {
    if (isPlaybackPaused) return;

    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, [heroSlides.length, isPlaybackPaused]);

  const activeSlide = heroSlides[activeHeroSlide];

  const showPreviousSlide = () =>
    setActiveHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );

  const showNextSlide = () =>
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);

  return (
    <section className="relative isolate h-[100svh] overflow-hidden bg-[color:var(--color-bg)] pb-12 pt-24 text-white sm:pb-14 sm:pt-28">
      {/* Photography */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {heroSlides.map((slide, index) => (
          <motion.div
            key={`${mode}-${slide.title}-${index}`}
            className="absolute inset-0 bg-cover bg-[position:60%_50%] bg-no-repeat will-change-transform sm:bg-[position:64%_50%]"
            style={{ backgroundImage: `url(${slide.imagePath})` }}
            initial={false}
            animate={{ opacity: activeHeroSlide === index ? 1 : 0 }}
            transition={{
              opacity: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
            }}
          />
        ))}
      </motion.div>

      {/* Neutral legibility scrim — derived from the page ground so the hero
          reads as the same surface as the content below (no palette seam). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(0,0,0,0.92)_40%,rgba(0,0,0,0.55)_64%,rgba(0,0,0,0.08)_90%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-72 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.85)_78%,var(--color-bg)_100%)]"
      />

      <div className="container relative z-10 mx-auto flex h-full flex-col px-4 lg:px-4">
        {/* Headline block — vertically centered */}
        <div className="flex flex-1 items-center">
          <Reveal>
            <div className="max-w-[44rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-mono text-[12px] uppercase tracking-[0.32em] text-[color:var(--color-primary-deep)]">
                    {activeSlide.eyebrow}
                  </p>
                  <h1 className="mt-5 max-w-[40rem] text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                    {activeSlide.title}
                  </h1>
                  <p className="mt-6 max-w-[34rem] text-base leading-7 text-white/65 sm:text-lg xl:text-xl xl:leading-8">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-9 flex items-center flex-wrap gap-5">
                <Link
                  href="#products"
                  className="group btn-primary h-12 gap-2.5 px-6 text-sm font-semibold"
                >
                  Explore products
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[color:var(--color-primary-ink)] underline-offset-4 transition-colors hover:text-[color:var(--color-text)] hover:underline"
                >
                  Talk to engineering
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Controls + slide index */}
        <div className="mt-10 flex flex-col gap-7">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile dots */}
            <div className="flex items-center gap-2 md:hidden">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveHeroSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeHeroSlide === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeHeroSlide === index
                      ? "w-6 bg-[color:var(--color-primary)]"
                      : "w-1.5 bg-white/30",
                  )}
                />
              ))}
            </div>

            <span className="hidden font-mono text-xs text-white/45 md:inline">
              {String(activeHeroSlide + 1).padStart(2, "0")}
              <span className="text-white/25">
                {" "}
                / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSliderPaused((current) => !current)}
                aria-label={
                  isSliderPaused ? "Play slideshow" : "Pause slideshow"
                }
                aria-pressed={isSliderPaused}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[color:var(--color-accent-border)] hover:text-white"
              >
                {isSliderPaused ? (
                  <Play className="size-4" aria-hidden="true" />
                ) : (
                  <Pause className="size-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={showPreviousSlide}
                aria-label="Previous slide"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[color:var(--color-accent-border)] hover:text-white"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextSlide}
                aria-label="Next slide"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[color:var(--color-accent-border)] hover:text-white"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Slide index — minimal progress tabs */}
          <div
            className="hidden items-start gap-6 md:grid"
            style={{
              gridTemplateColumns: `repeat(${heroSlides.length}, minmax(0, 1fr))`,
            }}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            {heroSlides.map((slide, index) => {
              const active = activeHeroSlide === index;
              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveHeroSlide(index)}
                  onMouseEnter={() => {
                    setIsNavHovered(true);
                    setActiveHeroSlide(index);
                  }}
                  className="group flex flex-col text-left"
                  aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                  aria-current={active}
                >
                  <div className="relative h-px w-full overflow-hidden bg-white/15">
                    {active ? (
                      <span
                        key={activeHeroSlide}
                        className={cn(
                          "absolute inset-y-0 left-0 block w-full origin-left bg-[color:var(--color-primary-deep)] [animation:heroProgress_5.2s_linear_forwards]",
                          isPlaybackPaused && "[animation-play-state:paused]",
                        )}
                      />
                    ) : null}
                  </div>
                  <span
                    className={cn(
                      "mt-3 block font-mono text-xs transition-colors",
                      active
                        ? "text-[color:var(--color-primary-ink)]"
                        : "text-white/35",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "mt-1.5 block text-sm leading-snug transition-colors",
                      active
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/70",
                    )}
                  >
                    {slide.eyebrow}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
