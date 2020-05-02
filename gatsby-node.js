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

  const ploegen = await graphql(`
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

  ploegen.data.allContentfulPloeg.nodes.forEach((ploegNode) => {
    console.log('creating page for', ploegNode.naam)
    createPage({
      path: `/team/${ploegNode.naam.toLowerCase()}`,
      component: require.resolve(`./src/templates/ploeg-template.js`),
      context: { ploegNode },
    })
  })
}
