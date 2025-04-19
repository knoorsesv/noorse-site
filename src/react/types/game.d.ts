import type { Team } from './team'

export interface Game {
  startTime: string
  id: string
  homeTeam: Team
  awayTeam: Team
  title?: string
  outcome: {
    homeTeamGoals?: number | null
    awayTeamGoals?: number | null
    status: string
  }
}
