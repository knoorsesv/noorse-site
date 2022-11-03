const { buildSchema } = require('graphql')
const fs = require('fs')

require('dotenv').config()

const contentfulEnv =
  process.env.CONTENTFUL_ENV ||
  (process.env.PROD === 'true' ? 'master' : 'staging')
const fakeVV = process.env.PROD !== 'true' && process.env.REAL_VV !== 'true'

const contentfulPreview = process.env.CONTENTFUL_PREVIEW === 'true'
const accessToken = contentfulPreview
  ? process.env.CONTENTFUL_TOKEN_PREVIEW
  : process.env.CONTENTFUL_TOKEN

const env = process.env.NODE_ENV
const spaceId = process.env.CONTENTFUL_SPACE_ID
console.log('Build settings:', {
  env,
  spaceId,
  contentfulEnv,
  contentfulPreview,
  fakeVV,
})

module.exports = {
  siteMetadata: {
    title: `K. Noorse S.V.`,
    description: `Al het laatste nieuws over voetbalvereniging Noorse uit Kapellen.`,
    author: `@gvdp`,
    version:
      process.env.PROD === 'true' ? process.env.npm_package_version : '0.dev',
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-pnpm',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          // breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
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
        spaceId,
        accessToken,
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
        url: fakeVV
          ? 'http://localhost:4000'
          : 'https://datalake-prod2018.rbfa.be/graphql',
        createSchema: async () => {
          const sdl = fs.readFileSync(`${__dirname}/graphSchema.sdl`).toString()
          return buildSchema(sdl)
        },
      },
    },
  ],
}
