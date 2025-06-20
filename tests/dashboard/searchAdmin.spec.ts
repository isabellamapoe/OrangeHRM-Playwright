import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
})

test.describe('search admin by username', () => {
    test('search isabella', async ({ page }) => {
        const userName = page.locator('[class="oxd-input oxd-input--active"]').last();
        const btnsearch = page.getByRole('button',{ name :'search' });
        const tableRow = page.locator('[class="oxd-table-card"] [role="cell"]').nth(1)

        await userName.fill('isabellala');
        await btnsearch.click();

        await page.waitForSelector('[class="oxd-table-card"]');
        await expect(tableRow).toHaveText('isabellala')
        
    });

    test('search juan', async ({ page }) => {
        const userName = page.locator('[class="oxd-input oxd-input--active"]').last();
        const btnsearch = page.getByRole('button',{ name :'search' });
        const tableRow = page.locator('[class="oxd-table-card"] [role="cell"]').nth(1)

        await userName.fill('juan123');
        await btnsearch.click();

        await page.waitForSelector('[class="oxd-table-card"]');
        await expect(tableRow).toHaveText('juan123')
        
    });
})

