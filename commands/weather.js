import {
  MESSAGE_ERROR,
  MESSAGE_NOT_FOUND,
  WEATHER_API_URL,
} from '../constants/index.js'

const getComment = (temp) => {
  if (temp <= 5) {
    return 'Ni salgas... quedate haciendo cucharita cucharón con la almohada.'
  } else if (temp >= 5 && temp <= 12) {
    return 'Está para mate y sopaipillasss.'
  } else if (temp >= 12 && temp <= 18) {
    return 'Hace chiflete...'
  } else if (temp >= 18 && temp <= 24) {
    return 'Está para un abriguito tranqui.'
  } else if (temp >= 24 && temp <= 30) {
    return 'Lindo día ;D'
  } else if (temp >= 30 && temp <= 35) {
    return 'Está para unas chelitas.'
  } else {
    return 'Está para asolearse el ano c*c'
  }
}

export async function getMendozaWeather() {
  try {
    const url = `${WEATHER_API_URL}forecast?q=Mendoza,AR&cnt=1&units=metric&appid=${process.env.WEATHER_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    const main = data?.list[0]?.main

    const textResponse =
      'TEMPERATURA PARA HOY (MENDOZA):\n' +
      `\nActual:\n° ${Math.floor(main?.temp)}\nSe siente como:\n° ${Math.floor(
        main?.feels_like
      )}\nMáxima pronósticada:\n° ${Math.floor(main?.temp_max)}`

    const comment = getComment(Math.floor(main?.temp))

    return `${textResponse}\n\n(${comment})`
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_NOT_FOUND
  }
}
