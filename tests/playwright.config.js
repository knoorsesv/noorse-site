/* eslint-disable no-console */

// playwright.config.js
// @ts-check
require('dotenv').config()

const runOnCI = process.env.CI === 'true'

let baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:4321'

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: runOnCI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],
  forbidOnly: !!runOnCI,
  retries: runOnCI ? 1 : 0,
  workers: runOnCI ? 4 : 1,
  maxFailures: runOnCI ? 1 : 0,
  use: {
    baseURL,
    trace: 'off',
  },
  timeout: runOnCI ? 20 * 1000 : 30 * 1000,
  projects: [
    {
      name: 'Functional',
      testIgnore: 'screenshots.spec.js',
      use: {
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'Screenshot Large',
      testMatch: 'screenshots.spec.js',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Screenshot Small',
      testMatch: 'screenshots.spec.js',
      use: {
        browserName: 'webkit',
        viewport: {
          width: 390,
          height: 664,
        },
        deviceScaleFactor: 3,
      },
    },
    {
      name: 'Screenshot Medium',
      testMatch: 'screenshots.spec.js',
      use: {
        browserName: 'chromium', // todo: try to make this firefox in CI
        viewport: {
          width: 640,
          height: 360,
        },
        deviceScaleFactor: 3,
      },
    },
  ],
}

console.log('running test with config ', config)

module.exports = config
