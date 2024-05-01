import {
  MESSAGE_ERROR,
  MESSAGE_NOT_FOUND,
  TAROT_API_URL,
} from '../constants/index.js'

export async function getTarot() {
  try {
    const url = `${TAROT_API_URL}random?n=3`
    const response = await fetch(url)
    const data = await response.json()

    return (
      'TUS 3 CARTAS DE HOY:' +
      data.cards
        .map((card) => {
          return `${card.name} - ${card.meaning_up}\nTrabajo: ${card.trabajo}\nAmor: ${card.amor}\nFinanzas: ${card.finanzas}\nSalud: ${card.salud}`
        })
        .join('\n')
    )
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_NOT_FOUND
  }
}
