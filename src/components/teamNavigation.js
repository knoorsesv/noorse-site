import { Link } from 'gatsby'
import React from 'react'

export const CategoryTeamNavigation = ({ category, header }) => {
  return (
    <div className={`bg-green-light bg-opacity-25 p-4`}>
      <h3 className={'w-full pb-2 border-b-2 border-black text-center'}>
        {header || category.naam}
      </h3>
      <div className={'flex flex-wrap justify-around mx-1'}>
        {category.ploeg.map((ploeg) => (
          <Link
            key={ploeg.naam}
            to={`/team/${ploeg.naam.toLowerCase()}`}
            activeClassName={'font-bold'}
            className={'text-gray-dark underline'}
          >
            {ploeg.naam}
          </Link>
        ))}
      </div>
    </div>
  )
}
