"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

  const handleSectionClick = (id: string) => {
    setMenuOpen(false);

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#" + id);
    }
  };

  const navBackground =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-slate-900 shadow-md";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center space-x-4"
        >
          <Image
            src="/logo.png"
            alt="AV Academic Solutions Logo"
            width={55}
            height={55}
          />
          <span className="text-lg font-semibold text-white hidden sm:block">
            AV Academic Solutions
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center text-sm font-medium text-slate-200">

          <button
            onClick={() => {
            setMenuOpen(false);

            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
            }}
              className="hover:text-white transition"
              >
              Home
              </button>

          <button
            onClick={() => handleSectionClick("about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => handleSectionClick("services")}
            className="hover:text-white transition"
          >
            Services
          </button>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-[#C59D3B] text-white px-6 py-2.5 rounded-md hover:bg-[#B48C2E] transition"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-8 pt-4 space-y-5 text-sm bg-slate-900 border-t border-slate-800 text-slate-200">

          <button
          onClick={() => {
            setMenuOpen(false);

            if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
           } else {
            router.push("/");
             }
              }}
            className="block text-left hover:text-white transition"
            >
             Home
            </button>

          <button
            onClick={() => handleSectionClick("about")}
            className="block text-left hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => handleSectionClick("services")}
            className="block text-left hover:text-white transition"
          >
            Services
          </button>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-white transition"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#C59D3B] text-white px-5 py-2.5 rounded-md text-center hover:bg-[#B48C2E] transition"
          >
            Schedule Consultation
          </Link>

        </div>
      )}
    </nav>
  );
}