const { test, expect } = require('@playwright/test')

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  // test.only('has news items', async ({ page }) => {
  //   const newsSection = page.locator('section:has(h2:text-is("Nieuws"))')
  //   const newsItems = newsSection.locator('a')
  //   const firstHeadline = newsItems.nth(1)
  //   const firstBlurb = newsItems
  //     .nth(1)
  //     .locator(' > div:last-of-type > div:last-of-type')

  //   expect(newsSection).toBeVisible()
  //   expect(await newsItems.count()).toEqual(3)
  //   expect(await firstHeadline.innerText()).toEqual('NIEUWE SPELERS 2020-2021')
  //   expect(await firstBlurb.innerText()).toEqual(
  //     'Na het jammere nieuws dat er dit seizoen niet meer gevoetbald wordt, beginnen we meteen uit te kijke ...'
  //   )
  // })

  // test('clicking news card takes you to page', async ({ page }) => {
  //   const link = page.locator('a article:has-text("Nieuwe spelers")')

  //   await link.click()

  //   expect(page.url().toLowerCase()).toContain(
  //     '/nieuws/Nieuwe%20spelers%202020-2021'.toLowerCase()
  //   )
  // })

  // test('clicking dots takes you to news overview', async ({ page }) => {
  //   const newsSection = page.locator('section:has-text("Nieuws")')
  //   const lastLink = newsSection.locator('a:has-text("Meer Nieuws")')
  //   const navigationPromise = page.waitForNavigation()

  //   await lastLink.click()
  //   await navigationPromise

  //   expect(page.url()).toContain('/info/nieuws')
  // })

  test('has a webshop link', async ({ page }) => {
    const section = page.locator('section:has-text("Webshop")')
    const link = section.getByRole('link', {
      name: 'Ontdek hier onze officiële webshop!',
    })

    expect(await link.getAttribute('href')).toEqual(
      'https://noorsesv.shop4clubs.eu/'
    )
  })

  test('has an events list', async ({ page }) => {
    const section = page.locator('section:has-text("Evenementen")')
    // todo: why is this a table?
    const events = section.locator('table tr')
    expect(await events.count()).toEqual(2)
  })
})
