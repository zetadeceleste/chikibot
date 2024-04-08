import { MESSAGE_ERROR } from '../constants/index.js'
import {
  getSpotifyAccess,
  getSpotifyPlaylist,
  searchYoutubeSong,
} from '../utils/index.js'

export async function play(args, message) {
  const playlistUrl = args[0]
  const playlistId = playlistUrl.split('playlist/')[1].split('?')[0]

  if (args.length === 0) {
    return 'Proporciona una URL válida de playlist de Spotify.'
  }

  if (!message.channel) {
    return 'Tenes que estar en un canal de voz para que funcione.'
  }

  try {
    await getSpotifyAccess()

    const data = await getSpotifyPlaylist(playlistId)
    const tracks = data.body.items

    for (const track of tracks) {
      const songName = track.track.name
      const artist = track.track.artists[0].name
      const query = `${songName} ${artist}`
      const youtubeURL = await searchYoutubeSong(query)

      if (youtubeURL) {
        await playSong(message.channel, youtubeURL)
        break
      }
    }
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    return MESSAGE_ERROR
  }
}
