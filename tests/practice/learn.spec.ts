import { test, expect } from '@playwright/test';
//test untuk function, expect untuk validasi

test('learn pw on website tokopedia', async ({ page }) => {
    await page.goto('https://www.tokopedia.com/');
    await page.locator('button:has(svg)').click();

    await page.locator('[data-testid="btnHeaderRegister"]').click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://www.tokopedia.com/register')
    await page.locator('#input-phone-email').fill('bellamanope@gmail.com')
    await page.getByTestId('btn-submit')
})
