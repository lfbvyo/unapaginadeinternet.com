import React from 'react'

import { moduleMeta, sections } from '../../content/content'
import { cx } from '../../utils/cx'

export default function IndexGhost({ activeId }) {
  return (
    <section id="index" className="mt-10">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="t-micro text-ink2">{moduleMeta.index.label}</div>
          <div className="mt-4 border-t border-hairline">
            {sections.map(s => {
              const isActive = activeId === s.id
              return (
                <div
                  key={s.id}
                  className={cx(
                    'grid grid-cols-[1fr,auto] gap-6',
                    'py-3',
                    'border-b border-hairline',
                    isActive ? 'border-hairline2' : null
                  )}
                >
                  <div
                    className={cx(
                      't-micro',
                      isActive ? 'text-ink' : 'text-ink2',
                      isActive ? 'underline decoration-ink2' : null
                    )}
                  >
                    {s.title}
                  </div>
                  <div className="t-audit text-muted nums-tabular">{s.page}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-4">
          <div className="t-audit text-muted">
            {moduleMeta.index.attentionLabel}
            {': '}
            <span className="text-ink2">
              {activeId ? sections.find(s => s.id === activeId)?.title : '—'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
