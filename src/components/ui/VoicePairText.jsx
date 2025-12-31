import React from 'react'

import { useVoice } from '../../state/voice'
import { splitVoicePair } from '../../utils/voice'
import { cx } from '../../utils/cx'

export default function VoicePairText({ pair, className }) {
  const { voice } = useVoice()
  const { optimist, fatalist } = splitVoicePair(pair)

  const primary = voice === 'fatalist' ? fatalist : optimist
  const secondary = voice === 'fatalist' ? optimist : fatalist

  return (
    <span className={cx('block', className)}>
      <span className={cx('block', voice === 'fatalist' ? 'text-ink' : 'text-ink2')}>
        {primary}
      </span>
      <span className="block mt-2 t-micro text-muted">{secondary}</span>
    </span>
  )
}

