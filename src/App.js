import React from 'react'
import { Helmet } from 'react-helmet'

import './styles/tailwind.css'

import IndexPage from './pages/index'
import useKerningLive from './hooks/useKerningLive'
import useParallaxAuthority from './hooks/useParallaxAuthority'
import { VoiceProvider } from './state/voice'

export default function App() {
  useKerningLive()
  useParallaxAuthority()

  return (
    <>
      <Helmet>
        <title>ACTA DE UNA PÁGINA — UnaPaginaDeInternet.com</title>
        <meta
          name="description"
          content="La web firmada por sistemas, leída por humanos."
        />
      </Helmet>
      <VoiceProvider>
        <IndexPage />
      </VoiceProvider>
    </>
  )
}
