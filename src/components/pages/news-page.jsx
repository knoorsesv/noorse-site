import React from 'react'
import { Helmet } from 'react-helmet'
import { NewsList, Title } from '../../components'
import { Container } from '../../components/layout'

export const NewsPage = ({ newsItems, fallBackLogo }) => {
  return (
    <>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList fallBackLogo={fallBackLogo} shownNewsItems={newsItems} />
      </Container>
    </>
  )
}
