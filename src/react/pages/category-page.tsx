import type { FC } from 'react'
import { LinkWrapper } from '../../wrappers/link-wrapper.tsx'
import { CategoryTeamNavigation, MarkDown, Section, SubTitle } from '../index'
import type { Category } from '../types/category.ts'
import { Page } from './page.jsx'
import type { Team } from '../types/team'
import type { NewsItem } from '../types/news'

export const CategoryPage: FC<{
  category: Category
  teams: Team[]
  newsItems: NewsItem[]
}> = ({ category, teams, newsItems }) => {
  // if (category.categories?.length) {
  //   return (
  //     <Page title={category.naam}>
  //       {category.categories.map((subCategory) => {
  //         return (
  //           <section
  //             key={subCategory.props?.categoryData.naam}
  //             className="mb-10 flex w-full flex-col items-center"
  //           >
  //             <SubTitle>{subCategory.props?.categoryData.naam}</SubTitle>
  //             <CategoryContent category={subCategory.props?.categoryData} />
  //           </section>
  //         )
  //       })}
  //     </Page>
  //   )
  // }

  return (
    <Page title={category.name}>
      <CategoryContent
        category={category}
        teams={teams}
        newsItems={newsItems}
      />
    </Page>
  )
}

export const CategoryContent: FC<{
  category: Category
  teams: Team[]
  newsItems: NewsItem[]
}> = ({ category, teams, newsItems }) => {
  return (
    <>
      {category?.general_info && (
        <>
          <MarkDown content={category.general_info} />
        </>
      )}

      <CategoryTeamNavigation
        categoryName={category.name}
        teams={teams}
        header={'Ploegen'}
      />
      {newsItems.length ? (
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          <ul className={'list-inside list-disc'}>
            {newsItems.map((news) => (
              <li key={news.title}>
                <LinkWrapper
                  href={`/nieuws/${news.title
                    ?.replace('/', '-')
                    .toLowerCase()}`}
                  className={'underline'}
                >
                  {news.title}
                </LinkWrapper>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <></>
      )}
    </>
  )
}
