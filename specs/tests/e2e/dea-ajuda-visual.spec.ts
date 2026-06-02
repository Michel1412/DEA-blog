import { expect, test } from '@playwright/test'

test.describe('DEA Ajuda — regressão visual aprovada', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ministerios/dea-ajuda', {
      waitUntil: 'domcontentloaded',
      timeout: 60_000,
    })
  })

  test('hero com título DEA Ajuda', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('DEA')
    await expect(page.getByText('Transformando Fé em Caridade')).toBeVisible()
    await expect(page.getByTestId('hero-background-carousel')).toBeVisible()
  })

  test('projetos realizados', async ({ page }) => {
    await expect(page.getByText('Prova Rústica Tiradentes')).toBeVisible()
    await expect(page.getByText('Campanha do Agasalho')).toBeVisible()
  })

  test('citação e valores', async ({ page }) => {
    await expect(page.getByText('Santa Teresa de Calcutá')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Solidariedade' }),
    ).toBeVisible()
  })

  test('rodapé global presente', async ({ page }) => {
    await expect(page.getByTestId('site-footer')).toBeVisible()
  })
})
