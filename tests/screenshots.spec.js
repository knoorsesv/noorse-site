/* eslint-disable no-console */
const { test, expect } = require('@playwright/test')

const pages = [
  {
    pageUrl: '/',
    pageName: '-home',
    waitFor: '[alt="Sport Vlaanderen Logo"]',
    takeFullPage: true,
  },
  { pageUrl: '/info/nieuws' },
  { pageUrl: '/info/kalender' },
  { pageUrl: '/info/bestuur' },
  { pageUrl: '/nieuws/Alle Mogelijke Opties', takeFullPage: true },
  {
    pageUrl: '/team/senioren/eerste%20elftal',
    pageName: 'ploeg',
    waitFor: '[alt="Ploegfoto Eerste Elftal"]',
    timeout: 40000,
  },
  { pageUrl: '/senioren' },
]

test.describe.parallel('Screenshot Test', () => {
  pages.forEach(({ pageUrl, takeFullPage, pageName, waitFor, timeout }) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')
      if (timeout) {
        test.setTimeout(timeout)
      }
      try {
        await (
          await page.$(waitFor || '[alt="Noorse Logo"]')
        ).waitForElementState('stable', { timeout: timeout || 5000 })
      } catch (e) {
        console.error(e)
      }
      // todo: maybe scroll on big pages? / open navbar on mobile?
      const snapshotLocation = `page${pageName || pageUrl.replace('/', '-')}.png`
      console.log('comparing screenshot to', snapshotLocation)
      await expect(page).toHaveScreenshot(snapshotLocation, {
        maxDiffPixelRatio: 0.05,
        fullPage: takeFullPage,
        timeout: timeout || 10000,
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
