import React from 'react'

import { cx } from '../../utils/cx'

export default function Kicker({ children, className }) {
  return <div className={cx('t-kicker text-muted', className)}>{children}</div>
}

