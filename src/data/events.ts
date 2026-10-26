export type Flyer = { src: string; alt: string }

export type PactEvent = {
  slug: string
  title: string
  /** ISO date (YYYY-MM-DD). Omit while the date is still being decided. */
  date?: string
  time?: string
  location?: string
  summary: string
  highlights?: string[]
  /** A way for families to help, shown as a callout on the event. */
  help?: { title: string; body: string }
  flyers?: Flyer[]
}

/**
 * Add new events here. Events whose date has passed move to the "Past events"
 * section on their own; the monthly meeting is generated and need not be listed.
 */
export const EVENTS: PactEvent[] = [
  {
    slug: 'trunk-or-treat-2026',
    title: 'Trunk or Treat',
    date: '2026-10-30',
    time: '5:00 – 7:00 PM',
    location: 'Derby Elementary School',
    summary:
      'Our annual Halloween celebration! Bring the kids in costume for an evening of trick-or-treating from decorated trunks, plus music, games, and treats.',
    highlights: ['Trick-or-treating', 'Spooky DJ', 'Games', 'Haunted bus', 'Bake sale'],
    help: {
      title: 'Bake sale donations wanted',
      body: 'We are looking for baked goods for the Halloween bake sale. Scan the QR code on the flyer to sign up, or email us.',
    },
    flyers: [
      { src: '/flyers/trunk-or-treat-2026.webp', alt: 'Trunk or Treat flyer' },
      { src: '/flyers/halloween-bake-sale-2026.webp', alt: 'Halloween bake sale flyer' },
    ],
  },
  {
    slug: 'craft-fair-2026',
    title: 'Craft Fair',
    summary:
      'Plans are underway for the Derby PACT Craft Fair. Date and details coming soon — come to a monthly meeting to help shape it!',
  },
]

/** Today's date as YYYY-MM-DD in local time. */
export function todayIso(now = new Date()) {
  return now.toLocaleDateString('en-CA')
}

/** The next first-Thursday-of-the-month on or after `fromIso`. */
export function nextMeetingDate(fromIso: string) {
  const [y, m, d] = fromIso.split('-').map(Number)
  for (let offset = 0; offset < 2; offset++) {
    const firstOfMonth = new Date(y, m - 1 + offset, 1)
    const firstThursday = 1 + ((4 - firstOfMonth.getDay() + 7) % 7)
    const candidate = new Date(y, m - 1 + offset, firstThursday)
    if (offset > 0 || firstThursday >= d) return todayIso(candidate)
  }
  throw new Error('unreachable')
}

export function meetingEvent(date: string): PactEvent {
  return {
    slug: `meeting-${date}`,
    title: 'Monthly PACT Meeting',
    date,
    time: '6:00 PM',
    location: 'Derby Elementary School Library',
    summary:
      'All are welcome! We meet the first Thursday of every month to plan events and talk about how we can support our students and staff.',
  }
}

/** Upcoming events, soonest first, with undated ("coming soon") events last. */
export function upcomingEvents(today: string) {
  const dated = [...EVENTS, meetingEvent(nextMeetingDate(today))]
    .filter((e) => e.date && e.date >= today)
    .sort((a, b) => (a.date as string).localeCompare(b.date as string))
  return [...dated, ...EVENTS.filter((e) => !e.date)]
}

export function pastEvents(today: string) {
  return EVENTS.filter((e) => e.date && e.date < today).sort((a, b) =>
    (b.date as string).localeCompare(a.date as string),
  )
}

export function formatEventDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
