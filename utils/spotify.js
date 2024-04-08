import fetch from 'node-fetch'
import SpotifyWebApi from 'spotify-web-api-node'

import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
  MESSAGE_ERROR,
  SPOTIFY_URL_TOKEN,
} from '../constants/index.js'

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: SPOTIFY_REFRESH_TOKEN,
})

const authOptions = {
  method: 'POST',
  headers: {
    Authorization:
      'Basic ' +
      Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
        'base64'
      ),
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  }),
}

export async function getSpotifyAccess() {
  try {
    const response = await fetch(SPOTIFY_URL_TOKEN, authOptions)
    const data = await response.json()

    if (!response.ok || !data.access_token) {
      console.error(MESSAGE_ERROR)
    }

    spotifyApi.setAccessToken(data?.access_token)
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    throw error
  }
}

export async function getSpotifyPlaylist(playlistId) {
  try {
    return await spotifyApi.getPlaylistTracks(playlistId)
  } catch (error) {
    console.error(MESSAGE_ERROR, error)
    throw error
  }
}
