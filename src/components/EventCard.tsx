import { type PactEvent, formatEventDate } from '#/data/events'
import { SITE } from '#/lib/site'

export function EventCard({ event, compact = false }: { event: PactEvent; compact?: boolean }) {
  const helpSubject = event.help ? `?subject=${encodeURIComponent(event.help.title)}` : ''
  return (
    <article className="overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-sm">
      <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row">
        <div className="flex-1">
          <p className="text-sm font-bold tracking-wider text-brand-ink uppercase">
            {event.date ? formatEventDate(event.date) : 'Date coming soon'}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{event.title}</h3>
          {(event.time || event.location) && (
            <p className="mt-2 font-semibold text-ink-muted">
              {[event.time, event.location].filter(Boolean).join(' · ')}
            </p>
          )}
          <p className="mt-4 text-ink-muted">{event.summary}</p>
          {event.highlights && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {event.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand-ink"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}
          {event.help && !compact && (
            <div className="mt-6 rounded-xl border-l-4 border-brand bg-brand/10 p-4">
              <p className="font-bold">{event.help.title}</p>
              <p className="mt-1 text-ink-muted">{event.help.body}</p>
              <p className="mt-2">
                Email{' '}
                {SITE.emails.map((email, i) => (
                  <span key={email}>
                    {i > 0 && ' or '}
                    <a
                      href={`mailto:${email}${helpSubject}`}
                      className="font-bold break-all text-brand-ink underline-offset-4 hover:underline"
                    >
                      {email}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
        {event.flyers && !compact && (
          <div className="flex shrink-0 gap-3 md:w-72 md:flex-col">
            {event.flyers.map((flyer) => (
              <a
                key={flyer.src}
                href={flyer.src}
                target="_blank"
                rel="noreferrer"
                className="block flex-1 overflow-hidden rounded-xl border border-ink/10 transition-transform hover:scale-[1.02]"
                title="Open full-size flyer"
              >
                <img src={flyer.src} alt={flyer.alt} className="w-full" loading="lazy" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
