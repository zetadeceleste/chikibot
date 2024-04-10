import { getEmpanada } from './empanada.js'
import { getHoroscope } from './horoscope.js'
import { getProblem } from './problem.js'
import { play } from './play.js'

import {
  EMPANADA,
  HOROSCOPE,
  PROBLEM,
  MESSAGE_NOT_VALID,
  PLAY,
} from '../constants/index.js'

export async function receiveCommand(command, arg, message) {
  if (message.author.bot || !message.content.startsWith('!')) return null

  if (command === PLAY) {
    return await play(arg, message)
  }

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

  // return message.channel.send(msj)
  console.log('msj', msj)
}
