import React from 'react'

import { cx } from '../../utils/cx'

export default function PageShell({ children, className }) {
  return (
    <div
      className={cx(
        'min-h-screen',
        'px-6 md:px-10 lg:px-14',
        'py-10 md:py-14 lg:py-16',
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  )
}

