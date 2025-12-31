import React, { useMemo } from 'react'

import { marginalia, microcopy, sections } from '../../content/content'
import MarginNote from '../ui/MarginNote'
import VoicePairText from '../ui/VoicePairText'

export default function MarginRail({ activeId }) {
  const idx = useMemo(() => {
    const i = sections.findIndex(s => s.id === activeId)
    return i === -1 ? 0 : i
  }, [activeId])

  const pair = marginalia[idx % marginalia.length] || marginalia[0]
  const title = microcopy[4] || 'Este margen no es decoración.'

  return (
    <div className="bg-paper2 border border-hairline p-5">
      <div className="t-micro text-muted">{title}</div>
      <div className="mt-5">
        <MarginNote number={`M${String(idx + 1).padStart(2, '0')}`} tone="strong">
          <VoicePairText pair={pair} />
        </MarginNote>
      </div>
    </div>
  )
}

