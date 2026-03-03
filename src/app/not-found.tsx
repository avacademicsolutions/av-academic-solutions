import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div
          className="text-8xl font-bold text-[#C59D3B] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          404
        </div>
        <h1
          className="text-3xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Page Not Found
        </h1>
        <p className="text-slate-400 mb-10 leading-relaxed text-sm">
          The page you are looking for may have been moved, renamed, or does not exist.
          Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#C59D3B] text-white px-7 py-3 rounded-md hover:bg-[#B48C2E] transition text-sm font-medium"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-slate-600 text-slate-300 px-7 py-3 rounded-md hover:border-[#C59D3B] hover:text-[#C59D3B] transition text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
