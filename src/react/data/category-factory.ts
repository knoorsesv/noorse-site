import type { Category } from '../types/category'
import type { Factory } from './factory'
import { teamFactory } from './team-factory'

export const categoryFactory: Factory<Category> = (attrs): Category => ({
  naam: 'Senioren',
  ploeg: [
    teamFactory({ naam: 'Ploeg 1' }),
    teamFactory({ naam: 'Andere ploeg' }),
  ],
  categories: [],
  ...attrs,
})
