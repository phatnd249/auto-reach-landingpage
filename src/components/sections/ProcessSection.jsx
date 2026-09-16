import multiChannelIcon from '../../assets/icons/icon-multichannel.png';
import SectionBackdrop from '../ui/SectionBackdrop';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      numBg: 'bg-gradient-to-br from-cyan-400 to-sky-500',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="w-14 h-16 rounded-xl border-2 border-sky-400 bg-sky-50/50 p-2 flex flex-col justify-center gap-1.5 shadow-sm">
            <div className="h-1.5 w-7 bg-sky-400 rounded-full" />
            <div className="h-1.5 w-9 bg-sky-300 rounded-full" />
            <div className="h-1.5 w-6 bg-sky-300 rounded-full" />
          </div>
          {/* Mouse pointer */}
          <div className="absolute -bottom-1 -right-1 text-sky-600 filter drop-shadow">
            <svg className="w-6 h-6 fill-sky-500 stroke-white stroke-2" viewBox="0 0 24 24">
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
          </div>
        </div>
      ),
      title: 'NHẬP YÊU CẦU',
      desc: 'Cung cấp chủ đề, mục tiêu, sản phẩm và nền tảng muốn đăng.',
      tag: 'Đầu vào',
      tagIcon: (
        <svg className="w-3.5 h-3.5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      ),
      tagClass: 'bg-sky-100 text-sky-700 border-sky-200/60',
    },
    {
      number: '02',
      numBg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-purple-300/80 flex items-center justify-center shadow-inner">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-fill-transparent text-transparent">
              AI
            </span>
          </div>
          <span className="absolute -top-1 -right-1 text-purple-500">
            <svg className="w-6 h-6 fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </span>
        </div>
      ),
      title: 'AI TẠO NỘI DUNG',
      desc: 'Hệ thống xây dựng bài viết, hình ảnh và ý tưởng video phù hợp.',
      tag: 'Xử lý bằng AI',
      tagIcon: (
        <svg className="w-3.5 h-3.5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      ),
      tagClass: 'bg-purple-100 text-purple-700 border-purple-200/60',
    },
    {
      number: '03',
      numBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="w-14 h-16 rounded-xl border-2 border-sky-400 bg-sky-50/50 p-2 flex flex-col justify-center gap-1.5 shadow-sm">
            <div className="h-1.5 w-7 bg-sky-400 rounded-full" />
            <div className="h-1.5 w-9 bg-sky-300 rounded-full" />
            <div className="h-1.5 w-6 bg-sky-300 rounded-full" />
          </div>
          {/* Green checkmark circle */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ),
      title: 'KIỂM DUYỆT',
      desc: 'Xem lại, chỉnh sửa và phê duyệt nội dung trước khi xuất bản.',
      tag: 'Con người kiểm soát',
      tagIcon: (
        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      tagClass: 'bg-emerald-100 text-emerald-700 border-emerald-200/60',
    },
    {
      number: '04',
      numBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center p-0.5">
          <img
            src={multiChannelIcon}
            alt="Phân phối tự động"
            className="w-18 h-18 sm:w-20 sm:h-20 object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ),
      title: 'PHÂN PHỐI TỰ ĐỘNG',
      desc: 'Tự động lên lịch và đăng nội dung lên các kênh đã kết nối.',
      tag: 'Đầu ra đa kênh',
      tagIcon: (
        <svg className="w-3.5 h-3.5 text-fuchsia-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      ),
      tagClass: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200/60',
    },
  ]

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop reverse={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 uppercase tracking-tight mb-4">
            QUY TRÌNH ĐƠN GIẢN – VẬN HÀNH TỰ ĐỘNG
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto italic font-normal">
            Chỉ với 4 bước, nội dung của bạn được tạo, kiểm duyệt và phân phối đồng bộ.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex">
              <div className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-blue-300/80 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative group cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20">
                {/* Number Badge Top Left */}
                <div className={`absolute top-5 left-5 w-9 h-9 rounded-full ${step.numBg} text-white font-extrabold text-xs flex items-center justify-center shadow-md`}>
                  {step.number}
                </div>

                {/* Center Icon */}
                <div className="mt-3 mb-5 transform group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-navy-900 mb-2 tracking-wide uppercase">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                  {step.desc}
                </p>

                {/* Bottom Pill */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold ${step.tagClass}`}>
                  {step.tagIcon}
                  <span>{step.tag}</span>
                </div>
              </div>

              {/* Connecting Chevron (Between cards on desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm text-cyan-500 items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3 Bottom Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-2">
          {/* Item 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                NHANH CHÓNG
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Giảm thao tác thủ công
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                CHỦ ĐỘNG
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Luôn kiểm soát nội dung
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-navy-900 uppercase tracking-wide">
                ĐỒNG BỘ
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Nhất quán trên mọi nền tảng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
