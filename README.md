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

```
node -v
npm -v
```

Playwright and its dependencies require Node.js. If you haven’t installed it yet, download and install it from:
Node.js Official Website: https://nodejs.org/

- (Optional) **Docker**.
If you want to run tests inside a containerized environment, install Docker:
Official Website: https://www.docker.com/


## 2. Clone or Download the Repository

```
git clone git@github.com:khasssabi/tages_tests.git
cd tages_tests
```


## 3. Install Dependencies and Playwright Browsers

```
npm install
npx playwright install --with-deps
```


## 4. Running Tests

### Run All Tests With a Report

```
npm run test:allure
```

### Run All Tests Without a Report

```
npx playwright test
```

### Run a Specific Test File

```
npx playwright test tests/specs/main.header_menu.spec.js
```

### Run Tests in Headed Mode

```
npx playwright test --headed
```

### Run Tests with Debugging

```
npx playwright test --debug
```


## Running Tests in Different Browsers

### To run tests in a **specific browser**, use:

```
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=safari
```

### To run **all browsers at once**:

```
npx playwright test
```

## 5. Generating, Viewing and Deleting Test Reports

### Generate Test Reports After Running Tests:

```
npm run allure:report
```

### Delete Previous Test Reports:

```
docker run --rm -p 8080:8080 tages_tests
```

### Manually Open the Latest Test Report:

```
npm run allure:open
```

---


## 6. Running Tests in Docker (Optional)

If you want to run tests in Docker instead of locally, follow these steps:


### 1.	Build the Docker Image:

```
docker build -t tages_tests .
```


### 2.	Run Tests With a Report Inside Docker:

```
docker run –rm -p 8080:8080 tages_tests
```


### 3. View Allure Report in Browser:

Open **http://localhost:8080**


---

## 7. Troubleshooting

## Issue: Allure Report Fails to Open with an error like:
```
java.io.IOException: Failed to bind to 0.0.0.0/0.0.0.0:8080
Caused by: java.net.BindException: Address already in use
```
This means port 8080 is already in use. 
Find and Kill the Process Using Port 8080:

```
lsof -i :8080
kill -9 <PID>
```

### Issue: when you’re building a Docker Image and seeing an error like:

```
ERROR: Cannot connect to the Docker daemon at unix:///Your-Path/.docker/run/docker.sock. Is the docker daemon running?
```

run:

```
open -a Docker
```

### Issue: when you're running tests looking like:

```
docker: Error response from daemon: driver failed programming external connectivity on endpoint recursing_lovelace (eb0408ac378c8d675064944acbda60d96bb4dfb93b696464a017351fbfc6dd7f): Bind for 0.0.0.0:8080 failed: port is already allocated.
```

run:

```
open -a Docker
lsof -i :8080
kill -9 <PID>
```

## 8. Important Notes

### VPN Considerations

Disable VPN before running tests. If connected to a VPN, test execution may slow down 2-5 times, causing flakiness due to network delays.


### Best Practices

Use Playwright Locators instead of XPath (when possible) for better stability.
