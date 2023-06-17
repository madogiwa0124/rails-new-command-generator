import { test, expect } from "@playwright/test";

test("snapshot", async ({ page }) => {
  await page.goto("/rails-new-command-generator/");
  await expect(page).toHaveTitle("Rails new command generator");
  await expect(page).toHaveScreenshot();
});
