const { test, expect } = require('@playwright/test')

test.describe('Category Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team/noorse 1')
  })

  test('has category page for senioren teams', async ({ page }) => {
    const title = page.locator('#content h1')

    const coachesSection = page.locator('section:has(h2:has-text("Coaches"))')
    const coaches = coachesSection.locator('span')

    const trainingSection = page.locator('section:has(h2:has-text("Training"))')
    const trainingen = trainingSection.locator('span')

    const klassementSection = page.locator(
      'section:has(h2:has-text("Klassement"))'
    )
    const klassementEntries = klassementSection.locator('tbody tr')

    const kalenderSection = page.locator('section:has(h2:has-text("Kalender"))')
    const kalenderEntries = kalenderSection.locator('tbody tr')

    const reeksSection = page.locator('section:has(h2:has-text("Reeksen"))')
    const reeksen = reeksSection.locator('a')

    const calendarLink = page.locator('a:has-text("Google Calendar")')

    const afgevaardigedeSection = page.locator(
      'section:has(h2:has-text("Afgevaardigde"))'
    )
    const afgevaardigden = afgevaardigedeSection.locator('span')

    expect(title).toHaveText('Noorse 1')
    expect(coachesSection).toBeVisible()
    expect(afgevaardigedeSection).toBeVisible()
    expect(trainingSection).toBeVisible()
    expect(reeksSection).toBeVisible()
    expect(klassementSection).toBeVisible()
    expect(calendarLink).toBeVisible()

    expect(await coaches.count()).toEqual(2)
    expect(await afgevaardigden.count()).toEqual(1)
    expect(await trainingen.count()).toEqual(2)
    expect(await reeksen.count()).toEqual(2)
    expect(await klassementEntries.count()).toEqual(6)
    expect(await kalenderEntries.count()).toEqual(20)

    expect(await coaches.allTextContents()).toContain('Davy Vercauteren')
    expect(await afgevaardigden.allTextContents()).toContain('Pascal ')
    expect(await trainingen.allTextContents()).toContain(' Dinsdag 20u')
    expect(await reeksen.allTextContents()).toContain(' 4 PROV. A')

    expect(await calendarLink.getAttribute('href')).toEqual(
      'https://calendar.google.com/calendar/u/0/r?cid=so48kkhhj47ijph29un9m4gcrc@group.calendar.google.com'
    )
    expect(
      await reeksen.evaluateAll(links =>
        links.map(link => link.getAttribute('href'))
      )
    ).toContain(
      'https://www.voetbalvlaanderen.be/competitie/CHP_98714/rangschikking'
    )
    const klassementTableContent = await klassementEntries.evaluateAll(
      klassementRows => {
        return klassementRows.map(row =>
          Array.from(row.querySelectorAll('td')).map(cell => cell.textContent)
        )
      }
    )
    const kalenderTableContent = await kalenderEntries.evaluateAll(
      klassementRows => {
        return klassementRows.map(row =>
          Array.from(row.querySelectorAll('td')).map(cell => cell.textContent)
        )
      }
    )

    expect(klassementTableContent).toContainEqual(['1', 'Ploeg 1', '54'])
    expect(klassementTableContent).toContainEqual(['...'])
    expect(klassementTableContent).toContainEqual(['10', 'Ploeg 10', '27'])
    expect(klassementTableContent).toContainEqual(['11', 'Noorse', '24'])

    expect(kalenderTableContent).toContainEqual([
      '10/0816:00',
      'TegenstanderNoorse',
      '00',
    ])
  })
})
