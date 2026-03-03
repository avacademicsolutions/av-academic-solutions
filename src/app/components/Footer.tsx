import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-[#C59D3B] flex items-center justify-center text-white font-bold text-xs">AV</div>
            <span className="text-white font-semibold text-base">AV Academic Solutions</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Strategic academic architecture for schools, universities, government institutions, and education ventures across India.
          </p>
          {/* Direct email */}
          <a
            href="mailto:info@avacademicsolutions.com"
            className="inline-block mt-4 text-xs text-[#C59D3B] hover:text-white transition"
          >
            info@avacademicsolutions.com
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-5 text-sm tracking-widest uppercase">Services</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Curriculum Architecture</li>
            <li>Academic Policy Structuring</li>
            <li>Assessment Framework Design</li>
            <li>Moral & Value Education</li>
            <li>21st Century Skills</li>
            <li><Link href="/services" className="hover:text-[#C59D3B] transition">View All Services →</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-5 text-sm tracking-widest uppercase">Company</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/services" className="hover:text-[#C59D3B] transition">All Services</Link></li>
            <li><Link href="/about" className="hover:text-[#C59D3B] transition">About & Team</Link></li>
            <li><Link href="/blog" className="hover:text-[#C59D3B] transition">Insights Blog</Link></li>
            <li><Link href="/faq" className="hover:text-[#C59D3B] transition">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[#C59D3B] transition">Contact</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-white font-medium mb-5 text-sm tracking-widest uppercase">Engage With Us</h4>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            For academic collaborations, consulting engagements, and institutional structuring discussions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C59D3B] text-white px-5 py-2.5 rounded-md text-sm hover:bg-[#B48C2E] transition"
          >
            Schedule Consultation →
          </Link>
          <div className="mt-5">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-green-400 hover:text-green-300 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} AV Academic Solutions & Consulting. All rights reserved.</span>
        <span>NEP 2020 &middot; NCF Aligned &middot; India</span>
      </div>
    </footer>
  );
}
