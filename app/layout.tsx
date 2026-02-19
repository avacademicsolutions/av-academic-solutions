"use client";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased">

        {/* NAVBAR */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <a href="/" className="text-lg font-semibold text-slate-900">
              AV Academic Solutions
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center text-sm">
              <a href="/" className="hover:text-slate-900">Home</a>
              <a href="/#about" className="hover:text-slate-900">About</a>
              <a href="/#services" className="hover:text-slate-900">Services</a>
              <a href="/contact" className="hover:text-slate-900">Contact</a>
              <a
                href="/contact"
                className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
              >
                Request Proposal
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden px-6 pb-4 space-y-3 text-sm bg-white border-t">
              <a href="/" className="block">Home</a>
              <a href="/#about" className="block">About</a>
              <a href="/#services" className="block">Services</a>
              <a href="/contact" className="block">Contact</a>
              <a
                href="/contact"
                className="block bg-amber-600 text-white px-4 py-2 rounded-md text-center"
              >
                Request Proposal
              </a>
            </div>
          )}
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-slate-900 text-white text-center py-8 mt-20">
          <p>
            © {new Date().getFullYear()} AV Academic Solutions & Consulting.
          </p>
        </footer>

      </body>
    </html>
  );
}