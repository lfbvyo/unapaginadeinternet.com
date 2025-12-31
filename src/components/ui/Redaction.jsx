import React, { useMemo, useState } from 'react'

import { cx } from '../../utils/cx'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export default function Redaction({
  children,
  hint = 'Redacción aplicada',
  className,
}) {
  const [reveal, setReveal] = useState(false)

  const maskWidthPct = useMemo(() => {
    // Never fully reveal; keep some ink under the bar.
    return reveal ? 62 : 100
  }, [reveal])

  return (
    <span
      className={cx(
        'relative inline-block align-baseline',
        'cursor-default select-none',
        className
      )}
    >
      <span className={cx('relative z-0', reveal ? 'opacity-70' : 'opacity-15')}>
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cx(
          'absolute left-0 top-[0.62em] z-10',
          'h-[0.8em] w-full',
          'bg-accent2 bg-opacity-90',
          'shadow-inkpress'
        )}
        style={{
          transform: `translateX(${reveal ? '12%' : '0%'})`,
          width: `${clamp(maskWidthPct, 55, 100)}%`,
          transition: 'transform 220ms ease, width 220ms ease, opacity 220ms ease',
          opacity: reveal ? 0.85 : 1,
        }}
      />
      <button
        type="button"
        className="absolute inset-0 z-20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        aria-label={hint}
        onClick={() => setReveal(v => !v)}
      />
    </span>
  )
}

