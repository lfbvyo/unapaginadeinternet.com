import React from 'react'

import { clauseZero } from '../../content/content'
import MarginNote from '../ui/MarginNote'
import SectionHeader from '../ui/SectionHeader'
import PricedTerm from '../ui/PricedTerm'
import VoicePairText from '../ui/VoicePairText'

export default function ClauseZero() {
  return (
    <section id="clause" className="mt-12 bg-paper2 border border-hairline p-6 md:p-8">
      <SectionHeader
        kicker={clauseZero.kicker}
        title={clauseZero.title}
        code={clauseZero.clauseId}
      />

      <div className="mt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="space-y-3">
            {clauseZero.body.map((line, idx) => (
              <p key={idx} className="t-body text-ink nums-prose">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-7 border-t border-hairline border-dashed pt-5">
            <div className="t-micro text-muted">{clauseZero.priced.label}</div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {clauseZero.priced.terms.map(t => (
                <PricedTerm
                  key={t.term}
                  term={t.term}
                  tariffConcept={t.tariffConcept}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-4 space-y-6">
          <MarginNote number="0.1" tone="strong">
            <VoicePairText pair={clauseZero.margin.a} />
          </MarginNote>
          <MarginNote number="0.2">
            <VoicePairText pair={clauseZero.margin.b} />
          </MarginNote>
        </div>
      </div>
    </section>
  )
}
