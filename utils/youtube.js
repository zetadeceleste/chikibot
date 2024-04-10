import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  StreamType,
  entersState,
  VoiceConnectionStatus,
} from '@discordjs/voice'

import fetch from 'node-fetch'
// import ytdl from 'ytdl-core-discord'
import ytdl from 'ytdl-core'
import play from 'play-dl'
import opus from '@discordjs/opus'
import ffmpeg from 'ffmpeg-static'

import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YOUTUBE_URL,
  MESSAGE_NOT_FOUND,
  MESSAGE_ERROR,
} from '../constants/index.js'

export async function searchYoutubeSong(query) {
  const url = `${YOUTUBE_API_URL}?part=snippet&q=${encodeURIComponent(
    query
  )}&type=video&key=${YOUTUBE_API_KEY}`
  const response = await fetch(url)
  const data = await response.json()

  if (
    data.items &&
    data.items.length > 0 &&
    data.items[0].id &&
    data.items[0].id.videoId
  ) {
    return YOUTUBE_URL + data.items[0].id.videoId
  } else {
    console.log(MESSAGE_NOT_FOUND)
  }
}

export async function playYoutubeSong(message, songUrl, songName, artist) {
  const voiceChannel = message.member.voice.channel
  const subscriptions = new Map()
  let subscription = subscriptions.get(message.guildId)

  try {
    if (!subscription) {
      if (voiceChannel) {
        const connection = joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: voiceChannel.guild.id,
          adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        })

        const player = createAudioPlayer()
        connection.subscribe(player)

        subscriptions.set(message.guildId, { connection, player })
        subscription = subscriptions.get(message.guildId)
      }
    }

    if (subscription) {
      const stream = ytdl(songUrl, { filter: 'audioonly', format: 'audioonly' })
      const resource = createAudioResource(stream, {
        inputType: StreamType.Arbitrary,
      })
      subscription.player.play(resource)
      await message.channel.send(`Reproduciendo: ${songName} de ${artist}`)
    } else {
      await message.channel.send(
        'Necesitas estar en un canal de voz para reproducir música.'
      )
    }
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
  }
}
