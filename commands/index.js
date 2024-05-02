import { getEmpanada } from './empanada.js'
import { getHoroscope } from './horoscope.js'
import { getTarot } from './tarot.js'
import { getProblem } from './problem.js'

import {
  EMPANADA,
  HOROSCOPE,
  TAROT,
  PROBLEM,
  MESSAGE_NOT_VALID,
} from '../constants/index.js'

export async function receiveCommand(command, arg, message) {
  if (message.author.bot || !message.content.startsWith('!')) return null

  let msj = ''

  switch (command) {
    case EMPANADA:
      msj = handleCommandWithNoArgs(command, arg, getEmpanada)
      break
    case HOROSCOPE:
      msj = await handleCommandWithArg(command, arg, getHoroscope)
      break
    case TAROT:
      msj = await handleCommandWithNoArgs(command, arg, getTarot)
      break
    case PROBLEM:
      msj = handleCommandWithNoArgs(command, arg, getProblem)
      break
    default:
      msj = MESSAGE_NOT_VALID
      break
  }

  return message.channel.send(msj)
}

async function handleCommandWithNoArgs(command, arg, action) {
  if (arg) {
    return `El comando ${command} no acepta argumentos adicionales.`
  } else {
    return await action()
  }
}

async function handleCommandWithArg(command, arg, action) {
  if (!arg) {
    return `Debes proporcionar un argumento para ${command}.`
  } else {
    return await action(arg)
  }
}
