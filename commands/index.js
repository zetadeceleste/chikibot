import { getEmpanada } from './empanada.js'
import { getHoroscope } from './horoscope.js'
import { getProblem } from './problem.js'

import {
  EMPANADA,
  HOROSCOPE,
  PROBLEM,
  MESSAGE_NOT_VALID,
} from '../constants/index.js'

export async function receiveCommand(command, arg, message) {
  if (message.author.bot || !message.content.startsWith('!')) return null

  let msj = ''

  switch (command) {
    case EMPANADA:
      msj = getEmpanada()
      break
    case HOROSCOPE:
      msj = await getHoroscope(arg)
      break
    case PROBLEM:
      msj = getProblem()
      break
    default:
      msj = MESSAGE_NOT_VALID
      break
  }

  return message.channel.send(msj)
}
