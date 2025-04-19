import { Helmet } from 'react-helmet'
import { NewsList, Title } from '../index'
import { Container } from '../layout'
import type { FC } from 'react'
import type { NewsItem } from '../types/news'

export const NewsPage: FC<{ newsItems: NewsItem[] }> = ({ newsItems }) => {
  // todo: should this not use Page
  return (
    <>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList shownNewsItems={newsItems} />
      </Container>
    </>
  )
}
