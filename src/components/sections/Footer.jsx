export default function Footer() {
  return (
    <footer id="contact" className="bg-[#030a16] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/15">
          {/* Col 1: LIÊN KẾT NHANH (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-sky-400 uppercase tracking-wider">
              LIÊN KẾT NHANH
            </h4>
            <ul className="space-y-3.5 text-base sm:text-lg text-white/90 font-medium">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors inline-block">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors inline-block">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-400 transition-colors inline-block">
                  Quy trình
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors inline-block">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: LIÊN HỆ (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-sky-400 uppercase tracking-wider">
              LIÊN HỆ
            </h4>
            <ul className="space-y-4 text-base sm:text-lg text-white/90 font-medium">
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Email: contact@autoreach.vn</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>Điện thoại: (0251) 3952 778</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Đồng Nai, Việt Nam</span>
              </li>
            </ul>
          </div>

          {/* Col 3: THEO DÕI CHÚNG TÔI (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-sky-400 uppercase tracking-wider">
              THEO DÕI CHÚNG TÔI
            </h4>
            <div className="flex items-center gap-4 pt-1">
              {/* Official Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-13 h-13 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 flex-shrink-0"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Official TikTok SVG */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-13 h-13 rounded-full bg-black border-2 border-white/30 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:border-white transition-all duration-300 flex-shrink-0"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-white/70">
          <p>&copy; 2026 AutoReach. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <span className="text-white/30">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
