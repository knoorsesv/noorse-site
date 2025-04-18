import type { Category } from './category'

// todo: fix all these undefined and null types
export interface Team {
  name?: string
  bouw?: string
  naam?: string
  position?: number
  points?: number | undefined
  coach?: string[]
  afgevaardigde?: string[]
  training?: string[]
  categorie?: Category
  naamOpVoetbalVlaanderen?: string
  ploegfoto?: {
    fields: {
      file: {
        url: string
      }
    }
  }
}
