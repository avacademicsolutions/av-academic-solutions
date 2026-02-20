import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avacademicsolutions.com"),

  title: {
    default: "AV Academic Solutions & Consulting",
    template: "%s | AV Academic Solutions",
  },

  description:
    "Strategic academic architecture for schools, universities, government institutions, and education ventures. Policy-aligned, research-driven, institutionally scalable frameworks aligned with NEP 2020 and NCF principles.",

  keywords: [
    "Academic Consulting India",
    "NEP 2020 Curriculum Design",
    "National Curriculum Framework Alignment",
    "Institutional Academic Structuring",
    "EdTech Curriculum Development",
    "Higher Education Academic Framework",
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
      "Strategic academic architecture for modern education systems aligned with NEP 2020 and National Curriculum Framework principles.",
    url: "https://avacademicsolutions.com",
    siteName: "AV Academic Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AV Academic Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AV Academic Solutions & Consulting",
    description:
      "Policy-aligned academic architecture for schools, universities, and education ventures.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cormorant.variable}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-slate-900">

        <Navbar />

        {children}

        {/* Premium Institutional Footer */}
        <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 px-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

            {/* Brand */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-5">
                AV Academic Solutions
              </h3>
              <p className="text-sm leading-relaxed">
                Strategic academic architecture for schools, universities,
                government institutions, and education ventures.
                Designing structured, policy-aligned frameworks for
                long-term institutional growth.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-medium mb-5 tracking-wide">
                Core Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>Curriculum Architecture</li>
                <li>Academic Policy Structuring</li>
                <li>Assessment Framework Design</li>
                <li>Institutional Consulting</li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="text-white font-medium mb-5 tracking-wide">
                Institutional Engagement
              </h4>
              <p className="text-sm leading-relaxed">
                For academic collaborations, consulting engagements,
                and institutional structuring discussions.
              </p>

              <a
                href="/contact"
                className="inline-block mt-6 text-[#C59D3B] hover:text-white transition"
              >
                Schedule Consultation →
              </a>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center text-xs text-slate-500 mt-20 tracking-wide">
            © {new Date().getFullYear()} AV Academic Solutions & Consulting. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}