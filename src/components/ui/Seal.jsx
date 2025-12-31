import React from 'react'

import { cx } from '../../utils/cx'

const STYLES = {
  APROBADO: {
    border: 'border-accent',
    text: 'text-accent',
    fill: 'bg-accentSoft bg-opacity-60',
    rotate: '-rotate-1',
  },
  'EN REVISIÓN': {
    border: 'border-accent2',
    text: 'text-accent2',
    fill: 'bg-transparent',
    rotate: 'rotate-1',
  },
  REVOCADO: {
    border: 'border-danger',
    text: 'text-danger',
    fill: 'bg-accentSoft bg-opacity-70',
    rotate: '-rotate-2',
  },
}

export default function Seal({ children, tone = 'APROBADO', className }) {
  const s = STYLES[tone] || STYLES.APROBADO
  return (
    <div
      className={cx(
        'inline-flex items-center justify-center',
        'px-3 py-2',
        'border-2',
        s.border,
        s.fill,
        s.rotate,
        'select-none',
        className
      )}
    >
      <span
        className={cx(
          't-kicker',
          s.text,
          'tracking-[0.14em] leading-none'
        )}
      >
        {children}
      </span>
    </div>
  )
}

