type Address = { street: string; city: string; state: string; zip: string }

export const SITE = {
  name: 'Derby PACT',
  tagline: 'Parents and Community Together',
  url: 'https://derbypact.org',
  school: 'Derby Elementary School',
  mission:
    'To bring Derby families together to support students, celebrate learning, and build a welcoming, fun community that helps every tiger thrive.',
  email: 'info@derbypact.org',
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
  charityId: null as string | null,
  address: null as Address | null,
}

export function formatAddress({ street, city, state, zip }: Address) {
  return `${street}, ${city}, ${state} ${zip}`
}
