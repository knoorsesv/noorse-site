import { format, parseISO } from 'date-fns'
import { sanitizeTeamName } from '../utils/formatting'
import type { FC } from 'react'

interface Team {
  name: string
}

interface Game {
  startTime: string
  startDate: string
  id: string
  homeTeam: Team
  awayTeam: Team
  outcome: {
    homeTeamGoals: number
    awayTeamGoals: number
    status: string
  }
}

export const GameTable: FC<{ games: Game[] }> = ({ games }) => {
  function formatTeamName(team: Team) {
    return team.name.toLowerCase().includes('noorse')
      ? 'Noorse'
      : sanitizeTeamName(team.name)
  }

  function notCancelled(game: Game) {
    return game.outcome.status !== 'postponed'
  }

  function gameSort(a: Game, b: Game) {
    if (a.startDate > b.startDate) {
      return 1
    }
    if (a.startDate === b.startDate) {
      return 0
    }
    return -1
  }

  const gamesToShow = games.filter(notCancelled).sort(gameSort)

  return (
    <table
      className={
        'large:max-w-4/5 w-full table-fixed border-separate px-2 text-sm medium:px-16'
      }
    >
      <tbody>
        {gamesToShow.map((game) => {
          const parsedDate = parseISO(game.startTime)
          const formattedDate = format(parsedDate, 'dd/MM')
          const time = format(parsedDate, 'HH:mm')
          return (
            <tr key={game.id} className={'pb-1'}>
              <td className={'w-2/12 text-sm'}>
                <div>{formattedDate}</div>
                <div>{time}</div>
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
