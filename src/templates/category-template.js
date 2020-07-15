import React from 'react'
import Layout, { Container } from '../components/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'
import { Section } from '../pages'

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <Container>
        <Title>{categoryNode.naam}</Title>
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Ploegen</SubTitle>
          {categoryNode.ploeg && (
            <div className={'flex flex-wrap justify-around'}>
              {categoryNode.ploeg.map((ploeg) => (
                <Link
                  key={ploeg.naam}
                  to={`/team/${ploeg.naam.toLowerCase()}`}
                  className={'underline mx-3'}
                >
                  {ploeg.naam}
                </Link>
              ))}
            </div>
          )}
        </Section>
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
