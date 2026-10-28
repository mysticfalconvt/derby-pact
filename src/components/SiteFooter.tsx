import { Link } from '@tanstack/react-router'

import { OrgDetails } from '#/components/OrgDetails'
import { SITE } from '#/lib/site'

const linkClass = 'underline-offset-4 hover:underline'

export function SiteFooter() {
  return (
    <footer className="bg-panel text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-brand">{SITE.name}</p>
          <p className="mt-1">{SITE.tagline}</p>
          <p className="mt-3 text-sm">{SITE.mission}</p>
        </div>
        <div>
          <p className="font-bold text-white">Pages</p>
          <ul className="mt-1 space-y-1">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About &amp; Mission
              </Link>
            </li>
            <li>
              <Link to="/events" className={linkClass}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white">Monthly meetings</p>
          <p className="mt-1">{SITE.meeting.schedule}</p>
          <p>
            {SITE.meeting.time}, {SITE.meeting.location}
          </p>
          <p className="mt-4 font-bold text-white">Stay in touch</p>
          <p className="mt-1">
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
          </p>
          <p>
            <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" className={linkClass}>
              Follow us on Facebook
            </a>
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Organization</p>
          <OrgDetails className="mt-1 space-y-1 text-sm" />
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {SITE.legalName ?? SITE.name}
      </p>
    </footer>
  )
}
