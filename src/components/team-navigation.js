import { Link } from 'gatsby'
import React from 'react'

export const CategoryTeamNavigation = ({ category, header }) => {
  return (
    <section
      id="team-navigation"
      className={`bg-green-light bg-opacity-25 p-4`}
    >
      <h3 className={'w-full border-b-2 border-black pb-2 text-center'}>
        {header || category.naam}
      </h3>
      <div className={'flex-start mx-1 flex flex-wrap'}>
        {category.ploeg &&
          category.ploeg
            .sort((ploeg1, ploeg2) => (ploeg1.naam > ploeg2.naam ? '1' : '-1'))
            .map((ploeg) => (
              <Link
                key={ploeg.naam}
                to={`/team/${ploeg.naam.toLowerCase()}`}
                className={'mx-3 w-[80px] text-gray-dark underline'}
              >
                {ploeg.naam}
              </Link>
            ))}
      </div>
    </section>
  )
}
