export const gamesFactory = (attrs) => ({
  startTime: new Date('2023-09-23T17:00:00').toISOString(),
  homeTeam: { name: 'Neurse' },
  awayTeam: { name: 'Losers' },
  title: 'Reeks',
  ...(attrs?.startTime && {
    startTime: new Date(attrs.startTime).toISOString(),
  }),
  ...attrs,
})
