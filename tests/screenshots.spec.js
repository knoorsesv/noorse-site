const { test, expect } = require('@playwright/test')

const pages = [
  '/',
  '/nieuws/Nieuwe spelers 2020-2021',
  '/nieuws/Alle Mogelijke Opties',
  '/info/nieuws',
  '/team/Noorse 1',
  '/info/kalender',
  '/info/sponsoring',
  '/senioren',
  '/contact',
  '/info/bestuur',
]

const takeFullPage = ['/nieuws/Alle Mogelijke Opties']

test.describe.parallel('Screenshot Test', () => {
  pages.forEach((pageUrl) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      await (await page.$('#logo')).waitForElementState('stable')
      // todo: maybe scroll on big pages? / open navbar on mobile?
      expect(
        await page.screenshot({ fullPage: takeFullPage.includes(pageUrl) })
      ).toMatchSnapshot(`page${pageUrl.replace('/', '-')}.png`, {
        threshold: 0.8,
      })
    })
  })
})
