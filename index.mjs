import { Client, GatewayIntentBits } from 'discord.js'

import {
  MESSAGE_ERROR,
  MESSAGE_READY,
  MESSAGE_WARN,
  DISCORD_BOT_TOKEN,
} from './constants/index.js'

import { receiveCommand } from './commands/index.js'

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
  const msj = message.content.split(' ')
  const command = msj.shift()
  const arg = msj[0]

  try {
    await receiveCommand(command, arg, message)
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
  }
})

client.login(DISCORD_BOT_TOKEN)
