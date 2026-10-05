"use client";

import Image from "next/image";

import {
  useImageTheme,
  type ImageThemeMode,
} from "@/components/layout/image-theme-provider";
import type { Application } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const applicationImageSets: Record<
  Application["title"],
  Record<ImageThemeMode, string>
> = {
  "Defense and Aerospace": {
    new: "/assets/applications/defense-aerospace-v3.png",
    old: "/assets/applications/defense-aerospace-v2.png",
  },
  "Satellite Communications": {
    new: "/assets/applications/satellite-communications-v3.png",
    old: "/assets/applications/satellite-communications-v2.png",
  },
  "5G/6G Wireless Infrastructure": {
    new: "/assets/applications/wireless-6g-v3.png",
    old: "/assets/applications/wireless-6g-v2.png",
  },
  "Radar and AESA System": {
    new: "/assets/applications/mimo-radar-v3.png",
    old: "/assets/applications/mimo-radar-v2.png",
  },
};

const applicationObjectPositions: Partial<
  Record<Application["title"], string>
> = {
  "Defense and Aerospace": "object-[50%_18%]",
  "5G/6G Wireless Infrastructure": "object-[50%_38%]",
  "Radar and AESA System": "object-[50%_18%]",
};

function ApplicationCard({
  application,
  mode,
}: {
  application: Application;
  mode: ImageThemeMode;
}) {
  const imagePath =
    applicationImageSets[application.title]?.[mode] ?? application.image;
  const objectPosition =
    applicationObjectPositions[application.title] ?? "object-center";

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[16/11] overflow-hidden bg-[color:var(--color-media-well)]">
        <Image
          src={imagePath}
          alt={`${application.title} application visual`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]",
            objectPosition,
          )}
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-[color:var(--color-border)] px-1 pt-5 pb-2">
        <h3 className="font-heading text-[23px] font-semibold tracking-tight text-[color:var(--color-text)]">
          {application.title}
        </h3>
        <p className="mt-2.5 mb-5 text-sm leading-relaxed text-[color:var(--color-text-muted)] xl:text-lg xl:leading-7">
          {application.description}
        </p>
      </div>
    </article>
  );
}

export function ApplicationsShowcase({
  applications,
}: {
  applications: Application[];
}) {
  const { mode } = useImageTheme();

  return (
    <section
      id="applications"
      className="bg-[color:var(--color-surface-soft)] py-24"
    >
      <Reveal className="container mx-auto w-full px-4 lg:px-4">
        <div className="max-w-3xl">
          <p className="kicker mb-4">Applications</p>
          <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-[color:var(--color-text)] text-balance sm:text-4xl lg:text-[44px]">
            RF products shaped around real deployment domains.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Linear-AmpTech&apos;s application framing is anchored in defense RF,
            6G, radar, phased arrays, active antennas, and RIS research.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((application) => (
            <ApplicationCard
              key={application.title}
              application={application}
              mode={mode}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
