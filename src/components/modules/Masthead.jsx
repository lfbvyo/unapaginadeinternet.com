import React from 'react'

import { masthead } from '../../content/content'
import HairlineRule from '../ui/HairlineRule'
import Kicker from '../ui/Kicker'
import VoiceLensToggle from '../ui/VoiceLensToggle'

function AbstractMark() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-28 w-28 md:h-32 md:w-32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="inkwash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(var(--ink) / 0.08)" />
          <stop offset="1" stopColor="rgb(var(--ink) / 0)" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="104"
        height="104"
        rx="8"
        fill="url(#inkwash)"
        stroke="rgb(var(--hairline) / 1)"
        strokeWidth="1"
      />
      <path
        d="M20 68 C 40 22, 80 98, 100 46"
        fill="none"
        stroke="rgb(var(--ink) / 0.65)"
        strokeWidth="1"
      />
      <path
        d="M24 84 L 96 84"
        stroke="rgb(var(--hairline-2) / 1)"
        strokeWidth="1"
      />
      <circle
        cx="82"
        cy="84"
        r="2"
        fill="rgb(var(--accent) / 1)"
        opacity="0.8"
      />
    </svg>
  )
}

export default function Masthead() {
  return (
    <section id="masthead" className="relative">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="inline-flex items-center gap-3">
            <div className="bg-paper3 border border-hairline px-4 py-2">
              <Kicker>{masthead.kicker}</Kicker>
            </div>
          </div>
          <h1 className="t-display mt-8">{masthead.h1}</h1>
          <p className="t-deck mt-6 text-ink2">{masthead.subtitle}</p>
          <div className="mt-8 space-y-3">
            {masthead.lead.map((p, idx) => (
              <p key={idx} className="t-body text-ink nums-prose">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col items-start gap-6">
          <div className="self-start">
            <AbstractMark />
          </div>
          <div className="w-full bg-paper3 border border-hairline p-4">
            <div className="t-audit text-muted nums-tabular grid grid-cols-2 gap-x-6 gap-y-2">
              {masthead.meta.map(({ label, value }) => (
                <React.Fragment key={label}>
                  <div>{label}</div>
                  <div className="text-right">{value}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="w-full">
            <VoiceLensToggle />
          </div>
        </div>
      </div>
      <HairlineRule className="mt-10" />
    </section>
  )
}
