import type { FC } from 'react'
import { MarkDown, SponsorWithLogo, SubTitle } from '../index'
import { Page } from './page.jsx'
import type { Sponsor, SponsorType } from '../types/sponsor.js'
import { DocumentLink } from '../links/document-link.js'

export const SponsorPage: FC<{
  sponsors: Sponsor[]
  description: string
  brochure?: { file: { url: string; fileName: string } }
}> = ({ sponsors, description, brochure }) => {
  const types = ['goud', 'zilver', 'brons', 'shirt', undefined] as SponsorType[]
  return (
    <Page title="Sponsoring" centered={true}>
      <div className="flex flex-col w-full justify-start divide divide-y-2 divide-gray-200">
        <section className="py-10">
          <MarkDown content={description} />

          {brochure && (
            <DocumentLink
              url={brochure.file.url}
              fileName="Download onze sponsorbrochure"
            />
          )}
        </section>

        <section className="py-10">
          <SubTitle>Huidige sponsors</SubTitle>

          {types.map((type) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.type === type
            )
            return filteredSponsors.length ? (
              <div key={type} className="w-full flex flex-col items-center">
                <h3 className="mb-6 text-2xl capitalize">{`${type || 'Overig'}`}</h3>
                <ul className="mb-10 flex w-full flex-wrap items-center justify-center gap-6 list-none">
                  {filteredSponsors.map((sponsor) => {
                    return (
                      <li
                        className="flex flex-col items-center bg-gray-100 drop-shadow-lg  rounded-lg p-4 size-[250px]"
                        key={sponsor.naam}
                      >
                        <h4 className="text-2xl underline">{sponsor.naam}</h4>
                        <div className="flex flex-col w-full items-start gap-8 justify-center">
                          <SponsorWithLogo
                            sponsor={sponsor}
                            logoWidth="w-full h-[100px] text-center"
                            maxWidth=""
                          />
                          {sponsor.description ? (
                            <MarkDown content={sponsor.description} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <></>
            )
          })}
        </section>
      </div>
    </Page>
  )
}
