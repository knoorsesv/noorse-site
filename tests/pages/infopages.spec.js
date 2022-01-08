const { test, expect } = require('@playwright/test')

test.describe('All Info Pages', () => {
  test('There is a bestuur page', async ({ page }) => {
    await page.goto('/info/bestuur')
    const title = page.locator('#content h1')
    const leden = page.locator('#content article')
    const ben = leden.nth(1)

    expect(title).toHaveText('Bestuur')
    expect(await leden.count()).toEqual(4)
    expect(ben.locator('h2')).toHaveText('Ben De Block')
    expect(ben).toContainText('Senioren')
    expect(ben).toContainText('Veurzitter-in-spe')
    expect(ben).toContainText('Sponsor Verantwoordelijke')
    expect(ben).toContainText('bennyboy@hotmail.com')
  })

  test('There is a documents page', async ({ page }) => {
    await page.goto('/info/documenten')
    const title = page.locator('#content h1')
    const docs = page.locator('#content ul li')

    expect(title).toHaveText('Documenten')
    expect(await docs.count()).toEqual(1)
    expect(docs.first()).toContainText('Test Document 1')
    expect(docs.first().locator('a')).toContainText('structuur')
    expect(docs.first().locator('a')).toHaveAttribute(
      'href',
      /.*Structuur-2018-2019.pdf/
    )
  })
  test('There is a news overview page', async ({ page }) => {
    await page.goto('/info/nieuws')
    const title = page.locator('#content h1')
    const articles = page.locator('#content article')

    expect(title).toHaveText('Nieuws')
    expect(await articles.count()).toEqual(6)
    expect(articles.first()).toContainText('Nieuwe spelers 2020-2021')
  })

  test('There is a lidmaatschap page', async ({ page }) => {
    await page.goto('/info/lidmaatschap')
    const title = page.locator('#content h1')
    const subtitle = page.locator('#content h2')

    expect(title).toHaveText('Lid Worden')
    expect(subtitle.first()).toContainText('Bestaande leden')
  })

  test('There is a kalender page', async ({ page }) => {
    await page.goto('/info/kalender')
    const title = page.locator('#content h1')
    const subtitle = page.locator('#content h2')
    const lines = page.locator('#content ul li')

    expect(title).toHaveText('Kalender')
    expect(subtitle).toHaveText('Wedstrijden deze week')
    expect(lines.first()).toHaveText('za 21/08')
    expect(lines.nth(1)).toContainText('18:30')
    expect(lines.nth(1)).toContainText('Beker Heren groep 3')
    expect(lines.nth(1)).toContainText('Fc Merksem')
    expect(lines.nth(1)).toContainText('Noorse')
  })
})
