import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Product listing card. The default style is retained for category and detail
 * listings; the flat variant is used on the all-products page for edge-to-edge
 * photography without a card plate.
 */
export function ProductListingCard({
  title,
  href,
  image,
  alt,
  band,
  variant = "default",
}: {
  title: string;
  href: string;
  image?: string;
  alt?: string;
  band?: string;
  variant?: "default" | "flat";
}) {
  const isFlat = variant === "flat";

  return (
    <article
      className={`group relative flex h-full flex-col ${isFlat ? "" : "surface-card surface-card-interactive p-3"}`}
    >
      <div
        className={
          isFlat
            ? "media-well aspect-[16/10] overflow-hidden"
            : "product-plate aspect-[16/10] p-2.5"
        }
      >
        <div
          className={`relative h-full w-full overflow-hidden ${isFlat ? "" : "rounded-md"}`}
        >
          {image ? (
            <Image
              src={image}
              alt={alt ?? title}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : null}
        </div>
      </div>
      <div
        className={`flex flex-1 flex-col gap-2.5 ${isFlat ? "pt-5" : "px-2.5 pt-5 pb-2.5"}`}
      >
        <h3 className="min-h-[2.75em] font-heading text-[21px] font-semibold leading-snug tracking-tight text-[color:var(--color-text)]">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </Link>
        </h3>
        {band ? (
          <div className="mt-1.5">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
              Operating band
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
              {band}
            </p>
          </div>
        ) : null}
        <div className="mt-auto pt-3">
          <Link
            href={href}
            className="group/view relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            View product
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/view:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
