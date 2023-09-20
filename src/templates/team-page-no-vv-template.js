import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { CategoryTeamNavigation, SubTitle, Title } from '../components'
import { Container } from '../components/layout'
import Layout from '../layouts/layout'

const TeamPage = ({ pageContext: { contentfulPloeg } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{contentfulPloeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{contentfulPloeg.naam}</Title>
        <div className={'flex flex-col large:flex-row large:justify-between'}>
          <div
            id="team-info"
            className={'mt-6 flex flex-col px-4 large:min-w-[40%]'}
          >
            {/* todo: these could maybe already go side by side on medium screen size */}
            <div className={'flex flex-col items-center'}>
              {contentfulPloeg.coach && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Coach{contentfulPloeg.coach.length > 1 ? 'es' : ''}
                    </SubTitle>
                    {contentfulPloeg.coach.map((coach) => (
                      <span key={coach}>{coach}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {contentfulPloeg.afgevaardigde && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Afgevaardigde
                      {contentfulPloeg.afgevaardigde.length > 1 ? 'n' : ''}
                    </SubTitle>
                    {contentfulPloeg.afgevaardigde.map((afgevaardigde) => (
                      <span key={afgevaardigde}>{afgevaardigde}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {contentfulPloeg.training && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>Training</SubTitle>
                    {contentfulPloeg.training.map((training) => (
                      <span key={training}> {training}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}

              <CategoryTeamNavigation
                category={contentfulPloeg.categorie}
                TeamLink={({ name, ...props }) => (
                  <Link
                    to={`/team/${contentfulPloeg.categorie.naam.toLowerCase()}/${name.toLowerCase()}`}
                    {...props}
                  >
                    {name}
                  </Link>
                )}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default TeamPage
