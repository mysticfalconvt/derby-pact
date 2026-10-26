import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { themeInitScript } from '#/lib/theme'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#12161d' },
      { title: 'Derby PACT' },
      {
        name: 'description',
        content:
          'Derby PACT (Parents and Community Together) supports the students, staff, and families of Derby Elementary School.',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Nunito:wght@400;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootShell,
})

function RootShell({ children }: { children: ReactNode }) {
  return (
    // The init script may set data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
