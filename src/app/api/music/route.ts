import axios from "axios";
import { spotifyConfig } from "~/config";
import {
  SpotifyTrack,
  Top_Artists,
  Top_Tracks,
  recent_tracks_res,
} from "~/shared/types/music";
import { NextResponse } from "next/server";

const client_id = spotifyConfig.SPOTIFY_CLIENT_ID;
const client_secret = spotifyConfig.SPOTIFY_CLIENT_SECRET;
const refresh_token = spotifyConfig.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
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

async function getMusicInfo() {
  const { access_token } = await getAccessToken();
  console.log(access_token);
  const { data: current_data } = await axios.get<SpotifyTrack | null>(
    NOW_PLAYING_ENDPOINT,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  console.log(`current_data`, current_data);
  if (!current_data) {
    return {
      current_playing: {
        item: {
          name: "",
          album: {
            name: "",
            images: [],
          },
          external_urls: "",
          images: [],
        },
        artists: [],
        is_playing: false,
      },
      top_tracks: {
        items: [],
      },
      top_artists: {
        items: [],
      },
      recently_played: {
        items: [],
      },
    };
  }
  const current_playing = {
    item: {
      name: current_data.item.name,
      album: {
        name: current_data.item.album.name,
        images: current_data.item.album.images,
      },
      external_urls: current_data.item.external_urls,
      images: current_data.item.album.images.map((image) => {
        return {
          height: image.height,
          width: image.width,
          url: image.url,
        };
      }),
    },
    artists: current_data.item.artists.map((artist) => {
      return {
        name: artist.name,
        external_urls: artist.external_urls,
      };
    }),
    is_playing: current_data.is_playing,
  };
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
          followers: artist.followers.total,
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
  const recently_played = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as recent_tracks_res;
    if (!data.items) {
      return {
        items: [],
      };
    }
    const { items } = data;
    return {
      items: items.map((item) => {
        return {
          track: {
            artists: item.track.artists!.map((artist) => {
              return {
                external_urls: artist.external_urls,
                name: artist.name,
              };
            }),
            external_urls: item.track.external_urls,
            name: item.track.name,
            album: {
              name: item.track.album.name,
              external_urls: item.track.album.external_urls,
            },
            images: item.track.album.images!.map((image) => {
              return {
                height: image.height,
                width: image.width,
                url: image.url,
              };
            }),
          },
          played_at: item.played_at,
        };
      }),
    };
  });
  const data = {
    current_playing,
    top_tracks,
    top_artists,
    recently_played,
  };
  return data;
}

export async function GET(request: Request) {
  const data = await getMusicInfo();
  return NextResponse.json(data);
}
