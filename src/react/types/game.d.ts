import type { Team } from './team'

export interface Game {
  startTime: string
  startDate: string
  id: string
  homeTeam: Team
  awayTeam: Team
  outcome: {
    homeTeamGoals?: number
    awayTeamGoals?: number
    status: string
  }
}
