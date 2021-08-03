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
    cy.contains('#content h2', 'Kalender')
      .parents('section')
      .get('table tr')
      .as('gameRows')
      .should('have.length', 2)

    cy.get('@gameRows').first().contains('Ksk Ekeren Donk')
    cy.get('@gameRows').first().contains('Noorse')
    cy.get('@gameRows').first().contains('2')
    cy.get('@gameRows').first().contains('1')
    cy.get('@gameRows').first().contains('09/08')
    cy.get('@gameRows').first().contains('16:00')
  })

  it('should show team info fetched from contentful', () => {
    cy.contains('h2', 'Coaches')
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

    cy.contains('h2', 'Afgevaardigde')
      .parents('section')
      .within(() => {
        cy.contains('Pascal')
      })

    cy.contains('h2', 'Reeks')
      .parents('section')
      .within(() => {
        cy.contains('4 PROV. A').should(
          'have.attr',
          'href',
          'https://www.voetbalvlaanderen.be/competitie/CHP_98714/rangschikking'
        )
      })
  })
})
