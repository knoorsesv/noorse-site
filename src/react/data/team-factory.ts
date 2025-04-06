import type { Team } from '../types/team'
import type { Factory } from './factory'

export const teamFactory: Factory<Team> = (attrs) => ({
  bouw: 'sterken bouw',
  naam: 'Ploegnaam',
  name: 'Ploegnaam', // todo: this should be unified so name is used everywhere
  coach: ['Deef', 'Duif', 'Fokkie'],
  afgevaardigde: ['Deef', 'Duif', 'Fokkie'],
  training: ['Dinsdag', 'Donderdag'],
  ...attrs,
})

export const serieFactory: Factory<{ name: string; serieId: string }> = (
  attrs
) => ({
  name: 'A-Reeks',
  serieId: '12',
  ...attrs,
})

export const rankingFactory: Factory<{
  name: string
  serieId: string
  rankings: { teams: Team[] }[]
}> = (attrs) => ({
  name: 'A-Reeks',
  serieId: '12',
  rankings: [
    {
      teams: [
        teamFactory({ name: 'Noorse 3', position: 1, points: 30 }),
        teamFactory({ position: 2, points: 20 }),
        teamFactory({ position: 3, points: 20 }),
        teamFactory({ position: 4, points: 20 }),
        teamFactory({ position: 5, points: 20 }),
        teamFactory({ position: 6, points: 20 }),
      ],
    },
  ],
  ...attrs,
})
