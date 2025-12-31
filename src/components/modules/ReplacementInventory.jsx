import React from 'react'

import { moduleMeta, replacements, sections } from '../../content/content'
import SectionHeader from '../ui/SectionHeader'

function List({ items }) {
  return (
    <ul className="mt-2 space-y-1">
      {items.map(it => (
        <li key={it} className="t-micro text-ink2">
          {it}
        </li>
      ))}
    </ul>
  )
}

export default function ReplacementInventory() {
  const title = sections.find(s => s.id === 'replacements')?.title || 'Inventario de Reemplazos'

  return (
    <section id="replacements" className="mt-12 bg-paper2 p-6 md:p-8">
      <SectionHeader
        kicker={moduleMeta.replacements.kicker}
        title={title}
        code={moduleMeta.replacements.code}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {replacements.map(r => (
          <div
            key={r.domain}
            className="bg-paper border border-hairline p-6"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="font-serif text-ink text-xl">{r.domain}</div>
              <div className="t-audit text-muted">
                {moduleMeta.replacementsUI.statusLabel}
              </div>
            </div>

            <div className="mt-5 border-t border-hairline border-dashed pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="t-micro text-muted">
                  {moduleMeta.replacementsUI.statuses.delegated}
                </div>
                <List items={r.delegated} />
              </div>
              <div>
                <div className="t-micro text-muted">
                  {moduleMeta.replacementsUI.statuses.duplicated}
                </div>
                <List items={r.duplicated} />
              </div>
              <div>
                <div className="t-micro text-muted">
                  {moduleMeta.replacementsUI.statuses.annulled}
                </div>
                <List items={r.annulled} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
