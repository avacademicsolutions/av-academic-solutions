import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Team",
  description:
    "Meet the academic consultants and education policy experts behind AV Academic Solutions.",
};

const team = [
  {
    initials: "AV",
    name: "Aakash Verma",
    role: "Founder & Principal Consultant",
    bio: "Former academic director with 5+ years designing curriculum frameworks for leading Indian universities and government bodies. Masters in Public Administration with special focus on policy making and implementation and Governance.",
    expertise: ["Curriculum Architecture", "NEP 2020", "Higher Education Policy"],
  },
  {
    initials: "DS",
    name: "Dharam Singh",
    role: "Senior Academic Strategist",
    bio: "Specialist in K-12 institutional structuring and teacher professional development frameworks. Has worked with schools for Haryana Government. Retired Principal with Masters in English, Sociology and Political Science",
    expertise: ["K-12 Systems", "Teacher Training", "CBSE / ICSE Alignment"],
  },
  {
    initials: "PS",
    name: "Priti Shah",
    role: "EdTech Academic Lead",
    bio: "Bridges the gap between digital product teams and academic rigor. Expertise in assessment design and outcome-based learning for digital-first education platforms.",
    expertise: ["EdTech Systems", "Assessment Design", "OBE Frameworks"],
  },
  {
    initials: "MN",
    name: "Dr. Meena Nair",
    role: "Policy & Governance Specialist",
    bio: "Former consultant to state education departments. Deep expertise in NCF integration, regulatory alignment, and institutional governance documentation.",
    expertise: ["NCF Integration", "Regulatory Compliance", "Governance Models"],
  },
];

const values = [
  {
    title: "Policy Integrity",
    desc: "Every framework we design is traceable to legitimate policy foundations — NEP 2020, NCF, and international best practices.",
  },
  {
    title: "Research-First",
    desc: "We do not rely on templates. Every engagement begins with deep institutional research and context mapping.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We design for sustainability — our frameworks are built to outlast the project, growing with your institution.",
  },
  {
    title: "Institutional Confidentiality",
    desc: "All client engagements are handled with strict professional confidentiality and discretion.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Who We Are</span>
          <h1
            className="text-4xl md:text-5xl font-semibold mt-3 mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The Team Behind the Frameworks
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            AV Academic Solutions was founded on a single conviction: that institutional
            excellence begins with well-structured academic architecture. We are a team
            of education policy experts, curriculum designers, and academic strategists
            dedicated to transforming Indian education systems.
          </p>
        </div>

        {/* Team Grid */}
        <section className="mb-24">
          <h2
            className="text-2xl md:text-3xl font-semibold text-center mb-14"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Consultants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map(({ initials, name, role, bio, expertise }) => (
              <div
                key={name}
                className="flex gap-6 bg-slate-50 rounded-xl p-7 border border-slate-100 card-lift"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-[#C59D3B] font-bold text-base">
                    {initials}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {name}
                  </h3>
                  <p className="text-[#C59D3B] text-xs font-medium tracking-wide uppercase mb-3">{role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#C59D3B]/10 text-[#C59D3B] text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2
            className="text-2xl md:text-3xl font-semibold text-center mb-14"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map(({ title, desc }) => (
              <div key={title} className="border-l-2 border-[#C59D3B] pl-6">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Work With Our Team
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Every engagement begins with a complimentary discovery conversation. 
            Let us understand your institutional context before proposing any solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C59D3B] text-white px-8 py-3 rounded-md hover:bg-[#B48C2E] transition font-medium"
          >
            Schedule Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}
