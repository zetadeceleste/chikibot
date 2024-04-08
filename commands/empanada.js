import { EMPANADAS } from '../constants'

export function getEmpanada() {
  const randomIndex = Math.floor(Math.random() * EMPANADAS.length)

  return `Tenés cara de empanada ${EMPANADAS[randomIndex]}.`
}
