import { Link, createFileRoute } from '@tanstack/react-router'

import { OrgDetails } from '#/components/OrgDetails'
import { PageIntro } from '#/components/PageIntro'
import { SITE } from '#/lib/site'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About · Derby PACT' }] }),
  component: AboutPage,
})

const PROGRAMS = [
  {
    title: 'Trunk or Treat',
    body: 'Our annual Halloween celebration at the school, with trick-or-treating from decorated trunks, music, games, a haunted bus, and a bake sale.',
  },
  {
    title: 'Craft Fair',
    body: 'A community craft fair that showcases local makers and raises money for Derby students.',
  },
  {
    title: 'Bake Sales & Fundraisers',
    body: 'Family-friendly fundraisers, powered by volunteers and donated baked goods, that pay for the extras that make school special.',
  },
  {
    title: 'Support for Students & Staff',
    body: 'The money we raise goes straight back into Derby Elementary, supporting students, classrooms, and the staff who teach them.',
  },
  {
    title: 'Monthly Meetings',
    body: `Open to everyone. We meet the ${SITE.meeting.schedule.toLowerCase()} at ${SITE.meeting.time} in the ${SITE.meeting.location} to plan events and share ideas.`,
  },
]

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro eyebrow="About Us" title="About Derby PACT">
        Derby PACT (<strong className="text-ink">{SITE.tagline}</strong>) is the parent–teacher
        organization for {SITE.school}. We are families, staff, and community members working
        together for Derby students.
      </PageIntro>

      <section className="mt-12 rounded-2xl border-l-8 border-brand bg-surface p-8 sm:p-10">
        <h2 className="text-sm font-bold tracking-wider text-brand-ink uppercase">Our Mission</h2>
        <p className="mt-3 font-display text-2xl leading-snug font-semibold sm:text-3xl">
          {SITE.mission}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold">Our programs</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((program) => (
            <div key={program.title} className="rounded-2xl border border-ink/10 bg-surface p-6">
              <div className="mb-4 h-2 w-12 rounded-full bg-brand" />
              <h3 className="font-display text-xl font-bold">{program.title}</h3>
              <p className="mt-2 text-ink-muted">{program.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link
            to="/events"
            className="font-bold text-brand-ink underline-offset-4 hover:underline"
          >
            See upcoming events →
          </Link>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold">Organization details</h2>
        <OrgDetails className="mt-6 space-y-2 text-lg text-ink-muted" />
      </section>
    </div>
  )
}
