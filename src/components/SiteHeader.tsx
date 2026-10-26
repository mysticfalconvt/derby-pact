import { Link } from '@tanstack/react-router'

import { ThemeToggle } from './ThemeToggle'

const linkClass = 'transition-colors hover:text-brand-ink'
const activeProps = { className: 'text-brand-ink' }

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-canvas/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-bold text-ink">
          <img
            src="/derby-pact-logo.webp"
            alt=""
            className="h-11 w-11 rounded-xl object-cover"
            width={44}
            height={44}
          />
          Derby PACT
        </Link>
        <ul className="flex items-center gap-3 text-sm sm:gap-5 font-semibold text-ink-muted">
          <li className="hidden sm:block">
            <Link to="/" hash="about" className={linkClass}>
              About
            </Link>
          </li>
          <li>
            <Link to="/events" className={linkClass} activeProps={activeProps}>
              Events
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/" hash="contact" className={linkClass}>
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              to="/"
              hash="involved"
              className="rounded-full bg-brand px-4 py-2 font-bold text-on-brand transition-colors hover:bg-brand-hover"
            >
              Get Involved
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
