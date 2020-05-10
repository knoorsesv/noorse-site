exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const news = await graphql(`
    query {
      allContentfulNews {
        nodes {
          body {
            json
          }
          title
          updatedAt(formatString: "DD MMMM YYYY")
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
            blurb
          }
          ploeg {
            naam
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
    console.log('creating page for ', newsNode.title)
    createPage({
      path: `/nieuws/${newsNode.title}`,
      component: require.resolve(`./src/templates/news-template.js`),
      context: { newsNode },
    })
  })

  categories.data.allContentfulCategorie.nodes.forEach((categoryNode) => {
    console.log('creating page for', categoryNode.naam)
    createPage({
      path: categoryNode.naam.toLowerCase(),
      component: require.resolve(`./src/templates/category-template.js`),
      context: { categoryNode },
    })
  })

  vvTeams.data.vv.clubTeams.forEach((team) => {
    const noorseInfo = noorsePloegInfo.data.allContentfulPloeg.nodes.find(
      (ploeg) => ploeg.naam === noorseVVMapping[team.name]
    )
    if (noorseInfo) {
      console.log('creating page for', team.name, team.id)
      createPage({
        path: `/team/${team.name.toLowerCase()}`,
        component: require.resolve(`./src/templates/ploeg-template.js`),
        context: { team, teamId: team.id, noorseInfo },
      })
    }
  })
}
//todo: move mapping to contentful?
const noorseVVMapping = {
  'Eerste Elftallen A': 'Noorse 1',
}
