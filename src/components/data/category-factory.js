import { teamFactory } from './team-factory'

export const categoryFactory = (attrs) => ({
  naam: 'Senioren',
  ploeg: [
    teamFactory({ naam: 'Ploeg 1' }),
    teamFactory({ naam: 'Andere ploeg' }),
  ],
  ...attrs,
})
