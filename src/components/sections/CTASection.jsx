import PartnerLogosBadge from '../ui/PartnerLogosBadge'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-20 lg:py-28 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #091a3e 0%, #0d2857 40%, #153975 70%, #1e458e 100%)',
      }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Logos Badge Bar */}
        <div className="mb-10">
          <PartnerLogosBadge className="shadow-2xl" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase mb-5 leading-tight">
          SẴN SÀNG TỰ ĐỘNG HÓA<br />NỘI DUNG?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Trải nghiệm AutoReach để biến một ý tưởng thành nội dung đa nền tảng nhanh chóng, đồng bộ và dễ kiểm soát
        </p>

        {/* 2 CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12">
          {/* Primary Button */}
          <a
            href="#features"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full bg-white text-blue-700 hover:bg-slate-100 font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>TRẢI NGHIỆM NGAY</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Outline Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full border-2 border-white/80 hover:border-white text-white font-black text-sm sm:text-base uppercase tracking-wider hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>LIÊN HỆ TƯ VẤN</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* 3 Trust Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-white/15 text-sm sm:text-base font-bold text-white/95">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-sky-400 text-navy-950 flex items-center justify-center shadow-xs flex-shrink-0">
              <svg className="w-4 h-4 stroke-navy-950 stroke-3" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Dễ dàng sử dụng</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-sky-400 text-navy-950 flex items-center justify-center shadow-xs flex-shrink-0">
              <svg className="w-4 h-4 stroke-navy-950 stroke-3" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Chủ động kiểm duyệt</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-sky-400 text-navy-950 flex items-center justify-center shadow-xs flex-shrink-0">
              <svg className="w-4 h-4 stroke-navy-950 stroke-3" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Phù hợp với đội ngũ nhỏ</span>
          </div>
        </div>
      </div>
    </section>
  )
}
