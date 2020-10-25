require('dotenv').config()

const backstop = require('backstopjs')
const customConfig = require('../backstop.json')
const baseUrl = process.env.BASE_URL || 'http://localhost:8000'

customConfig.scenarios.forEach((scenario) => {
  scenario.url = scenario.url.replace('http://localhost:8000', baseUrl)
})

if (process.env.CI === 'true') {
  customConfig.report = ['CI', 'browser']
  customConfig.dockerCommandTemplate =
    'docker run --rm -i --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}'
}

console.log('Running backstop with config', customConfig)

backstop('test', { config: customConfig, docker: true }).catch((err) => {
  console.error('Backstop test failed with ', err)
  throw new Error('Backstop failed')
})
