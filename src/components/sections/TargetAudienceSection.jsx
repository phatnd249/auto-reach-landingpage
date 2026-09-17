import logoAutoReach from '../../assets/images/logo-autoreach.png'
import SectionBackdrop from '../ui/SectionBackdrop'

export default function TargetAudienceSection() {
  const targets = [
    {
      id: 1,
      title: 'DOANH NGHIỆP',
      subtitle: 'SMES',
      pos: 'top-left',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: 'ĐỘI NGŨ',
      subtitle: 'MARKETING',
      pos: 'top-right',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: 'NHÀ BÁN HÀNG',
      subtitle: 'ONLINE',
      pos: 'bottom-left',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      title: 'NHÀ SÁNG TẠO',
      subtitle: 'NỘI DUNG',
      pos: 'bottom-right',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section id="audience" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-sky-700 text-xs font-black uppercase tracking-wider">
              ĐỐI TƯỢNG PHÙ HỢP
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
              AUTOREACH<br />DÀNH CHO AI?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Một giải pháp linh hoạt dành cho cá nhân và doanh nghiệp muốn tối ưu quy trình sản xuất nội dung.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {[
                'Không cần đội ngũ quá lớn',
                'Không yêu cầu kỹ thuật phức tạp',
                'Dễ dàng mở rộng theo nhu cầu',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-semibold text-base sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#features"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white font-extrabold text-base uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>TÌM HIỂU THÊM</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Navy Showcase Panel with 4 Orbiting Cards */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-5 min-[400px]:p-6 sm:p-10 bg-gradient-to-br from-blue-900 via-navy-900 to-blue-950 border border-blue-800/50 shadow-2xl shadow-blue-950/40 overflow-hidden">
              {/* Subtle background glow inside panel */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl" />
              </div>

              {/* 4 Cards Grid with Center Node */}
              <div className="relative grid grid-cols-2 gap-4 min-[400px]:gap-6 sm:gap-12 items-center justify-items-center mb-8">
                {/* Connector Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Card 1: Top Left */}
                <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/90 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center z-10 group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50/30">
                  <div className="mb-3 transform group-hover:scale-105 transition-transform">
                    {targets[0].icon}
                  </div>
                  <div className="text-sm sm:text-base font-black text-navy-900 leading-tight">
                    {targets[0].title}
                  </div>
                  <div className="text-xs font-bold text-sky-600 mt-0.5">
                    {targets[0].subtitle}
                  </div>
                </div>

                {/* Card 2: Top Right */}
                <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/90 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center z-10 group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50/30">
                  <div className="mb-3 transform group-hover:scale-105 transition-transform">
                    {targets[1].icon}
                  </div>
                  <div className="text-sm sm:text-base font-black text-navy-900 leading-tight">
                    {targets[1].title}
                  </div>
                  <div className="text-xs font-bold text-sky-600 mt-0.5">
                    {targets[1].subtitle}
                  </div>
                </div>

                {/* Card 3: Bottom Left */}
                <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/90 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center z-10 group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-purple-50/30">
                  <div className="mb-3 transform group-hover:scale-105 transition-transform">
                    {targets[2].icon}
                  </div>
                  <div className="text-sm sm:text-base font-black text-navy-900 leading-tight">
                    {targets[2].title}
                  </div>
                  <div className="text-xs font-bold text-purple-600 mt-0.5">
                    {targets[2].subtitle}
                  </div>
                </div>

                {/* Card 4: Bottom Right */}
                <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/90 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center z-10 group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-purple-50/30">
                  <div className="mb-3 transform group-hover:scale-105 transition-transform">
                    {targets[3].icon}
                  </div>
                  <div className="text-sm sm:text-base font-black text-navy-900 leading-tight">
                    {targets[3].title}
                  </div>
                  <div className="text-xs font-bold text-purple-600 mt-0.5">
                    {targets[3].subtitle}
                  </div>
                </div>

                {/* Central Glowing Orb Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-24 h-24 min-[400px]:w-28 min-[400px]:h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl border-4 border-cyan-400/80 flex flex-col items-center justify-center p-2 text-center">
                    <img
                      src={logoAutoReach}
                      alt="AutoReach"
                      className="w-12 h-12 min-[400px]:w-14 min-[400px]:h-14 sm:w-16 sm:h-16 object-contain"
                    />
                    <span className="text-xs font-black text-navy-900 mt-0.5 tracking-tight">
                      AutoReach
                    </span>
                  </div>
                  {/* Glowing Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-25" />
                </div>
              </div>

              {/* Bottom Slogan inside Panel */}
              <div className="relative text-center z-10 pt-2 border-t border-white/10">
                <p className="text-sm sm:text-base lg:text-lg font-black text-white tracking-widest uppercase">
                  MỘT HỆ THỐNG – NHIỀU NHU CẦU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
