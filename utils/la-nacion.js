import puppeteer from 'puppeteer'

import { LA_NACION_URL, LA_NACION_CLASSNAME } from '../constants/index.js'

export async function getLaNacionHoroscope(sign) {
  const url = LA_NACION_URL + sign.toLowerCase()
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })

  const horoscope = await page.evaluate(() => {
    const secciones = Array.from(document.querySelectorAll(LA_NACION_CLASSNAME))
    return secciones
      .map((seccion) => {
        return seccion.innerText.trim()
      })
      .join('\n')
  })

  await browser.close()
  return horoscope
}
