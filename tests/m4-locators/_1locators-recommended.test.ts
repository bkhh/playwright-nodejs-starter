import { expect, test } from "@playwright/test";

test('Recommended built-in locators examples', async ({ page }) => {
    await page.goto('');

    const firstName = page.getByLabel('First name');
    await firstName.fill('Banafsheh');
    await firstName.clear();

    await page.getByRole('button', { name: 'Register', disabled: false }).click();

    await expect (page.getByTestId('textarea')).toBeDisabled();

    const warning = page.getByText('Valid last name is required');
    expect(warning).toBeVisible();

    // await page.getByTestId('textarea').fill('Hej');
    // await expect (page.getByTestId('textarea')).toHaveValue('Hej');
    // const textareaCount = await page.getByTestId('textarea').count();
    // expect (textareaCount).toBeTruthy();
    // console.log(textareaCount);
});