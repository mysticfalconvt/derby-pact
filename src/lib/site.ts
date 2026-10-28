type Address = { street: string; city: string; state: string; zip: string }

export const SITE = {
  name: 'Derby PACT',
  tagline: 'Parents and Community Together',
  url: 'https://derbypact.org',
  school: 'Derby Elementary School',
  mission:
    'To bring Derby families together to support students, celebrate learning, and build a welcoming, fun community that helps every tiger thrive.',
  /**
   * Shown everywhere an email appears, primary first. The Gmail address stays
   * until info@derbypact.org is set up through Google Workspace; then remove it.
   */
  emails: ['info@derbypact.org', 'derbypact.pto@gmail.com'],
  facebookUrl: 'https://www.facebook.com/profile.php?id=61587061000247',
  meeting: {
    schedule: 'First Thursday of every month',
    time: '6:00 PM',
    location: 'Derby Elementary School Library',
  },
  /**
   * Organization details required by Google Workspace for Nonprofits. These
   * must match the registration exactly; each is hidden on the site until set.
   */
  legalName: null as string | null,
  charityId: '41-3887013' as string | null,
  // The school's address, which is also the PACT's registered address.
  address: {
    street: '907 Elm St',
    city: 'Derby Line',
    state: 'VT',
    zip: '05830',
  } as Address | null,
}

export function formatAddress({ street, city, state, zip }: Address) {
  return `${street}, ${city}, ${state} ${zip}`
}
