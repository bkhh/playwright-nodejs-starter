import { expect, test } from "@playwright/test";
import { log } from "console";

const name = 'Banafsheh';

test('Storae - test from the UI perspective', async ({ page }) => {
    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.reload();
    await expect(input).toHaveValue('');

    await input.fill(name);
    await page.getByRole('button', { name: 'Save input' }).click();
    await page.reload();
    await expect(input).toHaveValue(name);
});

test('Local storage', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('First name').fill(name);
    await page.getByRole('button', { name: 'Save input' }).click();

    const storage = await page.context().storageState();
    console.log(storage.cookies);
    console.log(storage.origins[0].localStorage);
});

test('Session or local storae', async ({ page }) => {
    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.getByRole('button', { name: 'Save input' }).click();

    const localStorage = await page.evaluate(() => window.localStorage);
    log('localStorage: ', localStorage);

    // clear
    page.evaluate(() => window.localStorage.clear());
    page.reload();
    await expect(input).toHaveValue('');

    // set
    await page.evaluate(setLocalStorage);
    await page.reload();
    await expect(input).toHaveValue(name);
});

function setLocalStorage() {
    localStorage.setItem('firstName', 'Banafsheh');
}