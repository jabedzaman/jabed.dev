import querystring from "querystring";
import { NextResponse } from "next/server";

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
// const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    // body: URLSearchParams({
    //     grant_type: "refresh_token",
    //     refresh_token,
    // }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// export const getTopTracks = async () => {
//   const { access_token } = await getAccessToken();

//   return fetch(TOP_TRACKS_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

// export const getRecentlyPlayed = async () => {
//   const { access_token } = await getAccessToken();

//   return fetch(RECENTLY_PLAYED_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

export async function GET(req: Request) {
  const streamingRes = await getNowPlaying();
//   const topTracksRes = await getTopTracks();
//   const recentlyPlayedRes = await getRecentlyPlayed();

  if (streamingRes.status === 204 || streamingRes.status > 400) {
    return NextResponse.json({
      isPlaying: false,
      // topTracks: await topTracksRes.json(),
    //   recentlyPlayed: await recentlyPlayedRes.json(),
    });
  }

  const song = await streamingRes.json();
  const isPlaying = song?.is_playing;
  const title = song?.item?.name;
  const artist = song?.item?.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song?.item?.album?.name;
  const albumImageUrl = song?.item?.album?.images[0].url;
  const songUrl = song?.item?.external_urls?.spotify;

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
