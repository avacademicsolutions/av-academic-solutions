import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

/* ── Article Data ─────────────────────────────────────────────── */
const articles: Record<string, {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  content: { type: "p" | "h2" | "h3" | "ul" | "blockquote"; text?: string; items?: string[] }[];
}> = {
  "nep-2020-implementation-challenges": {
    tag: "Policy",
    date: "February 18, 2026",
    readTime: "7 min read",
    title: "NEP 2020 at Five Years: What Schools Are Still Getting Wrong",
    subtitle: "Five years in, most institutions have adopted NEP 2020 in letterhead but not in practice.",
    author: "Aakash Verma",
    authorRole: "Founder & Principal Consultant",
    content: [
      { type: "p", text: "When the National Education Policy 2020 was announced, it was received with considerable optimism by educators, policymakers, and institutional leaders across India. Here, finally, was a comprehensive reimagining of how the country's schools and universities would be structured — moving away from rote learning, embracing multidisciplinarity, and placing competency development at the centre of institutional life." },
      { type: "p", text: "Five years later, the picture is considerably more complex. While a significant number of institutions have updated their prospectuses and websites to declare NEP compliance, the deeper structural changes the policy demands have been slow to materialise. In our work across K-12 schools, higher education institutions, and government bodies, we see the same failures repeating with striking consistency." },
      { type: "h2", text: "Failure 1: Treating NEP as a Branding Exercise" },
      { type: "p", text: "The most pervasive problem is the decoupling of language from practice. Schools add the phrase 'NEP 2020 aligned' to their admissions materials, create a dedicated section on their website listing the policy's principles, and then proceed to run an academic programme that is structurally identical to what existed before 2020." },
      { type: "p", text: "This is not merely cosmetic dishonesty — it actively prevents genuine transformation. When institutional leadership believes the policy has already been 'implemented', the conversation about actual structural change becomes much harder to initiate. The compliance checkbox has been ticked. Why revisit it?" },
      { type: "p", text: "Genuine NEP alignment requires changes to curriculum architecture, assessment frameworks, timetabling structures, teacher professional development systems, and governance documentation. None of these can be achieved by updating a website." },
      { type: "h2", text: "Failure 2: Misreading the 5+3+3+4 Structure" },
      { type: "p", text: "The new curricular and pedagogical structure proposed by NEP 2020 — five years of foundational stage, three years of preparatory, three years of middle, and four years of secondary education — is widely cited but poorly understood at the implementation level." },
      { type: "p", text: "Most schools interpret this as a simple renaming exercise: what was 'Pre-Primary to Class 2' is now 'Foundational Stage'. The labels change; the pedagogical approach does not. The foundational stage under NEP demands a play-based, activity-based learning approach with specific competency targets. The preparatory stage requires a shift toward experiential learning with some formal instruction. These are not optional flavours — they represent distinct pedagogical demands that require revised curriculum documents, teacher training, and classroom design." },
      { type: "ul", items: [
        "Curriculum documents must be rewritten around competency targets, not content coverage.",
        "Teacher training must include stage-specific pedagogical methodology, not just content knowledge.",
        "Assessment practices at each stage must align with developmental appropriateness.",
        "Timetabling must create space for activity-based and project-based learning."
      ]},
      { type: "h2", text: "Failure 3: Ignoring the Documentation Imperative" },
      { type: "p", text: "NEP 2020 is, at its core, a policy document. Its implementation demands corresponding institutional documentation — competency frameworks, curriculum maps, assessment rubrics, governance policies, and implementation roadmaps. These documents do not exist in most Indian schools." },
      { type: "p", text: "Without documentation, implementation is personality-dependent. A committed principal can drive NEP-aligned practices in her school, but when she moves, the practices move with her. Sustainable institutional transformation requires that the practices be encoded in documents that outlast any individual." },
      { type: "blockquote", text: "Sustainable institutional transformation requires that NEP-aligned practices be encoded in documents that outlast any individual. Without documentation, implementation is personality-dependent." },
      { type: "p", text: "This is where academic architecture becomes critical. The goal is not to produce documentation for its own sake, but to build the institutional memory that allows NEP-aligned practices to become the default rather than the exception." },
      { type: "h2", text: "The Path Forward" },
      { type: "p", text: "The schools and institutions making genuine progress on NEP implementation share a common characteristic: they have invested in structural redesign, not just training and awareness. They have engaged with the policy at the level of curriculum architecture, documentation systems, and governance reform." },
      { type: "p", text: "For institutions still in the early stages, the most important first step is an honest audit — not of whether your website mentions NEP, but of whether your actual curriculum documents, assessment systems, and governance structures reflect the policy's core demands. That audit, more often than not, reveals a significant gap between stated and actual alignment." },
      { type: "p", text: "Five years in, it is time to move beyond compliance as performance. The institutions that will define Indian education in the next decade are those investing now in the structural foundations that genuine transformation requires." },
    ],
  },

  "competency-based-education-india": {
    tag: "Curriculum",
    date: "January 30, 2026",
    readTime: "5 min read",
    title: "Why Competency-Based Education Requires a New Kind of Documentation",
    subtitle: "Moving from content coverage to competency development demands more than syllabus changes.",
    author: "Dharam Singh",
    authorRole: "Senior Academic Strategist",
    content: [
      { type: "p", text: "The shift from content-based to competency-based education is one of the most discussed transitions in Indian academic circles. NEP 2020 mandates it. NCERT frameworks embed it. State curricula are beginning to reflect it. And yet, in most institutions we engage with, the curriculum documentation has not caught up." },
      { type: "p", text: "The problem is not a lack of intent. Most academic leaders understand, at a conceptual level, that education should develop competencies rather than transmit information. The problem is that competency-based education requires a fundamentally different approach to institutional documentation — and very few institutions have made that shift." },
      { type: "h2", text: "What Content-Based Documentation Looks Like" },
      { type: "p", text: "Traditional curriculum documentation is organised around content: chapter lists, topic sequences, annual teaching plans. Assessment is designed to test whether students can recall and reproduce this content. The teacher's job is to cover the syllabus; the student's job is to memorise it." },
      { type: "p", text: "This model produces a particular kind of institutional document: the syllabus. It tells you what will be taught, in what order, across how many periods. It is straightforward to produce, easy to understand, and completely inadequate for competency-based education." },
      { type: "h2", text: "What Competency-Based Documentation Requires" },
      { type: "p", text: "Competency-based education requires that institutions document not just what will be taught, but what students will be able to do as a result of their education. This sounds simple. In practice, it demands an entirely different documentation architecture." },
      { type: "ul", items: [
        "Competency frameworks: A structured map of the knowledge, skills, and dispositions students should develop at each stage.",
        "Learning outcome statements: Specific, measurable descriptions of what students can demonstrate at the end of each unit, term, and year.",
        "Assessment rubrics: Criteria-based tools that allow teachers to evaluate student competency against defined standards.",
        "Curriculum maps: Documents that trace the progression of each competency across subjects, stages, and years.",
        "Instructional guides: Resources that help teachers understand how to develop specific competencies through their teaching."
      ]},
      { type: "h2", text: "The Gap Most Institutions Face" },
      { type: "p", text: "Most institutions attempting to implement competency-based education have the first layer — they can articulate, at a high level, the competencies they want to develop. What they lack is the middle layer: the documentation infrastructure that connects those high-level competencies to day-to-day classroom practice." },
      { type: "blockquote", text: "Most institutions have the vision. What they lack is the documentation infrastructure that connects that vision to classroom practice." },
      { type: "p", text: "Without this infrastructure, competency-based education remains an aspiration. Teachers revert to content coverage because that is what their lesson plans and assessment tools measure. The gap between policy intent and classroom reality widens." },
      { type: "h2", text: "Building the Infrastructure" },
      { type: "p", text: "The solution is not more training or better technology. It is documentation. Institutions need to invest in building the curriculum architecture that makes competency-based education operational: the frameworks, maps, rubrics, and guides that translate the vision into daily institutional practice." },
      { type: "p", text: "This is painstaking work. It requires deep subject knowledge, familiarity with developmental psychology, alignment with policy frameworks, and the ability to write with precision and clarity. But it is the only work that produces durable change — because it encodes the vision in documents that every teacher, assessor, and academic leader can use." },
    ],
  },

  "edtech-academic-credibility": {
    tag: "EdTech",
    date: "January 10, 2026",
    readTime: "6 min read",
    title: "The Academic Credibility Problem in Indian EdTech",
    subtitle: "India's EdTech sector has a product problem disguised as a market problem.",
    author: "Priti Shah",
    authorRole: "EdTech Academic Lead",
    content: [
      { type: "p", text: "The Indian EdTech sector has spent the better part of a decade building products. Platforms, apps, adaptive engines, video libraries, live tutoring marketplaces. Billions of dollars of venture capital have funded the construction of an enormous digital education infrastructure. And yet, a persistent problem remains: institutional clients — schools, universities, corporate training departments — remain difficult to convert and harder to retain." },
      { type: "p", text: "The standard diagnosis is a market problem: institutional sales cycles are long, procurement is bureaucratic, decision-makers are risk-averse. All of this is true. But underneath the market problem is a product problem that receives far less attention: most EdTech platforms lack genuine academic credibility." },
      { type: "h2", text: "What Academic Credibility Actually Means" },
      { type: "p", text: "Academic credibility is not the same as content quality. A platform can have excellent videos, engaging assessments, and impressive production values while still lacking academic credibility. Academic credibility is about structure — whether the platform's learning architecture is built on defensible educational principles that institutional clients can recognise and trust." },
      { type: "p", text: "For an institutional client — a school principal, a university academic committee, a corporate L&D head — the question is not 'Is this content good?' It is 'Can I justify adopting this to my board, my regulators, my parents?' That requires evidence of academic rigour that most EdTech platforms cannot provide." },
      { type: "ul", items: [
        "A documented competency framework that explains what learners will be able to do.",
        "Learning outcome statements aligned to recognised standards (NEP, NCF, NQF, etc.).",
        "An assessment architecture that measures competency development, not just content recall.",
        "A curriculum map showing how content sequences support progressive skill development.",
        "Evidence of alignment with regulatory or accreditation requirements."
      ]},
      { type: "h2", text: "Why Most Platforms Skip This Work" },
      { type: "p", text: "Academic architecture is invisible work. It does not show up in product demos. It does not trend on social media. It does not impress investors who are looking at monthly active users and engagement metrics. It is the kind of foundational work that is easy to defer in the relentless push toward product-market fit." },
      { type: "blockquote", text: "Academic architecture is invisible work — but it is the work that converts institutional clients and keeps them." },
      { type: "p", text: "The deferral is rational in the early stages. But as platforms mature and begin targeting institutional markets, the absence of academic structure becomes a significant barrier. Institutional procurement teams ask for documentation that does not exist. Academic partnerships require alignment evidence that has not been produced. The credibility gap becomes a revenue gap." },
      { type: "h2", text: "Building Academic Credibility Retrospectively" },
      { type: "p", text: "The good news is that academic credibility can be built retrospectively. Platforms with strong content libraries can work with academic architects to develop the documentation infrastructure that institutional clients require. Competency frameworks can be mapped onto existing content. Learning outcomes can be articulated and aligned to standards. Assessment tools can be redesigned around competency measurement." },
      { type: "p", text: "This is not a quick exercise — it requires genuine academic expertise and significant documentation effort. But for platforms with institutional ambitions, it is among the highest-return investments available. The platforms that have made this investment consistently report shorter sales cycles, higher institutional conversion rates, and dramatically better retention." },
    ],
  },

  "higher-education-governance": {
    tag: "Higher Education",
    date: "December 14, 2025",
    readTime: "8 min read",
    title: "Governance-Aligned Academic Structuring for Multi-Campus Universities",
    subtitle: "As Indian universities expand to multi-campus models, traditional governance breaks down.",
    author: "Dr. Meena Nair",
    authorRole: "Policy & Governance Specialist",
    content: [
      { type: "p", text: "Indian higher education is in the middle of a significant structural transition. Driven by NEP 2020's push toward large, multidisciplinary institutions and the UGC's evolving regulatory framework, many universities are expanding — adding campuses, absorbing affiliated colleges, and building distributed academic operations that span multiple geographies." },
      { type: "p", text: "This expansion is creating a governance problem that most institutions are not prepared for. Traditional academic governance models — built around a single campus, a single academic council, and a relatively homogenous faculty — are breaking down under the weight of multi-campus complexity. The result is inconsistent academic quality, regulatory risk, and an erosion of institutional identity." },
      { type: "h2", text: "The Core Governance Challenge" },
      { type: "p", text: "In a single-campus university, academic governance can function largely through informal mechanisms. Faculty know each other. Decisions get made in corridors. The Vice-Chancellor has direct visibility into academic operations. Quality is maintained through personal relationships and shared culture." },
      { type: "p", text: "None of this scales. When a university operates across three, five, or ten campuses, informal governance fails. Decisions made at the central level do not translate consistently to campus operations. Academic standards drift. Faculty at different campuses develop divergent interpretations of the same curriculum. Students at different campuses receive materially different educational experiences under the same degree programme." },
      { type: "h2", text: "What Governance-Aligned Academic Structuring Looks Like" },
      { type: "ul", items: [
        "A central academic policy architecture that defines non-negotiable standards for curriculum, assessment, and quality assurance across all campuses.",
        "Campus-level implementation frameworks that translate central policy into context-appropriate practice.",
        "Governance documentation that clearly defines decision rights — what each campus can decide autonomously, and what requires central academic council approval.",
        "Quality assurance systems that allow central monitoring of academic standards without micromanaging campus operations.",
        "Faculty development frameworks that ensure consistent pedagogical capability across all campuses."
      ]},
      { type: "h2", text: "The Role of Documentation" },
      { type: "p", text: "The central instrument of multi-campus academic governance is documentation. Not bureaucratic paperwork for its own sake, but carefully designed institutional documents that encode academic standards, define processes, and establish accountability mechanisms that function regardless of geography." },
      { type: "blockquote", text: "In a multi-campus university, documentation is not bureaucracy — it is the connective tissue that holds the institution together." },
      { type: "p", text: "The institutions that manage multi-campus expansion successfully are those that invest in this documentation infrastructure before the problems become acute. They build their central academic policy architecture during the planning phase of expansion, not in response to quality failures that have already occurred." },
      { type: "h2", text: "UGC and Regulatory Alignment" },
      { type: "p", text: "There is an additional regulatory dimension to this challenge. The UGC's evolving framework for multi-campus universities, combined with state regulatory requirements, creates a complex compliance landscape that governance documentation must navigate. Institutions that have not invested in governance-aligned academic structuring frequently find themselves unable to demonstrate compliance with regulatory requirements — not because they are non-compliant in practice, but because they lack the documentation to evidence compliance." },
      { type: "p", text: "Building governance-aligned academic structures is, therefore, both an educational quality imperative and a regulatory risk management investment. The institutions that get this right early will find the path to expansion significantly smoother than those that treat governance as an afterthought." },
    ],
  },

  "assessment-reform-india": {
    tag: "Assessment",
    date: "November 28, 2025",
    readTime: "5 min read",
    title: "Rethinking Assessment in Indian K-12: Beyond the Annual Exam",
    subtitle: "Continuous and comprehensive evaluation has existed on paper for decades. What makes it actually work?",
    author: "Rohit Kumar",
    authorRole: "Senior Academic Strategist",
    content: [
      { type: "p", text: "Continuous and Comprehensive Evaluation — CCE — was introduced into Indian K-12 education over a decade ago as an alternative to the dominance of the annual summative examination. The intention was sound: move from a single high-stakes test that determined a student's academic fate to a more holistic, ongoing assessment of learning and development." },
      { type: "p", text: "In practice, CCE became one of the most widely criticised reforms in recent Indian education history. Schools found it administratively burdensome. Teachers struggled to implement it meaningfully alongside the pressure of syllabus coverage. Parents were confused by unfamiliar grading systems. And the annual exam never really disappeared — it simply coexisted uneasily with a parallel CCE structure that most schools treated as compliance paperwork." },
      { type: "h2", text: "Why CCE Failed (and What NEP 2020 is Trying to Fix)" },
      { type: "p", text: "The core failure of CCE was not conceptual — it was architectural. The reform mandated a new assessment approach without providing schools with the structural tools to implement it: the rubric design frameworks, the documentation systems, the teacher training methodologies, or the timetabling flexibility that genuine continuous assessment requires." },
      { type: "p", text: "NEP 2020 takes a different approach. Rather than prescribing a specific assessment system, it articulates assessment principles: formative over summative, competency-focused, developmentally appropriate, stress-reducing, and aligned with learning outcomes rather than content coverage. The operationalisation is left to institutions — which is both an opportunity and a risk." },
      { type: "h2", text: "What Effective Assessment Architecture Looks Like" },
      { type: "ul", items: [
        "Assessment aligned to competency frameworks, not syllabus completion — asking 'can the student do this?' rather than 'does the student know this?'",
        "A mix of formative assessment tools: portfolios, project-based assessments, observation records, and peer assessment, alongside summative checkpoints.",
        "Rubrics that are specific enough to be useful but simple enough for teachers to apply consistently.",
        "Moderation systems that ensure assessment standards are applied consistently across classrooms and teachers.",
        "Documentation that captures learning progression over time, not just performance at a single point."
      ]},
      { type: "blockquote", text: "Effective assessment tells the story of a student's learning journey. The annual exam tells you where they ended up. The architecture of assessment determines which story your institution is telling." },
      { type: "h2", text: "The Teacher's Role in Assessment Reform" },
      { type: "p", text: "No assessment reform succeeds without teachers. This is the lesson CCE taught most clearly. Teachers need to understand not just the mechanics of new assessment tools, but the underlying rationale — why competency-focused assessment produces better learning outcomes than content-recall testing." },
      { type: "p", text: "This requires professional development that is substantive, ongoing, and embedded in the actual curriculum documents teachers use daily. Rubrics must be built into lesson planning frameworks. Assessment criteria must be integrated into the curriculum map. The architecture must make good assessment practice the path of least resistance, not an additional burden." },
      { type: "p", text: "Institutions that invest in this architecture — building assessment tools into their curriculum documentation rather than treating them as separate systems — are the ones where assessment reform actually takes root. The annual exam does not disappear overnight. But it gradually becomes one data point among many, rather than the sole arbiter of student capability." },
    ],
  },

  "ncf-curriculum-integration": {
    tag: "Policy",
    date: "November 5, 2025",
    readTime: "9 min read",
    title: "Integrating the National Curriculum Framework: A Practitioner's Guide",
    subtitle: "NCF 2023 provides the philosophical direction. Operationalising it requires institutional decisions that go far beyond standard workshops.",
    author: "Dr. Ananya Verma",
    authorRole: "Founder & Principal Consultant",
    content: [
      { type: "p", text: "The National Curriculum Framework 2023 for School Education — NCF-SE — is the most comprehensive reimagining of India's school curriculum architecture in two decades. Building on the philosophical foundations of NEP 2020, it articulates a detailed vision for how Indian schools should approach curriculum design, pedagogy, assessment, and the organisation of learning across four stages of schooling." },
      { type: "p", text: "For academic leaders and curriculum designers, NCF-SE is both a resource and a challenge. It is rich in educational philosophy and pedagogical principle. What it is not is an implementation manual. The gap between the framework's vision and an institution's actual curriculum practice is significant — and bridging it requires a series of institutional decisions and documentation investments that NCF-SE does not prescribe." },
      { type: "h2", text: "Understanding What NCF-SE Actually Provides" },
      { type: "p", text: "NCF-SE provides: a philosophical framework for Indian education rooted in the concept of the 'Panchakosha'; a four-stage structure for schooling (Foundational, Preparatory, Middle, Secondary); curriculum areas and their rationale; guidance on pedagogical approaches appropriate to each stage; principles for assessment and evaluation; and guidance on the organisation of school time and timetabling." },
      { type: "p", text: "What NCF-SE does not provide is equally important to understand: subject-specific curriculum documents (these are being developed by NCERT separately as Curricular Expectations documents), school-level implementation plans, teacher training programmes, assessment tools and rubrics, or governance documentation frameworks." },
      { type: "h2", text: "The Four Integration Decisions Every Institution Must Make" },
      { type: "h3", text: "1. Stage Mapping" },
      { type: "p", text: "NCF-SE's four-stage structure does not map neatly onto most schools' existing class structures. Institutions must make explicit decisions about how their current grade structure corresponds to NCF-SE stages, what this means for curriculum continuity, and how transitions between stages will be managed. This is a governance decision that should be documented in an institutional policy." },
      { type: "h3", text: "2. Competency Framework Development" },
      { type: "p", text: "NCF-SE articulates high-level competencies in each curriculum area. These must be translated into institution-specific competency frameworks that are granular enough to guide curriculum planning and assessment design. This is one of the most technically demanding aspects of NCF integration — and one that most schools cannot do without specialist academic support." },
      { type: "h3", text: "3. Pedagogical Alignment" },
      { type: "p", text: "NCF-SE's pedagogical recommendations — play-based learning in the foundational stage, experiential learning in preparatory, inquiry-based learning in middle, and reflective learning in secondary — require corresponding changes to classroom practice and teacher professional development. These changes must be supported by revised curriculum documents and teacher guides, not just training workshops." },
      { type: "h3", text: "4. Assessment Redesign" },
      { type: "p", text: "NCF-SE's assessment philosophy emphasises formative assessment, competency measurement, and student wellbeing. Translating this philosophy into actual assessment tools — rubrics, observation frameworks, portfolio templates, moderation systems — is a documentation task that requires significant institutional investment." },
      { type: "blockquote", text: "NCF-SE tells institutions where to go. Academic architecture determines how they will get there. Without the latter, the former remains an aspiration." },
      { type: "h2", text: "Common Integration Mistakes" },
      { type: "ul", items: [
        "Treating NCF-SE as a document to reference rather than a framework to operationalise.",
        "Conducting one-off professional development workshops without embedding NCF principles in curriculum documentation.",
        "Attempting to integrate NCF-SE subject by subject, without first establishing institution-wide structural alignment.",
        "Conflating NCF-SE alignment with NCERT textbook adoption — the framework is broader than any specific textbook series.",
        "Failing to document integration decisions, leading to inconsistent implementation across departments and campuses."
      ]},
      { type: "h2", text: "Building an NCF Integration Roadmap" },
      { type: "p", text: "Effective NCF integration requires a phased institutional roadmap, typically spanning 18-36 months, that sequences the structural, documentation, and professional development work that genuine alignment demands. The roadmap must identify clear milestones, assign institutional ownership to each integration decision, and build in review mechanisms that allow for course correction." },
      { type: "p", text: "Institutions that approach NCF integration with this level of structural intentionality — rather than treating it as a training and awareness exercise — are the ones producing the educational outcomes the framework was designed to achieve. The framework is sound. The question is always whether the institutional infrastructure is built to realise it." },
    ],
  },
};

/* ── Static params for build ──────────────────────────────────── */
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.subtitle,
  };
}

/* ── Tag colour map ───────────────────────────────────────────── */
const tagColors: Record<string, string> = {
  Policy:            "bg-blue-50 text-blue-700",
  Curriculum:        "bg-green-50 text-green-700",
  EdTech:            "bg-purple-50 text-purple-700",
  "Higher Education":"bg-amber-50 text-amber-700",
  Assessment:        "bg-rose-50 text-rose-700",
};

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { tag, date, readTime, title, subtitle, author, authorRole, content } = article;

  /* related = 2 other articles */
  const related = Object.entries(articles)
    .filter(([s]) => s !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#C59D3B] transition mb-10"
        >
          ← Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] ?? "bg-gray-100 text-gray-600"}`}>
              {tag}
            </span>
            <span className="text-slate-400 text-xs">{date}</span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="text-slate-400 text-xs">{readTime}</span>
          </div>

          <h1
            className="text-3xl md:text-4xl font-semibold leading-snug mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {title}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed border-l-2 border-[#C59D3B] pl-5">
            {subtitle}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mb-12 pb-10 border-b border-slate-100">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[#C59D3B] font-bold text-xs flex-shrink-0">
            {author.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div className="text-sm font-medium text-slate-800">{author}</div>
            <div className="text-xs text-slate-400">{authorRole}, AV Academic Solutions</div>
          </div>
        </div>

        {/* Article body */}
        <article className="prose prose-slate max-w-none">
          {content.map((block, i) => {
            if (block.type === "h2") return (
              <h2
                key={i}
                className="text-2xl font-semibold mt-10 mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {block.text}
              </h2>
            );
            if (block.type === "h3") return (
              <h3
                key={i}
                className="text-xl font-semibold mt-7 mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {block.text}
              </h3>
            );
            if (block.type === "p") return (
              <p key={i} className="text-slate-700 leading-[1.85] mb-5 text-base">
                {block.text}
              </p>
            );
            if (block.type === "ul") return (
              <ul key={i} className="space-y-3 mb-6 pl-1">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 text-slate-700 text-base leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C59D3B] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
            if (block.type === "blockquote") return (
              <blockquote
                key={i}
                className="my-8 pl-6 border-l-2 border-[#C59D3B] bg-[#C59D3B]/5 py-4 pr-5 rounded-r-lg"
              >
                <p className="text-slate-700 italic leading-relaxed text-base m-0">
                  &ldquo;{block.text}&rdquo;
                </p>
              </blockquote>
            );
            return null;
          })}
        </article>

        {/* Author card */}
        <div className="mt-14 pt-10 border-t border-slate-100 bg-slate-50 rounded-xl p-7 flex gap-5">
          <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-[#C59D3B] font-bold text-sm flex-shrink-0">
            {author.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{author}</div>
            <div className="text-xs text-[#C59D3B] font-medium mb-2">{authorRole}</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A member of the AV Academic Solutions consulting team, working with institutions across India on curriculum architecture, policy alignment, and academic governance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-slate-900 text-white rounded-xl p-8 text-center">
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Discuss This With Our Team
          </h3>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Every engagement begins with a free discovery call. Let us understand your institutional context before proposing any solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C59D3B] text-white px-7 py-3 rounded-md hover:bg-[#B48C2E] transition text-sm font-medium"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-lg font-semibold mb-6 text-slate-700">More from Our Desk</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map(([s, a]) => (
                <Link
                  key={s}
                  href={`/blog/${s}`}
                  className="block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#C59D3B]/30 hover:shadow-md transition card-lift"
                >
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium mb-3 inline-block ${tagColors[a.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {a.tag}
                  </span>
                  <h4 className="font-semibold text-sm leading-snug text-slate-800 mb-2" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}>
                    {a.title}
                  </h4>
                  <span className="text-[#C59D3B] text-xs">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
