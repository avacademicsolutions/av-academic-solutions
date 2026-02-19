export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-slate-900 text-white py-32 px-6 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Structured Academic Excellence.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Delivering curriculum design, educational content development, and
          institutional academic consulting aligned with NEP 2020 and
          contemporary global standards.
        </p>
        <a
          href="#contact"
          className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-md text-white font-medium transition"
        >
          Request a Proposal
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          AV Academic Solutions & Consulting is a specialized academic consulting
          firm committed to designing structured, research-backed, and
          policy-aligned educational frameworks for institutions across India.
          Our work reflects NEP 2020 principles, competency-based education
          models, and global academic standards.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="bg-gray-50 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-14">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 shadow-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Curriculum Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Structured and competency-based curriculum frameworks aligned
                with NEP 2020 and contemporary educational standards.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Educational Content Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Development of textbooks, teacher manuals, digital modules,
                assessments, and academic documentation.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Institutional Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Academic audits, program structuring, implementation planning,
                and policy documentation support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NEP ALIGNMENT SECTION */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Aligned with India’s Educational Vision
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          Our academic frameworks are developed in alignment with the National
          Education Policy (NEP) 2020, competency-based education models,
          experiential learning principles, and outcome-driven curriculum
          design. Every project reflects structural clarity, pedagogical
          relevance, and institutional applicability.
        </p>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            A Note from the Founder
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Education must be structured, purposeful, and forward-looking.
            At AV Academic Solutions & Consulting, our objective is not merely
            to develop academic content, but to design institutional frameworks
            that enable meaningful and sustainable learning.
          </p>
          <p className="text-lg leading-relaxed">
            Every engagement is guided by integrity, research-backed
            methodology, and alignment with national educational priorities.
          </p>
          <p className="mt-10 font-medium">
            — Founder, AV Academic Solutions & Consulting
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Partner With Us
        </h2>
        <p className="text-lg mb-10 text-gray-700">
          Collaborate with us to design structured academic solutions tailored
          to your institution’s vision.
        </p>
        <a
          href="#home"
          className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-md text-white font-medium transition"
        >
          Request a Proposal
        </a>
      </section>

    </main>
  );
}