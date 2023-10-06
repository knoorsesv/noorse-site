const eventFactory = (attrs) => ({
  naam: '6 tegen 6',
  datum: '2023-05-07',
  ...attrs,
})

const withEndDate = (attrs) =>
  eventFactory({ eindDatum: '2023-05-15', ...attrs })
const withAnnouncement = (attrs) =>
  eventFactory({ aankondiging: 'link naar event', ...attrs })

export const eventList = [
  eventFactory(),
  withEndDate({ naam: 'Met een einddatum', datum: '2023-05-07' }),
  withAnnouncement({ naam: 'Met een aankondiging', datum: '2023-05-08' }),
]
