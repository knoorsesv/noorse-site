import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../../layouts/layout'
import { marked } from 'marked'
import { graphql, useStaticQuery } from 'gatsby'

const SoccerAcademyPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Girls Soccer Academy" } }) {
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
        <title>Girls Soccer Academy</title>
      </Helmet>
      <Container>
        {content ? (
          <section
            className={'prose'}
            dangerouslySetInnerHTML={{
              __html: marked(content.body.body),
            }}
          ></section>
        ) : (
          <section>SoccerAcademy</section>
        )}
        <section className="mt-8">
          <iframe
            width="434"
            height="244"
            src="https://www.youtube.com/embed/w_LEHSCQyXk"
            title="Noorse Girls Soccer Academy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </Container>
    </Layout>
  )
}

export default SoccerAcademyPage
