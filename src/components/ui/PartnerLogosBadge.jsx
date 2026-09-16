import logoLHU from '../../assets/images/logo-lhu.png'
import logoITFaculty from '../../assets/images/logo-it-faculty.png'
import logoVietFuture from '../../assets/images/logo-vietfuture.png'
import logoAutoReach from '../../assets/images/logo-autoreach.png'

export default function PartnerLogosBadge({ className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-3.5 sm:gap-6 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-lg border border-white/90 ${className}`}
    >
      {/* 1. Đại học Lạc Hồng */}
      <img
        src={logoLHU}
        alt="Trường Đại học Lạc Hồng"
        className="h-8 sm:h-11 md:h-12 w-auto max-w-[120px] sm:max-w-[160px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 2. Khoa Công nghệ Thông tin */}
      <img
        src={logoITFaculty}
        alt="Khoa Công nghệ Thông tin - LHU"
        className="h-8 sm:h-11 md:h-12 w-auto max-w-[120px] sm:max-w-[160px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 3. VietFuture 2026 */}
      <img
        src={logoVietFuture}
        alt="Cuộc thi VietFuture 2026"
        className="h-8 sm:h-11 md:h-12 w-auto max-w-[100px] sm:max-w-[135px] object-contain transition-transform hover:scale-105 duration-200"
      />

      {/* 4. AutoReach Letter-A Logo */}
      <img
        src={logoAutoReach}
        alt="AutoReach"
        className="h-8 sm:h-11 md:h-12 w-auto object-contain transition-transform hover:scale-105 duration-200"
      />
    </div>
  )
}
