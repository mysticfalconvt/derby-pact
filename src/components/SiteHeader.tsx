import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/', hash: 'contact' },
] as const

const ctaClass =
  'whitespace-nowrap rounded-full bg-brand px-4 py-2 font-bold text-on-brand transition-colors hover:bg-brand-hover'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const href = useRouterState({ select: (s) => s.location.href })

  // Close the mobile menu whenever navigation happens, including hash jumps.
  useEffect(() => setMenuOpen(false), [href])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-canvas/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 font-display text-xl font-bold whitespace-nowrap text-ink"
        >
          <img
            src="/derby-pact-logo.webp"
            alt=""
            className="h-11 w-11 rounded-xl object-cover"
            width={44}
            height={44}
          />
          Derby PACT
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-ink-muted md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                hash={'hash' in link ? link.hash : undefined}
                className="transition-colors hover:text-brand-ink"
                activeProps={'hash' in link ? undefined : { className: 'text-brand-ink' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link to="/" hash="involved" className={ctaClass}>
              Get Involved
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/10"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-canvas md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  hash={'hash' in link ? link.hash : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-3 text-lg font-semibold text-ink transition-colors hover:bg-ink/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                to="/"
                hash="involved"
                onClick={() => setMenuOpen(false)}
                className={`${ctaClass} block py-3 text-center text-lg`}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
