import {
  MESSAGE_NOT_FOUND,
  MESSAGE_ERROR,
  HOROSCOPE_LIST,
} from '../constants/index.js'
import { getLaNacionHoroscope } from '../utils/index.js'

export async function getHoroscope(sign) {
  if (!sign) {
    return 'Debes especificar un signo del zodiaco. Ejemplo: `!horoscopo piscis`'
  }

  if (HOROSCOPE_LIST.indexOf(sign) === -1) {
    return 'Signo del zodiaco no válido.'
  }

  try {
    const horoscope = await getLaNacionHoroscope(sign)

    return `HOY ${sign.toUpperCase()}:\n${horoscope}`
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_NOT_FOUND
  }
}
