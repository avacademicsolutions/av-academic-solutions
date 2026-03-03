import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { Cormorant_Garamond, Lato } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avacademicsolutions.com"),

  title: {
    default: "AV Academic Solutions & Consulting",
    template: "%s | AV Academic Solutions",
  },

  description:
    "Strategic academic architecture for schools, universities, government institutions, and education ventures. Policy-aligned, research-driven frameworks aligned with NEP 2020 and NCF principles.",

  keywords: [
    "Academic Consulting India",
    "NEP 2020 Curriculum Design",
    "National Curriculum Framework Alignment",
    "Institutional Academic Structuring",
    "EdTech Curriculum Development",
    "Higher Education Academic Framework",
    "K-12 Curriculum Architecture",
    "Competency Based Education India",
  ],

  authors: [{ name: "AV Academic Solutions" }],
  creator: "AV Academic Solutions",
  publisher: "AV Academic Solutions",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "AV Academic Solutions & Consulting",
    description:
      "Strategic academic architecture for modern education systems aligned with NEP 2020 and NCF principles.",
    url: "https://avacademicsolutions.com",
    siteName: "AV Academic Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV Academic Solutions" }],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AV Academic Solutions & Consulting",
    description: "Policy-aligned academic architecture for schools, universities, and education ventures.",
    images: ["/og-image.png"],
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-900" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
