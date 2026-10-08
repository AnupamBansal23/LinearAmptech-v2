import type { Metadata } from "next";
import Image from "next/image";

import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Team | Linear Amptech",
  description:
    "Meet the Linear Amptech team working across RF systems, analog IC design, semiconductor architecture, and advanced electronics R&D.",
};

type TeamMember = {
  name: string;
  role: string;
  group: "Leadership" | "Development";
  image: string;
  /** CSS object-position for headshots whose default center crop cuts the face. */
  imagePosition?: string;
  linkedinUrl?: string;
};

const companyWriteups = [
  {
    label: "About us",
    title: "Who we are",
    image: "/assets/team/who-we-are-dark.webp",
    body: "Linearised Amplifier Technology & Services Pvt. Ltd. (Linear-AmpTech) is founded and driven by innovative minds from IIT Roorkee, one of India's premier technical institutes. The deep-tech startup targets cyber-physical system design with a focus on radio-frequency circuit and system design.",
  },
  {
    label: "Vision",
    title: "Our vision",
    image: "/assets/team/vision-dark.webp",
    body: "To drive disruptive innovation in cyber-physical systems, delivering high-performance, indigenous technology solutions that secure global traction.",
  },
  {
    label: "Mission",
    title: "Our mission",
    image: "/assets/team/mission-dark.webp",
    body: "The company is focused on innovation to cater to technical challenges in radio-frequency electronics targeting cyber-physical systems, with strengths in RF front-end component design, GaN-based MMIC and high-power modules, and CMOS/BiCMOS RFIC IP cores with silicon validation.",
  },
];

const team: TeamMember[] = [
  {
    name: "Dr. Karun Rawat",
    role: "Founder & Chairman",
    group: "Leadership",
    image: "/assets/team/headshots/karun-rawat.webp",
    linkedinUrl: "https://www.linkedin.com/in/karun-rawat-b732784b/",
  },
  {
    name: "Dr. Meenakshi Rawat",
    role: "Founder & Director",
    group: "Leadership",
    image: "/assets/team/headshots/meenakshi-rawat.webp",
    linkedinUrl: "https://www.linkedin.com/in/meenakshi-rawat-66675a66/",
  },
  {
    name: "Mr. Vivek Sharma",
    role: "Director",
    group: "Leadership",
    image: "/assets/team/headshots/vivek-sharma.webp",
    linkedinUrl: "https://www.linkedin.com/in/vivek-sharma-986950121/",
  },
  {
    name: "Dr. Aditya Pal",
    role: "Chief Excecutive Officer",
    group: "Leadership",
    image: "/assets/team/headshots/aditya-pal.webp",
    imagePosition: "50% 0%",
    linkedinUrl: "https://www.linkedin.com/in/dr-aditya-pal-a31872ab/",
  },
  // {
  //   name: "Dr. Garima Shukla",
  //   role: "Senior RF Design Engineer",
  //   group: "Development",
  //   image: "/assets/team/headshots/garima-shukla.webp",
  //   linkedinUrl: "",
  // },
  // {
  //   name: "Dr. Pawan Shukla",
  //   role: "Senior RF Design Engineer",
  //   group: "Development",
  //   image: "/assets/team/headshots/pawan-shukla.webp",
  //   linkedinUrl: "",
  // },
];

const specStrip = [
  { label: "Team", value: "20+ Members" },
  { label: "Disciplines", value: "RF · Analog · Semiconductor" },
  { label: "Based in", value: "Roorkee · IIT" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.26 8.03h4.48V23H.26V8.03ZM8.13 8.03h4.29v2.05h.06c.6-1.13 2.06-2.32 4.23-2.32 4.52 0 5.36 2.98 5.36 6.85V23h-4.47v-7.44c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.13V8.03Z" />
    </svg>
  );
}

function MemberCard({
  member,
  className = "",
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <Reveal className={`h-full ${className}`}>
      <article className="surface-card group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]">
        <div className="relative aspect-square overflow-hidden bg-[color:var(--color-surface-soft)]">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            unoptimized
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
            style={
              member.imagePosition
                ? { objectPosition: member.imagePosition }
                : undefined
            }
          />
        </div>
        <div className="flex flex-1 flex-col px-3 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-heading text-lg font-semibold leading-snug text-[color:var(--color-text)]">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                {member.role}
              </p>
            </div>
            {member.linkedinUrl ? (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${member.name} on LinkedIn`}
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-[color:var(--color-accent-border)]/40 bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-deep)] shadow-[var(--shadow-card)] transition-colors duration-200 hover:border-transparent hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-on-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)]"
              >
                <LinkedInIcon className="size-3.5" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                aria-label={`${member.name} LinkedIn profile pending`}
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-deep)] opacity-50"
              >
                <LinkedInIcon className="size-3.5" />
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
          <p className="kicker">Team</p>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            The team driving next-generation RF semiconductor technology.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Linear AmpTech brings together experienced RF engineers,
            researchers, and system architects dedicated to developing
            world-class RF and mm-wave front-end solutions.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-[color:var(--color-border)]">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <dl className="grid grid-cols-1 divide-y divide-[color:var(--color-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {specStrip.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2.5 py-8 sm:py-10 ${
                  index === 0 ? "sm:pr-9" : "sm:px-9"
                }`}
              >
                <dt className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                  />
                  {item.label}
                </dt>
                <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <Reveal className="max-w-3xl">
            <p className="kicker mb-4">Company</p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-balance text-[color:var(--color-text)] sm:text-4xl lg:text-[44px]">
              About Linear-AmpTech
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {companyWriteups.map((item) => (
              <Reveal key={item.label} className="h-full">
                <article className="surface-card group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[var(--radius-card)] p-7 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)] sm:p-8">
                  {/* Decorative dark-theme card imagery: keep the text side
                      protected while letting the right-side detail read. */}
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 32vw, 100vw"
                    className="object-cover object-right opacity-75"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-surface)] via-[color:var(--color-surface)]/78 to-[color:var(--color-surface)]/28"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[color:var(--color-bg)]/25 to-transparent"
                  />
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-justify text-[1.0625rem] leading-8 text-[color:var(--color-text-muted)] xl:text-lg xl:leading-9">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="max-w-3xl">
            <p className="kicker mb-4 mt-20">People</p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-balance text-[color:var(--color-text)] sm:text-4xl lg:text-[44px]">
              Meet our Leadership Team
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[color:var(--color-text-muted)] xl:text-lg">
              The team spans company leadership, RF engineering, and product
              development with a focus on measurable semiconductor outcomes.
            </p>
          </Reveal>

          <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <MemberCard key={member.name + index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
