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
  test.only('There is a fairplay', async ({ page }) => {
    await page.goto('/info/fairplay')
    const title = page.locator('#content h1')
    const subtitle = page.locator('#content h2')

    expect(title).toHaveText('Intern fairplayreglement')
    expect(await subtitle.count()).toEqual(18)
    expect(subtitle.first()).toContainText('Doelstellingen van de club')
  })
})
