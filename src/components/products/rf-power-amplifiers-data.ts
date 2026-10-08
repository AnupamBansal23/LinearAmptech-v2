export type RfPowerAmplifierSummary = {
  slug: string;
  partNumber: string;
  summary: string;
  shortSpec: string;
  heroImage: string;
  keyFeatures: string[];
  applications: string[];
  diagrams: { src: string; alt: string }[];
};

export type RfPowerAmplifierTableRow = {
  partNumber: string;
  centerFrequencyGhz: string;
  outputPowerW: string;
  efficiency: string;
  gainDb: string;
  modeOfOperation: string;
  slug?: string;
  datasheetHref?: string;
};

export type RfPowerAmplifierCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  highlights: string[];
  image: string;
  alt: string;
  operatingBand: string;
};

export const rfPowerAmplifierCategories: RfPowerAmplifierCategory[] = [
  {
    slug: "hybrid-mic-power-amplifier-modules",
    title: "Power Amplifier Modules",
    eyebrow: "Module lineup",
    description:
      "Hybrid MIC PA modules with wideband operating ranges, output power, efficiency, gain, and mode-of-operation data.",
    href: "/products/rf/power-amplifiers/hybrid-mic-power-amplifier-modules",
    highlights: [
      "0.49-3.5 GHz",
      "8-50 W output options",
      "Detailed module lineup",
    ],
    image:
      "/assets/products/rf-power-amplifiers/hybrid-mic-pa-modules/module_photo_2.webp",
    alt: "Hybrid MIC PA module bench hardware",
    operatingBand: "0.49-3.5 GHz",
  },
  {
    slug: "gan-on-sic-mmic-pa-chips",
    title: "GaN-On-SiC MMIC PA Chips",
    eyebrow: "Integrated PA chip",
    description:
      "Fully integrated C-Ku band GaN-on-SiC PA chip family with package, performance, and validation details.",
    href: "/products/fully-integrated-c-ku-band-pa-chip",
    highlights: [
      "4-19.5 GHz variants",
      "QFN44 / QFN56",
      "Tapeout and measurement complete",
    ],
    image:
      "/assets/products/rf-power-amplifiers/c-ku-band-pa-chip/card-saffron-v6.webp",
    alt: "Fully integrated C-Ku band power amplifier chip hardware",
    operatingBand: "4-19.5 GHz",
  },
];

export const rfPowerAmplifierProducts: RfPowerAmplifierSummary[] = [
  {
    slug: "lamp-pacf1p9-10w",
    partNumber: "LAMP-PACF1P9-10W",
    summary: "50 Ω, Wideband, 1.5 to 2.5 GHz, 7.7-10 W, 28V, SMA.",
    shortSpec: "1.5-2.5 GHz, 7.7-10 W, 28V, SMA",
    heroImage:
      "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/hero.webp",
    keyFeatures: [
      "Frequency:1.5-2.5GHz",
      "Drain efficiency: 60-73%",
      "Output power: 38.9-40.4dBm",
      "Gain at saturation:9.9-11.2 dB",
      "Gain Compression:3-3.5 dB",
    ],
    applications: ["Cellular", "SDRs", "Radars"],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-1.webp",
        alt: "LAMP-PACF1P9-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-2.webp",
        alt: "LAMP-PACF1P9-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-3.webp",
        alt: "LAMP-PACF1P9-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-4.webp",
        alt: "LAMP-PACF1P9-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamocbj-10w",
    partNumber: "LAMP-PAMOCBJ-10W",
    summary: "50 Ω, Wideband, 1.5 to 2.5 GHz, 7.7-10 W, 28V, SMA.",
    shortSpec: "0.55-3.25 GHz, 8-10 W, 28V, SMA",
    heroImage:
      "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/hero.webp",
    keyFeatures: [
      "Frequency:0.55-3.25GHz",
      "Drain efficiency: 60-70.1%",
      "Output power: 39.1-41.55dBm",
      "Gain:9.1-11.55 dB",
      "Gain Compression:2-4dB",
      "C/IMD3, < -28 dBc at 3dB back-off of output power",
    ],
    applications: [
      "Transmitters",
      "Laboratory use",
      "Cellular",
      "communication systems",
    ],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-1.webp",
        alt: "LAMP-PAMOCBJ-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-2.webp",
        alt: "LAMP-PAMOCBJ-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-3.webp",
        alt: "LAMP-PAMOCBJ-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-4.webp",
        alt: "LAMP-PAMOCBJ-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamocce-10w",
    partNumber: "LAMP-PAMOCCE-10W",
    summary: "50 Ω, Wideband, 0.45 to 2.9 GHz, 10W, 28V, SMA.",
    shortSpec: "0.45-2.9 GHz, 10 W, 28V, SMA",
    heroImage:
      "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/hero.webp",
    keyFeatures: [
      "Frequency:0.45-2.9GHz",
      "Drain efficiency: 60-72.9%",
      "Output power: 39.6-41.7dBm",
      "Output power flatness:2dB",
      "Gain:8.6-10.7 dB",
      "Gain Compression:2-4dB",
      "C/IMD3, < -26 dBc at 3dB back-off of output power",
    ],
    applications: [
      "Transmitters",
      "Laboratory use",
      "Cellular",
      "communication systems",
    ],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-1.webp",
        alt: "LAMP-PAMOCCE-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-2.webp",
        alt: "LAMP-PAMOCCE-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-3.webp",
        alt: "LAMP-PAMOCCE-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-4.webp",
        alt: "LAMP-PAMOCCE-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamoccf-10w",
    partNumber: "LAMP-PAMOCCF-10W",
    summary: "50 Ω, Wideband, 0.5 to 2.2 GHz, 10 W, 28V, SMA.",
    shortSpec: "0.5-2.2 GHz, 10 W, 28V, SMA",
    heroImage:
      "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/hero.webp",
    keyFeatures: [
      "Frequency:0.5-2.2GHz",
      "Drain efficiency: 60-71%",
      "Output power: 41.3-42.7dBm",
      "Gain at saturation:8-9.4 dB",
      "Gain Compression:3-4 dB",
    ],
    applications: ["Cellular", "SDRs", "Radars"],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-1.webp",
        alt: "LAMP-PAMOCCF-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-2.webp",
        alt: "LAMP-PAMOCCF-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-3.webp",
        alt: "LAMP-PAMOCCF-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-4.webp",
        alt: "LAMP-PAMOCCF-10W diagram 4",
      },
    ],
  },
] as const;

export const rfPowerAmplifierTableRows: RfPowerAmplifierTableRow[] = [
  {
    partNumber: "LAMP-PAMOCBJ-10W",
    centerFrequencyGhz: "0.55-3.5",
    outputPowerW: "8-10",
    efficiency: "60-70",
    gainDb: "9.1-11.5",
    modeOfOperation: "Extended Continuous Class B/J",
    slug: "lamp-pamocbj-10w",
  },
  {
    partNumber: "LAMP-PAMOCCE-10W",
    centerFrequencyGhz: "0.49-2.9",
    outputPowerW: "10",
    efficiency: "60-72",
    gainDb: "8.6-10.7",
    modeOfOperation: "Extended Continuous Class E",
    slug: "lamp-pamocce-10w",
  },
  {
    partNumber: "LAMP-PAMOCCF-10W",
    centerFrequencyGhz: "0.5-2.2",
    outputPowerW: "10",
    efficiency: "60-71",
    gainDb: "8-9.4",
    modeOfOperation: "Extended Continuous Class F",
    slug: "lamp-pamoccf-10w",
  },
  {
    partNumber: "LAMP-PACF1P9-10W",
    centerFrequencyGhz: "1.5-2.5",
    outputPowerW: "10",
    efficiency: "9.9-11.2",
    gainDb: "60-73",
    modeOfOperation: "Extended Continuous Class F",
    slug: "lamp-pacf1p9-10w",
  },
  {
    partNumber: "*LAMP-PACF1P9-10W-HG",
    centerFrequencyGhz: "1.5-2.4",
    outputPowerW: "10",
    efficiency: "47",
    gainDb: "50-55*",
    modeOfOperation: "Extended Continuous Class F",
  },
  {
    partNumber: "LAMP-DPA1P8-50W",
    centerFrequencyGhz: "1.85",
    outputPowerW: "50 (sat.) / 5 (av.)",
    efficiency: "45 (sat.) / 35 (av.)",
    gainDb: "50-55",
    modeOfOperation: "Doherty",
  },
  {
    partNumber: "LAMP-PACAB-0.4-0.52-50W",
    centerFrequencyGhz: "0.4-0.52",
    outputPowerW: "45-54",
    efficiency: "51.3-58.9%",
    gainDb: "36.5-37.4",
    modeOfOperation: "Not specified",
    datasheetHref:
      "/assets/products/rf-power-amplifiers/datasheets/LAMP-PACAB-0.4-0.52-50W_Datasheet_.pdf",
  },
  {
    partNumber: "LAMP-DPA0P75-50W",
    centerFrequencyGhz: "750",
    outputPowerW: "50 (sat.) / 3.1-10 (av.)",
    efficiency: "45 (sat.) / 35 (av.)",
    gainDb: "50-55",
    modeOfOperation: "Doherty",
  },
] as const;

export const rfPowerAmplifierIntro = {
  title: "Radio Frequency Power Amplifier",
  description:
    "The company has a strong research background, with directors from I.I.T-Roorkee who are working in cutting-edge radio frequency technologies. Their recent R&D focus includes intelligent reflecting surfaces, multi-octave GAN MMICs, and millimeter-wave RFICs in CMOS and SiGe BiCMOS. Overall, the company is dedicated to pushing the boundaries of radio frequency technology and providing innovative solutions to their clients.",
} as const;

export const productMenuGroups = [
  {
    id: "rf-design-signal-processing",
    title: "RF Design and Signal Processing",
    href: "/products/rf/power-amplifiers",
    description: "RF systems, amplifier modules, and signal-chain products.",
    panels: [
      {
        title: "RF & mm-Wave Power Amplifier Families",
        href: "/products/rf/power-amplifiers",
        description:
          "Hybrid MIC modules and GaN-on-SiC MMIC PA chips organized by amplifier family.",
        links: rfPowerAmplifierCategories.map((category) => ({
          label: category.title,
          href: category.href,
          meta: category.description,
        })),
      },
    ],
  },
] as const;

export function getRfPowerAmplifier(slug: string) {
  return rfPowerAmplifierProducts.find((product) => product.slug === slug);
}
