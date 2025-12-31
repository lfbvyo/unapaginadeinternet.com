import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const VoiceContext = createContext(null)

const STORAGE_KEY = 'upi:voice'

export function VoiceProvider({ children }) {
  const [voice, setVoice] = useState('optimist')

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY)
      if (saved === 'optimist' || saved === 'fatalist') setVoice(saved)
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.dataset.voice = voice
    try {
      window.sessionStorage.setItem(STORAGE_KEY, voice)
    } catch (e) {
      // ignore
    }
  }, [voice])

  const toggle = useCallback(() => {
    setVoice(v => (v === 'optimist' ? 'fatalist' : 'optimist'))
  }, [])

  const value = useMemo(() => ({ voice, setVoice, toggle }), [voice, toggle])

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>
}

export function useVoice() {
  const ctx = useContext(VoiceContext)
  if (!ctx) {
    throw new Error('useVoice must be used within <VoiceProvider>')
  }
  return ctx
}

