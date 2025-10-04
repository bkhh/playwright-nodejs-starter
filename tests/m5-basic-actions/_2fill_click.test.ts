import { test } from "@playwright/test";

test('Fill test', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('First name').fill('Banafsheh');
    await page.getByLabel('Date of birth').fill('1981-08-06');
});

test('Click demo', async ({ page }) => {
    await page.goto('/');

    const btn = page.getByRole('button', { name: 'Register' });

    await btn.click({ clickCount: 5 });

    await btn.dblclick({});
});