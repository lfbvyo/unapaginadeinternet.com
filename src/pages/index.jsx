import React, { useEffect, useMemo, useState } from 'react'

import { sections } from '../content/content'
import PageShell from '../components/layout/PageShell'
import MarginRail from '../components/layout/MarginRail'
import Masthead from '../components/modules/Masthead'
import IndexGhost from '../components/modules/IndexGhost'
import ClauseZero from '../components/modules/ClauseZero'
import LatentLinksMap from '../components/modules/LatentLinksMap'
import TariffTable from '../components/modules/TariffTable'
import ModelChamber from '../components/modules/ModelChamber'
import ReplacementInventory from '../components/modules/ReplacementInventory'
import ShareAttemptRegistry from '../components/modules/ShareAttemptRegistry'
import ColophonAutopsy from '../components/modules/ColophonAutopsy'

function useSectionAttention() {
  const sectionIds = useMemo(() => sections.map(s => s.id), [])
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const els = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { root: null, threshold: [0.15, 0.25, 0.35] }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionIds])

  return active
}

export default function IndexPage() {
  const activeId = useSectionAttention()

  return (
    <main className="min-h-screen">
      <PageShell>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <Masthead />
            <IndexGhost activeId={activeId} />
            <ClauseZero />
            <LatentLinksMap />
            <TariffTable />
            <ModelChamber />
            <ReplacementInventory />
            <ShareAttemptRegistry />
            <ColophonAutopsy />
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-14">
              <MarginRail activeId={activeId} />
            </div>
          </div>
        </div>
      </PageShell>
    </main>
  )
}
