import { test, expect } from '@playwright/test';
const testData = JSON.parse(JSON.stringify(require('../testdata.json')));

test('should add item to cart successfully', async ({ page }) => {

    //navigate to url
    await page.goto('https://www.saucedemo.com');

    //login actions
    await page.locator('#user-name').fill(testData.username);
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();

    //wait for item to be visible
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();

    //click on btn to add item to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //click on shopping cart link
    await page.locator('[data-test="shopping-cart-link"]').click();

    //wait for the cart page to load
    await page.waitForLoadState('domcontentloaded');

    //assertion to verify correct item added to cart
    const itemName = await page.locator('.inventory_item_name').textContent();
    expect(itemName).toBe('Sauce Labs Backpack');

    //assertion to verify item price
    const itemPrice = await page.locator('.inventory_item_price').textContent();
    expect(itemPrice).toBe('$29.99');

    await test.info().attach('Cart Screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});