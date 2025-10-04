import { expect, test } from "@playwright/test";
import fs from "fs";

test('Download a single file and assert', async ({ page }) => {
    await page.goto('./savings.html');

    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('button', { name: 'Download our offer' }).click();

    const download = await downloadPromise;
    const suggestedFileName = download.suggestedFilename;
    const filePath = 'download/' + suggestedFileName;
    await download.saveAs(filePath);

    expect(await download.failure()).toBeNull();
    expect(fs.existsSync(filePath)).toBeTruthy();

    const fileSize = fs.statSync(filePath).size;
    console.log(fileSize);
    expect(fileSize).toBeLessThan(20000);
});