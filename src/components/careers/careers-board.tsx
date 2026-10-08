"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Search,
  X,
} from "lucide-react";

import { AppSelect } from "@/components/ui/select";
import { jobs } from "@/lib/company-data";

const experienceOptions = ["Entry Level", "Mid Level", "Senior Level"];
const workSiteOptions = ["Remote", "On-Site", "Hybrid"];
const employmentTypeOptions = ["Full-Time", "Part-Time", "Contract"];

type Job = (typeof jobs)[number];

function normalize(value: string) {
  return value.toLowerCase().replaceAll("-", " ").trim();
}

function matchesOption(values: string[], selected: string) {
  return values.some((value) => normalize(value) === normalize(selected));
}

export function CareersBoard() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0] ?? null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [appliedSearchKeyword, setAppliedSearchKeyword] = useState("");
  const [experience, setExperience] = useState("");
  const [workSite, setWorkSite] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  const filteredJobs = useMemo(() => {
    const keyword = appliedSearchKeyword.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.jobTitle.toLowerCase().includes(keyword);
      const matchesExperience =
        !experience || matchesOption(job.experienceLevel, experience);
      const matchesWorkSite =
        !workSite || matchesOption(job.workType, workSite);
      const matchesEmployment =
        !employmentType ||
        normalize(job.employmentType) === normalize(employmentType);

      return (
        matchesSearch &&
        matchesExperience &&
        matchesWorkSite &&
        matchesEmployment
      );
    });
  }, [appliedSearchKeyword, employmentType, experience, workSite]);

  const visibleSelectedJob =
    selectedJob && filteredJobs.some((job) => job.id === selectedJob.id)
      ? selectedJob
      : (filteredJobs[0] ?? null);

  const activeFilters = [
    appliedSearchKeyword && { label: appliedSearchKeyword, clear: "search" },
    experience && { label: experience, clear: "experience" },
    workSite && { label: workSite, clear: "workSite" },
    employmentType && { label: employmentType, clear: "employmentType" },
  ].filter(Boolean) as { label: string; clear: string }[];

  const clearFilter = (filter: string) => {
    if (filter === "search") {
      setAppliedSearchKeyword("");
      setSearchKeyword("");
    }
    if (filter === "experience") setExperience("");
    if (filter === "workSite") setWorkSite("");
    if (filter === "employmentType") setEmploymentType("");
  };

  const applySearch = () => {
    setAppliedSearchKeyword(searchKeyword.trim());
  };

  return (
    <section className="mt-12">
      <div className="grid gap-7">
        <div className="surface-card rounded-lg p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-[color:var(--color-border)] pb-4">
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              Filter Roles
            </p>
            <p className="font-mono text-[12px] tabular-nums uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {String(filteredJobs.length).padStart(2, "0")} /{" "}
              {String(jobs.length).padStart(2, "0")}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_auto]">
            <div className="relative md:col-span-3 lg:col-span-1">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-text-muted)]"
                aria-hidden="true"
              />
              <input
                value={searchKeyword}
                onChange={(event) => setSearchKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") applySearch();
                }}
                className="field-input h-12 pl-11 pr-4 text-base"
                placeholder="Search job title or location"
              />
            </div>
            <AppSelect
              value={experience}
              onValueChange={setExperience}
              placeholder="Experience"
              className="border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)] hover:border-[color:var(--color-border-strong)] focus-visible:border-[color:var(--color-primary-deep)] focus-visible:ring-[color:var(--color-primary-deep)]/15 data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface-soft)]"
              options={experienceOptions.map((option) => ({
                value: option,
                label: option,
              }))}
            />
            <AppSelect
              value={workSite}
              onValueChange={setWorkSite}
              placeholder="Work site"
              className="border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)] hover:border-[color:var(--color-border-strong)] focus-visible:border-[color:var(--color-primary-deep)] focus-visible:ring-[color:var(--color-primary-deep)]/15 data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface-soft)]"
              options={workSiteOptions.map((option) => ({
                value: option,
                label: option,
              }))}
            />
            <AppSelect
              value={employmentType}
              onValueChange={setEmploymentType}
              placeholder="Employment"
              className="border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)] hover:border-[color:var(--color-border-strong)] focus-visible:border-[color:var(--color-primary-deep)] focus-visible:ring-[color:var(--color-primary-deep)]/15 data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface-soft)]"
              options={employmentTypeOptions.map((option) => ({
                value: option,
                label: option,
              }))}
            />
            <button
              type="button"
              className="btn-primary group h-12 w-full px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-50 md:col-span-3 lg:col-span-1 lg:w-auto"
              onClick={applySearch}
            >
              Find Jobs
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <button
                  key={`${filter.clear}-${filter.label}`}
                  type="button"
                  onClick={() => clearFilter(filter.clear)}
                  className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-text)]/30 hover:text-[color:var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)]/25"
                >
                  {filter.label}
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-4 lg:self-start">
            {filteredJobs.length === 0 ? (
              <article className="surface-card rounded-lg p-6">
                <h2 className="font-heading text-2xl font-semibold tracking-normal text-[color:var(--color-text)]">
                  No matching roles
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  Clear one or more filters to view all current openings.
                </p>
              </article>
            ) : (
              filteredJobs.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => {
                    setSelectedJob(job);
                  }}
                  className={`group/card relative flex flex-col overflow-hidden rounded-lg p-5 text-left transition-[background-color,box-shadow,border-color] duration-300 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)]/25 ${
                    visibleSelectedJob?.id === job.id
                      ? "border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-raised)] shadow-[var(--shadow-card-hover)]"
                      : "bg-transparent"
                  }`}
                >
                  <h2 className="font-heading text-2xl font-semibold tracking-normal text-[color:var(--color-text)]">
                    {job.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-muted)]">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-muted)]">
                        <BriefcaseBusiness
                          className="size-3.5"
                          aria-hidden="true"
                        />
                        {job.employmentType}
                      </span>
                    </div>
                    <span className="group/view flex items-center gap-1.5 text-xs font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]">
                      View Details
                      <ArrowRight
                        className="size-3.5 transition-transform duration-300 group-hover/view:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>

          <AnimatePresence mode="wait">
            {visibleSelectedJob && (
              <motion.article
                key={visibleSelectedJob.id}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 18, filter: "blur(8px)" }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -12, filter: "blur(8px)" }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="surface-card rounded-lg p-6 md:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="font-heading text-3xl font-semibold tracking-normal text-[color:var(--color-text)]">
                    {visibleSelectedJob.title}
                  </h2>
                  <Link
                    href={`/careers/jobs/${visibleSelectedJob.id}`}
                    className="btn-primary group h-12 px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-50"
                  >
                    Apply Now
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {visibleSelectedJob.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">
                    <BriefcaseBusiness
                      className="size-3.5"
                      aria-hidden="true"
                    />
                    {visibleSelectedJob.employmentType}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    Posted {visibleSelectedJob.datePosted}
                  </span>
                  {visibleSelectedJob.workType.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-base leading-7 text-[color:var(--color-text-muted)]">
                  {visibleSelectedJob.description}
                </p>

                <div className="mt-8 grid gap-7 md:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text)]">
                      Key Responsibilities
                    </h3>
                    <ul className="mt-4 border-t border-[color:var(--color-border)] text-sm leading-6 text-[color:var(--color-text-muted)]">
                      {visibleSelectedJob.keyResponsibilities.map((item) => (
                        <li key={item} className="flex gap-3 py-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-[color:var(--color-text-muted)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text)]">
                      Requirements
                    </h3>
                    <ul className="mt-4 border-t border-[color:var(--color-border)] text-sm leading-6 text-[color:var(--color-text-muted)]">
                      {visibleSelectedJob.requirements.map((item) => (
                        <li key={item} className="flex gap-3 py-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-[color:var(--color-text-muted)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-7 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text)]">
                      Desired Skills
                    </h3>
                    <ul className="mt-4 border-t border-[color:var(--color-border)] text-sm leading-6 text-[color:var(--color-text-muted)]">
                      {visibleSelectedJob.desiredSkills.map((item) => (
                        <li key={item} className="flex gap-3 py-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-[color:var(--color-text-muted)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
