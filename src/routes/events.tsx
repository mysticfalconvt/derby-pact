import { createFileRoute } from '@tanstack/react-router'

import { EventCard } from '#/components/EventCard'
import { pastEvents, todayIso, upcomingEvents } from '#/data/events'

export const Route = createFileRoute('/events')({
  // Resolved in the loader so the server and the browser agree on "today".
  loader: () => ({ today: todayIso() }),
  head: () => ({ meta: [{ title: 'Events · Derby PACT' }] }),
  component: EventsPage,
})

function EventsPage() {
  const { today } = Route.useLoaderData()
  const upcoming = upcomingEvents(today)
  const past = pastEvents(today)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-bold tracking-wider text-brand-ink uppercase">Events</p>
      <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">What's coming up</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        Family events, fundraisers, and our monthly meetings. Everyone is welcome!
      </p>

      <div className="mt-10 space-y-6">
        {upcoming.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>

      {past.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">Past events</h2>
          <div className="mt-6 space-y-4 opacity-80">
            {past.map((event) => (
              <EventCard key={event.slug} event={event} compact />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
