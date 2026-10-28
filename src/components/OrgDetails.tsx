import { SITE, formatAddress } from '#/lib/site'

/** Legal name, charity ID, and address: whichever of them are known. */
export function OrgDetails({ className = '' }: { className?: string }) {
  const rows = [
    { label: 'Organization', value: SITE.legalName ?? SITE.name },
    SITE.charityId && { label: 'Charity ID (EIN)', value: SITE.charityId },
    SITE.address && { label: 'Address', value: formatAddress(SITE.address) },
  ].filter((row) => !!row)

  return (
    <dl className={className}>
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="inline font-bold">{row.label}: </dt>
          <dd className="inline">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
