import { EMPANADA_LIST } from '../constants/index.js'

export const getEmpanada = () => {
  const randomIndex = Math.floor(Math.random() * EMPANADA_LIST.length)

  return `Tenés cara de empanada ${EMPANADA_LIST[randomIndex]}.`
}
