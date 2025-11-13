# Playwright Automation Test – Saucedemo Add to Cart

## 🧩 Overview
This repository contains an automated Playwright test that verifies adding the "Sauce Labs Backpack" item to the shopping cart on [saucedemo.com](https://www.saucedemo.com).

## 🧰 Tools & Frameworks
- **Language:** JavaScript (Node.js)
- **Framework:** Playwright Test
- **Browser:** Chromium, firefox, webkit (default, runs headless)

## 🧪 Test Scenario
1. Navigate to the Saucedemo login page.
2. Login using:
   - Username: `standard_user`
   - Password: `secret_sauce`
3. Add **“Sauce Labs Backpack”** to the shopping cart.
4. Go to the cart and verify:
   - Item name is **“Sauce Labs Backpack”**
   - Item price is **$29.99**

## ▶️ How to Run

```bash
# Install dependencies
npm init playwright@latest

Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests (#Folder name should be tests not e2e#)
    -> Delete example.spec.js from tests folder
√ Add a GitHub Actions workflow? (Y/n) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

# Run the test
npx playwright test --headed

# Show Report - you can also see the screenshot in the report
npx playwright show-report
