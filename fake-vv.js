const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    teamCalendar(teamId: ID!, language: Lang): [MatchDetail]
    clubTeams(clubId: Int, language: Lang): [Team]
    clubMatchesAssignations(
      clubId: ID!
      language: Lang
      startDate: String
      endDate: String
      hasLocation: Boolean
    ): [MatchDetail]
    teamSeriesAndRankings(teamId: ID!, language: Lang): SeriesAndRankings
  }

  type SeriesAndRankings {
    series: [Series]
    rankings: [Ranking]
  }

  type Ranking {
    id: String
    name: String
    rankings: [RankingEntry]
  }

  type RankingEntry {
    teams: [RankingTeam]
  }

  type RankingTeam {
    name: String
    position: Int
    points: Int
  }

  type Series {
    serieId: String
    name: String
  }

  type MatchDetail {
    id: String
    startDate: String
    title: String
    homeTeam: Team
    awayTeam: Team
    outcome: Outcome
  }

  type Outcome {
    status: String
    homeTeamGoals: Int
    awayTeamGoals: Int
  }

  type Team {
    name: String
    id: String
  }

  enum Lang {
    nl
  }
`

const resolvers = {
  Query: {
    clubTeams: () => [{ name: 'Eerste Elftallen', id: 1 }],
    teamCalendar: () => [{ id: 1, startDate: '2020-08-10T16:00' }],
    teamSeriesAndRankings: () => ({ series: [], rankings: [] }),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mockEntireSchema: false,
  mocks: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
