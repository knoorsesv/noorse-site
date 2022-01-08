const { test, expect } = require('@playwright/test')

test.describe('Home Page', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto('/')
  })

  test('has a nav bar', async ({ page }) => {
    const title = page.locator('nav li#menu-item:first-of-type')
    await expect(title).toHaveText('Home')
  })

  test('has news items', async ({ page }) => {
    // todo: semantically this cannot be an h1
    const newsSection = page.locator('section:has(h1:text-is("Nieuws"))')
    // todo: semantically this should probably be <li>
    const newsItems = newsSection.locator('article')
    const firstHeadline = newsItems.first().locator('h2')
    // todo: semantically this probably shouldn't be a div
    const firstBlurb = newsItems
      .first()
      .locator(' > div:last-of-type > div:last-of-type')

    // await newsSection.waitFor()

    expect(newsSection).toBeVisible()
    expect(await newsItems.count()).toEqual(6)
    expect(await firstHeadline.innerText()).toEqual('NIEUWE SPELERS 2020-2021')
    expect(await firstBlurb.innerText()).toEqual(
      'Dit is een andere blurb met niet zo super veel characters but it does make sense.Dit is een ander'
    )
  })

  test('clicking news card takes you to page', async ({ page }) => {
    const newsSection = page.locator('section:has-text("Nieuws")')
    const newsItems = newsSection.locator('article')
    const firstItem = newsItems.first()

    await firstItem.click()
    await page.waitForNavigation()

    expect(page.url()).toContain('/nieuws/Nieuwe%20spelers%202020-2021')
  })

  test('clicking dots takes you to news overview', async ({ page }) => {
    const newsSection = page.locator('section:has-text("Nieuws")')
    const lastLink = newsSection.locator('a:has-text("...")')

    await lastLink.click()
    await page.waitForNavigation()

    expect(page.url()).toContain('/info/nieuws')
  })

  test('has a webshop link', async ({ page }) => {
    const section = page.locator('section:has-text("Webshop")')
    const link = section.locator('a')

    expect(await link.getAttribute('href')).toEqual(
      'https://noorsesv.shop4clubs.eu/'
    )
  })

  test('has an events list', async ({ page }) => {
    const section = page.locator('section:has-text("Evenementen")')
    // todo: why is this a table?
    const events = section.locator('table tr')
    console.log(await section.innerHTML())
    expect(await events.count()).toEqual(2)
  })

  test('has a covid rules section', async ({ page }) => {
    const section = page.locator('section:has-text("Covid-19")')
    const extLink = section.locator('a[target="_blank"]')
    const intLink = section.locator('a:not([target])')

    expect(await intLink.getAttribute('href')).toEqual(
      '/nieuws/Nieuwe%20COVID%20maatregelen'
    )
    expect(await extLink.getAttribute('href')).toEqual(
      'https://www.sport.vlaanderen/sporten-in-tijden-van-corona/'
    )
  })

  test('has a trooper section', async ({ page }) => {
    const section = page.locator('section:has-text("Trooper")')
    const extLink = section.locator('a[target="_blank"]')

    expect(await extLink.getAttribute('href')).toEqual(
      'https://www.trooper.be/noorse'
    )
  })
})
