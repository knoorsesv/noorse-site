/* eslint-disable no-console */
const { test, expect } = require('@playwright/test')

const pages = [
  { pageUrl: '/', pageName: '-home', takeFullPage: true },
  { pageUrl: '/info/nieuws' },
  { pageUrl: '/info/kalender' },
  { pageUrl: '/info/bestuur' },
  { pageUrl: '/nieuws/Alle Mogelijke Opties', takeFullPage: true },
  {
    pageUrl: '/team/senioren/eerste%20elftal',
    waitFor: '[alt="Ploegfoto Eerste Elftal"]',
  },
  { pageUrl: '/senioren' },
]

test.describe.parallel('Screenshot Test', () => {
  pages.forEach(({ pageUrl, takeFullPage, pageName, waitFor }) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      try {
        await (
          await page.$(waitFor || '[alt="Noorse Logo"]')
        ).waitForElementState('stable', { timeout: 10000 })
      } catch (e) {
        console.error(e)
      }
      // todo: maybe scroll on big pages? / open navbar on mobile?
      const snapshotLocation = `page${pageName || pageUrl.replace('/', '-').replace('%20', '-')}.png`
      console.log('comparing screenshot to', snapshotLocation)
      await expect(page).toHaveScreenshot(snapshotLocation, {
        maxDiffPixelRatio: 0.05,
      })
      // expect(await page.screenshot({ fullPage: takeFullPage })).toMatchSnapshot(
      //   snapshotLocation,
      //   {
      //     maxDiffPixelRatio: 0.05,
      //   }
      // )
    })
  })
})
