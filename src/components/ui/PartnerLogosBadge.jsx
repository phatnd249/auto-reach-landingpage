import logoLHU from '../../assets/images/logo-lhu.png'
import logoITFaculty from '../../assets/images/logo-it-faculty.png'
import logoVietFuture from '../../assets/images/logo-vietfuture.png'
import logoAutoReach from '../../assets/images/logo-autoreach.png'

export default function PartnerLogosBadge({ className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-6 bg-white px-2.5 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-lg border border-white/90 ${className}`}
    >
      {/* 1. Đại học Lạc Hồng */}
      <img
        src={logoLHU}
        alt="Trường Đại học Lạc Hồng"
        className="h-6 min-[400px]:h-7 sm:h-11 md:h-12 w-auto max-w-[70px] min-[400px]:max-w-[90px] sm:max-w-[160px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 2. Khoa Công nghệ Thông tin */}
      <img
        src={logoITFaculty}
        alt="Khoa Công nghệ Thông tin - LHU"
        className="h-6 min-[400px]:h-7 sm:h-11 md:h-12 w-auto max-w-[80px] min-[400px]:max-w-[100px] sm:max-w-[160px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 3. VietFuture 2026 */}
      <img
        src={logoVietFuture}
        alt="Cuộc thi VietFuture 2026"
        className="h-6 min-[400px]:h-7 sm:h-11 md:h-12 w-auto max-w-[60px] min-[400px]:max-w-[80px] sm:max-w-[135px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 4. AutoReach Letter-A Logo */}
      <img
        src={logoAutoReach}
        alt="AutoReach"
        className="h-6 min-[400px]:h-7 sm:h-11 md:h-12 w-auto object-contain transition-transform hover:scale-105 duration-200"
      />
    </div>
  )
}
