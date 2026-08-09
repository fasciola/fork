# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: journeys.spec.ts >> Journey 5 — solutions comparison >> six models compared side by side
- Location: tests/journeys.spec.ts:63:3

# Error details

```
Error: mouse.wheel: Mouse wheel is not supported in mobile WebKit
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Announcement" [ref=e3]:
    - generic [ref=e4]:
      - paragraph [ref=e5]:
        - text: Limited-Time Launch Packages Available
        - link "View the Offer" [ref=e6]:
          - /url: /packages-and-pricing#category-1
      - button "Dismiss announcement" [ref=e9] [cursor=pointer]
  - link "Skip to main content" [ref=e13]:
    - /url: "#main"
  - banner [ref=e14]:
    - generic [ref=e16]:
      - link "Fork & Founders — home" [ref=e17]:
        - /url: /
        - generic [ref=e22]:
          - generic [ref=e23]: Fork & Founders
          - generic [ref=e24]: We Build. You Grow.
      - button "Menu" [ref=e26] [cursor=pointer]
  - generic:
    - dialog:
      - generic:
        - link:
          - /url: /
        - button
      - navigation:
        - list:
          - listitem:
            - link:
              - /url: /
              - text: Home
          - listitem:
            - link:
              - /url: /how-it-works
              - text: How It Works
          - listitem:
            - link:
              - /url: /brands
              - text: Our Brands
          - listitem:
            - link:
              - /url: /technology-and-operations
              - text: Technology & Operations
          - listitem:
            - link:
              - /url: /about
              - text: About
          - listitem:
            - link:
              - /url: /insights
              - text: Insights
          - listitem:
            - link:
              - /url: /contact
              - text: Contact
        - paragraph: Solutions
        - list:
          - listitem:
            - link:
              - /url: /solutions/fully-managed-food-brand
              - text: Fully Managed Food Brand
          - listitem:
            - link:
              - /url: /solutions/custom-brand-development
              - text: Custom Brand Development
          - listitem:
            - link:
              - /url: /solutions/turnkey-kitchen-restaurant-consultancy
              - text: Turnkey Kitchen & Restaurant Consultancy
          - listitem:
            - link:
              - /url: /solutions/restaurant-brand-growth-consultancy
              - text: Restaurant & Brand Growth Consultancy
          - listitem:
            - link:
              - /url: /solutions/strategic-investment-partner-program
              - text: Strategic Investment Partner Program
          - listitem:
            - link:
              - /url: /solutions/ultimate-strategic-investment-partner-program
              - text: Ultimate Strategic Investment Partner Program
        - generic:
          - link:
            - /url: tel:+971581913320
            - text: +971 58 191 3320
          - link:
            - /url: https://wa.me/971581913320?text=Hello%20Fork%20%26%20Founders%2C%20I%20would%20like%20to%20discuss%20a%20food%20business%20project.
            - text: WhatsApp
          - button: العربية
      - generic:
        - link:
          - /url: /book-a-consultation
          - text: Book a Consultation
  - main [ref=e28]:
    - region [ref=e29]:
      - generic [ref=e31]:
        - paragraph [ref=e32]: Solutions
        - heading "Six Pathways. One Operating Partner." [level=1] [ref=e33]
        - paragraph [ref=e34]: Compare every Fork & Founders model side by side — who it serves, what it includes, how involved you want to be, and what it costs to begin.
    - region "Solution filters" [ref=e35]:
      - generic [ref=e36]:
        - button "All solutions" [ref=e37] [cursor=pointer]
        - button "Launch" [ref=e38] [cursor=pointer]
        - button "Build" [ref=e39] [cursor=pointer]
        - button "Improve" [ref=e40] [cursor=pointer]
        - button "Partner" [ref=e41] [cursor=pointer]
    - region "Solutions list" [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e45]:
          - button "Launch Fully Managed Food Brand" [ref=e46] [cursor=pointer]:
            - generic [ref=e47]:
              - text: Launch
              - generic [ref=e48]: Fully Managed Food Brand
          - generic [ref=e51]:
            - paragraph [ref=e52]: For entrepreneurs seeking a delivery-first brand managed through the Fork & Founders operating network.
            - list [ref=e53]:
              - listitem [ref=e54]:
                - generic [ref=e55]: Best suited for
                - generic [ref=e56]: First-time founders, managed investors
              - listitem [ref=e57]:
                - generic [ref=e58]: Business stage
                - generic [ref=e59]: Idea / pre-launch
              - listitem [ref=e60]:
                - generic [ref=e61]: Customization
                - generic [ref=e62]: Concept from the F&F system
              - listitem [ref=e63]:
                - generic [ref=e64]: Physical location required
                - generic [ref=e65]: "No"
              - listitem [ref=e66]:
                - generic [ref=e67]: Operational involvement
                - generic [ref=e68]: Fully managed by F&F
              - listitem [ref=e69]:
                - generic [ref=e70]: Estimated timeline
                - generic [ref=e71]: Approx. 5 weeks to launch
            - link "Explore Managed Brands" [ref=e72]:
              - /url: /solutions/fully-managed-food-brand
        - generic [ref=e74]:
          - button "Launch Custom Brand Development" [ref=e75] [cursor=pointer]:
            - generic [ref=e76]:
              - text: Launch
              - generic [ref=e77]: Custom Brand Development
          - generic [ref=e80]:
            - paragraph [ref=e81]: For entrepreneurs with their own recipes, menu or original food concept.
            - list [ref=e82]:
              - listitem [ref=e83]:
                - generic [ref=e84]: Best suited for
                - generic [ref=e85]: Chefs & original concept owners
              - listitem [ref=e86]:
                - generic [ref=e87]: Business stage
                - generic [ref=e88]: Concept developed
              - listitem [ref=e89]:
                - generic [ref=e90]: Customization
                - generic [ref=e91]: Fully custom concept
              - listitem [ref=e92]:
                - generic [ref=e93]: Physical location required
                - generic [ref=e94]: "No"
              - listitem [ref=e95]:
                - generic [ref=e96]: Operational involvement
                - generic [ref=e97]: Production managed by F&F
              - listitem [ref=e98]:
                - generic [ref=e99]: Estimated timeline
                - generic [ref=e100]: Scoped after assessment
            - link "Develop My Concept" [ref=e101]:
              - /url: /solutions/custom-brand-development
        - generic [ref=e103]:
          - button "Build Turnkey Kitchen & Restaurant Consultancy" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]:
              - text: Build
              - generic [ref=e106]: Turnkey Kitchen & Restaurant Consultancy
          - generic [ref=e109]:
            - paragraph [ref=e110]: For owners building a cloud kitchen, cafeteria or restaurant from the ground up.
            - list [ref=e111]:
              - listitem [ref=e112]:
                - generic [ref=e113]: Best suited for
                - generic [ref=e114]: New-operation investors & owners
              - listitem [ref=e115]:
                - generic [ref=e116]: Business stage
                - generic [ref=e117]: Pre-build or expanding
              - listitem [ref=e118]:
                - generic [ref=e119]: Customization
                - generic [ref=e120]: Fully custom operation
              - listitem [ref=e121]:
                - generic [ref=e122]: Physical location required
                - generic [ref=e123]: "Yes"
              - listitem [ref=e124]:
                - generic [ref=e125]: Operational involvement
                - generic [ref=e126]: You operate after handover
              - listitem [ref=e127]:
                - generic [ref=e128]: Estimated timeline
                - generic [ref=e129]: Approx. 90 days
            - link "Build My Operation" [ref=e130]:
              - /url: /solutions/turnkey-kitchen-restaurant-consultancy
        - generic [ref=e132]:
          - button "Grow Restaurant & Brand Growth Consultancy" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: Grow
              - generic [ref=e135]: Restaurant & Brand Growth Consultancy
          - generic [ref=e138]:
            - paragraph [ref=e139]: For existing businesses seeking stronger products, systems and performance.
            - list [ref=e140]:
              - listitem [ref=e141]:
                - generic [ref=e142]: Best suited for
                - generic [ref=e143]: Existing restaurants, cafés, kitchens
              - listitem [ref=e144]:
                - generic [ref=e145]: Business stage
                - generic [ref=e146]: Operating business
              - listitem [ref=e147]:
                - generic [ref=e148]: Customization
                - generic [ref=e149]: Targeted improvement scope
              - listitem [ref=e150]:
                - generic [ref=e151]: Physical location required
                - generic [ref=e152]: Existing site(s)
              - listitem [ref=e153]:
                - generic [ref=e154]: Operational involvement
                - generic [ref=e155]: You operate, F&F improves
              - listitem [ref=e156]:
                - generic [ref=e157]: Estimated timeline
                - generic [ref=e158]: 1 – 3 months
            - link "Improve My Business" [ref=e159]:
              - /url: /solutions/restaurant-brand-growth-consultancy
        - generic [ref=e161]:
          - button "Partner Strategic Investment Partner Program" [ref=e162] [cursor=pointer]:
            - generic [ref=e163]:
              - text: Partner
              - generic [ref=e164]: Strategic Investment Partner Program
          - generic [ref=e167]:
            - paragraph [ref=e168]: For qualified partners building a three-brand portfolio through a five-year relationship.
            - list [ref=e169]:
              - listitem [ref=e170]:
                - generic [ref=e171]: Best suited for
                - generic [ref=e172]: Qualified portfolio partners
              - listitem [ref=e173]:
                - generic [ref=e174]: Business stage
                - generic [ref=e175]: Portfolio building
              - listitem [ref=e176]:
                - generic [ref=e177]: Customization
                - generic [ref=e178]: Three-brand portfolio plan
              - listitem [ref=e179]:
                - generic [ref=e180]: Physical location required
                - generic [ref=e181]: No (approved network)
              - listitem [ref=e182]:
                - generic [ref=e183]: Operational involvement
                - generic [ref=e184]: Fully managed by F&F
              - listitem [ref=e185]:
                - generic [ref=e186]: Estimated timeline
                - generic [ref=e187]: Agreed launch schedule
            - link "Explore the Partnership" [ref=e188]:
              - /url: /solutions/strategic-investment-partner-program
        - generic [ref=e190]:
          - button "Partner Ultimate Strategic Investment Partner Program" [ref=e191] [cursor=pointer]:
            - generic [ref=e192]:
              - text: Partner
              - generic [ref=e193]: Ultimate Strategic Investment Partner Program
          - generic [ref=e196]:
            - paragraph [ref=e197]: For high-capacity partners building a portfolio of 20 food brands.
            - list [ref=e198]:
              - listitem [ref=e199]:
                - generic [ref=e200]: Best suited for
                - generic [ref=e201]: High-capacity investors & groups
              - listitem [ref=e202]:
                - generic [ref=e203]: Business stage
                - generic [ref=e204]: Large portfolio building
              - listitem [ref=e205]:
                - generic [ref=e206]: Customization
                - generic [ref=e207]: Twenty-brand phased plan
              - listitem [ref=e208]:
                - generic [ref=e209]: Physical location required
                - generic [ref=e210]: No (approved network)
              - listitem [ref=e211]:
                - generic [ref=e212]: Operational involvement
                - generic [ref=e213]: Fully managed by F&F
              - listitem [ref=e214]:
                - generic [ref=e215]: Estimated timeline
                - generic [ref=e216]: Phased, agreed schedule
            - link "Request a Private Meeting" [ref=e217]:
              - /url: /solutions/ultimate-strategic-investment-partner-program
    - generic [ref=e219]:
      - generic [ref=e220]:
        - heading "Still comparing?" [level=2] [ref=e221]
        - paragraph [ref=e222]: Answer seven questions and get a guided recommendation — or speak directly with our team.
      - generic [ref=e223]:
        - link "Find Your Best Path" [ref=e224]:
          - /url: /find-your-path
        - link "Book a Consultation" [ref=e227]:
          - /url: /book-a-consultation
    - region [ref=e228]:
      - generic [ref=e233]:
        - paragraph [ref=e234]: We Build. You Grow.
        - heading "Ready to Build Your Food Business?" [level=2] [ref=e235]
        - paragraph [ref=e236]: Tell us what you are planning. Our team will review your concept, current operation, menu or investment objective and recommend the most suitable Fork & Founders pathway.
        - generic [ref=e237]:
          - link "Book a Consultation" [ref=e238]:
            - /url: /book-a-consultation
          - link "Find Your Best Path" [ref=e239]:
            - /url: /find-your-path
  - contentinfo "Site footer" [ref=e243]:
    - generic [ref=e244]:
      - generic [ref=e245]:
        - generic [ref=e246]:
          - link "Fork & Founders — home" [ref=e247]:
            - /url: /
            - generic [ref=e252]:
              - generic [ref=e253]: Fork & Founders
              - generic [ref=e254]: We Build. You Grow.
          - paragraph [ref=e255]: Fork & Founders is a Dubai-based food-brand development, restaurant operations, cloud-kitchen, and F&B consultancy company.
          - paragraph [ref=e256]: Expanding Food Brands Through Smart Collaboration
          - generic [ref=e257]:
            - link "Instagram" [ref=e258]:
              - /url: https://instagram.com/forknfounders
            - link "LinkedIn" [ref=e262]:
              - /url: https://linkedin.com/company/forknfounders
        - navigation "Solutions" [ref=e267]:
          - heading "Solutions" [level=3] [ref=e268]
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link "Fully Managed Food Brand" [ref=e271]:
                - /url: /solutions/fully-managed-food-brand
            - listitem [ref=e272]:
              - link "Custom Brand Development" [ref=e273]:
                - /url: /solutions/custom-brand-development
            - listitem [ref=e274]:
              - link "Turnkey Kitchen & Restaurant Consultancy" [ref=e275]:
                - /url: /solutions/turnkey-kitchen-restaurant-consultancy
            - listitem [ref=e276]:
              - link "Restaurant & Brand Growth Consultancy" [ref=e277]:
                - /url: /solutions/restaurant-brand-growth-consultancy
            - listitem [ref=e278]:
              - link "Strategic Investment Partner Program" [ref=e279]:
                - /url: /solutions/strategic-investment-partner-program
            - listitem [ref=e280]:
              - link "Ultimate Strategic Investment Partner Program" [ref=e281]:
                - /url: /solutions/ultimate-strategic-investment-partner-program
        - navigation "Company" [ref=e282]:
          - heading "Company" [level=3] [ref=e283]
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link "About Fork & Founders" [ref=e286]:
                - /url: /about
            - listitem [ref=e287]:
              - link "How It Works" [ref=e288]:
                - /url: /how-it-works
            - listitem [ref=e289]:
              - link "Our Brands" [ref=e290]:
                - /url: /brands
            - listitem [ref=e291]:
              - link "Locations" [ref=e292]:
                - /url: /locations
            - listitem [ref=e293]:
              - link "Careers" [ref=e294]:
                - /url: /careers
            - listitem [ref=e295]:
              - link "Insights" [ref=e296]:
                - /url: /insights
        - navigation "Resources" [ref=e297]:
          - heading "Resources" [level=3] [ref=e298]
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link "Packages & Pricing" [ref=e301]:
                - /url: /packages-and-pricing
            - listitem [ref=e302]:
              - link "Frequently Asked Questions" [ref=e303]:
                - /url: /faq
            - listitem [ref=e304]:
              - link "Submit Your Menu" [ref=e305]:
                - /url: /submit-your-menu
            - listitem [ref=e306]:
              - link "Request an Operational Assessment" [ref=e307]:
                - /url: /operational-assessment
            - listitem [ref=e308]:
              - link "Start a Restaurant Project" [ref=e309]:
                - /url: /start-a-restaurant-project
            - listitem [ref=e310]:
              - link "Find Your Best Path" [ref=e311]:
                - /url: /find-your-path
        - generic [ref=e312]:
          - heading "Contact" [level=3] [ref=e313]
          - list [ref=e314]:
            - listitem [ref=e315]:
              - generic [ref=e319]: "Office #1619, Blue Bay Tower, Dubai, UAE"
            - listitem [ref=e320]:
              - link "+971 58 191 3320" [ref=e321]:
                - /url: tel:+971581913320
            - listitem [ref=e324]:
              - link "WhatsApp +971 58 191 3320" [ref=e325]:
                - /url: https://wa.me/971581913320?text=Hello%20Fork%20%26%20Founders%2C%20I%20would%20like%20to%20discuss%20a%20food%20business%20project.
            - listitem [ref=e328]:
              - link "hello@forknfounders.com" [ref=e329]:
                - /url: mailto:hello@forknfounders.com
            - listitem [ref=e333]: Sunday – Thursday, 9:00 – 18:00 GST
          - generic [ref=e337]:
            - text: Insights Newsletter
            - generic [ref=e338]:
              - textbox "Insights Newsletter" [ref=e339]:
                - /placeholder: Your email
              - button "Join" [ref=e340] [cursor=pointer]
      - generic [ref=e341]:
        - navigation "Legal" [ref=e342]:
          - link "Privacy Policy" [ref=e343]:
            - /url: /legal/privacy-policy
          - link "Terms and Conditions" [ref=e344]:
            - /url: /legal/terms-and-conditions
          - link "Cookie Policy" [ref=e345]:
            - /url: /legal/cookie-policy
          - link "Commercial and Performance Disclaimer" [ref=e346]:
            - /url: /legal/commercial-disclaimer
        - paragraph [ref=e347]: © 2026 Fork & Founders — Dubai, United Arab Emirates. www.forknfounders.com
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | /** Dismiss the cookie banner so it never blocks clicks. */
  4   | async function dismissConsent(page: import('@playwright/test').Page) {
  5   |   await page.addInitScript(() => {
  6   |     localStorage.setItem(
  7   |       'ff_consent',
  8   |       JSON.stringify({ essential: true, analytics: false, marketing: false, ts: Date.now() }),
  9   |     )
  10  |   })
  11  | }
  12  | 
  13  | test.describe('Journey 2 — consultation form', () => {
  14  |   test('validates required fields then submits with a reference', async ({ page }) => {
  15  |     await dismissConsent(page)
  16  |     await page.goto('/book-a-consultation')
  17  | 
  18  |     // submit empty → accessible errors appear
  19  |     await page.getByRole('button', { name: /request my consultation/i }).click()
  20  |     await expect(page.getByRole('alert').first()).toBeVisible()
  21  | 
  22  |     await page.getByLabel(/full name/i).fill('QA Test User')
  23  |     await page.getByLabel(/^email/i).fill('qa@example.com')
  24  |     await page.getByLabel(/^telephone/i).fill('+971500000000')
  25  |     await page.getByLabel(/^country/i).fill('United Arab Emirates')
  26  |     await page.getByLabel(/objective/i).selectOption({ index: 1 })
  27  |     await page.getByRole('button', { name: /request my consultation/i }).click()
  28  | 
  29  |     await expect(page.getByText(/FF-[A-Z0-9]+/)).toBeVisible({ timeout: 10_000 })
  30  |   })
  31  | })
  32  | 
  33  | test.describe('Journey 3 — qualification quiz', () => {
  34  |   test('completes and shows recommendations', async ({ page }) => {
  35  |     await dismissConsent(page)
  36  |     await page.goto('/find-your-path')
  37  |     // answer all 7 questions by picking the first option each time
  38  |     for (let i = 0; i < 7; i++) {
  39  |       await page.locator('[data-quiz-option]').first().click()
  40  |       await page.waitForTimeout(400)
  41  |     }
  42  |     await expect(page.locator('main').getByText(/Recommended for you/i).first()).toBeVisible({ timeout: 10_000 })
  43  |   })
  44  | })
  45  | 
  46  | test.describe('Journey 4 — pricing accuracy', () => {
  47  |   test('category 1 tiers and 5% fee note are shown', async ({ page }) => {
  48  |     await dismissConsent(page)
  49  |     await page.goto('/packages-and-pricing')
  50  |     await expect(page.getByText(/AED 7,000/).first()).toBeVisible()
  51  |     await expect(page.getByText(/AED 6,000/).first()).toBeVisible()
  52  |     await expect(page.getByText(/AED 5,000/).first()).toBeVisible()
  53  |     await expect(page.getByText(/Most Popular/i).first()).toBeVisible()
  54  |     await expect(page.getByText(/5% of the brand.s monthly net sales/i).first()).toBeVisible()
  55  |     // partnership figures present, net-benefit figure forbidden
  56  |     await expect(page.getByText(/AED 300,000/).first()).toBeVisible()
  57  |     await expect(page.getByText(/AED 2,000,000/).first()).toBeVisible()
  58  |     await expect(page.getByText(/6,608,000/)).toHaveCount(0)
  59  |   })
  60  | })
  61  | 
  62  | test.describe('Journey 5 — solutions comparison', () => {
  63  |   test('six models compared side by side', async ({ page }) => {
  64  |     await dismissConsent(page)
  65  |     await page.goto('/solutions')
  66  |     const comparisonHeading = page.getByText(/Compare the Six Models/i)
  67  |     // real wheel scrolls so scroll-triggered reveal animations fire (headless WebKit
  68  |     // does not fire IntersectionObserver for programmatic scrollIntoView)
  69  |     for (let i = 0; i < 14 && !(await comparisonHeading.isVisible()); i++) {
> 70  |       await page.mouse.wheel(0, 700)
      |                        ^ Error: mouse.wheel: Mouse wheel is not supported in mobile WebKit
  71  |       await page.waitForTimeout(250)
  72  |     }
  73  |     await expect(comparisonHeading).toBeVisible()
  74  |     const managedModel = page.getByText(/Fully Managed Food Brand/i).first()
  75  |     await expect(managedModel).toBeVisible()
  76  |     await expect(page.getByText(/Ultimate Strategic Investment/i).first()).toBeVisible()
  77  |   })
  78  | })
  79  | 
  80  | test.describe('Journey 6 — dashboards are fictional', () => {
  81  |   test('technology dashboards carry the illustrative-purposes note', async ({ page }) => {
  82  |     await dismissConsent(page)
  83  |     await page.goto('/technology-and-operations')
  84  |     await expect(
  85  |       page.getByText(/interface visualization(s)? shown for illustrative purposes only/i).first(),
  86  |     ).toBeVisible()
  87  |   })
  88  | })
  89  | 
  90  | test.describe('Journey 7 — navigation & mega menu', () => {
  91  |   test('header nav reaches key pages', async ({ page }) => {
  92  |     await dismissConsent(page)
  93  |     await page.goto('/')
  94  |     await page.getByRole('link', { name: /solutions/i }).first().click()
  95  |     await expect(page).toHaveURL(/\/solutions/)
  96  |     await expect(page.locator('h1').first()).toBeVisible()
  97  |   })
  98  | })
  99  | 
  100 | test.describe('Journey 8 — content integrity guards', () => {
  101 |   test('no placeholder imagery or lorem ipsum anywhere public', async ({ page }) => {
  102 |     await dismissConsent(page)
  103 |     for (const route of ['/', '/solutions', '/packages-and-pricing', '/about']) {
  104 |       await page.goto(route)
  105 |       const html = await page.content()
  106 |       // placehold.co/.it only — the word "placeholder" appears in form input attributes
  107 |       expect(html).not.toMatch(/unsplash|picsum|placehold\.(co|it)|lorem ipsum/i)
  108 |     }
  109 |   })
  110 | 
  111 |   test('no invented testimonials or statistics on homepage', async ({ page }) => {
  112 |     await dismissConsent(page)
  113 |     await page.goto('/')
  114 |     // strip the mandatory negation disclaimer ("...are not ... guaranteed returns...")
  115 |     // before scanning — compliance language legitimately contains these words
  116 |     const html = (await page.content()).replace(
  117 |       /All figures are illustrative examples[\s\S]*?signed agreement\./,
  118 |       '',
  119 |     )
  120 |     expect(html).not.toMatch(/testimonial|trusted by \d|\d+ satisfied|guaranteed/i)
  121 |   })
  122 | })
  123 | 
  124 | test.describe('Journey 9 — partner application gate', () => {
  125 |   test('partner form requires disclaimer acknowledgement and never collects payment', async ({ page }) => {
  126 |     await dismissConsent(page)
  127 |     await page.goto('/strategic-partner-application')
  128 |     await expect(page.locator('input[type="checkbox"]')).toBeVisible()
  129 |     const html = await page.content()
  130 |     expect(html).not.toMatch(/pay now|checkout|card number/i)
  131 |   })
  132 | })
  133 | 
```