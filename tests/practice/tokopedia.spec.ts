import { test, expect } from '@playwright/test';

test('tokopedia topup', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');

  const dialogButton = page.getByRole('dialog').getByRole('button');
  if (await dialogButton.isVisible().catch(() => false)) {
    await dialogButton.click();
  }

  await page.locator('.css-1b94wk9-unf-overlay').waitFor({ state: 'hidden' });

  await page.waitForTimeout(1000);

  await page.getByTestId('divHomeSlider').getByRole('button', { name: 'next' }).click();
  await page.getByTestId('icnHomeDynamicIcon#3').click();

  await expect(page).toHaveURL(/top-up-tagihan/);
});
