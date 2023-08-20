import React from 'react'

export const CategoryTeamNavigation = ({ category, header, TeamLink }) => {
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
              <TeamLink
                key={ploeg.naam}
                name={ploeg.naam}
                className={'mx-3 w-[80px] text-gray-dark underline'}
              />
            ))}
      </div>
    </nav>
  )
}
