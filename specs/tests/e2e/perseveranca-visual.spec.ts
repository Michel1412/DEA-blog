import { expect, test } from '@playwright/test'

test.describe('Perseverança — layout ministry-landing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ministerios/perseveranca')
  })

  test('hero com título Ministério Perseverança', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Perseverança')
    await expect(
      page.getByText('Formar servos gentis e generosos do amor de Deus', { exact: true }),
    ).toBeVisible()
  })

  test('caminhos de formação', async ({ page }) => {
    await expect(page.getByText('Formação e oração')).toBeVisible()
    await expect(page.getByText('Perseverança na vocação')).toBeVisible()
  })

  test('citação e valores', async ({ page }) => {
    await expect(
      page.getByText('Servir com amor, perseverar com fé, ser gentil e generoso'),
    ).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Gentileza' })).toBeVisible()
  })

  test('rodapé global presente', async ({ page }) => {
    await expect(page.getByTestId('site-footer')).toBeVisible()
  })
})
