/* eslint-disable no-console */
const startOfWeek = require('date-fns/startOfWeek')
const endOfWeek = require('date-fns/endOfWeek')
const format = require('date-fns/format')
const add = require('date-fns/add')
const fs = require('fs')

let calendarConfig = JSON.parse(fs.readFileSync('data/calendar-config.json'))

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
      createPage({
        path,
        component: require.resolve(`./src/templates/team-page-template.js`),
        context: {
          teamId: staticTeamConfig?.vvId,
          contentfulPloeg,
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

  // moving end of week by a day because vv api sucks and it doesnt include matches on the endDate
  const endDayOfWeek = format(
    endOfWeek(add(new Date(), { days: 1 }), { weekStartsOn: 2 }),
    'yyyy/MM/dd'
  )
  const startDayOfWeek = format(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
    'yyyy/MM/dd'
  )

  console.log('creating kalender for days ', startDayOfWeek, endDayOfWeek)
  createPage({
    path: `/info/kalender`,
    component: require.resolve(`./src/templates/kalender.js`),
    context: {
      clubId: '8179',
      startDate: process.env.PROD === 'true' ? startDayOfWeek : '2021/08/20',
      endDate: process.env.PROD === 'true' ? endDayOfWeek : '2021/08/26',
    },
  })
}
