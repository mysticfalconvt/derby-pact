import { Link, createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { EventCard } from '#/components/EventCard'
import { formatEventDate, nextMeetingDate, todayIso, upcomingEvents } from '#/data/events'
import { SITE } from '#/lib/site'

export const Route = createFileRoute('/')({
  // Resolved in the loader so the server and the browser agree on "today".
  loader: () => ({ today: todayIso() }),
  component: Home,
})

function Home() {
  const { today } = Route.useLoaderData()
  return (
    <>
      <Hero />
      <UpNext today={today} />
      <About />
      <GetInvolved today={today} />
      <Contact />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-sky/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:flex-row">
        <div className="flex-1">
          <p className="mb-4 inline-block rounded-full bg-brand/25 px-3 py-1 text-sm font-bold text-brand-ink">
            {SITE.school}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-tight font-bold sm:text-6xl">
            Parents and Community Together for every Derby kid.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Derby PACT brings families, staff, and neighbors together to support our students, fund
            the extras that make school special, and build a stronger school community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="rounded-full bg-brand px-6 py-3 font-bold text-on-brand transition-colors hover:bg-brand-hover"
            >
              See Upcoming Events
            </Link>
            <Link
              to="/"
              hash="involved"
              className="rounded-full border-2 border-ink px-6 py-3 font-bold text-ink transition-colors hover:bg-panel hover:text-canvas"
            >
              Get Involved
            </Link>
          </div>
        </div>
        {/* Placeholder logo cropped from a flyer, until the original artwork is available. */}
        <img
          src="/derby-pact-logo.webp"
          alt="Derby PACT logo: a smiling tiger above the words Derby PACT, Parents and Community Together"
          className="w-40 rotate-2 rounded-3xl shadow-xl ring-8 ring-surface sm:w-56 md:w-64"
          width={210}
          height={210}
        />
      </div>
    </section>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-wider text-brand-ink uppercase">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function UpNext({ today }: { today: string }) {
  const [next] = upcomingEvents(today)
  if (!next) return null
  return (
    <Section id="next" eyebrow="Up Next" title="Join us at our next event" className="bg-surface">
      <EventCard event={next} />
      <Link
        to="/events"
        className="mt-6 inline-block font-bold text-brand-ink underline-offset-4 hover:underline"
      >
        See all upcoming events →
      </Link>
    </Section>
  )
}

const PILLARS = [
  {
    title: 'Support Students',
    body: 'Classroom extras, enrichment, and celebrations that make the school year memorable.',
    color: 'bg-brand',
  },
  {
    title: 'Support Staff',
    body: 'Appreciation, classroom wish lists, and an extra set of hands when it is needed most.',
    color: 'bg-leaf',
  },
  {
    title: 'Build Community',
    body: 'Family events like Trunk or Treat and our Craft Fair that bring Derby families together and help every tiger thrive.',
    color: 'bg-berry',
  },
]

function About() {
  return (
    <Section id="about" eyebrow="About Us" title="What is Derby PACT?">
      <p className="max-w-3xl text-lg text-ink-muted">
        PACT stands for <strong className="text-ink">{SITE.tagline}</strong>. We are the
        parent–teacher organization for {SITE.school}.
      </p>
      <blockquote className="mt-6 max-w-3xl border-l-4 border-brand pl-5 font-display text-xl leading-snug font-semibold sm:text-2xl">
        <span className="mb-1 block font-sans text-sm font-bold tracking-wider text-brand-ink uppercase">
          Our Mission
        </span>
        {SITE.mission}
      </blockquote>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-ink/10 bg-surface p-6">
            <div className={`mb-4 h-2 w-12 rounded-full ${pillar.color}`} />
            <h3 className="font-display text-xl font-bold">{pillar.title}</h3>
            <p className="mt-2 text-ink-muted">{pillar.body}</p>
          </div>
        ))}
      </div>
      <Link
        to="/about"
        className="mt-6 inline-block font-bold text-brand-ink underline-offset-4 hover:underline"
      >
        More about Derby PACT →
      </Link>
    </Section>
  )
}

function GetInvolved({ today }: { today: string }) {
  const ways = [
    {
      title: 'Come to a meeting',
      body: `All are welcome! We meet the ${SITE.meeting.schedule.toLowerCase()} at ${SITE.meeting.time} in the ${SITE.meeting.location}. Next meeting: ${formatEventDate(nextMeetingDate(today))}.`,
    },
    {
      title: 'Volunteer or donate',
      body: 'Lend a hand at an event, bake for a bake sale, or help behind the scenes. Every bit goes back to Derby students and staff.',
    },
    {
      title: 'Follow along',
      body: 'Find event news, flyers, and volunteer requests on our Facebook page.',
    },
  ]
  return (
    <Section
      id="involved"
      eyebrow="Get Involved"
      title="There's a place for everyone"
      className="bg-surface"
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {ways.map((way, i) => (
          <div key={way.title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-on-brand">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold">{way.title}</h3>
              <p className="mt-1 text-ink-muted">{way.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="rounded-2xl bg-panel p-8 text-white sm:p-12">
        <p className="max-w-2xl text-lg text-white/90">
          Have a question, an idea, or want to help? We would love to hear from you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full bg-brand px-6 py-3 font-bold text-on-brand transition-colors hover:bg-brand-hover"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-white/70 px-6 py-3 font-bold text-white transition-colors hover:bg-surface hover:text-ink"
          >
            Facebook
          </a>
        </div>
      </div>
    </Section>
  )
}
