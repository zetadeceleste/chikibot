import dotenv from 'dotenv'
dotenv.config()

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

export const LA_NACION_URL = 'https://www.lanacion.com.ar/horoscopo/'
export const LA_NACION_CLASSNAME = '.daily-horoscope-main .com-text.--twoxs'

export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
export const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN
export const SPOTIFY_URL_TOKEN = 'https://accounts.spotify.com/api/token'

export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
export const YOUTUBE_URL = 'https://www.youtube.com/watch?v='

export const MESSAGE_ERROR = 'Algo salió mal'
export const MESSAGE_NOT_FOUND = 'No se encontraron resultados.'
export const MESSAGE_NOT_VALID = 'Comando no válido.'
export const MESSAGE_READY = '¡Listo!'
export const MESSAGE_WARN = 'Advertencia'

export const EMPANADA = '!empanada'
export const HOROSCOPE = '!horoscopo'
export const PLAY = '!play'
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
