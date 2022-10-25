import React from 'react'
import Layout, { Container } from '../../layouts/layout'
import { Title } from '../../components/titles'
import { Helmet } from 'react-helmet'
import { NewsList } from '../../components/newsList'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getNewsItems } from '../../queries/news'

const NewsCardImage = ({ image }) => {
  return (
    <div className={'h-[200px] text-center'}>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={'Card Header Image'}
        loading="lazy"
      />
    </div>
  )
}

const Nieuws = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList
          NewsCardImage={NewsCardImage}
          shownNewsItems={getNewsItems()}
        />
      </Container>
    </Layout>
  )
}

export default Nieuws
