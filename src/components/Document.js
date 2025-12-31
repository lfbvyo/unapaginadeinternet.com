import React from 'react'

export default function Document({ Html, Head, Body, children }) {
  return (
    <Html lang="es" data-edition="A" data-voice="optimist">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="preload"
          as="font"
          href="/fonts/SourceSerif4-Variable.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/SourceSans3-Variable.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/IBMPlexMono-400.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/IBMPlexMono-500.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Body className="antialiased">{children}</Body>
    </Html>
  )
}
