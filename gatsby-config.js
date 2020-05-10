const { buildSchema } = require('graphql')
const fs = require('fs')
module.exports = {
  siteMetadata: {
    title: `K. Noorse S.V.`,
    description: `Al het laatste nieuws over voetbalvereniging Noorse uit Kapellen.`,
    author: `@gvdp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u0xs2v9mjzql`,
        //todo: make this a secret
        accessToken: `cZoDsy5n81N1MjmN3Xbld2-joHP_Xbo6h8BwaUEDhCE`,
        host: `preview.contentful.com`,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'VV',
        // This is the field under which it's accessible
        fieldName: 'vv',
        // URL to query from
        url: 'https://datalake-prod2018.rbfa.be/graphql',
        createSchema: async () => {
          const sdl = fs
            .readFileSync(`${__dirname}/calendarSchema.sdl`)
            .toString()
          return buildSchema(sdl)
        },
      },
    },
  ],
}
