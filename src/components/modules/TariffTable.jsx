import React from 'react'

import { moduleMeta, sections, tariffs } from '../../content/content'
import Decimal from '../ui/Decimal'
import SectionHeader from '../ui/SectionHeader'

export default function TariffTable() {
  const title = sections.find(s => s.id === 'tariffs')?.title || 'Tarifario de Atención'
  const [hConcept, hRate, hUnit, hNote] = moduleMeta.tables.tariffs.headers

  return (
    <section id="tariffs" className="mt-12 bg-paper2 p-6 md:p-8">
      <SectionHeader
        kicker={moduleMeta.tariffs.kicker}
        title={title}
        code={moduleMeta.tariffs.code}
      />

      <div className="mt-8 bg-paper border border-hairline overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="bg-paper3 border-b border-hairline">
              <th className="t-micro text-ink2 font-normal px-4 py-3 text-left">
                {hConcept}
              </th>
              <th className="t-micro text-ink2 font-normal px-4 py-3 text-right">
                {hRate}
              </th>
              <th className="t-micro text-ink2 font-normal px-4 py-3 text-left">
                {hUnit}
              </th>
              <th className="t-micro text-ink2 font-normal px-4 py-3 text-left">
                {hNote}
              </th>
            </tr>
          </thead>
          <tbody>
            {tariffs.map((row, idx) => (
              <tr
                key={row.concept}
                className={idx % 2 === 0 ? 'bg-paper' : 'bg-paper2 bg-opacity-50'}
              >
                <td className="t-margin text-ink px-4 py-3 whitespace-nowrap">
                  {row.concept}
                </td>
                <td className="t-margin nums-tabular text-ink px-4 py-3 text-right whitespace-nowrap">
                  <Decimal value={row.rate} />
                </td>
                <td className="t-margin text-ink2 px-4 py-3 whitespace-nowrap">
                  {row.unit}
                </td>
                <td className="t-margin text-muted px-4 py-3">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
