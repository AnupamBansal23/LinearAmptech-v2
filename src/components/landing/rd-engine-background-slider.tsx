"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RdEngineSlide = {
  src: string;
  description: string;
  objectPosition: string;
  motion: {
    scaleFrom: number;
    scaleTo: number;
    xFrom: string;
    xTo: string;
    yFrom: string;
    yTo: string;
  };
};

const SLIDE_DURATION_MS = 7600;
const CROSSFADE_SECONDS = 1.6;

const rdEngineSlides: RdEngineSlide[] = [
  {
    src: "/assets/rd-engine/wafer-probe-lab.png",
    description:
      "Wafer-level RF probing environment for semiconductor characterization and device research.",
    objectPosition: "62% 50%",
    motion: {
      scaleFrom: 1.02,
      scaleTo: 1.075,
      xFrom: "0%",
      xTo: "-1.4%",
      yFrom: "0%",
      yTo: "0.8%",
    },
  },
  {
    src: "/assets/rd-engine/rf-validation-bench.png",
    description:
      "RF validation bench with instrumentation for packaged hardware measurement and prototype bring-up.",
    objectPosition: "70% 50%",
    motion: {
      scaleFrom: 1.035,
      scaleTo: 1.085,
      xFrom: "-0.6%",
      xTo: "1%",
      yFrom: "0.5%",
      yTo: "-0.7%",
    },
  },
  {
    src: "/assets/rd-engine/mmic-inspection-lab.png",
    description:
      "MMIC inspection and RF probe station setup for device-level semiconductor R&D.",
    objectPosition: "68% 50%",
    motion: {
      scaleFrom: 1.025,
      scaleTo: 1.08,
      xFrom: "-0.4%",
      xTo: "1.1%",
      yFrom: "-0.2%",
      yTo: "0.7%",
    },
  },
  {
    src: "/assets/rd-engine/mmwave-validation-lab.png",
    description:
      "mmWave prototype validation bench with shielded fixture, RF connectors, and measurement instrumentation.",
    objectPosition: "72% 50%",
    motion: {
      scaleFrom: 1.03,
      scaleTo: 1.085,
      xFrom: "0.6%",
      xTo: "-1.1%",
      yFrom: "0.4%",
      yTo: "-0.6%",
    },
  },
];

export function RdEngineBackgroundSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % rdEngineSlides.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const visibleSlide = shouldReduceMotion ? 0 : activeSlide;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--color-media-well)]"
    >
      {rdEngineSlides.map((slide, index) => {
        const isActive = visibleSlide === index;
        const motionState =
          !shouldReduceMotion && isActive
            ? {
                scale: slide.motion.scaleTo,
                x: slide.motion.xTo,
                y: slide.motion.yTo,
              }
            : {
                scale: slide.motion.scaleFrom,
                x: slide.motion.xFrom,
                y: slide.motion.yFrom,
              };

        return (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0 : CROSSFADE_SECONDS,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <motion.div
              className="absolute -inset-[3%] bg-cover bg-no-repeat"
              data-image-description={slide.description}
              style={{
                backgroundImage: `url(${slide.src})`,
                backgroundPosition: slide.objectPosition,
              }}
              initial={false}
              animate={motionState}
              transition={{
                scale: {
                  duration: shouldReduceMotion ? 0 : SLIDE_DURATION_MS / 1000,
                  ease: "linear",
                },
                x: {
                  duration: shouldReduceMotion ? 0 : SLIDE_DURATION_MS / 1000,
                  ease: "linear",
                },
                y: {
                  duration: shouldReduceMotion ? 0 : SLIDE_DURATION_MS / 1000,
                  ease: "linear",
                },
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
