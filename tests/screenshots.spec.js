const { test, expect } = require('@playwright/test')

const pages = [
  '/',
  '/info/nieuws',
  '/info/kalender',
  '/info/sponsoring',
  '/info/bestuur',
  '/nieuws/Alle Mogelijke Opties',
  '/team/Eerste Elftal',
  '/senioren',
  '/g-werking',
]

const takeFullPage = ['/nieuws/Alle Mogelijke Opties', '/']

test.describe.parallel('Screenshot Test', () => {
  pages.forEach((pageUrl) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      await (await page.$('[alt="Noorse Logo"]')).waitForElementState('stable')
      // todo: maybe scroll on big pages? / open navbar on mobile?
      expect(
        await page.screenshot({ fullPage: takeFullPage.includes(pageUrl) })
      ).toMatchSnapshot(`page${pageUrl.replace('/', '-')}.png`, {
        maxDiffPixelRatio: 0.05,
      })
    })
  })
})
