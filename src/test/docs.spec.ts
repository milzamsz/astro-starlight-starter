import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/docs/",
  "/docs/guides/",
  "/docs/guides/write-content/",
  "/docs/reference/frontmatter/",
];

test.describe("docs layout", () => {
  test("tabs, sidebar and breadcrumbs render", async ({ page }) => {
    await page.goto("/docs/guides/write-content/");
    await expect(page.getByRole("navigation", { name: "Sections" }).getByRole("link")).toHaveText(["Guide", "Reference"]);
    await expect(page.locator(".sidebar-content a[aria-current='page']")).toHaveText("Write content");
    await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toContainText("Guides");
  });

  test("the Reference tab shows only the reference group", async ({ page }) => {
    await page.goto("/docs/reference/docs-config/");
    await expect(page.getByRole("navigation", { name: "Sections" }).getByRole("link", { name: "Reference" })).toHaveAttribute("aria-current", "page");
    await expect(page.locator(".sidebar-content .nav-scroll a")).toHaveCount(4); // index + 3 articles
  });

  test("logo goes to the docs home and there is no language menu with one locale", async ({ page }) => {
    await page.goto("/docs/guides/");
    await expect(page.locator(".sidebar-content .site-brand")).toHaveAttribute("href", "/docs/");
    await expect(page.locator("[data-lang-menu]")).toHaveCount(0);
  });
});

test.describe("WCAG AA accessibility", () => {
  for (const route of routes) {
    for (const scheme of ["light", "dark"] as const) {
      test(`no axe violations on ${route} (${scheme})`, async ({ page }) => {
        test.setTimeout(90_000);
        await page.emulateMedia({ colorScheme: scheme });
        await page.goto(route, { waitUntil: "domcontentloaded" });
        const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag22aa"]).analyze();
        expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
      });
    }
  }
});
