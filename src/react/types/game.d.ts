import type { Team } from './team'

export interface Game {
  startTime: string
  id: string
  homeTeam: Team
  awayTeam: Team
  title?: string
  outcome: {
    homeTeamGoals?: number
    awayTeamGoals?: number
    status: string
  }
}
