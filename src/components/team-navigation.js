import { Link } from 'gatsby'
import React from 'react'

export const CategoryTeamNavigation = ({ category, header }) => {
  return (
    <section
      id="team-navigation"
      className={`bg-green-light bg-opacity-25 p-4`}
    >
      <h3 className={'w-full pb-2 border-b-2 border-black text-center'}>
        {header || category.naam}
      </h3>
      <div className={'flex flex-wrap flex-start mx-1'}>
        {category.ploeg &&
          category.ploeg
            .sort((ploeg1, ploeg2) => (ploeg1.naam > ploeg2.naam ? '1' : '-1'))
            .map((ploeg) => (
              <Link
                key={ploeg.naam}
                to={`/team/${ploeg.naam.toLowerCase()}`}
                className={'text-gray-dark underline mx-3 w-[80px]'}
              >
                {ploeg.naam}
              </Link>
            ))}
      </div>
    </section>
  )
}
