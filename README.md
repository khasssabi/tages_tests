# Automated UI Testing for the Tages main page using Playwright

Overview

This project contains **automated UI tests** for validating:
- **Navigation** (Ensuring page header links work correctly)
- **Form Interactions** (Validating form fields and submission)
- **Links Accessibility** (Checking clickable links and attributes)

The tests are written using **Playwright** and include **Allure reporting** for clear test results.

---

# Getting Started

## 1. Install Dependencies

- Before running the tests, make sure you have **Node.js** installed:

`node -v`

`npm -v`

Playwright and its dependencies require Node.js. If you haven’t installed it yet, download and install it from:
Node.js Official Website: https://nodejs.org/

- (Optional) **Docker**.
If you want to run tests inside a containerized environment, install Docker:
Official Website: https://www.docker.com/


## 2. Clone or Download the Repository

`git clone git@github.com:khasssabi/tages_tests.git`

`cd tages_tests`


## 3. Install Dependencies and Playwright Browsers

`npm install`

`npx playwright install --with-deps`


## 4. Running Tests

### Run All Tests With a Report

`npm run test:allure`

### Run All Tests Without a Report

`npx playwright test`

### Run a Specific Test File

`npx playwright test tests/specs/main.header_menu.spec.js`

### Run Tests in Headed Mode

`npx playwright test --headed`

### Run Tests with Debugging

`npx playwright test --debug`


## Running Tests in Different Browsers

### To run tests in a **specific browsers**, use:

`npx playwright test --project=chromium`  # Chrome

`npx playwright test --project=firefox`   # Firefox

`npx playwright test --project=safari`    # Safari

### To run **all browsers at once**:

`npx playwright test`

## 5. Generating and Viewing Test Reports

### Generate Test Reports After Running Tests:

`npm run allure:report`

### Delete Previous Test Reports:

`rm -rf allure-results allure-report`

### Manually Open the Latest Test Report:

`npm run allure:open`

---


## Running Tests in Docker (Optional)

If you want to run tests in Docker instead of locally, follow these steps:


### 1.	Build the Docker Image:

`docker build -t tages_tests .`


### 2.	Run Tests With a Report Inside Docker:

`docker run –rm -p 8080:8080 tages_tests`


### 3. View Allure Report in Browser:

Open **http://localhost:8080**


---


## Important Notes

### VPN Considerations

Disable VPN before running tests. If connected to a VPN, test execution may slow down 2-5 times, causing flakiness due to network delays.


### Best Practices

Use Playwright Locators instead of XPath for better stability.
