"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AV Academic Solutions"
            width={150}
            height={60}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center text-sm font-medium text-slate-700">
          <a href="/" className="hover:text-slate-900 transition">Home</a>
          <a href="/#about" className="hover:text-slate-900 transition">About</a>
          <a href="/#services" className="hover:text-slate-900 transition">Services</a>
          <a href="/contact" className="hover:text-slate-900 transition">Contact</a>

          <a
            href="/contact"
            className="bg-[#C59D3B] text-white px-5 py-2 rounded-md hover:bg-[#B48C2E] transition shadow-sm"
          >
            Request Proposal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-sm bg-white border-t border-gray-100 shadow-sm">
          <a href="/" className="block py-2">Home</a>
          <a href="/#about" className="block py-2">About</a>
          <a href="/#services" className="block py-2">Services</a>
          <a href="/contact" className="block py-2">Contact</a>

          <a
            href="/contact"
            className="block bg-[#C59D3B] text-white px-4 py-3 rounded-md text-center mt-2"
          >
            Request Proposal
          </a>
        </div>
      )}
    </nav>
  );
}