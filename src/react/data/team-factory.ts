import type { Ranking } from '../types/rankings'
import type { Team } from '../types/team'
import type { Factory } from './factory'

export const teamFactory: Factory<Team> = (attrs) => ({
  bouw: 'sterken bouw',
  name: 'Ploegnaam',
  coach: ['Deef', 'Duif', 'Fokkie'],
  afgevaardigde: ['Deef', 'Duif', 'Fokkie'],
  training: ['Dinsdag', 'Donderdag'],
  categoryName: 'Categorie',
  ...attrs,
})

export const serieFactory: Factory<{ name: string; serieId: string }> = (
  attrs
) => ({
  name: 'A-Reeks',
  serieId: '12',
  ...attrs,
})

export const rankingFactory: Factory<Ranking> = (attrs) => ({
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
