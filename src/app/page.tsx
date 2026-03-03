import Link from "next/link";
import {
  BookOpen,
  FileText,
  BarChart2,
  CheckCircle,
  Users,
  Globe,
  Award,
  ArrowRight,
  Palette,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

function Divider() {
  return (
    <div className="py-16">
      <div className="w-12 h-px bg-[#C59D3B] mx-auto opacity-50" />
    </div>
  );
}

/* ── Two service pillars ──────────────────────────────────────── */
const consultingServices = [
  {
    icon: BookOpen,
    title: "Curriculum Architecture",
    desc: "Competency-based curriculum design aligned with NEP 2020, policy frameworks, and contemporary institutional standards.",
  },
  {
    icon: FileText,
    title: "Academic Policy & Structuring",
    desc: "Institutional documentation systems, academic governance structuring, and long-term implementation planning.",
  },
  {
    icon: BarChart2,
    title: "Assessment & Framework Design",
    desc: "Outcome-driven evaluation models, competency mapping, and scalable academic assessment systems.",
  },
];

const contentServices = [
  {
    icon: Palette,
    title: "Classroom Content Design",
    desc: "Fully designed, teacher-ready instructional content — lesson plans, student workbooks, activity sheets, and visual learning aids built for actual classroom use.",
  },
  {
    icon: Heart,
    title: "Moral & Value Education",
    desc: "Structured programmes in ethics, empathy, civic responsibility, and Indian value traditions. Age-appropriate, story-driven, and competency-mapped across K-12 stages.",
  },
  {
    icon: Lightbulb,
    title: "21st Century Skills",
    desc: "Critical thinking, communication, collaboration, and creativity curricula. Practical, activity-based programmes that develop future-ready learners.",
  },
  {
    icon: Zap,
    title: "Emerging & Unconventional Subjects",
    desc: "Financial literacy, environmental awareness, digital citizenship, mindfulness, and design thinking — structured as standalone subjects or integrated modules.",
  },
];

const whyUs = [
  {
    icon: CheckCircle,
    title: "NEP 2020 Alignment",
    desc: "Academic frameworks grounded in the principles of the National Education Policy 2020.",
  },
  {
    icon: Globe,
    title: "NCF Integration",
    desc: "Structured incorporation of NCF guidelines into curriculum architecture and documentation systems.",
  },
  {
    icon: Award,
    title: "Research-Backed Structuring",
    desc: "Evidence-driven methodology integrating competency mapping and scalable governance systems.",
  },
  {
    icon: Users,
    title: "Institutional Scalability",
    desc: "Designed for multi-campus scalability and policy compliance across diverse institutional contexts.",
  },
];

const testimonials = [
  {
    quote:
      "AV Academic Solutions transformed our curriculum approach. Their NEP-aligned frameworks helped us restructure three departments in under six months.",
    name: "Dr. Priya Menon",
    role: "Academic Director, South India University",
  },
  {
    quote:
      "Their 21st Century Skills programme is unlike anything we had seen before — genuinely engaging for students and completely ready for teachers to deliver from day one.",
    name: "Ms. Sunita Rao",
    role: "Principal, Delhi Public School Group",
  },
  {
    quote:
      "Working with AV Academic has been a transformative experience. The depth of understanding of India's policy landscape is unmatched.",
    name: "Superintendent R. Sharma",
    role: "District Education Officer, Maharashtra",
  },
];

const stats = [
  { num: "50+", label: "Institutions Served" },
  { num: "12+", label: "Years of Expertise" },
  { num: "200+", label: "Frameworks Delivered" },
  { num: "8", label: "States Across India" },
];

const engagements = [
  {
    title: "Moral & Value Education Curriculum — Complete Programme",
    desc: "Designed a K-8 value education programme with lesson plans, teacher manuals, student workbooks, and assessment rubrics — fully ready for classroom delivery.",
    tag: "Content Design",
  },
  {
    title: "21st Century Skills Integration for a School Chain",
    desc: "Built a standalone 21st Century Skills subject with 200+ hours of instructional content, activity kits, and term-wise assessment tools across all secondary grades.",
    tag: "Content Design",
  },
  {
    title: "Institutional Academic Restructuring Initiative",
    desc: "Developed academic documentation systems, policy-aligned governance models, and structured program architecture for scalable multi-campus delivery.",
    tag: "Consulting",
  },
  {
    title: "Competency-Based Framework for EdTech Platform",
    desc: "Built scalable curriculum systems with structured outcome-based assessment mapping for digital-first learning environments.",
    tag: "Consulting",
  },
  {
    title: "Financial Literacy Programme — Grades 6–10",
    desc: "Designed an age-progressive financial literacy curriculum covering budgeting, savings, digital payments, and entrepreneurial thinking with real-world activity projects.",
    tag: "Content Design",
  },
  {
    title: "NEP 2020 Governance Restructuring",
    desc: "Redesigned academic policy documentation, stage-wise curriculum maps, and governance frameworks for a CBSE school group expanding to three new campuses.",
    tag: "Consulting",
  },
];

const tagColors: Record<string, string> = {
  "Content Design": "bg-amber-50 text-amber-700",
  "Consulting": "bg-blue-50 text-blue-700",
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="home"
        className="bg-slate-900 text-white pt-44 pb-36 px-6 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(197,157,59,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block text-[#C59D3B] text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            NEP 2020 · NCF · Research-Driven
          </span>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.08] mb-10 tracking-[-0.02em] fade-up">
            Academic Architecture &amp;
            <br />
            Classroom Content for
            <br />
            Modern Indian Education
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-[1.75] fade-up fade-up-1">
            We design the frameworks that govern institutions — and the content
            that fills their classrooms. From policy documents to lesson plans,
            from governance models to moral education programmes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-2">
            <Link
              href="/contact"
              className="inline-block bg-[#C59D3B] text-white px-8 py-3.5 rounded-md hover:bg-[#B48C2E] transition shadow-md text-base font-medium"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block border border-slate-500 text-slate-200 px-8 py-3.5 rounded-md hover:border-[#C59D3B] hover:text-[#C59D3B] transition text-base"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="stat-num">{num}</div>
              <div className="text-slate-400 text-sm mt-2 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── WHO WE WORK WITH ─────────────────────────────── */}
      <section id="about" className="py-24 px-6 text-center academic-bg">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 gold-rule">
            Who We Work With
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mt-8 mb-16">
            From grassroots K-12 schools to enterprise EdTech platforms — we serve institutions at every scale.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "K-12 Schools & School Groups",
                desc: "Curriculum design, classroom content, value education programmes, and NEP-aligned institutional frameworks.",
                emoji: "🏫",
              },
              {
                title: "Higher Education Institutions",
                desc: "Program architecture, competency mapping, and governance-aligned academic structuring models.",
                emoji: "🎓",
              },
              {
                title: "EdTech & Education Ventures",
                desc: "Scalable academic systems, structured subject content, and assessment mapping for digital platforms.",
                emoji: "💻",
              },
            ].map(({ title, desc, emoji }) => (
              <div key={title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-lift">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-semibold text-lg mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SERVICES — TWO PILLARS ───────────────────────── */}
      <section id="services" className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 gold-rule">
              Two Ways We Serve Your Institution
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mt-8">
              We work at two levels — the architecture of your institution, and the content inside its classrooms.
              Most of our clients engage us for both.
            </p>
          </div>

          {/* Pillar 1 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Academic Consulting & Institutional Architecture
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  The governance, policy, and framework layer — how your institution is structured.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pl-0 md:pl-12">
              {consultingServices.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-lift">
                  <div className="w-11 h-11 rounded-lg bg-slate-900/5 flex items-center justify-center mb-5 group-hover:bg-[#C59D3B]/15 transition">
                    <Icon size={20} className="text-slate-700 group-hover:text-[#C59D3B] transition" />
                  </div>
                  <h4 className="font-semibold text-base mb-3 group-hover:text-[#C59D3B] transition">{title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider between pillars */}
          <div className="border-t border-dashed border-gray-300 mb-20" />

          {/* Pillar 2 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#C59D3B] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Classroom Content Design & Subject Development
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  The content layer — what teachers teach and students experience every day.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-12">
              {contentServices.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group bg-white p-8 rounded-xl shadow-sm border border-[#C59D3B]/15 card-lift">
                  <div className="w-11 h-11 rounded-lg bg-[#C59D3B]/10 flex items-center justify-center mb-5 group-hover:bg-[#C59D3B]/20 transition">
                    <Icon size={20} className="text-[#C59D3B]" />
                  </div>
                  <h4 className="font-semibold text-base mb-3 group-hover:text-[#C59D3B] transition">{title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* See full services CTA */}
          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-md hover:bg-slate-800 transition text-sm font-medium"
            >
              See Full Services Detail <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SELECTED WORK ────────────────────────────────── */}
      <section id="work" className="py-24 px-6 text-center academic-bg">
        <div className="max-w-6xl mx-auto">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 gold-rule">
            Selected Academic Engagements
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mt-8 mb-16">
            A sample of consulting frameworks and classroom content programmes we have delivered.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {engagements.map(({ title, desc, tag }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-lift">
                <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-5 tracking-wide ${tagColors[tag]}`}>
                  {tag}
                </span>
                <h3 className="font-semibold text-base mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHY US ───────────────────────────────────────── */}
      <section id="why" className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Our Difference</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 gold-rule">
              Why AV Academic Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C59D3B]/10 flex items-center justify-center">
                  <Icon size={18} className="text-[#C59D3B]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-slate-600 leading-[1.7] text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 px-6 academic-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Client Voices</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 gold-rule">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="bg-white p-8 rounded-xl shadow-sm testimonial-card card-lift">
                <p className="text-slate-600 leading-relaxed text-sm italic mb-6">&ldquo;{quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{name}</div>
                  <div className="text-slate-400 text-xs mt-1">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── BLOG TEASER ──────────────────────────────────── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#C59D3B] text-xs tracking-[0.2em] uppercase font-medium">Insights</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 gold-rule">From Our Desk</h2>
          <p className="text-slate-500 max-w-lg mx-auto mt-8 mb-12 text-sm leading-relaxed">
            Perspectives on NEP 2020, curriculum design, moral education, and the future of Indian classrooms.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-md hover:bg-slate-800 transition text-sm font-medium"
          >
            Read Our Insights <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-28 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(197,157,59,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Partner With Us to Build Better Classrooms
          </h2>
          <p className="text-slate-300 mb-10 text-base leading-relaxed">
            Whether you need institutional frameworks, ready-to-teach classroom content,
            or a complete academic transformation — we have the expertise to deliver it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#C59D3B] text-white px-9 py-3.5 rounded-md hover:bg-[#B48C2E] transition shadow-md font-medium"
            >
              Initiate Institutional Discussion
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-200 px-7 py-3.5 rounded-md hover:border-green-400 hover:text-green-400 transition text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
