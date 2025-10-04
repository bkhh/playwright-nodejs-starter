import { test } from "@playwright/test";

test('Check console', async ({ page }) => {
    page.on('console', msg => console.log(msg));
    page.on('pageerror', err => console.log(err));

    await page.goto('/');

    await page.getByRole('button', { name: 'Register' }).click();
});