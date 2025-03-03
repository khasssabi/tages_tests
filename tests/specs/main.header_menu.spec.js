import { test, expect } from "@playwright/test";
import MainPage from "../pages/main.page.js";

test.describe("Validate Navigation Between Header Links in a Single Flow", () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  test("Should verify navigation across all header links", async ({ page }) => {
    await test.step("Navigate to Main Page and verify", async () => {
      await expect(mainPage.page).toHaveURL(/\/?$/);
      await expect(mainPage.page).toHaveTitle(/TAGES/);
    });

    await test.step("Navigate to About Page and verify", async () => {
      await mainPage.navigateToAbout();
      await expect(mainPage.page).toHaveURL(/\/about\/?$/);
      await expect(mainPage.page).toHaveTitle(/О компании/);
    });

    await test.step("Navigate to Academy Page and verify", async () => {
      await mainPage.navigateToAcademy();
      await expect(mainPage.page).toHaveURL(/\/academy\/?$/);
      await expect(
        mainPage.page.getByRole("heading", { name: /TAGES.*ACADEMY/ }),
      ).toBeVisible();
    });

    await test.step("Navigate to Contacts Page and verify", async () => {
      await mainPage.navigateToContacts();
      await expect(mainPage.page).toHaveURL(/\/contacts\/?$/);
      await expect(
        mainPage.page.getByRole("heading", { name: /Контакты/ }),
      ).toBeVisible();
    });
  });
});
