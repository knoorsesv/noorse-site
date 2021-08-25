// import startOfWeek from 'date-fns/startOfWeek'
// import endOfWeek from 'date-fns/endOfWeek'
// import { format } from 'date-fns'

const startOfWeek = require('date-fns/startOfWeek')
const endOfWeek = require('date-fns/endOfWeek')
const format = require('date-fns/format')

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
          }
          image {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
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

  // const infoPages = await graphql(`
  //   query {
  //     allContentfulPage {
  //       nodes {
  //         title
  //         content {
  //           raw
  //         }
  //         attachment {
  //           description
  //           title
  //           file {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  news.data.allContentfulNews.nodes.forEach((newsNode) => {
    console.log('creating news page for ', newsNode.title)
    createPage({
      path: `/nieuws/${newsNode.title}`,
      component: require.resolve(`./src/templates/news-template.js`),
      context: { newsNode },
    })
  })

  // infoPages.data.allContentfulPage.nodes.forEach((infoPage) => {
  //   console.log('creating info page for ', infoPage.title)
  //   createPage({
  //     path: `/info/${infoPage.title}`,
  //     component: require.resolve(`./src/templates/info-page-template.js`),
  //     context: { infoPage },
  //   })
  // })

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
    const vvInfo = vvTeams.data.vv.clubTeams.find(
      (vvTeam) =>
        (contentfulPloeg.naamOpVoetbalVlaanderen || contentfulPloeg.naam) ===
        vvTeam.name
    )
    console.log(
      'creating team page for',
      contentfulPloeg.naam,
      contentfulPloeg.naamOpVoetbalVlaanderen,
      vvInfo && vvInfo.id
    )
    createPage({
      path: `/team/${contentfulPloeg.naam.toLowerCase()}`,
      component: require.resolve(`./src/templates/team-page-template.js`),
      context: { vvInfo, teamId: vvInfo ? vvInfo.id : 'none', contentfulPloeg },
    })
  })

  createPage({
    path: `/info/kalender`,
    component: require.resolve(`./src/templates/kalender.js`),
    context: {
      clubId: '8179',
      startDate: format(
        startOfWeek(new Date(), { weekStartsOn: 1 }),
        'yyyy/MM/dd'
      ),
      // moving end of week by a day because vv api sucks and it doesnt include matches on the endDate
      endDate: format(endOfWeek(new Date(), { weekStartsOn: 2 }), 'yyyy/MM/dd'),
    },
  })
}
