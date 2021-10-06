import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql } from 'gatsby'
import { ExternalLink } from '../components/text'
import { CategoryTeamNavigation } from '../components/team-navigation'
import Helmet from 'react-helmet'
import { CalendarTable } from '../components/game-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

export const query = graphql`
  query($teamId: ID!) {
    vv {
      teamCalendar(teamId: $teamId, language: nl) {
        id
        startDate
        homeTeam {
          name
        }
        awayTeam {
          name
        }
        outcome {
          status
          homeTeamGoals
          awayTeamGoals
        }
      }
      teamSeriesAndRankings(teamId: $teamId, language: nl) {
        series {
          serieId
          name
        }
      }
    }
  }
`

const TeamPage = ({ pageContext: { contentfulPloeg, googleCalId }, data }) => {
  if (process.env.GATSBY_VV_TEST_DATA === 'on') {
    // setting some dummy data here because this info will naturally change and break tests, and this is easier than mocking the graphql api
    data.vv.teamCalendar = [
      {
        id: 3,
        awayTeam: { name: 'S.V. NOORSE' },
        homeTeam: { name: 'KSK EKEREN DONK' },
        outcome: {
          status: 'planned',
          homeTeamGoals: null,
          awayTeamGoals: null,
        },
        startDate: '2020-08-10T16:00',
      },
      {
        id: 2,
        homeTeam: { name: 'S.V. NOORSE' },
        awayTeam: { name: 'KSK EKEREN DONK' },
        outcome: { status: 'finished', homeTeamGoals: 2, awayTeamGoals: 1 },
        startDate: '2020-08-09T16:00',
      },
      {
        id: 1,
        homeTeam: { name: 'S.V. NOORSE' },
        awayTeam: { name: 'KSK EKEREN DONK' },
        outcome: {
          status: 'postponed',
          homeTeamGoals: null,
          awayTeamGoals: null,
        },
        startDate: '2020-08-08T16:00',
      },
    ]
  }

  return (
    <Layout>
      <Helmet>
        <title>{contentfulPloeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{contentfulPloeg.naam}</Title>

        <div className={'flex flex-col lg:grid lg:grid-cols-3'}>
          <div className={'flex flex-col lg:grid-col-1'}>
            <div className={'flex flex-col items-center'}>
              {contentfulPloeg.coach && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>
                    Coach{contentfulPloeg.coach.length > 1 ? 'es' : ''}
                  </SubTitle>
                  {contentfulPloeg.coach.map((coach) => (
                    <span key={coach}>{coach}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
              {contentfulPloeg.afgevaardigde && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>
                    Afgevaardigde
                    {contentfulPloeg.afgevaardigde.length > 1 ? 'n' : ''}
                  </SubTitle>
                  {contentfulPloeg.afgevaardigde.map((afgevaardigde) => (
                    <span key={afgevaardigde}>{afgevaardigde}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
              {contentfulPloeg.training && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>Training</SubTitle>
                  {contentfulPloeg.training.map((training) => (
                    <span key={training}> {training}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />

              {data.vv && data.vv.teamSeriesAndRankings && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>Reeks</SubTitle>
                  {data.vv.teamSeriesAndRankings.series.map((series) => (
                    <ExternalLink
                      key={series.name}
                      url={`https://www.voetbalvlaanderen.be/competitie/${series.serieId}/rangschikking`}
                    >
                      {' '}
                      {series.name}
                    </ExternalLink>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
              <div className={'my-6'}>
                <ExternalLink
                  url={`https://calendar.google.com/calendar/u/0/r?cid=${googleCalId}`}
                  altText={'Google Calendar'}
                  styled={false}
                  icon={false}
                >
                  <div className={'flex flex-row items-center underline'}>
                    <FontAwesomeIcon size="1x" icon={faCalendarPlus} />
                    <span className={'ml-2'}>Google Calendar</span>
                  </div>
                </ExternalLink>
              </div>
            </div>
          </div>
          {data.vv && data.vv.teamCalendar && (
            <section className={'mt-6 lg:mt-0 lg:col-span-2'}>
              <SubTitle>Kalender</SubTitle>
              <CalendarTable calendar={data.vv.teamCalendar} />
            </section>
          )}
        </div>

        <CategoryTeamNavigation category={contentfulPloeg.categorie} />
      </Container>
    </Layout>
  )
}

export default TeamPage
