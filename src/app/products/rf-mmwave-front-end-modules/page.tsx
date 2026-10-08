import type { Metadata } from "next";

import { products, productBands } from "@/components/landing/data";
import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { ProductListingCard } from "@/components/products/product-listing-card";
import { productListingImages } from "@/components/products/product-listing-images";

export const metadata: Metadata = {
  title: "RF & mm-Wave Front End Modules | Linear Amptech",
  description:
    "Fully integrated transmitter, receiver, and radar front-end chip families from Linear Amptech.",
};

const frontEndModuleSlugs = [
  "fully-integrated-transmitter-chip",
  "fully-integrated-receiver-chip",
  "fully-integrated-radar-front-end-chip",
] as const;

const frontEndModules = frontEndModuleSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is NonNullable<typeof product> =>
    Boolean(product),
  );

export default function RfMmWaveFrontEndModulesPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
          <p className="kicker mb-4">Integrated RFICs</p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            RF & mm-Wave Front End Modules
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Fully integrated transmitter, receiver, and radar front-end chips
            based on GF 130nm SiGe BiCMOS technology for high-frequency RF
            systems.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {frontEndModules.map((product) => (
              <ProductListingCard
                key={product.slug}
                title={product.name}
                href={`/products/${product.slug}`}
                image={productListingImages[product.slug] ?? product.image}
                alt={product.alt}
                band={productBands[product.slug]?.label}
                variant="flat"
              />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
