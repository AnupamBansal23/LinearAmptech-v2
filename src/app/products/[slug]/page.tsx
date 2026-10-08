import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { products, productBands } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { productListingImages } from "@/components/products/product-listing-images";

const allProducts = [...products];

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product | Linear Amptech",
    };
  }

  return {
    title: `${product.name} | Linear Amptech`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const band = productBands[slug];
  const useFlatPhotoHero = Boolean(productListingImages[slug]);
  const heroImage = productListingImages[slug] ?? product.image;

  const heroStrip = [
    band ? { label: "Operating band", value: band.label } : null,
    ...product.specs,
  ]
    .filter((item): item is { label: string; value: string } => Boolean(item))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pt-32">
        <Reveal className="container mx-auto max-w-7xl px-4 pb-16 lg:px-4">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to products
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-[color:var(--color-accent-wash)] px-4 py-1.5 text-[13px] font-medium text-[color:var(--color-primary-ink)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-primary group mt-9 h-12 px-6 text-sm font-semibold"
              >
                Request Product Quote
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div
              className={
                useFlatPhotoHero ? "media-well aspect-[4/3]" : "media-frame"
              }
            >
              {useFlatPhotoHero ? (
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={product.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="product-plate aspect-[4/3] p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={heroImage}
                      alt={product.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
        <div className="border-t border-[color:var(--color-border)]">
          <div className="container mx-auto max-w-7xl px-4 lg:px-4">
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {heroStrip.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-3 border-t border-[color:var(--color-border)] py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:py-7 sm:pl-8 sm:pr-6 ${
                    index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                  />
                  <dt className="font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-sm leading-6 text-[color:var(--color-text)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.34fr_0.66fr] lg:px-4">
          <Reveal>
            <aside className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
              <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                Inquiry
              </p>
              <h2 className="font-heading text-2xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                Request a quote
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)] xl:text-base xl:leading-7">
                Share your application, target environment, integration needs,
                and timeline so the Linear Amptech team can respond with the
                right product path.
              </p>

              <Link
                href="/contact"
                className="btn-primary group mt-7 h-12 w-full px-6 text-sm font-semibold"
              >
                Get Quote
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </aside>
          </Reveal>

          <div className="grid gap-8">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between gap-3 border-b border-[color:var(--color-border)] px-5 py-3.5">
                  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                    Specifications
                  </p>
                  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                    Datasheet
                  </p>
                </div>
                <dl className="divide-y divide-[color:var(--color-border)]">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 px-5 py-4 sm:grid-cols-[0.5fr_1fr] sm:items-baseline sm:gap-6"
                    >
                      <dt className="font-mono text-[12px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-medium leading-6 text-[color:var(--color-text)] sm:text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal>
              <article className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                  Overview
                </p>
                <div className="mt-6 divide-y divide-[color:var(--color-border)]">
                  {product.detailSections.map((section) => (
                    <div
                      key={section.title}
                      className="py-5 first:pt-0 last:pb-0"
                    >
                      <h2 className="font-heading text-xl font-semibold tracking-normal text-[color:var(--color-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-2.5 text-base leading-7 text-[color:var(--color-text-muted)]">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            {product.gallery.length > 0 ? (
              <Reveal>
                <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
                  <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                    Gallery
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {product.gallery.map((item) => (
                      <figure
                        key={`${item.src}-${item.caption}`}
                        className="surface-card overflow-hidden"
                      >
                        <div className="media-well aspect-[4/3] rounded-none">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 28vw, 100vw"
                            className="object-contain p-3"
                          />
                        </div>
                        <figcaption className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
