import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.tokopedia.com/');
    await page.locator('div.css-11hzwo5 button:has(svg)').click();
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000)
})


test.describe('all links', {tag : '@all_links'}, () => {
    test.describe('valid links', {tag : '@validLinks'}, () => {
        test('test step 1', async ({ page }) => {
            await page.getByRole("link", {name : 'samsung note 10'}).click();
        })

        test('test step 2', async ({ page }) => {
            await page.getByRole("link", {name : 'charger mobil'}).click();
        })

        test('test step 3', async ({ page }) => {
            await page.getByRole("link", {name : 'samsung a73'}).click();
        })

        test('test step 4', async ({ page }) => {
            await page.getByRole("link", {name : 'pull up bar'}).click();
        })
    })
    
})



