import { expect, test } from "@playwright/test";
import { log } from "console";

test('Simple assertions', async () => {

    expect('a').toEqual('a');
    expect(2).toBeLessThan(3);
    expect(null).toBeFalsy();
});

test('Test with simple auto-retrying assertions', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    await expect(page).toHaveTitle('Credit Association');
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.getByTestId('location')).toContainText('New York');

    // let x = await expect (page.getByText('Register')).toBeFalsy();
    // let x = await expect(page.getByText('Register'));
    // log('x: ', x);
});