import SectionBackdrop from '../ui/SectionBackdrop';

export default function ValueSection() {
  const values = [
    {
      title: 'TIẾT KIỆM THỜI GIAN',
      desc: 'Giảm các thao tác lặp lại trong quá trình tạo và đăng nội dung.',
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-sky-50/80 border-2 border-sky-100 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-sky-100/50 flex items-center justify-center">
              <svg className="w-10 h-10 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'ĐỒNG BỘ ĐA KÊNH',
      desc: 'Quản lý nội dung trên nhiều nền tảng bằng một quy trình thống nhất.',
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Main browser card */}
          <div className="w-20 h-14 rounded-xl bg-blue-500 border-2 border-blue-400/60 p-1.5 shadow-md flex flex-col justify-between">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            <div className="w-6 h-1 bg-white/50 rounded-full mx-auto" />
          </div>

          {/* Floating satellites */}
          <div className="absolute top-1 left-3 w-8 h-8 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="absolute -top-1 right-10 w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
            <div className="w-4 h-4 border-2 border-white rounded-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
          <div className="absolute top-4 -right-1 w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: 'TỐI ƯU NGUỒN LỰC',
      desc: 'Giúp đội ngũ tập trung nhiều hơn vào ý tưởng và chiến lược.',
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* People icons in gradient lavender */}
          <div className="relative flex items-end justify-center">
            {/* Left person */}
            <div className="w-7 h-11 rounded-t-full bg-purple-400 opacity-80 -mr-2" />
            {/* Center person */}
            <div className="w-9 h-14 rounded-t-full bg-purple-600 z-10 flex flex-col items-center pt-1" />
            {/* Right person */}
            <div className="w-7 h-11 rounded-t-full bg-purple-400 opacity-80 -ml-2" />
          </div>

          {/* Floating Checkmark Badge */}
          <div className="absolute top-1 right-4 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center shadow-md border-2 border-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="values" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 uppercase tracking-tight mb-4">
            AUTOREACH - GIÁ TRỊ MANG LẠI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto italic font-normal">
            Tối giản quy trình, tiết kiệm nguồn lực và duy trì nội dung hiệu quả trên nhiều nền tảng.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-blue-300/80 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20"
            >
              {/* Top Icon */}
              <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-navy-900 mb-3 tracking-wide uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Giant CTA Button */}
        <div className="text-center">
          <a
            href="#solution"
            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>KHÁM PHÁ AUTOREACH</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
