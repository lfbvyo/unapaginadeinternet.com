import React from 'react'

import { cx } from '../../utils/cx'

export default function MarginNote({
  number,
  children,
  className,
  tone = 'default',
}) {
  const borderTone = tone === 'strong' ? 'border-hairline2' : 'border-hairline'

  return (
    <aside className={cx('border-l pl-4 parallax-authority', borderTone, className)}>
      {typeof number !== 'undefined' ? (
        <div className="t-micro text-muted nums-tabular">{number}</div>
      ) : null}
      <div className="t-margin mt-2 text-ink2">{children}</div>
    </aside>
  )
}
