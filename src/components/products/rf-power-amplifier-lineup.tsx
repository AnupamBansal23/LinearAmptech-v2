import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { rfPowerAmplifierTableRows } from "@/components/products/rf-power-amplifiers-data";

export function RfPowerAmplifierLineup() {
  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
        <h2 className="font-heading text-3xl font-semibold tracking-normal text-[color:var(--color-text)]">
          Hybrid MIC Power Amplifier Module Lineup
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:hidden">
        {rfPowerAmplifierTableRows.map((row) => (
          <article
            key={row.partNumber}
            className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 break-words font-[family-name:var(--font-sora)] text-sm font-semibold text-[color:var(--color-text)]">
                {row.slug ? (
                  <Link
                    href={`/products/rf/power-amplifiers/${row.slug}`}
                    className="transition-colors hover:text-[color:var(--color-primary-deep)]"
                  >
                    {row.partNumber}
                  </Link>
                ) : (
                  row.partNumber
                )}
              </p>
              {row.slug ? (
                <Link
                  href={`/products/rf/power-amplifiers/${row.slug}`}
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
                >
                  Details
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </Link>
              ) : row.datasheetHref ? (
                <a
                  href={row.datasheetHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
                >
                  Details
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { label: "Center Freq (GHz)", value: row.centerFrequencyGhz },
                { label: "Output Power (W)", value: row.outputPowerW },
                { label: "Efficiency", value: row.efficiency },
                { label: "Gain (dB)", value: row.gainDb },
              ].map((field) => (
                <div key={field.label}>
                  <dt className="font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                    {field.label}
                  </dt>
                  <dd className="mt-1 text-sm tabular-nums text-[color:var(--color-text)]">
                    {field.value}
                  </dd>
                </div>
              ))}
              <div className="col-span-2">
                <dt className="font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                  Mode of Operation
                </dt>
                <dd className="mt-1 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {row.modeOfOperation}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="mt-6 hidden overflow-x-auto md:block">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[color:var(--color-border-strong)]">
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Part Number
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Center Frequency (GHz)
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Output Power (W)
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Efficiency
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Gain (dB)
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Type Mode of Operation
              </th>
              <th className="px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-[color:var(--color-primary-deep)]">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {rfPowerAmplifierTableRows.map((row) => (
              <tr
                key={row.partNumber}
                className="border-b border-[color:var(--color-border)] transition-colors last:border-b-0 hover:bg-[color:var(--color-surface-soft)]"
              >
                <td className="px-4 py-4 font-[family-name:var(--font-sora)] font-medium text-[color:var(--color-text)]">
                  {row.slug ? (
                    <Link
                      href={`/products/rf/power-amplifiers/${row.slug}`}
                      className="transition-colors hover:text-[color:var(--color-primary-deep)]"
                    >
                      {row.partNumber}
                    </Link>
                  ) : (
                    row.partNumber
                  )}
                </td>
                <td className="px-4 py-4 tabular-nums text-[color:var(--color-text)]">
                  {row.centerFrequencyGhz}
                </td>
                <td className="px-4 py-4 tabular-nums text-[color:var(--color-text)]">
                  {row.outputPowerW}
                </td>
                <td className="px-4 py-4 tabular-nums text-[color:var(--color-text)]">
                  {row.efficiency}
                </td>
                <td className="px-4 py-4 tabular-nums text-[color:var(--color-text)]">
                  {row.gainDb}
                </td>
                <td className="px-4 py-4 text-[color:var(--color-text-muted)]">
                  {row.modeOfOperation}
                </td>
                <td className="px-4 py-4">
                  {row.slug ? (
                    <Link
                      href={`/products/rf/power-amplifiers/${row.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
                    >
                      Details
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : row.datasheetHref ? (
                    <a
                      href={row.datasheetHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
                    >
                      Details
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
