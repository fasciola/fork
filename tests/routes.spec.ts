import { test, expect } from '@playwright/test'

/**
 * Journey 1 — every route renders real content (no blank pages).
 * Regression guard for the Vite `base` bug that blanked sub-routes.
 */
const routes = [
  '/', '/solutions', '/how-it-works', '/technology-and-operations', '/about',
  '/brands', '/insights', '/packages-and-pricing', '/faq', '/locations',
  '/contact', '/find-your-path', '/book-a-consultation',
  '/start-my-managed-brand', '/submit-your-menu', '/start-a-restaurant-project',
  '/operational-assessment', '/strategic-partner-application',
  '/ultimate-partner-application', '/legal/privacy-policy',
  '/legal/terms-and-conditions', '/legal/cookie-policy',
  '/legal/commercial-disclaimer', '/careers', '/500',
  '/solutions/fully-managed-food-brand', '/solutions/custom-brand-development',
  '/solutions/turnkey-kitchen-restaurant-consultancy',
  '/solutions/restaurant-brand-growth-consultancy',
  '/solutions/strategic-investment-partner-program',
  '/solutions/ultimate-strategic-investment-partner-program',
  '/insights/what-is-a-virtual-food-brand',
  '/insights/cloud-kitchen-unit-economics',
  '/insights/menu-engineering-for-delivery',
  '/insights/delivery-platform-onboarding-uae',
  '/insights/recipe-standardization-scale',
  '/insights/restaurant-operations-technology-stack',
  '/insights/improve-existing-restaurant-operations',
  '/insights/food-brand-portfolio-investor-guide',
]

test.describe('all routes render', () => {
  for (const route of routes) {
    test(`${route} renders content`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.status()).toBe(200)
      // page must have meaningful content height and at least one heading
      await expect(page.locator('h1').first()).toBeVisible()
      const height = await page.evaluate(() => document.body.scrollHeight)
      expect(height).toBeGreaterThan(900)
    })
  }

  test('unknown route shows designed 404', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.getByText(/404|not found/i).first()).toBeVisible()
  })
})
