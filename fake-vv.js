const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const casual = require('casual')

// const typeDefs = require('./graphSchema.sdl')
// console.log(typeDefs)

const resolvers = {
  Query: {
    clubTeams: () => [{ name: 'Eerste Elftallen', id: 1 }],
    teamCalendar: () => [{ id: casual.id, startDate: '2020-08-10T16:00' }],
    teamSeriesAndRankings: () => ({ series: [], rankings: [] }),
    clubMatchesAssignations: () =>
      [...new Array(10)].map((obj, i) => ({
        id: i + 1,
        startDate: `2020-08-${10 + Math.round(i / 2)}T16:00`,
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
  console.log(`🚀 Server ready at ${url}`)
})
