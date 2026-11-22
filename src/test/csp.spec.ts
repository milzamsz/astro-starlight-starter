import { test, expect, type Page } from "@playwright/test";

/**
 * Every page must render without Content-Security-Policy violations.
 * (Astro emits the CSP as a <meta> tag, so `astro preview` enforces it.)
 */
const PAGES = [
  "/docs/",
  "/docs/getting-started/quick-start/",
  "/docs/guides/",
  "/docs/reference/docs-config/",
];

async function collectViolations(page: Page) {
  const violations: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && /Content Security Policy/i.test(message.text())) {
      violations.push(message.text());
    }
  });
  await page.addInitScript(() => {
    document.addEventListener("securitypolicyviolation", (event) => {
      console.error(
        `Content Security Policy violation: ${event.violatedDirective} blocked ${event.blockedURI || "inline"}`,
      );
    });
  });
  return violations;
}

test.describe("content security policy", () => {
  for (const path of PAGES) {
    test(`no CSP violations on ${path}`, async ({ page }) => {
      const violations = await collectViolations(page);
      await page.goto(path, { waitUntil: "networkidle" });
      await expect(page.locator('meta[http-equiv="content-security-policy"]')).toHaveCount(1);
      expect(violations).toEqual([]);
    });
  }

  test("docs search (Pagefind WebAssembly) works under CSP", async ({ page }) => {
    const violations = await collectViolations(page);
    await page.goto("/docs/", { waitUntil: "networkidle" });
    await page.locator("button[data-open-modal]").first().click();
    const input = page.locator("site-search dialog input").first();
    await expect(input).toBeVisible();
    await input.fill("frontmatter");
    await expect(page.locator("site-search .pagefind-ui__result").first()).toBeVisible();
    expect(violations).toEqual([]);
  });
});
