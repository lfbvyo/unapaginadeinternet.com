import { useEffect } from 'react'

import usePrefersReducedMotion from './usePrefersReducedMotion'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export default function useParallaxAuthority() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const root = document.documentElement

    if (reducedMotion) {
      root.style.setProperty('--parallax-x', '0px')
      root.style.setProperty('--parallax-y', '0px')
      return
    }

    let raf = 0
    let targetX = 0
    let targetY = 0

    const apply = () => {
      raf = 0
      root.style.setProperty('--parallax-x', `${targetX.toFixed(2)}px`)
      root.style.setProperty('--parallax-y', `${targetY.toFixed(2)}px`)
    }

    const onMove = e => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2

      targetX = clamp(nx * 2.2, -3, 3)
      targetY = clamp(ny * 2.2, -3, 3)

      if (!raf) raf = window.requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) window.cancelAnimationFrame(raf)
      root.style.setProperty('--parallax-x', '0px')
      root.style.setProperty('--parallax-y', '0px')
    }
  }, [reducedMotion])
}

