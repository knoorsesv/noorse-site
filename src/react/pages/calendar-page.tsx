import { format, parseISO } from 'date-fns'
import { nlBE } from 'date-fns/locale'
import React, { type FC } from 'react'
import { Helmet } from 'react-helmet'
import { sanitizeTeamName } from '../../utils/formatting'
import { SubTitle, Title } from '../index'
import { Container } from '../layout'
import type { Game } from '../types/game'

export const CalendarPage: FC<{ games: Game[] }> = ({ games }) => {
  const day = (date: string) => {
    return format(parseISO(date), 'eeeeee', { locale: nlBE })
  }
  const date = (date: string) => {
    return format(parseISO(date), 'dd/MM', { locale: nlBE })
  }

  const hour = (date: string) => {
    return format(parseISO(date), 'HH:mm', { locale: nlBE })
  }

  function dateDiffersFromPreviousGame(index: number, game: Game) {
    return (
      index === 0 || date(game.startTime) !== date(games[index - 1].startTime)
    )
  }

  return (
    <>
      <Helmet>
        <title>Kalender</title>
      </Helmet>
      <Container>
        <Title>Kalender</Title>
        <SubTitle>Wedstrijden deze week</SubTitle>
        <section
          className={
            'min-w-[75vw] large:w-[75vw] large:min-w-0 large:max-w-full'
          }
        >
          <ul className={'list-none'}>
            {/* todo: use game table component here */}
            {games.map((game, index) => {
              return (
                <React.Fragment key={game.id}>
                  {dateDiffersFromPreviousGame(index, game) ? (
                    <li className={''} key={`date-${game.id}`}>
                      <span className={'border-none font-bold underline'}>
                        {day(game.startTime)} {date(game.startTime)}
                      </span>
                    </li>
                  ) : (
                    <></>
                  )}

                  <li
                    key={game.id}
                    className={
                      'align-start flex w-full justify-between border-b border-gray py-1'
                    }
                  >
                    <div className={'medium:my-1 large:w-1/12'}>
                      {hour(game.startTime)}
                    </div>
                    <div
                      className={
                        'flex w-3/4 flex-col large:w-11/12 large:flex-row'
                      }
                    >
                      <div
                        className={
                          'underline medium:my-1 large:my-0 large:w-1/4'
                        }
                      >
                        {game.title}
                      </div>
                      <div
                        className={
                          'flex flex-col medium:flex-row medium:justify-between large:w-3/4'
                        }
                      >
                        <div className={'medium:w-2/5'}>
                          {game.homeTeam.name &&
                            sanitizeTeamName(game.homeTeam.name)}
                        </div>
                        <div className={'hidden px-2 medium:block'}>
                          <span>-</span>
                        </div>
                        <div className={'medium:w-2/5'}>
                          {game.awayTeam.name &&
                            sanitizeTeamName(game.awayTeam.name)}
                        </div>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </section>
      </Container>
    </>
  )
}
