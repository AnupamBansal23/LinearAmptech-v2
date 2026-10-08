import type { Metadata } from "next";

import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { ProductListingCard } from "@/components/products/product-listing-card";
import { productListingImages } from "@/components/products/product-listing-images";
import {
  rfPowerAmplifierCategories,
  rfPowerAmplifierIntro,
} from "@/components/products/rf-power-amplifiers-data";

export const metadata: Metadata = {
  title: "RF & mm-Wave Power Amplifiers | Linear Amptech",
  description:
    "Linear Amptech RF and mm-wave power amplifier categories, including Hybrid MIC PA modules and GaN-on-SiC MMIC PA chips.",
};

export default function RfPowerAmplifiersPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
          <p className="kicker mb-4">RF Product Line</p>
          <h1 className="font-heading max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            RF & mm-Wave Power Amplifiers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            {rfPowerAmplifierIntro.description}
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {rfPowerAmplifierCategories.map((category) => (
              <ProductListingCard
                key={category.slug}
                title={category.title}
                href={category.href}
                image={productListingImages[category.slug] ?? category.image}
                alt={category.alt}
                band={category.operatingBand}
                variant="flat"
              />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
