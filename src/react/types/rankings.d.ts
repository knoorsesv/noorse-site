export interface Ranking {
  name: string
  rankings: {
    teams: { name?: string; position?: number; points?: number | null }[]
  }[]
}
