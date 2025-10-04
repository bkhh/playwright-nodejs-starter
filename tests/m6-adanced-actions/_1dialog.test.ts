import { expect, test } from "@playwright/test";

const name = 'Banafsheh';

test('Dialog test - default handling is to dismiss', async ({ page }) => {
    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await expect(input).toHaveValue(name);

    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(input).toHaveValue(name);
});

test('Dialog test - OK or dismiss', async ({ page }) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await expect(input).toHaveValue(name);

    page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'Clear' }).click();

    await expect(input).toHaveValue('');
});