require('dotenv').config()

const backstop = require('backstopjs')
const customConfig = require('../backstop.json')
const baseUrl = process.env.BASE_URL || 'http://localhost:8000'

customConfig.scenarios.forEach((scenario) => {
  scenario.url = scenario.url.replace('http://localhost:8000', baseUrl)
})

if (process.env.CI === 'true') {
  customConfig.report = ['ci']
  customConfig.dockerCommandTemplate = customConfig.dockerCommandTemplate.replace(
    '-it',
    '-i'
  )
}

backstop('test', { config: customConfig, docker: true }).catch((err) => {
  console.error('Backstop test failed with ', err)
  throw new Error('Backstop failed')
})
