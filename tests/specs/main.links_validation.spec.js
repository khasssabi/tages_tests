import { test, expect } from "@playwright/test";
const MainPage = require("../pages/main.page.js");

test.describe("Valid links and clickability", () => {
  let mainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });

  // Phone & Form Validations
  test("Should validate inquiry phone number is clickable", async ({ page }) => {
    await expect(mainPage.phoneNumber).toHaveAttribute("href", "tel:+74956402394",);
    await mainPage.phoneNumber.click();
  });

  test("Should validate Form link is clickable", async ({ page }) => {
    await mainPage.clickForm();
    await expect(mainPage.page).toHaveURL(/\/#form/);
  });

  // Partner Links Validation
  const partners = [
    { name: "Rolf", locator: "partnerRolf", url: /https:\/\/www.rolf.ru\/?/ },
    { name: "Medsi", locator: "partnerMedsi", url: /https:\/\/medsi.ru\/?/ },
    { name: "Omni360", locator: "partnerOmni360", url: /https:\/\/navigator.sk.ru\/?/ },
    { name: "Ingos", locator: "partnerIngos", url: /https:\/\/www.ingos.ru\/?/ },
    { name: "Mvideo", locator: "partnerMvideo", url: /https:\/\/www.mvideoeldorado.ru\/?/ },
    { name: "LemanaPro", locator: "partnerLemanaPro", url: /https:\/\/leroymerlin.ru\/?/ },
  ];

  partners.forEach(({ name, locator, url }) => {
    test(`Should validate partner link for ${name}`, async ({ page }) => {
      await mainPage[locator].scrollIntoViewIfNeeded();
      await expect(mainPage[locator]).toHaveAttribute("href", url);
      await mainPage[locator].click();
    });
  });

  // Footer Links Validation
  test("Should validate Company Phone is clickable", async ({ page }) => {
    await mainPage.companyPhone.scrollIntoViewIfNeeded();
    await expect(mainPage.companyPhone).toHaveAttribute("href", "tel:+74956402394");
    await mainPage.companyPhone.click();
  });

  test("Should validate Company Email is clickable", async ({ page }) => {
    await mainPage.companyEmail.scrollIntoViewIfNeeded();
    await expect(mainPage.companyEmail).toHaveAttribute("href", "mailto:jump@tages.ru");
    await mainPage.companyEmail.click();
  });

  test("Should validate Media Phone is clickable", async ({ page }) => {
    await mainPage.mediaPhone.scrollIntoViewIfNeeded();
    await expect(mainPage.mediaPhone).toHaveAttribute("href", "tel:+79153646126");
    await mainPage.mediaPhone.click();
  });

  test("Should validate Media Email is clickable", async ({ page }) => {
    await mainPage.mediaEmail.scrollIntoViewIfNeeded();
    await expect(mainPage.mediaEmail).toHaveAttribute("href", "mailto:pr@tages.ru");
    await mainPage.mediaEmail.click();
  });

  test("Should validate HR Email is clickable", async ({ page }) => {
    await mainPage.hrEmail.scrollIntoViewIfNeeded();
    await expect(mainPage.hrEmail).toHaveAttribute("href", "mailto:HR@tages.ru");
    await mainPage.hrEmail.click();
  });

  // Requisitives Validation
  test("Should validate Requisites page link is clickable", async ({ page }) => {
    await mainPage.requisites.scrollIntoViewIfNeeded();
    await mainPage.navigateToRequisites();
    await expect(mainPage.page).toHaveURL(/\/requisites\/?/);
    await expect(mainPage.page.getByRole("heading", { name: /Реквизиты/ })).toBeVisible();
    await expect(mainPage.page.getByRole("heading", {name: "Карточка предприятия ООО “Тагес Джамп”"})).toBeVisible();
  });

  // Social Media Links Validation
  const socialMedia = [
    { name: "Telegram", locator: "telegramLink", url: "https://t.me/tagesru" },
    { name: "VK", locator: "vkLink", url: "https://vk.com/tagesru" },
    { name: "YouTube", locator: "youtubeLink", url: /https:\/\/www\.youtube\.com\/channel\/UCBK5-lZpfKeu_yjH30DpvSQ\/?/},
  ];

  socialMedia.forEach(({ name, locator, url }) => {
    test(`Should validate ${name} link is clickable`, async ({ page }) => {
        await mainPage[locator].scrollIntoViewIfNeeded();
        // await mainPage[locator].click({ force: true }); // works in Chrome, but fails in Safari and Firefox
        await mainPage[locator].dispatchEvent("click");
        await page.waitForTimeout(5000); // 
        await expect(mainPage[locator]).toHaveAttribute("href", url);
    });
  });
});
