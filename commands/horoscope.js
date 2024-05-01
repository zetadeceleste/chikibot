import puppeteer from 'puppeteer'

import {
  MESSAGE_NOT_FOUND,
  MESSAGE_ERROR,
  HOROSCOPE_LIST,
  HOROSCOPE_URL,
} from '../constants/index.js'

export async function getHoroscope(sign) {
  if (!sign) {
    return 'Debes especificar un signo del zodiaco. Ejemplo: `!horoscopo piscis`'
  }

  if (HOROSCOPE_LIST.indexOf(sign) === -1) {
    return 'Signo del zodiaco no válido.'
  }

  try {
    const url = HOROSCOPE_URL + sign.toLowerCase()
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

    return `HOY ${sign.toUpperCase()}:\n${horoscope}`
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_NOT_FOUND
  }
}
