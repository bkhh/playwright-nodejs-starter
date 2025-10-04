import { expect, test } from "@playwright/test";

test.skip('will not run', async ({ page }) => {
    console.log('This should not be printed.');
});

test('Skip conditionally ', async ({ page, browserName }) => {
    console.log('browserName:', browserName);
    test.skip(browserName === 'chromium', 'Does not woek on Chromium.');
    expect(1).toBeGreaterThan(2);
});

test('Must fail', async () => {
    test.fail();
    expect(1).toBeGreaterThan(2);
});
