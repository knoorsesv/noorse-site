module.exports = {
  siteMetadata: {
    title: `K. Noorse S.V.`,
    description: `Al het laatste nieuws over voetbalvereniging Noorse uit Kapellen.`,
    author: `@gvdp`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u0xs2v9mjzql`,
//todo: make this a secret
        accessToken: `eyvTt4BuTrpGkjybtK46eXZKdiwUtnwvma1nfyKSaGc`,
      },
    }
  ],
}
