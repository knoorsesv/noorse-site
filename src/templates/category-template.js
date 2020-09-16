import React from 'react'
import Layout, { Container } from '../components/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'
import { Section } from '../pages'
import { CategoryTeamNavigation } from '../components/teamNavigation'

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <Container>
        <Title>{categoryNode.naam}</Title>

        <CategoryTeamNavigation category={categoryNode} header={'Ploegen'} />
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          {categoryNode.news && (
            <ul className={'list-disc list-inside'}>
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
