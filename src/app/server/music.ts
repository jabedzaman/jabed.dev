"use server";

import { spotifyConfig } from "~/config";
import { SpotifyTrack, Top_Artists, Top_Tracks } from "~/types/music";

const client_id = spotifyConfig.SPOTIFY_CLIENT_ID;
const client_secret = spotifyConfig.SPOTIFY_CLIENT_SECRET;
const refresh_token = spotifyConfig.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  return response.json();
};

export async function getMusicInfo() {
  const { access_token } = await getAccessToken();
  const current_playing = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as SpotifyTrack;
    return {
      item: {
        name: data.item.name,
        album: {
          name: data.item.album.name,
          images: data.item.album.images,
        },
        external_urls: data.item.external_urls,
        images: data.item.album.images.map((image) => {
          return {
            height: image.height,
            width: image.width,
            url: image.url,
          };
        }),
      },
      artists: data.item.artists.map((artist) => {
        return {
          name: artist.name,
          external_urls: artist.external_urls,
        };
      }),
      is_playing: data.is_playing,
    };
  });
  const top_tracks = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as {
      items: Top_Tracks[];
    };
    return {
      items: data.items.map((track) => {
        return {
          artists: track.artists.map((artist) => {
            return {
              external_urls: artist.external_urls,
              name: artist.name,
            };
          }),
          external_urls: track.external_urls,
          name: track.name,
          album: {
            name: track.album.name,
            external_urls: track.album.external_urls,
          },
          images: track.album.images.map((image) => {
            return {
              height: image.height,
              width: image.width,
              url: image.url,
            };
          }),
        };
      }),
    };
  });
  const top_artists = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as {
      items: Top_Artists[];
    };
    return {
      items: data.items.map((artist) => {
        return {
          external_urls: artist.external_urls,
          name: artist.name,
          images: artist.images.map((image) => {
            return {
              height: image.height,
              width: image.width,
              url: image.url,
            };
          }),
        };
      }),
    };
  });
  const data = {
    current_playing,
    top_tracks,
    top_artists,
  };
  return data;
}
