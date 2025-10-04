import { expect, test } from "@playwright/test";
import { log } from "console";

test.skip('Multiple matches fails', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link').click();
});

test('Multile matches - first, last, nth', async ({ page }) => {
    await page.goto('/');

    const buttons = page.getByRole('button');

    log(await buttons.nth(0).textContent());
    log(await buttons.nth(1).textContent());
    log(await buttons.nth(2).textContent());
});

test('Multiple matches test - count or iterate', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Register' }).click();

    const feedback = page.locator('.invalid-feedback');

    expect(await feedback.count()).toBe(3);

    for (const message of await feedback.all()) {
        log(`${await message.textContent()}`);
    }
});