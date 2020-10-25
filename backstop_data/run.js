require('dotenv').config()

const backstop = require('backstopjs')
const customConfig = require('../backstop.json')
const baseUrl = process.env.BASE_URL || 'http://localhost:8000'

customConfig.scenarios.forEach((scenario) => {
  scenario.url = scenario.url.replace('http://localhost:8000', baseUrl)
})

if (process.env.CI === 'true') {
  customConfig.report = ['ci']
}

backstop('test', { config: customConfig, docker: true })
