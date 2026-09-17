export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 85% 45%, #1d4ed8 0%, #0d2b7a 30%, #051347 55%, #020a26 85%)',
      }}
    >
      {/* Background Lighting & Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Giant glowing ring / curved arc behind the right visual */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-[700px] h-[700px] lg:w-[850px] lg:h-[850px] rounded-full opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 55%, rgba(0, 194, 255, 0.4) 62%, rgba(59, 130, 246, 0.6) 70%, transparent 80%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Deep electric blue and violet atmospheric glows */}
        <div
          className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full opacity-45 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-35 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0284c7 0%, transparent 70%)' }}
        />

        {/* Bottom smooth glowing wave / sweep line */}
        <div
          className="absolute -bottom-24 -right-10 w-[80%] h-48 rounded-[100%] opacity-35 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.7) 0%, rgba(99, 102, 241, 0.4) 40%, transparent 75%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Dot Matrix Grid in bottom-left */}
        <div className="absolute bottom-8 left-8 w-40 h-40 opacity-25 grid grid-cols-6 gap-3 pointer-events-none">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column — Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start animate-slide-in-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0c2e64]/90 border border-cyan-400/40 text-[#00d2ff] text-sm sm:text-base font-bold tracking-wider mb-6 shadow-md">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
              <span>TỰ ĐỘNG HÓA &bull; AI POWERED &bull; ĐA KÊNH</span>
            </div>

            {/* Heading — Vibrant Cyan matching design */}
            <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-black text-[#00c2ff] leading-[1.18] tracking-tight mb-6 uppercase">
              TỰ ĐỘNG HÓA NỘI DUNG –
              <br />
              MỞ RỘNG KHẢ NĂNG TIẾP CẬN
            </h1>

            {/* Description — Crisp white text */}
            <div className="text-white text-lg sm:text-xl leading-relaxed mb-9 max-w-xl space-y-1 font-normal">
              <p>
                AutoReach giúp bạn tạo và phân phối nội dung số tự động,
              </p>
              <p>
                nhanh chóng, hiệu quả trên nhiều nền tảng.
              </p>
              <p className="text-white/90 font-medium">
                Tập trung vào chiến lược – Để công nghệ lo phần còn lại.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              {/* Primary CTA: Solid Cyan */}
              <a
                href="#features"
                className="group inline-flex items-center gap-3 px-8 sm:px-9 py-4 sm:py-4.5 bg-[#00c2ff] hover:bg-[#00b2eb] text-white font-black text-base sm:text-lg uppercase tracking-wider rounded-2xl shadow-lg shadow-cyan-500/35 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>TRẢI NGHIỆM NGAY</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Secondary CTA: Dark with white border & play icon */}
              <a
                href="#demo"
                className="group inline-flex items-center gap-3.5 px-8 sm:px-9 py-4 sm:py-4.5 bg-[#081b42]/80 hover:bg-white/10 border-2 border-white/80 hover:border-white text-white font-bold text-base sm:text-lg uppercase tracking-wider rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>XEM VIDEO</span>
                <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Bottom 3 Features Inline Strip with Dividers */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 text-white text-sm sm:text-base font-semibold pt-2">
              {/* 1. Tiết kiệm thời gian */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00c2ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
                <span>Tiết kiệm thời gian</span>
              </div>

              <span className="text-white/30 font-light">|</span>

              {/* 2. Đa kênh mạnh mẽ */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00c2ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
                <span>Đa kênh mạnh mẽ</span>
              </div>

              <span className="text-white/30 font-light">|</span>

              {/* 3. Dễ dàng sử dụng */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00c2ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Dễ dàng sử dụng</span>
              </div>
            </div>
          </div>

          {/* Right Column — Visual Illustration Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-full max-w-[540px]">
              {/* Vibrant glowing aura directly hugging the card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/30 via-blue-600/30 to-indigo-600/30 rounded-[36px] blur-xl" />

              {/* Landscape Illustration Card */}
              <div className="relative w-full aspect-[4/3] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-gradient-to-b from-[#bfe0f8] via-[#dbedfd] to-[#ebf5fe] shadow-2xl shadow-blue-950/60 border border-white/40 flex items-end justify-center">
                {/* Sky and clouds */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Cloud 1 */}
                  <div className="absolute top-[18%] left-[16%] w-24 h-12 bg-white/90 rounded-full blur-[1px]" />
                  <div className="absolute top-[14%] left-[22%] w-16 h-10 bg-white rounded-full" />
                  
                  {/* Cloud 2 (Center-Right) */}
                  <div className="absolute top-[10%] right-[22%] w-32 h-14 bg-white/95 rounded-full blur-[1px]" />
                  <div className="absolute top-[6%] right-[26%] w-20 h-12 bg-white rounded-full" />
                </div>

                {/* Rolling Green Hills SVG */}
                <svg
                  className="w-full h-[45%] relative z-10"
                  viewBox="0 0 500 160"
                  preserveAspectRatio="none"
                >
                  {/* Background Hill: Olive Light Green */}
                  <path
                    d="M0 160 L0 75 Q130 15 260 70 Q380 120 500 45 L500 160 Z"
                    fill="#9ec134"
                    opacity="0.95"
                  />
                  {/* Foreground Hill: Fresh Lime/Olive Green */}
                  <path
                    d="M0 160 L0 105 Q120 50 250 85 Q390 120 500 75 L500 160 Z"
                    fill="#84a923"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
