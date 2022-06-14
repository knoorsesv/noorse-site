const startOfWeek = require('date-fns/startOfWeek')
const endOfWeek = require('date-fns/endOfWeek')
const format = require('date-fns/format')
const add = require('date-fns/add')
const fs = require('fs')

const calendarConfig = JSON.parse(fs.readFileSync('data/calendar-config.json'))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const news = await graphql(`
    query {
      allContentfulNews {
        nodes {
          body {
            raw
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
            naamOpVoetbalVlaanderen
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
          naamOpVoetbalVlaanderen
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

  const vvTeams = await graphql(`
    query {
      vv {
        clubTeams(clubId: 8179, language: nl) {
          name
          id
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

  console.log('teams op vv', vvTeams.data.vv.clubTeams)

  noorsePloegInfo.data.allContentfulPloeg.nodes.forEach((contentfulPloeg) => {
    const vvInfo = vvTeams.data.vv.clubTeams?.find((vvTeam) => {
      console.log(
        'matching ',
        vvTeam.name,
        contentfulPloeg.naamOpVoetbalVlaanderen,
        contentfulPloeg.naam
      )
      return (
        (contentfulPloeg.naamOpVoetbalVlaanderen || contentfulPloeg.naam) ===
        vvTeam.name
      )
    })
    const googleCalConfig = calendarConfig.find(
      (config) => config.teamName === contentfulPloeg.naam
    )
    console.log(
      'creating team page for',
      contentfulPloeg.naam,
      // contentfulPloeg.naamOpVoetbalVlaanderen,
      vvInfo
      // googleCalConfig
    )
    createPage({
      path: `/team/${contentfulPloeg.naam.toLowerCase()}`,
      component: require.resolve(`./src/templates/team-page-template.js`),
      context: {
        vvInfo,
        teamId: vvInfo ? vvInfo.id : 'none',
        contentfulPloeg,
        googleCalId: googleCalConfig && googleCalConfig.calendarId,
      },
    })
  })

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
