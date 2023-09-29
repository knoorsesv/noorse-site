const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
// todo: this setup is entirely too cumbersome, so just replacing it with a periodic update-vv-data script , this is deprecated
const resolvers = {
  Query: {
    clubTeams: () => [{ name: 'Eerste Elftallen', id: 1 }],
    teamCalendar: () =>
      [...new Array(20)].map((obj, i) => ({
        id: i,
        title: 'Competitie',
        // startDate: `2020-08-${i + 10}T16:00`,
        startTime: `2020-08-${i + 10}T16:00`,
        homeTeam: { name: i % 2 === 1 ? 'Noorse' : 'Tegenstander' },
        awayTeam: { name: i % 2 === 0 ? 'Noorse' : 'Tegenstander' },
        outcome: {
          homeTeamGoals: i % 3,
          awayTeamGoals: i % 4,
          status: i < 10 ? 'finished' : 'else',
        },
      })),
    teamSeriesAndRankings: () => ({
      series: [
        { serieId: 'CHP_98714', name: '4 PROV. A' },
        { serieId: 'ELSE', name: 'Beker V Antwerpen' },
      ],
      rankings: [
        {
          name: 'Beker v vanalles',
        },
        {
          name: '4 PROV. A',
          rankings: [
            {
              teams: [...new Array(18)].map((obj, i) => ({
                position: i + 1,
                points: (18 - i) * 3,
                name: i === 10 ? 'Noorse' : `Ploeg ${i + 1}`,
              })),
            },
          ],
        },
      ],
    }),
    clubMatchesAssignations: () =>
      [...new Array(10)].map((obj, i) => ({
        id: i + 1,
        // startDate: `2020-08-${10 + Math.round(i / 2)}T16:00`,
        startTime: `2020-08-${10 + Math.round(i / 2)}T16:00`,
        title: `Noorse U${i + 8} Jeugd Reeks`,
        homeTeam: { name: 'Noorse Jeugd' },
        awayTeam: { name: 'Andere prutsers fc' },
      })),
  },
}

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname.concat('/graphSchema.sdl'), 'utf8')),
  resolvers,
  mockEntireSchema: false,
  mocks: true,
})

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`)
})
