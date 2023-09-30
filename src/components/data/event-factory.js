const eventFactory = (attrs) => ({
  naam: '6 tegen 6',
  datum: '7 mei 2023',
  ...attrs,
})

const withEndDate = (attrs) => eventFactory({ eindDatum: '15 mei', ...attrs })
const withAnnouncement = (attrs) =>
  eventFactory({ aankondiging: 'link naar event', ...attrs })

export const eventList = [
  eventFactory(),
  withEndDate({ naam: 'Met een einddatum' }),
  withAnnouncement({ naam: 'Met een aankondiging' }),
]
