import React from 'react'
import Layout, { Container } from '../layouts/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'
import { CategoryTeamNavigation } from '../components/team-navigation'
import { Section } from '../components/layout/section'
import { Helmet } from 'react-helmet'

const CategoryPage = ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{categoryNode.naam}</title>
      </Helmet>
      <Container>
        <Title>{categoryNode.naam}</Title>

        <CategoryTeamNavigation
          category={categoryNode}
          header={'Ploegen'}
          TeamLink={({ name, ...props }) => (
            <Link to={`/team/${name.toLowerCase()}`} {...props}>
              {name}
            </Link>
          )}
        />
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          {categoryNode.news && (
            <ul className={'list-inside list-disc'}>
              {categoryNode.news.map((news) => (
                <li key={news.title}>
                  <Link to={`/nieuws/${news.title}`} className={'underline'}>
                    {news.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default CategoryPage
