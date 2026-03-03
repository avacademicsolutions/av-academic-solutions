import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights Blog",
  description:
    "Perspectives on NEP 2020 implementation, curriculum design, and the future of Indian academic institutions.",
};

const posts = [
  {
    slug: "nep-2020-implementation-challenges",
    tag: "Policy",
    date: "February 18, 2026",
    title: "NEP 2020 at Five Years: What Schools Are Still Getting Wrong",
    excerpt:
      "Five years in, most institutions have adopted NEP 2020 in letterhead but not in practice. We examine the three structural failures preventing meaningful transformation.",
    readTime: "7 min read",
  },
  {
    slug: "competency-based-education-india",
    tag: "Curriculum",
    date: "January 30, 2026",
    title: "Why Competency-Based Education Requires a New Kind of Documentation",
    excerpt:
      "Moving from content coverage to competency development demands more than syllabus changes — it demands entirely new institutional documentation systems.",
    readTime: "5 min read",
  },
  {
    slug: "edtech-academic-credibility",
    tag: "EdTech",
    date: "January 10, 2026",
    title: "The Academic Credibility Problem in Indian EdTech",
    excerpt:
      "India's EdTech sector has a product problem disguised as a market problem. Without rigorous academic structuring, even well-funded platforms struggle to retain institutional clients.",
    readTime: "6 min read",
  },
  {
    slug: "higher-education-governance",
    tag: "Higher Education",
    date: "December 14, 2025",
    title: "Governance-Aligned Academic Structuring for Multi-Campus Universities",
    excerpt:
      "As Indian universities expand to multi-campus models, traditional academic governance breaks down. Here is how to build frameworks that scale.",
    readTime: "8 min read",
  },
  {
    slug: "assessment-reform-india",
    tag: "Assessment",
    date: "November 28, 2025",
    title: "Rethinking Assessment in Indian K-12: Beyond the Annual Exam",
    excerpt:
      "Continuous and comprehensive evaluation has existed on paper for decades. What makes outcome-based assessment actually work in a diverse classroom?",
    readTime: "5 min read",
  },
  {
    slug: "ncf-curriculum-integration",
    tag: "Policy",
    date: "November 5, 2025",
    title: "Integrating the National Curriculum Framework: A Practitioner's Guide",
    excerpt:
      "NCF 2023 provides the philosophical direction. But operationalizing it requires institutional decisions that go far beyond standard professional development workshops.",
    readTime: "9 min read",
  },
];

const tagColors: Record<string, string> = {
  Policy: "bg-blue-50 text-blue-700",
  Curriculum: "bg-green-50 text-green-700",
  EdTech: "bg-purple-50 text-purple-700",
  "Higher Education": "bg-amber-50 text-amber-700",
  Assessment: "bg-rose-50 text-rose-700",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Insights</span>
          <h1
            className="text-4xl md:text-5xl font-semibold mt-3 mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From Our Desk
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Practitioner perspectives on NEP 2020, curriculum design, institutional
            governance, and the academic future of Indian education.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-14 bg-slate-900 text-white rounded-2xl p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(197,157,59,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <span className="inline-block bg-[#C59D3B] text-white text-xs px-3 py-1 rounded-full mb-5 font-medium">
              Featured
            </span>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {posts[0].title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-xs">{posts[0].date}</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-400 text-xs">{posts[0].readTime}</span>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="ml-auto text-[#C59D3B] text-sm hover:text-white transition"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.slice(1).map(({ slug, tag, date, title, excerpt, readTime }) => (
            <article
              key={slug}
              className="bg-slate-50 rounded-xl p-7 border border-slate-100 card-lift flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {tag}
                </span>
                <span className="text-slate-400 text-xs">{date}</span>
              </div>
              <h3
                className="font-semibold text-lg mb-3 leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs">{readTime}</span>
                <Link
                  href={`/blog/${slug}`}
                  className="text-[#C59D3B] text-xs hover:text-slate-900 transition font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-20 bg-[#C59D3B]/5 border border-[#C59D3B]/20 rounded-2xl p-10 text-center">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Stay Current on Education Policy
          </h2>
          <p className="text-slate-500 text-sm mb-7 max-w-md mx-auto leading-relaxed">
            We publish two in-depth pieces monthly on NEP 2020 implementation, academic structuring, and education policy. No filler.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C59D3B] text-white px-7 py-3 rounded-md hover:bg-[#B48C2E] transition text-sm font-medium"
          >
            Subscribe via Contact Form
          </Link>
        </div>

      </div>
    </main>
  );
}
