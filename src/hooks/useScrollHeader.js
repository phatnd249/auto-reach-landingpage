import { useState, useEffect } from 'react'

/**
 * Hook to handle header scroll behavior (show/hide, shadow on scroll)
 * @param {number} threshold - Scroll threshold in pixels (default: 50)
 * @returns {{ isScrolled: boolean, isVisible: boolean }}
 */
export function useScrollHeader(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > threshold)
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < threshold)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, threshold])

  return { isScrolled, isVisible }
}
