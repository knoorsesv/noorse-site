import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../../layouts/layout'
import { marked } from 'marked'
import { graphql, useStaticQuery } from 'gatsby'
import { getGroepsFotoData } from '../../queries/meisjes-groepsfoto'
import { GatsbyImage } from 'gatsby-plugin-image'

const MeisjesvoetbalPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Meisjesvoetbal" } }) {
        nodes {
          body {
            id
            body
          }
        }
      }
    }
  `)

  const content = data.allContentfulPage.nodes[0]
  return (
    <Layout>
      <Helmet>
        <title>Meisjesvoetbal</title>
      </Helmet>
      <Container>
        <GatsbyImage
          image={getGroepsFotoData()}
          alt={'Groepsfoto Noorse Meisjes'}
          loading={'eager'}
          objectFit="cover"
          objectPosition="center"
        />
        {content ? (
          <section
            className={'prose mt-8'}
            dangerouslySetInnerHTML={{
              __html: marked(content.body.body),
            }}
          ></section>
        ) : (
          <section>Meisjesvoetbal</section>
        )}
      </Container>
    </Layout>
  )
}

export default MeisjesvoetbalPage
