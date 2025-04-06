import type { Event } from '../types/event'
import type { Factory } from './factory'

const eventFactory: Factory<Event> = (attrs) => ({
  naam: '6 tegen 6',
  datum: '2023-05-07',
  ...attrs,
})

export const eventList: Event[] = [
  eventFactory(),
  eventFactory({
    naam: 'Met een einddatum',
    eindDatum: '2023-05-15',
    datum: '2023-05-07',
  }),
  eventFactory({
    naam: 'Met een aankondiging',
    aankondiging: { fields: { title: 'link naar event' } },
    datum: '2023-05-08',
  }),
]
