import type { Team } from './team'

export interface Category {
  ploeg?: Team[]
  naam: string
  categories?: { props: { categoryData: Category } }[]
  general_info?: string
  news?: {
    title?: string
  }[]
}
