import { useEffect } from 'react'

import usePrefersReducedMotion from './usePrefersReducedMotion'

const VALUES = ['0em', '0.0015em', '-0.001em', '0.002em', '-0.0005em']

export default function useKerningLive() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    if (reducedMotion) {
      root.style.setProperty('--kern', '0em')
      return
    }

    let cancelled = false
    let t = null

    const schedule = () => {
      if (cancelled) return
      const next = VALUES[Math.floor(Math.random() * VALUES.length)] || '0em'
      root.style.setProperty('--kern', next)
      t = window.setTimeout(schedule, 4200 + Math.random() * 3600)
    }

    schedule()
    return () => {
      cancelled = true
      if (t) window.clearTimeout(t)
      root.style.setProperty('--kern', '0em')
    }
  }, [reducedMotion])
}

