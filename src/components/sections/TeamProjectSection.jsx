export default function TeamProjectSection() {
  const teamMembers = [
    { id: 1, role: 'Leader' },
    { id: 2, role: 'AI Dev' },
    { id: 3, role: 'Fullstack' },
    { id: 4, role: 'Automation' },
    { id: 5, role: 'UI/UX' },
  ]

  return (
    <section id="project-team" className="relative py-20 lg:py-28 bg-gradient-to-b from-sky-50/40 via-white to-sky-50/50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Content matching design screenshot */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Title + 5 Avatars Grid + CTA */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Heading matching exact 2-line break */}
            <h2 className="text-2xl sm:text-[1.7rem] lg:text-[2.05rem] font-black text-navy-900 uppercase tracking-tight leading-[1.2] mb-2">
              <span className="block sm:whitespace-nowrap">AUTOREACH – BIẾN Ý TƯỞNG THÀNH</span>
              <span className="block">NỘI DUNG ĐA NỀN TẢNG</span>
            </h2>
            
            {/* Subheading with underline */}
            <p className="text-sm sm:text-base font-bold text-blue-700 uppercase tracking-wider underline decoration-2 underline-offset-4 mb-8 sm:mb-10">
              ĐƯỢC PHÁT TRIỂN BỞI ĐỘI NGŨ 5 THÀNH VIÊN
            </p>

            {/* 5 Avatars in 2 Rows: 3 on top, 2 centered below */}
            <div className="w-full max-w-[500px] space-y-6 mb-9">
              {/* Row 1: 3 avatars spread out */}
              <div className="flex justify-between">
                {teamMembers.slice(0, 3).map((member) => (
                  <div
                    key={member.id}
                    className="group relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-gradient-to-b from-[#bfe0f8] via-[#dcf0fc] to-[#e8f5fb] flex items-end justify-center flex-shrink-0"
                  >
                    {/* Sky & Fluffy Clouds */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-white/95 rounded-full blur-[0.5px]" />
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 h-4 bg-white rounded-full" />
                    {/* Rolling Green Hills SVG */}
                    <svg className="w-full h-12 relative z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0 50 L0 25 Q30 5 60 20 Q80 30 100 15 L100 50 Z" fill="#9ec134" opacity="0.95" />
                      <path d="M0 50 L0 32 Q35 15 65 26 Q85 34 100 24 L100 50 Z" fill="#84a923" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 avatars centered */}
              <div className="flex justify-center gap-10 sm:gap-16">
                {teamMembers.slice(3, 5).map((member) => (
                  <div
                    key={member.id}
                    className="group relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-gradient-to-b from-[#bfe0f8] via-[#dcf0fc] to-[#e8f5fb] flex items-end justify-center flex-shrink-0"
                  >
                    {/* Sky & Fluffy Clouds */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-white/95 rounded-full blur-[0.5px]" />
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 h-4 bg-white rounded-full" />
                    {/* Rolling Green Hills SVG */}
                    <svg className="w-full h-11 relative z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0 50 L0 25 Q30 5 60 20 Q80 30 100 15 L100 50 Z" fill="#9ec134" opacity="0.95" />
                      <path d="M0 50 L0 32 Q35 15 65 26 Q85 34 100 24 L100 50 Z" fill="#84a923" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Left CTA Button: Centered underneath avatars */}
            <div className="w-full max-w-[500px] flex justify-center pt-2">
              <a
                href="#audience"
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>KHÁM PHÁ HÀNH TRÌNH</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Illustration Mockup + Project Metadata */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Landscape Mockup Box */}
            <div className="w-full aspect-[16/10] rounded-[24px] sm:rounded-[30px] overflow-hidden border border-slate-200/80 shadow-md relative bg-gradient-to-b from-[#bfe0f8] via-[#dbedfd] to-[#ebf5fe] flex items-end justify-center">
              {/* Sky and clouds */}
              <div className="absolute top-6 left-1/4 w-20 h-10 bg-white/90 rounded-full blur-[0.5px]" />
              <div className="absolute top-4 right-1/3 w-16 h-8 bg-white/80 rounded-full blur-[0.5px]" />
              
              {/* Rolling Green Hills SVG */}
              <svg className="w-full h-28 relative z-10" viewBox="0 0 400 120" preserveAspectRatio="none">
                <path d="M0 120 L0 55 Q100 10 200 45 Q300 85 400 30 L400 120 Z" fill="#9ec134" opacity="0.95" />
                <path d="M0 120 L0 75 Q150 35 300 65 L400 55 L400 120 Z" fill="#84a923" />
              </svg>
            </div>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic sm:not-italic">
              AutoReach là hệ thống tự động tạo và phân phối nội dung số, nhằm giúp doanh nghiệp tối ưu thời gian, nguồn lực và quy trình vận hành nội dung.
            </p>

            {/* 3 Project Key Attributes */}
            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80 py-1">
              {/* 1: Lĩnh vực */}
              <div className="py-3.5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-navy-900 uppercase tracking-wide">
                    LĨNH VỰC
                  </div>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Thương mại điện tử & Dịch vụ số
                  </p>
                </div>
              </div>

              {/* 2: Mục tiêu */}
              <div className="py-3.5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-navy-900 uppercase tracking-wide">
                    MỤC TIÊU
                  </div>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Đơn giản hóa quy trình sản xuất nội dung
                  </p>
                </div>
              </div>

              {/* 3: Định hướng */}
              <div className="py-3.5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 2.76 1.4 5.19 3.53 6.61.42.28.67.75.67 1.25V19c0 .55.45 1 1 1h5.6c.55 0 1-.45 1-1v-1.14c0-.5.25-.97.67-1.25C18.6 15.19 20 12.76 20 10c0-4.42-3.58-8-8-8zm-2 19h4v1h-4v-1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-navy-900 uppercase tracking-wide">
                    ĐỊNH HƯỚNG
                  </div>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Ứng dụng AI và tự động hóa vào hoạt động truyền thông
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
