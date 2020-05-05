module.exports = async (page, scenario, vp) => {
  // console.log(scenario)
  if (process.env.CI) {
    scenario.url = scenario.url.replace('host.docker.internal', 'localhost')
  }
  // console.log(scenario)
}
