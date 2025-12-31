import React from 'react'

import { cx } from '../../utils/cx'
import Kicker from './Kicker'

export default function SectionHeader({ kicker, title, code, className }) {
  return (
    <div
      className={cx(
        'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-2',
        className
      )}
    >
      <div className="col-span-4 md:col-span-4 lg:col-span-9">
        {kicker ? <Kicker>{kicker}</Kicker> : null}
        <h2 className="t-h2 mt-2">{title}</h2>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-3 flex items-start justify-start lg:justify-end">
        {code ? <div className="t-audit text-muted nums-tabular">{code}</div> : null}
      </div>
    </div>
  )
}

