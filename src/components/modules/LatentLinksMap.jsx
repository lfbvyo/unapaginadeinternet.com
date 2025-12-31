import React, { useMemo, useState } from 'react'

import { latentLinks, microcopy, moduleMeta, sections } from '../../content/content'
import { cx } from '../../utils/cx'
import SectionHeader from '../ui/SectionHeader'

function makeMeta(i) {
  const stability = Math.round((0.34 + ((i * 7) % 53) / 100) * 100) / 100
  const cost = Math.round((0.12 + ((i * 9) % 87) / 100) * 100) / 100
  const unitPool = moduleMeta.latentUI.unitPool
  const unit = unitPool[i % unitPool.length] || unitPool[0]
  return { stability: Math.min(0.99, stability), cost, unit }
}

export default function LatentLinksMap() {
  const cards = useMemo(() => {
    return latentLinks.map((l, i) => ({
      ...l,
      ...makeMeta(i),
    }))
  }, [])

  const title = useMemo(
    () => sections.find(s => s.id === 'latent')?.title || 'Mapa de Enlaces Latentes',
    []
  )

  const [openById, setOpenById] = useState({})
  const [countById, setCountById] = useState({})

  return (
    <section id="latent" className="mt-12">
      <SectionHeader
        kicker={moduleMeta.latent.kicker}
        title={title}
        code={moduleMeta.latent.code}
      />

      <div
        className="mt-8 p-3 md:p-4"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--hairline) / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--hairline) / 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              className={cx(
                'text-left',
                'bg-paper2 border border-hairline',
                'px-4 py-4',
                'transition-colors duration-200',
                'hover:border-hairline2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
              )}
              aria-label={`Inspeccionar: ${c.title}`}
              aria-expanded={Boolean(openById[c.id])}
              aria-controls={`latent-meta-${c.id}`}
              data-index={idx}
              onClick={() => {
                setOpenById(prev => ({ ...prev, [c.id]: !prev[c.id] }))
                setCountById(prev => ({
                  ...prev,
                  [c.id]: (prev[c.id] || 0) + 1,
                }))
              }}
            >
              <div className="font-serif text-ink leading-snug">{c.title}</div>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div className="t-audit text-muted nums-tabular">
                  {moduleMeta.latentUI.stabilityAbbrev} {c.stability.toFixed(2)}
                </div>
                <div className="t-audit nums-tabular">
                  <span className="text-accent">{c.cost.toFixed(2)}</span>{' '}
                  <span className="text-muted">{c.unit}</span>
                </div>
              </div>
              <div className="mt-3 h-[1px] bg-hairline bg-opacity-60 relative">
                <div
                  className="absolute top-0 h-[1px] bg-accent bg-opacity-70"
                  style={{
                    left: `${Math.round(c.stability * 100)}%`,
                    width: '10%',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>

              {openById[c.id] ? (
                <div
                  id={`latent-meta-${c.id}`}
                  className="mt-4 bg-paper3 border border-hairline px-3 py-3"
                >
                  <div className="t-micro text-muted">
                    {moduleMeta.latentUI.inspectLabel}{' '}
                    <span className="nums-tabular">
                      {String(countById[c.id] || 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-2 t-micro text-ink2">
                    {microcopy[(idx * 3) % microcopy.length] || microcopy[2]}
                  </div>
                </div>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
