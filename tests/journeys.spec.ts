import { test, expect } from '@playwright/test'

/** Dismiss the cookie banner so it never blocks clicks. */
async function dismissConsent(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    localStorage.setItem(
      'ff_consent',
      JSON.stringify({ essential: true, analytics: false, marketing: false, ts: Date.now() }),
    )
  })
}

test.describe('Journey 2 — consultation form', () => {
  test('validates required fields then submits with a reference', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/book-a-consultation')

    // submit empty → accessible errors appear
    await page.getByRole('button', { name: /request my consultation/i }).click()
    await expect(page.getByRole('alert').first()).toBeVisible()

    await page.getByLabel(/full name/i).fill('QA Test User')
    await page.getByLabel(/^email/i).fill('qa@example.com')
    await page.getByLabel(/^telephone/i).fill('+971500000000')
    await page.getByLabel(/^country/i).fill('United Arab Emirates')
    await page.getByLabel(/objective/i).selectOption({ index: 1 })
    await page.getByRole('button', { name: /request my consultation/i }).click()

    await expect(page.getByText(/FF-[A-Z0-9]+/)).toBeVisible({ timeout: 10_000 })
  })
})

test.describe('Journey 3 — qualification quiz', () => {
  test('completes and shows recommendations', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/find-your-path')
    // answer all 7 questions by picking the first option each time
    for (let i = 0; i < 7; i++) {
      await page.locator('[data-quiz-option]').first().click()
      await page.waitForTimeout(400)
    }
    await expect(page.locator('main').getByText(/Recommended for you/i).first()).toBeVisible({ timeout: 10_000 })
  })
})

test.describe('Journey 4 — pricing accuracy', () => {
  test('category 1 tiers and 5% fee note are shown', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/packages-and-pricing')
    await expect(page.getByText(/AED 7,000/).first()).toBeVisible()
    await expect(page.getByText(/AED 6,000/).first()).toBeVisible()
    await expect(page.getByText(/AED 5,000/).first()).toBeVisible()
    await expect(page.getByText(/Most Popular/i).first()).toBeVisible()
    await expect(page.getByText(/5% of the brand.s monthly net sales/i).first()).toBeVisible()
    // partnership figures present, net-benefit figure forbidden
    await expect(page.getByText(/AED 300,000/).first()).toBeVisible()
    await expect(page.getByText(/AED 2,000,000/).first()).toBeVisible()
    await expect(page.getByText(/6,608,000/)).toHaveCount(0)
  })
})

test.describe('Journey 5 — solutions comparison', () => {
  test('six models compared side by side', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/solutions')
    const comparisonHeading = page.getByText(/Compare the Six Models/i)
    // real wheel scrolls so scroll-triggered reveal animations fire (headless WebKit
    // does not fire IntersectionObserver for programmatic scrollIntoView)
    for (let i = 0; i < 14 && !(await comparisonHeading.isVisible()); i++) {
      await page.mouse.wheel(0, 700)
      await page.waitForTimeout(250)
    }
    await expect(comparisonHeading).toBeVisible()
    const managedModel = page.getByText(/Fully Managed Food Brand/i).first()
    await expect(managedModel).toBeVisible()
    await expect(page.getByText(/Ultimate Strategic Investment/i).first()).toBeVisible()
  })
})

test.describe('Journey 6 — dashboards are fictional', () => {
  test('technology dashboards carry the illustrative-purposes note', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/technology-and-operations')
    await expect(
      page.getByText(/interface visualization(s)? shown for illustrative purposes only/i).first(),
    ).toBeVisible()
  })
})

test.describe('Journey 7 — navigation & mega menu', () => {
  test('header nav reaches key pages', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/')
    await page.getByRole('link', { name: /solutions/i }).first().click()
    await expect(page).toHaveURL(/\/solutions/)
    await expect(page.locator('h1').first()).toBeVisible()
  })
})

test.describe('Journey 8 — content integrity guards', () => {
  test('no placeholder imagery or lorem ipsum anywhere public', async ({ page }) => {
    await dismissConsent(page)
    for (const route of ['/', '/solutions', '/packages-and-pricing', '/about']) {
      await page.goto(route)
      const html = await page.content()
      // placehold.co/.it only — the word "placeholder" appears in form input attributes
      expect(html).not.toMatch(/unsplash|picsum|placehold\.(co|it)|lorem ipsum/i)
    }
  })

  test('no invented testimonials or statistics on homepage', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/')
    // strip the mandatory negation disclaimer ("...are not ... guaranteed returns...")
    // before scanning — compliance language legitimately contains these words
    const html = (await page.content()).replace(
      /All figures are illustrative examples[\s\S]*?signed agreement\./,
      '',
    )
    expect(html).not.toMatch(/testimonial|trusted by \d|\d+ satisfied|guaranteed/i)
  })
})

test.describe('Journey 9 — partner application gate', () => {
  test('partner form requires disclaimer acknowledgement and never collects payment', async ({ page }) => {
    await dismissConsent(page)
    await page.goto('/strategic-partner-application')
    await expect(page.locator('input[type="checkbox"]')).toBeVisible()
    const html = await page.content()
    expect(html).not.toMatch(/pay now|checkout|card number/i)
  })
})
