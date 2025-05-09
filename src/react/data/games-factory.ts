import type { Game } from '../types/game'
import type { Factory } from './factory'
import { teamFactory } from './team-factory'

export const gamesFactory: Factory<Game> = (attrs) => ({
  startTime: new Date('2023-09-23T17:00:00').toISOString(),
  homeTeam: teamFactory({ name: 'Neurse' }),
  awayTeam: teamFactory({ name: 'Losers' }),
  title: 'Reeks',
  ...(attrs?.startTime && {
    startTime: new Date(attrs.startTime).toISOString(),
  }),
  outcome: { status: 'finished', homeTeamGoals: 3, awayTeamGoals: 4 },
  id: `${Math.round(Math.random() * 1000)}`,
  ...attrs,
})

export const calendar = () => [
  gamesFactory(),
  gamesFactory({
    startTime: '2023-09-24',
    homeTeam: teamFactory({ name: 'Noorse 3' }),
  }),
  gamesFactory({
    startTime: '2023-09-24',
    awayTeam: teamFactory({ name: 'Eerste Ploeg' }),
  }),
  gamesFactory({ startTime: '2023-09-25' }),
  gamesFactory({ startTime: '2023-09-25' }),
]
