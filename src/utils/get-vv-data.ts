import vvData from '../../data/vv-responses.json'
import testVvData from '../../data/test-vv-responses.json'
import calendarConfig from '../../data/calendar-config.json'
import testCalendarConfig from '../../data/test-calendar-config.json'
import type { Game } from '../react/types/game'
import type { Series } from '../react/types/series'
import type { Ranking } from '../react/types/rankings'

interface VvData {
  teamSeriesAndRankings: Record<
    string,
    {
      series?: Series[]
      rankings: Ranking[] | undefined | null
      __typename: string
    } | null
  >
  teamCalendar: Record<string, Game[]>
}

interface CalendarConfig {
  calendarId: string
  category?: string
  teamName: string
  vvId: string
  vvName: string
}

export const getVvData = (env: 'test' | 'master'): VvData => {
  return env === 'test' ? testVvData : vvData
}
export const getCalendarConfig = (env: 'test' | 'master'): CalendarConfig[] => {
  return env === 'test' ? testCalendarConfig : calendarConfig
}
