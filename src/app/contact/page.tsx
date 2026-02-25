"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mojnypak", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-8 text-center">
          Request a Proposal
        </h1>

        {submitted ? (
          <div className="text-center">
            <p className="text-lg text-green-600 mb-6">
              Thank you. Your inquiry has been received.
            </p>
            <a
              href="/"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition"
            >
              Return to Homepage
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            <input
              type="hidden"
              name="_subject"
              value="New Inquiry - AV Academic Solutions"
            />

            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Organization Name</label>
              <input
                type="text"
                name="organization"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Project Requirement</label>
              <textarea
                name="message"
                rows={5}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>

          </form>
        )}

      </div>
    </main>
  );
}