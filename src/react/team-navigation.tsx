import type { FC } from 'react'
import { LinkWrapper } from '../wrappers/link-wrapper.tsx'
import type { Team } from './types/team'

// todo: dees is echt lelijk
export const CategoryTeamNavigation: FC<{
  categoryName: string
  teams: Team[]
  header?: string
}> = ({ categoryName, teams, header }) => {
  const bouwen = teams.reduce(
    (bouwlijst: Record<string, Team[]>, ploeg: Team) => {
      const key = ploeg.bouw || 'Andere'
      return {
        ...bouwlijst,
        [`${key}`]: bouwlijst[key] ? [...bouwlijst[key], ploeg] : [ploeg],
      }
    },
    {}
  )

  return (
    <nav
      aria-labelledby="team-navigation"
      className={`bg-green-light/25 flex flex-col items-center gap-8 p-6`}
    >
      <h3
        id="team-navigation"
        className={'mb-2 w-full border-b-2 border-black pb-2 text-center'}
      >
        {header || categoryName}
      </h3>
      {Object.keys(bouwen)
        .sort((bouw: string) => {
          if (bouw === 'competitief') return -1
          if (bouw === 'onderbouw') return -1
          if (bouw === 'middenbouw') return -1
          return 0
        })
        .map((bouw) => {
          return (
            <div className="flex flex-col items-center" key={bouw}>
              <h4 className="font-bold capitalize">{bouw}</h4>
              <div className={'flex-start flex w-full flex-wrap gap-2'}>
                {bouwen[bouw]
                  .sort((ploeg1: Team, ploeg2: Team) => {
                    const normalizedName1 =
                      ploeg1.name
                        ?.replaceAll('Geel', '')
                        .replaceAll('Groen', '')
                        .replace(/^U/, '') || ''
                    const normalizedName2 =
                      ploeg2.name
                        ?.replaceAll('Geel', '')
                        .replaceAll('Groen', '')
                        .replace(/^U/, '') || ''
                    if (
                      !isNaN(parseInt(normalizedName1)) &&
                      !isNaN(parseInt(normalizedName2))
                    ) {
                      if (
                        parseInt(normalizedName1) === parseInt(normalizedName2)
                      ) {
                        if (ploeg1.name?.includes('Geel')) {
                          return -1
                        }
                      }
                      return (
                        parseInt(normalizedName1) - parseInt(normalizedName2)
                      )
                    }

                    return (ploeg1?.name || '') > (ploeg2?.name || '') ? 1 : -1
                  })
                  .map((ploeg) => (
                    <LinkWrapper
                      key={ploeg.name}
                      href={`/team/${categoryName.toLowerCase()}/${ploeg.name?.toLowerCase()}`}
                      className={
                        'text-gray-dark w-[80px] text-center underline'
                      }
                    >
                      {ploeg.name}
                    </LinkWrapper>
                  ))}
              </div>
            </div>
          )
        })}
    </nav>
  )
}
