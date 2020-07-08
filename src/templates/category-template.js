import React from 'react'
import Layout, { Container } from '../components/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <Container>
        <Title>{categoryNode.naam}</Title>
        <div className={'grid grid-cols-3'}>
          <div className={'col-span-1 flex flex-col'}>
            <SubTitle>Nieuws</SubTitle>
            {categoryNode.news && (
              <ul className={'list-disc'}>
                {categoryNode.news.map((news) => (
                  <li key={news.title}>
                    <Link to={`/nieuws/${news.title}`} className={'underline'}>
                      {news.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={'col-span-2 flex flex-col'}>
            <SubTitle>Ploegen</SubTitle>
            {categoryNode.ploeg &&
            categoryNode.ploeg.map((ploeg) => (
              <Link
                key={ploeg.naam}
                to={`/team/${ploeg.naam.toLowerCase()}`}
                className={'underline'}
              >
                {ploeg.naam}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
