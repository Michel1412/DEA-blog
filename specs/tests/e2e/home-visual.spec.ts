import { expect, test } from '@playwright/test'

test.describe('Home — regressão visual aprovada', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hero e fundo escuro', async ({ page }) => {
    await expect(page.locator('main')).toHaveClass(/bg-\[#0f0f12\]/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Grupo Deus É Amor')
    await expect(page.getByTestId('hero-background-carousel')).toBeVisible()
  })

  test('cards arredondados e destaque dourado', async ({ page }) => {
    const card = page.locator('.rounded-2xl').first()
    await expect(card).toBeVisible()
    await expect(page.getByText('Grupo Deus É Amor').first()).toBeVisible()
    await expect(page.getByText('Venha participar')).toBeVisible()
    await expect(page.locator('main')).not.toContainText('DEA Ajuda')
  })

  test('rodapé com logo, cruz e copyright', async ({ page }) => {
    const footer = page.getByTestId('site-footer')
    await expect(footer).toBeVisible()
    await expect(footer.getByAltText('Grupo Deus É Amor')).toBeVisible()
    await expect(footer.getByTestId('footer-copyright')).toContainText('Grupo Deus É Amor')
    await expect(footer.getByTestId('footer-easter-egg')).toContainText(
      'Ministério DEA Programadores',
    )
    await expect(footer.getByTestId('footer-pillars')).toContainText('Amizade')
  })
})
