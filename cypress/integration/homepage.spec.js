describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('events', () => {
    it('Should show predefined events in list', () => {
      cy.contains('Evenementen')
        .scrollIntoView()
        .should('be.visible')
        .parents('section')
        .contains('Nieuwjaarsreceptie')
        .should('be.visible')
        .parents('section')
        .contains('15-01-2021')
        .should('be.visible')
    })
  })

  describe('disclaimer', function () {
    const disclaimerText = 'Dit is de beta versie van onze nieuwe website.'

    it('should show disclaimer', () => {
      cy.contains(disclaimerText).should('be.visible')
      cy.contains('BETA versie').should('be.visible')
    })

    it('should hide disclaimer on clicking hide', () => {
      cy.contains('Verbergen').click()

      cy.contains(disclaimerText).should('not.be.visible')
      cy.contains('BETA versie').should('be.visible')
    })
  })
})
