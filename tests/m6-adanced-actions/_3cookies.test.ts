import { test } from "@playwright/test";

test('Cookies - context', async ({ page }) => {
    await page.goto('/');

    console.log(await page.context().cookies());

    await page.context().addCookies([{
        name: 'Cookie1',
        value: '123',
        url: 'https://playwright.dev/'
    }]);

    console.log(await page.context().cookies());
});