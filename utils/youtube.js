import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
} from '@discordjs/voice'
import fetch from 'node-fetch'

import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YOUTUBE_URL,
  MESSAGE_NOT_FOUND,
} from '../constants'

export async function playYoutubeSong(voiceChannel, songUrl) {
  const player = createAudioPlayer()
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  })
  const stream = await play.stream(songUrl)
  const resource = createAudioResource(stream.stream, {
    inputType: stream.type,
  })

  player.play(resource)
  connection.subscribe(player)

  player.on('idle', () => {
    connection.destroy()
  })
}

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
    return MESSAGE_NOT_FOUND
  }
}
