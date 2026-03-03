import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about AV Academic Solutions' consulting process, pricing, and engagement model.",
};

const faqs = [
  {
    category: "About Our Work",
    items: [
      {
        q: "What does 'academic architecture' actually mean?",
        a: "Academic architecture refers to the systematic design of an institution's educational structures — from curriculum frameworks and learning outcomes to governance documents, assessment systems, and policy manuals. We build the invisible infrastructure that makes quality education possible at institutional scale.",
      },
      {
        q: "How is your work different from standard curriculum consultants?",
        a: "Most consultants focus on content — what to teach. We focus on structure — how teaching is organized, documented, governed, and scaled. Our deliverables are policy documents, governance frameworks, competency maps, and institutional roadmaps, not lesson plans.",
      },
      {
        q: "Do you work with government institutions?",
        a: "Yes. We have worked with government school systems and district education offices. Our frameworks are designed to be compatible with regulatory requirements and government reporting structures.",
      },
    ],
  },
  {
    category: "Process & Engagement",
    items: [
      {
        q: "How does a typical engagement begin?",
        a: "Every engagement begins with a complimentary 30-minute discovery call where we understand your institutional context, current challenges, and desired outcomes. We then propose a scoped engagement plan with clear deliverables and timelines.",
      },
      {
        q: "How long does a typical project take?",
        a: "Scope varies significantly. A focused curriculum framework for one department may take 6–8 weeks. A comprehensive institutional restructuring initiative across multiple programs can span 6–12 months. We provide precise timelines during the scoping phase.",
      },
      {
        q: "Do you work remotely or on-site?",
        a: "We work in a hybrid model. Most strategy and documentation work is remote, but we conduct on-site institutional visits for discovery, stakeholder workshops, and implementation kickoffs when needed.",
      },
      {
        q: "What does a final deliverable look like?",
        a: "Our deliverables are professional-grade institutional documents — curriculum frameworks, policy manuals, governance blueprints, competency maps, and implementation roadmaps. All formatted for institutional use, regulatory submission, or accreditation documentation.",
      },
    ],
  },
  {
    category: "NEP 2020 & Policy",
    items: [
      {
        q: "Our school already says it is 'NEP-compliant'. Why would we need you?",
        a: "Most institutions have updated their prospectus language. Very few have restructured their actual curriculum architecture, assessment systems, and documentation to genuinely reflect NEP 2020 principles like multidisciplinarity, competency focus, and holistic development. We help close that gap.",
      },
      {
        q: "Can you help us prepare for NAAC or NBA accreditation?",
        a: "Yes. Strong academic documentation and governance frameworks are core to accreditation readiness. Many of our frameworks directly serve the documentation requirements of NAAC, NBA, and other regulatory bodies.",
      },
      {
        q: "How familiar are you with the National Curriculum Framework 2023?",
        a: "NCF 2023 is a cornerstone of our curriculum architecture methodology. We integrate its four stages framework, core competencies, and pedagogical principles into all K-12 work we undertake.",
      },
    ],
  },
  {
    category: "Pricing & Confidentiality",
    items: [
      {
        q: "How is your work priced?",
        a: "Engagements are scoped and priced on a project basis, not hourly rates. Pricing depends on the complexity, scale, and timeline of the work. We provide a detailed proposal with itemized deliverables after the discovery call.",
      },
      {
        q: "Is our institutional information kept confidential?",
        a: "Absolutely. All engagements are covered by a mutual non-disclosure agreement. We do not publish client names, internal documentation, or engagement details without explicit written permission.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Questions & Answers</span>
          <h1
            className="text-4xl md:text-5xl font-semibold mt-3 mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Answers to the questions we hear most from institutional clients before beginning an engagement.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-14">
          {faqs.map(({ category, items }) => (
            <section key={category}>
              <h2
                className="text-xl font-semibold mb-6 pb-3 border-b border-slate-100"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {category}
              </h2>
              <div className="space-y-3">
                {items.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-6 py-4 font-medium text-slate-800 text-sm cursor-pointer select-none hover:text-[#C59D3B] transition">
                      <span>{q}</span>
                      <span className="ml-4 flex-shrink-0 text-[#C59D3B] text-lg leading-none group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-20 text-center bg-slate-900 text-white rounded-2xl p-10">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-slate-300 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
            Our team is happy to answer specific questions about your institution&#39;s needs before any commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#C59D3B] text-white px-7 py-3 rounded-md hover:bg-[#B48C2E] transition text-sm font-medium"
            >
              Send Us a Question
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-600 text-slate-200 px-7 py-3 rounded-md hover:border-green-400 hover:text-green-400 transition text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
