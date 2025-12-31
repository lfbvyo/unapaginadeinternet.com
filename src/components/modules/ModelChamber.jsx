import React from 'react'

import { actas, moduleMeta, sections } from '../../content/content'
import SectionHeader from '../ui/SectionHeader'
import Seal from '../ui/Seal'
import Redaction from '../ui/Redaction'

function Votes({ votes }) {
  return (
    <div className="t-audit text-muted nums-tabular grid grid-cols-3 gap-4">
      <div>
        <span className="text-ink2">{moduleMeta.chamber.votes.favor}</span>{' '}
        {votes.favor}
      </div>
      <div>
        <span className="text-ink2">{moduleMeta.chamber.votes.contra}</span>{' '}
        {votes.contra}
      </div>
      <div>
        <span className="text-ink2">{moduleMeta.chamber.votes.abst}</span>{' '}
        {votes.abst}
      </div>
    </div>
  )
}

export default function ModelChamber() {
  const title =
    sections.find(s => s.id === 'models')?.title || 'Cámara de Modelos (Actas y Votos)'

  return (
    <section id="models" className="mt-12">
      <SectionHeader
        kicker={moduleMeta.models.kicker}
        title={title}
        code={moduleMeta.models.code}
      />

      <div
        className="mt-8 p-1 md:p-2"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgb(var(--ink) / 0.04), transparent 60%)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {actas.map(a => (
            <article
              key={a.id}
              className="bg-paper2 border border-hairline p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="t-audit text-muted nums-tabular">
                    {moduleMeta.chamber.labels.acta} {a.id}
                  </div>
                  <h3 className="mt-2 font-serif text-ink text-lg leading-snug">
                    “{a.title}”
                  </h3>
                </div>
                <Seal tone={a.seal}>{a.seal}</Seal>
              </div>

              <p className="mt-5 t-body text-ink nums-prose">{a.resolution}</p>

              <div className="mt-5">
                <Votes votes={a.votes} />
              </div>

              <div className="mt-5 bg-paper3 border border-hairline border-dashed p-4">
                <div className="t-micro text-muted">{moduleMeta.chamber.labels.amendment}</div>
                <div className="t-margin text-ink2 mt-2">{a.amendment}</div>
              </div>

              <div className="mt-5">
                <div className="t-micro text-muted">{moduleMeta.chamber.labels.redaction}</div>
                <div className="mt-2 t-margin text-ink2">
                  <Redaction hint="Revelar redacción (parcial)">
                    {a.redaction}
                  </Redaction>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
