import { Head } from 'nextra/components'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { TocScrollHighlight } from './components/toc-scroll-highlight'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nexus Docs',
    template: '%s | Nexus Docs',
  },
  description: 'Documentation for the Nexus multi-agent coordination bus',
  metadataBase: new URL('https://github.com/Akash8585/nexus'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        faviconGlyph="◆"
        color={{ hue: 160, saturation: 100, lightness: { dark: 42, light: 33 } }}
        backgroundColor={{ dark: '#101010', light: '#FAFAFA' }}
      />
      <body>
        {children}
        <TocScrollHighlight />
      </body>
    </html>
  )
}
