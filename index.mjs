import { Client, GatewayIntentBits } from 'discord.js'

import {
  NOT_VALID_MESSAGE,
  ERROR_MESSAGE,
  WARN_MESSAGE,
  READY_MESSAGE,
  DISCORD_BOT_TOKEN,
} from './config.js'
import { COMMAND_LIST } from './constants/index.js'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('error', (error) => console.error(ERROR_MESSAGE, error))
client.on('warn', (warn) => console.warn(WARN_MESSAGE, warn))
client.once('ready', () => console.log(READY_MESSAGE))

client.on('messageCreate', async (message) => {
  const args = message.content.split(' ')
  const command = args.shift().toLowerCase()

  async function getCommand() {
    switch (command) {
      case COMMAND_LIST.EMPANADA:
        return empanada()
      case COMMAND_LIST.HOROSCOPE:
        return horoscope(args)
      case COMMAND_LIST.PLAY:
        return play(args)
      case COMMAND_LIST.PROBLEM:
        return problem()
      default:
        return NOT_VALID_MESSAGE
    }
  }
})

client.login(DISCORD_BOT_TOKEN)
