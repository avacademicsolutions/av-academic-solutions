"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="/" className="text-lg font-semibold text-slate-900">
          AV Academic Solutions
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 items-center text-sm">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/contact">Contact</a>
          <a
            href="/contact"
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
          >
            Request Proposal
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

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
  );
}