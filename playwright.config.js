// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  fullyParallel: true,
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  projects: [
    {
      name: 'Chromium',  
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Safari',
      use: { browserName: 'webkit' },  
    }
  ],
  use: {
    headless: true,
    baseURL: "https://tages.ru",
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on",
    screenshot: "on",
    video: "on",
  },
  reporter: [["line"], ["allure-playwright"]],
});
