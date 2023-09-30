import React from 'react'
import { LinkWrapper } from '../../wrappers/link-wrapper.jsx'
import { CategoryTeamNavigation, MarkDown, Section, SubTitle } from '../index'
import { Page } from './page.jsx'

export const CategoryPage = ({ category }) => {
  // console.log('category', category)
  return (
    <Page title={category.naam}>
      {category?.general_info && (
        <>
          <SubTitle>Info</SubTitle>
          <MarkDown>{category.general_info}</MarkDown>
        </>
      )}

      <CategoryTeamNavigation category={category} header={'Ploegen'} />
      {category?.news?.length ? (
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          {category.news && (
            <ul className={'list-inside list-disc'}>
              {category.news.map((news) => (
                <li key={news.title}>
                  <LinkWrapper
                    href={`/nieuws/${news.title
                      .replace('/', '-')
                      .toLowerCase()}`}
                    className={'underline'}
                  >
                    {news.title}
                  </LinkWrapper>
                </li>
              ))}
            </ul>
          )}
        </Section>
      ) : (
        <></>
      )}
    </Page>
  )
}
