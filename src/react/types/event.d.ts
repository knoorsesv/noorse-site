export interface Event {
  naam: string
  datum: string
  eindDatum?: string
  aankondiging?: {
    fields: {
      title: string
    }
  }
}
