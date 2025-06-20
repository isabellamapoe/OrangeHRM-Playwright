import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();


  await expect(page).toHaveURL('/dashboard/index')
  const dashboardTitle = page.getByRole('heading', {name : 'Dashboard'})
  await expect(dashboardTitle).toBeVisible()
});