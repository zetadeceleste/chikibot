import { MESSAGE_NOT_FOUND, MESSAGE_ERROR } from '../constants'
import { getLaNacionHoroscope } from '../utils/la-nacion'

export async function getHoroscope(args) {
  const sign = args[0]

  if (sign) {
    try {
      const horoscope = await getLaNacionHoroscope(sign)
      return `HOY ${sign.toUpperCase}:\n${horoscope}`
    } catch (error) {
      console.error(MESSAGE_ERROR, error)
      return MESSAGE_NOT_FOUND
    }
  } else {
    return 'Debes especificar un signo del zodiaco. Ejemplo: `!horoscopo piscis`'
  }
}
