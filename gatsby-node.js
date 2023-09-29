/* eslint-disable no-console */
const fs = require('fs')

let calendarConfig = JSON.parse(fs.readFileSync('data/calendar-config.json'))
let vvData =
  process.env.PROD === 'true'
    ? JSON.parse(fs.readFileSync('data/vv-responses.json'))
    : JSON.parse(fs.readFileSync('data/test-vv-responses.json'))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const news = await graphql(`
    query {
      allContentfulNews {
        nodes {
          inhoud {
            inhoud
          }
          category {
            naam
          }
          attachment {
            description
            title
            file {
              url
              contentType
            }
            gatsbyImageData(layout: CONSTRAINED)
          }
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          blurb
          title
          publishDate(formatString: "dddd D MMMM yyyy", locale: "nl-BE")
          showImageOnPage
          createdAt(formatString: "dddd D MMMM yyyy", locale: "nl-BE")
        }
      }
    }
  `)

  const categories = await graphql(`
    query {
      allContentfulCategorie {
        nodes {
          naam
          news {
            title
          }
          ploeg {
            naam
          }
          general_info {
            id
            general_info
          }
        }
      }
    }
  `)

  const noorsePloegInfo = await graphql(`
    query {
      allContentfulPloeg {
        nodes {
          naam
          training
          coach
          afgevaardigde
          categorie {
            naam
            ploeg {
              naam
            }
          }
        }
      }
    }
  `)

  news.data.allContentfulNews.nodes.forEach((newsNode) => {
    console.log('creating news page for ', newsNode.title)
    createPage({
      path: `/nieuws/${newsNode.title}`,
      component: require.resolve(`./src/templates/news-template.js`),
      context: { newsNode },
    })
  })

  categories.data.allContentfulCategorie.nodes.forEach((categoryNode) => {
    console.log('creating category page for', categoryNode.naam)
    createPage({
      path: categoryNode.naam.toLowerCase(),
      component: require.resolve(`./src/templates/category-template.js`),
      context: { categoryNode },
    })
  })

  const teamsWithMissingConfig = []

  noorsePloegInfo.data.allContentfulPloeg.nodes.forEach((contentfulPloeg) => {
    const staticTeamConfig = calendarConfig.find(
      (config) => config.teamName === contentfulPloeg.naam
    )

    calendarConfig = calendarConfig.filter(
      (config) => config !== staticTeamConfig
    )

    console.log(
      'creating team page for',
      contentfulPloeg.naam,
      staticTeamConfig
    )

    if (
      (!staticTeamConfig?.vvId || !staticTeamConfig?.calendarId) &&
      !contentfulPloeg.naam.includes('Starters')
    ) {
      teamsWithMissingConfig.push(contentfulPloeg.naam)
    }
    const path = `/team/${contentfulPloeg.categorie.naam.toLowerCase()}/${contentfulPloeg.naam.toLowerCase()}`
    if (staticTeamConfig) {
      const teamCalendar = vvData.teamCalendar[staticTeamConfig?.vvId]
      const teamSeriesAndRankings =
        vvData.teamSeriesAndRankings[staticTeamConfig?.vvId]
      createPage({
        path,
        component: require.resolve(`./src/templates/team-page-template.js`),
        context: {
          teamId: staticTeamConfig?.vvId,
          contentfulPloeg,
          teamCalendar,
          teamSeriesAndRankings,
          googleCalId: staticTeamConfig?.calendarId,
        },
      })
    } else {
      createPage({
        path,
        component: require.resolve(
          `./src/templates/team-page-no-vv-template.js`
        ),
        context: {
          contentfulPloeg,
        },
      })
    }
  })

  if (
    process.env.PROD !== 'true' &&
    process.env.CONTENTFUL_ENV === 'master' &&
    calendarConfig.length > 0
  ) {
    throw new Error(
      `No matching teams for static config ${JSON.stringify(calendarConfig)}`
    )
  }

  if (process.env.PROD !== 'true' && teamsWithMissingConfig.length > 0) {
    throw new Error(
      `Config is not correct for ${JSON.stringify(teamsWithMissingConfig)}`
    )
  }

  const clubMatchesAssignations = vvData.clubMatchesAssignations

  console.log('creating kalender')
  createPage({
    path: `/info/kalender`,
    component: require.resolve(`./src/templates/kalender.js`),
    context: {
      clubMatchesAssignations,
    },
  })
}
