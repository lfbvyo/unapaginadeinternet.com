import React from 'react'

import { audit, changelog, colophon, moduleMeta, sections } from '../../content/content'
import HairlineRule from '../ui/HairlineRule'
import SectionHeader from '../ui/SectionHeader'

export default function ColophonAutopsy() {
  const title =
    sections.find(s => s.id === 'colophon')?.title || 'Colofón / Autopsia Editorial'

  return (
    <section id="colophon" className="mt-12 bg-paper3 p-6 md:p-8">
      <HairlineRule tone="strong" className="-mt-6 md:-mt-8 mb-6" />
      <SectionHeader
        kicker={moduleMeta.colophon.kicker}
        title={title}
        code={moduleMeta.colophon.code}
      />

      <div className="mt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <div className="t-micro text-muted">{moduleMeta.colophon.auditTitle}</div>
          <div className="mt-4 space-y-2">
            {audit.map(m => (
              <div
                key={m.label}
                className="t-audit nums-tabular grid grid-cols-[1fr,auto] gap-6 text-ink2"
              >
                <div className="text-muted">{m.label}</div>
                <div className="text-right">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <div className="t-micro text-muted">{moduleMeta.colophon.changelogTitle}</div>
          <div className="mt-4 space-y-3">
            {changelog.map(item => (
              <div key={item.date} className="t-audit text-ink2">
                <span className="text-muted nums-tabular">{item.date}</span>{' '}
                {item.entry}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-4">
          <div className="t-micro text-muted">{moduleMeta.colophon.imprintTitle}</div>
          <p className="mt-4 t-body text-ink nums-prose">{colophon.imprint}</p>
        </div>
      </div>

      <div className="mt-10 flex items-end justify-end">
        <div className="t-micro text-ink2 text-right max-w-[26rem]">
          {colophon.explicitAI}
        </div>
      </div>
    </section>
  )
}
