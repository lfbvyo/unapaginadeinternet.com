import React, { useMemo, useState } from 'react'

import { moduleMeta, tariffs } from '../../content/content'
import { cx } from '../../utils/cx'
import Decimal from './Decimal'

export default function PricedTerm({ term, tariffConcept, className }) {
  const tooltipId = useMemo(() => {
    return `tip-${Math.random().toString(36).slice(2)}`
  }, [])
  const [open, setOpen] = useState(false)

  const tariff = useMemo(() => {
    return tariffs.find(t => t.concept === tariffConcept)
  }, [tariffConcept])

  const label = moduleMeta.tables.tariffs.headers[1] || 'Tarifa'

  return (
    <span className={cx('relative inline-block', className)}>
      <button
        type="button"
        className={cx(
          'inline-flex items-baseline gap-1',
          'border-b border-accent border-opacity-40',
          'text-ink',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper2'
        )}
        aria-expanded={open}
        aria-controls={tooltipId}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(v => !v)}
        onKeyDown={e => {
          if (e.key === 'Escape') setOpen(false)
        }}
      >
        <span className="t-body nums-prose">{term}</span>
      </button>

      {open && tariff ? (
        <span
          id={tooltipId}
          role="note"
          className={cx(
            'absolute left-0 top-full z-30 mt-2',
            'bg-paper3 border border-hairline',
            'px-3 py-2',
            'max-w-[18rem]',
            'shadow-inkpress'
          )}
        >
          <span className="t-micro text-muted">{label}</span>
          <span className="block mt-1 t-audit nums-tabular text-ink2">
            <Decimal value={tariff.rate} />{' '}
            <span className="text-muted">{tariff.unit}</span>
          </span>
          <span className="block mt-2 t-micro text-muted">{tariff.note}</span>
        </span>
      ) : null}
    </span>
  )
}
