import type { Browser, Page } from 'playwright'
import { chromium } from 'playwright'
import type { PreviewServer } from 'vite'
import { preview } from 'vite'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

let server: PreviewServer
let browser: Browser
let page: Page

describe('Testing the application', (): void => {
  beforeEach(async (): Promise<void> => {
    server = await preview({ preview: { port: 3000 } })
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  afterEach(async (): Promise<void> => {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()))
    })
  })

  test('LOGIN AND EDIT POST', async (): Promise<void> => {
    await page.goto('http://127.0.0.1:5173/')

    // Check the language
    await page
      .getByRole('button', { name: /^Cambiar al idioma inglés$/i })
      .isVisible()

    // Login
    await page.getByRole('button', { name: /^Iniciar Sesión$/i }).click()
    await page.getByPlaceholder(/^Correo Electrónico$/i).fill('test@correo.com')
    await page.getByPlaceholder(/^Contraseña$/i).fill('depruebas')
    await page.getByRole('button', { name: /^Entrar$/i }).click()

    // Checking if we are logged
    await page.getByText(/^Listado De Posts$/i, { exact: true }).isVisible()
    const pictureProfile: string | null = await page
      .getByRole('img', { name: /^Foto de perfil$/i })
      .getAttribute('src')
    await expect(pictureProfile).toMatch(/i.pravatar.cc/)

    // Accessing the post
    await page.getByRole('article', { name: /^qui est esse$/i }).isVisible()
    await page
      .getByRole('button', { name: /^Detalles de qui est esse$/i })
      .click()

    // Edit the post
    await page.getByRole('button', { name: /^Editar el Post$/i }).click()
    await page.getByPlaceholder(/^Título$/i).fill('Cambiando el título')
    await page
      .getByPlaceholder(/^Contenido$/i)
      .fill('Modificando el contenido del Post')
    await page.getByRole('button', { name: /^Guardar cambios$/i }).click()

    // Checking that changes have been saved
    const newTitle = await page.getByRole('heading', {
      name: /^Título del Post$/i,
    })
    await expect(await newTitle.innerText()).toMatch(/^Cambiando el título$/i)
    const newContent = await page.getByRole('heading', {
      name: /^Contenido del Post$/i,
    })
    await expect(await newContent.innerText()).toMatch(
      /^Modificando el contenido del Post$/i
    )
    await page.getByRole('button', { name: /^Cerrar Post$/i }).click()
  }, 60_000)

  test('LOGIN AND DELETE A POST', async (): Promise<void> => {
    await page.goto('http://127.0.0.1:5173/')

    // Check the language
    await page
      .getByRole('button', { name: /^Cambiar al idioma inglés$/i })
      .isVisible()

    // Login
    await page.getByRole('button', { name: /^Iniciar Sesión$/i }).click()
    await page.getByPlaceholder(/^Correo Electrónico$/i).fill('test@correo.com')
    await page.getByPlaceholder(/^Contraseña$/i).fill('depruebas')
    await page.getByRole('button', { name: /^Entrar$/i }).click()

    // Checking if we are logged
    await page.getByText(/^Listado De Posts$/i, { exact: true }).isVisible()
    const pictureProfile: string | null = await page
      .getByRole('img', { name: /^Foto de perfil$/i })
      .getAttribute('src')
    await expect(pictureProfile).toMatch(/i.pravatar.cc/)

    // Accessing the post
    const article = await page
      .getByRole('article', { name: /^qui est esse$/i })
      .isVisible()
    await page
      .getByRole('button', { name: /^Detalles de qui est esse$/i })
      .click()

    // Edit the post
    await page.getByRole('button', { name: /^Eliminar el Post$/i }).click()
  }, 60_000)
})
