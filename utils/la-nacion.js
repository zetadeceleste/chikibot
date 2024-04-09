import puppeteer from 'puppeteer'

import { LA_NACION_URL } from '../constants/index.js'

export async function getLaNacionHoroscope(sign) {
  const url = LA_NACION_URL + sign.toLowerCase()
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url, { waitUntil: 'networkidle2' })

  const horoscope = await page.evaluate(() => {
    const secciones = Array.from(
      document.querySelectorAll('.daily-horoscope-main .com-text.--twoxs')
    )

    return secciones
      .map((seccion) => {
        return seccion.innerText.trim()
      })
      .join('\n')
  })

  await browser.close()

  return horoscope
}
