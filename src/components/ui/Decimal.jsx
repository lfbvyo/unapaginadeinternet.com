import React from 'react'

import { cx } from '../../utils/cx'

function splitDecimal(value) {
  const sign = value < 0 ? '-' : ''
  const abs = Math.abs(value)
  const fixed = abs.toFixed(2)
  const [intPart, fracPart] = fixed.split('.')
  return { sign, intPart, fracPart }
}

export default function Decimal({
  value,
  className,
  accentDecimals = true,
  decimalsClassName,
}) {
  const { sign, intPart, fracPart } = splitDecimal(value)
  return (
    <span className={cx('inline-grid grid-cols-[auto,auto] items-baseline', className)}>
      <span className="nums-tabular tabular-nums text-right">
        {sign}
        {intPart}
      </span>
      <span
        className={cx(
          'nums-tabular tabular-nums',
          accentDecimals ? 'text-accent text-opacity-70' : null,
          decimalsClassName
        )}
      >
        .{fracPart}
      </span>
    </span>
  )
}

