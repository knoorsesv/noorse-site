exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
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
  console.log(JSON.stringify(result, null, 4))

  result.data.allContentfulNews.nodes.forEach((newPageNode) => {
    console.log(newPageNode.title)
    createPage({
      path: `/nieuws/${newPageNode.title}`,
      component: require.resolve(`./src/templates/news-template.js`),
      context: { newPageNode },
    })
  })
}