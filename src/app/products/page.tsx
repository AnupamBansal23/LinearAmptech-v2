import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  RadioTower,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

import { products, productBands } from "@/components/landing/data";
import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { ProductListingCard } from "@/components/products/product-listing-card";
import { productListingImages } from "@/components/products/product-listing-images";
import { rfPowerAmplifierCategories } from "@/components/products/rf-power-amplifiers-data";

export const metadata: Metadata = {
  title: "Products | Linear Amptech",
  description:
    "Explore Linear Amptech RF power amplifiers, mm-wave front-end ICs, and phase shifter ICs.",
};

type ProductLink = {
  title: string;
  href: string;
  image?: string;
  operatingBand?: string;
};

type ProductCategory = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: LucideIcon;
  items: ProductLink[];
};

const frontEndModuleSlugs = [
  "fully-integrated-transmitter-chip",
  "fully-integrated-receiver-chip",
  "fully-integrated-radar-front-end-chip",
];

const frontEndModules = products.filter((product) =>
  frontEndModuleSlugs.includes(product.slug),
);

const phaseShifter = products.find(
  (product) => product.slug === "8-bit-phase-shifter-chip",
);

const productCategories: ProductCategory[] = [
  {
    title: "RF & mm-Wave Power Amplifier",
    eyebrow: "Power amplifier families",
    description:
      "Hybrid MIC modules and GaN-on-SiC MMIC PA chips for high-power RF and mm-wave systems.",
    href: "/products/rf/power-amplifiers",
    icon: RadioTower,
    items: rfPowerAmplifierCategories.map((category) => ({
      title: category.title,
      href: category.href,
      image: productListingImages[category.slug] ?? category.image,
      operatingBand: category.operatingBand,
    })),
  },
  {
    title: "RF & mm-Wave Front End Modules",
    eyebrow: "Integrated RFICs",
    description:
      "Fully integrated transmitter, receiver, and radar front-end chips from the mm-wave portfolio.",
    href: "/products/rf-mmwave-front-end-modules",
    icon: Cpu,
    items: frontEndModules.map((product) => ({
      title: product.name,
      href: `/products/${product.slug}`,
      image: productListingImages[product.slug] ?? product.image,
      operatingBand: productBands[product.slug]?.label,
    })),
  },
  {
    title: "Phase Shifter",
    eyebrow: "Beamforming IC",
    description:
      "Phase-shifting IC capability for phased arrays, radar front ends, and reconfigurable RF systems.",
    href: "/products/8-bit-phase-shifter-chip",
    icon: ScanLine,
    items: phaseShifter
      ? [
          {
            title: phaseShifter.name,
            href: `/products/${phaseShifter.slug}`,
            image:
              productListingImages[phaseShifter.slug] ?? phaseShifter.image,
            operatingBand: productBands[phaseShifter.slug]?.label,
          },
        ]
      : [],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
          <p className="kicker mb-4">All Products</p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            RF Front-End Product Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Browse the portfolio by category: power amplifiers, integrated
            front-end ICs, and phase shifter ICs.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <Reveal>
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {productCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="group flex min-h-[22rem] flex-col p-7"
                  >
                    <div className="grid size-12 place-items-center rounded-lg border border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className="mt-8 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                      {category.eyebrow}
                    </p>
                    <h2 className="mt-3 font-heading text-[1.55rem] font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                      {category.title}
                    </h2>
                    <p className="mt-5 flex-1 text-[0.95rem] leading-8 text-[color:var(--color-text-muted)] xl:text-lg">
                      {category.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-[color:var(--color-primary-deep)]">
                      View category
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-20 space-y-20">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Reveal key={category.title}>
                  <section className="border-t border-[color:var(--color-border)] pt-12">
                    <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
                      <div>
                        <div className="grid size-12 place-items-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <p className="mt-5 font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                          {category.eyebrow}
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                          {category.title}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)] xl:text-xl xl:leading-8">
                          {category.description}
                        </p>
                        <Link
                          href={category.href}
                          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
                        >
                          Open category
                          <ArrowRight
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>

                      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <ProductListingCard
                            key={item.href}
                            title={item.title}
                            href={item.href}
                            image={item.image}
                            band={item.operatingBand}
                            variant="flat"
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
