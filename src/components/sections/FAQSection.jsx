import { useState } from 'react'
import SectionBackdrop from '../ui/SectionBackdrop'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0) // Mặc định mở câu 1 như ảnh

  const faqs = [
    {
      num: '01',
      question: 'AutoReach là gì?',
      answer: 'AutoReach là hệ thống hỗ trợ tạo, quản lý và phân phối nội dung số bằng AI kết hợp tự động hóa.',
    },
    {
      num: '02',
      question: 'AutoReach có thể tạo những loại nội dung nào?',
      answer: 'Hệ thống hỗ trợ tạo bài viết mạng xã hội, nội dung blog, kịch bản video ngắn (TikTok/Reels), hình ảnh minh họa và ý tưởng truyền thông đa dạng.',
    },
    {
      num: '03',
      question: 'Hệ thống hỗ trợ những nền tảng nào?',
      answer: 'AutoReach kết nối trực tiếp với Facebook Fanpage, Instagram, TikTok, YouTube, Website và các kênh lưu trữ số thông qua nền tảng tự động hóa N8n.',
    },
    {
      num: '04',
      question: 'Người dùng có thể chỉnh sửa nội dung trước khi đăng không?',
      answer: 'Hoàn toàn có thể. Quy trình luôn đặt con người vào vị trí kiểm soát, cho phép bạn xem lại, biên tập câu chữ, thay đổi hình ảnh trước khi duyệt đăng.',
    },
    {
      num: '05',
      question: 'AutoReach có tự động lên lịch và đăng bài không?',
      answer: 'Có. Bạn có thể chủ động cài đặt lịch đăng theo giờ vàng hoặc tần suất mong muốn, hệ thống sẽ tự động xuất bản đúng hẹn lên các nền tảng.',
    },
    {
      num: '06',
      question: 'AutoReach phù hợp với doanh nghiệp nhỏ không?',
      answer: 'Rất phù hợp. Giải pháp được tối ưu cho các doanh nghiệp SMEs, shop bán hàng online và các đội ngũ tinh gọn muốn tiết kiệm tối đa chi phí sản xuất nội dung.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden">
      <SectionBackdrop reverse={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
              CÂU HỎI<br />THƯỜNG GẶP
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Tìm hiểu nhanh cách AutoReach hoạt động và những gì hệ thống có thể hỗ trợ bạn.
            </p>

            {/* Help Callout Box */}
            <div className="pt-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-900">
                    Bạn vẫn còn thắc mắc?
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Liên hệ đội ngũ AutoReach để được hỗ trợ.
                  </p>
                </div>
              </div>

              {/* Ask Question Outline Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border-2 border-sky-400 text-blue-700 font-extrabold text-sm uppercase tracking-wider hover:bg-sky-50 transition-all duration-300 group shadow-xs"
              >
                <span>GỬI CÂU HỎI</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Accordion Items (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.num}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-sky-50/50 border-sky-200/90 shadow-sm'
                      : 'bg-white border-neutral-200/80 hover:border-blue-300/80 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                        {faq.num}
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg font-extrabold text-navy-900 tracking-tight leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus / Minus toggle icon */}
                    <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 ml-3">
                      {isOpen ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed pl-[3.25rem] sm:pl-16 border-t border-sky-100/60 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Bottom Documentation Link */}
            <div className="pt-4 text-center sm:text-left text-sm text-slate-500 font-medium">
              Không tìm thấy câu trả lời bạn cần?{' '}
              <a href="#features" className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1">
                <span>Xem thêm tài liệu</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
