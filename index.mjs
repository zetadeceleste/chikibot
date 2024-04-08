import { Client, GatewayIntentBits } from 'discord.js'

import {
  MESSAGE_ERROR,
  MESSAGE_READY,
  MESSAGE_WARN,
  MESSAGE_NOT_VALID,
  EMPANADA,
  HOROSCOPE,
  PLAY,
  PROBLEM,
  DISCORD_BOT_TOKEN,
} from './constants/index.js'

import {
  getEmpanada,
  getHoroscope,
  getProblem,
  play,
} from './commands/index.js'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('error', (error) => console.error(MESSAGE_ERROR, error))
client.on('warn', (warn) => console.warn(MESSAGE_WARN, warn))
client.once('ready', () => console.log(MESSAGE_READY))

client.on('messageCreate', async (message) => {
  const args = message.content.split(' ')
  const command = args.shift().toLowerCase()

  async function getMessage() {
    switch (command) {
      case EMPANADA:
        return getEmpanada()
      case HOROSCOPE:
        return getHoroscope(args)
      case PROBLEM:
        return getProblem()
      default:
        return MESSAGE_NOT_VALID
    }
  }

  if (command === PLAY) {
    return play(args, message)
  } else {
    return message.channel.send(await getMessage())
  }
})

client.login(DISCORD_BOT_TOKEN)
