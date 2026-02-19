import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AV Academic Solutions & Consulting",
  description: "Structured Academic Excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>

        <nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <a href="/" className="text-xl font-semibold text-slate-900">
      AV Academic Solutions
    </a>

    {/* Desktop Menu */}
    <div className="space-x-8 hidden md:flex items-center">
      <a href="/" className="text-gray-700 hover:text-slate-900 transition">
        Home
      </a>
      <a href="/#about" className="text-gray-700 hover:text-slate-900 transition">
        About
      </a>
      <a href="/#services" className="text-gray-700 hover:text-slate-900 transition">
        Services
      </a>
      <a href="/contact" className="text-gray-700 hover:text-slate-900 transition">
        Contact
      </a>
      <a
        href="/contact"
        className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
      >
        Request Proposal
      </a>
    </div>

  </div>
</nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-slate-900 text-white text-center py-8 mt-20">
          <p>
            © {new Date().getFullYear()} AV Academic Solutions & Consulting. All Rights Reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}