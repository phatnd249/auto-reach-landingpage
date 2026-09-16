import SectionBackdrop from '../ui/SectionBackdrop';

const challenges = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'TỐN THỜI GIAN',
    description: 'Phải mất nhiều giờ để lên ý tưởng, viết nội dung và đăng bài.',
    color: 'from-orange-400 to-red-400',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'THIẾU NHÂN LỰC',
    description: 'Đội ngũ mỏng, khó đáp ứng nhu cầu sản xuất nội dung liên tục.',
    color: 'from-blue-400 to-indigo-400',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'NỘI DUNG RỜI RẠC',
    description: 'Không đồng bộ giữa các kênh, thiếu chiến lược tổng thể.',
    color: 'from-purple-400 to-pink-400',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'KHÓ QUẢN LÝ',
    description: 'Theo dõi, kiểm duyệt và đo lường hiệu quả gặp nhiều trở ngại.',
    color: 'from-teal-400 to-cyan-400',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
]

export default function ChallengesSection() {
  return (
    <section id="challenges" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop reverse={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge matching screenshot */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#dcf2fd] text-[#0088cc] text-xs sm:text-sm font-black uppercase tracking-wider mb-5">
            THÁCH THỨC HIỆN TẠI
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-navy-900 mb-4 leading-tight tracking-tight uppercase">
            DOANH NGHIỆP ĐANG{' '}
            <span className="text-[#0070f3]">GẶP VẤN ĐỀ GÌ?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed italic sm:not-italic font-medium">
            Những thách thức phổ biến khiến việc triển khai nội dung số trở nên khó khăn.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md border border-slate-200/80 hover:border-blue-300/80 transition-all duration-300 hover:-translate-y-1 cursor-default flex flex-col items-center text-center hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20"
            >
              {/* Circular Icon */}
              <div className={`w-20 h-20 rounded-full ${challenge.iconBg} ${challenge.iconColor} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {challenge.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-black text-navy-900 mb-3 tracking-wide">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[240px]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Arrow */}
        <div className="relative">
          {/* Callout pill banner */}
          <div className="rounded-full bg-[#e8f5fb] px-6 sm:px-10 py-4 text-center max-w-4xl mx-auto border border-sky-100/80 shadow-xs">
            <p className="text-sm sm:text-base lg:text-lg text-navy-900/90 font-medium leading-relaxed">
              Nếu không có một quy trình thống nhất, doanh nghiệp sẽ{' '}
              <span className="text-navy-900 font-bold">lãng phí thời gian, nguồn lực</span>
              {' '}và{' '}
              <span className="text-navy-900 font-bold">bỏ lỡ cơ hội tiếp cận khách hàng</span>.
            </p>
          </div>

          {/* Inverted Triangle Arrow + Solution text */}
          <div className="flex flex-col items-center mt-6 gap-2">
            {/* Downward triangle indicator */}
            <svg className="w-5 h-5 text-blue-600 fill-current animate-bounce" viewBox="0 0 24 24">
              <path d="M12 18l-8-8h16z" />
            </svg>

            {/* Solution text in blue */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0070f3] text-center tracking-tight">
              AutoReach chính là lời giải
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
