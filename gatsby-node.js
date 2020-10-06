exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const news = await graphql(`
    query {
      allContentfulNews {
        nodes {
          body {
            json
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
          title
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
    const vvInfo = vvTeams.data.vv.clubTeams.find(
      (vvTeam) => contentfulPloeg.naamOpVoetbalVlaanderen === vvTeam.name
    )
    console.log(
      'creating team page for',
      contentfulPloeg.naam,
      contentfulPloeg.naamOpVoetbalVlaanderen,
      vvInfo && vvInfo.id
    )
    createPage({
      path: `/team/${contentfulPloeg.naam.toLowerCase()}`,
      component: require.resolve(`./src/templates/ploeg-template.js`),
      context: { vvInfo, teamId: vvInfo ? vvInfo.id : 'none', contentfulPloeg },
    })
  })
}
