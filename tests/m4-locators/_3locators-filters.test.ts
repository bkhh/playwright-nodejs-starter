import { expect, test } from "@playwright/test";

test('Filtering demo', async ({ page }) => {
    await page.goto('savings.html');

    const rows = page.getByRole('row');
    console.log(await rows.count());

    const row = rows.filter({ hasText: 'Competition' });
    console.log(await row.count());

    const cell = row.getByRole('cell').filter({ hasNotText: '2%' });
    console.log(await cell.count());
    expect(await cell.count()).toBeGreaterThan(1);
});