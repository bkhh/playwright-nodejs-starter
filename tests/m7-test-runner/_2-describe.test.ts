import { test } from "@playwright/test";

test.describe('Group A', async () => {
    test('Test A.1', async ({ page }) => {
        await page.goto('');
        console.log('Test A.1');
    });

    test('Test A.2', async ({ page }) => {
        await page.goto('');
        console.log('Test A.2');
    });

});

test.describe('Group B', async () => {
    test('Test B.1', async ({ page }) => {
        await page.goto('');
        console.log('Test B.1');
    });

    test('Test B.2', async ({ page }) => {
        await page.goto('');
        console.log('Test B.2');
    });

});