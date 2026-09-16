export default function SectionBackdrop({ 
  showDotsTopLeft = true, 
  showDotsBottomRight = true, 
  showArcTopRight = true, 
  showBottomWave = true,
  reverse = false 
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Ambient Radial Glows */}
      <div 
        className={`absolute -top-24 ${reverse ? '-left-24 bg-purple-200/35' : '-right-24 bg-sky-200/40'} w-96 h-96 rounded-full blur-3xl`} 
      />
      <div 
        className={`absolute -bottom-24 ${reverse ? '-right-24 bg-sky-200/40' : '-left-24 bg-indigo-200/30'} w-96 h-96 rounded-full blur-3xl`} 
      />

      {/* Top Left Dot Matrix */}
      {showDotsTopLeft && (
        <div className={`absolute top-6 ${reverse ? 'right-6' : 'left-6'} opacity-45`}>
          <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
            <defs>
              <pattern id={`dot-grid-tl-${reverse ? 'rev' : 'norm'}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.75" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="120" height="96" fill={`url(#dot-grid-tl-${reverse ? 'rev' : 'norm'})`} />
          </svg>
        </div>
      )}

      {/* Bottom Right Dot Matrix */}
      {showDotsBottomRight && (
        <div className={`absolute bottom-8 ${reverse ? 'left-6' : 'right-6'} opacity-45`}>
          <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
            <defs>
              <pattern id={`dot-grid-br-${reverse ? 'rev' : 'norm'}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.75" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="120" height="96" fill={`url(#dot-grid-br-${reverse ? 'rev' : 'norm'})`} />
          </svg>
        </div>
      )}

      {/* Glowing Curved Light Arc in Corner */}
      {showArcTopRight && (
        <div className={`absolute -top-20 ${reverse ? '-left-20 scale-x-[-1]' : '-right-20'} w-[380px] h-[380px] opacity-70`}>
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id={`arc-grad-${reverse ? 'rev' : 'norm'}`} x1="100" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
              </linearGradient>
              <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Outer main glowing arc */}
            <path
              d="M 50 350 A 250 250 0 0 1 350 50"
              stroke={`url(#arc-grad-${reverse ? 'rev' : 'norm'})`}
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#arc-glow)"
            />
            {/* Subtle inner dashed arc */}
            <path
              d="M 100 350 A 200 200 0 0 1 350 100"
              stroke={`url(#arc-grad-${reverse ? 'rev' : 'norm'})`}
              strokeWidth="1.8"
              strokeDasharray="6 8"
              opacity="0.6"
            />
          </svg>
        </div>
      )}

      {/* Bottom Flowing Ambient Wave */}
      {showBottomWave && (
        <div className="absolute -bottom-1 left-0 right-0 h-28 sm:h-36 overflow-hidden opacity-30">
          <svg viewBox="0 0 1440 160" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`wave-grad-1-${reverse ? 'rev' : 'norm'}`} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.3" />
                <stop offset="80%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id={`wave-grad-2-${reverse ? 'rev' : 'norm'}`} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.4" />
                <stop offset="55%" stopColor="#93c5fd" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C320,130 520,30 840,75 C1160,120 1340,50 1440,70 L1440,160 L0,160 Z"
              fill={`url(#wave-grad-1-${reverse ? 'rev' : 'norm'})`}
            />
            <path
              d="M0,45 C280,10 580,110 920,55 C1200,10 1360,75 1440,55 L1440,160 L0,160 Z"
              fill={`url(#wave-grad-2-${reverse ? 'rev' : 'norm'})`}
              opacity="0.6"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
