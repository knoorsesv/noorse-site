export type BestuursType = 'deelwerking' | 'bestuursorgaan'

export interface BestuursLid {
  type: BestuursType
  title: string
  naam?: string
  email: string
}
