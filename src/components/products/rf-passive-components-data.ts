export type RfPassiveComponent = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  heroImage: string;
  // studio render for listing cards; heroImage keeps the real lab photo
  cardImage: string;
  diagrams: { src: string; alt: string }[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
};

export const rfPassiveComponents: RfPassiveComponent[] = [
  {
    slug: "kupd-1",
    name: "Power Divider / Combiner : KuPD-1",
    shortName: "Power Divider-KuPD-1",
    summary: "4-way, 0 deg, WR62, 12.85 GHz to 14.50 GHz, SMA / WR62.",
    heroImage: "/assets/products/rf-passive-components/kupd-1/hero.webp",
    cardImage:
      "/assets/products/rf-passive-components/kupd-1/card-saffron.webp",
    diagrams: [
      {
        src: "/assets/products/rf-passive-components/kupd-1/diagram-1.webp",
        alt: "KuPD-1 passive RF product diagram 1",
      },
      {
        src: "/assets/products/rf-passive-components/kupd-1/diagram-2.webp",
        alt: "KuPD-1 passive RF product diagram 2",
      },
      {
        src: "/assets/products/rf-passive-components/kupd-1/diagram-3.webp",
        alt: "KuPD-1 passive RF product diagram 3",
      },
      {
        src: "/assets/products/rf-passive-components/kupd-1/diagram-4.webp",
        alt: "KuPD-1 passive RF product diagram 4",
      },
      {
        src: "/assets/products/rf-passive-components/kupd-1/diagram-5.webp",
        alt: "KuPD-1 passive RF product diagram 5",
      },
    ],
    specs: [
      { label: "Topology", value: "4-way, 0 deg power divider / combiner" },
      { label: "Frequency", value: "12.85-14.50 GHz" },
      { label: "Interface", value: "SMA / WR62" },
      { label: "Waveguide", value: "WR62" },
    ],
    features: [
      "Low insertion loss, <= 1.7 dB",
      "Good amplitude imbalance, <= 1.5 dB",
      "Good phase imbalance, <= 10 deg",
      "Very good return loss, >= 15 dB",
      "DFM - design for manufacturing",
    ],
    applications: [
      "Power amplifier",
      "High power combiner",
      "Ku-band combiner",
      "Measurement setup",
    ],
  },
  {
    slug: "5gbpf-1",
    name: "5G Base Station Filter : 5GBPF-1",
    shortName: "5G Base Station Filter : 5GBPF-1",
    summary: "3300-3700 MHz, WR229, rectangular waveguide cavity filter.",
    heroImage: "/assets/products/rf-passive-components/5gbpf-1/hero.webp",
    cardImage:
      "/assets/products/rf-passive-components/5gbpf-1/card-saffron.webp",
    diagrams: [
      {
        src: "/assets/products/rf-passive-components/5gbpf-1/diagram-1.webp",
        alt: "5GBPF-1 passive RF product diagram 1",
      },
      {
        src: "/assets/products/rf-passive-components/5gbpf-1/diagram-2.webp",
        alt: "5GBPF-1 passive RF product diagram 2",
      },
      {
        src: "/assets/products/rf-passive-components/5gbpf-1/diagram-3.webp",
        alt: "5GBPF-1 passive RF product diagram 3",
      },
      {
        src: "/assets/products/rf-passive-components/5gbpf-1/diagram-4.webp",
        alt: "5GBPF-1 passive RF product diagram 4",
      },
    ],
    specs: [
      { label: "Frequency", value: "3300-3700 MHz" },
      { label: "Filter type", value: "Rectangular waveguide cavity filter" },
      { label: "Waveguide", value: "WR229" },
      { label: "Use case", value: "5G base station band-pass filtering" },
    ],
    features: [
      "Insertion loss, <= 0.4 dB",
      "Excellent return loss, >= 20 dB",
      "Excellent rejection, >= 60 dB at +30 MHz",
      "High power handling capacity",
      "Good spurious response, >= 650 MHz",
      "Excellent group delay, variation <= 40 ns",
    ],
    applications: ["5G", "Base station", "Band pass filter"],
  },
  {
    slug: "uhfpd-1",
    name: "Power Splitter / Combiner : UHFPD-1",
    shortName: "Power Splitter-UHFPD-1",
    summary: "2-way, 0 deg, 50 ohm, 10 MHz to 450 MHz, 1/4 W, SMA / SMD.",
    heroImage: "/assets/products/rf-passive-components/uhfpd-1/hero.webp",
    cardImage:
      "/assets/products/rf-passive-components/uhfpd-1/card-saffron.webp",
    diagrams: [
      {
        src: "/assets/products/rf-passive-components/uhfpd-1/diagram-1.webp",
        alt: "UHFPD-1 passive RF product diagram 1",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-1/diagram-2.webp",
        alt: "UHFPD-1 passive RF product diagram 2",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-1/diagram-3.webp",
        alt: "UHFPD-1 passive RF product diagram 3",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-1/diagram-4.webp",
        alt: "UHFPD-1 passive RF product diagram 4",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-1/diagram-5.webp",
        alt: "UHFPD-1 passive RF product diagram 5",
      },
    ],
    specs: [
      { label: "Topology", value: "2-way, 0 deg power splitter / combiner" },
      { label: "Frequency", value: "10 MHz-450 MHz" },
      { label: "Impedance", value: "50 ohm" },
      { label: "Power", value: "1/4 W" },
      { label: "Interface", value: "SMA / SMD" },
    ],
    features: [
      "Low insertion loss, <= 0.9 dB",
      "Excellent amplitude imbalance, <= 0.01 dB",
      "Excellent phase imbalance, <= 2 deg",
      "Very good return loss, >= 15 dB",
      "Excellent isolation, >= 20 dB",
      "Patented technology",
    ],
    applications: [
      "VHF / UHF band",
      "I-Q receiver",
      "Instrumentation",
      "Power amplifier",
      "IoT receiver",
    ],
  },
  {
    slug: "uhfpd-2",
    name: "Power Splitter / Combiner : UHFPD-2",
    shortName: "Power Splitter-UHFPD-2",
    summary: "2-way, 0 deg, 50 ohm, 10 MHz to 1000 MHz, 1/4 W, SMA / SMD.",
    heroImage: "/assets/products/rf-passive-components/uhfpd-2/hero.webp",
    cardImage:
      "/assets/products/rf-passive-components/uhfpd-2/card-saffron.webp",
    diagrams: [
      {
        src: "/assets/products/rf-passive-components/uhfpd-2/diagram-1.webp",
        alt: "UHFPD-2 passive RF product diagram 1",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-2/diagram-2.webp",
        alt: "UHFPD-2 passive RF product diagram 2",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-2/diagram-3.webp",
        alt: "UHFPD-2 passive RF product diagram 3",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-2/diagram-4.webp",
        alt: "UHFPD-2 passive RF product diagram 4",
      },
      {
        src: "/assets/products/rf-passive-components/uhfpd-2/diagram-5.webp",
        alt: "UHFPD-2 passive RF product diagram 5",
      },
    ],
    specs: [
      { label: "Topology", value: "2-way, 0 deg power splitter / combiner" },
      { label: "Frequency", value: "10 MHz-1000 MHz" },
      { label: "Impedance", value: "50 ohm" },
      { label: "Power", value: "1/4 W" },
      { label: "Interface", value: "SMA / SMD" },
    ],
    features: [
      "Low insertion loss, <= 1.7 dB",
      "Excellent amplitude imbalance, <= 0.1 dB",
      "Excellent phase imbalance, <= 5 deg",
      "Good return loss, >= 10 dB",
      "Good isolation, >= 13 dB",
      "Patented technology",
    ],
    applications: [
      "VHF / UHF band",
      "I-Q receiver",
      "Instrumentation",
      "Power amplifier",
      "IoT receiver",
    ],
  },
] as const;

export function getRfPassiveComponent(slug: string) {
  return rfPassiveComponents.find((product) => product.slug === slug);
}
