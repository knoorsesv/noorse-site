import type { FC } from 'react'
import { LinkWrapper } from '../wrappers/link-wrapper.tsx'
import type { Category } from './types/category.ts'

interface Ploeg {
  naam?: string
  bouw?: string
}

// todo: dees is echt lelijk
export const CategoryTeamNavigation: FC<{
  category?: Category
  header?: string
}> = ({ category, header }) => {
  if (!category?.ploeg?.length) {
    return <></>
  }

  const bouwen = category.ploeg.reduce(
    (bouwlijst: Record<string, Ploeg[]>, ploeg: Ploeg) => {
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
      className={`flex flex-col items-center gap-8 bg-green-light bg-opacity-25 p-6`}
    >
      <h3
        id="team-navigation"
        className={'mb-2 w-full border-b-2 border-black pb-2 text-center'}
      >
        {header || category.naam}
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
              <h4 className="mb-2 font-bold capitalize">{bouw}</h4>
              <div className={'flex-start flex w-full flex-wrap gap-2'}>
                {bouwen[bouw]
                  .sort((ploeg1: Ploeg, ploeg2: Ploeg) => {
                    const normalizedName1 =
                      ploeg1.naam
                        ?.replaceAll('Geel', '')
                        .replaceAll('Groen', '')
                        .replace(/^U/, '') || ''
                    const normalizedName2 =
                      ploeg2.naam
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
                        if (ploeg1.naam?.includes('Geel')) {
                          return -1
                        }
                      }
                      return (
                        parseInt(normalizedName1) - parseInt(normalizedName2)
                      )
                    }

                    return (ploeg1?.naam || '') > (ploeg2?.naam || '') ? 1 : -1
                  })
                  .map((ploeg) => (
                    <LinkWrapper
                      key={ploeg.naam}
                      href={`/team/${category.naam.toLowerCase()}/${ploeg.naam?.toLowerCase()}`}
                      className={
                        'w-[80px] text-center text-gray-dark underline'
                      }
                    >
                      {ploeg.naam}
                    </LinkWrapper>
                  ))}
              </div>
            </div>
          )
        })}
    </nav>
  )
}
