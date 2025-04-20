// todo: fix all these undefined and null types
export interface Team {
  name: string
  bouw: string
  position?: number
  points?: number | undefined
  coach?: string[]
  afgevaardigde: string[]
  training: string[]
  categoryName: string
  naamOpVoetbalVlaanderen?: string
  ploegfoto?: {
    responsiveURL?: string
  }
}
