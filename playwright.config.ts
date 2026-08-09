import { defineConfig, devices } from '@playwright/test'

/**
 * Fork & Founders — critical journey tests.
 * Run against a production build:
 *   npm run build && npm run preview   (serves dist/ on :4173)
 *   npx playwright test
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: process.env.FF_BASE_URL ?? 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'] } },
  ],
})
