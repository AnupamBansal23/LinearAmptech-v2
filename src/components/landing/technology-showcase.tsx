"use client";

import Image from "next/image";

import {
  useImageTheme,
  type ImageThemeMode,
} from "@/components/layout/image-theme-provider";
import type { IpPlatform } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export type TechnologyPlatform = Pick<
  IpPlatform,
  "name" | "image" | "description"
>;

const technologyImageSets: Record<
  TechnologyPlatform["name"],
  Record<ImageThemeMode, string>
> = {
  "III-V GaN Technology": {
    new: "/assets/technology/gan-hemt-platform-v3.png",
    old: "/assets/technology/gan-hemt-platform-v2.png",
  },
  "Si CMOS Technology": {
    new: "/assets/technology/si-cmos-platform-v3.png",
    old: "/assets/technology/si-cmos-platform-v2.png",
  },
  "SiGe BiCMOS Technology": {
    new: "/assets/technology/sige-bicmos-platform-v3.png",
    old: "/assets/technology/sige-bicmos-platform-v2.png",
  },
};

function TechnologyCard({
  platform,
  mode,
}: {
  platform: TechnologyPlatform;
  mode: ImageThemeMode;
}) {
  const platformImage =
    technologyImageSets[platform.name]?.[mode] ?? platform.image;

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-media-well)]">
        <Image
          src={platformImage}
          alt={`${platform.name} technology visual`}
          fill
          sizes="(min-width: 1024px) 31vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-[color:var(--color-border)] px-1 pt-5 pb-2">
        <h3 className="font-heading text-[23px] font-semibold tracking-tight text-[color:var(--color-text)]">
          {platform.name}
        </h3>
        <p className="mt-2.5 mb-5 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-text-muted)] xl:line-clamp-none xl:text-lg xl:leading-7">
          {platform.description}
        </p>
      </div>
    </article>
  );
}

export function TechnologyShowcase({
  platforms,
}: {
  platforms: TechnologyPlatform[];
}) {
  const { mode } = useImageTheme();

  return (
    <section
      id="technology"
      className="bg-[color:var(--color-bg)] py-24 lg:py-28"
    >
      <Reveal className="container mx-auto w-full px-4 lg:px-4">
        <div className="max-w-3xl">
          <p className="kicker mb-4">Technology</p>
          <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-[color:var(--color-text)] text-balance sm:text-4xl lg:text-[44px]">
            Engineering across semiconductor technologies.
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-9">
          {platforms.map((platform) => (
            <TechnologyCard
              key={platform.name}
              platform={platform}
              mode={mode}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
