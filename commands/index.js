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
  let msj = ''

  if (command === PLAY) {
    return play(arg, message)
  }

  switch (command) {
    case EMPANADA:
      msj = getEmpanada()
    case HOROSCOPE:
      msj = getHoroscope(arg)
    case PROBLEM:
      msj = getProblem()
    default:
      msj = MESSAGE_NOT_VALID
  }

  return message.channel.send(msj)
}
