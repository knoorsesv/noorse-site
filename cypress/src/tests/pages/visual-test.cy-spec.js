describe('Home Page', function () {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Noorse Website',
      testName: 'HomePage',
      browser: [
        { width: 1024, height: 768, name: 'chrome' },
        { width: 480, height: 906, name: 'chrome' },
        { width: 320, height: 460, name: 'chrome' },
      ],
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it('should look the same', () => {
    cy.visit('/')
    cy.eyesCheckWindow({
      tag: 'Home page',
    })
  })
})
