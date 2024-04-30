import { MESSAGE_ERROR } from '../constants/index.js'
import {
  getSpotifyAccess,
  getSpotifyPlaylist,
  searchYoutubeSong,
  playYoutubeSong,
} from '../utils/index.js'

export async function play(playlistUrl, message) {
  if (playlistUrl.length === 0) {
    return message.channel.send('Tenés que pasar una URL válida de Spotify.')
  }

  const voiceChannel = message.member.voice.channel

  if (!voiceChannel) {
    return message.channel.send(
      'Tenés que estar en un canal de voz para que funcione.'
    )
  }

  const playlistId = playlistUrl.split('playlist/')[1].split('?')[0]

  try {
    await getSpotifyAccess()

    const data = await getSpotifyPlaylist(playlistId)
    const tracks = data.body.items

    for (const track of tracks) {
      const songName = track.track.name
      const artist = track.track.artists[0].name
      const query = `${songName} ${artist}`
      const songUrl = await searchYoutubeSong(query)

      if (songUrl) {
        await playYoutubeSong(message, songUrl, songName, artist)
        break
      }
    }
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    message.channel.send('Hubo un error al intentar reproducir la playlist.')
  }
}
