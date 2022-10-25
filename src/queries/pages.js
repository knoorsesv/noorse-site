import { graphql, useStaticQuery } from 'gatsby'

const pagesQuery = graphql`
  query {
    allSitePage {
      nodes {
        path
      }
    }
  }
`

export const getSiteMapForInfoPages = () => {
  const allPages = useStaticQuery(pagesQuery)

  // it should be possible to do this cleaner + query could happen outside of navbar component to keep it cleaner / dumber
  // todo: extract and unit test this
  const infoPageSiteMaps = allPages.allSitePage.nodes
    .filter((node) => node.path.includes('info'))
    .filter((node) => !node.path.includes('sponsoring'))
    .map((node) => ({
      name: node.path.replace('/info/', '').replace('/', ''),
      link: node.path,
    }))

  return infoPageSiteMaps
}
