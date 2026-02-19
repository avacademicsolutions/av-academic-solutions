function Divider() {
  return (
    <div className="py-20">
      <div className="w-16 h-[1px] bg-[#C59D3B] mx-auto opacity-60"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section id="home" className="bg-slate-900 text-white pt-44 pb-36 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.08] mb-10 tracking-[-0.02em]">
            Strategic Academic Architecture
            <br />
            for Modern Education Systems
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-14 leading-[1.7]">
            We partner with schools, universities, government bodies, and
            education ventures to design policy-aligned, research-driven
            academic frameworks built for institutional scale and long-term impact.
          </p>

         <div className="flex justify-center">
  <a
    href="/contact"
    className="
      inline-block
      bg-[#C59D3B]
      text-white
      px-8
      md:px-10
      py-3
      rounded-md
      hover:bg-[#B48C2E]
      transition
      shadow-md
      text-base
      md:text-lg
    "
  >
    Schedule Consultation
  </a>
</div>
      </div>
      </section>

      <Divider />

      {/* WHO WE WORK WITH */}
      <section id="about" className="py-28 px-6 text-center academic-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">
            Who We Work With
          </h2>

          <div className="grid md:grid-cols-3 gap-14 text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg mb-3">
                K-12 Schools & School Groups
              </h3>
              <p>
                Structured curriculum development, academic documentation,
                and NEP-aligned institutional frameworks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Higher Education Institutions
              </h3>
              <p>
                Program architecture, competency mapping, and governance-aligned
                academic structuring models.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                EdTech & Education Ventures
              </h3>
              <p>
                Scalable academic systems, assessment mapping,
                and structured content architecture for digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CORE SERVICES */}
      <section id="services" className="bg-gray-50 py-28 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-20">
            Core Academic Consulting Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="group bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 group-hover:text-[#C59D3B] transition">
                Curriculum Architecture
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Competency-based curriculum design aligned with NEP 2020,
                policy frameworks, and contemporary institutional standards.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 group-hover:text-[#C59D3B] transition">
                Academic Policy & Structuring
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Institutional documentation systems, academic governance
                structuring, and long-term implementation planning.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 group-hover:text-[#C59D3B] transition">
                Assessment & Framework Design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Outcome-driven evaluation models, competency mapping,
                and scalable academic assessment systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Divider />

      {/* SELECTED WORK */}
      <section id="work" className="py-28 px-6 text-center academic-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">
            Selected Academic Engagements
          </h2>

          <div className="space-y-14 text-left max-w-4xl mx-auto text-slate-700 leading-relaxed">

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Moral & Value Education Curriculum Architecture
              </h3>
              <p>
                Designed a structured value-based academic framework integrating
                competency mapping, teacher manuals, and institutional
                implementation roadmaps.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Institutional Academic Restructuring Initiative
              </h3>
              <p>
                Developed academic documentation systems, policy-aligned
                governance models, and structured program architecture for scalable delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Competency-Based Framework for EdTech Platform
              </h3>
              <p>
                Built scalable curriculum systems with structured
                outcome-based assessment mapping for digital-first environments.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Divider />

      {/* WHY US */}
      <section id="why" className="bg-gray-50 py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center">
            Why AV Academic Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 text-left">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                NEP 2020 Alignment
              </h3>
              <p className="text-slate-600 leading-[1.7]">
                Academic frameworks grounded in the principles of the National
                Education Policy 2020.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                National Curriculum Framework Integration
              </h3>
              <p className="text-slate-600 leading-[1.7]">
                Structured incorporation of NCF guidelines into curriculum
                architecture and documentation systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Research-Backed Academic Structuring
              </h3>
              <p className="text-slate-600 leading-[1.7]">
                Evidence-driven methodology integrating competency mapping
                and scalable governance systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Institutional Scalability & Governance Focus
              </h3>
              <p className="text-slate-600 leading-[1.7]">
                Designed for multi-campus scalability and policy compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Divider />

      {/* FINAL CTA */}
      <section id="contact-cta" className="bg-slate-900 text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Partner With Us to Structure Your Academic Vision
          </h2>
          <a
            href="/contact"
            className="bg-[#C59D3B] text-white px-10 py-3 rounded-md hover:bg-[#B48C2E] transition shadow-md"
          >
            Initiate Institutional Discussion
          </a>
        </div>
      </section>

    </main>
  );
}