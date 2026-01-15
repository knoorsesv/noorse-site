const { test, expect } = require('@playwright/test')

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

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
