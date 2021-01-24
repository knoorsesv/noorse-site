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
      <div className={'flex flex-wrap justify-around mx-1'}>
        {/*todo: active class name doesnt work on page load so breaks backstop tests: https://github.com/gatsbyjs/gatsby/issues/10586*/}
        {category.ploeg &&
          category.ploeg.map((ploeg) => (
            <Link
              key={ploeg.naam}
              to={`/team/${ploeg.naam.toLowerCase()}`}
              className={'text-gray-dark underline mx-3'}
            >
              {ploeg.naam}
            </Link>
          ))}
      </div>
    </section>
  )
}
