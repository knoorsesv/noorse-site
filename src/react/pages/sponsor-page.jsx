import { MarkDown, SponsorWithLogo, SubTitle } from '../index'
import { Page } from './page.jsx'

export const SponsorPage = ({ sponsors, description }) => {
  return (
    <Page title="Sponsors" centered={true}>
      <MarkDown>{description}</MarkDown>

      <SubTitle>Huidige sponsors</SubTitle>

      <ul className="list-none w-full mt-10">
        {sponsors.map((sponsor) => {
          return (
            <li
              className="w-full flex flex-col items-center mb-8"
              key={sponsor.naam}
            >
              <h4>{sponsor.naam}</h4>
              <SponsorWithLogo sponsor={sponsor} logoWidth="w-full" />
              {sponsor.omschrijving ? (
                <MarkDown>{sponsor.omschrijving}</MarkDown>
              ) : (
                <></>
              )}
            </li>
          )
        })}
      </ul>
    </Page>
  )
}
