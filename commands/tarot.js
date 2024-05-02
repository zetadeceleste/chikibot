import {
  MESSAGE_ERROR,
  MESSAGE_NOT_FOUND,
  TAROT_API_URL,
} from '../constants/index.js'

export async function getTarot() {
  try {
    const url = `${TAROT_API_URL}random?n=1`
    const response = await fetch(url)
    const data = await response.json()

    const card = data.cards[0]
    return (
      'TU CARTA DE HOY:\n' +
      `${card.name}\n\nAmor:\n${card.amor}\n\nFinanzas:\n${card.finanzas}\n\nSalud:\n${card.salud}\n\n`
    )
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_NOT_FOUND
  }
}
