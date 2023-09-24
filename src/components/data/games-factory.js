export const gamesFactory = (attrs) => ({
  startTime: new Date('2023-09-23T17:00:00').toISOString(),
  homeTeam: { name: 'Neurse' },
  awayTeam: { name: 'Losers' },
  title: 'Reeks',
  ...(attrs?.startTime && {
    startTime: new Date(attrs.startTime).toISOString(),
  }),
  outcome: { status: 'finished', homeTeamGoals: 3, awayTeamGoals: 4 },
  ...attrs,
})

export const calendar = () => [
  gamesFactory(),
  gamesFactory({ startTime: '2023-09-24', homeTeam: { name: 'Noorse 3' } }),
  gamesFactory({
    startTime: '2023-09-24',
    awayTeam: { name: 'Eerste Ploeg' },
  }),
  gamesFactory({ startTime: '2023-09-25' }),
  gamesFactory({ startTime: '2023-09-25' }),
]
