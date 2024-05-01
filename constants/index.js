import dotenv from 'dotenv'
dotenv.config()

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

export const HOROSCOPE_URL = 'https://www.lanacion.com.ar/horoscopo/'
export const TAROT_API_URL = 'https://tarot-api-es.vercel.app/api/v1/'

export const MESSAGE_ERROR = 'Algo salió mal.'
export const MESSAGE_NOT_FOUND = 'No se encontraron resultados.'
export const MESSAGE_NOT_VALID = 'Comando no válido.'
export const MESSAGE_READY = '¡Chikibot listo!'
export const MESSAGE_WARN = 'Advertencia'

export const EMPANADA = '!empanada'
export const HOROSCOPE = '!horoscopo'
export const TAROT = '!tarot'
export const PROBLEM = '!problema'

export const EMPANADA_LIST = [
  'de carne cortada a cuchillo',
  'turca',
  'caprese',
  'de jamón y queso',
  'choclo',
  'de acelga',
  'de atún',
  'santiagueña',
  'salteña',
  'de carne',
  'de pollo',
  'de carne con pasas',
  'cuatro quesos',
  'de vigilia',
  'frita',
  'tucumana',
  'de camarón con queso',
  'de pino',
  'jujeña',
  'mendocina',
  'sanjuanina',
  'catamarqueña',
  'entrerriana',
  'de cebolla y mozzarella',
  'de chorizo',
  'de entraña',
  'de salchicha alemana con mostaza',
  'de hongos a la provenzal',
  'de humita',
  'de ananá',
  'de que te gusta comerte la empanada ;-)',
]

export const HOROSCOPE_LIST = [
  'aries',
  'tauro',
  'geminis',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'escorpio',
  'sagitario',
  'capricornio',
  'acuario',
  'piscis',
]
