import React from 'react'
import { LinkWrapper } from '../wrappers/link-wrapper.jsx'

// todo: dees is echt lelijk
export const CategoryTeamNavigation = ({ category, header }) => {
  // console.log('category', category)
  if (!category?.ploeg?.length) {
    return <></>
  }

  return (
    <nav
      aria-labelledby="team-navigation"
      className={`bg-green-light bg-opacity-25 p-4`}
    >
      <h3
        id="team-navigation"
        className={'w-full border-b-2 border-black pb-2 text-center'}
      >
        {header || category.naam}
      </h3>
      <div className={'flex-start mx-1 flex flex-wrap'}>
        {category.ploeg &&
          category.ploeg
            .sort((ploeg1, ploeg2) => (ploeg1.naam > ploeg2.naam ? '1' : '-1'))
            .map((ploeg) => (
              <LinkWrapper
                key={ploeg.naam}
                href={`/team/${category.naam.toLowerCase()}/${ploeg.naam.toLowerCase()}`}
                className={'mx-3 w-[80px] text-gray-dark underline'}
              >
                {ploeg.naam}
              </LinkWrapper>
            ))}
      </div>
    </nav>
  )
}
