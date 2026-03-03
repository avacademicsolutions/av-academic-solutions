import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received by AV Academic Solutions.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6">
      <div className="text-center max-w-2xl">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1
          className="text-4xl font-semibold mb-5"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Thank You for Your Inquiry
        </h1>
        <p className="text-lg text-gray-500 mb-3 leading-relaxed">
          We have received your project details.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
          Our team will review your requirements and connect with you within 24 business hours.
          For urgent matters, please reach us on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#C59D3B] hover:bg-[#B48C2E] text-white px-7 py-3 rounded-md transition font-medium text-sm"
          >
            Return to Homepage
          </Link>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-300 text-gray-600 px-7 py-3 rounded-md hover:border-green-400 hover:text-green-600 transition text-sm"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
