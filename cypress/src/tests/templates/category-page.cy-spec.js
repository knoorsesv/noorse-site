describe('Category page', () => {
  const categories = ['Senioren', 'Jeugd', 'Dames', 'Meisjes', 'G-Voetbal']

  categories.forEach((category) => {
    it(`should be generated for ${category}`, () => {
      cy.visit(`/${category.toLowerCase()}`)
      cy.get('#content-wrapper').should('contain', category)
    })
  })

  describe('content', () => {
    beforeEach(() => {
      cy.visit('/senioren')
    })

    it('shows list of ploegen', () => {
      cy.get('#content-wrapper').within(() => {
        cy.contains('h3', 'Ploegen')
          .parent()
          .within(() => {
            cy.get('a')
              .should('contain', 'Noorse 1')
              .should('contain', 'Noorse 3')
              .should('contain', 'Reserven B')
              .should('contain', 'Reserven A')
          })
      })
    })

    it('shows list of news items', () => {
      cy.contains('Nieuws')
        .parent()
        .within(() => {
          cy.get('a')
            .should('contain', 'Nieuwe spelers 2020-2021')
            .should('contain', 'Noorse gaat door met trainersduo')
        })
    })
  })
})
