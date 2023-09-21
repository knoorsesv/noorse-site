import React from 'react'
import { Page } from './page.jsx'
import { SubTitle, MarkDown, CategoryTeamNavigation, Section } from '../index'

export const CategoryPage = ({ category, Link }) => {
  return (
    <Page title={category.naam}>
      {category?.general_info && (
        <>
          <SubTitle>Info</SubTitle>
          <MarkDown>{category?.general_info?.general_info}</MarkDown>
        </>
      )}

      <CategoryTeamNavigation
        category={category}
        header={'Ploegen'}
        TeamLink={({ name, ...props }) => (
          <Link
            to={`/team/${category.naam.toLowerCase()}/${name.toLowerCase()}`}
            {...props}
          >
            {name}
          </Link>
        )}
      />
      {category?.news?.length ? (
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          {category.news && (
            <ul className={'list-inside list-disc'}>
              {category.news.map((news) => (
                <li key={news.title}>
                  <Link to={`/nieuws/${news.title}`} className={'underline'}>
                    {news.title}
                  </Link>
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
