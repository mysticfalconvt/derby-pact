import { SITE } from '#/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-panel text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-xl font-bold text-brand">{SITE.name}</p>
          <p className="mt-1">{SITE.tagline}</p>
          <p className="mt-1">{SITE.school}</p>
        </div>
        <div>
          <p className="font-bold text-white">Monthly meetings</p>
          <p className="mt-1">{SITE.meeting.schedule}</p>
          <p>
            {SITE.meeting.time}, {SITE.meeting.location}
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Stay in touch</p>
          <p className="mt-1">
            <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </p>
          <p>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Follow us on Facebook
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  )
}
