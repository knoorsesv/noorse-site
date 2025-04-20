export interface Game {
  startTime: string
  id: string
  homeTeam: { name: string }
  awayTeam: { name: string }
  title?: string
  outcome: {
    homeTeamGoals?: number | null
    awayTeamGoals?: number | null
    status: string
  }
}
