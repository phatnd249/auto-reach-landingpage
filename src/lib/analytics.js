/**
 * Google Analytics 4 integration
 * Cấu hình GA_MEASUREMENT_ID trong .env.local
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function initGA() {
  if (!GA_ID) return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_ID)
}

export function trackEvent(eventName, params = {}) {
  if (!GA_ID || !window.gtag) return
  window.gtag('event', eventName, params)
}
