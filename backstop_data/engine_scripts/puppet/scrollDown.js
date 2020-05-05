module.exports = async (page, scenario, vp) => {
  await page.evaluate(() => {
    window.scroll(0, 100)
  })

  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}
