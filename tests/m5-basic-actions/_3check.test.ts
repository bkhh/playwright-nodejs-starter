import { expect, test } from "@playwright/test";

test('Check test', async ({ page }) => {
    await page.goto('');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const msg = 'Message';

    await checkbox.check();
    await textarea.fill(msg);

    console.log('textarea: ', await textarea.inputValue());
    await expect(textarea).toHaveValue(msg);
});