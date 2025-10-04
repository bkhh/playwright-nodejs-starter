import { expect, test } from "@playwright/test";

test('Check test', async ({ page }) => {
    await page.goto('/');
    expect(await page.title()).toBe('Credit Association');
    await expect(page).toHaveTitle('Credit Association');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('textarea');
    const message = 'Recommended by a friend';

    await expect(textarea).toBeDisabled();
    expect(await textarea.inputValue()).toBeFalsy();
    await expect(textarea).toBeEmpty();

    await checkbox.check();
    await expect(textarea).toBeEnabled();

    await textarea.fill(message);
    expect(await textarea.inputValue()).toBe(message);
    await expect(textarea).toHaveValue(message);

    await page.getByRole('button', { name: 'Register' }).click();
    // const feedback = page.locator('.inavlid-feedback');
    const feedback = page.getByText('Valid');
    await expect(feedback).toHaveCount(3);

    for (const f of await feedback.all()) {
        await expect(f).toBeVisible();
    }

});

test('Test with negating matchers', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('location')).toContainText('New York');
});