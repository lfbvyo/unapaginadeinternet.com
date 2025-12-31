import React from 'react'

import { cx } from '../../utils/cx'

export default function HairlineRule({
  tone = 'default',
  variant = 'solid',
  className,
}) {
  const toneClass = tone === 'strong' ? 'border-hairline2' : 'border-hairline'
  const variantClass = variant === 'dotted' ? 'border-dashed' : 'border-solid'

  return (
    <div
      aria-hidden="true"
      className={cx('border-t', toneClass, variantClass, 'opacity-70', className)}
    />
  )
}

