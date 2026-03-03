"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#" + id);
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-slate-900/95 backdrop-blur-sm shadow-lg";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* ── Logo + Brand Name ── */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="AV Academic Solutions — go to top"
        >
          <div className="bg-white rounded-md px-2 py-1 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="AV Academic Solutions logo"
              width={120}
              height={42}
              style={{ height: "36px", width: "auto" }}
              priority
            />
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block tracking-wide leading-tight">
            AV Academic<br />
            <span className="text-[#C59D3B]">Solutions</span>
          </span>
        </button>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => {
              setMenuOpen(false);
              isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push("/");
            }}
            className="hover:text-[#C59D3B] transition"
          >
            Home
          </button>
          <button
            onClick={() => handleSectionClick("about")}
            className="hover:text-[#C59D3B] transition"
          >
            About
          </button>
          <Link href="/services" className="hover:text-[#C59D3B] transition">
            Services
          </Link>
          <button
            onClick={() => handleSectionClick("work")}
            className="hover:text-[#C59D3B] transition"
          >
            Our Work
          </button>
          <Link href="/about" className="hover:text-[#C59D3B] transition">
            Team
          </Link>
          <Link href="/blog" className="hover:text-[#C59D3B] transition">
            Blog
          </Link>
          <Link href="/faq" className="hover:text-[#C59D3B] transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-[#C59D3B] transition">
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-[#C59D3B] text-white px-5 py-2 rounded-md hover:bg-[#B48C2E] transition"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-4 text-sm text-slate-300">
          <button
            onClick={() => {
              setMenuOpen(false);
              isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push("/");
            }}
            className="block text-left hover:text-[#C59D3B] transition py-1 w-full"
          >
            Home
          </button>
          <button
            onClick={() => handleSectionClick("about")}
            className="block text-left hover:text-[#C59D3B] transition py-1 w-full"
          >
            About
          </button>
          <button
            onClick={() => handleSectionClick("work")}
            className="block text-left hover:text-[#C59D3B] transition py-1 w-full"
          >
            Our Work
          </button>
          {[
            { label: "Services", href: "/services" },
            { label: "Team", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#C59D3B] transition py-1"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#C59D3B] text-white px-5 py-2.5 rounded-md text-center hover:bg-[#B48C2E] transition mt-2"
          >
            Schedule Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
