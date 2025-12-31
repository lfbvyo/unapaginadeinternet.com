import React, { useEffect, useMemo, useRef, useState } from 'react'

import { microcopy, moduleMeta, sections } from '../../content/content'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { cx } from '../../utils/cx'
import SectionHeader from '../ui/SectionHeader'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function phaseFromAttempts(attempts) {
  if (attempts <= 5) return 1
  if (attempts <= 15) return 2
  return 3
}

function computeSignals(attemptNumber) {
  const desire = clamp(attemptNumber / 18, 0, 1)
  const permission = clamp(1 - attemptNumber / 22, 0, 1)
  return { desire, permission }
}

export default function ShareAttemptRegistry() {
  const title =
    sections.find(s => s.id === 'share')?.title || 'Compartir (Intento Registrado)'

  const reducedMotion = usePrefersReducedMotion()

  const [attempts, setAttempts] = useState(0)
  const [marks, setMarks] = useState([])

  const phase = phaseFromAttempts(attempts)
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  const arenaRef = useRef(null)
  const buttonRef = useRef(null)
  const buttonWrapRef = useRef(null)

  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    t: 0,
    inside: false,
    pointerType: 'mouse',
  })

  const motionRef = useRef({
    ready: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  })

  const attemptGateRef = useRef({
    wasInside: false,
    lastAttemptAt: 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const saved = window.sessionStorage.getItem('upi:shareAttempts')
      const parsed = saved ? Number(saved) : 0
      if (!Number.isNaN(parsed)) setAttempts(Math.max(0, parsed))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.sessionStorage.setItem('upi:shareAttempts', String(attempts))
    } catch (e) {
      // ignore
    }
  }, [attempts])

  const registerAttempt = ({ x, y, pointerType }) => {
    setAttempts(n => n + 1)
    setMarks(prev => {
      const nextAttempt = prev.length ? prev[prev.length - 1].n + 1 : attempts + 1
      const stamp = microcopy[nextAttempt % microcopy.length] || microcopy[0]
      const id = `m-${Date.now()}-${Math.random().toString(16).slice(2)}`
      const jitterX = (Math.random() - 0.5) * 18
      const jitterY = (Math.random() - 0.5) * 14
      return [
        ...prev,
        {
          id,
          n: nextAttempt,
          x: x + jitterX,
          y: y + jitterY,
          pointerType,
          stamp,
          at: Date.now(),
        },
      ].slice(-28)
    })
  }

  // Initialize button position once dimensions exist
  useEffect(() => {
    const arena = arenaRef.current
    const button = buttonRef.current
    const wrap = buttonWrapRef.current
    if (!arena || !button || !wrap) return

    const rect = arena.getBoundingClientRect()
    const bw = button.offsetWidth || 0
    const bh = button.offsetHeight || 0
    if (!rect.width || !rect.height || !bw || !bh) return

    motionRef.current.ready = true
    motionRef.current.x = (rect.width - bw) / 2
    motionRef.current.y = (rect.height - bh) / 2
    wrap.style.transform = `translate3d(${motionRef.current.x}px, ${motionRef.current.y}px, 0)`
  }, [])

  // Physics loop
  useEffect(() => {
    if (reducedMotion) return
    if (typeof window === 'undefined') return

    let raf = 0

    const tick = () => {
      raf = 0
      const arena = arenaRef.current
      const button = buttonRef.current
      const wrap = buttonWrapRef.current
      if (!arena || !button || !wrap) {
        raf = window.requestAnimationFrame(tick)
        return
      }

      const rect = arena.getBoundingClientRect()
      const bw = button.offsetWidth || 0
      const bh = button.offsetHeight || 0
      if (!rect.width || !rect.height || !bw || !bh) {
        raf = window.requestAnimationFrame(tick)
        return
      }

      if (!motionRef.current.ready) {
        motionRef.current.ready = true
        motionRef.current.x = (rect.width - bw) / 2
        motionRef.current.y = (rect.height - bh) / 2
      }

      const p = pointerRef.current
      const m = motionRef.current

      const centerX = m.x + bw / 2
      const centerY = m.y + bh / 2
      const dx = centerX - p.x
      const dy = centerY - p.y
      const dist = Math.max(1, Math.hypot(dx, dy))

      const currentPhase = phaseRef.current
      const radius = currentPhase === 1 ? 90 : currentPhase === 2 ? 140 : 160
      const pad = currentPhase === 1 ? 10 : 12
      const accel = currentPhase === 1 ? 0.9 : currentPhase === 2 ? 1.15 : 0.9
      const friction = currentPhase === 1 ? 0.86 : currentPhase === 2 ? 0.84 : 0.85

      const inside = p.inside && dist < radius
      const gate = attemptGateRef.current
      const now = Date.now()
      const cooldown = 750

      if (inside && !gate.wasInside && now - gate.lastAttemptAt > cooldown) {
        gate.lastAttemptAt = now
        registerAttempt({
          x: clamp(p.x, 0, rect.width),
          y: clamp(p.y, 0, rect.height),
          pointerType: p.pointerType,
        })
      }
      gate.wasInside = inside

      let ax = 0
      let ay = 0

      if (inside) {
        const strength = (1 - dist / radius) * accel
        ax += (dx / dist) * strength * 18
        ay += (dy / dist) * strength * 18

        if (currentPhase >= 2) {
          // Predict trajectory: prefer escaping against cursor velocity
          ax += (-p.vx / 60) * 10
          ay += (-p.vy / 60) * 10

          // Bias towards margin (right edge) as authority
          ax += 6
        }
      } else {
        // Drift back to a calm center when left alone.
        const tx = (rect.width - bw) / 2
        const ty = (rect.height - bh) / 2
        ax += (tx - m.x) * 0.03
        ay += (ty - m.y) * 0.03
      }

      m.vx = (m.vx + ax) * friction
      m.vy = (m.vy + ay) * friction
      m.x = clamp(m.x + m.vx, pad, rect.width - bw - pad)
      m.y = clamp(m.y + m.vy, pad, rect.height - bh - pad)

      wrap.style.transform = `translate3d(${m.x.toFixed(2)}px, ${m.y.toFixed(
        2
      )}px, 0)`

      raf = window.requestAnimationFrame(tick)
    }

    raf = window.requestAnimationFrame(tick)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  const isPhase3 = phase === 3
  const statusLabel = isPhase3
    ? moduleMeta.share.registryStatusClosed
    : moduleMeta.share.registryStatus

  const graph = useMemo(() => {
    const pts = []
    for (let i = 1; i <= attempts; i++) {
      const { desire, permission } = computeSignals(i)
      pts.push({ i, desire, permission })
    }
    return pts.slice(-16)
  }, [attempts])

  return (
    <section id="share" className="mt-12">
      <SectionHeader
        kicker={moduleMeta.share.kicker}
        title={title}
        code={moduleMeta.share.code}
      />

      <div className="mt-8 bg-paper border border-hairline p-6 md:p-8">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-6 lg:col-span-4">
            <div className="t-audit text-muted">{moduleMeta.share.attemptsLabel}</div>
            <div className="mt-2 t-h2 nums-tabular">{attempts}</div>
            <div className="mt-4 t-margin text-ink2">
              {moduleMeta.share.body}
            </div>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <div
              ref={arenaRef}
              className={cx(
                'bg-paper3 border border-hairline',
                'h-56 md:h-64 lg:h-72',
                'relative overflow-hidden',
                'touch-none'
              )}
              onPointerEnter={e => {
                pointerRef.current.inside = true
                pointerRef.current.pointerType = e.pointerType || 'mouse'
              }}
              onPointerLeave={() => {
                pointerRef.current.inside = false
                attemptGateRef.current.wasInside = false
              }}
              onPointerMove={e => {
                const arena = arenaRef.current
                if (!arena) return
                const r = arena.getBoundingClientRect()

                const x = e.clientX - r.left
                const y = e.clientY - r.top

                const prev = pointerRef.current
                const now = performance.now()
                const dt = prev.t ? Math.max(1, now - prev.t) : 16

                pointerRef.current = {
                  x,
                  y,
                  vx: ((x - prev.x) / dt) * 1000,
                  vy: ((y - prev.y) / dt) * 1000,
                  t: now,
                  inside: true,
                  pointerType: e.pointerType || prev.pointerType || 'mouse',
                }

                if (reducedMotion) {
                  const gate = attemptGateRef.current
                  const currentPhase = phaseRef.current
                  const radius =
                    currentPhase === 1 ? 90 : currentPhase === 2 ? 140 : 160
                  const mx = motionRef.current
                  const button = buttonRef.current
                  const bw = button?.offsetWidth || 0
                  const bh = button?.offsetHeight || 0
                  const cx0 = mx.x + bw / 2
                  const cy0 = mx.y + bh / 2
                  const dx0 = cx0 - x
                  const dy0 = cy0 - y
                  const dist0 = Math.max(1, Math.hypot(dx0, dy0))

                  const inside0 = dist0 < radius
                  const now0 = Date.now()
                  if (inside0 && !gate.wasInside && now0 - gate.lastAttemptAt > 750) {
                    gate.lastAttemptAt = now0
                    registerAttempt({
                      x: clamp(x, 0, r.width),
                      y: clamp(y, 0, r.height),
                      pointerType: pointerRef.current.pointerType,
                    })
                  }
                  gate.wasInside = inside0
                }
              }}
            >
              {/* Trail: stamps */}
              <div className="absolute inset-0 pointer-events-none">
                {marks.map(m => (
                  <div
                    key={m.id}
                    className={cx(
                      'absolute',
                      'px-3 py-2',
                      'border-2 border-accent border-opacity-50',
                      'bg-paper bg-opacity-70',
                      't-kicker text-accent',
                      'select-none'
                    )}
                    style={{
                      left: m.x,
                      top: m.y,
                      transform: `translate(-50%, -50%) rotate(${(m.n % 5) - 2}deg)`,
                      opacity: m.n <= 5 ? 0.38 : 0.26,
                    }}
                  >
                    {moduleMeta.share.stampLabel}{' '}
                    <span className="nums-tabular">{String(m.n).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>

              {/* Trail: graph (phase 2+) */}
              {phase >= 2 ? (
                <div className="absolute right-3 top-3 bottom-3 w-40 bg-paper border border-hairline p-3 pointer-events-none">
                  <div className="t-micro text-muted">Deseo / Permiso</div>
                  <svg
                    viewBox="0 0 100 60"
                    className="mt-3 w-full h-24"
                    aria-hidden="true"
                  >
                    <line
                      x1="0"
                      y1="60"
                      x2="100"
                      y2="60"
                      stroke="rgb(var(--hairline) / 1)"
                      strokeWidth="1"
                    />
                    <polyline
                      fill="none"
                      stroke="rgb(var(--accent) / 0.85)"
                      strokeWidth="1.5"
                      points={graph
                        .map((p, i) => {
                          const x = (i / Math.max(1, graph.length - 1)) * 100
                          const y = 60 - p.desire * 58
                          return `${x.toFixed(1)},${y.toFixed(1)}`
                        })
                        .join(' ')}
                    />
                    <polyline
                      fill="none"
                      stroke="rgb(var(--hairline-2) / 1)"
                      strokeWidth="1.5"
                      points={graph
                        .map((p, i) => {
                          const x = (i / Math.max(1, graph.length - 1)) * 100
                          const y = 60 - p.permission * 58
                          return `${x.toFixed(1)},${y.toFixed(1)}`
                        })
                        .join(' ')}
                    />
                  </svg>
                  <div className="mt-2 t-audit text-muted nums-tabular">
                    {statusLabel}
                  </div>
                </div>
              ) : (
                <div className="absolute left-3 bottom-3 t-audit text-muted pointer-events-none">
                  {statusLabel}
                </div>
              )}

              {/* Button */}
              <div
                ref={buttonWrapRef}
                className={cx(
                  'absolute left-0 top-0',
                  'transition-opacity duration-300',
                  isPhase3 ? 'opacity-0' : 'opacity-100'
                )}
              >
                <button
                  ref={buttonRef}
                  type="button"
                  tabIndex={isPhase3 ? -1 : 0}
                  aria-hidden={isPhase3 ? 'true' : undefined}
                  className={cx(
                    'px-6 py-3',
                    'border border-hairline',
                    'bg-paper text-ink',
                    't-micro',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper3'
                  )}
                  onClick={e => {
                    e.preventDefault()
                    const arena = arenaRef.current
                    if (!arena) return
                    const r = arena.getBoundingClientRect()
                    registerAttempt({
                      x: clamp(r.width / 2, 0, r.width),
                      y: clamp(r.height / 2, 0, r.height),
                      pointerType: 'keyboard',
                    })
                  }}
                >
                  {moduleMeta.share.cta}
                </button>
              </div>

              {/* Phase 3: notarial residue */}
              {isPhase3 ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-paper border border-hairline2 px-6 py-5 max-w-[26rem]">
                    <div className="t-kicker text-muted">{moduleMeta.share.notaryLabel}</div>
                    <div className="mt-3 t-margin text-ink2">{microcopy[40]}</div>
                    <div className="mt-4 t-audit text-muted nums-tabular">
                      {moduleMeta.share.attemptsLabel}: {attempts}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
