import multiChannelIcon from '../../assets/icons/icon-multichannel.png';
import SectionBackdrop from '../ui/SectionBackdrop';

export default function SolutionSection() {
  const steps = [
    {
      id: 1,
      title: 'Ý TƯỞNG / YÊU CẦU',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#dff4fe] flex items-center justify-center shadow-inner">
          <svg className="w-13 h-13 sm:w-15 sm:h-15" viewBox="0 0 64 64" fill="none">
            {/* Radiant glowing rays */}
            <line x1="32" y1="5" x2="32" y2="11" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="14" y1="13" x2="18" y2="17" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="13" x2="46" y2="17" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="6" y1="29" x2="12" y2="29" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="29" x2="52" y2="29" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

            {/* Lightbulb glass */}
            <path
              d="M20 28 C20 21.37 25.37 16 32 16 C38.63 16 44 21.37 44 28 C44 32.8 41.2 36.8 37.5 39.2 V43 H26.5 V39.2 C22.8 36.8 20 32.8 20 28 Z"
              fill="#ffb703"
            />
            {/* Lightbulb reflection */}
            <path
              d="M24 25 C24 20.5 27.5 18 32 18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Screw base */}
            <rect x="27" y="44" width="10" height="3" rx="1.5" fill="#0284c7" />
            <rect x="28.5" y="48.5" width="7" height="3" rx="1.5" fill="#0369a1" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: 'AI TẠO NỘI DUNG',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-[2.5px] border-indigo-400 flex items-center justify-center shadow-sm">
          <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-wider font-sans">
            AI
          </span>
          <span className="absolute -top-2 -right-2 text-fuchsia-500 filter drop-shadow">
            <svg className="w-6 h-6 fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </span>
        </div>
      ),
    },
    {
      id: 3,
      title: 'TỰ ĐỘNG HÓA',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ffeef2] flex items-center justify-center shadow-inner">
          <svg className="w-13 h-13 sm:w-15 sm:h-15" viewBox="0 0 100 100" fill="none">
            <line x1="28" y1="50" x2="50" y2="50" stroke="#f43f5e" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M50 50 C60 50, 64 34, 76 34" stroke="#f43f5e" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M50 50 C60 50, 64 66, 76 66" stroke="#f43f5e" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="50" r="10" fill="white" stroke="#f43f5e" strokeWidth="5.5" />
            <circle cx="50" cy="50" r="9" fill="white" stroke="#f43f5e" strokeWidth="5.5" />
            <circle cx="76" cy="34" r="9" fill="white" stroke="#f43f5e" strokeWidth="5.5" />
            <circle cx="76" cy="66" r="9" fill="white" stroke="#f43f5e" strokeWidth="5.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      title: 'PHÂN PHỐI ĐA KÊNH',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center p-0.5">
          <img
            src={multiChannelIcon}
            alt="Phân phối đa kênh"
            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ),
    },
  ]

  return (
    <section id="solution" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="text-center mb-14">
          <h3 className="text-lg sm:text-xl font-extrabold text-blue-600 uppercase tracking-wider mb-2">
            GIẢI PHÁP TOÀN DIỆN
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 tracking-tight">
            AUTOREACH – MỘT HỆ THỐNG, TOÀN BỘ QUY TRÌNH
          </h2>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column (5 cols on LG, 4 cols on XL) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-7">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Kết hợp sức mạnh của <strong className="text-blue-600 font-bold">AI</strong> và nền tảng tự động hóa <strong className="text-rose-600 font-bold">N8n</strong>, AutoReach giúp bạn xử lý toàn bộ quy trình nội dung trên một hệ thống.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                'Rút ngắn thời gian sản xuất',
                'Đồng bộ nội dung đa nền tảng',
                'Quản lý tập trung, dễ dàng kiểm soát',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#00c2ff] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-bold text-base sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#features"
                className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-[#00d2ff] via-[#0099ff] to-[#6930c3] hover:from-[#00c2ee] hover:to-[#5e22ba] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>TÌM HIỂU GIẢI PHÁP</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols on LG, 8 cols on XL) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* 4 Process Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 relative items-stretch">
              {steps.map((step, idx) => (
                <div key={step.id} className="relative flex items-stretch">
                  <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:py-8 lg:px-4 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.12)] hover:border-sky-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between text-center group cursor-default min-h-[220px] sm:min-h-[250px]">
                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-800 tracking-tight leading-snug uppercase">
                      {step.title}
                    </h4>
                  </div>

                  {/* Connector Arrow for non-last items */}
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:flex absolute -right-3.5 sm:-right-4.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white items-center justify-center pointer-events-none shadow-md shadow-sky-400/30 border-2 border-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom 3 Stats Banner */}
            <div className="bg-[#f0f7fe] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-sky-100/90 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-blue-200/60">
                {/* Item 1 */}
                <div className="flex items-center gap-3.5 sm:px-2 pt-2 sm:pt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                      NHANH HƠN
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Tiết kiệm đến 70% thời gian sản xuất
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                      ĐỒNG BỘ HƠN
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Nội dung nhất quán trên mọi kênh
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                      HIỆU QUẢ HƠN
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Tiếp cận đúng người, tăng trưởng bền vững
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
