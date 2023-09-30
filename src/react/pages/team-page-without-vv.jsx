import React from 'react'
import { Helmet } from 'react-helmet'
import { CategoryTeamNavigation, SubTitle, Title } from '../index'
import { Container } from '../layout'

// todo: why was this one necessary?
export const TeamPageWithoutVV = ({ ploeg }) => {
  return (
    <>
      <Helmet>
        <title>{ploeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{ploeg.naam}</Title>
        <div className={'flex flex-col large:flex-row large:justify-between'}>
          <div
            id="team-info"
            className={'mt-6 flex flex-col px-4 large:min-w-[40%]'}
          >
            {/* todo: these could maybe already go side by side on medium screen size */}
            <div className={'flex flex-col items-center'}>
              {ploeg.coach && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Coach{ploeg.coach.length > 1 ? 'es' : ''}
                    </SubTitle>
                    {ploeg.coach.map((coach) => (
                      <span key={coach}>{coach}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {ploeg.afgevaardigde && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Afgevaardigde
                      {ploeg.afgevaardigde.length > 1 ? 'n' : ''}
                    </SubTitle>
                    {ploeg.afgevaardigde.map((afgevaardigde) => (
                      <span key={afgevaardigde}>{afgevaardigde}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {ploeg.training && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>Training</SubTitle>
                    {ploeg.training.map((training) => (
                      <span key={training}> {training}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}

              <CategoryTeamNavigation category={ploeg.categorie} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
