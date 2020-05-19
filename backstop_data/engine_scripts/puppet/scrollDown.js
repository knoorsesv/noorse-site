module.exports = async (page, scenario, vp) => {
  await page.evaluate(() => {
    window.scroll(0, 200)
  })

  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
