import multiChannelIcon from '../../assets/icons/icon-multichannel.png';
import SectionBackdrop from '../ui/SectionBackdrop';

export default function FeaturesSection() {
  const features = [
    {
      title: 'TẠO NỘI DUNG BẰNG AI',
      desc: 'Hỗ trợ viết bài, lên ý tưởng hình ảnh và kịch bản video theo yêu cầu.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#dff1fd] flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-22 h-22 sm:w-26 sm:h-26" viewBox="0 0 100 100" fill="none">
            {/* Top Antenna */}
            <circle cx="50" cy="14" r="4.5" fill="#0284c7" />
            <line x1="50" y1="18" x2="50" y2="26" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />

            {/* Side Ear Pods */}
            <rect x="14" y="38" width="8" height="22" rx="4" fill="#0369a1" />
            <rect x="78" y="38" width="8" height="22" rx="4" fill="#0369a1" />

            {/* Robot Head Body */}
            <rect x="20" y="26" width="60" height="46" rx="18" fill="url(#ai-head-grad)" />

            {/* Eyes */}
            <circle cx="37" cy="46" r="6" fill="white" />
            <circle cx="63" cy="46" r="6" fill="white" />
            <circle cx="37" cy="46" r="2.5" fill="#0369a1" />
            <circle cx="63" cy="46" r="2.5" fill="#0369a1" />

            {/* Smiling Mouth */}
            <path d="M44 55 Q50 60 56 55" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none" />

            {/* "AI" Oval Badge at Bottom Chin */}
            <rect x="34" y="65" width="32" height="19" rx="9.5" fill="#0066cc" stroke="#dff1fd" strokeWidth="1.5" />
            <text x="50" y="79" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" fontFamily="sans-serif">
              AI
            </text>

            <defs>
              <linearGradient id="ai-head-grad" x1="20" y1="26" x2="80" y2="72" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="0.5" stopColor="#0284c7" />
                <stop offset="1" stopColor="#0369a1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      title: 'TỰ ĐỘNG HÓA VỚI N8N',
      desc: 'Kết nối quy trình và tự động thực hiện các tác vụ lặp lại.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#fdebf0] flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-22 h-22 sm:w-26 sm:h-26" viewBox="0 0 100 100" fill="none">
            {/* Connecting lines between nodes */}
            <line x1="26" y1="50" x2="50" y2="50" stroke="#f43f5e" strokeWidth="5.5" strokeLinecap="round" />
            <path
              d="M50 50 C60 50, 64 34, 76 34"
              stroke="#f43f5e"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M50 50 C60 50, 64 66, 76 66"
              stroke="#f43f5e"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Left Node */}
            <circle cx="26" cy="50" r="11" fill="white" stroke="#f43f5e" strokeWidth="5.5" />

            {/* Center Node */}
            <circle cx="50" cy="50" r="10" fill="white" stroke="#f43f5e" strokeWidth="5.5" />

            {/* Top Right Node */}
            <circle cx="76" cy="34" r="10" fill="white" stroke="#f43f5e" strokeWidth="5.5" />

            {/* Bottom Right Node */}
            <circle cx="76" cy="66" r="10" fill="white" stroke="#f43f5e" strokeWidth="5.5" />
          </svg>
        </div>
      ),
    },
    {
      title: 'PHÂN PHỐI ĐA KÊNH',
      desc: 'Đưa nội dung lên Facebook, TikTok, YouTube, Website & nhiều kênh khác.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#eef2ff] flex items-center justify-center flex-shrink-0 shadow-sm p-1">
          <img
            src={multiChannelIcon}
            alt="Phân phối đa kênh"
            className="w-[92%] h-[92%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ),
    },
    {
      title: 'LỊCH ĐĂNG THÔNG MINH',
      desc: 'Chủ động thiết lập thời gian và duy trì tần suất xuất bản ổn định.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#dff1fd] flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-22 h-22 sm:w-26 sm:h-26" viewBox="0 0 100 100" fill="none">
            {/* Calendar Main Body */}
            <rect x="18" y="24" width="56" height="54" rx="14" fill="#0284c7" />

            {/* Top Binder Hooks */}
            <rect x="30" y="17" width="5.5" height="12" rx="2.5" fill="#0369a1" />
            <rect x="56" y="17" width="5.5" height="12" rx="2.5" fill="#0369a1" />

            {/* Grid of Dots (2 rows of 3 white circular dots) */}
            <circle cx="31" cy="42" r="3.5" fill="white" />
            <circle cx="46" cy="42" r="3.5" fill="white" />
            <circle cx="61" cy="42" r="3.5" fill="white" />
            <circle cx="31" cy="56" r="3.5" fill="white" />
            <circle cx="46" cy="56" r="3.5" fill="white" />
            <circle cx="61" cy="56" r="3.5" fill="white" opacity="0.6" />

            {/* Overlapping Blue Clock at Bottom-Right */}
            <circle cx="70" cy="72" r="17" fill="#0070f3" stroke="white" strokeWidth="4" />
            {/* Clock Hands pointing to 12 and 3 */}
            <line x1="70" y1="72" x2="70" y2="61" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="72" x2="78" y2="72" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="70" cy="72" r="2" fill="white" />
          </svg>
        </div>
      ),
    },
    {
      title: 'QUẢN LÝ TẬP TRUNG',
      desc: 'Theo dõi, chỉnh sửa và lưu trữ nội dung trên một giao diện duy nhất.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#fdebf0] flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-22 h-22 sm:w-26 sm:h-26" viewBox="0 0 100 100" fill="none">
            {/* Clipboard Backing Outline */}
            <rect x="22" y="21" width="48" height="58" rx="8" fill="white" stroke="#f43f5e" strokeWidth="3" />
            {/* Top Metallic Clamp */}
            <rect x="36" y="16" width="20" height="9" rx="3.5" fill="#e11d48" />

            {/* 3 Checklist Items */}
            {/* Row 1 */}
            <path d="M30 36 L33.5 39.5 L39 34" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="43" y1="37" x2="60" y2="37" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />

            {/* Row 2 */}
            <path d="M30 47 L33.5 50.5 L39 45" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="43" y1="48" x2="57" y2="48" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />

            {/* Row 3 */}
            <path d="M30 58 L33.5 61.5 L39 56" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="43" y1="59" x2="52" y2="59" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />

            {/* 3 Isometric 3D Cubes stacked at Bottom-Right */}
            <g transform="translate(18, 5)">
              {/* Top Cube */}
              <polygon points="58,52 66,47 74,52 66,57" fill="#fb7185" />
              <polygon points="58,52 66,57 66,66 58,61" fill="#f43f5e" />
              <polygon points="74,52 66,57 66,66 74,61" fill="#e11d48" />

              {/* Bottom Left Cube */}
              <polygon points="49,67 57,62 65,67 57,72" fill="#fb7185" />
              <polygon points="49,67 57,72 57,81 49,76" fill="#f43f5e" />
              <polygon points="65,67 57,72 57,81 65,76" fill="#e11d48" />

              {/* Bottom Right Cube */}
              <polygon points="67,67 75,62 83,67 75,72" fill="#fb7185" />
              <polygon points="67,67 75,72 75,81 67,76" fill="#f43f5e" />
              <polygon points="83,67 75,72 75,81 83,76" fill="#e11d48" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: 'BÁO CÁO VÀ PHÂN TÍCH',
      desc: 'Đo lường hiệu quả và hỗ trợ tối ưu chiến lược nội dung.',
      icon: (
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#f1ebfc] flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-22 h-22 sm:w-26 sm:h-26" viewBox="0 0 100 100" fill="none">
            {/* 4 Growing Bar Charts */}
            <rect x="20" y="58" width="8" height="20" rx="4" fill="#c084fc" />
            <rect x="32" y="47" width="8" height="31" rx="4" fill="#a855f7" />
            <rect x="44" y="37" width="8" height="41" rx="4" fill="#9333ea" />
            <rect x="56" y="27" width="8" height="51" rx="4" fill="#7e22ce" />

            {/* Rising Curved Trend Line with 4 Nodes */}
            <path
              d="M24 54 Q38 43 48 33 T66 21"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="24" cy="54" r="3.5" fill="#6d28d9" stroke="white" strokeWidth="1.8" />
            <circle cx="36" cy="43" r="3.5" fill="#6d28d9" stroke="white" strokeWidth="1.8" />
            <circle cx="48" cy="33" r="3.5" fill="#6d28d9" stroke="white" strokeWidth="1.8" />
            <circle cx="66" cy="21" r="3.5" fill="#6d28d9" stroke="white" strokeWidth="1.8" />

            {/* Overlapping Magnifying Glass inspecting tallest bar */}
            <circle cx="68" cy="65" r="14" fill="none" stroke="#6d28d9" strokeWidth="5" />
            <line x1="78" y1="75" x2="89" y2="86" stroke="#6d28d9" strokeWidth="5.5" strokeLinecap="round" />
            {/* Sparkle reflection inside lens */}
            <circle cx="64" cy="61" r="2.5" fill="#ddd6fe" />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section id="features" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 uppercase tracking-tight mb-4">
            TÍNH NĂNG NỔI BẬT CỦA AUTOREACH
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto italic font-medium">
            Đầy đủ công cụ giúp bạn tạo, quản lý và phân phối nội dung hiệu quả hơn.
          </p>
        </div>

        {/* 6 Features Grid (3x2) with large icons and larger text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-5 sm:gap-6 group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20"
            >
              {/* Large Illustrated Icon */}
              <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content Right */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-navy-900 mb-2 tracking-tight uppercase leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[0.92rem] text-slate-600 leading-relaxed mb-4 font-normal">
                    {feature.desc}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dcf2fe] text-[#0284c7] text-xs sm:text-sm font-bold border border-sky-100 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shadow-xs">
                    <span>Khám phá</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Pill */}
        <div className="relative rounded-full p-1.5 sm:p-2 bg-gradient-to-r from-sky-400 via-blue-600 to-purple-600 shadow-xl shadow-blue-500/20 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-2.5 sm:py-2">
            {/* Left Info with Rocket Icon */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                <svg className="w-6 h-6 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.34 6.56 14.16 7.11 14.7L9.3 16.9C9.84 17.44 10.66 17.63 11.36 17.35C13.47 16.5 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.15 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46Z" />
                </svg>
              </div>

              <div className="hidden sm:block w-px h-9 bg-white/30" />

              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-black text-white uppercase tracking-wider">
                  MỘT NỀN TẢNG - ĐẦY ĐỦ CÔNG CỤ
                </h4>
                <p className="text-xs sm:text-sm text-white/85">
                  Tối giản quy trình, nâng cao hiệu suất.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <a
              href="#solution"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-purple-700 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-slate-50 transition-all duration-300 hover:scale-105 group flex-shrink-0"
            >
              <span>KHÁM PHÁ AUTOREACH</span>
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
