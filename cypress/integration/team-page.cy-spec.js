describe('team page', () => {
  beforeEach(() => {
    cy.visit('/team/noorse 1')
  })

  it('should show team name on top', () => {
    cy.contains('h1', 'Noorse 1')
  })

  it('should have links to other teams in same category', () => {
    cy.contains('#content h3', 'Senioren')
      .parents('section')
      .within(() => {
        cy.contains('a', 'Noorse 3').should(
          'have.attr',
          'href',
          '/team/noorse 3'
        )
      })
  })

  it('should show results fetched from kbvb graphql site', () => {
    //todo: stub backend calls because this will fail is games get added
    cy.contains('#content h2', 'Kalender')
      .parents('section')
      .get('table tr')
      .as('gameRows')
      .should('have.length', 21)

    cy.get('@gameRows').first().contains('Exc. Fc Essen')
    cy.get('@gameRows').first().contains('Noorse')
    cy.get('@gameRows').first().contains('4')
    cy.get('@gameRows').first().contains('3')
    cy.get('@gameRows').first().contains('20/08')
    cy.get('@gameRows').first().contains('19:30')
  })

  it('should show team info fetched from contentful', () => {
    cy.contains('h2', 'Coach')
      .parents('section')
      .within(() => {
        cy.contains('Davy Vercauteren')
        cy.contains('Jurgen Noels')
      })
    cy.contains('h2', 'Training')
      .parents('section')
      .within(() => {
        cy.contains('Dinsdag 20u')
        cy.contains('Donderdag 20u')
      })

    cy.contains('h2', 'Reeks')
      .parents('section')
      .within(() => {
        cy.contains('4 PROV. A').should(
          'have.attr',
          'href',
          'https://www.voetbalvlaanderen.be/competitie/CHP_94483/rangschikking'
        )
      })
  })
})
