import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ImageThemeProvider } from "@/components/layout/image-theme-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linear-AmpTech | RF Front-End Semiconductor Technologies",
  description:
    "Linear-AmpTech develops GaN power amplifier modules, CMOS/BiCMOS RFICs, mm-wave transceivers, active antennas, packaging, and validation solutions.",
  icons: {
    icon: [{ url: "/assets/brand/site-icon.webp", type: "image/webp" }],
  },
  keywords: [
    "Linear-AmpTech",
    "RF front-end technologies",
    "GaN power amplifier modules",
    "CMOS RFIC",
    "BiCMOS RFIC",
    "mm-wave transceivers",
    "phased arrays",
    "semiconductor R&D",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ImageThemeProvider>
          <SmoothScroll />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ImageThemeProvider>
      </body>
    </html>
  );
}
