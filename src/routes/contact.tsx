import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { OrgDetails } from '#/components/OrgDetails'
import { PageIntro } from '#/components/PageIntro'
import { SITE, formatAddress } from '#/lib/site'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact · Derby PACT' }] }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro eyebrow="Contact" title="Get in touch">
        Have a question, an idea, or want to help? We would love to hear from you.
      </PageIntro>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card title="Email">
          <a
            href={`mailto:${SITE.email}`}
            className="font-bold text-brand-ink underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
        </Card>
        <Card title="Facebook">
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand-ink underline-offset-4 hover:underline"
          >
            Follow Derby PACT on Facebook
          </a>
          <p className="mt-1">Event news, flyers, and volunteer requests.</p>
        </Card>
        {SITE.address && (
          <Card title="Mailing address">
            <address className="not-italic">
              {SITE.legalName ?? SITE.name}
              <br />
              {formatAddress(SITE.address)}
            </address>
          </Card>
        )}
        <Card title="Monthly meetings">
          <p>
            {SITE.meeting.schedule}, {SITE.meeting.time}
          </p>
          <p>{SITE.meeting.location}</p>
          <p className="mt-1">All are welcome!</p>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Organization details</h2>
        <OrgDetails className="mt-4 space-y-2 text-ink-muted" />
      </section>
    </div>
  )
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-surface p-6 text-ink-muted">
      <h2 className="mb-2 font-display text-xl font-bold text-ink">{title}</h2>
      {children}
    </div>
  )
}
