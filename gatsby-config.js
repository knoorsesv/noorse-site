require('dotenv').config()

const contentfulEnv =
  process.env.CONTENTFUL_ENV ||
  (process.env.PROD === 'true' ? 'master' : 'staging')

const contentfulPreview = process.env.CONTENTFUL_PREVIEW === 'true'
const accessToken = contentfulPreview
  ? process.env.CONTENTFUL_TOKEN_PREVIEW
  : process.env.CONTENTFUL_TOKEN

const env = process.env.NODE_ENV
const spaceId = process.env.CONTENTFUL_SPACE_ID

// eslint-disable-next-line no-console
console.log('Build settings:', {
  env,
  spaceId,
  contentfulEnv,
  contentfulPreview,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
  ],
}
