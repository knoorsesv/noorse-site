import { format, parseISO } from 'date-fns'
import React from 'react'
import { sanitizeTeamName } from '../utils/formatting'

export function CalendarTable({ calendar }) {
  function formatTeamName(team) {
    return team.name.toLowerCase().includes('noorse')
      ? 'Noorse'
      : sanitizeTeamName(team.name)
  }

  function notCancelled(game) {
    return game.outcome.status !== 'postponed'
  }

  function gameSort(a, b) {
    if (a.startDate > b.startDate) {
      return 1
    }
    if (a.startDate === b.startDate) {
      return 0
    }
    return -1
  }

  return (
    <table className={'w-full table-fixed border-separate text-sm px-2 medium:px-16 large:max-w-4/5'}>
      <tbody>
        {calendar
          .filter(notCancelled)
          .sort(gameSort)
          .map((game) => {
            const parsedDate = parseISO(game.startDate)
            game.formattedDate = format(parsedDate, 'dd/MM')
            game.time = format(parsedDate, 'HH:mm')
            return (
              <tr key={game.id} className={'pb-1'}>
                <td className={'text-sm w-2/12'}>
                  <div>{game.formattedDate}</div>
                  <div>{game.time}</div>
                </td>
                <td className={'w-7/12 px-0'}>
                  <div className={'flex flex-col'}>
                    <span className={'truncate'}>
                      {formatTeamName(game.homeTeam)}
                    </span>
                    <span className={'truncate'}>
                      {formatTeamName(game.awayTeam)}
                    </span>
                  </div>
                </td>
                <td className={'w-1/12 px-1 text-center'}>
                  {game.outcome.status === 'finished' ? (
                    <div className={'flex flex-col items-center'}>
                      <span>{game.outcome.homeTeamGoals}</span>
                      <span>{game.outcome.awayTeamGoals}</span>
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
