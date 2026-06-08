import { test, expect } from '@playwright/test';

test('Проверка отображения элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute();
  await expect(page.getByRole('button', { name: 'Node.js' })).toHaveAttribute();
  await expect(
    page.getByRole('heading', { name: 'Playwright enables reliable' }),
  ).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute();
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute();
  await expect(
    page.getByRole('button', { name: 'Switch between dark and light' }),
  ).toHaveAttribute();
  await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toHaveAttribute();
});

test('Проверка названия элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('Docs');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
});

test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );

  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute(
    'href',
    '/mcp/introduction',
  );
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute(
    'href',
    '/agent-cli/introduction',
  );
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});

test('Проверка переключения лайт мода', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('Проверка заголовка страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable web automation for testing, scripting, and AI agents.',
  );
});

test('Проверка кнопки Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
