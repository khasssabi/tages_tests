import { test, expect } from '@playwright/test';
const MainPage = require('../pages/main.page.js');
const formData = require('../data/formData');

test.describe('Form validation', () => {
  let mainPage;
  
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigate();
  });
  
    test('Should submit the form successfully and verify resubmission', async ({ page }) => {
        await mainPage.clickForm();
        await expect(mainPage.page).toHaveURL(/\/#form/);
        await mainPage.fillForm(formData.validData);

        // Ensure values in the fields match
        await expect(mainPage.nameField).toHaveValue(formData.validData.name);
        await expect(mainPage.phoneField).toHaveValue(/\+?7\s?999\s?999\s?99\s?99/);
        await expect(mainPage.companyField).toHaveValue(formData.validData.company);
        await expect(mainPage.emailField).toHaveValue(formData.validData.email);
        await expect(mainPage.commentField).toHaveValue(formData.validData.comment);
        await mainPage.submitForm();

        // Verify successful form submission
        await mainPage.verifySuccessMessages();

        // Click "Resubmit" button and check if form reappears
        await mainPage.formSuccessButton.click();
        await mainPage.nameField.waitFor({ state: 'visible', timeout: 6000 });

        // Ensure form fields are visible again
        await mainPage.verifyForm();
    });

    test('Verify form submission with a long name', async ({ page }) => { // Fields ideally should have limit        
        await mainPage.fillForm(formData.longNameFields);
        await mainPage.submitForm();

        await mainPage.verifySuccessMessages();
    });

    test('Verify form submission with special chars', async ({ page }) => { // Special chars should be forbidden
        await mainPage.fillForm(formData.specialChars);
        await mainPage.submitForm();

        await mainPage.verifySuccessMessages();   
    });

    test('Verify validation for name field with only space', async ({ page }) => { // A name field containing only spaces should probably be invalid
        await mainPage.fillForm(formData.spaceInName);
        await mainPage.submitForm();
        
        await mainPage.verifySuccessMessages();   
    });

    test('Should display errors when submitting empty fields', async ({ page }) => { 
        await mainPage.fillForm(formData.emptyFields);
        await mainPage.submitForm();
        
        // Ensure error messages appear for required fields
        await expect(mainPage.formError.nth(0)).toBeVisible();
        await expect(mainPage.formError.nth(1)).toBeVisible(); 
        await expect(mainPage.formError.nth(2)).toBeVisible();
        console.log(await mainPage.formError.count());
        
    });

    test('Should display error when submitting an invalid phone number', async ({ page }) => { 
        await mainPage.fillForm(formData.invalidPhone);
        await mainPage.submitForm();
        
        await expect(mainPage.formError).toHaveText(/Невалидное значение/);
    });
});

test.describe('Invalid email validation', () => {
    let mainPage;  

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page); 
        await mainPage.navigate();
    });
    formData.invalidEmails.forEach((email) => {  
      test(`Invalid email: ${email}`, async ({ page }) => {
        console.log(`Testing invalid email: ${email}`);
        
        await mainPage.clickForm();
        await mainPage.fillForm(email);
        await mainPage.submitForm();
  
        await expect(mainPage.formError).toHaveText(/Невалидное значение/);
      });
    });
});