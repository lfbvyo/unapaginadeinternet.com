import React from 'react'

import { lens } from '../../content/content'
import { useVoice } from '../../state/voice'
import { cx } from '../../utils/cx'

export default function VoiceLensToggle({ className }) {
  const { voice, toggle } = useVoice()

  const label = lens.options[voice] || lens.options.optimist

  return (
    <button
      type="button"
      className={cx(
        'w-full',
        'px-3 py-2',
        'border border-hairline',
        'bg-paper bg-opacity-70',
        'text-left',
        't-audit text-muted',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper3',
        className
      )}
      aria-label={lens.hint}
      onClick={toggle}
    >
      <span className="text-muted">{lens.label}</span>
      {': '}
      <span className="text-ink2">{label}</span>
    </button>
  )
}

