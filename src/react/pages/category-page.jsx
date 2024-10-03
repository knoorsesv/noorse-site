import { LinkWrapper } from '../../wrappers/link-wrapper.jsx'
import { CategoryTeamNavigation, MarkDown, Section, SubTitle } from '../index'
import { Page } from './page.jsx'

export const CategoryPage = ({ category }) => {
  if (category.categories?.length) {
    return (
      <Page title={category.naam}>
        {category.categories.map((subCategory) => {
          return (
            <section
              key={subCategory.props.categoryData.naam}
              className="mb-10 flex w-full flex-col items-center"
            >
              <SubTitle>{subCategory.props.categoryData.naam}</SubTitle>
              <CategoryContent category={subCategory.props.categoryData} />
            </section>
          )
        })}
      </Page>
    )
  }

  return (
    <Page title={category.naam}>
      <CategoryContent category={category} />
    </Page>
  )
}

const CategoryContent = ({ category }) => {
  return (
    <>
      {category?.general_info && (
        <>
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
    </>
  )
}
