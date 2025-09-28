import { test } from "@playwright/test";
import { log } from "console";

test('Test with page fixture', async ({ page }) => { 
    await page.goto('https://playwright.dev/');

    log('Text content: ', await page.title());
});