import { expect, test } from "@playwright/test";

test('Select test', async ({ page }) => {
    page.goto('/savings.html');

    const deposit = page.getByTestId('deposit');
    const period = page.getByTestId('period');
    const result = page.getByTestId('result');

    await deposit.fill('100');
    await period.selectOption('6 months');
    await expect(result).toContainText('After 6 Months');

    await period.selectOption({ label: '1 year' });
    await expect(result).toContainText('After 1 Year');

});