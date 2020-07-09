const { buildSchema } = require('graphql')
const fs = require('fs')

require('dotenv').config()

const runPercyTest = process.env.PERCY === 'true'
const contentfulEnv = process.env.PROD === 'true' ? 'master' : 'staging'
const contentfulPreview = process.env.CONTENTFUL_PREVIEW === 'true'

console.log('Gatsby config:')
console.log('PROD:', process.env.PROD)
console.log('Build settings:', {
  runPercyTest,
  contentfulEnv,
  contentfulPreview,
})

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
    ...(runPercyTest ? [`gatsby-plugin-percy`] : []),
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
        accessToken: contentfulPreview
          ? process.env.CONTENTFUL_TOKEN_PREVIEW
          : process.env.CONTENTFUL_TOKEN,
        host: contentfulPreview
          ? `preview.contentful.com`
          : 'cdn.contentful.com',
        environment: contentfulEnv,
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
          const sdl = fs.readFileSync(`${__dirname}/graphSchema.sdl`).toString()
          return buildSchema(sdl)
        },
      },
    },
  ],
}
