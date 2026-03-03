"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojnypak", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Submission failed. Please try again or email us directly.");
      }
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Request a Proposal
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed mt-4">
            Tell us about your institution and requirements. Our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">

          {/* Contact info sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
                Reach Us Directly
              </h2>
              <div className="space-y-5">
                <a
                  href="mailto:info@avacademicsolutions.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C59D3B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#C59D3B]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</div>
                    <div className="text-sm text-slate-700 group-hover:text-[#C59D3B] transition">
                      avacademicsolutions@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+916006700385"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C59D3B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#C59D3B]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</div>
                    <div className="text-sm text-slate-700 group-hover:text-[#C59D3B] transition">
                      +91 6006700385
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/916006700385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">WhatsApp</div>
                    <div className="text-sm text-green-600 group-hover:text-green-500 transition">
                      Chat with us now →
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold text-sm mb-2">Typical Response Time</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We respond to all institutional inquiries within <strong>24 business hours</strong>. 
                For urgent matters, please use WhatsApp.
              </p>
            </div>

            <div className="bg-[#C59D3B]/5 rounded-xl p-6 border border-[#C59D3B]/20">
              <h3 className="font-semibold text-sm mb-2 text-[#C59D3B]">Free Initial Consultation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                All new institutional inquiries receive a complimentary 30-minute discovery call to assess fit and scope.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Inquiry Received
                </h3>
                <p className="text-slate-500 mb-8 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you. Our team will review your requirements and connect with you within 24 hours.
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#C59D3B] hover:bg-[#B48C2E] text-white px-7 py-3 rounded-md transition text-sm"
                >
                  Return to Homepage
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 rounded-xl p-8 border border-slate-100">

                {/* Honeypot */}
                <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden="true" />
                <input type="hidden" name="_subject" value="New Inquiry - AV Academic Solutions" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      className="input-field"
                      placeholder="Dr. Priya Menon"
                      required
                      aria-label="Full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="input-field"
                      placeholder="+91 98765 43210"
                      aria-label="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Organization Name *</label>
                  <input
                    type="text"
                    name="organization"
                    className="input-field"
                    placeholder="Your Institution / Company"
                    required
                    aria-label="Organization name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="you@institution.edu"
                    required
                    aria-label="Email address"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Institution Type</label>
                  <select name="institutionType" className="input-field bg-white" aria-label="Institution type">
                    <option value="">Select type…</option>
                    <option>K-12 School / School Group</option>
                    <option>Higher Education Institution</option>
                    <option>EdTech / Education Venture</option>
                    <option>Government / Policy Body</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">Project Requirement *</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Describe your academic structuring needs, current challenges, and desired outcomes…"
                    required
                    aria-label="Project requirement"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C59D3B] hover:bg-[#B48C2E] text-white py-3.5 rounded-md font-medium transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? "Submitting…" : "Submit Inquiry"}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Your information is confidential and will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
