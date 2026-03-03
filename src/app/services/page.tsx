import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, FileText, BarChart2,
  Palette, Heart, Lightbulb, Zap,
  TreePine, Coins, Smartphone, Brain,
  CheckCircle, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "AV Academic Solutions offers two core services: institutional academic consulting and classroom content design — including moral education, 21st century skills, and unconventional subjects.",
};

/* ── Consulting Services ─────────────────────────────────────── */
const consulting = [
  {
    icon: BookOpen,
    title: "Curriculum Architecture",
    desc: "End-to-end design of competency-based curricula aligned with NEP 2020, NCF 2023, and institutional standards. We build the complete documentation system: curriculum maps, learning outcome frameworks, scope-and-sequence documents, and stage-wise progression charts.",
    deliverables: ["Competency Framework", "Curriculum Map", "Scope & Sequence Document", "Stage-wise Learning Outcomes"],
  },
  {
    icon: FileText,
    title: "Academic Policy & Governance Structuring",
    desc: "Institutional documentation systems including academic governance policies, committee structures, regulatory compliance frameworks, and long-term academic implementation roadmaps. Built for NAAC, NBA, and UGC alignment.",
    deliverables: ["Academic Policy Manual", "Governance Structure Document", "Regulatory Compliance Framework", "Implementation Roadmap"],
  },
  {
    icon: BarChart2,
    title: "Assessment & Framework Design",
    desc: "Outcome-driven evaluation architecture: rubric design, formative assessment systems, portfolio frameworks, moderation protocols, and competency-based grading models that replace rote testing with meaningful measurement.",
    deliverables: ["Assessment Rubrics", "Formative Assessment Toolkit", "Moderation Protocol", "Competency-Based Grading Model"],
  },
];

/* ── Content Design Services ─────────────────────────────────── */
const contentSubjects = [
  {
    icon: Heart,
    title: "Moral & Value Education",
    badge: "Most Popular",
    desc: "A fully structured subject programme rooted in Indian value traditions and contemporary ethics. Covers empathy, integrity, civic responsibility, respect for diversity, and service orientation. Designed as story-driven, discussion-based, and completely teacher-deliverable.",
    grades: "Grades 1–12",
    includes: [
      "Term-wise lesson plans (fully scripted)",
      "Student workbooks with activities and reflection exercises",
      "Teacher guides with discussion facilitation notes",
      "Assessment rubrics for non-cognitive competencies",
      "Parent engagement resources",
    ],
  },
  {
    icon: Lightbulb,
    title: "21st Century Skills",
    badge: "High Demand",
    desc: "A practical, activity-based subject that develops the four Cs: Critical Thinking, Communication, Collaboration, and Creativity. Structured as a standalone subject or an integrated module across existing subjects.",
    grades: "Grades 4–12",
    includes: [
      "200+ hours of instructional content",
      "Project-based learning modules",
      "Group activity and role-play guides",
      "Competency observation checklists",
      "Term-wise assessment tools",
    ],
  },
  {
    icon: Coins,
    title: "Financial Literacy",
    badge: "",
    desc: "An age-progressive financial education programme covering budgeting, savings, banking basics, digital payments, taxation concepts, and entrepreneurial thinking. Grounded in real-world Indian contexts.",
    grades: "Grades 5–12",
    includes: [
      "Grade-wise lesson plans",
      "Real-world simulation activities",
      "Student workbooks with India-specific case studies",
      "Project-based learning modules",
      "Assessment tools",
    ],
  },
  {
    icon: TreePine,
    title: "Environmental Awareness & Sustainability",
    badge: "",
    desc: "An integrated sustainability curriculum covering ecology, climate literacy, sustainable development goals, local environmental action, and responsible citizenship. Connects global frameworks to Indian contexts.",
    grades: "Grades 3–10",
    includes: [
      "Nature-based and outdoor learning activities",
      "School sustainability audit project",
      "Community engagement modules",
      "Cross-subject integration guides",
      "Assessment rubrics",
    ],
  },
  {
    icon: Smartphone,
    title: "Digital Citizenship & Media Literacy",
    badge: "",
    desc: "A structured programme covering safe and ethical use of the internet, social media literacy, data privacy, cyberbullying awareness, and responsible digital communication — essential for every school in the smartphone era.",
    grades: "Grades 5–12",
    includes: [
      "Age-appropriate scenario-based lessons",
      "Parent workshop guides",
      "School digital policy templates",
      "Student pledge and commitment frameworks",
      "Assessment tools",
    ],
  },
  {
    icon: Brain,
    title: "Mindfulness & Emotional Well-being",
    badge: "",
    desc: "A school-based mindfulness and social-emotional learning programme that builds self-awareness, emotional regulation, stress management, and healthy relationships. Secular, evidence-based, and teacher-friendly.",
    grades: "Grades 1–10",
    includes: [
      "Daily 10-minute classroom practice guides",
      "Age-appropriate mindfulness activity sets",
      "Teacher self-care and facilitation guide",
      "SEL competency framework",
      "Parent integration resources",
    ],
  },
  {
    icon: Zap,
    title: "Design Thinking & Innovation",
    badge: "",
    desc: "A project-based subject that teaches students to identify problems, ideate solutions, prototype, and iterate — developing an innovation mindset applicable across all disciplines.",
    grades: "Grades 6–12",
    includes: [
      "5-stage design thinking project kits",
      "Facilitation guides for teachers",
      "Student design journals",
      "Peer review and presentation frameworks",
      "Assessment rubrics",
    ],
  },
  {
    icon: Palette,
    title: "Custom Subject Development",
    badge: "Bespoke",
    desc: "Have a subject or programme in mind that is not listed here? We design completely bespoke educational content for any unconventional subject your institution wants to introduce — from cultural heritage programmes to leadership education.",
    grades: "All Grades",
    includes: [
      "Discovery and scoping consultation",
      "Custom competency framework",
      "Full instructional content design",
      "Teacher training programme",
      "Assessment architecture",
    ],
  },
];

/* ── What a content package includes ────────────────────────── */
const packageIncludes = [
  "Term-wise and lesson-by-lesson lesson plans",
  "Student workbooks / activity booklets",
  "Teacher guides with facilitation notes",
  "Assessment tools: rubrics, checklists, project briefs",
  "Editable formats (Word / Google Docs) for school customisation",
  "Alignment notes to NEP 2020 and NCF 2023",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-20">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">What We Offer</span>
          <h1
            className="text-4xl md:text-5xl font-semibold mt-3 mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Services
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            AV Academic Solutions works at two levels: the <strong>architecture</strong> of your institution,
            and the <strong>content</strong> inside its classrooms. Most clients engage us for both.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            PILLAR 1 — CONSULTING
        ══════════════════════════════════════════════════ */}
        <section className="mb-24">
          <div className="flex items-start gap-5 mb-12">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
            <div>
              <h2
                className="text-3xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Academic Consulting & Institutional Architecture
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
                The invisible infrastructure of educational excellence. We design the
                governance models, policy documents, curriculum frameworks, and assessment
                systems that allow your institution to operate at its full potential.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consulting.map(({ icon: Icon, title, desc, deliverables }) => (
              <div key={title} className="bg-slate-50 rounded-xl p-8 border border-slate-100 card-lift">
                <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#C59D3B]" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{desc}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Deliverables</p>
                  <ul className="space-y-2">
                    {deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle size={13} className="text-[#C59D3B] flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PILLAR 2 — CONTENT DESIGN
        ══════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-start gap-5 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#C59D3B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
            <div>
              <h2
                className="text-3xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Classroom Content Design & Subject Development
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
                Complete, teacher-ready instructional content — for both core subjects and
                the new, unconventional subjects that modern students need. Every programme
                arrives classroom-ready: lesson plans, workbooks, teacher guides, and
                assessment tools all included.
              </p>
            </div>
          </div>

          {/* What every package includes */}
          <div className="bg-[#C59D3B]/5 border border-[#C59D3B]/20 rounded-xl p-6 mb-10 ml-0 md:ml-15">
            <p className="text-sm font-semibold text-[#C59D3B] uppercase tracking-widest mb-4">Every Content Programme Includes</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {packageIncludes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle size={13} className="text-[#C59D3B] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Subject cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {contentSubjects.map(({ icon: Icon, title, badge, desc, grades, includes }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm card-lift overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#C59D3B]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#C59D3B]" />
                    </div>
                    <div className="flex items-center gap-2">
                      {badge && (
                        <span className="bg-[#C59D3B] text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          {badge}
                        </span>
                      )}
                      <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                        {grades}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{desc}</p>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Programme Includes</p>
                    <ul className="space-y-1.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle size={12} className="text-[#C59D3B] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 border-t border-slate-100 px-8 py-4">
                  <Link
                    href="/contact"
                    className="text-sm text-[#C59D3B] font-medium hover:text-slate-900 transition inline-flex items-center gap-1.5"
                  >
                    Request this programme <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ────────────────────────────────────── */}
        <section className="mt-24 bg-slate-50 rounded-2xl p-10 md:p-14">
          <div className="text-center mb-12">
            <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">How It Works</span>
            <h2
              className="text-3xl font-semibold mt-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Our Engagement Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your institution, current challenges, and desired outcomes. No obligation." },
              { step: "02", title: "Scoped Proposal", desc: "We present a detailed proposal with deliverables, timeline, and investment." },
              { step: "03", title: "Design & Build", desc: "Our team designs your frameworks or content with regular review checkpoints." },
              { step: "04", title: "Handover & Support", desc: "We deliver all materials in editable formats with a walkthrough and implementation support." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div
                  className="text-4xl font-bold text-[#C59D3B] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step}
                </div>
                <h3 className="font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-10 md:p-14 text-center">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Many institutions come to us knowing they need to improve but unsure where to start.
            Our discovery call is free, and we will help you identify exactly what will create
            the most impact for your context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#C59D3B] text-white px-8 py-3.5 rounded-md hover:bg-[#B48C2E] transition font-medium"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/faq"
              className="inline-block border border-slate-600 text-slate-200 px-8 py-3.5 rounded-md hover:border-[#C59D3B] hover:text-[#C59D3B] transition text-sm"
            >
              Read Our FAQ
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
