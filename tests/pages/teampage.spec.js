const { test, expect } = require('@playwright/test')

test.describe('Team Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team/senioren/eerste%20elftal')
  })

  test('has a team page with all data', async ({ page }) => {
    const title = page.locator('#content h1')

    const coachesSection = page.locator('section:has(h3:has-text("Coaches"))')
    const coaches = coachesSection.locator('span')

    const trainingSection = page.locator('section:has(h3:has-text("Training"))')
    const trainingen = trainingSection.locator('span')

    const klassementSection = page.locator(
      'section:has(h3:has-text("Klassement"))'
    )
    const klassementEntries = klassementSection.locator('tbody tr')

    const kalenderSection = page.locator('section:has(h3:has-text("Kalender"))')
    const kalenderEntries = kalenderSection.locator('tbody tr')

    const reeksSection = page.locator('section:has(h3:has-text("Reeksen"))')
    const reeksen = reeksSection.locator('a')

    const calendarLink = page.locator('a:has-text("Google Calendar")')

    const afgevaardigedeSection = page.locator(
      'section:has(h3:has-text("Afgevaardigde"))'
    )
    const afgevaardigden = afgevaardigedeSection.locator('span')

    expect(title).toHaveText('Eerste Elftal')
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
    expect(await klassementEntries.count()).toEqual(5)
    expect(await kalenderEntries.count()).toEqual(37)

    expect(await coaches.allTextContents()).toContain('Davy Vercauteren')
    expect(await afgevaardigden.allTextContents()).toContain('Pascal ')
    expect(await trainingen.allTextContents()).toContain(' Dinsdag 20u')
    expect(await reeksen.allTextContents()).toContain(' 4 Provinciaal Antw C')

    expect(await calendarLink.getAttribute('href')).toEqual(
      'https://calendar.google.com/calendar/u/0/r?cid=4cklu63vhlfe3353mckt69vmmo@group.calendar.google.com'
    )
    expect(
      await reeksen.evaluateAll((links) =>
        links.map((link) => link.getAttribute('href'))
      )
    ).toContain(
      'https://www.voetbalvlaanderen.be/competitie/CHP_113216/rangschikking'
    )
    const klassementTableContent = await klassementEntries.evaluateAll(
      (klassementRows) => {
        return klassementRows.map((row) =>
          Array.from(row.querySelectorAll('td')).map((cell) => cell.textContent)
        )
      }
    )
    const kalenderTableContent = await kalenderEntries.evaluateAll(
      (klassementRows) => {
        return klassementRows.map((row) =>
          Array.from(row.querySelectorAll('td')).map((cell) => cell.textContent)
        )
      }
    )

    expect(klassementTableContent).toContainEqual(['1', 'K. HEIBOS S.V.', '12'])
    expect(klassementTableContent).toContainEqual(['...'])
    expect(klassementTableContent).toContainEqual([
      '14',
      'FC BUCOVINA LOENHOUT',
      '2',
    ])
    expect(klassementTableContent).toContainEqual(['15', 'S.V. NOORSE', '1'])

    expect(kalenderTableContent).toContainEqual([
      '27/0720:00',
      'Fc HoogeindeNoorse',
      '32',
    ])
  })

  test('has a navigation list with all other senioren teams', async ({
    page,
  }) => {
    const navElement = page.locator('nav[aria-labelledby=team-navigation]')

    expect(navElement).toBeVisible()
    const links = navElement.locator('a')
    expect(await links.allTextContents()).toEqual([
      'Eerste Elftal',
      'Noorse 3',
      'Noorse 4',
      'Reserven A',
    ])
    await links.locator('text=Noorse 3').click()
    // await page.waitForURL('**/team/senioren/noorse%203')

    expect(page.url()).toContain('/team/senioren/noorse%203')
  })
})
