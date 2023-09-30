const { test, expect } = require('@playwright/test')

test.describe('All Info Pages', () => {
  test('There is a bestuur page', async ({ page }) => {
    await page.goto('/info/bestuur')
    const title = page.locator('#content h1')
    const leden = page.locator('#content ul li')
    const veurzitter = leden.nth(0)
    const deelveurzitter = leden.nth(2)

    expect(title).toHaveText('Bestuur')
    expect(await leden.count()).toEqual(4)
    expect(veurzitter).toContainText('Voorzitter')
    expect(veurzitter).toContainText('Christophe Egyed')
    expect(deelveurzitter).toContainText('Veurzitter-in-spe')
    expect(deelveurzitter).toContainText('bennyboy@hotmail.com')
  })

  test('There is a news overview page', async ({ page }) => {
    await page.goto('/info/nieuws')
    const title = page.locator('#content h1')
    const articles = page.locator('#content article')

    expect(title).toHaveText('Nieuws')
    expect(await articles.count()).toEqual(7)
    expect(articles.nth(1)).toContainText('Nieuwe spelers 2020-2021')
  })

  test('There is a lidmaatschap page', async ({ page }) => {
    await page.goto('/info/lidmaatschap')
    const content = page.locator('#content')

    expect(content).toContainText('Lidmaatschap')
  })

  test('There is a kalender page', async ({ page }) => {
    await page.goto('/info/kalender')
    const title = page.locator('#content h1')
    const subtitle = page.locator('#content h2')
    const lines = page.locator('#content ul li')

    expect(title).toHaveText('Kalender')
    expect(subtitle).toHaveText('Wedstrijden deze week')

    expect(lines.first()).toHaveText('vr 29/09')
    expect(lines.nth(1)).toContainText('19:30')
    expect(lines.nth(1)).toContainText('Meisjes U16 reeks I')
    expect(lines.nth(1)).toContainText('Vk Simikos A 1')
    expect(lines.nth(1)).toContainText('Noorse')
  })

  test('There is a contact page', async ({ page }) => {
    await page.goto('/contact')
    const content = page.locator('#content')

    expect(content).toContainText('Contact')
  })
})
